"use client";

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card'; // Removed CardTitle as you used <p>
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { convertUnits, calculateMolarMass } from '../../lib/chemistryUtils';

interface UnitDefinition {
  value: string;
  label: string;
}

interface Category {
  name: string;
  units: UnitDefinition[];
}

const unitCategoriesDefinition: Category[] = [
  {
    name: "Mass",
    units: [
      { value: "g", label: "Grams (g)" },
      { value: "kg", label: "Kilograms (kg)" },
      { value: "mg", label: "Milligrams (mg)" },
      { value: "lb", label: "Pounds (lb)" },
      { value: "oz", label: "Ounces (oz)" },
      { value: "amu", label: "Atomic Mass Units (amu)" },
    ],
  },
  {
    name: "Volume",
    units: [
      { value: "L", label: "Liters (L)" },
      { value: "mL", label: "Milliliters (mL)" },
      { value: "m3", label: "Cubic Meters (m³)" },
      { value: "cm3", label: "Cubic Centimeters (cm³)" },
      { value: "gal", label: "Gallons (gal)" },
      { value: "qt", label: "Quarts (qt)" },
    ],
  },
  {
    name: "Length",
    units: [
      { value: "m", label: "Meters (m)" },
      { value: "cm", label: "Centimeters (cm)" },
      { value: "mm", label: "Millimeters (mm)" },
      { value: "nm", label: "Nanometers (nm)" },
      { value: "A", label: "Angstroms (Å)" },
      { value: "in", label: "Inches (in)" },
      { value: "ft", label: "Feet (ft)" },
    ],
  },
  {
    name: "Temp",
    units: [
      { value: "C", label: "Celsius (°C)" },
      { value: "K", label: "Kelvin (K)" },
      { value: "F", label: "Fahrenheit (°F)" },
    ],
  },
  {
    name: "Pressure",
    units: [
      { value: "Pa", label: "Pascals (Pa)" },
      { value: "kPa", label: "Kilopascals (kPa)" },
      { value: "atm", label: "Atmospheres (atm)" },
      { value: "Torr", label: "Torr" },
      { value: "mmHg", label: "Millimeters of Mercury (mmHg)" },
    ],
  },
  {
    name: "Energy",
    units: [
      { value: "J", label: "Joules (J)" },
      { value: "kJ", label: "Kilojoules (kJ)" },
      { value: "cal", label: "Calories (cal)" },
      { value: "kcal", label: "Kilocalories (kcal)" },
    ],
  },
  {
    name: "Amount",
    units: [
        { value: "mol", label: "Moles (mol)" },
    ]
  },
  {
    name: "Conc",
    units: [
        { value: "M", label: "Molarity (M)" },
        { value: "m_molality", label: "Molality (m)" },
        { value: "N", label: "Normality (N)" },
    ]
  }
];

const allUnitsList: UnitDefinition[] = unitCategoriesDefinition.reduce((acc, category) => {
  return acc.concat(category.units);
}, [] as UnitDefinition[]).sort((a, b) => a.label.localeCompare(b.label)); // Sort all units alphabetically

const categoriesForFilter: Category[] = [
  { name: "All", units: allUnitsList },
  ...unitCategoriesDefinition,
];


export default function ChemistryCalculatorPage() {
  // State for Unit Conversion
  const [unitValue, setUnitValue] = useState('');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [unitConversionResult, setUnitConversionResult] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // State for Molar Mass Calculator
  const [chemicalFormula, setChemicalFormula] = useState('');
  const [molarMassResult, setMolarMassResult] = useState<string | null>(null);

  const handleUnitConversion = () => {
    if (!unitValue || !fromUnit || !toUnit) {
      setUnitConversionResult('Please fill in all fields for unit conversion.');
      return;
    }
    const numericValue = parseFloat(unitValue);
    if (isNaN(numericValue)) {
      setUnitConversionResult('Please enter a valid number for conversion.');
      return;
    }
    const conversionResult = convertUnits({ value: numericValue, fromUnit, toUnit });
    setUnitConversionResult(conversionResult);
  };

  const handleMolarMassCalculate = () => {
    if (!chemicalFormula) {
      setMolarMassResult('Please enter a chemical formula.');
      return;
    }
    const massResult = calculateMolarMass(chemicalFormula);
    setMolarMassResult(massResult);
  };

  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setFromUnit(''); // Reset unit selections when category changes
    setToUnit('');
    setUnitConversionResult(null); // Clear previous result
  };

  const currentDisplayUnits = useMemo(() => {
    if (selectedCategory === 'All') {
      return allUnitsList;
    }
    const category = unitCategoriesDefinition.find(cat => cat.name === selectedCategory);
    return category ? category.units : [];
  }, [selectedCategory]);

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 font-poppins">
      <header className="text-center mb-12">
        <h1 className="text-2xl font-medium tracking-tight sm:text-5xl md:text-6xl">
          Chem Calculator
        </h1>
        <p className="mt-4 text-md text-muted-foreground">
          Perform various chemistry-related calculations with ease.
        </p>
      </header>

      <div className="max-w-2xl mx-auto space-y-8">
        {/* Unit Conversion Calculator */}
          <Card>
            <CardHeader>
            <p className='text-xl font-medium'>Unit Conversion</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {categoriesForFilter.map(category => (
                  <Button
                    key={category.name}
                    variant={selectedCategory === category.name ? "outline" : "secondary"}
                    onClick={() => handleCategoryChange(category.name)}
                    className='text-xs w-max h-6 text-muted-foreground'
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
              <div>
                <label htmlFor="unitValue" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Value</label>
                <Input
                  id="unitValue"
                  type="number"
                  placeholder="Enter value"
                  value={unitValue}
                  onChange={(e) => setUnitValue(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fromUnit" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">From Unit</label>
                  <Select value={fromUnit} onValueChange={setFromUnit}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select unit" />
                    </SelectTrigger>
                    <SelectContent>
                      {currentDisplayUnits.map(unit => (
                        <SelectItem key={`from-${unit.value}`} value={unit.value}>
                          {unit.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="toUnit" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">To Unit</label>
                  <Select value={toUnit} onValueChange={setToUnit}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select unit" />
                    </SelectTrigger>
                    <SelectContent>
                       {currentDisplayUnits.map(unit => (
                        <SelectItem key={`to-${unit.value}`} value={unit.value}>
                          {unit.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button onClick={handleUnitConversion} className="w-full">Convert</Button>
              {unitConversionResult && (
                <div className="mt-4 p-3 bg-secondary rounded-md">
                  <p className="text-secondary-foreground">{unitConversionResult}</p>
                </div>
              )}
            </CardContent>
          </Card>
        
        {/* Molar Mass Calculator */}
          <Card>
            <CardHeader>
              <p className='text-xl font-medium'>Molar Mass Calculator</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="chemicalFormula" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Chemical Formula</label>
                <Input
                  id="chemicalFormula"
                  type="text"
                  placeholder="e.g., H2O, NaCl"
                  value={chemicalFormula}
                  onChange={(e) => setChemicalFormula(e.target.value)}
                />
              </div>
              <Button onClick={handleMolarMassCalculate} className="w-full">Calculate Molar Mass</Button>
              {molarMassResult && (
                <div className="mt-4 p-3 bg-secondary rounded-md">
                  <p className="text-secondary-foreground">{molarMassResult}</p>
                </div>
              )}
            </CardContent>
          </Card>
      </div>
    </div>
  );
}