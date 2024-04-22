import React from "react";
import HeroBannerAbt from "../components/HeroBannerAbt/HeroBannerAbt";
import RowAbtus from "../components/RowAbtus/RowAbtus";
import RowOurTeam from "../components/RowOurTeam/RowOurTeam";
import Image from "../components/ImgSection/Image";
import GettingMsg from "../components/GettingMsg/GettingMsg";
import Setup from "../components/Setup/Setup";

const About = () => {
  return (
    <>
      <HeroBannerAbt />
      <Image />
      <RowAbtus />
      <RowOurTeam />
      <GettingMsg />
      <Setup />
    </>
  );
};

export default About;
