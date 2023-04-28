import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ strings }) => {
  return (
    <section className="hero hero--border">
      <div className="autoContainer">
        <div className="hero__inner">
          <div className="hero__inner-content">
            <h1>{strings.title}</h1>
            <p>
              {strings["paragraph-1"]}
              <br />
              <br />
              {strings["paragraph-2"]}
            </p>
            <Link to="/contact-us" className="button button--primary">
              {strings.button}
            </Link>
          </div>
          <div className="hero__inner-banner _advanced">
            <div className="hero__banner">
              <div className="hero__banner-image">
                <img src="/images/about/about-1.png" alt="banner" />
              </div>
              <div className="hero__banner-image">
                <img src="/images/about/about-2.png" alt="banner" />
              </div>
              <div className="hero__banner-image _shape">
                <img src="/images/about/aboutShape.png" alt="banner" />
              </div>
              <div className="hero__banner-image _shape">
                <img src="/images/about/aboutShape.png" alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
