-- Version matches the migration applied through the authenticated MCP.
create table public.blog_categories (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  name text not null check (length(trim(name)) > 0),
  description text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.blog_authors (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  name text not null check (length(trim(name)) > 0),
  role text,
  kind text not null default 'person' check (kind in ('person', 'organization')),
  url text check (url is null or url ~ '^https://'),
  avatar_url text check (avatar_url is null or avatar_url ~ '^https://' or avatar_url ~ '^/[^/]'),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (
    slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'
    and slug not in ('category', 'page', 'search', 'feed', 'feed-xml')
  ),
  category_id uuid not null references public.blog_categories(id) on delete restrict,
  title text not null check (length(trim(title)) > 0),
  excerpt text not null check (length(trim(excerpt)) > 0),
  body_markdown text not null default '' check (octet_length(body_markdown) <= 1000000),
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  published_at timestamptz,
  lang text not null default 'pt-BR' check (lang = 'pt-BR'),
  tags text[] not null default '{}',
  featured boolean not null default false,
  featured_order integer not null default 0 check (featured_order >= 0),
  cover_image text check (cover_image is null or cover_image ~ '^https://' or cover_image ~ '^/[^/]'),
  cover_alt text,
  seo jsonb not null default '{}' check (jsonb_typeof(seo) = 'object'),
  is_demo boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint blog_publication_complete check (
    status <> 'published' or (published_at is not null and length(trim(body_markdown)) > 0)
  ),
  constraint blog_cover_accessible check (
    cover_image is null or length(trim(coalesce(cover_alt, ''))) > 0
  )
);

create table public.blog_post_authors (
  post_id uuid not null references public.blog_posts(id) on delete cascade,
  author_id uuid not null references public.blog_authors(id) on delete restrict,
  position integer not null default 0 check (position >= 0),
  primary key (post_id, author_id),
  unique (post_id, position)
);

create table public.blog_media (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.blog_posts(id) on delete cascade,
  src text not null check (src ~ '^https://' or src ~ '^/[^/]'),
  alt text not null check (length(trim(alt)) > 0),
  width integer not null check (width > 0),
  height integer not null check (height > 0),
  caption text,
  position integer not null default 0 check (position >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (post_id, src)
);

create index blog_posts_category_idx on public.blog_posts (category_id);
create index blog_posts_publication_idx on public.blog_posts (published_at desc, slug)
  where status = 'published';
create index blog_post_authors_author_idx on public.blog_post_authors (author_id, post_id);

create function public.blog_touch_updated_at()
returns trigger language plpgsql set search_path = '' as $$
begin
  new.updated_at = now();
  return new;
end;
$$;
revoke all on function public.blog_touch_updated_at() from public, anon, authenticated;

create trigger blog_categories_updated before update on public.blog_categories
  for each row execute function public.blog_touch_updated_at();
create trigger blog_authors_updated before update on public.blog_authors
  for each row execute function public.blog_touch_updated_at();
create trigger blog_posts_updated before update on public.blog_posts
  for each row execute function public.blog_touch_updated_at();
create trigger blog_media_updated before update on public.blog_media
  for each row execute function public.blog_touch_updated_at();

alter table public.blog_categories enable row level security;
alter table public.blog_authors enable row level security;
alter table public.blog_posts enable row level security;
alter table public.blog_post_authors enable row level security;
alter table public.blog_media enable row level security;

revoke all on public.blog_categories, public.blog_authors, public.blog_posts,
  public.blog_post_authors, public.blog_media from public, anon, authenticated;
grant select on public.blog_categories, public.blog_authors, public.blog_posts,
  public.blog_post_authors, public.blog_media to anon, authenticated;
grant all on public.blog_categories, public.blog_authors, public.blog_posts,
  public.blog_post_authors, public.blog_media to service_role;

create policy blog_posts_public_read on public.blog_posts
  for select to anon, authenticated
  using (status = 'published' and published_at <= now());

create policy blog_categories_public_read on public.blog_categories
  for select to anon, authenticated
  using (exists (
    select 1 from public.blog_posts p where p.category_id = blog_categories.id
      and p.status = 'published' and p.published_at <= now()
  ));

create policy blog_post_authors_public_read on public.blog_post_authors
  for select to anon, authenticated
  using (exists (
    select 1 from public.blog_posts p where p.id = blog_post_authors.post_id
      and p.status = 'published' and p.published_at <= now()
  ));

create policy blog_authors_public_read on public.blog_authors
  for select to anon, authenticated
  using (exists (
    select 1 from public.blog_post_authors pa
    join public.blog_posts p on p.id = pa.post_id
    where pa.author_id = blog_authors.id
      and p.status = 'published' and p.published_at <= now()
  ));

create policy blog_media_public_read on public.blog_media
  for select to anon, authenticated
  using (exists (
    select 1 from public.blog_posts p where p.id = blog_media.post_id
      and p.status = 'published' and p.published_at <= now()
  ));
