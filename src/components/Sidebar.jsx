import React from 'react';

export default function Sidebar() {
  if (window.innerWidth > 980)
  return (
    <section className="sidebar col-start-1 col-span-1 bg-[#121212] rounded-xl text-white h-[93vh]">
      <nav>
        <div>
          <div className='flex justify-between'>
            <header className='p-2'>Your Library</header>
            <button className='p-2'>+</button>
          </div>
          <div>
            <section className='bg-[#1f1f1f] rounded-xl mx-2 my-8 py-4 px-[20px]'>
              <div className=''>
                <div className='pt-2 px-2'>Create Your own Booklist</div>
                <div className='text-xs px-2'>It's easy, we'll help you</div>
              </div>
              <button className='m-3 text-s px-4 py-1 rounded-2xl text-black bg-white'>Create Booklist</button>
            </section>
            <section className='bg-[#1f1f1f] rounded-xl m-2 py-4 px-[20px]'>
              <div>
                <div className='pt-2 px-2'>Find your next series</div>
                <div className='text-xs px-2'>We'll keep you updated on new releases</div>
              </div>
              <button className='m-3 text-s px-4 py-1 rounded-2xl text-black bg-white'>Browse Series</button>
            </section>
          </div>
        </div>

        {/* footer */}
      </nav>
    </section>
  );
}
