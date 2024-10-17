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
    menu: "Database",
    submenu: [
      {
        name: "Classes",
        description:
          "Asesino, Bandido, Bardo, Clérigo, Druida, Guerrero, Mago y Paladín.",
        url: "/class",
        icon: <FaHatWizard />,
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
        name: "Races",
        description: "Humano, Elfo, Gnomo, Elfo Oscuro, Enano y Orco.",
        url: "/race",
        icon: <FaUser />,
      },
      {
        name: "Spells",
        description: "Daño, Maná, Skills y Stamina.",
        url: "/spell",
        icon: <FaBolt />,
      },
    ],
  },
  {
    menu: "Tools",
    submenu: [
      {
        name: "Skills Calculator",
        description: "Puntos disponibles según nivel.",
        url: "/skills",
        icon: <FaCalculator />,
      },
      {
        name: "Map",
        description: "Ubicación de NPCs y Recursos.",
        url: "/map",
        icon: <FaMapMarkedAlt />,
      },
    ],
  },
];
