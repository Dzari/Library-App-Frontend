import React from 'react';
import Shelf from '../Shelves/Shelves';

export default function Main() {
  return (
    <div className="main col-start-2 col-span-4 bg-gradient-to-b from-[#535353] to-[#121212] to-30% rounded-xl h-[93vh]">
      <Shelf />
    </div>
  );
}
