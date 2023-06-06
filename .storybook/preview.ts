import type { Preview } from "@storybook/react";

import '../src/app/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: (a, b) => {
        const sortOrder = [
          "shared",
          "entities",
          "features",
          "widgets",
          "pages",
          "app",
        ]
        const aIndex = sortOrder.indexOf(a.title.split('/')[0])
        const bIndex = sortOrder.indexOf(b.title.split('/')[0])
        return aIndex - bIndex
      },
    },
  },
};

export default preview;
