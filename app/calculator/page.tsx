"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { convertUnits, calculateMolarMass } from '../../lib/chemistryUtils';

export default function ChemistryCalculatorPage() {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [calculationType, setCalculationType] = useState('unitConversion'); // 'unitConversion', 'molarMass', etc.

  const handleCalculate = () => {
    if (calculationType === 'unitConversion') {
      if (!inputValue || !fromUnit || !toUnit) {
        setResult('Please fill in all fields for unit conversion.');
        return;
      }
      const numericValue = parseFloat(inputValue);
      if (isNaN(numericValue)) {
        setResult('Please enter a valid number for conversion.');
        return;
      }
      const conversionResult = convertUnits({ value: numericValue, fromUnit, toUnit });
      setResult(conversionResult);
    } else if (calculationType === 'molarMass') {
      if (!inputValue) {
        setResult('Please enter a chemical formula.');
        return;
      }
      const molarMassResult = calculateMolarMass(inputValue);
      setResult(molarMassResult);
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 font-poppins">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Chemistry Calculator
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Perform various chemistry-related calculations with ease.
        </p>
      </header>

      <div className="max-w-2xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Select Calculation Type</CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={calculationType} onValueChange={setCalculationType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select calculation type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="unitConversion">Unit Conversion</SelectItem>
                <SelectItem value="molarMass">Molar Mass Calculator</SelectItem>
                {/* Add more calculation types here */}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {calculationType === 'unitConversion' && (
          <Card>
            <CardHeader>
              <CardTitle>Unit Conversion</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="inputValue" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Value</label>
                <Input
                  id="inputValue"
                  type="number"
                  placeholder="Enter value"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
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
                      <SelectItem value="g">Grams (g)</SelectItem>
                      <SelectItem value="kg">Kilograms (kg)</SelectItem>
                      <SelectItem value="mol">Moles (mol)</SelectItem>
                      <SelectItem value="L">Liters (L)</SelectItem>
                      <SelectItem value="mL">Milliliters (mL)</SelectItem>
                      {/* Add more units */}
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
                      <SelectItem value="g">Grams (g)</SelectItem>
                      <SelectItem value="kg">Kilograms (kg)</SelectItem>
                      <SelectItem value="mol">Moles (mol)</SelectItem>
                      <SelectItem value="L">Liters (L)</SelectItem>
                      <SelectItem value="mL">Milliliters (mL)</SelectItem>
                      {/* Add more units */}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button onClick={handleCalculate} className="w-full">Convert</Button>
              {result && (
                <div className="mt-4 p-3 bg-secondary rounded-md">
                  <p className="text-secondary-foreground">{result}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {calculationType === 'molarMass' && (
          <Card>
            <CardHeader>
              <CardTitle>Molar Mass Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="chemicalFormula" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Chemical Formula</label>
                <Input
                  id="chemicalFormula"
                  type="text"
                  placeholder="e.g., H2O, NaCl"
                  value={inputValue} // Reusing inputValue for simplicity here
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </div>
              <Button onClick={handleCalculate} className="w-full">Calculate Molar Mass</Button>
              {result && (
                <div className="mt-4 p-3 bg-secondary rounded-md">
                  <p className="text-secondary-foreground">{result}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}