import React from "react";
import { host } from "storybook-host";
import WelcomeButton from "./WelcomeButton";

const Host = host({
  align: "center middle",
  background: true,
  backdrop: true,
});

export const Default = () => <WelcomeButton>hello</WelcomeButton>;
export const Hi = () => <div>Hi</div>;

export default {
  title: "Welcome Button",
  decorators: [Host],
};
