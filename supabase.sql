-- Create a table for Public Profiles
create table invoices (
  id uuid references auth.users not null,
  updated_at timestamp with time zone,
  invoiceno text,
  fromname text,
  fromemail text,
  fromaddress text,
  fromphone text,
  frombusinessnumber text,
  toname text,
  toemail text,
  toaddress text,
  tophone text,

  primary key (id)
);

alter table invoices
  enable row level security;

-- Set up Realtime!
begin;
  drop publication if exists supabase_realtime;
  create publication supabase_realtime;
commit;
alter publication supabase_realtime
  add table invoices;