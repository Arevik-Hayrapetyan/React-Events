import React from "react";
import { Grid } from "semantic-ui-react";
import EventList from "../EventList/EventList";

export default function EventDashboard() {
  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          <EventList />
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Right Column</h2>
        </Grid.Column>
      </Grid>
    </div>
  );
}
