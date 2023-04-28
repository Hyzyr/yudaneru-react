import React from "react";
import HeroTitle from "../base/HeroTitle";
import { mailSVG, mapPinSVG, phoneSVG } from "components/SVG";

const Contact = ({ strings }) => {
  const infoString = strings.info;

  return (
    <>
      <HeroTitle title={strings.title} />
      <section className="map">
        <div className="autoContainer">
          <div className="map__inner">
            <div className="map__inner-info">
              <h3>{infoString.title}</h3>
              <p>{infoString.paragraph}</p>
              <ul>
                <li>
                  <span>{mapPinSVG}</span>
                  <p>34 Street Name, City Name Here, United States.</p>
                </li>
                <li>
                  <span>{phoneSVG}</span>
                  <p>+1 (222) 345 6789</p>
                </li>
                <li>
                  <span>{mailSVG}</span>
                  <p>info@mywebsite.com</p>
                </li>
              </ul>
            </div>
            <div className="map__inner-map">
              <img src="/images/map.png" alt="map" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
