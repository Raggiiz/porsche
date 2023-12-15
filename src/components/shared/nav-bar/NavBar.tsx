import React, { useState } from "react";
import Menu from "../../../assets/icons/menu.svg";
import Profile from "../../../assets/icons/profile.svg";
import { Link, useLocation } from "react-router-dom";
import { SideBar } from "./SideBar";
import { LoginModal } from "./LoginModal";

export const NavBar = () => {

  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const location = useLocation();

  return (
    // Se está na home adiciona um backdrop blur
    <div className={`flex justify-between items-center h-[3.625rem] w-full py-4 px-10 ${location.pathname === '/911/gt2' ? 'backdrop-blur-sm' : 'bg-dark-secondary'} relative max-lg:fixed z-20`}>
      <div className="flex justify-center cursor-pointer text-white w-[1.625rem]" onClick={() => setSideBarOpen(true)}>
        <Menu />
      </div>
      <Link to={"/"}>
        <span className="font-porsche text-white">PORSCHA</span>
      </Link>
      <div className="flex justify-center cursor-pointer text-white w-[1.625rem]" onClick={() => setLoginModalOpen(true)}>
        <Profile />
      </div>
      {/* Declaramos aqui a side bar e o modal de login */}
      <SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/>
      <LoginModal loginModal={loginModalOpen} setLoginModal={setLoginModalOpen}/>
    </div>
  );
};
