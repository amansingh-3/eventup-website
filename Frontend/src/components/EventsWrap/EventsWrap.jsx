import React from "react";
import "../../../global.css";
import Card from "../Card/Card";
import "./EventsWrap.css";

const EventsWrap = () => {
  return (
    <>
      <div className="container">
        <div className="event-heading">
          <h2 className="head1">Our Events</h2>
        </div>

        <div className="events-list-wrapper">
          <div className="upcoming-events">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsWrap;
