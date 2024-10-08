import React, { useContext } from 'react';

import ItemCard from '../ItemCard';

export default function ShowAllView({ data }) {
  return (
    <section className="showAll overflow-auto h-full">
        <div className="showAll__container mb-10 p-4">
      <h2 className="showAll__title text-3xl text-white mb-10">{data.shelf}</h2>
      <div className="flex gap-10 flex-wrap">
        {data.cards.map((card) => {
          return <ItemCard card={card} rounded={data.rounded} />;
        })}
      </div>
      </div>
    </section>
  );
}
