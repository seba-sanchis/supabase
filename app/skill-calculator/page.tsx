import { cookies } from "next/headers";
import { FaCalculator, FaStar } from "react-icons/fa";

import { Skill } from "@/types";
import { Input, SkillCalculator } from "@/components";
import { setLevel } from "@/lib/actions/store.actions";

export default async function Page() {
  const cookieStore = cookies();

  const { value } = cookieStore.get("skill") || { value: "[]" };

  const { value: level } = cookieStore.get("level") || { value: "" };

  const skill: Skill[] = JSON.parse(value);

  // Parse the level and ensure it's a number
  const parsedLevel = parseInt(level, 10) || 1;

  // Calculate earned points based on level
  const earnedPoints = 10 + (parsedLevel - 1) * 5;

  // Calculate the total of currently allocated points across all skills
  const allocatedPoints = skill.reduce(
    (acc, category) =>
      acc +
      category.group.reduce(
        (groupAcc, group) =>
          groupAcc +
          group.category.reduce((catAcc, skill) => catAcc + skill.value, 0),
        0
      ),
    0
  );

  const availablePoints = earnedPoints - allocatedPoints;

  // Check if the user level is at least 25 and has at least 70 points for navigation:
  const hasRequiredNavigationSkill = skill.some((category) =>
    category.group.some((group) =>
      group.category.some(
        (skill) =>
          skill.name.toLowerCase() === "navegación" && skill.value >= 70
      )
    )
  );

  const canNavigate = parsedLevel >= 25 && hasRequiredNavigationSkill;

  // Check if the user level is at least 25 and has at least 70 points for navigation:
  const hasRequiredLeadershipSkill = skill.some((category) =>
    category.group.some((group) =>
      group.category.some(
        (skill) => skill.name.toLowerCase() === "liderazgo" && skill.value >= 35
      )
    )
  );

  // Define natural points based on level
  function getNaturalPoints(level: number): number {
    // Cap at level 40 with 100 points
    if (level >= 40) return 100;

    const pointsByLevel = [
      3, 5, 7, 10, 13, 15, 17, 20, 23, 25, 27, 30, 33, 35, 37, 40, 43, 45, 47,
      50, 53, 55, 57, 60, 63, 65, 67, 70, 73, 75, 77, 80, 83, 85, 87, 90, 93,
      95, 97, 100,
    ];
    return pointsByLevel[level - 1] || 0;
  }

  // Calculate natural points to apply to each skill except "navigation" and "leadership"
  const naturalPoints = getNaturalPoints(parsedLevel);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center w-full">
        <div className="flex items-center justify-center py-16 w-full border-b border-[--border-1] bg-[--background-0]">
          <div className="flex justify-between w-full max-w-screen-lg">
            <div className="flex flex-col gap-8">
              <div className="flex gap-8">
                <div className="flex items-center justify-center size-20 text-[--foreground-2] group-hover/submenu:text-[--foreground-1] rounded-xl bg-[--background-3]">
                  <FaCalculator size={48} />
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-3xl">Calculadora de Skills</h1>
                  <p className="text-[--foreground-2]">
                    Puntos disponibles según nivel
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Input
                  name="level"
                  defaultValue={level}
                  preffix={
                    <FaStar size={16} className="text-[--foreground-2]" />
                  }
                  preffixAction={setLevel}
                  placeholder="Nivel..."
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 p-8 w-full max-w-96 h-64 -mb-40 rounded-lg border border-[--border-1] bg-[--background-1] overflow-scroll">
              <div className="text-xl">
                Puntos disponibles: {availablePoints}
              </div>
              <div className="flex flex-col gap-2 text-2xl text-[--foreground-2]">
                <div
                  className={`flex justify-between text-sm ${
                    hasRequiredLeadershipSkill
                      ? "text-[--success]"
                      : "text-[--warning]"
                  }`}
                >
                  {hasRequiredLeadershipSkill
                    ? "Puede fundar clan"
                    : "No puede fundar clan"}
                </div>
                <div
                  className={`flex justify-between text-sm ${
                    canNavigate ? "text-[--success]" : "text-[--warning]"
                  }`}
                >
                  {canNavigate ? "Puede navegar" : "No puede navegar"}
                </div>
              </div>
            </div>
          </div>
        </div>
        <SkillCalculator
          skill={skill}
          availablePoints={availablePoints}
          naturalPoints={naturalPoints}
        />
      </div>
    </div>
  );
}
