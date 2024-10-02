import React from 'react';

export default function Sidebar() {
  return (
    <section className="sidebar col-start-1 col-span-1 bg-[#121212] h-[1200px] rounded-xl text-white">
      <nav>
        <div>
          <div className='flex justify-between'>
            <header className='p-2'>Your Library</header>
            <button className='p-2'>+</button>
          </div>
          <div>
            <section className='bg-[#1f1f1f] rounded-xl my-10 mx-2'>
              <div>
                <div className='pt-2 px-2'>Create Your own Booklist</div>
                <div className='text-xs px-2'>It's easy, we'll help you</div>
              </div>
              <button className='m-3  p-2 rounded-2xl text-black bg-white'>Create Booklist</button>
            </section>
            <section className='bg-[#1f1f1f] rounded-xl my-10 mx-2'>
              <div>
                <div className='pt-2 px-2'>Find your next series</div>
                <div className='text-xs px-2'>We'll keep you updated on new releases</div>
              </div>
              <button className='m-3  p-2 rounded-2xl text-black bg-white'>Browse Series</button>
            </section>
          </div>
        </div>

        {/* footer */}
      </nav>
    </section>
  );
}
