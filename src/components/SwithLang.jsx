import React, { useEffect, useState } from "react";

const SwithLang = ({ strings }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(strings.getLanguage() === "en");
  }, []);
  useEffect(() => {
    strings.setLanguage(active ? "en" : "jp");
  }, [active]);

  return (
    <div className={`switchLang ${active ? "active" : ""}`}>
      <span onClick={() => setActive(false)}>JP</span>
      <div
        onClick={() => setActive(!active)}
        className="switchLang__label"
      ></div>
      <span onClick={() => setActive(true)}>EN</span>
    </div>
  );
};

export default SwithLang;
