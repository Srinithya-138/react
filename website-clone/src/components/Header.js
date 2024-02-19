import React from "react";
import "../styles/header.css";
import logo from "../images/amazon_logo.png";
import { TiLocationOutline } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <div className="header">
      <div className="navbar-up">
        {/* <div style={{ background: `url(logo)` }}></div> */}
        <img className="nav-logo " src={logo} alt="logo" />
        {/* <div className='nav-address d-flex'>
          <p>Deliver to</p>
          <FaSearch />
          <p className='nav-second'>India</p>
        </div> */}
        <div className="row align-items-center">
          <div className="col-2">
            <TiLocationOutline size={25} />
          </div>
          <div className="nav-address col">
            <p className="mb-0">Deliver to</p>
            <p className="fw-bold">India</p>
          </div>
        </div>
        <div className="nav-search d-flex mt-1">
          <select className="search-select">
            <option>All</option>
            {/* <label for ="search-input">Search Amazon.in</label> */}
            <input placeholder="Search Amazon" className="search-input "/>
              <div className="search-icon">
                <FaSearch />
              </div>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
