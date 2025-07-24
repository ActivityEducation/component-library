// .storybook/main.ts

import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    "../src/stories/**/*.mdx", // Corrected path: assuming stories are inside src/
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)" // Corrected path
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    {
      name: "@storybook/addon-docs", // Explicitly define addon-docs
      options: {
        configureJSX: true,
        autodocs: "tag", // Corrected placement: now inside options for addon-docs
      },
    }
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  // autodocs: "tag" // Removed from here as it's now inside addon-docs options
};
export default config;
