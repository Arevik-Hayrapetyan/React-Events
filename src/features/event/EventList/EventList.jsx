import React from "react";
import { Fragment } from "react/cjs/react.development";
import EventListItem from "./EventListItem";

export default function EventList({ events }) {
  return (
    <Fragment>
      {events.map((event) => (
        <EventListItem key={event.id} event={event} />
      ))}
    </Fragment>
  );
}
