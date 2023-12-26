import React from 'react';
import ListCard from './ListCard';
import Card from './Card';

export default function PricingCard() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">
      <div className="my-6 flex flex-col space-y-6 md:my-0 md:flex-row md:space-x-6 md:space-y-0">
        {/* Column one */}
        <Card header="Basic" price="$1.99/Month" storage="100GB" text="100 GB of storage"/>
        <Card bgColor="bg-voilet-600"  header="Standard" price="$3.99/Month" storage="200GB" text="200 GB of storage"/>
        <Card header="Premium" price="$8.99/Month" storage="2 TB" text="2 TB of storage"/>
      </div>
    </div>
  );
}
