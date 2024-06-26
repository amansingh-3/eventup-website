import React from "react";
import "./Setup.css";

const Setup = () => {
  return (
    <>
      <section className="setup">
        <div className="container">
          <div className="setup-row-wrapper" data-aos="fade-up">
            <div className="col-setup-content">
              <h2 className="h2-all-features" data-aos="fade-up">
                Ready to setup your next conference?
              </h2>
              <p className="p-all-features h2-all-features" data-aos="fade-up">
                Build opportunities for future opportunities for products,
                startups.
              </p>
            </div>
            <div className="col-setup-buttons">
              <div className="row-banner-btns">
                <a
                  href="#"
                  className="button"
                  data-aos="fade-up"
                  data-aos-delay="300">
                  Create Conference
                </a>
                <a
                  href="#"
                  className="button--secondary"
                  data-aos="fade-up"
                  data-aos-delay="500">
                  Watch Story{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Setup;
