import React, { useContext } from 'react';
import ButtonCard from './ButtonCard';

import { screenWidthContext } from '../contexts/contexts';

export default function Sidebar({ handleLoggedOutClick }) {
  const { screenWidth } = useContext(screenWidthContext);
  if (screenWidth > 980)
    return (
      <section className="sidebar col-start-1 col-span-1 bg-[#121212] rounded-xl text-white h-[93vh]">
        <nav>
          <div>
            <div className="flex justify-between items-center">
              <button className="p-2 text-[#B3B3B3] hover:text-white">
                Your Library
              </button>
              <button
                className="m-2 bg-edit-icon hover:bg-hover-edit-icon h-6 w-6"
                onClick={handleLoggedOutClick}
              />
            </div>
            <div>
              <ButtonCard
                title={'Create Your own Booklist'}
                subtitle={`It's easy, we'll help you`}
                buttonText={'Create Booklist'}
                onClick={handleLoggedOutClick}
              />
              <ButtonCard
                title={'Find your next series'}
                subtitle={`We'll keep you updated on new releases`}
                buttonText={'Browse Series'}
                onClick={handleLoggedOutClick}
              />
            </div>
          </div>

          {/* footer */}
        </nav>
      </section>
    );
}
