create table if not exists public.presentations (
  id uuid primary key default gen_random_uuid(),
  book_id text not null,
  title_it text not null,
  title_en text not null,
  event_date date not null,
  time text not null,
  location_it text not null,
  location_en text not null,
  city text not null,
  description_it text not null,
  description_en text not null,
  link text,
  image_url text,
  created_at timestamptz not null default now()
);

alter table public.presentations enable row level security;

create policy "Presentations are public to read"
  on public.presentations for select
  using (true);

create policy "Authenticated admins can insert presentations"
  on public.presentations for insert
  to authenticated
  with check (true);

create policy "Authenticated admins can update presentations"
  on public.presentations for update
  to authenticated
  using (true)
  with check (true);

create policy "Authenticated admins can delete presentations"
  on public.presentations for delete
  to authenticated
  using (true);

insert into storage.buckets (id, name, public)
values ('presentation-images', 'presentation-images', true)
on conflict (id) do nothing;

create policy "Presentation images are public to read"
  on storage.objects for select
  using (bucket_id = 'presentation-images');

create policy "Authenticated admins can upload presentation images"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'presentation-images');

create policy "Authenticated admins can update presentation images"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'presentation-images')
  with check (bucket_id = 'presentation-images');
