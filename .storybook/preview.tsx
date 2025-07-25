import type { Preview } from '@storybook/react-vite';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

import { ThemeProvider } from '@emotion/react';
import { theme } from '../src/theme'; // Corrected path to theme

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// Global decorator to apply the ThemeProvider to all stories and MDX docs
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

const preview: Preview = {
  // tags: ['autodocs'] is intentionally removed from here to prevent
  // the "No CSF file attached" error for pure MDX docs like Styleguide.mdx.
  // Add tags: ['autodocs'] directly to specific CSF story files if needed.
  parameters: {
    actions: {  },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'off'
    }
  },
};

export default preview;
