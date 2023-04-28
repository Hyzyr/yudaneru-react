import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import SwithLang from "../components/SwithLang";

const assetsFolder = process.env.PUBLIC_URL + "images/";

const Header = ({ strings: stringsLocal }) => {
  const [menu, setMenu] = useState(false);
  const header = useRef(null);
  const location = useLocation();
  const strings = stringsLocal.nav;

  const toggle = () => setMenu(!menu);
  const onFogClick = (e) => {
    if (e.target === e.currentTarget && menu) toggle();
  };

  useEffect(() => {
    setMenu(false);
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    const onScroll = () => {
      if (document.documentElement.scrollTop > 20) {
        header.current.classList.add("sticky");
      } else {
        header.current.classList.remove("sticky");
      }
    };
    if (header.current) {
      window.addEventListener("scroll", onScroll);
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, [header]);

  return (
    <header className="header" ref={header}>
      <div className="autoContainer">
        <div className="header__inner">
          <Link to="/" className="logo">
            <img src={assetsFolder + "logo.png"} alt="yudaneru" />
          </Link>
          <div className={`nav ${menu ? "active" : ""}`} onClick={onFogClick}>
            <div className="nav__inner">
              <div className="nav__inner-group">
                <NavLink
                  className="nav__inner-link"
                  to="/"
                  children={strings.home}
                />
                <NavLink
                  className="nav__inner-link"
                  to="/about-us"
                  children={strings.aboutUs}
                />
                <NavLink
                  className="nav__inner-link"
                  to="/performance"
                  children={strings.performance}
                />
                <NavLink
                  className="nav__inner-link"
                  to="/contact-us"
                  children={strings.contactUs}
                />
                <NavLink
                  className="nav__inner-link"
                  to="/privacy-policy"
                  children={strings.privacyPolic}
                />
              </div>
              <div className="nav__inner-group">
                <SwithLang strings={stringsLocal} />
              </div>
            </div>
          </div>
          <button
            className={`burger  ${menu ? "active" : ""}`}
            id="menuBtn"
            onClick={toggle}
          ></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
