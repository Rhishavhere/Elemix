import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Molecule } from '@/lib/moleculeData';

interface MoleculeCardProps {
  molecule: Molecule;
}

export default function MoleculeCard({ molecule }: MoleculeCardProps) {
  return (
    <Link href={`/molecules/${molecule.id}`} className="block group">
      <Card className="h-full overflow-hidden transition-all hover:shadow-md">
        <CardHeader className="p-4 pb-2">
          <div className="flex items-start justify-between">
            <CardTitle className="font-semibold text-lg">{molecule.name}</CardTitle>
            <Badge variant="default" className="ml-2 font-mono">
              {molecule.formula}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          {/* <div className="mt-2 bg-muted/30 aspect-video rounded-md flex items-center justify-center overflow-hidden">
            <div className="text-4xl font-mono transform group-hover:scale-110 transition-transform duration-500">
              {molecule.formula}
            </div>
          </div> */}
          <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
            {molecule.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-1">
            {molecule.applications.slice(0, 3).map((app, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {app}
              </Badge>
            ))}
            {molecule.applications.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{molecule.applications.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}