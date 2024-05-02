import React from "react";
import item1 from "../../assets/item1.png";
import item2 from "../../assets/item2.png";
import item3 from "../../assets/item3.png";
import item4 from "../../assets/item4.png";
import "./RowOurTeam.css";

const RowOurTeam = () => {
  return (
    <>
      <section className="row-our-team">
        <div className="container">
          <div className="row-wrapper-our-team">
            <div className="row-team-heading">
              <h2 className="h4" data-aos="fade-up">
                Our Team
              </h2>
              <h2 data-aos="fade-up">
                Meet our amazing team behind the scenes
              </h2>
            </div>
            <div className="row-wrapper-our-team-list">
              <div className="col-our-team-item items-1">
                <div className="item-img" data-aos="zoom-in-up">
                  <img src={item1} alt="item1" width="320" height="322" />
                </div>
                <div className="item-content">
                  <div className="item-inner">
                    <h2 className="h4" data-aos="fade-up">
                      Sunny Marwah
                    </h2>
                    <p data-aos="fade-up">Visual Designer</p>
                    <p data-aos="fade-up">
                      Bringing the ideas to life , pixel by pixel . That's what
                      drives me
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-our-team-item items-2">
                <div className="item-img" data-aos="zoom-in-up">
                  <img src={item2} alt="item2" width="320" height="322" />
                </div>
                <div className="item-content">
                  <div className="item-inner">
                    <h2 className="h4" data-aos="fade-up">
                      Samsel Sunday
                    </h2>
                    <p data-aos="fade-up">Head of design</p>
                    <p data-aos="fade-up">
                      As a design leader to make sure That users need into a
                      visual direction for our team to work with
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-wrapper-our-team-list col-reverse">
              <div className="col-our-team-item items-1">
                <div className="item-img" data-aos="zoom-in-up">
                  <img src={item3} alt="item3" width="320" height="322" />
                </div>
                <div className="item-content">
                  <div className="item-inner">
                    <h2 className="h4" data-aos="fade-up">
                      Mentari Crystal
                    </h2>
                    <p data-aos="fade-up">Developer</p>
                    <p data-aos="fade-up">
                      Making sure we're up to date to the latest technologies is
                      what i strive for
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-our-team-item items-2">
                <div className="item-img" data-aos="zoom-in-up">
                  <img src={item4} alt="item4" width="320" height="322" />
                </div>
                <div className="item-content">
                  <div className="item-inner">
                    <h2 className="h4" data-aos="fade-up">
                      Berry Syam
                    </h2>
                    <p data-aos="fade-up">VP of Engineering</p>
                    <p data-aos="fade-up">
                      Getting the best out of the dev squad and building solid
                      products together is what puts a smile on my face
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RowOurTeam;
