import React from "react";
import { useSelector } from "react-redux";

// internal imports
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import EventCard from "../components/Route/Events/EventCard";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          <EventCard active={true} data={allEvents && allEvents[0]} />
        </div>
      )}
    </>
  );
};

export default EventsPage;
