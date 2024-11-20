import React from 'react';

export default function ItemCard({ card, rounded, onClick }) {
  const roundedImageClasses = 'h-[220px] w-[220px] rounded-full object-cover';

  const handleCardClick = () => {
    onClick(card);
  };

  return (
    <div className="card flex flex-col max-w-[220px]">
      <div
        className={`card_image-container shadow-[0_10px_30px_rgba(0,0,0,0.8)] max-h-[${
          rounded ? '220px' : '330px'
        }] max-w-[220px] flex justify-center`}
      >
        {card.img === null ? (
          card.title
        ) : (
          <img
            src={card.img}
            alt={card.title}
            className={`card__image ${
              rounded ? roundedImageClasses : 'object-cover'
            } object-center`}
            onClick={handleCardClick}
          />
        )}
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
