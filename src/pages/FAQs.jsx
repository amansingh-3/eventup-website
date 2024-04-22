import React from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import faq from "../assets/faq.png";
import Accordian from "../components/Accordian/Accordian";

const FAQs = () => {
  return (
    <>
      <HeroBanner
        heading="What can we help you find?"
        desc="Welcome to EventUp Help Center"
        bannerImage={faq}
      />
      <Accordian />
    </>
  );
};

export default FAQs;
