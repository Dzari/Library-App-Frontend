import React, { useContext } from 'react';

import ItemCard from './ItemCard';

import { screenWidthContext } from '../contexts/contexts';

export default function Shelf({ data }) {
  let counter = 0;

  const { screenWidth } = useContext(screenWidthContext);
  return (
    <section className="flex flex-col mb-10 p-4">
      <div className="shelf__container flex justify-between text-white mb-4">
        <div className="shelf__title">{data.shelf}</div>
        <button className="shelf__show-all-button">Show All</button>
      </div>
      <div className="flex gap-10">
        {data.cards.map((card) => {
          counter++;
          if (screenWidth >= 1640 && counter <= 6) {
            return <ItemCard card={card} rounded={data.rounded} />;
          } else if (screenWidth >= 1380 && counter <= 5) {
            return <ItemCard card={card} rounded={data.rounded} />;
          } else if (screenWidth >= 1100 && counter <= 4) {
            return <ItemCard card={card} rounded={data.rounded} />;
          } else if (screenWidth >= 675 && counter <= 3) {
            return <ItemCard card={card} rounded={data.rounded} />;
          } else if (screenWidth >= 455 && counter <= 2) {
            return <ItemCard card={card} rounded={data.rounded} />;
          } else if (counter <= 1) {
            return <ItemCard card={card} rounded={data.rounded} />;
          }
        })}
      </div>
    </section>
  );
}
