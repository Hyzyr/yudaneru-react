import React from "react";

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
              <a href="#" className="button button--border">
                {strings["item-1"].button}
              </a>
            </div>
            <div className="gridItem">
              <h4>
                {strings["item-2"].title}
                <br />
                {strings["item-2"].titleBr}
              </h4>
              <p>{strings["item-2"].paragraph}</p>
              <a href="#" className="button button--border">
                {strings["item-2"].button}
              </a>
            </div>
            <div className="gridItem">
              <h4>
                {strings["item-3"].title}
                <br />
                {strings["item-3"].titleBr}
              </h4>
              <p>{strings["item-3"].paragraph}</p>
              <a href="#" className="button button--border">
                {strings["item-3"].button}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invest;
