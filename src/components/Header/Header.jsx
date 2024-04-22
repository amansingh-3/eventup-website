import React, { useState } from "react";
import MainLogo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import "../../../global.css";
import "../Header/Header.css";

const Header = () => {
  const [isActive, setActive] = useState(0);

  const toggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      <header>
        <div className="container">
          <div className="navigation">
            <div className="logo">
              <Link to="#">
                <img src={MainLogo} alt="LogoImage" width="181" height="30" />
              </Link>
            </div>
            <div className="nav">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <Link to="/FAQs">FAQ's</Link>
                </li>
                <li>
                  <Link to="/Blog">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="buttons">
              <Link to="/login" className="button--secondary">
                {" "}
                Log In
              </Link>
              <Link to="/signup" className="button">
                {" "}
                Sign Up
              </Link>
            </div>
            <div className="menu-toggle" onClick={toggle}>
              <span></span>
            </div>

            <div className={`header-menu-mobile  ${isActive ? "show" : " "}`}>
              <div
                className={`menu-toggle  ${isActive ? "active" : " "}`}
                onClick={toggle}>
                <span></span>
              </div>
              <div className="nav">
                <ul>
                  <li>
                    <Link to="/index.html">Home</Link>
                  </li>
                  <li>
                    <Link to="/about.html">About</Link>
                  </li>
                  <li>
                    <Link to="">Pricing</Link>
                  </li>
                  <li>
                    <Link to="#">Career</Link>
                  </li>
                  <li>
                    <Link to="#">Blog</Link>
                  </li>
                </ul>
              </div>
              <div className="buttons">
                <Link to="/login.html" className="button--secondary">
                  {" "}
                  Log In
                </Link>
                <Link to="/signup.html" className="button">
                  {" "}
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
