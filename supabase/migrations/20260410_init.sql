create extension if not exists citext;
create extension if not exists pgcrypto;

create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid unique,
  email citext not null unique,
  full_name text,
  created_at timestamptz not null default now()
);

create table if not exists public.workspaces (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.users(id) on delete set null,
  name text not null,
  slug text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.workspace_members (
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  user_id uuid not null references public.users(id) on delete cascade,
  role text not null default 'member',
  created_at timestamptz not null default now(),
  primary key (workspace_id, user_id)
);

create table if not exists public.agents (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  name text not null,
  status text not null default 'draft',
  created_at timestamptz not null default now()
);

create table if not exists public.scenes (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  name text not null,
  kind text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.conversations (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  subject text not null,
  status text not null default 'preview',
  created_at timestamptz not null default now()
);

create table if not exists public.demo_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text not null,
  use_case text not null,
  timeline text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.waitlist_entries (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  interest text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.billing_plans (
  slug text primary key,
  name text not null,
  price text not null,
  seats text not null,
  description text not null,
  badge text,
  created_at timestamptz not null default now()
);

alter table public.demo_requests enable row level security;
alter table public.waitlist_entries enable row level security;

drop policy if exists "Anyone can insert demo requests" on public.demo_requests;
create policy "Anyone can insert demo requests"
on public.demo_requests
for insert
to anon, authenticated
with check (true);

drop policy if exists "Anyone can insert waitlist entries" on public.waitlist_entries;
create policy "Anyone can insert waitlist entries"
on public.waitlist_entries
for insert
to anon, authenticated
with check (true);
