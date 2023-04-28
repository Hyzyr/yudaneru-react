import React from "react";

const Partners = ({ strings }) => {
  return (
    <section className="partners">
      <div className="autoContainer">
        <div className="partners__inner">
          <div className="partners__inner-column _sm">
            <div className="partners__inner-text">
              <h2>{strings.title}</h2>
              <p className="_lg">{strings.paragraph}</p>
            </div>
          </div>
          <div className="partners__inner-column">
            <div className="partnersItem">
              <div className="ratioImage">
                <img src="/images/partners/partners-1.png" alt="" />
              </div>
            </div>
            <div className="partnersItem">
              <div className="ratioImage">
                <img src="/images/partners/partners-2.png" alt="" />
              </div>
            </div>
            <div className="partnersItem">
              <div className="ratioImage">
                <img src="/images/partners/partners-1.png" alt="" />
              </div>
            </div>
            <div className="partnersItem">
              <div className="ratioImage">
                <img src="/images/partners/partners-3.png" alt="" />
              </div>
            </div>
            <div className="partnersItem">
              <div className="ratioImage">
                <img src="/images/partners/partners-4.png" alt="" />
              </div>
            </div>
            <div className="partnersItem">
              <div className="ratioImage">
                <img src="/images/partners/partners-5.png" alt="" />
              </div>
            </div>
            <div className="partnersItem">
              <div className="ratioImage">
                <img src="/images/partners/partners-6.png" alt="" />
              </div>
            </div>
            <div className="partnersItem">
              <div className="ratioImage">
                <img src="/images/partners/partners-7.png" alt="" />
              </div>
            </div>
            <div className="partnersItem">
              <div className="ratioImage">
                <img src="/images/partners/partners-8.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
