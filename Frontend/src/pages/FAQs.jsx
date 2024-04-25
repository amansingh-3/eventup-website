import React from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import faq from "../assets/faq.png";
import Accordian from "../components/Accordian/Accordian";

const FAQs = () => {
  return (
    <>
      <div className="faq-section">
        <HeroBanner
          heading="What can we help you find?"
          desc="Welcome to EventUp Help Center"
          bannerImage={faq}
        />
        <Accordian />
      </div>
    </>
  );
};

export default FAQs;
