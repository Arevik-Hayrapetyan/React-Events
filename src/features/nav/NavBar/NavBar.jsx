import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {  Container, Menu } from "semantic-ui-react";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";

function NavBar() {
  let history = useNavigate();
  const [authenticated, setAuthenticated] = useState(true);

  function handleSignIn() {
    setAuthenticated(false);
  }
  function handleSignOut() {
    console.log("hi");
    setAuthenticated(true);
    history("/");
  }
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header as={Link} to="/">
          <img src="assets/logo.png" alt="logo" />
          Blog
        </Menu.Item>
        <Menu.Item name="Events" as={Link} to="/events" />
        {authenticated ? (
          <SignedInMenu signOut={handleSignIn} />
        ) : (
          <SignedOutMenu signIn={handleSignOut} />
        )}
      </Container>
    </Menu>
  );
}
export default NavBar;
