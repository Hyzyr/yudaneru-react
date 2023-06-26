import { topRightArrSVG } from "components/SVG";
import React from "react";

const Overview = ({ strings }) => {
  return (
    <section className="overview">
      <div className="autoContainer">
        <div className="overview__inner">
          <div className="overview__inner-header">
            <h2>{strings.title}</h2>
          </div>
          <div className="overview__inner-content">
            <div className="overview__inner-row">
              <div className="overviewContent overviewContent--caption">
                <h6 className="_sm">{strings["item-1"].title}</h6>
              </div>
              <div className="overviewContent">
                <p>{strings["item-1"].paragraph}</p>
              </div>
            </div>
            <div className="overview__inner-row">
              <div className="overviewContent overviewContent--caption">
                <h6 className="_sm">{strings["item-2"].title}</h6>
              </div>
              <div className="overviewContent">
                <p>{strings["item-2"].paragraph}</p>
              </div>
            </div>
            <div className="overview__inner-row">
              <div className="overviewContent overviewContent--caption">
                <h6 className="_sm">{strings["item-3"].title}</h6>
              </div>
              <div className="overviewContent">
                <p>{strings["item-3"].paragraph}</p>
              </div>
            </div>
            <div className="overview__inner-row">
              <div className="overviewContent overviewContent--caption">
                <h6 className="_sm">{strings["item-4"].title}</h6>
              </div>
              <div className="overviewContent">
                <p>{strings["item-4"].paragraph}
                <span className="noBreak">
                {strings["item-4"].break}
                </span>
                </p>
              </div>
            </div>
            <div className="overview__inner-row">
              <div className="overviewContent overviewContent--caption">
                <h6 className="_sm">{strings["item-5"].title}</h6>
              </div>
              <div className="overviewContent">
                <p>{strings["item-5"].paragraph}</p>
              </div>
            </div>
            <div className="overview__inner-row">
              <div className="overviewContent overviewContent--caption">
                <h6 className="_sm">{strings["item-6"].title}</h6>
              </div>
              <div className="overviewContent">
                <p>{strings["item-6"].paragraph}
                <span className="noBreak">
                {strings["item-6"].break}
                </span>
                </p>
              </div>
            </div>
            <div className="overview__inner-row">
              <div className="overviewContent overviewContent--caption">
                <h6 className="_sm">{strings["item-7"].title}</h6>
              </div>
              <div className="overviewContent">
                <p>{strings["item-7"].paragraph}
                <span className="noBreak">
                {strings["item-7"].break}
                </span>
                </p>
              </div>
            </div>
            <div className="overview__inner-row">
              <div className="overviewContent overviewContent--caption">
                <h6 className="_sm">{strings["item-8"].title}</h6>
              </div>
              <div className="overviewContent">
                <p>{strings["item-8"].paragraph}
                <span className="noBreak">
                {strings["item-8"].break}
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

export default Overview;
