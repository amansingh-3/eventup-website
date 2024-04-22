import React from "react";
import "../../../global.css";
import "../HeroBanner/HeroBanner.css";
import PropTypes from "prop-types";

const HeroBanner = (props) => {
  const maxWidth = props.imgMaxWidth;

  return (
    <>
      <section className="hero-banner">
        <div className="container">
          <div className="row-wrapper-content-with-image">
            <div className="col-banner-content">
              <h1>{props.heading}</h1>
              <p>{props.desc}</p>
              <div className="row-banner-btns">
                {props.PButton}
                {props.SButton}
              </div>
            </div>
            <div className="col-banner-image">
              <img
                src={props.bannerImage}
                style={{ maxWidth }}
                alt="hero-banner-image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

HeroBanner.defaultProps = {
  heading: "Sorry Heading Not rendered ",
  desc: "Sorry the Description did not rendered ",
  bannerImage: "Image not rendered",
};
HeroBanner.propTypes = {
  heading: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
export default HeroBanner;
