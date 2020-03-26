import React from "react";
import Button from "@material-ui/core/Button";

interface WelcomeButtonProps {
  children: React.ReactNode;
}
const WelcomeButton = (props: WelcomeButtonProps) => (
  <Button variant="contained" color="primary">
    {props.children}
  </Button>
);

export default WelcomeButton;
