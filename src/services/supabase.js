import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xlqetyyjvlzeedgrfzpt.supabase.co/rest/v1/";
const supabaseKey = "sb_publishable_pRt6jTFxddlEqvwToCr8Rg_dyITNN7f";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);