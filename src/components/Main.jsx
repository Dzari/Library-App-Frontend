import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import HomeView from './Views/HomeView';
import ShowAllView from './Views/ShowAllView';

import { screenWidthContext } from '../contexts/contexts';
import { shelves } from '../const';

export default function Main() {
  const { screenWidth } = useContext(screenWidthContext);
  const position =
    screenWidth > 980 ? 'col-start-2 col-span-4' : 'col-start-1 col-span-5';
  return (
    <div
      className={`main ${position} bg-gradient-to-b from-[#535353] to-[#121212] to-30% rounded-xl h-[93vh]`}
    >
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route
          path="/PopularAuthors"
          element={<ShowAllView data={shelves[0]} />}
        />
        <Route
          path="/PopularSeries"
          element={<ShowAllView data={shelves[1]} />}
        />
        <Route
          path="/BestSellers"
          element={<ShowAllView data={shelves[2]} />}
        />
      </Routes>
    </div>
  );
}
