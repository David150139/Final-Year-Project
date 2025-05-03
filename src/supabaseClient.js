import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gdimauxyfillwhvrkujv.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkaW1hdXh5ZmlsbHdodnJrdWp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyOTM4OTIsImV4cCI6MjA2MTg2OTg5Mn0.0oRj6swtsuUaYrRX2Y5Sf326ifuxN5PbQUwopU4pcBw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
