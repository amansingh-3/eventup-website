import React from "react";
import features from "../../assets/features.png";
import "../AllFeatures/AllFeatures.css";

const AllFeatures = () => {
  return (
    <>
      <section className="all-featuers">
        <div className="container">
          <div className="all-features-row-wrapper">
            <div className="col-features-content">
              <p className="p-content p-all-features ff h6" data-aos="fade-up">
                All Features
              </p>
              <h2 className="h2-content h2-all-features" data-aos="fade-up">
                Video calls loved by extraordinary teams.
              </h2>
              <p className="p-content p-all-features" data-aos="fade-up">
                Making hybrid conference inclusive with unique audio technology.
              </p>
              <div className="list-tags">
                <ul className="ul-all-features p-all-features">
                  <li data-aos="fade-right">
                    <a href="#">Intergration with google meet</a>
                  </li>
                  <li data-aos="fade-right">
                    <a href="#">Get data event analytics </a>
                  </li>
                  <li data-aos="fade-right">
                    <a href="#">Protect events with a passcode</a>
                  </li>
                </ul>
                <ul className="ul-all-features">
                  <li data-aos="fade-right">
                    <a href="#">Messages with participation</a>
                  </li>
                  <li data-aos="fade-right">
                    <a href="#">Advanced Q&A settings </a>
                  </li>
                  <li data-aos="fade-right">
                    <a href="#">Crowdsource questions </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-features-image" data-aos="fade-up">
              <img src={features} alt="features-image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllFeatures;
