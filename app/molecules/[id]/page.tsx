import { notFound } from 'next/navigation';
import { getMolecule, molecules } from '@/lib/moleculeData';
import MoleculeDetail from '@/components/molecules/molecule-detail';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export async function generateStaticParams() {
  return molecules.map((molecule) => ({
    id: molecule.id
  }));
}

interface MoleculePageProps {
  params: {
    id: string;
  };
}

export default function MoleculePage({ params }: MoleculePageProps) {
  const { id } = params;
  const molecule = getMolecule(id);
  
  if (!molecule) {
    return notFound();
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/molecules">
          <Button variant="ghost" className="gap-1 pl-1">
            <ChevronLeft className="h-4 w-4" />
            Back to Molecules
          </Button>
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">{molecule.name}</h1>
      <MoleculeDetail molecule={molecule} />
    </div>
  );
}