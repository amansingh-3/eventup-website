import React from "react";
import "../../../../global.css";
import "./JoinTeam.css";

const JoinTeam = () => {
  return (
    <>
      <section className="join-team">
        <div className="container">
          <div className="row-wrapper-join-team">
            <div className="col-join-team-head">
              <h2>Join our Team</h2>
            </div>
            <div className="col-join-team-content">
              <p>
                We believeit takes great people to makea great product that's
                why we hire not only the perfect fits , but people who embody
                our company values
              </p>
              <a href="#">
                View Opening
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinTeam;
