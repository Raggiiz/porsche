import { AnimatePresence, motion } from 'framer-motion';
import Logo from "../../../assets/porscha-logo-white.png";
import React, { SetStateAction, useEffect, useState } from 'react'
import { Link, redirect, useLocation, useNavigate } from 'react-router-dom';

interface LoginModalInterface {
  loginModal: boolean,
  setLoginModal: any
}

export const LoginModal = ({ loginModal, setLoginModal }: LoginModalInterface) => {

  const navigate = useNavigate();
  const location = useLocation();

  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setloginError] = useState(false);

  const credentials = {
    user: 'admin',
    password: 'admin123'
  }

  useEffect(() =>{
    setIsLogged(localStorage.getItem('porschaLogin') === 'true')
  }, []);

  useEffect(() => {
    const handleTouchMove = (event: { preventDefault: () => void; }) => {
      if (loginModal) {
        event.preventDefault();
      }
    };
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [loginModal]);

  const login = () => {
    setloginError(false);

    if(user !== credentials.user || password !== credentials.password) {
      setloginError(true);
      return;
    }

    localStorage.setItem('porschaLogin', 'true');
    setIsLogged(true);
    setLoginModal(false);
    setTimeout(() => {
      navigate('/checkout');
    }, 200)
  } 

  const logOut = () => {
    localStorage.removeItem('porschaLogin');
    setIsLogged(false);
    setLoginModal(false);
    if(location.pathname === '/checkout') navigate('/');
  }

  return (
    <AnimatePresence>
      {loginModal && (
        <>
          <motion.div
            className="h-screen bg-[#161616] absolute right-0 top-0 bottom-0 shadow-xl z-10 flex flex-col items-center justify-between p-14"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: `${window.innerWidth > 768 ? '28vw' : '80vw'}`, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 250, damping: 24 }}
          >
            <img src={Logo} alt="Logo" className="h-16 w-fit" />
            {isLogged ? (
              <p className='font-montserrat text-white text-base text-center max-h-[5rem] overflow-hidden'>
                You're already logged in. <br/>
                Go to <Link to={'/checkout'} onClick={() => setLoginModal(false)} className='text-[#E2B558]'>Checkout page</Link> or <span className='cursor-pointer text-[#E2B558]' onClick={logOut}>Log out</span>
              </p>
            ) : (
              <div className="flex flex-col w-full">
                <h4 className="text-white font-inter uppercase font-medium">
                  dealer login
                </h4>
                <p className="font-montserrat text-[#7d7d7d] text-sm mt-3 h-10">
                  Enter your details to sign in you to your account!
                </p>
                <form className="flex flex-col mt-8" onSubmit={login}>
                  <div className="flex flex-col">
                    <label htmlFor="user" className="font-inter text-xs ml-2 mb-1 text-white">
                      User
                    </label>
                    <input type="text" id="user" className={`primary-input ${loginError && "border-[#E95652]"}`} value={user} onChange={(e) => setUser(e.target.value)}/>
                  </div>
                  <div className="flex flex-col mt-4">
                    <label htmlFor="password" className="font-inter text-xs ml-2 mb-1 text-white">
                      Password
                    </label>
                    <input type="password" id="password" className={`primary-input ${loginError && "border-[#E95652]"}`} value={password} onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                  <small className="text-[#7d7d7d] ml-2 font-montserrat mt-2 text-xs cursor-pointer">
                    Having trouble to sign in?
                  </small>
                  <div className="primary-btn w-full mt-12" onClick={login}>
                    Login
                  </div>
                  {loginError && (
                    <small className="mt-2 text-[#E95652] text-xs font-montserrat text-center">
                      User or password incorrect!
                    </small>
                  )}
                </form>
              </div>
            )}
            <div className="h-16"></div>
          </motion.div>
          <motion.div
            className="absolute left-0 top-0 bottom-0 h-screen w-screen bg-black"
            animate={{ opacity: 0.5 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            onClick={() => setLoginModal(false)}
          />
        </>
      )}
    </AnimatePresence>
  );
}