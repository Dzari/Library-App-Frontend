import { useEffect, useState } from 'react';

import Header from './Header.jsx';
import Main from './Main.jsx';
import Sidebar from './Sidebar.jsx';
import LoginModal from './LoginModal.jsx';
import SignupModal from './signupModal.jsx';
import PreviewModal from './PreviewModal.jsx';
import { getBook, getBestSellers } from '../utils/api.jsx';

import { screenWidthContext } from '../contexts/contexts.js';

export default function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [activeModal, setActiveModal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedBook, setSelectedBook] = useState({});
  const [shelves, setShelves] = useState([]);

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
    console.log(book);
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
    window.addEventListener('resize', (e) => {
      setScreenWidth(e.target.innerWidth);
    });
  }, []);

  //getBook();
  //getBestSellers();

  useEffect(() => {
    getBestSellers().then((data) => {
      const shelvesData = data.results.lists.map((shelf) => {
        let modifiedShelf = {
          shelf: `${shelf.display_name}`,
          rounded: false,
          cards: shelf.books.map((book) => {
            //console.log(book)
            const bookData = {
              title: toPascalCase(book.title),
              subtitle: book.author,
              img: book.book_image,
              des: book.description,
              link: book.amazon_product_url
            };
            return bookData;
          }),
        };
        return modifiedShelf;
      });
      setShelves(shelvesData);
    });
  }, []);

  return (
    <div className="app h-[100vh] bg-black">
      <screenWidthContext.Provider value={{ screenWidth, setScreenWidth }}>
        <div className="app__wrapper grid grid-cols-5 grid-row-auto gap-2.5 px-2 max-w-2k font-bold mx-auto overflow-hidden">
          <Header
            handleLoginClick={handleLoginClick}
            handleSignupClick={handleSignupClick}
          />
          <Sidebar handleLoggedOutClick={handleLoginClick} />
          <Main shelvesData={shelves} handleCardClick={handleCardClick} />
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
      </screenWidthContext.Provider>
    </div>
  );
}
