import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";

export default function NavBar() {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header as={Link} to="/">
          <img src="assets/logo.png" alt="logo" />
          Blog
        </Menu.Item>
        <Menu.Item name="Events" as={Link} to="/events" />
        <Menu.Item>
          <Button
            floated="right"
            positive
            inverted
            content="Create Event"
            as={Link}
            to="/createEvent"
          />
        </Menu.Item>
        <Menu.Item position="right">
          <Button basic inverted content="Login" />
          <Button
            basic
            inverted
            content="Sign Out"
            style={{ marginLeft: "0.5em" }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
