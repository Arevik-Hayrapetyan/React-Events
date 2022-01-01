import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useState } from "react";

export default function EventForm({ cancelIsOpenForm }) {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [city, setCity] = useState();
  const [venue, setVenue] = useState();
  const [hostedBy, setHostedBy] = useState();

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleVenueChange = (event) => {
    setVenue(event.target.value);
  };
  const handleHostedByChange = (event) => {
    setHostedBy(event.target.value);
  };
  return (
    <Segment>
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <label>Event Title</label>
          <input
            name="title"
            onChange={handleTitleChange}
            value={title}
            type="text"
            placeholder="Event Title"
          />
        </Form.Field>
        <Form.Field>
          <label>Event Date</label>
          <input
            onChange={handleDateChange}
            value={date}
            type="date"
            placeholder="Event Date"
          ></input>
        </Form.Field>
        <Form.Field>
          <label>City</label>
          <input
            onChange={handleCityChange}
            value={city}
            placeholder="City event is taking place"
          />
        </Form.Field>
        <Form.Field>
          <label>Venue</label>
          <input
            onChange={handleVenueChange}
            value={venue}
            placeholder="Enter the Venue of te event"
          />
        </Form.Field>
        <Form.Field>
          <label>Hosted by</label>
          <input
            onChange={handleHostedByChange}
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
