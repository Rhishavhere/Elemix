// Placeholder for chemistry utility functions

export interface UnitConversionParams {
  value: number;
  fromUnit: string;
  toUnit: string;
}

export function convertUnits(params: UnitConversionParams): string {
  const { value, fromUnit, toUnit } = params;
  if (fromUnit === toUnit) {
    return `${value} ${toUnit}`;
  }

  // Conversion factors (base unit for each category is SI or common standard)
  const conversions: { [key: string]: { [key: string]: number } } = {
    // Mass (base: g)
    g: { kg: 0.001, mg: 1000, lb: 0.00220462, oz: 0.035274, amu: 6.022e23 },
    kg: { g: 1000, mg: 1e6, lb: 2.20462, oz: 35.274, amu: 6.022e26 },
    mg: { g: 0.001, kg: 1e-6, lb: 2.20462e-6, oz: 3.5274e-5, amu: 6.022e20 },
    lb: { g: 453.592, kg: 0.453592, mg: 453592, oz: 16, amu: 2.7316e26 },
    oz: { g: 28.3495, kg: 0.0283495, mg: 28349.5, lb: 0.0625, amu: 1.7072e25 },
    amu: { g: 1.66054e-24, kg: 1.66054e-27, mg: 1.66054e-21, lb: 3.66086e-27, oz: 5.85738e-26 },
    // Volume (base: L)
    L: { mL: 1000, m3: 0.001, cm3: 1000, gal: 0.264172, qt: 1.05669 },
    mL: { L: 0.001, m3: 1e-6, cm3: 1, gal: 0.000264172, qt: 0.00105669 },
    m3: { L: 1000, mL: 1e6, cm3: 1e6, gal: 264.172, qt: 1056.69 },
    cm3: { L: 0.001, mL: 1, m3: 1e-6, gal: 0.000264172, qt: 0.00105669 }, // same as mL
    gal: { L: 3.78541, mL: 3785.41, m3: 0.00378541, cm3: 3785.41, qt: 4 },
    qt: { L: 0.946353, mL: 946.353, m3: 0.000946353, cm3: 946.353, gal: 0.25 },
    // Length (base: m)
    m: { cm: 100, mm: 1000, nm: 1e9, A: 1e10, in: 39.3701, ft: 3.28084 },
    cm: { m: 0.01, mm: 10, nm: 1e7, A: 1e8, in: 0.393701, ft: 0.0328084 },
    mm: { m: 0.001, cm: 0.1, nm: 1e6, A: 1e7, in: 0.0393701, ft: 0.00328084 },
    nm: { m: 1e-9, cm: 1e-7, mm: 1e-6, A: 10, in: 3.93701e-8, ft: 3.28084e-9 },
    A: { m: 1e-10, cm: 1e-8, mm: 1e-7, nm: 0.1, in: 3.93701e-9, ft: 3.28084e-10 },
    in: { m: 0.0254, cm: 2.54, mm: 25.4, nm: 2.54e7, A: 2.54e8, ft: 1/12 },
    ft: { m: 0.3048, cm: 30.48, mm: 304.8, nm: 3.048e8, A: 3.048e9, in: 12 },
    // Pressure (base: Pa)
    Pa: { kPa: 0.001, atm: 9.86923e-6, Torr: 0.00750062, mmHg: 0.00750062 },
    kPa: { Pa: 1000, atm: 0.00986923, Torr: 7.50062, mmHg: 7.50062 },
    atm: { Pa: 101325, kPa: 101.325, Torr: 760, mmHg: 760 },
    Torr: { Pa: 133.322, kPa: 0.133322, atm: 1/760, mmHg: 1 },
    mmHg: { Pa: 133.322, kPa: 0.133322, atm: 1/760, Torr: 1 },
    // Energy (base: J)
    J: { kJ: 0.001, cal: 0.239006, kcal: 0.000239006 },
    kJ: { J: 1000, cal: 239.006, kcal: 0.239006 },
    cal: { J: 4.184, kJ: 0.004184, kcal: 0.001 },
    kcal: { J: 4184, kJ: 4.184, cal: 1000 },
  
  };

  // Temperature conversions (special handling)
  if (fromUnit === 'C' && toUnit === 'K') return `${value + 273.15} K`;
  if (fromUnit === 'K' && toUnit === 'C') return `${value - 273.15} °C`;
  if (fromUnit === 'C' && toUnit === 'F') return `${(value * 9/5) + 32} °F`;
  if (fromUnit === 'F' && toUnit === 'C') return `${(value - 32) * 5/9} °C`;
  if (fromUnit === 'K' && toUnit === 'F') return `${((value - 273.15) * 9/5) + 32} °F`;
  if (fromUnit === 'F' && toUnit === 'K') return `${((value - 32) * 5/9) + 273.15} K`;

  if (conversions[fromUnit] && conversions[fromUnit][toUnit]) {
    const result = value * conversions[fromUnit][toUnit];
    // Handle very small or large numbers with scientific notation if appropriate
    return `${Number(result.toPrecision(6))} ${toUnit}`;
  }
  
  // Handle molality separately as its value 'm' conflicts with 'meters'
  if (fromUnit === 'm_molality' || toUnit === 'm_molality') {
    if (fromUnit === toUnit) return `${value} ${toUnit}`;
    // Conversion logic for molality would require density or other information
    return `Conversion for molality (m) to/from ${toUnit} requires additional context (e.g., solvent density).`;
  }

  // Wavelength units are typically length units, but if they need special handling:
  // Example: if 'nm' for length and 'nm_wave' for wavelength were different
  // if (fromUnit === 'nm_wave' && toUnit === 'm_wave') return `${value / 1e9} m (wavelength)`;

  return `Conversion from ${fromUnit} to ${toUnit} not implemented or units are incompatible.`;
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