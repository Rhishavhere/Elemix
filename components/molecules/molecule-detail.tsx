import { Molecule } from '@/lib/moleculeData';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { FlaskRound as Flask, Weight, Thermometer, Droplet, Beaker, Info, Check, List } from 'lucide-react';

interface MoleculeDetailProps {
  molecule: Molecule;
}

export default function MoleculeDetail({ molecule }: MoleculeDetailProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold">{molecule.name}</CardTitle>
              <CardDescription>
                <span className="text-lg font-mono">{molecule.formula}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 h-52 rounded-md flex items-center justify-center mb-4">
                <div className="text-6xl font-mono">{molecule.formula}</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Weight className="h-4 w-4 text-chart-1" />
                  <span className="text-sm text-muted-foreground">Molecular Weight:</span>
                  <span className="font-medium">{molecule.molecularWeight} g/mol</span>
                </div>
                
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <List className="h-4 w-4 text-chart-2" />
                    <span className="text-sm text-muted-foreground">Applications:</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-1 pl-6">
                    {molecule.applications.map((app, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {app}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:w-2/3 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-chart-3" />
                <CardTitle>Overview</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{molecule.description}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Beaker className="h-5 w-5 text-chart-4" />
                <CardTitle>Physical Properties</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Melting Point:</span>
                    <span className="font-medium">
                      {molecule.properties.meltingPoint !== undefined 
                        ? `${molecule.properties.meltingPoint}°C` 
                        : 'N/A'}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Boiling Point:</span>
                    <span className="font-medium">
                      {molecule.properties.boilingPoint !== undefined 
                        ? `${molecule.properties.boilingPoint}°C` 
                        : 'N/A'}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Density:</span>
                    <span className="font-medium">
                      {molecule.properties.density !== undefined 
                        ? `${molecule.properties.density} g/cm³` 
                        : 'N/A'}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Solubility:</span>
                    <span className="font-medium">
                      {molecule.properties.solubility || 'N/A'}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Acidity:</span>
                    <span className="font-medium">
                      {molecule.properties.acidity || 'N/A'}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Basicity:</span>
                    <span className="font-medium">
                      {molecule.properties.basicity || 'N/A'}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-chart-5" />
            <CardTitle>Applications and Uses</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {molecule.applications.map((app, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="h-4 w-4 text-primary mt-0.5" />
                <span>{app}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}