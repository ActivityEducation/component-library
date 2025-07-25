// .storybook/main.ts

const config = {
  stories: [
    "../src/docs/**/*.mdx", // New: Path for pure MDX documentation files
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)" // Existing: Path for CSF component stories
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "@storybook/addon-docs",
  ],
  docs: {
    // Ensuring autodocs only run for tagged stories
    autodocs: 'tag', // <--- Changed this line to 'tag'
    defaultName: 'Documentation',
  },
  framework: {
    name: "@storybook/react-vite",
    options: {
      builderVite: {
        viteConfig: async (config) => {
          if (!config.optimizeDeps) {
            config.optimizeDeps = {};
          }
          if (!config.optimizeDeps.exclude) {
            config.optimizeDeps.exclude = [];
          }

          // Exclude Storybook's core internal packages and Emotion from optimization
          config.optimizeDeps.exclude.push(
            '@storybook/blocks',
            '@storybook/addon-docs',
            '@emotion/react',
            '@emotion/styled'
          );

          return config;
        },
      },
    },
  },
};
export default config;
