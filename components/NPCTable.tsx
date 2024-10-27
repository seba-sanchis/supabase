import Link from "next/link";

import { NPC } from "@/types";

type Props = {
  value: NPC[];
};

export default function NPCTable({ value }: Props) {
  const head = [
    "Nombre",
    "Drop",
    "Daño Mínimo",
    "Daño Máximo",
    "Vida",
    "Experiencia",
    "Exp / Vida",
    "Oro",
  ];

  return (
    <table className="table table-auto w-full overflow-hidden rounded-b text-xs">
      <thead>
        <tr>
          {head.map((item, index) => (
            <th
              key={index}
              className={`p-3 font-medium truncate ${
                index === 2 || index === 3 || index === 4 || index === 5
                  ? "text-right"
                  : "text-left"
              }`}
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {value.map((npc, index) => (
          <tr key={index} className="rounded-lg odd:bg-[--background-3]">
            <td className="p-3 w-[300px]">
              <div>{npc.name}</div>
              <div className="text-[--foreground-2]">
                {npc.npc_zone.map((item, index) => (
                  <span key={index}>
                    {item.zone.id}
                    {index < npc.npc_zone.length - 1 && ", "}
                  </span>
                ))}
              </div>
            </td>
            <td className="p-3">
              {npc.item_npc.map((itemEntry, index) => (
                <span key={index}>
                  {itemEntry.item.name}
                  {index < npc.item_npc.length - 1 && ", "}
                </span>
              ))}
            </td>
            <td className="p-3 text-right">{npc.min_damage}</td>
            <td className="p-3 text-right">{npc.max_damage}</td>
            <td className="p-3 text-right">{npc.health}</td>
            <td className="p-3 text-right">{npc.experience}</td>
            <td className="p-3 text-right">
              {npc.health && (npc.experience / npc.health).toFixed(2)}
            </td>
            <td className="p-3 text-right">{npc.gold}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
