"use client";

import { useState, useRef, useEffect } from 'react';
import { elements, ElementCategory, categoryColors } from '@/lib/elementData';
import ElementCard from '@/components/elements/element-card';
import { Button } from '@/components/ui/button';
import { 
  Maximize2, 
  Minimize2, 
  Filter, 
  X 
} from 'lucide-react';

export default function PeriodicTable() {
  const [scale, setScale] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<ElementCategory | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const categories: ElementCategory[] = [
    "alkali-metal",
    "alkaline-earth-metal",
    "transition-metal",
    "post-transition-metal",
    "metalloid",
    "nonmetal",
    "halogen",
    "noble-gas",
    "lanthanide",
    "actinide"
  ];

  // Grid has 18 columns (groups) and 10 rows (7 periods + lanthanides + actinides + empty row)
  const gridPositions: Record<number, { row: number; col: number }> = {};
  
  elements.forEach(element => {
    // Basic positioning - this would be expanded for a full periodic table
    gridPositions[element.atomicNumber] = {
      row: element.period,
      col: element.group
    };
    
    // Special handling for lanthanides and actinides
    if (element.category === 'lanthanide') {
      gridPositions[element.atomicNumber] = {
        row: 8,
        col: element.atomicNumber - 54 // Approximate positioning
      };
    } else if (element.category === 'actinide') {
      gridPositions[element.atomicNumber] = {
        row: 9,
        col: element.atomicNumber - 86 // Approximate positioning
      };
    }
  });

  // For an actual implementation, you'd have the complete set of elements and their correct positions

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 0.6));
  };

  const handleReset = () => {
    setScale(1);
    setSelectedCategory(null);
  };

  const filteredElements = selectedCategory 
    ? elements.filter(el => el.category === selectedCategory)
    : elements;

  return (
    <div className="w-full overflow-hidden border border-border rounded-lg">
      <div className="bg-card p-4 border-b border-border flex justify-between items-center text-xs italic">
        {/* <h2 className="text-lg font-semibold">Periodic Table of Elements</h2> */}
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="gap-0.5 h-7 px-2 py-1 text-xs"
          >
            <Filter className="h-3 w-3" />
            <span className="hidden sm:inline">Filter</span>
          </Button>
          <div className="flex border border-border rounded-md">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleZoomOut}
              disabled={scale <= 0.6}
              className="h-7 w-7 rounded-none"
            >
              <Minimize2 className="h-3 w-3" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleReset}
              className="h-7 border-x border-border rounded-none px-2 text-xs"
            >
              {Math.round(scale * 100)}%
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleZoomIn}
              disabled={scale >= 2}
              className="h-7 w-7 rounded-none"
            >
              <Maximize2 className="h-3 w-3" />
            </Button>
            
          </div>
          slide -&gt; mobile view
        </div>
      </div>

      {showFilters && (
        <div className="bg-card/50 p-4 border-b border-border">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm font-medium">Filter by category:</span>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className={`text-xs ${selectedCategory === category ? 
                  'bg-foreground text-background' : 
                  `${categoryColors[category].bg} ${categoryColors[category].text}`
                }`}
                onClick={() => setSelectedCategory(
                  selectedCategory === category ? null : category
                )}
              >
                {category.replace('-', ' ')}
              </Button>
            ))}
            {selectedCategory && (
              <Button
                variant="ghost"
                size="sm"
                className="gap-1 ml-auto"
                onClick={() => setSelectedCategory(null)}
              >
                <X className="h-3 w-3" />
                <span>Clear filter</span>
              </Button>
            )}
          </div>
        </div>
      )}

      <div 
        ref={wrapperRef} 
        className="p-4 overflow-auto bg-background/50 max-h-[calc(100vh-250px)]"
        style={{ minHeight: '500px' }}
      >
        {selectedCategory ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {filteredElements.map(element => (
              <ElementCard key={element.atomicNumber} element={element} size="medium" />
            ))}
          </div>
        ) : (
          <div 
            className="relative w-[1100px] h-[580px] transform origin-top-left transition-transform"
            style={{ transform: `scale(${scale})` }}
          >
            {/* This would be expanded for a full implementation */}
            {elements.map(element => {
              const position = gridPositions[element.atomicNumber];
              if (!position) return null;
              
              return (
                <div 
                  key={element.atomicNumber}
                  className="absolute"
                  style={{ 
                    top: `${(position.row - 1) * 60}px`, 
                    left: `${(position.col - 1) * 60}px`,
                  }}
                >
                  <ElementCard element={element} size="small" />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}