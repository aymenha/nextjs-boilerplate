import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

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
