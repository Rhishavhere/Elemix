import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { molecules } from '@/lib/moleculeData';
import MoleculeCard from '@/components/molecules/molecule-card';

export default function FeaturedMolecules() {
  // Take a subset of molecules to feature
  const featuredMolecules = molecules.slice(0, 3);
  
  return (
    <section className="py-12 font-poppins">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl sm:text-xl">Featured Molecules</h2>
          <Link 
            href="/molecules" 
            className="flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View all molecules
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredMolecules.map(molecule => (
            <MoleculeCard key={molecule.id} molecule={molecule} />
          ))}
        </div>
      </div>
    </section>
  );
}