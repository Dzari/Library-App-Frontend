import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { searchResultsContext } from '../contexts/contexts';

export default function Header({ handleLoginClick, handleSignupClick }) {
  const navigate = useNavigate();
  const { setSearchResults } = useContext(searchResultsContext);
  const [query, setQuery] = useState(''); // User input

  const setBooks = (books) => {
    setSearchResults(books);
  };

  const getLargerImageUrl = (thumbnailUrl) => {
    if (thumbnailUrl) {
      return thumbnailUrl
        .replace('&zoom=1', '&zoom=2')
        .replace('http', 'https');
    } else {
      return 'https://via.placeholder.com/128x192.png?text=No+Image';
    }
  };

  // Function to handle the API request
  const fetchBooks = async () => {
    if (!query.trim()) return; // Avoid empty searches

    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          query
        )}&maxResults=40`
      );
      const data = await response.json();

      if (data.items) {
        console.log(data.items);
        const formattedBooks = data.items.map((book) => ({
          img: getLargerImageUrl(book.volumeInfo.imageLinks?.thumbnail),
          title: book.volumeInfo.title || 'No Title Available',
          subtitle: book.volumeInfo.authors
            ? book.volumeInfo.authors.join(', ')
            : 'No Authors Available',
          link: book.saleInfo.buyLink,
        }));
        setBooks(formattedBooks);
        navigate('/searchResults');
      } else {
        setBooks([]);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    fetchBooks();
  };

  return (
    <div className="header col-span-5 h-[5vh]">
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
    </div>
  );
}
