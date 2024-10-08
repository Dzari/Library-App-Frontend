import React, { useContext } from 'react';
import HomeView from './Views/HomeView';

import { screenWidthContext } from '../contexts/contexts';

import { shelves } from '../const';
import ShowAllView from './Views/ShowAllView';

export default function Main() {
  const { screenWidth } = useContext(screenWidthContext);
  const position =
    screenWidth > 980 ? 'col-start-2 col-span-4' : 'col-start-1 col-span-5';
  return (
    <div
      className={`main ${position} bg-gradient-to-b from-[#535353] to-[#121212] to-30% rounded-xl h-[93vh]`}
    >
      {/* <HomeView /> */}
      <ShowAllView data={shelves[1]}/>
    </div>
  );
}
