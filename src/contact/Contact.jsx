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
              <h3>{infoString.title}
                <span className="noBreak">
                {infoString.breakTitle}
                </span>
              </h3>
              <p>{infoString.paragraph}
              <span className="noBreak">
                {infoString.breakParagraph}
                </span></p>
              <ul>
                <li>
                  <span>{mapPinSVG}</span>
                  <p>{infoString.location}</p>
                </li>
                <li>
                  <span>{mailSVG}</span>
                  <p>info@yudaneru.co.jp </p>
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
