import { configure } from "@storybook/react";
import { addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

// automatically import all files ending in *.stories.js
const req = require.context("../components", true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      500: {
        name: "500px",
        styles: {
          width: "500px",
          height: "500px"
        }
      }
    }
  }
});
configure(loadStories, module);
