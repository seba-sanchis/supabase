import { UUID } from "crypto";

export interface Search {
  id: UUID;
  name: string;
  type: string;
}

export interface Spell {
  id: UUID;
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
