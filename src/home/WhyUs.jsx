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
            <h2>
              {strings.title}
              <span className="noBreak">{strings.breakTitle}</span>
            </h2>
            <p>{strings.paragraph}
            <span className="noBreak">
                  {strings.breakParagraph}
                  </span>
            </p>
            <ul className="whyUs__list">
              <li className="whyUs__list-item">
                <div className="whyUs__list-item-icon">
                  <img
                    src="/images/illustrations/chooseUsIcon-1.png"
                    alt="chooseUsIcon-1"
                  />
                </div>
                <h4 className="_sm">
                <span className="noBreak">
                {strings["item-1"].breakTitle}
                </span>
                </h4>
                <p>
                  {strings["item-1"].paragraph}
                  <span className="noBreak">
                  {strings["item-1"].breakParagraph}
                  </span>
                </p>
              </li>
              <li className="whyUs__list-item">
                <div className="whyUs__list-item-icon">
                  <img
                    src="/images/illustrations/chooseUsIcon-2.png"
                    alt="chooseUsIcon-2"
                  />
                </div>
                <h4 className="_sm">{strings["item-3"].title}
                {strings["item-3"].breakTitle}
                </h4>
                <p>{strings["item-3"].paragraph}
                <span className="noBreak">
                  {strings["item-3"].breakParagraph}
                  </span>
                </p>
              </li>
              <li className="whyUs__list-item">
                <div className="whyUs__list-item-icon">
                  <img
                    src="/images/illustrations/chooseUsIcon-3.png"
                    alt="chooseUsIcon-3"
                  />
                </div>
                <h4 className="_sm">{strings["item-2"].title}
                {strings["item-2"].breakTitle}
                
                </h4>
                <p>{strings["item-2"].paragraph}
                <span className="noBreak">
                  {strings["item-2"].breakParagraph}
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
