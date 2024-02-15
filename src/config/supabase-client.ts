import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://kbamtwijgtbpydquzcnd.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtiYW10d2lqZ3RicHlkcXV6Y25kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0NzQ4NDUsImV4cCI6MjAyMzA1MDg0NX0.1_5MVCZ8qg_2fcuSuwJTehh-l6ft3Sb8TBKpHh3X1I8"
);
