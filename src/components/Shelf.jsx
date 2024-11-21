import React, {  useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import ItemCard from './ItemCard';

export default function Shelf({ data, handleCardClick }) {
  let counter = 0;

  const divWidth = useRef(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (divWidth.current) {
      setWidth(divWidth.current.offsetWidth);
    }
  }, [divWidth.current.offsetWidth]);

  return (
    <section className="flex flex-col mb-10 p-4">
      <div className="shelf__container flex justify-between text-white mb-4">
        <div className="shelf__title">{data.shelf}</div>
        <Link to={data.shelf}>
          <button className="shelf__show-all-button">Show All</button>
        </Link>
      </div>
      <div ref={divWidth} className="flex justify-between overflow-hidden">
        {data.cards.map((card) => {
          counter++;
          if (counter <= width / 230) {
            return (
              <ItemCard
                card={card}
                rounded={data.rounded}
                onClick={handleCardClick}
              />
            );
          }
        })}
      </div>
    </section>
  );
}
