import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { elements } from '@/lib/elementData';
import ElementCard from '@/components/elements/element-card';

export default function FeaturedElements() {
  // Take a subset of elements to feature
  // const featuredElements = Array.from({length: 4}, (_, i) => i + 1).map(atomicNumber =>
  //   elements.find(el => el.atomicNumber === atomicNumber)
  // ).filter(Boolean);
  const featuredElements = [1, 5, 7, 11].map(atomicNumber =>
    elements.find(el => el.atomicNumber === atomicNumber)
  ).filter(Boolean);
  
  return (
    <section className="py-4 bg-muted/30 m-4 rounded-xl font-poppins">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl sm:text-xl">Featured Elements</h2>
          <Link 
            href="/elements" 
            className="flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View all elements
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {featuredElements.map(element => (
            element && <ElementCard key={element.atomicNumber} element={element} size="large" />
          ))}
        </div>
      </div>
    </section>
  );
}