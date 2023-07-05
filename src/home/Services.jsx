import React from "react";

const Services = ({ strings }) => {
  return (
    <section className="gird grid--service">
      <div className="autoContainer">
        <div className="grid__inner">
          <h2>{strings.title}
          <span className="noBreak">
          {strings.breakTitle}
          </span>
          </h2>
          <div className="grid__inner-row">
            <div className="gridItem">
              <div className="gridItem__image">
                <img src="/images/illustrations/service-1.png" alt="" />
              </div>
              <div className="gridItem__info">
                <h4 className="sm">{strings["item-1"].title}
                <span className="noBreak">
                  {strings["item-1"].breakTitle}
                </span>
                </h4>
                <p>{strings["item-1"].paragraph}
                  <span className="noBreak">
                    {strings["item-1"].breakParagraph}
                  </span>
                </p>
              </div>
            </div>

            <div className="gridItem">
              <div className="gridItem__image">
                <img src="/images/illustrations/service-2.png" alt="" />
              </div>
              <div className="gridItem__info">
                <h4 className="sm">{strings["item-2"].title}
                <span className="noBreak">
                  {strings["item-2"].breakTitle}
                </span>
                </h4>
                <p>{strings["item-2"].paragraph}
                  <span className="noBreak">
                    {strings["item-2"].breakParagraph}
                  </span>
                </p>
              </div>
            </div>

            <div className="gridItem">
              <div className="gridItem__image">
                <img src="/images/illustrations/service-3.png" alt="" />
              </div>
              <div className="gridItem__info">
                <h4 className="sm">{strings["item-3"].title}
                <span className="noBreak">
                  {strings["item-3"].breakTitle}
                </span>
                </h4>
                <p>{strings["item-3"].paragraph}
                  <span className="noBreak">
                    {strings["item-2"].breakParagraph}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
