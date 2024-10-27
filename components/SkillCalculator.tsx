"use client";

import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { Skill } from "@/types";
import { Input } from "@/components";
import {
  setSkill,
  setSkillDown,
  setSkills,
  setSkillUp,
} from "@/lib/actions/store.actions";



type Props = {
  skill: Skill[];
  availablePoints: number;
  naturalPoints: number;
};

export default function SkillCalculator({
  skill,
  availablePoints,
  naturalPoints,
}: Props) {
  const [debounce, setDebounce] = useState<NodeJS.Timeout>();
  const [value, setValue] = useState("");

  useEffect(() => {
    async function addSkills() {
      if (skill.length <= 0) {
        await setSkills();
      }
    }

    addSkills();
  }, []);

  // Helper function to get total points with natural points added, excluding "navegación" and "liderazgo"
  function getTotalPoints(skillName: string, skillValue: number) {
    const excludedSkills = ["navegación", "liderazgo"];
    return excludedSkills.includes(skillName.toLowerCase())
      ? skillValue.toString()
      : (skillValue + naturalPoints).toString();
  }

  // async function handleChange(
  //   skillName: string,
  //   e: React.ChangeEvent<HTMLInputElement>
  // ) {
  //   const newValue = e.target.value;
  //   // Clear the previous timeout if the user types within the 4 seconds
  //   if (debounce) {
  //     clearTimeout(debounce);
  //   }
  //   // Set a new timeout to trigger the search after 4 seconds
  //   const newTimeout = setTimeout(async () => {
  //     if (newValue.trim()) {
  //       await setSkill(skillName, newValue);
  //     }
  //   }, 400);
  //   // Save the timeout so we can clear it if needed
  //   setDebounce(newTimeout);
  // }

  return (
    <div className="flex flex-col gap-2 py-20 w-full max-w-screen-lg">
      <div className="grid grid-cols-2 gap-12 w-full">
        {skill.map((skill) => (
          <div
            key={skill.title.toLowerCase()}
            className="flex flex-col items-center gap-4"
          >
            <div className="text-sm">{skill.title}</div>
            {skill.group.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col gap-2 pb-4 w-full ${
                  index !== skill.group.length - 1
                    ? "border-b border-[--border-1]"
                    : ""
                }`}
              >
                {item.category.map((subitem) => (
                  <div
                    key={subitem.name.toLocaleLowerCase()}
                    className="flex items-center"
                  >
                    <span className="flex text-sm text-[--foreground-2] flex-1">
                      {subitem.name}
                    </span>
                    <span className="max-w-32">
                      <Input
                        name="level"
                        defaultValue={getTotalPoints(
                          subitem.name,
                          subitem.value
                        )}
                        preffix={<FaChevronDown size={14} />}
                        suffix={<FaChevronUp size={14} />}
                        outline
                        preffixAction={() => setSkillDown(subitem.name)}
                        suffixAction={() =>
                          setSkillUp(subitem.name, availablePoints)
                        }
                      />
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
