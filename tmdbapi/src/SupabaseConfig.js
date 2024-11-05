// url, apikey 설정

import {createClient} from "@supabase/supabase-js";

const supabaseUrl = 'https://esdyrruiosxbvfhbuzbt.supabase.co'
const sypabaseAPIKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzZHlycnVpb3N4YnZmaGJ1emJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxOTE3MDEsImV4cCI6MjA0NTc2NzcwMX0.6JXrOg_4wOWYyFr0mPMSu3UmkDL4fA8jId7JFYBy9SA'

const supabase = createClient(supabaseUrl, sypabaseAPIKey)

export default supabase;