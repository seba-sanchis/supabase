"use server";

import { createClient } from "../supabase/server";

export async function getSearch(query: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("entities")
    .select()
    .textSearch("name", query);

  if (error) throw error;

  return data;
}

export async function getSpells() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("spell")
    .select()
    .order("magic", { ascending: true });

  if (error) throw error;

  return data;
}
