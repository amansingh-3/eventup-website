import React from "react";
import benfitsIMG from "../../assets/benefits.png";
import "./Benefits.css";

const Benefits = () => {
  return (
    <>
      <section className="benefits">
        <div className="container">
          <div className="benefits-row-wrapper">
            <div className="col-benefits-image" data-aos="fade-up">
              <img src={benfitsIMG} alt="benefits-image" />
            </div>
            <div className="col-benefits-content">
              <p className="p-content p-all-features" data-aos="fade-up">
                <strong>Benefits of You</strong>
              </p>
              <h2 className="h2-content h2-all-features" data-aos="fade-up">
                Fast, reliable and secure for your conferences
              </h2>
              <p className="p-content p-all-features" data-aos="fade-up">
                By using us, get the benefits that make it easier for you in the
                conference for your convenience and the participants
              </p>
              <ul>
                <li data-aos="fade-right">Security & Privacy</li>
                <li data-aos="fade-right">Audience Q&A</li>
                <li data-aos="fade-right">Engagement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
