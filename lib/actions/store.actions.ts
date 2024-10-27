"use server";

import { cookies } from "next/headers";

import { skills } from "@/constants";
import { Skill, Zone } from "@/types";

export async function setClass(value: string) {
  cookies().set("class", value);
}

export async function setLevel(formData: FormData) {
  let level = parseInt(formData.get("level") as string, 10);

  // Check if the level exceeds the maximum limit of 47
  if (isNaN(level)) level = 1;
  else if (level > 47) level = 47;

  cookies().set("level", level.toString());
}

export async function setSkills() {
  const cookieStore = cookies();

  const stringifiedValue = JSON.stringify(skills);

  cookieStore.set("skill", stringifiedValue);
}

export async function setSkill(skillName: string, formData: FormData) {
  const { value } = cookies().get("skill") || { value: "[]" };

  const currentSkills: Skill[] = JSON.parse(value);

  const data = {
    skill: formData.get("skill") as string,
  };

  // Update the skills by navigating through the nested structure
  const updatedSkills = currentSkills.map((category) => ({
    ...category,
    group: category.group.map((group) => ({
      ...group,
      category: group.category.map((skill) =>
        skill.name === skillName
          ? { ...skill, value: Math.max(0, parseInt(data.skill)) }
          : skill
      ),
    })),
  }));
  console.log(updatedSkills);
  cookies().set("skill", JSON.stringify(updatedSkills));
}

// Decrease the skill value and update it in the cookie
export async function setSkillDown(skillName: string) {
  const { value } = cookies().get("skill") || { value: "[]" };

  const currentSkills: Skill[] = JSON.parse(value);

  // Update the skills by navigating through the nested structure
  const updatedSkills = currentSkills.map((category) => ({
    ...category,
    group: category.group.map((group) => ({
      ...group,
      category: group.category.map((skill) =>
        skill.name === skillName
          ? { ...skill, value: Math.max(0, skill.value - 1) }
          : skill
      ),
    })),
  }));

  cookies().set("skill", JSON.stringify(updatedSkills));
}

// Increase the skill value and update it in the cookie
export async function setSkillUp(skillName: string, availablePoints: number) {
  if (availablePoints <= 0) return;

  const cookieStore = cookies();
  const { value } = cookieStore.get("skill") || { value: "[]" };

  const currentSkills: Skill[] = JSON.parse(value);

  // Update the skills by navigating through the nested structure
  const updatedSkills = currentSkills.map((category) => ({
    ...category,
    group: category.group.map((group) => ({
      ...group,
      category: group.category.map((skill) =>
        skill.name === skillName
          ? { ...skill, value: Math.max(0, skill.value + 1) }
          : skill
      ),
    })),
  }));

  cookieStore.set("skill", JSON.stringify(updatedSkills));
}

export async function setSearch(formData: FormData) {
  const data = {
    search: formData.get("search") as string,
  };

  cookies().set("search", data.search.toLocaleLowerCase());
}

export async function setZone(value: Zone) {
  const cookieStore = cookies();

  const stringifiedValue = JSON.stringify(value);

  cookieStore.set("zone", stringifiedValue);
}
