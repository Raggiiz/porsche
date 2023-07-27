import React, { useState } from "react";
import Menu from "../../../assets/icons/menu.svg";
import Profile from "../../../assets/icons/profile.svg";
import Logo from "../../../assets/porscha-logo-white.png";
import { Link } from "react-router-dom";
import { SideBar } from "./SideBar";

export const NavBar = () => {

  const [sideBarOpen, setSideBarOpen] = useState(false)

  const closeSideBar = () => {
    setSideBarOpen(false)
  }

  return (
    <div className="flex justify-between items-center w-full py-4 px-10 bg-[#161616] relative z-20">
      <div className="cursor-pointer text-white" onClick={() => setSideBarOpen(true)}>
        <Menu />
      </div>
      <Link to={"/"}>
        <img className="h-10" src={Logo} alt="Logo" />
      </Link>
      <div className="cursor-pointer text-white">
        <Profile />
      </div>
      <SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/>
    </div>
  );
};
