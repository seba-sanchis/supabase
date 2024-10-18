"use client";

import { setSpell } from "@/lib/actions/store.actions";

type Props = {
  tabs: string[];
  value: string;
};

export default function Choicebox({ tabs, value }: Props) {
  async function handleClick(value: string) {
    await setSpell(value);
  }

  return (
    <div className="flex gap-2">
      {tabs.map((item) => (
        <button
          key={item}
          onClick={() => handleClick(item.toLocaleLowerCase())}
          className={`flex justify-center flex-1 text-sm rounded-lg transition duration-200 ${
            value === item.toLocaleLowerCase()
              ? "border-2 p-[7px] border-[--border-3] text-[--foreground-1]"
              : "border p-2 border-[--border-1] text-[--foreground-2] hover:border-[--border-3]"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
