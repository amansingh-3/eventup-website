import React from "react";
import "../../../global.css";
import "./HeroBannerAbt.css";

const HeroBannerAbt = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-banner">
            <div className="col-hero-banner-h1" data-aos="fade-up">
              <h1>Experience you can trust</h1>
            </div>
            <div
              className="col-hero-banner-p"
              data-aos="fade-up"
              data-aos-delay="300">
              <p>
                From year to year, we strive to invest in the most innovative
                technology that is used by both small enterprises and space
                enterprises
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBannerAbt;
