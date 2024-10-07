import React from 'react';
import ItemCard from './ItemCard';

export default function Shelf({ data }) {
  let counter = 0;
  return (
    <section className="flex flex-col mb-10 p-4">
      <div className="shelf__title text-white mb-3">{data.shelf}</div>
      <div className="flex gap-10">
        {data.cards.map((card) => {
          counter++;
          if (window.innerWidth > 1780 && counter <= 6) {
            return <ItemCard card={card} rounded={data.rounded} />;
          } else if (
            window.innerWidth < 1780 &&
            window.innerWidth >= 1610 &&
            counter <= 5
          ) {
            return <ItemCard card={card} rounded={data.rounded} />;
          } else if (
            window.innerWidth < 1610 &&
            window.innerWidth >= 1270 &&
            counter <= 4
          ) {
            return <ItemCard card={card} rounded={data.rounded} />;
          } else if (
            window.innerWidth < 1270 &&
            window.innerWidth >= 740 &&
            counter <= 3
          ) {
            return <ItemCard card={card} rounded={data.rounded} />;
          } else if (
            window.innerWidth < 740 &&
            window.innerWidth >= 500 &&
            counter <= 2
          ) {
            return <ItemCard card={card} rounded={data.rounded} />;
          } else if (
            window.innerWidth < 500 &&
            window.innerWidth >= 320 &&
            counter <= 1
          ) {
            return <ItemCard card={card} rounded={data.rounded} />;
          }
        })}
      </div>
    </section>
  );
}
