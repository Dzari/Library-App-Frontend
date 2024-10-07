import React from 'react';

export default function ItemCard({ card, shelf }) {
  {
    if (shelf === 'Popular Authors') {
      return (
        <div className="card flex flex-col max-w-[220px]">
          <div className="card_image-container max-h-[220px] max-w-[220px] flex justify-center">
            <img
              src={card.img}
              alt={card.author}
              className="h-[220px] w-[220px] rounded-full object-cover object-center"
            />
          </div>
          <div className="card__info text-white ml-5 my-3">
            <h2 className="card__title truncate">{card.author}</h2>
            <h3 className="card__subtitle text-xs font-normal truncate">
              Author
            </h3>
          </div>
        </div>
      );
    } else if (shelf === 'Popular Series') {
      return (
        <div className="card flex flex-col max-w-[220px]">
          <div className="card_image-container max-h-[330px] max-w-[220px] flex justify-center">
            <img
              src={card.img}
              alt={card.author}
              className="object-contain object-center"
            />
          </div>
          <div className="card__info text-white m-1 my-3">
            <h2 className="card__title truncate">{card.series}</h2>
            <h3 className="card__subtitle text-xs font-normal truncate">
              {card.author}
            </h3>
          </div>
        </div>
      );
    } else if (shelf === 'New York Best Sellers') {
      return (
        <div className="card flex flex-col max-w-[220px]">
          <div className="card_image-container max-h-[330px] max-w-[220px] flex justify-center">
            <img
              src={card.img}
              alt={card.author}
              className="object-contain object-center"
            />
          </div>
          <div className="card__info text-white m-1 my-3">
            <h2 className="card__title truncate">{card.title}</h2>
            <h3 className="card__subtitle text-xs font-normal truncate">
              {card.author}
            </h3>
          </div>
        </div>
      );
    }
  }
}
