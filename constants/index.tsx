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
        url: "/skills",
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
