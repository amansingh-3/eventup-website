import React from "react";
import "../../../global.css";
import Card from "../Card/Card";
import "./EventsWrap.css";
import Concert from "../../assets/concert.jpg";
import Concert1 from "../../assets/concert1.jpg";
import Concert2 from "../../assets/concert2.jpg";

const EventsWrap = () => {
  return (
    <>
      <div className="container">
        <div className="event-heading">
          <h2 className="head1">Upcoming Events</h2>
        </div>

        <div className="events-list-wrapper">
          <div className="upcoming-events">
            <Card
              title="Karan Aujla Show"
              desc="Booking the most amazing singer's show "
              cardImage={Concert}
            />
            <Card
              title="Alan Walker Show"
              desc="Dance on the beats and rhythm of most amazing DJ's "
              cardImage={Concert1}
            />

            <Card
              title="Run to Save Tress"
              desc="Booking for Marathon at Sukhna Lake"
              cardImage={Concert2}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsWrap;
