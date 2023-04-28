import React from "react";
import { Link, NavLink } from "react-router-dom";
import SwithLang from "../components/SwithLang";

const assetsFolder = process.env.PUBLIC_URL + "images/";

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="autoContainer">
        <div className="header__inner">
          <Link to="/" className="logo">
            <img src={assetsFolder + "logo.png"} alt="yudaneru" />
          </Link>
          <div className="nav" id="menu">
            <div className="nav__inner">
              <div className="nav__inner-group">
                <NavLink className="nav__inner-link" to="/" children="Home" />
                <NavLink
                  className="nav__inner-link"
                  to="/about-us"
                  children="About Us"
                />
                <NavLink
                  className="nav__inner-link"
                  to="/performance"
                  children="Performance"
                />
                <NavLink
                  className="nav__inner-link"
                  to="/contact-us"
                  children="Contact Us"
                />
                <NavLink
                  className="nav__inner-link"
                  to="/privacy-policy"
                  children="Privacy Policy"
                />
              </div>
              <div className="nav__inner-group">
                <SwithLang />
              </div>
            </div>
          </div>
          <button className="burger" id="menuBtn"></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
