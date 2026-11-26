-- Version matches the migration applied through the authenticated MCP.
-- Machine-to-machine create-only capability; no service_role key in the LP.
create schema blog_private;
revoke all on schema blog_private from public, anon, authenticated;
create role blog_ingestion_writer nologin noinherit;
grant blog_ingestion_writer to postgres;
grant usage on schema public, blog_private to blog_ingestion_writer;

create table blog_private.ingestion_keys (
  key_hash text primary key check (key_hash ~ '^[a-f0-9]{64}$'),
  enabled boolean not null default true,
  created_at timestamptz not null default now()
);
create table blog_private.ingestion_requests (
  idempotency_key text primary key,
  request_hash text not null,
  response jsonb not null,
  created_at timestamptz not null default now()
);
create table blog_private.ingestion_rate (
  singleton boolean primary key default true check (singleton),
  window_start timestamptz not null,
  hits integer not null check (hits > 0)
);
revoke all on all tables in schema blog_private from public, anon, authenticated;
alter table blog_private.ingestion_keys enable row level security;
alter table blog_private.ingestion_requests enable row level security;
alter table blog_private.ingestion_rate enable row level security;
grant select on blog_private.ingestion_keys to blog_ingestion_writer;
grant select, insert on blog_private.ingestion_requests to blog_ingestion_writer;
grant select, insert, update on blog_private.ingestion_rate to blog_ingestion_writer;
create policy ingestion_key_lookup on blog_private.ingestion_keys
  for select to blog_ingestion_writer using (true);
create policy ingestion_request_lookup on blog_private.ingestion_requests
  for select to blog_ingestion_writer using (true);
create policy ingestion_request_insert on blog_private.ingestion_requests
  for insert to blog_ingestion_writer with check (true);
create policy ingestion_rate_access on blog_private.ingestion_rate
  for all to blog_ingestion_writer using (true) with check (true);

grant select, insert on public.blog_posts, public.blog_categories, public.blog_authors,
  public.blog_post_authors, public.blog_media to blog_ingestion_writer;
create policy ingestion_post_lookup on public.blog_posts
  for select to blog_ingestion_writer using (true);
create policy ingestion_post_insert on public.blog_posts
  for insert to blog_ingestion_writer with check (true);
create policy ingestion_category_lookup on public.blog_categories
  for select to blog_ingestion_writer using (true);
create policy ingestion_category_insert on public.blog_categories
  for insert to blog_ingestion_writer with check (true);
create policy ingestion_author_lookup on public.blog_authors
  for select to blog_ingestion_writer using (true);
create policy ingestion_author_insert on public.blog_authors
  for insert to blog_ingestion_writer with check (true);
create policy ingestion_post_author_lookup on public.blog_post_authors
  for select to blog_ingestion_writer using (true);
create policy ingestion_post_author_insert on public.blog_post_authors
  for insert to blog_ingestion_writer with check (true);
create policy ingestion_media_lookup on public.blog_media
  for select to blog_ingestion_writer using (true);
create policy ingestion_media_insert on public.blog_media
  for insert to blog_ingestion_writer with check (true);

create function blog_private.ingest_post(p_payload jsonb, p_idempotency_key text)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare
  secret text;
  request_hash text;
  previous blog_private.ingestion_requests%rowtype;
  category_id uuid;
  author_id uuid;
  post_id uuid;
  entry jsonb;
  index integer;
  published_at timestamptz;
  result jsonb;
  hit_count integer;
