import React from "react";
import { host } from "storybook-host";
import WelcomeButton from "./WelcomeButton";

const Host = host({
  align: "center middle",
  background: true,
  backdrop: true,
  width: 800
});

export const Default = () => <WelcomeButton>hello</WelcomeButton>;

export default {
  title: "Welcome Button",
  decorators: [Host]
};
