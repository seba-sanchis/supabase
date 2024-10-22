import { Zone } from "@/types";
import { getZones } from "@/lib/actions/database.actions";
import { FaMapMarkedAlt } from "react-icons/fa";

export default async function Page() {
  const zones: Zone[] = await getZones();

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center w-full">
        <div className="flex items-center justify-center py-16 w-full border-b border-[--border-1] bg-[--background-0]">
          <div className="flex justify-between w-full max-w-screen-xl">
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
            <div className="p-8 rounded-lg border border-[--border-1] bg-[--background-1]"></div>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(19,minmax(0,1fr))] gap-2 py-20 w-full max-w-screen-xl">
          {zones.map((item) => (
            <button
              key={item.id}
              className={`flex items-center justify-center flex-1 aspect-[1/1] text-sm rounded-lg transition duration-200 border p-2 ${
                item.name.includes("Altamar")
                  ? "border-[--cyan-2] bg-[--cyan-1] hover:border-[--cyan-1] hover:bg-[--cyan-3]"
                  : item.name.includes("Mar")
                  ? "border-[--sky-2] bg-[--sky-1] hover:border-[--sky-1] hover:bg-[--sky-3]"
                  : item.name.includes("helada") || item.name.includes("helado")
                  ? "border-[--slate-2] bg-[--slate-1] hover:border-[--slate-1] hover:bg-[--slate-3]"
                  : item.name.includes("Desierto") ||
                    item.name.includes("desértica")
                  ? "border-[--amber-2] bg-[--amber-1] hover:border-[--amber-1] hover:bg-[--amber-3]"
                  : item.name.includes("Bosque") || item.name.includes("Costa")
                  ? "border-[--lime-2] bg-[--lime-1] hover:border-[--lime-1] hover:bg-[--lime-3]"
                  : item.name.includes("Arkhein")
                  ? "border-[--rose-2] bg-[--rose-1] hover:border-[--rose-1] hover:bg-[--rose-3]"
                  : item.name.includes("Banderbill")
                  ? "border-[--blue-2] bg-[--blue-1] hover:border-[--blue-1] hover:bg-[--blue-3]"
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
                  ? "border-[--teal-2] bg-[--teal-1] hover:border-[--teal-1] hover:bg-[--teal-3]"
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
                  ? "border-[--purple-2] bg-[--purple-1] hover:border-[--purple-1] hover:bg-[--purple-3]"
                  : "border-[--border-1] hover:border-[--border-3]"
              }`}
            >
              {item.id}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
