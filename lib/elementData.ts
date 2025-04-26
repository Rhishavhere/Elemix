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
    atomicRadius: 38, // pm
    ionRadius: 12, // pm (H+) or 154 (H-) - using H+ for consistency with others if possible, but H+ is just a proton. 12pm is theoretical bond radius. Using 154 (H-) might be better comparison. Example used 0.012nm=12pm. Sticking to example.
    vanDerWaalsRadius: 120, // pm
    ionizationEnergy: 13.598, // eV
    electronAffinity: 0.754, // eV
    oxidationStates: "-1, 1",
    standardState: "Gas",
    bondingType: "Diatomic",
    meltingPoint: 14.01, // K
    boilingPoint: 20.28, // K
    density: 0.00008988, // g/cm³ (Gas at STP)
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
    electronegativity: 0, // Typically undefined or 0 for noble gases
    atomicRadius: 32, // pm
    ionRadius: 93, // pm (He+ theoretical?) - Example used 0.093nm=93pm. Sticking to example.
    vanDerWaalsRadius: 140, // pm
    ionizationEnergy: 24.587, // eV
    electronAffinity: 0, // eV (Unstable anion)
    oxidationStates: "0",
    standardState: "Gas",
    bondingType: "Atomic",
    meltingPoint: 0.95, // K (at 2.5 MPa)
    boilingPoint: 4.22, // K
    density: 0.0001785, // g/cm³ (Gas at STP)
    yearDiscovered: 1868,
    discoveredBy: "Pierre Janssen, Norman Lockyer",
    description: "Helium is a chemical element with the symbol He and atomic number 2. It is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas group in the periodic table. Its boiling point is the lowest among all the elements.",
  },
  {
    atomicNumber: 3,
    symbol: "Li",
    name: "Lithium",
    atomicMass: 6.94,
    category: "alkali-metal",
    group: 1,
    period: 2,
    block: "s",
    electronConfiguration: "1s² 2s¹",
    electronegativity: 0.98,
    atomicRadius: 167, // pm
    ionRadius: 76, // pm (Li+)
    vanDerWaalsRadius: 182, // pm
    ionizationEnergy: 5.392, // eV
    electronAffinity: 0.618, // eV
    oxidationStates: "1",
    standardState: "Solid",
    bondingType: "Metallic",
    meltingPoint: 453.65, // K
    boilingPoint: 1615, // K
    density: 0.534, // g/cm³
    yearDiscovered: 1817,
    discoveredBy: "Johan August Arfwedson",
    description: "Lithium is a chemical element with the symbol Li and atomic number 3. It is a soft, silvery-white alkali metal. Under standard conditions, it is the lightest metal and the lightest solid element.",
  },
  {
    atomicNumber: 4,
    symbol: "Be",
    name: "Beryllium",
    atomicMass: 9.0122,
    category: "alkaline-earth-metal",
    group: 2,
    period: 2,
    block: "s",
    electronConfiguration: "1s² 2s²",
    electronegativity: 1.57,
    atomicRadius: 112, // pm
    ionRadius: 45, // pm (Be²⁺)
    vanDerWaalsRadius: 153, // pm
    ionizationEnergy: 9.323, // eV
    electronAffinity: 0, // eV (Unstable anion)
    oxidationStates: "2",
    standardState: "Solid",
    bondingType: "Metallic",
    meltingPoint: 1560, // K
    boilingPoint: 2742, // K
    density: 1.85, // g/cm³
    yearDiscovered: 1798,
    discoveredBy: "Louis Nicolas Vauquelin",
    description: "Beryllium is a chemical element with the symbol Be and atomic number 4. It is a relatively rare element in the universe, usually occurring as a product of the spallation of larger atomic nuclei that have collided with cosmic rays.",
  },
  {
    atomicNumber: 5,
    symbol: "B",
    name: "Boron",
    atomicMass: 10.81,
    category: "metalloid",
    group: 13,
    period: 2,
    block: "p",
    electronConfiguration: "1s² 2s² 2p¹",
    electronegativity: 2.04,
    atomicRadius: 87, // pm
    ionRadius: 27, // pm (B³⁺)
    vanDerWaalsRadius: 192, // pm
    ionizationEnergy: 8.298, // eV
    electronAffinity: 0.277, // eV
    oxidationStates: "1, 2, 3",
    standardState: "Solid",
    bondingType: "Covalent Network",
    meltingPoint: 2349, // K
    boilingPoint: 4200, // K
    density: 2.34, // g/cm³
    yearDiscovered: 1808,
    discoveredBy: "Joseph Louis Gay-Lussac, Louis Jacques Thénard, Humphry Davy",
    description: "Boron is a chemical element with the symbol B and atomic number 5. Produced entirely by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a low-abundance element in the Solar System and in the Earth's crust.",
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
    atomicRadius: 77, // pm
    ionRadius: 160, // pm (C⁴⁻?) - Example used 0.16nm=160pm. Sticking to example. More commonly 16 pm (C⁴⁺)
    vanDerWaalsRadius: 170, // pm
    ionizationEnergy: 11.26, // eV
    electronAffinity: 1.263, // eV
    oxidationStates: "-4, -3, -2, -1, 0, 1, 2, 3, 4",
    standardState: "Solid",
    bondingType: "Covalent Network",
    meltingPoint: 3800, // K (Sublimes)
    boilingPoint: 5100, // K (Sublimes)
    density: 2.267, // g/cm³ (Graphite)
    yearDiscovered: -3750, // Represents 3750 BC
    discoveredBy: "Ancient Cultures",
    description: "Carbon is a chemical element with the symbol C and atomic number 6. It is nonmetallic and tetravalent—making four electrons available to form covalent chemical bonds. It belongs to group 14 of the periodic table. Carbon makes up only about 0.025 percent of Earth's crust.",
  },
  {
    atomicNumber: 7,
    symbol: "N",
    name: "Nitrogen",
    atomicMass: 14.007,
    category: "nonmetal",
    group: 15,
    period: 2,
    block: "p",
    electronConfiguration: "1s² 2s² 2p³",
    electronegativity: 3.04,
    atomicRadius: 75, // pm
    ionRadius: 146, // pm (N³⁻)
    vanDerWaalsRadius: 155, // pm
    ionizationEnergy: 14.534, // eV
    electronAffinity: 0, // eV (Unstable anion)
    oxidationStates: "-3, -2, -1, 0, 1, 2, 3, 4, 5",
    standardState: "Gas",
    bondingType: "Diatomic",
    meltingPoint: 63.15, // K
    boilingPoint: 77.36, // K
    density: 0.001251, // g/cm³ (Gas at STP)
    yearDiscovered: 1772,
    discoveredBy: "Daniel Rutherford",
    description: "Nitrogen is a chemical element with the symbol N and atomic number 7. It was first discovered and isolated by Scottish physician Daniel Rutherford in 1772. It is the lightest member of group 15 of the periodic table, often called the pnictogens.",
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
    atomicRadius: 73, // pm
    ionRadius: 140, // pm (O²⁻)
    vanDerWaalsRadius: 152, // pm
    ionizationEnergy: 13.618, // eV
    electronAffinity: 1.461, // eV
    oxidationStates: "-2, -1, 0, 1, 2",
    standardState: "Gas",
    bondingType: "Diatomic",
    meltingPoint: 54.36, // K
    boilingPoint: 90.2, // K
    density: 0.001429, // g/cm³ (Gas at STP)
    yearDiscovered: 1774,
    discoveredBy: "Carl Wilhelm Scheele, Joseph Priestley",
    description: "Oxygen is a chemical element with the symbol O and atomic number 8. It is a member of the chalcogen group in the periodic table, a highly reactive nonmetal, and an oxidizing agent that readily forms oxides with most elements as well as with other compounds.",
  },
  {
    atomicNumber: 9,
    symbol: "F",
    name: "Fluorine",
    atomicMass: 18.998,
    category: "halogen",
    group: 17,
    period: 2,
    block: "p",
    electronConfiguration: "1s² 2s² 2p⁵",
    electronegativity: 3.98,
    atomicRadius: 71, // pm
    ionRadius: 133, // pm (F⁻)
    vanDerWaalsRadius: 147, // pm
    ionizationEnergy: 17.422, // eV
    electronAffinity: 3.401, // eV
    oxidationStates: "-1",
    standardState: "Gas",
    bondingType: "Diatomic",
    meltingPoint: 53.53, // K
    boilingPoint: 85.03, // K
    density: 0.001696, // g/cm³ (Gas at STP)
    yearDiscovered: 1886,
    discoveredBy: "Henri Moissan",
    description: "Fluorine is a chemical element with the symbol F and atomic number 9. It is the lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard conditions. As the most electronegative element, it is extremely reactive.",
  },
  {
    atomicNumber: 10,
    symbol: "Ne",
    name: "Neon",
    atomicMass: 20.180,
    category: "noble-gas",
    group: 18,
    period: 2,
    block: "p",
    electronConfiguration: "1s² 2s² 2p⁶",
    electronegativity: 0, // Typically undefined or 0
    atomicRadius: 69, // pm
    ionRadius: 0, // Does not readily form ions
    vanDerWaalsRadius: 154, // pm
    ionizationEnergy: 21.565, // eV
    electronAffinity: 0, // eV (Unstable anion)
    oxidationStates: "0",
    standardState: "Gas",
    bondingType: "Atomic",
    meltingPoint: 24.56, // K
    boilingPoint: 27.07, // K
    density: 0.0008999, // g/cm³ (Gas at STP)
    yearDiscovered: 1898,
    discoveredBy: "William Ramsay, Morris Travers",
    description: "Neon is a chemical element with the symbol Ne and atomic number 10. It is a noble gas. Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about two-thirds the density of air.",
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
    atomicRadius: 190, // pm
    ionRadius: 102, // pm (Na⁺) - Example used 0.116nm=116pm. Using more standard value.
    vanDerWaalsRadius: 227, // pm
    ionizationEnergy: 5.139, // eV
    electronAffinity: 0.548, // eV
    oxidationStates: "-1, 1",
    standardState: "Solid",
    bondingType: "Metallic",
    meltingPoint: 370.87, // K
    boilingPoint: 1156, // K
    density: 0.968, // g/cm³
    yearDiscovered: 1807,
    discoveredBy: "Humphry Davy",
    description: "Sodium is a chemical element with the symbol Na and atomic number 11. It is a soft, silvery-white, highly reactive metal. Sodium is an alkali metal, being in group 1 of the periodic table. Its only stable isotope is ²³Na.",
  },
  {
    atomicNumber: 12,
    symbol: "Mg",
    name: "Magnesium",
    atomicMass: 24.305,
    category: "alkaline-earth-metal",
    group: 2,
    period: 3,
    block: "s",
    electronConfiguration: "1s² 2s² 2p⁶ 3s²",
    electronegativity: 1.31,
    atomicRadius: 145, // pm
    ionRadius: 72, // pm (Mg²⁺)
    vanDerWaalsRadius: 173, // pm
    ionizationEnergy: 7.646, // eV
    electronAffinity: 0, // eV (Unstable anion)
    oxidationStates: "1, 2",
    standardState: "Solid",
    bondingType: "Metallic",
    meltingPoint: 923, // K
    boilingPoint: 1363, // K
    density: 1.738, // g/cm³
    yearDiscovered: 1755,
    discoveredBy: "Joseph Black",
    description: "Magnesium is a chemical element with the symbol Mg and atomic number 12. It is a shiny gray solid which bears a close physical resemblance to the other five elements in the second column (group 2, or alkaline earth metals) of the periodic table.",
  },
  {
    atomicNumber: 13,
    symbol: "Al",
    name: "Aluminum",
    atomicMass: 26.982,
    category: "post-transition-metal",
    group: 13,
    period: 3,
    block: "p",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p¹",
    electronegativity: 1.61,
    atomicRadius: 118, // pm
    ionRadius: 54, // pm (Al³⁺)
    vanDerWaalsRadius: 184, // pm
    ionizationEnergy: 5.986, // eV
    electronAffinity: 0.441, // eV
    oxidationStates: "1, 3",
    standardState: "Solid",
    bondingType: "Metallic",
    meltingPoint: 933.47, // K
    boilingPoint: 2792, // K
    density: 2.70, // g/cm³
    yearDiscovered: 1825, // First isolated
    discoveredBy: "Hans Christian Ørsted",
    description: "Aluminum is a chemical element with the symbol Al and atomic number 13. It is a silvery-white, soft, non-magnetic and ductile metal in the boron group. By mass, aluminum makes up about 8% of the Earth's crust.",
  },
  {
    atomicNumber: 14,
    symbol: "Si",
    name: "Silicon",
    atomicMass: 28.085,
    category: "metalloid",
    group: 14,
    period: 3,
    block: "p",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p²",
    electronegativity: 1.9,
    atomicRadius: 111, // pm
    ionRadius: 40, // pm (Si⁴⁺) or 271 (Si⁴⁻)
    vanDerWaalsRadius: 210, // pm
    ionizationEnergy: 8.151, // eV
    electronAffinity: 1.385, // eV
    oxidationStates: "-4, -3, -2, -1, 1, 2, 3, 4",
    standardState: "Solid",
    bondingType: "Covalent Network", // Can be Metallic in liquid state
    meltingPoint: 1687, // K
    boilingPoint: 3538, // K
    density: 2.33, // g/cm³
    yearDiscovered: 1823,
    discoveredBy: "Jöns Jacob Berzelius",
    description: "Silicon is a chemical element with the symbol Si and atomic number 14. It is a hard, brittle crystalline solid with a blue-grey metallic lustre, and is a tetravalent metalloid and semiconductor. It is a member of group 14 in the periodic table.",
  },
  {
    atomicNumber: 15,
    symbol: "P",
    name: "Phosphorus",
    atomicMass: 30.974,
    category: "nonmetal",
    group: 15,
    period: 3,
    block: "p",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p³",
    electronegativity: 2.19,
    atomicRadius: 106, // pm
    ionRadius: 212, // pm (P³⁻)
    vanDerWaalsRadius: 180, // pm
    ionizationEnergy: 10.487, // eV
    electronAffinity: 0.746, // eV
    oxidationStates: "-3, -2, -1, 1, 2, 3, 4, 5",
    standardState: "Solid",
    bondingType: "Covalent Network", // White phosphorus is molecular P4
    meltingPoint: 317.3, // K (White phosphorus)
    boilingPoint: 553.7, // K (White phosphorus)
    density: 1.823, // g/cm³ (White phosphorus)
    yearDiscovered: 1669,
    discoveredBy: "Hennig Brand",
    description: "Phosphorus is a chemical element with the symbol P and atomic number 15. Elemental phosphorus exists in two major forms, white phosphorus and red phosphorus, but because it is highly reactive, phosphorus is never found as a free element on Earth.",
  },
  {
    atomicNumber: 16,
    symbol: "S",
    name: "Sulfur",
    atomicMass: 32.06,
    category: "nonmetal",
    group: 16,
    period: 3,
    block: "p",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁴",
    electronegativity: 2.58,
    atomicRadius: 105, // pm
    ionRadius: 184, // pm (S²⁻)
    vanDerWaalsRadius: 180, // pm
    ionizationEnergy: 10.36, // eV
    electronAffinity: 2.077, // eV
    oxidationStates: "-2, -1, 0, 1, 2, 3, 4, 5, 6",
    standardState: "Solid",
    bondingType: "Covalent Network", // Exists as S8 rings
    meltingPoint: 388.36, // K (Rhombic)
    boilingPoint: 717.8, // K
    density: 2.07, // g/cm³ (Rhombic)
    yearDiscovered: -500, // Recognized in antiquity
    discoveredBy: "Ancient Cultures",
    description: "Sulfur is a chemical element with the symbol S and atomic number 16. It is abundant, multivalent and nonmetallic. Under normal conditions, sulfur atoms form cyclic octatomic molecules with a chemical formula S₈.",
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
    atomicRadius: 102, // pm
    ionRadius: 181, // pm (Cl⁻) - Example used 0.167nm=167pm. Using more standard value.
    vanDerWaalsRadius: 175, // pm
    ionizationEnergy: 12.968, // eV
    electronAffinity: 3.617, // eV
    oxidationStates: "-1, 0, 1, 2, 3, 4, 5, 6, 7",
    standardState: "Gas",
    bondingType: "Diatomic", // Covalent in Cl2
    meltingPoint: 171.6, // K
    boilingPoint: 239.11, // K
    density: 0.003214, // g/cm³ (Gas at STP)
    yearDiscovered: 1774,
    discoveredBy: "Carl Wilhelm Scheele",
    description: "Chlorine is a chemical element with the symbol Cl and atomic number 17. The second-lightest of the halogens, it appears between fluorine and bromine in the periodic table and its properties are mostly intermediate between them. Chlorine is a yellow-green gas at room temperature.",
  },
  {
    atomicNumber: 18,
    symbol: "Ar",
    name: "Argon",
    atomicMass: 39.948,
    category: "noble-gas",
    group: 18,
    period: 3,
    block: "p",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶",
    electronegativity: 0, // Typically undefined or 0
    atomicRadius: 106, // pm
    ionRadius: 0, // Does not readily form ions
    vanDerWaalsRadius: 188, // pm
    ionizationEnergy: 15.76, // eV
    electronAffinity: 0, // eV (Unstable anion)
    oxidationStates: "0",
    standardState: "Gas",
    bondingType: "Atomic",
    meltingPoint: 83.8, // K
    boilingPoint: 87.3, // K
    density: 0.001784, // g/cm³ (Gas at STP)
    yearDiscovered: 1894,
    discoveredBy: "Lord Rayleigh, William Ramsay",
    description: "Argon is a chemical element with the symbol Ar and atomic number 18. It is in group 18 of the periodic table and is a noble gas. Argon is the third-most abundant gas in the Earth's atmosphere, at 0.934%.",
  },
  {
    atomicNumber: 19,
    symbol: "K",
    name: "Potassium",
    atomicMass: 39.098,
    category: "alkali-metal",
    group: 1,
    period: 4,
    block: "s",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹",
    electronegativity: 0.82,
    atomicRadius: 243, // pm
    ionRadius: 138, // pm (K⁺)
    vanDerWaalsRadius: 275, // pm
    ionizationEnergy: 4.341, // eV
    electronAffinity: 0.501, // eV
    oxidationStates: "1",
    standardState: "Solid",
    bondingType: "Metallic",
    meltingPoint: 336.53, // K
    boilingPoint: 1032, // K
    density: 0.862, // g/cm³
    yearDiscovered: 1807,
    discoveredBy: "Humphry Davy",
    description: "Potassium is a chemical element with the symbol K and atomic number 19. Potassium is a silvery-white metal that is soft enough to be cut with a knife with little force. It is an alkali metal, chemically very similar to sodium.",
  },
  {
    atomicNumber: 20,
    symbol: "Ca",
    name: "Calcium",
    atomicMass: 40.078,
    category: "alkaline-earth-metal",
    group: 2,
    period: 4,
    block: "s",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s²",
    electronegativity: 1.0,
    atomicRadius: 194, // pm
    ionRadius: 100, // pm (Ca²⁺)
    vanDerWaalsRadius: 231, // pm
    ionizationEnergy: 6.113, // eV
    electronAffinity: 0.02455, // eV (Very small)
    oxidationStates: "2",
    standardState: "Solid",
    bondingType: "Metallic",
    meltingPoint: 1115, // K
    boilingPoint: 1757, // K
    density: 1.55, // g/cm³
    yearDiscovered: 1808,
    discoveredBy: "Humphry Davy",
    description: "Calcium is a chemical element with the symbol Ca and atomic number 20. As an alkaline earth metal, calcium is a reactive metal that forms a dark oxide-nitride layer when exposed to air. Its physical and chemical properties are most similar to its heavier homologues strontium and barium.",
  },
];

export const getElement = (atomicNumber: number): Element | undefined => {
  return elements.find(element => element.atomicNumber === atomicNumber);
};

export const getElementBySymbol = (symbol: string): Element | undefined => {
  return elements.find(element => element.symbol === symbol);
};