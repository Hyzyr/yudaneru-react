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
            <a href="#" className="scrollTab">
              {strings.tabs["tab-5"]}
            </a>
          </div>
          <div className="scroll__inner-content">
            {/* <div className="scrollContent">
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
            </div> */}
            <div className="anchor" id="Solicitation-policy"></div>
            <div className="scrollContent">
              <div className="scrollContent__header">
                <h2 className="_sm">{strings["item-2"].title}</h2>
              </div>
              <div className="scrollContent__body">
                <p className="_lg">
                  {strings["item-2"]["paragraph-2"]}
                  <br />
                  <br />
                  {strings["item-2"]["paragraph-1"]}
                  <br />
                  <br />
                  <span>
                    {strings["item-2"]["paragraph-2.5"]}
                    <br />
                    {strings["item-2"]["paragraph-3"]}
                    <br />
                    {strings["item-2"]["paragraph-4"]}
                  </span>
                  <br />
                  {strings["item-2"]["paragraph-5"]}
                  <br />
                  <br />
                  <span>
                    {strings["item-2"]["paragraph-6"]}
                    <br />
                    {strings["item-2"]["paragraph-7"]}
                  </span>
                  <br />
                  {strings["item-2"]["paragraph-8"]}
                  <br />
                  <br />
                  <span>
                    {strings["item-2"]["paragraph-9"]}
                    <br />
                    {strings["item-2"]["paragraph-10"]}
                  </span>
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
                  {strings["item-3"]["paragraph-14"]}
                  <br />
                  <br />
                  {strings["item-3"]["paragraph-1"]}
                  <br />
                  <br />
                  {strings["item-3"]["paragraphTitle-2"]}
                  <br />
                  {strings["item-3"]["paragraph-2"]}
                  <br />
                  <br />
                  {strings["item-3"]["paragraphTitle-3"]}
                  <br />
                  {strings["item-3"]["paragraph-3"]}
                  <br />
                  <br />
                  {strings["item-3"]["listTitle-1"]}
                  <br />
                  <span>
                    {strings["item-3"]["list-1"]}
                    <br />
                    {strings["item-3"]["list-2"]}
                    <br />
                    {strings["item-3"]["list-3"]}
                    <br />
                    {strings["item-3"]["list-4"]}
                    <br />
                    {strings["item-3"]["list-5"]}
                    <br />
                    {strings["item-3"]["list-6"]}
                  </span>
                  <br />
                  {strings["item-3"]["listTitle-7"]}
                  <br />
                  <span>
                    {strings["item-3"]["list-7"]}
                    <br />
                    {strings["item-3"]["list-8"]}
                  </span>
                  <br />
                  {strings["item-3"]["paragraphTitle-4"]}
                  <br />
                  {strings["item-3"]["paragraph-4"]}
                  <br />
                  <br />
                  {strings["item-3"]["paragraphTitle-5"]}
                  <br />
                  {strings["item-3"]["paragraph-5"]}
                  <br />
                  <br />
                  <span>
                    {strings["item-3"]["list-9"]}
                    <br />
                    {strings["item-3"]["list-10"]}
                    <br />
                    {strings["item-3"]["list-11"]}
                  </span>
                  <br />
                  {strings["item-3"]["paragraph-5.5"]}
                  <br />
                  <br />
                  {strings["item-3"]["paragraphTitle-6"]}
                  <br />
                  {strings["item-3"]["paragraph-6"]}
                  <br />
                  <br />
                  {strings["item-3"]["paragraphTitle-7"]}
                  <br />
                  {strings["item-3"]["paragraph-7"]}
                  <br />
                  <br />
                  {strings["item-3"]["paragraphTitle-8"]}
                  <span>
                    {strings["item-3"]["paragraph-8"]}
                    <br />
                    {strings["item-3"]["paragraph-8.5"]}
                  </span>
                  <br />
                  <span>
                    {strings["item-3"]["paragraph-9"]}
                    <br />
                    {strings["item-3"]["paragraph-10"]}
                    <br />
                    <br />
                    {strings["item-3"]["paragraphTitle-12"]}
                  </span>
                  <br />
                  {strings["item-3"]["paragraph-12"]}
                  <br />
                  {strings["item-3"]["paragraph-13"]}
                  <br />
                  {strings["item-3"]["paragraph-13.5"]}
                </p>
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
                  <span>
                    {strings["item-4"]["paragraph-2"]}
                    <br />
                    {strings["item-4"]["paragraph-3"]}
                    <br />
                    {strings["item-4"]["paragraph-4"]}
                    <br />
                    {strings["item-4"]["paragraph-5"]}
                    <br />
                    {strings["item-4"]["paragraph-6"]}
                  </span>
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
                  {strings["item-5"]["paragraphTitle-1"]}
                  <br />
                  {strings["item-5"]["paragraph-1"]}
                  <br />
                  <br />
                  {strings["item-5"]["listTitle-1"]}
                  <br />
                  <span>
                    {strings["item-5"]["list-1"]}
                    <br />
                    {strings["item-5"]["list-2"]}
                    <br />
                    {strings["item-5"]["list-3"]}
                  </span>
                  <br />
                  {strings["item-5"]["paragraph-2"]}
                  <br />
                  <span>
                    <br />
                    {strings["item-5"]["paragraph-3"]}
                    <br />
                    {strings["item-5"]["paragraph-3.5"]}
                    <br />
                    <br />
                    {strings["item-5"]["paragraph-4"]}
                  </span>
                  <br />
                  {strings["item-5"]["paragraph-5"]}
                  {/* <br />
                  {strings["item-5"]["paragraph-6"]} */}
                  <br />
                  <br />
                  {strings["item-5"]["paragraphTitle-7"]}
                  <br />
                  {strings["item-5"]["paragraph-7"]}
                  <br />
                  <br />
                  {strings["item-5"]["paragraphTitle-8"]}
                  <br />
                  {strings["item-5"]["paragraph-9"]}
                  <br />
                  <br />
                  {strings["item-5"]["paragraph-8"]}
                  <br />
                  {strings["item-5"]["listTitle-4"]}
                  <br />
                  <span>
                    {strings["item-5"]["list-4"]}
                    <br />
                    {strings["item-5"]["list-5"]}
                    <br />
                    {strings["item-5"]["list-6"]}
                  </span>
                  <br />
                  {strings["item-5"]["paragraph-10"]}
                  <br />
                  <br />
                  <span>
                    {strings["item-5"]["paragraph-11"]}
                    <br />
                    {strings["item-5"]["paragraph-11.5"]}
                    <br />
                    {strings["item-5"]["paragraph-12"]}
                  </span>
                  <br />
                  {strings["item-5"]["paragraphTitle-13"]}
                  <br />
                  {strings["item-5"]["paragraph-14"]}
                  <br />
                  <br />
                  {strings["item-5"]["paragraph-15"]}
                  <br />
                  {strings["item-5"]["paragraph-16"]}
                  <br />
                  <br />
                  {strings["item-5"]["paragraph-17"]}
                  <br />
                  {strings["item-5"]["paragraph-18"]}
                  <br />
                  <br />
                  {strings["item-5"]["paragraph-19"]}
                  <br />
                  <br />
                  {/* {strings["item-5"]["paragraph-20"]}
                  <br /> */}
                  {strings["item-5"]["paragraph-21"]}
                  <br />
                  <br />
                  {strings["item-5"]["listTitle-7"]}
                  <span>
                    {strings["item-5"]["list-7"]}
                    <br />
                    {strings["item-5"]["list-8"]}
                    <br />
                    {strings["item-5"]["list-9"]}
                    <br />
                    {strings["item-5"]["list-10"]}
                    <br />
                    {strings["item-5"]["list-11"]}
                  </span>
                  <br />
                  {strings["item-5"]["paragraph-22"]}
                  <br />
                  <span>
                    {strings["item-5"]["paragraph-23"]}
                    <br />
                    {strings["item-5"]["paragraph-24"]}
                    <br />
                    {strings["item-5"]["paragraph-25"]}
                  </span>
                  <br />
                  {strings["item-5"]["paragraph-26"]}
                </p>
              </div>
            </div>
            <div className="scrollContent">
              <div className="scrollContent__header">
                <h2 className="_sm">{strings["item-6"].title}</h2>
              </div>
              <div className="scrollContent__body">
                <p className="_lg">
                  {strings["item-6"]["paragraph-1"]}
                  <br />
                  {strings["item-6"]["paragraph-2"]}
                  <br />
                  {strings["item-6"]["paragraph-3"]}
                  <br />
                  <br />
                  {strings["item-6"]["paragraph-4"]}
                  <br />
                  {strings["item-6"]["paragraph-5"]}
                  <br />
                  {strings["item-6"]["paragraph-6"]}
                  <br />
                  {strings["item-6"]["paragraph-7"]}
                  <br />
                  {strings["item-6"]["paragraph-8"]}
                  <br />
                  {strings["item-6"]["paragraph-9"]}
                  <br />
                  {strings["item-6"]["paragraph-10"]}
                  <br />
                  {strings["item-6"]["paragraph-11"]}
                  <br />
                  {strings["item-6"]["paragraph-12"]}
                  <br />
                  {strings["item-6"]["paragraph-13"]}
                  <br />
                  {strings["item-6"]["paragraph-13.5"]}
                  <br />
                  {strings["item-6"]["paragraph-14"]}
                  <br />
                  {strings["item-6"]["paragraph-15"]}
                  <br />
                  {strings["item-6"]["paragraph-16"]}
                  <br />
                  {strings["item-6"]["paragraph-strong-17"]}
                  {strings["item-6"]["paragraph-17"]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
