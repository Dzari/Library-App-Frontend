import React from 'react';
import { shelves } from '../../const';
import Shelf from '../Shelf/Shelf';

export default function Shelves() {
  return (
    <section className='overflow-auto h-full'>
      {shelves.map((data) => {
        return <Shelf data={data} />;
      })}
    </section>    
  );
}
