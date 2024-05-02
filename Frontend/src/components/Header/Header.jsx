import { useState, useEffect } from "react";
import MainLogo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import "../../../global.css";
import "../Header/Header.css";
import {
  doLogout,
  getCurrentUserDetail,
  isLoggedIn,
} from "../../../../Backend/auth";

const Header = () => {
  const [isActive, setActive] = useState(0);
  const [login, setlogin] = useState(0);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setlogin(isLoggedIn);
    setUser(getCurrentUserDetail);
  }, [login]);

  const toggle = () => {
    setActive(!isActive);
  };

  const logout = () => {
    doLogout(() => {
      setlogin(false);
      console.log("Logout");
    });
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="navigation">
            <div className="logo">
              <Link to="/">
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
                  <Link to="/FAQs">FAQ s</Link>
                </li>
                <li>
                  <Link to="/contactus">Contact Us</Link>
                </li>
              </ul>
            </div>
            {login ? (
              <div className="buttons">
                <div className="user-name">
                  <p>
                    {user.fname} {user.lname}{" "}
                  </p>
                </div>
                <div className="logout-button">
                  <Link to="/" className="button " onClick={logout}>
                    Logout
                  </Link>
                </div>
              </div>
            ) : (
              <div className="buttons">
                <Link to="/login" className="button--secondary">
                  Log In
                </Link>
                <Link to="/signup" className="button">
                  Sign Up
                </Link>
              </div>
            )}

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
                    <Link to="/" onClick={toggle}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={toggle}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/events" onClick={toggle}>
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link to="/FAQs" onClick={toggle}>
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link to="/contactus" onClick={toggle}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="buttons">
                <Link to="/login" className="button--secondary">
                  Log In
                </Link>
                <Link to="/signup" className="button">
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
