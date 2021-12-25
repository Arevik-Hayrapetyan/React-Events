import React from "react";
import { Button, Icon, Item, List, Segment } from "semantic-ui-react";

export default function EventListItem() {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src="" />
            <Item.Content>
              <Item.Header as="a">Event Title</Item.Header>
              <Item.Description>
                Hosted by <a>hosted by</a>
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" />
          date
          <Icon name="marker" />
          time
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>{/* {todo:attendees} */}</List>
      </Segment>
      <Segment clearing>
        <Button as="a" color="teal" floated="right" content="View"></Button>
      </Segment>
    </Segment.Group>
  );
}
