import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { host } from "storybook-host";

import { Button } from "@storybook/react/demo";
import Nav from "./nav";

storiesOf("Components", module).add("Head", () => <Nav />);

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={linkTo("Button")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("storybook-host", module)
  .addDecorator(
    host({
      title: "A host container for components under test.",
      align: "center middle",
      background: true,
      backdrop: true
    })
  )
  .add("default", () => (
    <Button>
      <span role="img" aria-label="so cool">
        hello world
      </span>
    </Button>
  ));
