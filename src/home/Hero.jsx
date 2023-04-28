import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ strings }) => {
  return (
    <section className="hero">
      <div className="autoContainer">
        <div className="hero__inner">
          <div className="hero__inner-content">
            <strong>{strings.caption}</strong>
            <h1>{strings.title}</h1>
            <p>{strings.paragraph}</p>
            <Link to="/contact-us" className="button button--primary">
              {strings.button}
            </Link>
          </div>
          <div className="hero__inner-banner">
            <div className="hero__banner">
              <img src="/images/home/intro.png" alt="banner" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
