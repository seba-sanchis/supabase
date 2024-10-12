import { createClient } from "@/lib/supabase/server";

export default async function Page() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("npc")
    .select(`
      *,
      npc_zone (
        quantity,
        zone (
          id,
          name
        )
      )
    `);

  if (error) throw error;

  return (
    <main>
      <h1>NPCs and Their Zones</h1>
      <ul>
        {data.map((npc) => (
          <li key={npc.id} className="border border-black">
            <h2 className="font-bold">{npc.name}</h2>
            <div className="font-bold">Health: {npc.health}</div>
            <div className="font-bold">Experience: {npc.experience}</div>
            <div className="font-bold">Exp/Health: {(npc.experience / npc.health).toFixed(2)}</div>
            <ul>
              {npc.npc_zone.map((entry) => (
                <li key={entry.zone.id}>
                  Zone: {entry.zone.name}({entry.zone.id}), Quantity: {entry.quantity}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  );
}
