import Link from 'next/link';
import { elements, Element } from '@/lib/elementData';
import { Button } from '@/components/ui/button';

interface ElementListProps {
  searchTerm?: string;
}

export default function ElementList({ searchTerm = '' }: ElementListProps) {
  const filteredElements = elements.filter((element) => {
    const term = searchTerm.toLowerCase();
    return (
      element.name.toLowerCase().includes(term) ||
      element.symbol.toLowerCase().includes(term) ||
      element.atomicNumber.toString().includes(term)
    );
  });

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-poppins mb-6">All Elements <span className='text-sm'> {searchTerm && `Filtered by "${searchTerm}"`}</span></h2>
      <div className="space-y-2">
        {filteredElements.map((element: Element) => (
          <Link key={element.atomicNumber} href={`/elements/${element.atomicNumber}`} passHref legacyBehavior>
            <Button
              variant="outline"
              className="justify-start h-auto py-2 px-3 text-left hover:bg-accent/50 transition-colors duration-150 ease-in-out"
            >
              <span className="font-medium mr-2">{element.atomicNumber}.</span>
              <span className="font-semibold mr-1">{element.name}</span>
              <span className="text-muted-foreground mr-2">({element.symbol})</span>
              <span className="text-xs text-muted-foreground mr-2">Group: {element.group}</span>
              <span className="text-xs text-muted-foreground mr-2">Period: {element.period}</span>
              <span className="text-xs text-muted-foreground mr-2">Category: {element.category.replace('-', ' ')}</span>
              <span className="text-xs text-muted-foreground">Block: {element.block}</span>
            </Button>
          </Link>
        ))}
        {filteredElements.length === 0 && searchTerm && (
          <p className="text-muted-foreground text-center py-4">No elements found matching &quot;{searchTerm}&quot;.</p>
        )}
      </div>
    </div>
  );
}