import React from "react";
import "../styles/header.css";
import logo from "../images/amazon_logo.png";
import { TiLocationOutline } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { IoReorderFour } from "react-icons/io5";
const Header = () => {
  return (
    <div className="header">
      <div className="navbar-up d-flex align-items-center justify-content-around">
        {/* <div style={{ background: `url(logo)` }}></div> */}
        <img className="nav-logo" src={logo} alt="logo" />
        {/* <div className='nav-address d-flex'>
          <p>Deliver to</p>
          <FaSearch />
          <p className='nav-second'>India</p>
        </div> */}
        <div className="row align-items-center">
          <div className="col-2">
            <TiLocationOutline size={25} />
          </div>
          <div className="nav-address col justify-content-center">
            <p className="mb-0 mt-1">Deliver to</p>
            <p className="fw-bold">India</p>
          </div>
        </div>
        <div className="nav-search d-flex">
          <select className="search-select">
            <option>All</option>
            {/* <label for ="search-input">Search Amazon.in</label> */}
          </select>
          <input placeholder="Search Amazon" className="search-input" />
          <div className="search-icon px-2">
            <FaSearch size={25} className="mt-2 "/>
          </div>
        </div>
        <div className="nav-sign ">
          <p className="nav ">Hello,sign in</p>
          <p className="nav fw-bold">Accounts & lists</p>
        </div>
        <div className="nav-sign ">
          <p className="nav">Returns</p>
          <p className="nav fw-bold">Accounts&List</p>
        </div>
        <div className="nav-icon2 ">
        <IoMdCart size={35} />
        </div>
      </div>
      <div className="nav-down d-flex align-items-center justify-content-between">
      <IoReorderFour size={25} />
      <div className="nav-item mt-3">
        <p>Fresh</p>
        <p>Amazon miniTV</p>
        <p>Sell</p>
        <p>Best Sellers</p>
        <p>Mobiles</p>
        <p>Today's Deals</p>
        <p>Electronics</p>
        <p>Customer Service</p>
        <p>New Releases</p>
        
        {/* <div class="dropdown">
          <p>Prime</p>
        </div> */}
      </div>
      <div class="btn-group">
        <button class="btn   dropdown-toggle" 
        type="button" data-toggle="dropdown" aria-haspopup="true" 
        aria-expanded="false">Prime</button>
      </div>
      <div className="pt-3">
        <p>Shopping made easy | Download the app</p>
      </div>
  
      </div>
    </div>
  );
};

export default Header;
