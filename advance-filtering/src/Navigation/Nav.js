import "./Nav.css";
import React from "react";

import { FiHeart } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
const Nav = () => {
  return (
    <nav className="container d-flex align-items-center">
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search"
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <CiShoppingCart className="nav-icons"/>
        </a>
        <a href="#">
          <AiOutlineUser  className="nav-icons"/>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
