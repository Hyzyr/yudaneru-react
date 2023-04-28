import React from "react";

import Hero from "./Hero";
import Team from "./Team";
import Partners from "./Partners";
import Overview from "./Overview";
import RoadLine from "./RoadLine";

const About = ({ strings }) => {
  return (
    <>
      <Hero strings={strings.about} />
      <Team strings={strings.team} />
      <Partners strings={strings.partners} />
      <RoadLine strings={strings.history} />
      <Overview strings={strings.overview} />
    </>
  );
};

export default About;
