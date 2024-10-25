import React from 'react';
import Shelf from '../Shelf';

export default function HomeView({shelves}) {
  return (
    <section className="overflow-auto h-full">
      {shelves.map((data) => {
        return <Shelf data={data} />;
      })}
    </section>
  );
}
