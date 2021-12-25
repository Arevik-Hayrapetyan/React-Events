import React from "react";
import { Button, Grid } from "semantic-ui-react";
import EventForm from "../EventForm/EventForm";
import EventList from "../EventList/EventList";

export default function EventDashboard() {
  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          <EventList />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button positive content="Create Event" />
          <EventForm />
        </Grid.Column>
      </Grid>
    </div>
  );
}
