import { Spell } from "@/types";

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
            <th key={index} className="p-3 font-medium text-left">
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {value.map((item, index) => (
          <tr key={index} className="rounded-lg odd:bg-[--background-3]">
            <td className="p-3">
              <div>{item.name}</div>
              <div className="text-[--foreground-2]">{item.description}</div>
            </td>
            <td className="p-3">{item.invocation}</td>
            <td className="p-3 text-right">{item.min_damage}</td>
            <td className="p-3 text-right">{item.max_damage}</td>
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
