import "./Navbar.css";
import React, { useContext} from "react";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";
// import { useState, useEffect } from "react";
// import { useNavigate} from 'react-router-dom';

function Navbar() {
  const {openUserWindow} = useContext(GeneralContext);
  const handleOpenWindowButton = ()=>{
  openUserWindow();
}
  return (
    <>
      <div className="row main">
        <div className="col nav-icon">
          <Link to="/">
            <img
              src="../images/Saloon-Logo.jpg"
              alt="image"
              // style={{ width: "6rem", height: "6rem", borderRadius: "100%" }}
            />
          </Link>
        </div>
        <div className="col nav-list">
          <Link to="/" className="Nav-menus">Home</Link>
          
          <Link to="/booking" className="Nav-menus">Booking</Link>
          <Link to="/workdemo" className="Nav-menus">WorkDemo</Link>
          <Link to="/about" className="Nav-menus">About</Link>
          &nbsp;&nbsp;&nbsp;{" "}
         
          <button onClick={handleOpenWindowButton} className="menu-bar-btn"><i class="fa-solid fa-bars"></i></button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
