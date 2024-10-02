import React from 'react';
import ItemCard from '../ItemCard/ItemCard';

export default function Shelf({ data }) {
  return (
    <section className='flex flex-col mb-10 p-4'>
      <div className="shelf__title text-white mb-3">{data.shelf}</div>
      <div className='flex gap-10'>
        {data.cards.map((card) => {
          return <ItemCard card={card} shelf={data.shelf} />;
        })}
      </div>
    </section>
  );
}
