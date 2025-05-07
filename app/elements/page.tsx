"use client";

import { useState } from 'react';
import ElementList from '@/components/elements/element-list';
import PeriodicTable from '@/components/elements/periodic-table';
import { Input } from '@/components/ui/input'; // Assuming you have an Input component

export default function ElementsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container mx-auto px-4 py-8 font-poppins">
      <h1 className="text-2xl mb-6">Periodic Table of Elements</h1>
      <p className="text-muted-foreground mb-8 text-sm">
        Explore all chemical elements organized by their properties. Click on any element to view detailed information.
      </p>

      <div className="mb-8">
        <Input
          type="text"
          placeholder="Search elements (e.g., Hydrogen, He, 1)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>
      
      <PeriodicTable />
      <ElementList searchTerm={searchTerm} />
    </div>
  );
}