-- Administrative execution. Only transaction-local credentials and fixtures.
begin;
insert into blog_private.ingestion_keys (key_hash)
values (encode(sha256(convert_to('transaction-only-blog-ingestion-test-key-2026', 'UTF8')), 'hex'));
set local request.headers = '{"x-blog-ingestion-key":"transaction-only-blog-ingestion-test-key-2026"}';
set local role anon;
do $$
declare payload jsonb; first_result jsonb; second_result jsonb;
begin
  payload := '{
    "slug":"ingestion-transaction-verification","title":"Verificação transacional",
    "excerpt":"Fixture com rollback","body_markdown":"## Teste","status":"draft",
    "category":{"slug":"ingestion-verification","name":"Verificação"},
    "authors":[{"slug":"ingestion-verification","name":"Autor de teste","kind":"organization"}],
    "media":[],"tags":[],"seo":{"noindex":true}
  }'::jsonb;
  first_result := public.blog_ingest_post(payload, 'ingestion-test-transaction-0001');
  second_result := public.blog_ingest_post(payload, 'ingestion-test-transaction-0001');
  if first_result->>'replayed' <> 'false' or second_result->>'replayed' <> 'true'
    or first_result->'post' <> second_result->'post'
    then raise exception 'Idempotency assertion failed'; end if;
  if exists (select 1 from public.blog_posts where slug = 'ingestion-transaction-verification')
    then raise exception 'Draft visible to anon'; end if;
  begin
    perform public.blog_ingest_post(payload || '{"title":"Outro conteúdo"}', 'ingestion-test-transaction-0001');
    raise exception 'Payload mismatch accepted';
  exception when sqlstate 'PT409' then null; end;
  begin
    perform public.blog_ingest_post(payload, 'ingestion-test-transaction-0002');
    raise exception 'Duplicate slug accepted';
  exception when sqlstate 'PT409' then null; end;

  -- Failure after inserting the post must roll back post, taxonomy and authors.
  begin
    perform public.blog_ingest_post(payload || '{
      "slug":"ingestion-rollback-verification",
      "category":{"slug":"ingestion-rollback-category","name":"Rollback"},
      "media":[{"src":"/test.png","alt":"Teste","width":-1,"height":1}]
    }', 'ingestion-test-transaction-0003');
    raise exception 'Invalid media accepted';
  exception when check_violation then null; end;
  first_result := public.blog_ingest_post(payload || '{
    "slug":"ingestion-public-verification","status":"published",
    "media":[{"src":"/test.png","alt":"Teste","width":1200,"height":675}]
  }', 'ingestion-test-transaction-0004');
  if first_result#>>'{post,published_at}' is null
    or not exists (select 1 from public.blog_posts where slug = 'ingestion-public-verification')
    then raise exception 'Publication not visible'; end if;

  perform set_config('request.headers', '{}', true);
  begin
    perform public.blog_ingest_post(payload, 'ingestion-test-transaction-0005');
    raise exception 'Missing credential accepted';
  exception when sqlstate 'PT401' then null; end;
end;
$$;
reset role;

do $$ begin
  if exists (select 1 from public.blog_posts where slug = 'ingestion-rollback-verification')
    or exists (select 1 from public.blog_categories where slug = 'ingestion-rollback-category')
    then raise exception 'Non-atomic write'; end if;
  if has_table_privilege('anon', 'blog_private.ingestion_keys', 'SELECT')
    or has_table_privilege('anon', 'public.blog_posts', 'INSERT')
    or has_table_privilege('blog_ingestion_writer', 'public.blog_posts', 'UPDATE')
    or has_table_privilege('blog_ingestion_writer', 'public.blog_posts', 'DELETE')
    then raise exception 'Privileges too broad'; end if;
end $$;

update blog_private.ingestion_rate set window_start = date_trunc('minute', now()), hits = 60;
set local request.headers = '{"x-blog-ingestion-key":"transaction-only-blog-ingestion-test-key-2026"}';
set local role anon;
do $$
declare payload jsonb; result jsonb;
begin
  payload := '{
    "slug":"ingestion-transaction-verification","title":"Verificação transacional",
    "excerpt":"Fixture com rollback","body_markdown":"## Teste","status":"draft",
    "category":{"slug":"ingestion-verification","name":"Verificação"},
    "authors":[{"slug":"ingestion-verification","name":"Autor de teste","kind":"organization"}],
    "media":[],"tags":[],"seo":{"noindex":true}
  }'::jsonb;
  result := public.blog_ingest_post(payload, 'ingestion-test-transaction-0001');
  if result->>'replayed' <> 'true' then raise exception 'Replay was rate limited'; end if;
  begin
    perform public.blog_ingest_post(payload || '{"slug":"ingestion-rate-verification"}', 'ingestion-test-transaction-0006');
    raise exception 'Rate limit not enforced';
  exception when sqlstate 'PT429' then null; end;
end;
$$;
reset role;
rollback;
