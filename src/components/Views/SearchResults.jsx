import React from 'react';
import ItemCard from '../ItemCard';

const SearchResults = ({ books, handleCardClick }) => {
  return (
    <div className="flex gap-10 flex-wrap m-4 overflow-auto h-full">
      {books.length > 0 ? (
        books.map((book) => (
          <ItemCard card={book} rounded={false} onClick={handleCardClick} />
        ))
      ) : (
        <p>No books found. Try searching for something else.</p>
      )}
    </div>
  );
};

export default SearchResults;
