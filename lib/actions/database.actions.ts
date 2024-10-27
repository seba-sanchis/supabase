"use server";

import { createClient } from "../supabase/server";
import { Spell } from "@/types";

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
    .select(
      `
      *,
      class_spell (
        class (
          id,
          name
        )
      ),
      npc_spell (
        npc (
          id,
          name
        )
      )
    `
    )
    .order("magic", { ascending: true });

  if (error) throw error;

  // Sort NPCs by name & extract unique NPC names
  const sortedData = data?.map((spell: Spell) => {
    // Extract NPC names before the `<`, remove duplicates, and sort by name
    const npcNames = spell.npc_spell.map(
      (entry) => entry.npc.name.split(" <")[0]
    );

    // Include cleaned, unique, and sorted NPC names
    const uniqueNpcNames = npcNames
      .filter((name, index, self) => self.indexOf(name) === index)
      .sort((a, b) => a.localeCompare(b));

    return {
      ...spell,
      npc_name: uniqueNpcNames,
    };
  });

  return sortedData;
}

export async function getNPCs() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("npc")
    .select(
      `
      *,
      npc_zone (
        quantity,
        zone (
          id,
          name
        )
      ),
      item_npc (
        item (
          id,
          name
        )
      )
    `
    )
    .order("health", { ascending: true });

  if (error) throw error;

  return data;
}

export async function getZones() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("zone")
    .select(
      `
      *,
      npc_zone (
        quantity,
        npc (
          id,
          name
        )
      )
    `
    )
    .order("position", { ascending: true });

  if (error) throw error;

  return data;
}
