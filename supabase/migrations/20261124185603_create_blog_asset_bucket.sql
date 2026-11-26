-- Version matches the migration applied through the authenticated MCP.
-- Public editorial assets only. Draft/private material must not be uploaded here.
-- Upload/update/delete remain administrative; no visitor write policies.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'blog-assets', 'blog-assets', true, 10485760,
  array['image/png', 'image/jpeg', 'image/webp', 'image/avif', 'image/gif']
);
