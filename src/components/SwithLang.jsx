import React, { useState } from "react";

const SwithLang = () => {
  const [active, setActive] = useState(false);

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
