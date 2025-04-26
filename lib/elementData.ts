// Data structure based on periodic table of elements
export interface Element {
  atomicNumber: number;
  symbol: string;
  name: string;
  atomicMass: number;
  category: ElementCategory;
  group: number;
  period: number;
  block: string;
  electronConfiguration: string;
  electronegativity?: number;
  atomicRadius?: number;
  ionRadius?: number;
  vanDerWaalsRadius?: number;
  ionizationEnergy?: number;
  electronAffinity?: number;
  oxidationStates?: string;
  standardState?: string;
  bondingType?: string;
  meltingPoint?: number;
  boilingPoint?: number;
  density?: number;
  yearDiscovered?: number;
  discoveredBy?: string;
  description: string;
  color?: string;
}

export type ElementCategory = 
  | "alkali-metal"
  | "alkaline-earth-metal"
  | "transition-metal"
  | "post-transition-metal"
  | "metalloid"
  | "nonmetal"
  | "halogen"
  | "noble-gas"
  | "lanthanide"
  | "actinide";

export const categoryColors: Record<ElementCategory, { bg: string; text: string }> = {
  "alkali-metal": { bg: "bg-red-100 dark:bg-red-900/30", text: "text-red-800 dark:text-red-300" },
  "alkaline-earth-metal": { bg: "bg-orange-100 dark:bg-orange-900/30", text: "text-orange-800 dark:text-orange-300" },
  "transition-metal": { bg: "bg-amber-100 dark:bg-amber-900/30", text: "text-amber-800 dark:text-amber-300" },
  "post-transition-metal": { bg: "bg-yellow-100 dark:bg-yellow-900/30", text: "text-yellow-800 dark:text-yellow-300" },
  "metalloid": { bg: "bg-lime-100 dark:bg-lime-900/30", text: "text-lime-800 dark:text-lime-300" },
  "nonmetal": { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-800 dark:text-green-300" },
  "halogen": { bg: "bg-teal-100 dark:bg-teal-900/30", text: "text-teal-800 dark:text-teal-300" },
  "noble-gas": { bg: "bg-cyan-100 dark:bg-cyan-900/30", text: "text-cyan-800 dark:text-cyan-300" },
  "lanthanide": { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-800 dark:text-blue-300" },
  "actinide": { bg: "bg-indigo-100 dark:bg-indigo-900/30", text: "text-indigo-800 dark:text-indigo-300" },
};

// Sample elements data - in a real application this would be a complete dataset
export const elements: Element[] = [
  {
    atomicNumber: 1,
    symbol: "H",
    name: "Hydrogen",
    atomicMass: 1.008,
    category: "nonmetal",
    group: 1,
    period: 1,
    block: "s",
    electronConfiguration: "1s¹",
    electronegativity: 2.2,
    atomicRadius: 38,
    ionRadius: 0.012,
    vanDerWaalsRadius: 120,
    ionizationEnergy: 13.598,
    electronAffinity: 0.754,
    oxidationStates: "-1, 1",
    standardState: "Gas",
    bondingType: "Diatomic",
    meltingPoint: 14.01,
    boilingPoint: 20.28,
    density: 0.00008988,
    yearDiscovered: 1766,
    discoveredBy: "Henry Cavendish",
    description: "Hydrogen is the chemical element with the symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element in the periodic table. Hydrogen is the most abundant chemical substance in the universe, constituting roughly 75% of all baryonic mass.",
  },
  {
    atomicNumber: 2,
    symbol: "He",
    name: "Helium",
    atomicMass: 4.0026,
    category: "noble-gas",
    group: 18,
    period: 1,
    block: "s",
    electronConfiguration: "1s²",
    electronegativity: 0,
    atomicRadius: 32,
    ionRadius: 0.093,
    vanDerWaalsRadius: 140,
    ionizationEnergy: 24.587,
    electronAffinity: 0,
    oxidationStates: "0",
    standardState: "Gas",
    bondingType: "Atomic",
    meltingPoint: 0.95,
    boilingPoint: 4.22,
    density: 0.0001785,
    yearDiscovered: 1868,
    discoveredBy: "Pierre Janssen, Norman Lockyer",
    description: "Helium is a chemical element with the symbol He and atomic number 2. It is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas group in the periodic table. Its boiling point is the lowest among all the elements.",
  },
  {
    atomicNumber: 6,
    symbol: "C",
    name: "Carbon",
    atomicMass: 12.011,
    category: "nonmetal",
    group: 14,
    period: 2,
    block: "p",
    electronConfiguration: "1s² 2s² 2p²",
    electronegativity: 2.55,
    atomicRadius: 77,
    ionRadius: 0.16,
    vanDerWaalsRadius: 170,
    ionizationEnergy: 11.26,
    electronAffinity: 1.263,
    oxidationStates: "-4, -3, -2, -1, 0, 1, 2, 3, 4",
    standardState: "Solid",
    bondingType: "Covalent Network",
    meltingPoint: 3550,
    boilingPoint: 4027,
    density: 2.267,
    yearDiscovered: 3750,
    discoveredBy: "Ancient Egypt",
    description: "Carbon is a chemical element with the symbol C and atomic number 6. It is nonmetallic and tetravalent—making four electrons available to form covalent chemical bonds. It belongs to group 14 of the periodic table. Carbon makes up only about 0.025 percent of Earth's crust.",
  },
  {
    atomicNumber: 8,
    symbol: "O",
    name: "Oxygen",
    atomicMass: 15.999,
    category: "nonmetal",
    group: 16,
    period: 2,
    block: "p",
    electronConfiguration: "1s² 2s² 2p⁴",
    electronegativity: 3.44,
    atomicRadius: 73,
    ionRadius: 0.140,
    vanDerWaalsRadius: 152,
    ionizationEnergy: 13.618,
    electronAffinity: 1.461,
    oxidationStates: "-2, -1, 0, 1, 2",
    standardState: "Gas",
    bondingType: "Diatomic",
    meltingPoint: 54.36,
    boilingPoint: 90.2,
    density: 0.001429,
    yearDiscovered: 1774,
    discoveredBy: "Carl Wilhelm Scheele",
    description: "Oxygen is a chemical element with the symbol O and atomic number 8. It is a member of the chalcogen group in the periodic table, a highly reactive nonmetal, and an oxidizing agent that readily forms oxides with most elements as well as with other compounds.",
  },
  {
    atomicNumber: 17,
    symbol: "Cl",
    name: "Chlorine",
    atomicMass: 35.45,
    category: "halogen",
    group: 17,
    period: 3,
    block: "p",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁵",
    electronegativity: 3.16,
    atomicRadius: 102,
    ionRadius: 0.167,
    vanDerWaalsRadius: 175,
    ionizationEnergy: 12.968,
    electronAffinity: 3.617,
    oxidationStates: "-1, 0, 1, 2, 3, 4, 5, 6, 7",
    standardState: "Gas",
    bondingType: "Covalent",
    meltingPoint: 171.6,
    boilingPoint: 239.11,
    density: 0.003214,
    yearDiscovered: 1774,
    discoveredBy: "Carl Wilhelm Scheele",
    description: "Chlorine is a chemical element with the symbol Cl and atomic number 17. The second-lightest of the halogens, it appears between fluorine and bromine in the periodic table and its properties are mostly intermediate between them. Chlorine is a yellow-green gas at room temperature.",
  },
  {
    atomicNumber: 79,
    symbol: "Au",
    name: "Gold",
    atomicMass: 196.967,
    category: "transition-metal",
    group: 11,
    period: 6,
    block: "d",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s¹",
    electronegativity: 2.54,
    atomicRadius: 146,
    ionRadius: 0.137,
    vanDerWaalsRadius: 166,
    ionizationEnergy: 9.226,
    electronAffinity: 2.309,
    oxidationStates: "-1, 1, 2, 3, 5",
    standardState: "Solid",
    bondingType: "Metallic",
    meltingPoint: 1337.33,
    boilingPoint: 3129,
    density: 19.3,
    yearDiscovered: -2500,
    discoveredBy: "Middle East",
    description: "Gold is a chemical element with the symbol Au and atomic number 79, making it one of the higher atomic number elements that occur naturally. It is a bright, slightly orange-yellow, dense, soft, malleable, and ductile metal in a pure form.",
  },
  {
    atomicNumber: 11,
    symbol: "Na",
    name: "Sodium",
    atomicMass: 22.99,
    category: "alkali-metal",
    group: 1,
    period: 3,
    block: "s",
    electronConfiguration: "1s² 2s² 2p⁶ 3s¹",
    electronegativity: 0.93,
    atomicRadius: 190,
    ionRadius: 0.116,
    vanDerWaalsRadius: 227,
    ionizationEnergy: 5.139,
    electronAffinity: 0.548,
    oxidationStates: "-1, 1",
    standardState: "Solid",
    bondingType: "Metallic",
    meltingPoint: 370.87,
    boilingPoint: 1156,
    density: 0.968,
    yearDiscovered: 1807,
    discoveredBy: "Humphry Davy",
    description: "Sodium is a chemical element with the symbol Na and atomic number 11. It is a soft, silvery-white, highly reactive metal. Sodium is an alkali metal, being in group 1 of the periodic table. Its only stable isotope is ²³Na.",
  },
];

export const getElement = (atomicNumber: number): Element | undefined => {
  return elements.find(element => element.atomicNumber === atomicNumber);
};

export const getElementBySymbol = (symbol: string): Element | undefined => {
  return elements.find(element => element.symbol === symbol);
};