import type { Preview } from "@storybook/react";
import "@fontsource-variable/unbounded";
import "@fontsource-variable/montserrat";
import "../src/styles/index.scss";
import { themes } from "@storybook/theming";
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#000000",
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
