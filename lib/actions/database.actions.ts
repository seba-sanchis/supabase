"use server";

import { createClient } from "../supabase/server";

export default async function getSearch(query: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("entities")
    .select()
    .textSearch("name", query);

  if (error) throw error;

  return data;
}
