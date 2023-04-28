import React from "react";
import { faceBookSVG, instaSVG, mSVG, twitterSVG } from "../components/SVG";
import { Link } from "react-router-dom";

const assetsFolder = process.env.PUBLIC_URL + "images/";

const Footer = ({ strings }) => {
  return (
    <footer className="footer">
      <div className="autoContainer">
        <div className="footer__inner">
          <div className="footer__inner-info">
            <div className="logo">
              <img src={assetsFolder + "logoLight.png"} alt="yudaneru" />
            </div>
            <div className="footer__inner-info-group">
              <h6>{strings["column-1"].title}</h6>
              <p className="_sm">{strings["column-1"].paragraph}</p>
            </div>
          </div>
          <div className="footer__inner-links">
            <div className="footer__inner-links-column">
              <h6>{strings["column-2"]["title"]}</h6>
              <Link
                className="footer__inner-link"
                to="/"
                children={strings["column-2"]["link-1"]}
              />
              <Link
                className="footer__inner-link"
                to="/about-us"
                children={strings["column-2"]["link-2"]}
              />
              <Link
                className="footer__inner-link"
                to="/performance"
                children={strings["column-2"]["link-3"]}
              />
              <Link
                className="footer__inner-link"
                to="/contact-us"
                children={strings["column-2"]["link-4"]}
              />
            </div>
          </div>
          <div className="footer__inner-social">
            <h6>{strings["column-3"].title}</h6>
            <p className="_sm">{strings["column-3"].paragraph}</p>
            <div className="footer__inner-social-links">
              <a href="#" className="button button--icon">
                {twitterSVG}
              </a>
              <a href="#" className="button button--icon">
                {faceBookSVG}
              </a>
              <a href="#" className="button button--icon">
                {instaSVG}
              </a>
              <a href="#" className="button button--icon">
                {mSVG}
              </a>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <p className="_sm">{strings.copy["paragraph-1"]}</p>
          <Link to="/privacy-policy" children={strings.copy["paragraph-2"]} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
