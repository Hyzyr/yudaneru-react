import React from "react";

const Services = ({ strings }) => {
  return (
    <section className="gird grid--service">
      <div className="autoContainer">
        <div className="grid__inner">
          <h2>{strings.title}</h2>
          <div className="grid__inner-row">
            <div className="gridItem">
              <div className="gridItem__image">
                <img src="/images/illustrations/service-1.png" alt="" />
              </div>
              <div className="gridItem__info">
                <h4 className="sm">{strings["item-1"].title}</h4>
                <p>{strings["item-1"].paragraph}</p>
              </div>
            </div>

            <div className="gridItem">
              <div className="gridItem__image">
                <img src="/images/illustrations/service-2.png" alt="" />
              </div>
              <div className="gridItem__info">
                <h4 className="sm">{strings["item-2"].title}</h4>
                <p>{strings["item-2"].paragraph}</p>
              </div>
            </div>

            <div className="gridItem">
              <div className="gridItem__image">
                <img src="/images/illustrations/service-3.png" alt="" />
              </div>
              <div className="gridItem__info">
                <h4 className="sm">{strings["item-3"].title}</h4>
                <p>{strings["item-3"].paragraph}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
