import { scraper } from "@/lib/actions/scraper.actions";

export default async function Home() {
  const spells = await scraper("https://www.argentumonline.com.ar/wiki/hechizos");
  
  const uniqueSpells = spells.reduce((acc, spell) => {
    // Create a unique key for each spell based on its name and invocation
    const key = `${spell.name}-${spell.invocation}`;
    
    // If the key doesn't exist in the accumulator, add the spell
    if (!acc.has(key)) {
      acc.set(key, { ...spell, classes: spell.classes.length ? spell.classes : [] });
    }
    return acc;
  }, new Map());
  
  // Convert the map back to an array
  const finalSpellsList = Array.from(uniqueSpells.values());

  return (
    <main>
      <h1 className="text-center text-2xl font-bold mb-4">Spells List</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Invocation</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Min Hit</th>
            <th className="border p-2">Max Hit</th>
            <th className="border p-2">Magic</th>
            <th className="border p-2">Mana</th>
            <th className="border p-2">Stamina</th>
            <th className="border p-2">Value</th>
            <th className="border p-2">Classes</th>
          </tr>
        </thead>
        <tbody>
          {finalSpellsList.map((spell, index) => (
            <tr key={index}>
              <td className="border p-2">{spell.name}</td>
              <td className="border p-2">{spell.invocation}</td>
              <td className="border p-2">{spell.description}</td>
              <td className="border p-2">{spell.minHit}</td>
              <td className="border p-2">{spell.maxHit}</td>
              <td className="border p-2">{spell.magic}</td>
              <td className="border p-2">{spell.mana}</td>
              <td className="border p-2">{spell.stamina}</td>
              <td className="border p-2">{spell.value}</td>
              <td className="border p-2">{spell.classes.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
