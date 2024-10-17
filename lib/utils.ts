export function formatType(type: string): string {
  switch (type) {
    case "item":
      return "Item";
    case "npc":
      return "NPC";
    case "spell":
      return "Spell";
    default:
      return "Unknown";
  }
}
