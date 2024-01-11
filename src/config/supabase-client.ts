import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://kbamtwijgtbpydquzcnd.supabase.co/', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtiYW10d2lqZ3RicHlkcXV6Y25kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5NjUyODAsImV4cCI6MjAyMDU0MTI4MH0.0bUtr92yi753dWP1TfCtfLDB1gFSfsDy0khWsR2GnzA')