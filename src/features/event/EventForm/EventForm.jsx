import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";

export default function EventForm({ cancelIsOpenForm }) {
  return (
    <Segment>
      <Form>
        <Form.Field>
          <label htmlFor="">Event Title</label>
          <input type="text" placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>Event Date</label>
          <input type="date" placeholder="Event Date"></input>
        </Form.Field>
        <Form.Field>
          <label>City</label>
          <input placeholder="City event is taking place" />
        </Form.Field>
        <Form.Field>
          <label>Venue</label>
          <input placeholder="Enter the Venue of te event" />
        </Form.Field>
        <Form.Field>
          <label>Hosted by</label>
          <input placeholder="Enter the name of person hosting" />
        </Form.Field>
        <Button positive type="submit">
          Submit
        </Button>
        <Button onClick={cancelIsOpenForm} type="button">
          Cancel
        </Button>
      </Form>
    </Segment>
  );
}
