import React from "react";
import { faceBook2SVG, insta2SVG, twitterSVG } from "../components/SVG";

const Team = ({ strings }) => {
  return (
    <section className="grid grid--team">
      <div className="autoContainer">
        <div className="grid__inner">
          <h2>{strings.title}</h2>
          <div className="grid__inner-row">
            <div className="gridItem">
              <div className="gridItem__image">
                <div className="ratioImage">
                  <img src="/images/team/team-1.png" alt="" />
                </div>
              </div>
              <div className="gridItem__info">
                <div className="gridItem__info-text">
                  <h4>{strings["item-1"].name}</h4>
                  <p className="_sm">{strings["item-1"].job}</p>
                </div>
                <div className="gridItem__info-social">
                  <a href="#" className="button button--icon smIcon">
                    {faceBook2SVG}
                  </a>
                  <a href="#" className="button button--icon smIcon">
                    {twitterSVG}
                  </a>
                  <a href="#" className="button button--icon smIcon">
                    {insta2SVG}
                  </a>
                </div>
              </div>
            </div>
            <div className="gridItem">
              <div className="gridItem__image">
                <div className="ratioImage">
                  <img src="/images/team/team-2.png" alt="" />
                </div>
              </div>
              <div className="gridItem__info">
                <div className="gridItem__info-text">
                  <h4>{strings["item-2"].name}</h4>
                  <p className="_sm">{strings["item-2"].job}</p>
                </div>
                <div className="gridItem__info-social">
                  <a href="#" className="button button--icon smIcon">
                    {faceBook2SVG}
                  </a>
                  <a href="#" className="button button--icon smIcon">
                    {twitterSVG}
                  </a>
                  <a href="#" className="button button--icon smIcon">
                    {insta2SVG}
                  </a>
                </div>
              </div>
            </div>
            <div className="gridItem">
              <div className="gridItem__image">
                <div className="ratioImage">
                  <img src="/images/team/team-3.png" alt="" />
                </div>
              </div>
              <div className="gridItem__info">
                <div className="gridItem__info-text">
                  <h4>{strings["item-3"].name}</h4>
                  <p className="_sm">{strings["item-3"].job}</p>
                </div>
                <div className="gridItem__info-social">
                  <a href="#" className="button button--icon smIcon">
                    {faceBook2SVG}
                  </a>
                  <a href="#" className="button button--icon smIcon">
                    {twitterSVG}
                  </a>
                  <a href="#" className="button button--icon smIcon">
                    {insta2SVG}
                  </a>
                </div>
              </div>
            </div>
            <div className="gridItem">
              <div className="gridItem__image">
                <div className="ratioImage">
                  <img src="/images/team/team-4.png" alt="" />
                </div>
              </div>
              <div className="gridItem__info">
                <div className="gridItem__info-text">
                  <h4>{strings["item-4"].name}</h4>
                  <p className="_sm">{strings["item-4"].job}</p>
                </div>
                <div className="gridItem__info-social">
                  <a href="#" className="button button--icon smIcon">
                    {faceBook2SVG}
                  </a>
                  <a href="#" className="button button--icon smIcon">
                    {twitterSVG}
                  </a>
                  <a href="#" className="button button--icon smIcon">
                    {insta2SVG}
                  </a>
                </div>
              </div>
            </div>
            <div className="gridItem">
              <div className="gridItem__image">
                <div className="ratioImage">
                  <img src="/images/team/team-5.png" alt="" />
                </div>
              </div>
              <div className="gridItem__info">
                <div className="gridItem__info-text">
                  <h4>{strings["item-5"].name}</h4>
                  <p className="_sm">{strings["item-5"].job}</p>
                </div>
                <div className="gridItem__info-social">
                  <a href="#" className="button button--icon smIcon">
                    {faceBook2SVG}
                  </a>
                  <a href="#" className="button button--icon smIcon">
                    {twitterSVG}
                  </a>
                  <a href="#" className="button button--icon smIcon">
                    {insta2SVG}
                  </a>
                </div>
              </div>
            </div>
            <div className="gridItem">
              <div className="gridItem__image">
                <div className="ratioImage">
                  <img src="/images/team/team-6.png" alt="" />
                </div>
              </div>
              <div className="gridItem__info">
                <div className="gridItem__info-text">
                  <h4>{strings["item-6"].name}</h4>
                  <p className="_sm">{strings["item-6"].job}</p>
                </div>
                <div className="gridItem__info-social">
                  <a href="#" className="button button--icon smIcon">
                    {faceBook2SVG}
                  </a>
                  <a href="#" className="button button--icon smIcon">
                    {twitterSVG}
                  </a>
                  <a href="#" className="button button--icon smIcon">
                    {insta2SVG}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
