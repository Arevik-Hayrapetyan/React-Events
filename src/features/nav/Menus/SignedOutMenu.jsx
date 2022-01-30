import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOutMenu({ signIn }) {
  return (
    <Menu.Item position="right">
      <Button onClick={signIn} basic inverted content="Login" />
      <Button
        basic
        inverted
        content="Sign Out"
        style={{ marginLeft: "0.5em" }}
      />
    </Menu.Item>
  );
}
