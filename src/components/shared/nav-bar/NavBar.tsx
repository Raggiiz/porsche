import React, { useState } from "react";
import Menu from "../../../assets/icons/menu.svg";
import Profile from "../../../assets/icons/profile.svg";
import Logo from "../../../assets/porscha-logo-white.png";
import { Link } from "react-router-dom";
import { SideBar } from "./SideBar";
import { LoginModal } from "./LoginModal";

export const NavBar = () => {

  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  return (
    <div className="flex justify-between items-center w-full py-4 px-10 bg-[#0D0D0D] relative max-lg:fixed z-20">
      <div className="cursor-pointer text-white" onClick={() => setSideBarOpen(true)}>
        <Menu />
      </div>
      <Link to={"/"}>
        <img className="h-10" src={Logo} alt="Logo" />
      </Link>
      <div className="cursor-pointer text-white" onClick={() => setLoginModal(true)}>
        <Profile />
      </div>
      <SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/>
      <LoginModal loginModal={loginModal} setLoginModal={setLoginModal}/>
    </div>
  );
};
