export interface Class {
  id: string;
  name: string;
  description: string;
}

interface ClassSpell {
  class: Class;
}

interface Item {
  id: string;
  name: string;
}

interface ItemNPC {
  item: Item;
  npc: NPC;
}

export interface NPC {
  id: string;
  name: string;
  min_damage: number;
  max_damage: number;
  health: number;
  experience: number;
  gold: number;
  clan_experience: number;
  item_npc: ItemNPC[];
  npc_zone: NPCZone[];
}

interface NPCSpell {
  npc: NPC;
}

interface NPCZone {
  npc: NPC;
  zone: Zone;
  quantity: number;
}

export interface Search {
  id: string;
  name: string;
  type: string;
}

interface SkillItem {
  name: string;
  value: number;
}

interface SkillCategory {
  category: SkillItem[];
}

export interface Skill {
  title: string;
  group: SkillCategory[];
}

export interface Spell {
  id: string;
  name: string;
  invocation: string;
  description: string;
  min_damage: number;
  max_damage: number;
  magic: number;
  mana: number;
  stamina: number;
  value: number;
  class_spell: ClassSpell[];
  npc_spell: NPCSpell[];
  npc_name: string[];
}

export interface Zone {
  id: string;
  name: string;
  position: number;
  npc_zone: NPCZone[];
}
