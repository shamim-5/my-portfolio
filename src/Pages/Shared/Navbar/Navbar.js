import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/" className="p-0 ml-3 mt-4">
          <PrimaryButton>HOME</PrimaryButton>
        </Link>
      </li>
      <li>
        <Link to="/about" className="p-0 ml-3 mt-4">
          <PrimaryButton>ABOUT</PrimaryButton>
        </Link>
      </li>
      <li>
        <Link to="/projects" className="p-0 ml-3 mt-4">
          <PrimaryButton>PROJECTS</PrimaryButton>
        </Link>
      </li>
      <li>
        {" "}
        <Link to="/contact" className="p-0 ml-3 mt-4">
          <PrimaryButton>CONTACT</PrimaryButton>
        </Link>
      </li>
    
    </>
  );
  return (
    <div className="container">
      <div className="navbar ">
        <div className="md:navbar-start navbar-center">
          <div className="dropdown">
            <label tabIndex="0" className="lg:hidden ">
              <PrimaryButton>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </PrimaryButton>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box">
              {menuItems}
            </ul>
          </div>
          <h1 className="md:text-3xl text-2xl uppercase font-semibold ml-2 mr-2">Shamim's-portfolio</h1>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
