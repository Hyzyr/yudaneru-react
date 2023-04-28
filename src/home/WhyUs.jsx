import React from "react";

const WhyUs = ({ strings }) => {
  return (
    <section className="whyUs">
      <div className="autoContainer">
        <div className="whyUs__inner">
          <div className="whyUs__inner-banner">
            <div className="whyUs__banner">
              <div className="whyUs__banner-image">
                <img
                  src="/images/home/chooseUs/chooseUs-1.png"
                  alt="project-1"
                />
              </div>
              <div className="whyUs__banner-image">
                <img
                  src="/images/home/chooseUs/chooseUs-2.png"
                  alt="project-2"
                />
              </div>
              <div className="whyUs__banner-image">
                <img
                  src="/images/home/chooseUs/chooseUs-3.png"
                  alt="project-3"
                />
              </div>
              <div className="whyUs__banner-image _shape">
                <img
                  src="/images/illustrations/chooseUsShape.png"
                  alt="Shape"
                />
              </div>
            </div>
          </div>
          <div className="whyUs__inner-content">
            <h2>{strings.title}</h2>
            <p>{strings.paragraph}</p>
            <ul className="whyUs__list">
              <li className="whyUs__list-item">
                <div className="whyUs__list-item-icon">
                  <img
                    src="/images/illustrations/chooseUsIcon-1.png"
                    alt="chooseUsIcon-1"
                  />
                </div>
                <h4 className="_sm">{strings["item-1"].title}</h4>
                <p>{strings["item-1"].paragraph}</p>
              </li>
              <li className="whyUs__list-item">
                <div className="whyUs__list-item-icon">
                  <img
                    src="/images/illustrations/chooseUsIcon-2.png"
                    alt="chooseUsIcon-2"
                  />
                </div>
                <h4 className="_sm">{strings["item-2"].title}</h4>
                <p>{strings["item-2"].paragraph}</p>
              </li>
              <li className="whyUs__list-item">
                <div className="whyUs__list-item-icon">
                  <img
                    src="/images/illustrations/chooseUsIcon-3.png"
                    alt="chooseUsIcon-3"
                  />
                </div>
                <h4 className="_sm">{strings["item-3"].title}</h4>
                <p>{strings["item-3"].paragraph}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
