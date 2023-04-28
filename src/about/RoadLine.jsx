import React from "react";

const RoadLine = ({ strings }) => {
  return (
    <section className="roadmap">
      <div className="autoContainer">
        <div className="roadmap__inner">
          <h2>{strings.title}</h2>
          <div className="roadmap__inner-track">
            <div className="roadmap__item">
              <div className="roadmap__item-badge">
                <span>2019</span>
              </div>
              <div className="roadmap__item-content">
                <strong>{strings["item-1"].title}</strong>
                <p>{strings["item-1"].paragraph}</p>
              </div>
            </div>
            <div className="roadmap__item">
              <div className="roadmap__item-badge">
                <span>2020</span>
              </div>
              <div className="roadmap__item-content">
                <strong>{strings["item-2"].title}</strong>
                <p>{strings["item-2"].paragraph}</p>
              </div>
            </div>
            <div className="roadmap__item">
              <div className="roadmap__item-badge">
                <span>2021</span>
              </div>
              <div className="roadmap__item-content">
                <strong>{strings["item-3"].title}</strong>
                <p>{strings["item-3"].paragraph}</p>
              </div>
            </div>
            <div className="roadmap__item">
              <div className="roadmap__item-badge">
                <span>2022</span>
              </div>
              <div className="roadmap__item-content">
                <strong>{strings["item-4"].title}</strong>
                <p>{strings["item-4"].paragraph}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadLine;
