export interface Molecule {
  id: string;
  name: string;
  formula: string;
  structure: string; // SMILES or other molecular notation
  molecularWeight: number;
  description: string;
  properties: {
    meltingPoint?: number;
    boilingPoint?: number;
    density?: number;
    solubility?: string;
    acidity?: string;
    basicity?: string;
  };
  applications: string[];
  imageUrl?: string;
}

// Sample molecules data - in a real application this would be a complete dataset
export const molecules: Molecule[] = [
  {
    id: "h2o",
    name: "Water",
    formula: "H₂O",
    structure: "O",
    molecularWeight: 18.015,
    description: "Water is an inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance, which is the main constituent of Earth's hydrosphere and the fluids of all known living organisms. It is vital for all known forms of life, even though it provides no calories or organic nutrients.",
    properties: {
      meltingPoint: 0,
      boilingPoint: 100,
      density: 0.997,
      solubility: "N/A (is a solvent)",
      acidity: "Neutral (pH 7)",
      basicity: "Neutral (pH 7)"
    },
    applications: [
      "Universal solvent",
      "Temperature regulation",
      "Biochemical reactions",
      "Industrial applications",
      "Cleaning agent"
    ]
  },
  {
    id: "co2",
    name: "Carbon Dioxide",
    formula: "CO₂",
    structure: "O=C=O",
    molecularWeight: 44.009,
    description: "Carbon dioxide is a colorless gas with a density about 53% higher than that of dry air. It occurs naturally in Earth's atmosphere as a trace gas. The current concentration is about 0.04% (412 ppm) by volume, having risen from pre-industrial levels of 280 ppm.",
    properties: {
      meltingPoint: -56.6,
      boilingPoint: -78.5, // Sublimation point
      density: 1.98,
      solubility: "Soluble in water (1.45 g/L at 25°C)",
      acidity: "Weakly acidic",
      basicity: "None"
    },
    applications: [
      "Carbonated beverages",
      "Fire extinguishers",
      "Plant photosynthesis",
      "Industrial cooling",
      "Chemical synthesis"
    ]
  },
  {
    id: "c2h5oh",
    name: "Ethanol",
    formula: "C₂H₅OH",
    structure: "CCO",
    molecularWeight: 46.07,
    description: "Ethanol, also called alcohol, ethyl alcohol, and drinking alcohol, is a chemical compound, a simple alcohol with the chemical formula C₂H₅OH. Its formula can be also written as CH₃−CH₂−OH or C₂H₅−OH (an ethyl group linked to a hydroxyl group).",
    properties: {
      meltingPoint: -114.1,
      boilingPoint: 78.37,
      density: 0.789,
      solubility: "Miscible with water",
      acidity: "Weak acid",
      basicity: "None"
    },
    applications: [
      "Alcoholic beverages",
      "Antiseptic",
      "Solvent",
      "Fuel",
      "Chemical synthesis"
    ]
  },
  {
    id: "c6h12o6",
    name: "Glucose",
    formula: "C₆H₁₂O₆",
    structure: "C(C(C(C(C(CO)O)O)O)O)O",
    molecularWeight: 180.156,
    description: "Glucose is a simple sugar with the molecular formula C₆H₁₂O₆. Glucose is the most abundant monosaccharide, a subcategory of carbohydrates. Glucose is mainly made by plants and most algae during photosynthesis from water and carbon dioxide.",
    properties: {
      meltingPoint: 146,
      boilingPoint: 0,
      density: 1.54,
      solubility: "Highly soluble in water",
      acidity: "Weak acid",
      basicity: "None"
    },
    applications: [
      "Energy source in living organisms",
      "Food sweetener",
      "Medical applications",
      "Brewing",
      "Industrial fermentation"
    ]
  },
  {
    id: "nacl",
    name: "Sodium Chloride",
    formula: "NaCl",
    structure: "[Na+].[Cl-]",
    molecularWeight: 58.44,
    description: "Sodium chloride, commonly known as salt, is an ionic compound with the chemical formula NaCl, representing a 1:1 ratio of sodium and chloride ions. It is the salt most responsible for the salinity of seawater and the extracellular fluid of many multicellular organisms.",
    properties: {
      meltingPoint: 801,
      boilingPoint: 1413,
      density: 2.16,
      solubility: "Soluble in water (359 g/L at 20°C)",
      acidity: "Neutral",
      basicity: "Neutral"
    },
    applications: [
      "Food preservative and seasoning",
      "Water conditioning",
      "Deicing",
      "Chemical feedstock",
      "Industrial processes"
    ]
  }
];

export const getMolecule = (id: string): Molecule | undefined => {
  return molecules.find(molecule => molecule.id === id);
};