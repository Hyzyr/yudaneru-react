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
                <span>2002</span>
              </div>
              <div className="roadmap__item-content">
                <strong>{strings["item-1"].title}
                <span className="noBreak">
                {strings["item-1"].break}
                </span>
                </strong>
                <p>{strings["item-1"].paragraph}
                  <span className="noBreak">
                    {strings["item-2"].breakParagraph}
                  </span>
                </p>
              </div>
            </div>
            <div className="roadmap__item">
              <div className="roadmap__item-badge">
                <span>2008</span>
              </div>
              <div className="roadmap__item-content">
                <strong>{strings["item-2"].title}
                <span className="noBreak">
                {strings["item-2"].break}
                </span>
                </strong>
                <p>{strings["item-2"].paragraph}
                  <span className="noBreak">
                    {strings["item-2"].breakParagraph}
                  </span>
                </p>
              </div>
            </div>
            <div className="roadmap__item">
              <div className="roadmap__item-badge">
                <span>2010</span>
              </div>
              <div className="roadmap__item-content">
                <strong>{strings["item-3"].title}
                <span className="noBreak">
                {strings["item-3"].break}
                </span>
                </strong>
                <p>{strings["item-3"].paragraph}
                  <span className="noBreak">
                    {strings["item-3"].breakParagraph}
                  </span>
                </p>
              </div>
            </div>
            <div className="roadmap__item">
              <div className="roadmap__item-badge">
                <span>2016-2023</span>
              </div>
              <div className="roadmap__item-content">
                <strong>{strings["item-4"].title}</strong>
                <p>{strings["item-4"].paragraph}
                  <span className="noBreak">
                    {strings["item-4"].breakParagraph}
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

export default RoadLine;
