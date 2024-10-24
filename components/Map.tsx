"use client";

import { setZone } from "@/lib/actions/store.actions";
import { Zone } from "@/types";

type Props = {
  zones: Zone[];
  zone: Zone;
  search: string;
};

export default function Map({ zones, zone, search }: Props) {
  async function handleClick(value: Zone) {
    await setZone(value);
  }

  return (
    <div className="grid grid-cols-[repeat(19,minmax(0,1fr))] gap-2 py-20 w-full max-w-screen-lg">
      {zones.map((item) => {
        // Convert search to lowercase for case-insensitive search
        const searchLower = search.toLowerCase();

        // Check if the zone name or any npc name includes the search term
        const matchesSearch =
          item?.name.toLowerCase().includes(searchLower) ||
          item?.npc_zone?.some((npcZone) =>
            npcZone.npc.name.toLowerCase().includes(searchLower)
          );
        return (
          <button
            key={item.id}
            onClick={() => handleClick(item)}
            className={`flex items-center justify-center flex-1 aspect-[1/1] text-sm rounded-lg transition duration-200 border p-2 ${
              !matchesSearch && "opacity-50"
            } ${
              item.name.includes("Altamar")
                ? `${
                    item.id === zone.id
                      ? "border-[--cyan-1] bg-[--cyan-3]"
                      : "border-[--cyan-2] bg-[--cyan-1] hover:border-[--cyan-1] hover:bg-[--cyan-3]"
                  }`
                : item.name.includes("Mar")
                ? `${
                    item.id === zone.id
                      ? "border-[--sky-1] bg-[--sky-3]"
                      : "border-[--sky-2] bg-[--sky-1] hover:border-[--sky-1] hover:bg-[--sky-3]"
                  }`
                : item.name.includes("helada") || item.name.includes("helado")
                ? `${
                    item.id === zone.id
                      ? "border-[--slate-1] bg-[--slate-3]"
                      : "border-[--slate-2] bg-[--slate-1] hover:border-[--slate-1] hover:bg-[--slate-3]"
                  }`
                : item.name.includes("Desierto") ||
                  item.name.includes("desértica")
                ? `${
                    item.id === zone.id
                      ? "border-[--amber-1] bg-[--amber-3]"
                      : "border-[--amber-2] bg-[--amber-1] hover:border-[--amber-1] hover:bg-[--amber-3]"
                  }`
                : item.name.includes("Bosque") ||
                  item.name.includes("Costa") ||
                  item.name.includes("Suburbio")
                ? `${
                    item.id === zone.id
                      ? "border-[--lime-1] bg-[--lime-3]"
                      : "border-[--lime-2] bg-[--lime-1] hover:border-[--lime-1] hover:bg-[--lime-3]"
                  }`
                : item.name.includes("Arkhein")
                ? `${
                    item.id === zone.id
                      ? "border-[--rose-1] bg-[--rose-3]"
                      : "border-[--rose-2] bg-[--rose-1] hover:border-[--rose-1] hover:bg-[--rose-3]"
                  }`
                : item.name.includes("Banderbill")
                ? `${
                    item.id === zone.id
                      ? "border-[--blue-1] bg-[--blue-3]"
                      : "border-[--blue-2] bg-[--blue-1] hover:border-[--blue-1] hover:bg-[--blue-3]"
                  }`
                : item.name.includes("Aldea") ||
                  item.name.includes("Altar") ||
                  item.name.includes("Bahía") ||
                  item.name.includes("Camino") ||
                  item.name.includes("Cementerio") ||
                  item.name.includes("Ciénaga") ||
                  item.name.includes("Excavación") ||
                  item.name.includes("Fuerte") ||
                  item.name.includes("Golfo") ||
                  item.name.includes("Guarida") ||
                  item.name.includes("Isla") ||
                  item.name.includes("Monte") ||
                  item.name.includes("Pantano") ||
                  item.name.includes("Península") ||
                  item.name.includes("Puerto") ||
                  item.name.includes("Sendero")
                ? `${
                    item.id === zone.id
                      ? "border-[--teal-1] bg-[--teal-3]"
                      : "border-[--teal-2] bg-[--teal-1] hover:border-[--teal-1] hover:bg-[--teal-3]"
                  }`
                : item.name.includes("Arghal") ||
                  item.name.includes("Ciudad Abandonada") ||
                  item.name.includes("Eleusis") ||
                  item.name.includes("Eldoria") ||
                  item.name.includes("Eleuria") ||
                  item.name.includes("Forgat") ||
                  item.name.includes("Lindos") ||
                  item.name.includes("Nix") ||
                  item.name.includes("Nueva Esperanza") ||
                  item.name.includes("Penthar") ||
                  item.name.includes("Ullathorpe")
                ? `${
                    item.id === zone.id
                      ? "border-[--purple-1] bg-[--purple-3]"
                      : "border-[--purple-2] bg-[--purple-1] hover:border-[--purple-1] hover:bg-[--purple-3]"
                  }`
                : `${
                    item.id === zone.id
                      ? "border-[--border-3]"
                      : "border-[--border-1] hover:border-[--border-3]"
                  }`
            }`}
          >
            {item.id}
          </button>
        );
      })}
    </div>
  );
}
