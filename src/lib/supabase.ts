
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://rfhkdfpegtdxlejuxohg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmaGtkZnBlZ3RkeGxlanV4b2hnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5MjcwMjIsImV4cCI6MjAzMjUwMzAyMn0.11Huni87_ftn7PEorhtnuaBu2uAg-k7_lTbT8VvNkbY')