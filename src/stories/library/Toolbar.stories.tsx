// stories/Toolbar.stories.tsx
// This file defines Storybook stories for the Toolbar component of the AscendUCore UI Kit.
// It showcases various configurations and content arrangements within the Toolbar.

import type { Meta, StoryObj } from '@storybook/react';

// Import the Toolbar, Button components and the theme from your UI Kit
import { Toolbar } from '../../components/Toolbar';
import { Button } from '../../components/Button';
import { theme } from '../../theme';

// Define the metadata for your Toolbar component story
const meta: Meta<typeof Toolbar> = {
  title: 'Components/Toolbar', // Path in the Storybook sidebar
  component: Toolbar,          // The React component to document
  tags: ['autodocs'],         // Enables auto-generated documentation
  parameters: {
    layout: 'centered', // Center the toolbar in the Storybook canvas
  },
  argTypes: {
    children: {
      control: 'text', // Allow text input for children, though typically complex JSX
      description: 'The content to be rendered inside the toolbar.',
    },
    justifyContent: {
      control: 'select', // Use a select dropdown for justifyContent prop
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
      description: 'Defines the horizontal alignment of items within the toolbar.',
      defaultValue: 'flex-start',
    },
  },
  // Decorator to wrap stories with the ThemeProvider
  decorators: [
    (Story) => (
      <div style={{ padding: theme.spacing.xl, backgroundColor: theme.colors.neutral['95'], width: '100%' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Toolbar>;

// --- Individual Stories ---

// Default Toolbar Story with a few primary buttons
export const Default: Story = {
  args: {
    children: (
      <>
        <Button variant="primary" size="sm">Action 1</Button>
        <Button variant="secondary" size="sm">Action 2</Button>
        <Button variant="ghost" size="sm">Action 3</Button>
      </>
    ),
  },
};

// Toolbar with items aligned to the end
export const AlignEnd: Story = {
  args: {
    justifyContent: 'flex-end',
    children: (
      <>
        <Button variant="ghost" size="sm">Cancel</Button>
        <Button variant="primary" size="sm">Save</Button>
      </>
    ),
  },
};

// Toolbar with items centered
export const CenterAligned: Story = {
  args: {
    justifyContent: 'center',
    children: (
      <>
        <Button variant="secondary" size="sm">Previous</Button>
        <Button variant="primary" size="sm">Next</Button>
      </>
    ),
  },
};

// Toolbar with space between items (e.g., for header navigation)
export const SpaceBetween: Story = {
  args: {
    justifyContent: 'space-between',
    children: (
      <>
        <h3 style={{ ...theme.typography.h4, margin: 0, color: theme.colors.text.default }}>AscendUCore</h3>
        <div style={{ display: 'flex', gap: theme.spacing.sm }}>
          <Button variant="ghost" size="sm">Courses</Button>
          <Button variant="ghost" size="sm">Profile</Button>
          <Button variant="primary" size="sm">Logout</Button>
        </div>
      </>
    ),
  },
};

// Toolbar with mixed content (text and buttons)
export const MixedContent: Story = {
  args: {
    justifyContent: 'space-between',
    children: (
      <>
        <span style={{ ...theme.typography.bodySmall, color: theme.colors.text.default }}>
          Showing 1-10 of 100 results
        </span>
        <div style={{ display: 'flex', gap: theme.spacing.sm }}>
          <Button variant="ghost" size="sm">{'<'}</Button>
          <Button variant="ghost" size="sm">{'>'}</Button>
        </div>
      </>
    ),
  },
};
