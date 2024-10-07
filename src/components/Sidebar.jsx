import React from 'react';
import ButtonCard from './ButtonCard';

export default function Sidebar() {
  if (window.innerWidth > 980)
    return (
      <section className="sidebar col-start-1 col-span-1 bg-[#121212] rounded-xl text-white h-[93vh]">
        <nav>
          <div>
            <div className="flex justify-between">
              <header className="p-2">Your Library</header>
              <button className="p-2">+</button>
            </div>
            <div>
              <ButtonCard
                title={'Create Your own Booklist'}
                subtitle={`It's easy, we'll help you`}
                buttonText={'Create Booklist'}
              />
              <ButtonCard
                title={'Find your next series'}
                subtitle={`We'll keep you updated on new releases`}
                buttonText={'Browse Series'}
              />
            </div>
          </div>

          {/* footer */}
        </nav>
      </section>
    );
}
