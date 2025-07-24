// This file defines Storybook stories for the Badge component of the AscendUCore UI Kit.
// It showcases various visual variants of the badge.

import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';

// Import the Badge component and the theme
import { Badge } from '../components/Badge';
import { theme } from '..//theme';

// Define the metadata for your Badge component story
const meta: Meta<typeof Badge> = {
  title: 'Components/Badge', // Path in the Storybook sidebar
  component: Badge,          // The React component to document
  tags: ['autodocs'],         // Enables auto-generated documentation
  parameters: {
    layout: 'centered', // Center the badge in the Storybook canvas
  },
  argTypes: {
    children: {
      control: 'text', // Allow text input for badge content
      description: 'The content to be rendered inside the badge.',
      defaultValue: 'Label',
    },
    variant: {
      control: 'select', // Use a select dropdown for variant prop
      options: ['default', 'primary', 'secondary', 'tertiary', 'success', 'info', 'warning', 'error'],
      description: 'The visual style of the badge, indicating its semantic meaning.',
      defaultValue: 'default',
    },
  },
  // Decorator to wrap stories with the ThemeProvider
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ padding: theme.spacing.xl, backgroundColor: theme.colors.background.default }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Badge>;

// --- Individual Stories ---

// Default Badge Story
export const Default: Story = {
  args: {
    children: 'Default',
    variant: 'default',
  },
};

// Primary Badge Story
export const Primary: Story = {
  args: {
    children: 'New',
    variant: 'primary',
  },
};

// Secondary Badge Story (often used for success)
export const Secondary: Story = {
  args: {
    children: 'Featured',
    variant: 'secondary',
  },
};

// Tertiary Badge Story (often used for info)
export const Tertiary: Story = {
  args: {
    children: 'Beta',
    variant: 'tertiary',
  },
};

// Success Badge Story
export const Success: Story = {
  args: {
    children: 'Completed',
    variant: 'success',
  },
};

// Info Badge Story
export const Info: Story = {
  args: {
    children: 'Pending',
    variant: 'info',
  },
};

// Warning Badge Story
export const Warning: Story = {
  args: {
    children: 'Review',
    variant: 'warning',
  },
};

// Error Badge Story
export const Error: Story = {
  args: {
    children: 'Failed',
    variant: 'error',
  },
};

// Badge with a number (e.g., for notifications)
export const Count: Story = {
  args: {
    children: '99+',
    variant: 'primary',
  },
};

// Interactive Badge Story
export const Interactive: Story = {
  args: {
    children: 'Status',
    variant: 'default',
  },
};
