import React from "react";

const HeroTitle = ({ title }) => {
  return (
    <>
      <section className="heroTitle">
        <div className="autoContainer">
          <div className="heroTitle__inner">
            <h1>{title}</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroTitle;
