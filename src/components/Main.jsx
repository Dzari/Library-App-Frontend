import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import HomeView from './Views/HomeView';
import ShowAllView from './Views/ShowAllView';

import { screenWidthContext } from '../contexts/contexts';

export default function Main({ shelvesData }) {
  console.log(shelvesData);
  const { screenWidth } = useContext(screenWidthContext);
  const position =
    screenWidth > 980 ? 'col-start-2 col-span-4' : 'col-start-1 col-span-5';
  return (
    <div
      className={`main ${position} bg-gradient-to-b from-[#535353] to-[#121212] to-30% rounded-xl h-[93vh]`}
    >
      <Routes>
        <Route path="/" element={<HomeView shelves={shelvesData} />} />
        {shelvesData.map((data) => {
          return (
            <Route
              path={`/${data.shelf}`}
              element={<ShowAllView data={data} />}
            />
          );
        })}
      </Routes>
    </div>
  );
}
