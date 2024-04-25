import React from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import events from "../assets/events.png";

import EventsWrap from "../components/EventsWrap/EventsWrap";

const Events = () => {
  return (
    <>
      <HeroBanner
        heading="Our Events"
        desc="Dive into the best Event handling organization"
        bannerImage={events}
      />

      <EventsWrap />
    </>
  );
};

export default Events;
