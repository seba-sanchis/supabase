import { Table } from "@/components";
import { getSpells } from "@/lib/actions/database.actions";

const head = [
  "Name",
  "Invocation",
  "Min Damage",
  "Max Damage",
  "Skills",
  "Mana",
  "Stamina",
  "Value",
];

export default async function Page() {
  // const spells = await getSpells();
  const spells = [
    {
      id: '2d533cc4-9db1-4a48-b9de-585c2f70d9d8',
      name: 'Dardo Mágico',
      invocation: 'OHL VOR PEK',
      description: 'Causa 5 a 15 puntos de daño a la víctima.',
      min_damage: 5,
      max_damage: 10,
      magic: 0,
      mana: 5,
      stamina: 5,
      value: 50
    },
    {
      id: 'e9ba0bd4-012b-41ab-bf26-04c9a29c3fe2',
      name: 'Grito del Guerrero',
      invocation: 'GRU',
      description: 'Aumenta la velocidad del personaje.',
      min_damage: null,
      max_damage: null,
      magic: 0,
      mana: 0,
      stamina: 440,
      value: 1200000
    },
    {
      id: '7ec37407-bfda-4d6e-8f16-accacab8d533',
      name: 'Curar Veneno',
      invocation: 'NIHIL VED',
      description: 'Cura el estado de envenenamiento del personaje que selecciones.',
      min_damage: null,
      max_damage: null,
      magic: 10,
      mana: 40,
      stamina: 35,
      value: 1500
    },
  ]

  return (
    <div className="flex flex-col items-center py-16">
      <Table head={head} value={spells} />
    </div>
  );
}
