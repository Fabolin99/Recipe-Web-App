import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_APP_URL;
const anon_key = process.env.SUPABASE_APP_KEY;


export const supabase = createClient(url, anon_key);
  