-- Run as the project administrator. Every fixture is rolled back.
begin;

insert into public.blog_categories (slug, name)
values ('rls-verification-category', 'Verificação RLS');
insert into public.blog_authors (slug, name)
values ('rls-verification-public', 'Autor público de teste'),
       ('rls-verification-private', 'Autor privado de teste');

insert into public.blog_posts
  (slug, category_id, title, excerpt, body_markdown, status, published_at)
select 'rls-verification-' || sample.kind, category.id,
  'Verificação RLS', 'Fixture transacional', '## Conteúdo de teste',
  sample.status, sample.published_at
from public.blog_categories category
cross join (values
  ('published', 'published', now() - interval '1 day'),
  ('draft', 'draft', now() - interval '1 day'),
  ('scheduled', 'published', now() + interval '1 day'),
  ('archived', 'archived', now() - interval '1 day')
) sample(kind, status, published_at)
where category.slug = 'rls-verification-category';

insert into public.blog_post_authors (post_id, author_id)
select p.id, a.id from public.blog_posts p
join public.blog_authors a on a.slug = case
  when p.slug = 'rls-verification-published' then 'rls-verification-public'
  else 'rls-verification-private' end
where p.slug like 'rls-verification-%';

insert into public.blog_media (post_id, src, alt, width, height)
select id, '/images/blog/rls-verification.png', 'Fixture transacional', 1200, 675
from public.blog_posts where slug like 'rls-verification-%';

set local role anon;
do $$
begin
  if (select count(*) from public.blog_posts where slug like 'rls-verification-%') <> 1
    then raise exception 'RLS anon: artigos privados visíveis ou publicado ausente'; end if;
  if (select count(*) from public.blog_authors where slug like 'rls-verification-%') <> 1
    then raise exception 'RLS anon: autoria privada visível'; end if;
  if (select count(*) from public.blog_post_authors pa
      join public.blog_posts p on p.id = pa.post_id where p.slug like 'rls-verification-%') <> 1
    then raise exception 'RLS anon: vínculos privados visíveis'; end if;
  if (select count(*) from public.blog_media where src = '/images/blog/rls-verification.png') <> 1
    then raise exception 'RLS anon: mídias privadas visíveis'; end if;
end;
$$;
reset role;

set local role authenticated;
do $$
begin
  if (select count(*) from public.blog_posts where slug like 'rls-verification-%') <> 1
    then raise exception 'RLS authenticated: artigos privados visíveis'; end if;
  if (select count(*) from public.blog_authors where slug like 'rls-verification-%') <> 1
    then raise exception 'RLS authenticated: autoria privada visível'; end if;
  if (select count(*) from public.blog_media where src = '/images/blog/rls-verification.png') <> 1
    then raise exception 'RLS authenticated: mídias privadas visíveis'; end if;
end;
$$;
reset role;

do $$
declare t text; r text;
begin
  foreach t in array array['blog_posts','blog_categories','blog_authors','blog_post_authors','blog_media'] loop
    foreach r in array array['anon','authenticated'] loop
      if has_table_privilege(r, 'public.' || t, 'INSERT')
        or has_table_privilege(r, 'public.' || t, 'UPDATE')
        or has_table_privilege(r, 'public.' || t, 'DELETE')
        or has_table_privilege(r, 'public.' || t, 'TRUNCATE')
      then raise exception 'Escrita indevida: % em %', r, t; end if;
    end loop;
  end loop;
end;
$$;

rollback;
