export interface Class {
  id: string;
  name: string;
  description: string;
}

interface ClassSpell {
  class: Class;
}

export interface NPC {
  id: string;
  name: string;
}

interface NPCSpell {
  npc: NPC;
}

export interface Search {
  id: string;
  name: string;
  type: string;
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
  npc_names: string[];
}
