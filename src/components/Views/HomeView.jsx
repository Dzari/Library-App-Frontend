import React from 'react';
import Shelf from '../Shelf';

export default function HomeView({ shelves, handleCardClick }) {
  return (
    <section className="overflow-auto h-full">
      {shelves.map((data, id) => {
        return <Shelf key={id} data={data} handleCardClick={handleCardClick} />;
      })}
    </section>
  );
}
