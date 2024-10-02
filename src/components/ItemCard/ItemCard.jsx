import React from 'react';

export default function ItemCard({ card, shelf }) {
  {
    if (shelf === 'Popular Authors') {
      return (
        <div className="card flex flex-col">
          <img
            src={card.img}
            alt={card.author}
            className="h-[220px] w-[220px] rounded-full object-cover object-center"
          />
          <div className="card__info text-white ml-5 my-3">
            <h2 className="card__title">{card.author}</h2>
            <h3 className="card__subtitle text-xs font-normal">Author</h3>
          </div>
        </div>
      );
    } else if (shelf === 'Popular Series') {
      return (
        <div className="card flex flex-col">
          <img
            src={card.img}
            alt=""
            className="h-[220px] w-[220px] object-contain object-center"
          />
          <div className="card__info text-white m-auto my-3">
            <h2 className="card__title">{card.series}</h2>
            <h3 className="card__subtitle text-xs font-normal">
              {card.author}
            </h3>
          </div>
        </div>
      );
    } else if (shelf === 'New York Best Sellers') {
      return (
        <div className="card flex flex-col">
          <img
            src={card.img}
            alt=""
            className="h-[220px] w-[220px] object-contain object-center"
          />
          <div className="card__info text-white m-auto my-3">
            <h2 className="card__title">{card.title}</h2>
            <h3 className="card__subtitle text-xs font-normal">
              {card.author}
            </h3>
          </div>
        </div>
      );
    }
  }
}
