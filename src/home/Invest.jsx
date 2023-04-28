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
              </h4>
              <p>{strings["item-1"].paragraph}</p>
              <Link to="/contact-us" className="button button--border">
                {strings["item-1"].button}
              </Link>
            </div>
            <div className="gridItem">
              <h4>
                {strings["item-2"].title}
                <br />
                {strings["item-2"].titleBr}
              </h4>
              <p>{strings["item-2"].paragraph}</p>
              <Link to="/contact-us" className="button button--border">
                {strings["item-2"].button}
              </Link>
            </div>
            <div className="gridItem">
              <h4>
                {strings["item-3"].title}
                <br />
                {strings["item-3"].titleBr}
              </h4>
              <p>{strings["item-3"].paragraph}</p>
              <Link to="/contact-us" className="button button--border">
                {strings["item-3"].button}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invest;
