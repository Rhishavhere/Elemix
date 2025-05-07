// Placeholder for chemistry utility functions

export interface UnitConversionParams {
  value: number;
  fromUnit: string;
  toUnit: string;
}

export function convertUnits(params: UnitConversionParams): string {
  // Basic conversion logic (placeholder - needs actual conversion factors)
  const { value, fromUnit, toUnit } = params;
  if (fromUnit === toUnit) {
    return `${value} ${toUnit}`;
  }
  // Add more complex conversion logic here based on units
  // For example, g to kg, L to mL, etc.
  if (fromUnit === 'g' && toUnit === 'kg') {
    return `${value / 1000} kg`;
  }
  if (fromUnit === 'kg' && toUnit === 'g') {
    return `${value * 1000} g`;
  }
  if (fromUnit === 'L' && toUnit === 'mL') {
    return `${value * 1000} mL`;
  }
  if (fromUnit === 'mL' && toUnit === 'L') {
    return `${value / 1000} L`;
  }
  return `Conversion from ${fromUnit} to ${toUnit} not yet implemented.`;
}

const atomicWeights: { [element: string]: number } = {
  H: 1.008,
  He: 4.0026,
  Li: 6.94,
  Be: 9.0122,
  B: 10.81,
  C: 12.011,
  N: 14.007,
  O: 15.999,
  F: 18.998,
  Ne: 20.180,
  Na: 22.990,
  Mg: 24.305,
  Al: 26.982,
  Si: 28.085,
  P: 30.974,
  S: 32.06,
  Cl: 35.45,
  K: 39.098,
  Ar: 39.948,
  Ca: 40.078,
  Sc: 44.956,
  Ti: 47.867,
  V: 50.942,
  Cr: 51.996,
  Mn: 54.938,
  Fe: 55.845,
  Ni: 58.693,
  Co: 58.933,
  Cu: 63.546,
  Zn: 65.38,
  Ga: 69.723,
  Ge: 72.630,
  As: 74.922,
  Se: 78.971,
  Br: 79.904,
  Kr: 83.798,
  Rb: 85.468,
  Sr: 87.62,
  Y: 88.906,
  Zr: 91.224,
  Nb: 92.906,
  Mo: 95.96,
  Tc: 98,
  Ru: 101.07,
  Rh: 102.91,
  Pd: 106.42,
  Ag: 107.87,
  Cd: 112.41,
  In: 114.82,
  Sn: 118.71,
  Sb: 121.76,
  I: 126.90,
  Te: 127.60,
  Xe: 131.29,
  Cs: 132.91,
  Ba: 137.33,
  La: 138.91,
  Ce: 140.12,
  Pr: 140.91,
  Nd: 144.24,
  Pm: 145,
  Sm: 150.36,
  Eu: 151.96,
  Gd: 157.25,
  Tb: 158.93,
  Dy: 162.50,
  Ho: 164.93,
  Er: 167.26,
  Tm: 168.93,
  Yb: 173.05,
  Lu: 174.97,
  Hf: 178.49,
  Ta: 180.95,
  W: 183.84,
  Re: 186.21,
  Os: 190.23,
  Ir: 192.22,
  Pt: 195.08,
  Au: 196.97,
  Hg: 200.59,
  Tl: 204.38,
  Pb: 207.2,
  Bi: 208.98,
  Po: 209,
  At: 210,
  Rn: 222,
  // Add more elements as needed
};

export function calculateMolarMass(formula: string): string {
  if (!formula) return 'Please enter a chemical formula.';

  // Regex to parse elements and their counts. Handles elements like C, Cl, H2, O2, NaCl, C6H12O6
  // It looks for an uppercase letter, optionally followed by a lowercase letter (element symbol),
  // and then optionally followed by digits (count).
  const regex = /([A-Z][a-z]?)(\d*)/g;
  let match;
  let totalMolarMass = 0;
  let parsedSuccessfully = false;

  while ((match = regex.exec(formula)) !== null) {
    parsedSuccessfully = true;
    const element = match[1];
    const count = match[2] ? parseInt(match[2]) : 1;

    if (atomicWeights[element]) {
      totalMolarMass += atomicWeights[element] * count;
    } else {
      return `Error: Element ${element} not found in atomic weight data.`;
    }
  }

  if (!parsedSuccessfully && formula.trim() !== '') {
    return `Error: Could not parse the chemical formula '${formula}'. Please ensure it's in a valid format (e.g., H2O, NaCl, C6H12O6).`;
  }
  
  if (totalMolarMass === 0 && formula.trim() !== '') { // Handles cases where regex might not match but formula is not empty (e.g. just numbers or lowercase)
      return `Error: Invalid chemical formula '${formula}'. Calculation resulted in zero molar mass.`;
  }

  return totalMolarMass > 0 ? `${totalMolarMass.toFixed(3)} g/mol` : 'Please enter a valid chemical formula.';
}