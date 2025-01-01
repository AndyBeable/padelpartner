import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://jvwawzedxnkpvtbbdloo.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2d2F3emVkeG5rcHZ0YmJkbG9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5OTEzODMsImV4cCI6MjAzMjU2NzM4M30.Fl0AWyKITpCa9qCOL5XSRiBmWSkfXrFH1PVJ3gCVG9Y'
)
