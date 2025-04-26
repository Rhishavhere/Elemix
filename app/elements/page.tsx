import PeriodicTable from '@/components/elements/periodic-table';

export default function ElementsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Periodic Table of Elements</h1>
      <p className="text-muted-foreground mb-8">
        Explore all chemical elements organized by their properties. Click on any element to view detailed information.
      </p>
      
      <PeriodicTable />
    </div>
  );
}