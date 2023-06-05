import React from "react";
import Menu from "../../assets/icons/menu.svg";
import Logo from "../../assets/porscha-logo.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full py-4 px-10">
      <div className="w-16 cursor-pointer">
        <Menu />
      </div>
      <Link to={"/"}>
        <img className="h-10" src={Logo} alt="Logo" />
      </Link>
      <Link to={"/customize"} className="font-space uppercase text-xs h16">
        customize
      </Link>
    </div>
  );
};
