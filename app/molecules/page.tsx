import { molecules } from '@/lib/moleculeData';
import MoleculeCard from '@/components/molecules/molecule-card';

export default function MoleculesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Molecular Database</h1>
      <p className="text-muted-foreground mb-8">
        Explore our collection of molecular structures, properties, and applications.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {molecules.map(molecule => (
          <MoleculeCard key={molecule.id} molecule={molecule} />
        ))}
      </div>
    </div>
  );
}