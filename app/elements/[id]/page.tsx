import { notFound } from 'next/navigation';
import { getElement, elements } from '@/lib/elementData';
import ElementDetail from '@/components/elements/element-detail';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export async function generateStaticParams() {
  return elements.map((element) => ({
    id: element.atomicNumber.toString()
  }));
}

interface ElementPageProps {
  params: {
    id: string;
  };
}

export default function ElementPage({ params }: ElementPageProps) {
  const atomicNumber = parseInt(params.id, 10);
  
  if (isNaN(atomicNumber)) {
    return notFound();
  }
  
  const element = getElement(atomicNumber);
  
  if (!element) {
    return notFound();
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/elements">
          <Button variant="ghost" className="gap-1 pl-1">
            <ChevronLeft className="h-4 w-4" />
            Back to Periodic Table
          </Button>
        </Link>
      </div>
      
      <ElementDetail element={element} />
    </div>
  );
}