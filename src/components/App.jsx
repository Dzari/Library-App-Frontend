import { useEffect, useState } from 'react';

import Header from './Header.jsx';
import Main from './Main.jsx';
import Sidebar from './Sidebar.jsx';
import LoginModal from './LoginModal.jsx';
import SignupModal from './signupModal.jsx';

import { screenWidthContext } from '../contexts/contexts.js';

export default function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [activeModal, setActiveModal] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      setScreenWidth(e.target.innerWidth);
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
          <Main />
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
      </screenWidthContext.Provider>
    </div>
  );
}
