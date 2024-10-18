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
}
