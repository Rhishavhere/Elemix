"use client";

import { useState } from 'react';
import { Element, categoryColors } from '@/lib/elementData';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Card, 
  CardContent
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  HelpCircle,
  Atom,
  FileText,
  BarChart3,
  Calendar,
  Thermometer,
  Droplet,
  Box
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface ElementDetailProps {
  element: Element;
}

interface PropertyItemProps {
  label: string;
  value: React.ReactNode;
  tooltip?: string;
  unit?: string;
}

function PropertyItem({ label, value, tooltip, unit }: PropertyItemProps) {
  return (
    <div className="flex justify-between items-center py-2">
      <div className="flex items-center gap-1">
        <span className="text-sm text-muted-foreground">{label}</span>
        {tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs text-xs">{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <div className="font-medium">
        {value !== undefined && value !== null ? (
          <>
            {value}
            {unit && <span className="ml-1 text-sm text-muted-foreground">{unit}</span>}
          </>
        ) : (
          <span className="text-muted-foreground">N/A</span>
        )}
      </div>
    </div>
  );
}

export default function ElementDetail({ element }: ElementDetailProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const categoryStyle = categoryColors[element.category];
  
  const formattedCategory = element.category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Element symbol card */}
        <div 
          className={`w-40 h-40 ${categoryStyle.bg} ${categoryStyle.text} rounded-xl p-4 flex flex-col justify-between shadow-lg border border-border`}
        >
          <div className="text-sm">{element.atomicNumber}</div>
          <div className="text-center">
            <div className="text-6xl font-bold">{element.symbol}</div>
            <div className="mt-1 text-sm">{element.atomicMass.toFixed(3)}</div>
          </div>
          <div className="text-sm text-right">{element.electronConfiguration}</div>
        </div>
        
        {/* Element overview */}
        <div className="flex-1">
          <div className="flex flex-wrap items-baseline gap-x-2">
            <h1 className="text-3xl font-bold">{element.name}</h1>
            <div className={`px-2 py-0.5 text-xs rounded-full ${categoryStyle.bg} ${categoryStyle.text}`}>
              {formattedCategory}
            </div>
          </div>
          
          <p className="mt-4 text-muted-foreground">{element.description}</p>
          
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <Card className="bg-card/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Atom className="h-4 w-4 text-chart-1" />
                  <span className="text-xs text-muted-foreground">Atomic Mass</span>
                </div>
                <div className="mt-1 font-medium">{element.atomicMass.toFixed(4)} u</div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-chart-2" />
                  <span className="text-xs text-muted-foreground">Standard State</span>
                </div>
                <div className="mt-1 font-medium">{element.standardState || "N/A"}</div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-chart-3" />
                  <span className="text-xs text-muted-foreground">Electronegativity</span>
                </div>
                <div className="mt-1 font-medium">{element.electronegativity || "N/A"}</div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-chart-4" />
                  <span className="text-xs text-muted-foreground">Year Discovered</span>
                </div>
                <div className="mt-1 font-medium">{element.yearDiscovered || "Ancient"}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="properties">Properties</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="p-4 border rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-3 flex items-center gap-1.5">
                <Atom className="h-4 w-4" />
                Basic Information
              </h3>
              <Card>
                <CardContent className="p-4 space-y-1">
                  <PropertyItem label="Atomic Number" value={element.atomicNumber} />
                  <PropertyItem label="Symbol" value={element.symbol} />
                  <PropertyItem label="Name" value={element.name} />
                  <PropertyItem label="Atomic Mass" value={element.atomicMass.toFixed(4)} unit="u" 
                    tooltip="Atomic mass in atomic mass units (g/mol)" />
                  <PropertyItem label="Category" value={formattedCategory} />
                  <PropertyItem label="Group" value={element.group} />
                  <PropertyItem label="Period" value={element.period} />
                  <PropertyItem label="Block" value={element.block} 
                    tooltip="Block in the periodic table (s, p, d, f)" />
                </CardContent>
              </Card>
              
              <h3 className="text-lg font-medium mb-3 mt-6 flex items-center gap-1.5">
                <Thermometer className="h-4 w-4" />
                Thermal Properties
              </h3>
              <Card>
                <CardContent className="p-4 space-y-1">
                  <PropertyItem 
                    label="Melting Point" 
                    value={element.meltingPoint} 
                    unit="K"
                    tooltip="Temperature at which the element melts at standard pressure" 
                  />
                  <PropertyItem 
                    label="Boiling Point" 
                    value={element.boilingPoint} 
                    unit="K"
                    tooltip="Temperature at which the element boils at standard pressure" 
                  />
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3 flex items-center gap-1.5">
                <Droplet className="h-4 w-4" />
                Electron Properties
              </h3>
              <Card>
                <CardContent className="p-4 space-y-1">
                  <PropertyItem 
                    label="Electron Configuration" 
                    value={element.electronConfiguration}
                    tooltip="Distribution of electrons in atomic orbitals" 
                  />
                  <PropertyItem 
                    label="Electronegativity" 
                    value={element.electronegativity}
                    tooltip="Measure of an atom's ability to attract electrons" 
                  />
                  <PropertyItem 
                    label="Ionization Energy" 
                    value={element.ionizationEnergy} 
                    unit="eV"
                    tooltip="Energy required to remove an electron from a neutral atom" 
                  />
                  <PropertyItem 
                    label="Electron Affinity" 
                    value={element.electronAffinity} 
                    unit="eV"
                    tooltip="Energy change when an electron is added to a neutral atom" 
                  />
                  <PropertyItem 
                    label="Oxidation States" 
                    value={element.oxidationStates}
                    tooltip="Common oxidation states of the element in compounds" 
                  />
                </CardContent>
              </Card>
              
              <h3 className="text-lg font-medium mb-3 mt-6 flex items-center gap-1.5">
                <Box className="h-4 w-4" />
                Physical Properties
              </h3>
              <Card>
                <CardContent className="p-4 space-y-1">
                  <PropertyItem 
                    label="Standard State" 
                    value={element.standardState}
                    tooltip="Physical state at room temperature and pressure" 
                  />
                  <PropertyItem 
                    label="Density" 
                    value={element.density ? element.density.toExponential(3) : null} 
                    unit="g/cm³"
                    tooltip="Mass per unit volume" 
                  />
                  <PropertyItem 
                    label="Bonding Type" 
                    value={element.bondingType}
                    tooltip="Predominant type of chemical bonding" 
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="properties" className="p-4 border rounded-lg mt-4">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3 flex items-center gap-1.5">
                <Atom className="h-4 w-4" />
                Atomic Structure
              </h3>
              <Card>
                <CardContent className="p-4 space-y-2">
                  <PropertyItem 
                    label="Atomic Radius" 
                    value={element.atomicRadius} 
                    unit="pm"
                    tooltip="Half the distance between two bound atoms of the same element" 
                  />
                  <PropertyItem 
                    label="Ion Radius" 
                    value={element.ionRadius} 
                    unit="pm"
                    tooltip="Radius of the ion in a crystal lattice" 
                  />
                  <PropertyItem 
                    label="Van der Waals Radius" 
                    value={element.vanDerWaalsRadius} 
                    unit="pm"
                    tooltip="Radius of the atom in non-bonding contact with another atom" 
                  />
                  <Separator className="my-2" />
                  <div className="pt-2">
                    <h4 className="text-sm font-medium mb-2">Electron Configuration</h4>
                    <div className="bg-muted/50 p-3 rounded-md font-mono text-sm">
                      {element.electronConfiguration}
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      The arrangement of electrons in the atomic orbitals.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3 flex items-center gap-1.5">
                <Droplet className="h-4 w-4" />
                Electron Properties
              </h3>
              <Card>
                <CardContent className="p-4 space-y-2">
                  <PropertyItem 
                    label="Electronegativity (Pauling)" 
                    value={element.electronegativity}
                    tooltip="Measure of an atom's ability to attract electrons in a bond" 
                  />
                  <PropertyItem 
                    label="First Ionization Energy" 
                    value={element.ionizationEnergy} 
                    unit="eV"
                    tooltip="Energy required to remove an electron from a neutral atom" 
                  />
                  <PropertyItem 
                    label="Electron Affinity" 
                    value={element.electronAffinity} 
                    unit="eV"
                    tooltip="Energy released when an electron is added to a neutral atom" 
                  />
                  <PropertyItem 
                    label="Oxidation States" 
                    value={element.oxidationStates}
                    tooltip="Common oxidation states of the element in compounds" 
                  />
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3 flex items-center gap-1.5">
                <Thermometer className="h-4 w-4" />
                Thermal Properties
              </h3>
              <Card>
                <CardContent className="p-4 space-y-2">
                  <PropertyItem 
                    label="Melting Point" 
                    value={element.meltingPoint} 
                    unit="K"
                    tooltip="Temperature at which the element melts at standard pressure" 
                  />
                  <PropertyItem 
                    label="Boiling Point" 
                    value={element.boilingPoint} 
                    unit="K"
                    tooltip="Temperature at which the element boils at standard pressure" 
                  />
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3 flex items-center gap-1.5">
                <Box className="h-4 w-4" />
                Physical Properties
              </h3>
              <Card>
                <CardContent className="p-4 space-y-2">
                  <PropertyItem 
                    label="Density" 
                    value={element.density ? element.density.toExponential(3) : null} 
                    unit="g/cm³"
                    tooltip="Mass per unit volume" 
                  />
                  <PropertyItem 
                    label="Standard State" 
                    value={element.standardState}
                    tooltip="Physical state at room temperature and pressure" 
                  />
                  <PropertyItem 
                    label="Bonding Type" 
                    value={element.bondingType}
                    tooltip="Predominant type of chemical bonding" 
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="history" className="p-4 border rounded-lg mt-4">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Discovery</h3>
              <Card>
                <CardContent className="p-4 space-y-2">
                  <PropertyItem 
                    label="Year Discovered" 
                    value={element.yearDiscovered}
                    tooltip="Year when the element was first isolated or identified" 
                  />
                  <PropertyItem 
                    label="Discovered By" 
                    value={element.discoveredBy}
                    tooltip="Scientist(s) or civilization credited with discovery" 
                  />
                  
                  {/* <div className="pt-3">
                    <h4 className="text-sm font-medium mb-2">Historical Significance</h4>
                    <p className="text-sm text-muted-foreground">
                      {element.name} was discovered in {element.yearDiscovered} by {element.discoveredBy}. 
                      It has been an important element in the development of modern chemistry and has numerous 
                      applications across various industries.
                    </p>
                  </div> */}
                </CardContent>
              </Card>
            </div>
            
            {/* <div>
              <h3 className="text-lg font-medium mb-3">Etymology</h3>
              <Card>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    The name &quot;{element.name}&quot; comes from [etymology would be included here]. 
                    The symbol {element.symbol} was derived from [symbol origin would be included here].
                  </p>
                </CardContent>
              </Card>
            </div> */}
            
            {/* <div>
              <h3 className="text-lg font-medium mb-3">Historical Uses</h3>
              <Card>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Throughout history, {element.name} has been used for [historical uses would be included here].
                  </p>
                </CardContent>
              </Card>
            </div> */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}