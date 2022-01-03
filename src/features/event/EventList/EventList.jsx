import React from "react";
import { Fragment } from "react/cjs/react.development";
import EventListItem from "./EventListItem";

export default function EventList({ events, selectEvent }) {
  return (
    <Fragment>
      {events.map((event) => (
        <EventListItem key={event.id} event={event} selectEvent={selectEvent} />
      ))}
    </Fragment>
  );
}
