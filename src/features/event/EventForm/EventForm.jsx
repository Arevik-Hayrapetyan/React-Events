import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useState, useEffect } from "react";

export default function EventForm({
  cancelIsOpenForm,
  createEvent,
  selectedEvent,
}) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [venue, setVenue] = useState("");
  const [hostedBy, setHostedBy] = useState("");
  let [state, setState] = useState();
  state = {
    title,
    date,
    city,
    venue,
    hostedBy,
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    createEvent(state);
  };

  return (
    <Segment>
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <label>Event Title</label>
          <input
            name="title"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            type="text"
            placeholder="Event Title"
          />
        </Form.Field>
        <Form.Field>
          <label>Event Date</label>
          <input
            name="date"
            onChange={(event) => setDate(event.target.value)}
            value={date}
            type="date"
            placeholder="Event Date"
          ></input>
        </Form.Field>
        <Form.Field>
          <label>City</label>
          <input
            name="city"
            onChange={(event) => setCity(event.target.value)}
            value={city}
            placeholder="City event is taking place"
          />
        </Form.Field>
        <Form.Field>
          <label>Venue</label>
          <input
            name="venue"
            onChange={(event) => setVenue(event.target.value)}
            value={venue}
            placeholder="Enter the Venue of te event"
          />
        </Form.Field>
        <Form.Field>
          <label>Hosted by</label>
          <input
            name="hostedBy"
            onChange={(event) => setHostedBy(event.target.value)}
            value={hostedBy}
            placeholder="Enter the name of person hosting"
          />
        </Form.Field>
        <Button positive type="submit" content="Submit" />

        <Button onClick={cancelIsOpenForm} type="button" content="Cancel" />
      </Form>
    </Segment>
  );
}
