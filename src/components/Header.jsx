import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ handleLoginClick, handleSignupClick }) {
  return (
    <div className="header col-span-5 h-[5vh]">
      <div className="top-0 w-full">
        <div className="header__container flex justify-between py-1.5 text-[#B3B3B3]">
          <Link to="/">
            <button className="header__home-button bg-home-icon hover:bg-hover-home-icon mt-2 ml-2 h-6 w-6" />
          </Link>
          <input
            type="text"
            placeholder="Search"
            className="w-[500px] rounded-full p-2.5 font-medium"
          />
          <div className="header__buttons flex gap-8 text-lg leading-6 mx-8">
            <button className="header__signup" onClick={handleSignupClick}>
              Signup
            </button>
            <button
              className="header__login text-black rounded-full border-2 border-solid px-8 bg-white"
              onClick={handleLoginClick}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