begin
  -- The caller is an anonymous machine, not a Supabase Auth user. Its separate
  -- server-only capability is mandatory before any private lookup/write.
  secret := coalesce(nullif(current_setting('request.headers', true), ''), '{}')::jsonb
    ->> 'x-blog-ingestion-key';
  if secret is null or length(secret) > 256 or not exists (
    select 1 from blog_private.ingestion_keys k
    where k.enabled and k.key_hash = encode(sha256(convert_to(secret, 'UTF8')), 'hex')
  ) then
    raise sqlstate 'PT401' using message = 'Invalid ingestion credential';
  end if;
  if p_idempotency_key is null or p_idempotency_key !~ '^[A-Za-z0-9][A-Za-z0-9._:-]{7,127}$'
    or jsonb_typeof(p_payload) is distinct from 'object'
    or octet_length(p_payload::text) > 1000000
    or jsonb_typeof(p_payload->'authors') is distinct from 'array'
    or jsonb_typeof(p_payload->'media') is distinct from 'array'
    or jsonb_typeof(p_payload->'tags') is distinct from 'array'
  then raise sqlstate 'PT422' using message = 'Invalid ingestion request'; end if;
  if jsonb_array_length(p_payload->'authors') not between 1 and 8
    or jsonb_array_length(p_payload->'media') > 32
    or jsonb_array_length(p_payload->'tags') > 30
    or coalesce(p_payload->>'status','') not in ('draft','published')
  then raise sqlstate 'PT422' using message = 'Invalid ingestion request'; end if;

  perform pg_advisory_xact_lock(hashtextextended('blog-ingestion:' || p_idempotency_key, 0));
  request_hash := encode(sha256(convert_to(p_payload::text, 'UTF8')), 'hex');
  select * into previous from blog_private.ingestion_requests r
    where r.idempotency_key = p_idempotency_key;
  if found then
    if previous.request_hash <> request_hash then
      raise sqlstate 'PT409' using message = 'Idempotency key payload mismatch';
    end if;
    return jsonb_build_object('post', previous.response, 'replayed', true);
  end if;

  insert into blog_private.ingestion_rate as rate (singleton, window_start, hits)
  values (true, date_trunc('minute', now()), 1)
  on conflict (singleton) do update set
    window_start = excluded.window_start,
    hits = case when rate.window_start = excluded.window_start then rate.hits + 1 else 1 end
  where rate.window_start <> excluded.window_start or rate.hits < 60
  returning hits into hit_count;
  if hit_count is null then raise sqlstate 'PT429' using message = 'Ingestion rate exceeded'; end if;

  insert into public.blog_categories (slug, name, description)
  values (p_payload#>>'{category,slug}', p_payload#>>'{category,name}', coalesce(p_payload#>>'{category,description}', ''))
  on conflict (slug) do nothing;
  select c.id into category_id from public.blog_categories c
    where c.slug = p_payload#>>'{category,slug}';
  published_at := nullif(p_payload->>'published_at', '')::timestamptz;
  if p_payload->>'status' = 'published' then published_at := coalesce(published_at, now()); end if;
  insert into public.blog_posts (
    slug, category_id, title, excerpt, body_markdown, status, published_at,
    tags, featured, featured_order, cover_image, cover_alt, seo
  ) values (
    p_payload->>'slug', category_id, p_payload->>'title', p_payload->>'excerpt',
    p_payload->>'body_markdown', p_payload->>'status', published_at,
    array(select jsonb_array_elements_text(p_payload->'tags')),
    coalesce((p_payload->>'featured')::boolean, false),
    coalesce((p_payload->>'featured_order')::integer, 0),
    p_payload->>'cover_image', p_payload->>'cover_alt', coalesce(p_payload->'seo', '{}'::jsonb)
  ) returning id into post_id;
  index := 0;
  for entry in select value from jsonb_array_elements(p_payload->'authors') loop
    insert into public.blog_authors (slug, name, role, kind, url, avatar_url)
    values (entry->>'slug', entry->>'name', entry->>'role', coalesce(entry->>'kind','person'), entry->>'url', entry->>'avatar')
    on conflict (slug) do nothing;
    select a.id into author_id from public.blog_authors a where a.slug = entry->>'slug';
    insert into public.blog_post_authors (post_id, author_id, position) values (post_id, author_id, index);
    index := index + 1;
  end loop;
  index := 0;
  for entry in select value from jsonb_array_elements(p_payload->'media') loop
    insert into public.blog_media (post_id, src, alt, width, height, caption, position)
    values (post_id, entry->>'src', entry->>'alt', (entry->>'width')::integer,
      (entry->>'height')::integer, entry->>'caption', index);
    index := index + 1;
  end loop;
  result := jsonb_build_object('id', post_id, 'slug', p_payload->>'slug',
    'status', p_payload->>'status', 'published_at', published_at);
  insert into blog_private.ingestion_requests (idempotency_key, request_hash, response)
    values (p_idempotency_key, request_hash, result);
  return jsonb_build_object('post', result, 'replayed', false);
exception when unique_violation then
  raise sqlstate 'PT409' using message = 'Slug already exists';
end;
$$;
-- The definer is deliberately a NOLOGIN create-only role, not postgres.
grant create on schema blog_private to blog_ingestion_writer;
alter function blog_private.ingest_post(jsonb, text) owner to blog_ingestion_writer;
revoke create on schema blog_private from blog_ingestion_writer;
revoke all on function blog_private.ingest_post(jsonb, text) from public, anon, authenticated;
grant usage on schema blog_private to anon;
grant execute on function blog_private.ingest_post(jsonb, text) to anon;

create function public.blog_ingest_post(p_payload jsonb, p_idempotency_key text)
returns jsonb language sql security invoker set search_path = '' as $$
  select blog_private.ingest_post(p_payload, p_idempotency_key);
$$;
revoke all on function public.blog_ingest_post(jsonb, text) from public, anon, authenticated;
grant execute on function public.blog_ingest_post(jsonb, text) to anon;
