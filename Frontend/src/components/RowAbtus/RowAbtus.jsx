import React from "react";
import "../../../global.css";
import "./RowAbtus.css";

const RowAbtus = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row-wrapper-about-us">
            <div className="col-about-us-h2" data-aos="fade-up">
              <p>
                <strong>About Us</strong>
              </p>
              <h2 data-aos="fade-up">
                We provide enterprises with innovative technology
              </h2>
            </div>
            <div
              className="col-about-us-p"
              data-aos="fade-up"
              data-aos-delay="300">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                convallis tortor. Duis vel tincidunt ex. Praesent rhoncus diam
                ac neque placerat efficitur.
                <br />
                Nunc quis nunc ac lectus bibendum posuere. Fusce ut luctus diam,
                sit amet cursus ex. Curabitur ultricies neque a sem consequat
                scelerisque.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RowAbtus;
