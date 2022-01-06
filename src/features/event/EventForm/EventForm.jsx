import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useState } from "react";

export default function EventForm({
  cancelIsOpenForm,
  createEvent,
  selectedEvent,
  updateEvent,
}) {
  let [state, setState] = useState(
    selectedEvent
      ? { ...selectedEvent }
      : {
          title: "",
          date: "",
          city: "",
          venue: "",
          hostedBy: "",
        }
  );

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (state.id) {
      updateEvent(state);
    } else {
      createEvent(state);
    }
  };

  return (
    <Segment>
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <label>Event Title</label>
          <input
            name="title"
            onChange={handleChange}
            value={state.title}
            type="text"
            placeholder="Event Title"
          />
        </Form.Field>
        <Form.Field>
          <label>Event Date</label>
          <input
            name="date"
            onChange={handleChange}
            value={state.date}
            type="date"
            placeholder="Event Date"
          ></input>
        </Form.Field>
        <Form.Field>
          <label>City</label>
          <input
            name="city"
            onChange={handleChange}
            value={state.city}
            placeholder="City event is taking place"
          />
        </Form.Field>
        <Form.Field>
          <label>Venue</label>
          <input
            name="venue"
            onChange={handleChange}
            value={state.venue}
            placeholder="Enter the Venue of te event"
          />
        </Form.Field>
        <Form.Field>
          <label>Hosted by</label>
          <input
            name="hostedBy"
            onChange={handleChange}
            value={state.hostedBy}
            placeholder="Enter the name of person hosting"
          />
        </Form.Field>
        <Button positive type="submit" content="Submit" />

        <Button
          onClick={() => cancelIsOpenForm()}
          type="button"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
}
