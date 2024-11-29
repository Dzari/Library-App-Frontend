import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { SearchResultsContext } from '../contexts/contexts';
import { getSearchResults } from '../utils/api';
import { formatResults } from '../utils/formatResults';

export default function Header({ handleLoginClick, handleSignupClick }) {
  const navigate = useNavigate();
  const { setSearchResults } = useContext(SearchResultsContext);
  const [query, setQuery] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await getSearchResults(query);
      const booksData = await formatResults(res);
      setSearchResults(booksData);
      navigate('/searchResults');
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <header className="header col-span-5 h-[5vh]">
      <div className="top-0 w-full">
        <div className="header__container flex justify-between py-1.5 text-[#B3B3B3]">
          <Link to="/">
            <button className="header__home-button bg-home-icon hover:bg-hover-home-icon mt-2 ml-2 h-6 w-6" />
          </Link>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-[500px] rounded-full p-2.5 font-medium"
            />
          </form>
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
    </header>
  );
}
