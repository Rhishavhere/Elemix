import Link from 'next/link';
import { Element, categoryColors } from '@/lib/elementData';

interface ElementCardProps {
  element: Element;
  size?: 'small' | 'medium' | 'large';
}

export default function ElementCard({ element, size = 'medium' }: ElementCardProps) {
  const { 
    atomicNumber, 
    symbol, 
    name, 
    category,
    atomicMass
  } = element;
  
  const categoryStyle = categoryColors[category];
  
  const sizeClasses = {
    small: 'w-16 h-16 text-xs',
    medium: 'w-24 h-24 text-sm',
    large: 'w-32 h-32'
  };
  
  return (
    <Link href={`/elements/${atomicNumber}`}>
      <div 
        className={`${sizeClasses[size]} ${categoryStyle.bg} ${categoryStyle.text} rounded-lg p-2 flex flex-col justify-between transition-transform hover:scale-105 cursor-pointer relative overflow-hidden group border border-border/50`}
      >
        <div className="flex justify-between items-start">
          <span className="font-mono text-xs">{atomicNumber}</span>
          {size === 'large' && <span className="text-xs">{category.split('-').join(' ')}</span>}
        </div>
        
        <div className="text-center">
          <span className={`font-bold ${size === 'small' ? 'text-lg' : size === 'medium' ? 'text-2xl' : 'text-3xl'}`}>
            {symbol}
          </span>
          {(size === 'medium' || size === 'large') && (
            <div className="mt-1 text-xs font-medium truncate">{name}</div>
          )}
          {size === 'large' && (
            <div className="mt-1 text-xs opacity-80">{atomicMass.toFixed(2)}</div>
          )}
        </div>
        
        {/* Hover effect - radial gradient */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-radial-gradient transition-opacity duration-300"></div>
      </div>
    </Link>
  );
}