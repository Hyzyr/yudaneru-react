import React from "react";
import { Link } from "react-router-dom";

const Invest = ({ strings }) => {
  return (
    <section className="grid grid--invest">
      <div className="autoContainer">
        <div className="grid__inner">
          <h2>{strings.title}</h2>
          <div className="grid__inner-row">
            <div className="gridItem">
              <h4>
                {strings["item-1"].title}
                <br />
                {strings["item-1"].titleBr}
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
            <div className="gridItem">
              <h4>
                {strings["item-2"].title}
                <br />
                {strings["item-2"].titleBr}
                <span className="noBreak">
                  {strings["item-2"].breakTitle}
                </span>
              </h4>
              <p>{strings["item-2"].paragraph}
              <span className="noBreak">
                {strings["item-1"].breakParagraph}
              </span>
              </p>
            </div>
            <div className="gridItem">
              <h4>
                {strings["item-3"].title}
                <br />
                {strings["item-3"].titleBr}
                <span className="noBreak">
                  {strings["item-3"].breakTitle}
                </span>
              </h4>
              <p>{strings["item-3"].paragraph}
              <span className="noBreak">
                {strings["item-1"].breakParagraph}
              </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invest;
