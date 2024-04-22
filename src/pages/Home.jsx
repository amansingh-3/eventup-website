import React from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import BrandSection from "../components/BrandSection/BrandSection";
import DevicePage from "../components/DevicePage/DevicePage";
import Conference from "../components/ConferenceSol/Conference";
import AllFeatures from "../components/AllFeatures/AllFeatures";
import Benefits from "../components/Benefits/Benefits";
import GettingMsg from "../components/GettingMsg/GettingMsg";
import Setup from "../components/Setup/Setup";
import bannerImage from "../assets/hero-banner-image.svg.png";
import PButton from "../../src/components/PrimaryButton/PButton";
import SButton from "../../src/components/SecondaryButton/SButton";
const Home = () => {
  return (
    <>
      <HeroBanner
        heading="Reliable, secure conference to get the best events"
        desc="Hold incredible events, share knowledge, build and grow your product , create opportunity"
        bannerImage={bannerImage}
        PButton={<PButton content="Create Conference" />}
        SButton={<SButton content="Watch Story" />}
      />
      <BrandSection />
      <DevicePage />
      <Conference />
      <AllFeatures />
      <Benefits />
      <GettingMsg />
      <Setup />
    </>
  );
};

export default Home;
