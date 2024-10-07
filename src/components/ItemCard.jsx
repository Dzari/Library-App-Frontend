import React from 'react';

export default function ItemCard({ card, rounded }) {
  const roundedImageClasses =
    'h-[220px] w-[220px] rounded-full object-cover object-center';
  const squareImageClasses = 'object-contain object-center';

  return (
    <div className="card flex flex-col max-w-[220px]">
      <div
        className={`card_image-container max-h-[${
          rounded ? '220px' : '330px'
        }] max-w-[220px] flex justify-center`}
      >
        <img
          src={card.img}
          alt={card.title}
          className={rounded ? roundedImageClasses : squareImageClasses}
        />
      </div>
      <div className="card__info text-white m-1 my-3">
        <h2 className="card__title truncate">{card.title}</h2>
        <h3 className="card__subtitle text-xs font-normal truncate">
          {card.subtitle}
        </h3>
      </div>
    </div>
  );
}
