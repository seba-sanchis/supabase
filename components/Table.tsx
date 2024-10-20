import { Spell } from "@/types";
import Link from "next/link";

type Props = {
  head: string[];
  value: Spell[];
};

export default function Table({ head, value }: Props) {
  return (
    <table className="table table-auto w-full overflow-hidden rounded-b text-xs">
      <thead>
        <tr>
          {head.map((item, index) => (
            <th
              key={index}
              className={`p-3 font-medium ${
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
        {value.map((item, index) => (
          <tr key={index} className="rounded-lg odd:bg-[--background-3]">
            <td className="p-3 w-[500px]">
              <div>
                {item.name} ({item.invocation})
              </div>
              <div className="text-[--foreground-2]">{item.description}</div>
            </td>
            <td className="p-3 text-left">
              {item.npc_names?.map((name, index) => (
                <span key={index}>
                  <Link
                    href={`/npc/${name.toLocaleLowerCase()}`}
                    className="hover:underline"
                  >
                    {name}
                  </Link>
                  {index < item.npc_names.length - 1 && ", "}
                </span>
              ))}
            </td>
            <td className="p-3 text-right">{item.magic}</td>
            <td className="p-3 text-right">{item.mana}</td>
            <td className="p-3 text-right">{item.stamina}</td>
            <td className="p-3 text-right">{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
