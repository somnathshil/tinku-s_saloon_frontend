import "./Navbar.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { useNavigate} from 'react-router-dom';

function Navbar({ isLoggedIn, user }) {
  return (
    <>
      <div className="row main">
        <div className="col nav-icon">
          <Link to="/">
            <img
              src="../images/Saloon-Logo.jpg"
              alt="image"
              style={{ width: "6rem", height: "6rem", borderRadius: "100%" }}
            />
          </Link>
        </div>
        <div className="col nav-list">
          <Link to="/">Home</Link>
          {isLoggedIn ? (
            <Link to="/logout">Logout</Link>
          ) : (
            <>
              <Link to="/signup">SignUp</Link>
              <Link to="/login">Login</Link>
            </>
          )}
          <Link to="/booking">Booking</Link>
          <Link to="/workdemo">WorkDemo</Link>
          <Link to="/about">About</Link>
          &nbsp;&nbsp;&nbsp;{" "}
          {user && (
            <span style={{ color: "#F4A460", fontSize: "1.5rem" }}>
              {user.username}
              <i class="fa-solid fa-user"></i>
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
