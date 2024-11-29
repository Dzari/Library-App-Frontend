import { useState } from 'react';
import ModalWithForm from './ModalWithForm';

const LoginModal = ({
  handleCloseModal,
  handleLogin,
  isOpen,
  handleSignupClick,
  isLoading,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password });
  };

  const buttonText = isLoading ? 'Logging in...' : 'Login';
  const modalInputClasses =
    'modal__input p-0 mt-2 border-b-[1px] border-b-[#000] w-full bg-transparent placeholder-gray-600';

  return (
    <ModalWithForm
      title="Log in"
      buttonText="Log in"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label mb-6">
        Email*{' '}
        <input
          type="text"
          id="email"
          className={modalInputClasses}
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required={true}
        />
      </label>
      <label htmlFor="password" className="modal__label mb-6">
        Password*{' '}
        <input
          type="password"
          id="password"
          className={modalInputClasses}
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required={true}
        />
      </label>
      <div className="modal__button-container">
        <button
          type="submit"
          className="modal__submit-button mt-8 bg-black text-white rounded w-[124px] h-9"
          disabled={false}
        >
          {buttonText}
        </button>
        <button
          type="button"
          className="modal__signup-button ml-5"
          onClick={handleSignupClick}
        >
          or Sign up
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
