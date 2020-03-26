import { addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const viewports = {
  500: {
    name: "500px",
    styles: {
      width: "500px",
      height: "500px"
    }
  }
};

addParameters({
  viewport: {
    viewports: { ...INITIAL_VIEWPORTS, ...viewports }
  }
});
