import React from "react";
import "./Conference.css";
import ConferenceIMG from "../../assets/conference.png";

const Conference = () => {
  return (
    <>
      <section className="conference-sln">
        <div className="container">
          <div className="conference-sln-row-wrapper">
            <div className="col--conference-content">
              <h2 className="h2-content">
                Powerful virtual conferencing platform solution
              </h2>
              <p className="p-content">
                Dedicated spaces that make it easy to come together.
              </p>
            </div>
            <div className="col--conference-image">
              <img src={ConferenceIMG} alt="conference-image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Conference;
