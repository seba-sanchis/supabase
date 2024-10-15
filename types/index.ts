import { UUID } from "crypto";

export interface Search {
  id: UUID;
  name: string;
  type: string;
}
