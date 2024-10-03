import React from 'react';
import Shelf from '../Shelves/Shelves';

export default function Main() {
  const position = window.innerWidth > 980 ? 'col-start-2 col-span-4' : 'col-start-1 col-span-5';
  return (
    <div className={`main ${position} bg-gradient-to-b from-[#535353] to-[#121212] to-30% rounded-xl h-[93vh]`}>
      <Shelf />
    </div>
  );
}
