import { useEffect, useRef, useState } from 'react';

import Header from './Header.jsx';
import Main from './Main.jsx';
import Sidebar from './Sidebar.jsx';
import LoginModal from './LoginModal.jsx';
import SignupModal from './signupModal.jsx';
import PreviewModal from './PreviewModal.jsx';
import { getBook, getBestSellers } from '../utils/api.jsx';

import { SearchResultsContext } from '../contexts/contexts.js';

export default function App() {
  const divRef = useRef(0);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [searchResults, setSearchResults] = useState([]);
  const [activeModal, setActiveModal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedBook, setSelectedBook] = useState({});
  const [shelves, setShelves] = useState([]);
  const [width, setWidth] = useState(0);

  const handleCloseModal = () => {
    setActiveModal('');
  };

  const handleLogin = () => {
    console.log('logged in');
  };

  const handleSignup = () => {
    console.log('signed up');
  };

  const handleSignupClick = () => {
    setActiveModal('signup');
  };

  const handleLoginClick = () => {
    setActiveModal('login');
  };

  const handleCardClick = (book) => {
    setActiveModal('preview');
    setSelectedBook(book);
  };

  const toPascalCase = (str) => {
    return str
      .toLowerCase()
      .split(/[\s-_]+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  useEffect(() => {
    if (divRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          if (entry.contentBoxSize) {
            setWidth(entry.contentRect.width);
          }
        }
      });
      resizeObserver.observe(divRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  //getBook();
  //getBestSellers();

  useEffect(() => {
    getBestSellers()
      .then((data) => {
        const shelvesData = data.results.lists.map((shelf) => {
          let modifiedShelf = {
            shelf: `${shelf.display_name}`,
            rounded: false,
            cards: shelf.books.map((book) => {
              const bookData = {
                title: toPascalCase(book.title),
                subtitle: book.author,
                img: book.book_image,
                des: book.description,
                link: book.amazon_product_url,
              };
              return bookData;
            }),
          };
          return modifiedShelf;
        });
        setShelves(shelvesData);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="app h-[100vh] bg-black">
      <SearchResultsContext.Provider
        value={{ searchResults, setSearchResults }}
      >
        <div
          ref={divRef}
          className="app__wrapper grid grid-cols-5 grid-row-auto gap-2.5 px-2 max-w-2k font-bold mx-auto overflow-hidden"
        >
          <Header
            handleLoginClick={handleLoginClick}
            handleSignupClick={handleSignupClick}
          />
          {width >= 980 && <Sidebar handleLoggedOutClick={handleLoginClick} />}
          <Main
            shelvesData={shelves}
            handleCardClick={handleCardClick}
            width={width}
          />
        </div>
        {activeModal === 'login' && (
          <LoginModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === 'login'}
            handleLogin={handleLogin}
            handleSignupClick={handleSignupClick}
            isLoading={isLoading}
          />
        )}
        {activeModal === 'signup' && (
          <SignupModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === 'signup'}
            handleSignup={handleSignup}
            handleLoginClick={handleLoginClick}
            isLoading={isLoading}
          />
        )}
        {activeModal === 'preview' && (
          <PreviewModal
            handleCloseModal={handleCloseModal}
            book={selectedBook}
            isOpen={activeModal === 'preview'}
          />
        )}
      </SearchResultsContext.Provider>
    </div>
  );
}
