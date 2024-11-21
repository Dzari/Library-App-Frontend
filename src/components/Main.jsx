import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import HomeView from './Views/HomeView';
import ShowAllView from './Views/ShowAllView';
import SearchResults from './Views/SearchResults';

import { searchResultsContext } from '../contexts/contexts';

export default function Main({ shelvesData, handleCardClick, width }) {
  const { searchResults } = useContext(searchResultsContext);
  const position =
    width <= 979 ? 'col-start-1 col-span-5' : 'col-start-2 col-span-4';

  return (
    <div
      className={`main ${position} bg-gradient-to-b from-[#535353] to-[#121212] to-30% rounded-xl h-[93vh]`}
    >
      <Routes>
        <Route
          path="/"
          element={
            <HomeView shelves={shelvesData} handleCardClick={handleCardClick} />
          }
        />
        {shelvesData.map((data) => {
          return (
            <Route
              path={`/${data.shelf}`}
              element={<ShowAllView data={data} />}
            />
          );
        })}
        <Route
          path="/searchResults"
          element={
            <SearchResults
              books={searchResults}
              handleCardClick={handleCardClick}
            />
          }
        />
      </Routes>
    </div>
  );
}
