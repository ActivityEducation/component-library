// stories/Button.stories.tsx
// This file defines Storybook stories for the Button component of the AscendUCore UI Kit.
// Stories allow for isolated development, testing, and documentation of UI components.

import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';

// Import the Button component, Icon component, and the theme from your UI Kit
import { Button } from '..//components/Button';
import { Icon } from '..//components/Icon';
import { theme } from '..//theme';

// Define the metadata for your Button component story
// This tells Storybook how to categorize and display your component.
const meta: Meta<typeof Button> = {
  title: 'Components/Button', // Path in the Storybook sidebar
  component: Button,          // The React component to document
  tags: ['autodocs'],         // Enables auto-generated documentation for the component
  parameters: {
    // Optional: Add layout parameter to center components in the Storybook canvas
    layout: 'centered',
  },
  // Define argTypes to control how props are displayed and interacted with in Storybook's Controls panel
  argTypes: {
    variant: {
      control: 'select', // Use a select dropdown for variant prop
      options: ['primary', 'secondary', 'tertiary', 'ghost', 'destructive', 'icon'], // Added 'icon'
      description: 'The visual style of the button.',
      defaultValue: 'primary',
    },
    size: {
      control: 'radio', // Use radio buttons for size prop
      options: ['sm', 'md', 'lg'], // Available options
      description: 'The size of the button.',
      defaultValue: 'md',
    },
    children: {
      control: 'text', // Allow text input for button content
      description: 'The content to be rendered inside the button. For "icon" variant, use an icon name string or an Icon component.',
      defaultValue: 'Button',
    },
    onClick: {
      action: 'clicked', // Log click events in Storybook's Actions panel
      description: 'Callback function when the button is clicked.',
    },
    disabled: {
      control: 'boolean', // Toggle for disabled state
      description: 'If true, the button will be disabled.',
      defaultValue: false,
    },
  },
  // Decorators allow wrapping stories with common providers, like our ThemeProvider
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ padding: theme.spacing.xl, backgroundColor: theme.colors.background.default, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '150px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

// --- Individual Stories ---

// Primary Button Story
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

// Secondary Button Story
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

// Tertiary Button Story
export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
  },
};

// Ghost Button Story
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

// Destructive Button Story
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete Item',
  },
};

// Small Button Story
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

// Large Button Story
export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

// Disabled Button Story
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

// Interactive Story with Controls
// This story allows you to play with all props using Storybook's Controls panel.
export const Interactive: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Click Me',
    onClick: () => console.log('Button clicked!'),
    disabled: false,
  },
};

// --- Icon Button Stories (now using variant="icon") ---

// Default Icon Button (medium size, default ghost-like styling)
export const IconButtonDefault: Story = {
  args: {
    variant: 'icon',
    children: 'fa-solid fa-plus', // Font Awesome icon name
    size: 'md',
  },
};

// Primary Icon Button
export const IconButtonPrimary: Story = {
  args: {
    variant: 'icon',
    children: 'fa-solid fa-star',
    size: 'md',
    style: { // Apply background color directly for primary look
      backgroundColor: theme.colors.primary['40'],
      color: theme.colors.text.onPrimary,
    },
  },
};

// Secondary Icon Button
export const IconButtonSecondary: Story = {
  args: {
    variant: 'icon',
    children: 'fa-solid fa-bell',
    size: 'md',
    style: { // Apply background color directly for secondary look
      backgroundColor: theme.colors.secondary['40'],
      color: theme.colors.text.onSecondary,
    },
  },
};

// Small Icon Button
export const IconButtonSmall: Story = {
  args: {
    variant: 'icon',
    children: 'fa-solid fa-bell',
    size: 'sm',
  },
};

// Large Icon Button
export const IconButtonLarge: Story = {
  args: {
    variant: 'icon',
    children: 'fa-solid fa-cog',
    size: 'lg',
  },
};

// Icon Button with Custom Icon Component (color passed to Icon directly)
export const IconButtonWithCustomIcon: Story = {
  args: {
    variant: 'icon',
    children: <Icon name="fa-solid fa-heart" color="red" size="lg" />, // Directly pass Icon component
    size: 'lg', // Size prop on button ensures container size, icon's size prop can override visual icon size
  },
};

// Disabled Icon Button
export const IconButtonDisabled: Story = {
  args: {
    variant: 'icon',
    children: 'fa-solid fa-times',
    disabled: true,
  },
};
