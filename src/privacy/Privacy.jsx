import React, { useEffect } from "react";

const Privacy = ({ strings }) => {
  const navHighlighter = React.useCallback(() => {
    const anchors = document.querySelectorAll(".anchor[id]");

    let scrollY = window.pageYOffset; // Get current scroll position
    anchors.forEach((current) => {
      const section = current.nextElementSibling;
      const sectionHeight = section.offsetHeight;
      const sectionTop = current.offsetTop - 250;
      let sectionId = current.getAttribute("id");
      let currentSection = document.querySelector(
        `.scrollTab[href*="${sectionId}"]`
      );
      if (!currentSection) {
        console.log(sectionId);
        return;
      }
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        currentSection.classList.add("active");
      } else {
        currentSection.classList.remove("active");
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", navHighlighter);

    return () => {
      window.removeEventListener("scroll", navHighlighter);
    };
  }, []);

  return (
    <section className="scroll">
      <div className="autoContainer">
        <div className="scroll__inner">
          <div className="scroll__inner-tabs">
            <h6 className="_sm">{strings.tabs.title}</h6>
            <a href="#Solicitation-policy" className="scrollTab active">
              {strings.tabs["tab-1"]}
            </a>
            <a href="#Privacy-policy" className="scrollTab">
              {strings.tabs["tab-2"]}
            </a>
            <a href="#Basic-policy" className="scrollTab">
              {strings.tabs["tab-3"]}
            </a>
            <a href="#Handling-policy" className="scrollTab">
              {strings.tabs["tab-4"]}
            </a>
          </div>
          <div className="scroll__inner-content">
            <div className="scrollContent">
              <div className="scrollContent__header caption">
                <h2 className="_sm">{strings["item-1"].title}</h2>
                <p className="_sm">{strings["item-1"].subTitle}</p>
              </div>
              <div className="scrollContent__body">
                <p className="_lg">
                  {strings["item-1"]["paragraph-1"]}
                  <br />
                  <br />
                  {strings["item-1"]["paragraph-2"]}
                </p>
              </div>
            </div>
            <div className="anchor" id="Solicitation-policy"></div>
            <div className="scrollContent">
              <div className="scrollContent__header">
                <h2 className="_sm">{strings["item-2"].title}</h2>
              </div>
              <div className="scrollContent__body">
                <p className="_lg">
                  {strings["item-2"]["paragraph-1"]}
                  <br />
                  <br />
                  {strings["item-2"]["paragraph-2"]}
                  <br />
                  <br />
                  {strings["item-2"]["paragraph-3"]}
                </p>
              </div>
            </div>
            <div className="anchor" id="Privacy-policy"></div>
            <div className="scrollContent">
              <div className="scrollContent__header">
                <h2 className="_sm">{strings["item-3"].title}</h2>
              </div>
              <div className="scrollContent__body list">
                <p className="_lg">
                  {strings["item-3"]["paragraph-1"]}
                  <br />
                  <br />
                  {strings["item-3"]["paragraph-2"]}
                  <br />
                  <br />
                  {strings["item-3"]["paragraph-3"]}
                </p>
                <h4>{strings["item-3"]["titleSmall"]}</h4>
                <p className="_lg">
                  {strings["item-3"]["paragraph-4"]}
                  <br />
                  <br />
                  {strings["item-3"]["paragraph-5"]}
                  <br />
                  <br />
                  <strong>{strings["item-3"]["paragraphStrong"]}</strong>
                </p>
                <ul>
                  <li>{strings["item-3"]["list-1"]}</li>
                  <li>{strings["item-3"]["list-2"]}</li>
                  <li>{strings["item-3"]["list-3"]}</li>
                </ul>
              </div>
            </div>
            <div className="anchor" id="Basic-policy"></div>
            <div className="scrollContent">
              <div className="scrollContent__header">
                <h2 className="_sm">{strings["item-4"].title}</h2>
              </div>
              <div className="scrollContent__body">
                <p className="_lg">
                  {strings["item-4"]["paragraph-1"]}
                  <br />
                  <br />
                  {strings["item-4"]["paragraph-2"]}
                  <br />
                  <br />
                  {strings["item-4"]["paragraph-3"]}
                </p>
              </div>
            </div>
            <div className="anchor" id="Handling-policy"></div>
            <div className="scrollContent">
              <div className="scrollContent__header">
                <h2 className="_sm">{strings["item-5"].title}</h2>
              </div>
              <div className="scrollContent__body">
                <p className="_lg">
                  {strings["item-5"]["paragraph-1"]}
                  <br />
                  <br />
                  {strings["item-5"]["paragraph-2"]}
                  <br />
                  <br />
                  <strong>{strings["item-5"]["paragraphStrong"]}</strong>
                </p>
                <ul>
                  <li>{strings["item-5"]["list-1"]}</li>
                  <li>{strings["item-5"]["list-2"]}</li>
                  <li>{strings["item-5"]["list-3"]}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
