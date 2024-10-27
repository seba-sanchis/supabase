import {
  FaBolt,
  FaCalculator,
  FaClipboardList,
  FaDragon,
  FaHatWizard,
  FaMapMarkedAlt,
  FaUser,
} from "react-icons/fa";

export const navigation = [
  {
    menu: "Base de Datos",
    submenu: [
      {
        name: "Clases",
        description:
          "Asesino, Bandido, Bardo, Clérigo, Druida, Guerrero, Mago y Paladín.",
        url: "/class",
        icon: <FaHatWizard />,
      },
      {
        name: "Hechizos",
        description: "Daño, Maná, Skills y Stamina.",
        url: "/spell",
        icon: <FaBolt />,
      },
      {
        name: "Items",
        description: "Drops y Vendedores.",
        url: "/item",
        icon: <FaClipboardList />,
      },
      {
        name: "NPCs",
        description: "Aliados, Enemigos y Neutrales.",
        icon: <FaDragon />,
        url: "/npc",
      },
      {
        name: "Razas",
        description: "Humano, Elfo, Gnomo, Elfo Oscuro, Enano y Orco.",
        url: "/race",
        icon: <FaUser />,
      },
    ],
  },
  {
    menu: "Herramientas",
    submenu: [
      {
        name: "Calculadora de Skills",
        description: "Puntos disponibles según nivel.",
        url: "/skill-calculator",
        icon: <FaCalculator />,
      },
      {
        name: "Mapa",
        description: "Ubicación de NPCs y Recursos.",
        url: "/map",
        icon: <FaMapMarkedAlt />,
      },
    ],
  },
];

export const skills = [
  {
    title: "Combate",
    group: [
      {
        category: [
          { name: "Magia", value: 0 },
          { name: "Meditar", value: 0 },
          { name: "Resistencia Mágica", value: 0 },
        ],
      },
      {
        category: [
          { name: "Destreza en combate", value: 0 },
          { name: "Combate sin armas", value: 0 },
          { name: "Combate con armas", value: 0 },
          { name: "Defensa con escudo", value: 0 },
          { name: "Arma a distancia", value: 0 },
          { name: "Apuñalar", value: 0 },
        ],
      },
      { category: [{ name: "Robar", value: 0 }] },
      { category: [{ name: "Alquimia", value: 0 }] },
    ],
  },
  {
    title: "Habilidades",
    group: [
      {
        category: [
          { name: "Talar", value: 0 },
          { name: "Pescar", value: 0 },
          { name: "Minería", value: 0 },
          { name: "Carpintería", value: 0 },
          { name: "Herrería", value: 0 },
        ],
      },
      {
        category: [
          { name: "Ocultarse", value: 0 },
          { name: "Supervivencia", value: 0 },
        ],
      },
      {
        category: [
          { name: "Comercio", value: 0 },
          { name: "Liderazgo", value: 0 },
          { name: "Doma de animales", value: 0 },
          { name: "Navegación", value: 0 },
          { name: "Sestrería", value: 0 },
        ],
      },
    ],
  },
];