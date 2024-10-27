import { NPC } from "@/types";
import { getNPCs } from "@/lib/actions/database.actions";

export default async function Page() {
  const NPCs: NPC[] = await getNPCs();

  return (
    <main>
      <h1>NPCs and Their Zones</h1>
      <ul>
        {NPCs.map((npc) => (
          <li key={npc.id} className="border border-black">
            <h2 className="font-bold">{npc.name}</h2>
            <div className="font-bold">Health: {npc.health}</div>
            <div className="font-bold">Experience: {npc.experience}</div>
            <div className="font-bold">
              Exp/Health: {(npc.experience / npc.health).toFixed(2)}
            </div>
            <ul>
              {npc.npc_zone.map((entry) => (
                <li key={entry.zone.id}>
                  Zone: {entry.zone.name}({entry.zone.id}), Quantity:{" "}
                  {entry.quantity}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  );
}
