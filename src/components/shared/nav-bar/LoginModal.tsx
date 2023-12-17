import { AnimatePresence, motion } from 'framer-motion';
import Logo from "../../../assets/porscha-logo-white.png";
import React, { SetStateAction, useEffect, useState } from 'react'
import { Link, redirect, useLocation, useNavigate } from 'react-router-dom';

interface LoginModalInterface {
  loginModalOpen: boolean,
  setLoginModalOpen: (data: boolean) => void
}

export const LoginModal = ({ loginModalOpen, setLoginModalOpen }: LoginModalInterface) => {

  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(''); // varivavel para o campo user
  const [password, setPassword] = useState(''); // variavel para o campo senha
  const [loginError, setloginError] = useState(false);

  const credentials = {
    user: 'admin',
    password: 'admin123'
  }

  useEffect(() => { 
    const handleTouchMove = (event: { preventDefault: () => void; }) => {
      if (loginModalOpen)  event.preventDefault(); // Se o modal estiver aberto bloqueia
    };
    window.addEventListener("touchmove", handleTouchMove, { passive: false }); // Escuta sempre que o usuario mover o dedo para escrolar no mobile
    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [loginModalOpen]); // escuta sempre que o modal abrir

  const login = () => {
    setloginError(false); // toda vez que tenta logar seta os error do login pra falso

    if(user !== credentials.user || password !== credentials.password) { // se email ou senha estiverem errados seta o erro pra true
      setloginError(true);
      return;
    }

    localStorage.setItem('porschaLogin', 'true'); // seta o storage
    setLoginModalOpen(false); // fecha o modal
    setTimeout(() => {
      navigate('/checkout');
    }, 200)
  } 

  const logOut = () => {
    localStorage.removeItem('porschaLogin');
    setLoginModalOpen(false);
    if(location.pathname === '/checkout') navigate('/');
  }

  return (
    <AnimatePresence>
      {loginModalOpen && (
        <>
          <motion.div
            className="h-screen bg-dark-secondary absolute right-0 top-0 bottom-0 z-10 flex flex-col items-center justify-between p-14 w-[28vw] max-md:w-[80vw]"
            initial={{ x: 550, opacity: .5 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 550, opacity: .5 }}
            transition={{ ease: "easeInOut"}}
          >
            <img src={Logo} alt="Logo" className="h-16" />
            {localStorage.getItem('porschaLogin') === 'true' ? (
              <p className='font-montserrat text-white text-base text-center'>
                You're already logged in. <br/>
                Go to<Link to={'/checkout'} onClick={() => setLoginModalOpen(false)} className='text-yellow-primary'> Checkout page </Link>
                or <span className='cursor-pointer text-yellow-primary' onClick={logOut}>Log out</span>
              </p>
            ) : (
              <div className="flex flex-col w-full">
                <h4 className="text-white font-inter uppercase font-medium">
                  dealer login
                </h4>
                <p className="font-montserrat text-[#7d7d7d] text-sm mt-3">
                  Enter your details to sign in!
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
            onClick={() => setLoginModalOpen(false)}
          />
        </>
      )}
    </AnimatePresence>
  );
}