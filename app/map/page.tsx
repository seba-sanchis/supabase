import { cookies } from "next/headers";
import { FaMapMarkedAlt } from "react-icons/fa";

import { Zone } from "@/types";
import { Map, Searchform } from "@/components";
import { getZones } from "@/lib/actions/database.actions";

export default async function Page() {
  const zones: Zone[] = await getZones();

  const cookieStore = cookies();

  const { value } = cookieStore.get("zone") || {
    value: "{}",
  };

  const { value: search } = cookieStore.get("search") || {
    value: "",
  };

  const zone: Zone = JSON.parse(value);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center w-full">
        <div className="flex items-center justify-center py-16 w-full border-b border-[--border-1] bg-[--background-0]">
          <div className="flex justify-between w-full max-w-screen-lg">
            <div className="flex flex-col gap-8">
              <div className="flex gap-8">
                <div className="flex items-center justify-center size-20 text-[--foreground-2] group-hover/submenu:text-[--foreground-1] rounded-xl bg-[--background-3]">
                  <FaMapMarkedAlt size={48} />
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-3xl">Mapa</h1>
                  <p className="text-[--foreground-2]">
                    Ubicación de NPCs y Recursos
                  </p>
                </div>
              </div>

              <Searchform />
            </div>
            {Object.keys(zone).length > 0 && (
              <div className="flex flex-col gap-4 p-8 w-full max-w-96 h-64 -mb-40 rounded-lg border border-[--border-1] bg-[--background-1] overflow-scroll">
                <div className="text-xl">
                  {zone.name} ({zone.id})
                </div>
                <div className="flex flex-col gap-2 text-2xl text-[--foreground-2]">
                  {zone.npc_zone?.map((item) => (
                    <div
                      key={item.npc.id}
                      className="flex justify-between text-sm"
                    >
                      <span>{item.npc.name}</span>
                      <span>{item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <Map zones={zones} zone={zone} search={search} />
      </div>
    </div>
  );
}
