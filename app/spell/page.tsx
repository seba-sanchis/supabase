import { cookies } from "next/headers";

import { Spell } from "@/types";
import { Choicebox, SpellTable } from "@/components";
import { getSpells } from "@/lib/actions/database.actions";

const tabs = [
  "Todos",
  "Asesino",
  "Bandido",
  "Bardo",
  "Clérigo",
  "Druida",
  "Guerrero",
  "Mago",
  "Paladín",
];

export default async function Page() {
  const spells: Spell[] = await getSpells();
  const cookieStore = cookies();

  const { value: selectedClass } = cookieStore.get("class") || {
    value: "todos",
  };

  // Filter the spells array based on the selected class
  const filteredSpells =
    selectedClass === "todos"
      ? spells
      : spells.filter((spell) =>
          spell.class_spell?.some(
            (classEntry) =>
              classEntry.class.name.toLowerCase() ===
              selectedClass.toLowerCase()
          )
        );

  return (
    <div className="flex flex-col items-center py-16">
      <div className="flex flex-col gap-4 p-4 w-full max-w-screen-lg rounded-xl border border-[--border-1] bg-[--background-2]">
        <Choicebox tabs={tabs} value={selectedClass} />

        <SpellTable value={filteredSpells} />
      </div>
    </div>
  );
}
