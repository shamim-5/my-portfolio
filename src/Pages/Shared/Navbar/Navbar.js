import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./Navbar.css";

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
        <Link to="/portfolio" className="p-0 ml-3 mt-4">
          <PrimaryButton>PORTFOLIO</PrimaryButton>
        </Link>
      </li>
      <li>
        {" "}
        <Link to="/contact" className="p-0 ml-3 mt-4">
          <PrimaryButton>CONTACT</PrimaryButton>
        </Link>
      </li>
      <li>
        <Link to="/blog" className="p-0 ml-3 mt-4">
          <PrimaryButton>BLOG</PrimaryButton>
        </Link>
      </li>
    </>
  );
  return (
    <div className="container">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <PrimaryButton>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </PrimaryButton>
            </label>
            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box">
              {menuItems}
            </ul>
              </div>
              <h1 className="text-4xl uppercase font-semibold">portfolio</h1>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
