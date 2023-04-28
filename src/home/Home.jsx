import React from "react";
import Hero from "./Hero";
import WhyUs from "./WhyUs";
import Services from "./Services";
import Feedbacks from "./Feedbacks";
import Invest from "./Invest";

const Home = ({ strings }) => {
  return (
    <>
      <Hero strings={strings.hero} />
      <WhyUs strings={strings.whyUs} />
      <Services strings={strings.service} />
      <Invest strings={strings.wayInvest} />
      <Feedbacks strings={strings.testimonials} />
    </>
  );
};

export default Home;
