// This file defines Storybook stories for the Icon component of the AscendUCore UI Kit.
// It showcases various icons, sizes, and colors.
// IMPORTANT: For Font Awesome icons to render, Font Awesome CSS must be loaded in your Storybook preview-head.html
// Example: <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />

import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';

// Import the Icon component and the theme
import { Icon } from '../system/components/Icon';
import { theme } from '../system/theme';

// Define the metadata for your Icon component story
const meta: Meta<typeof Icon> = {
  title: 'Components/Icon', // Path in the Storybook sidebar
  component: Icon,          // The React component to document
  tags: ['autodocs'],         // Enables auto-generated documentation
  parameters: {
    layout: 'padded', // Use padded layout for better visibility
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'The Font Awesome icon class name (e.g., "fa-solid fa-star"). Used when `src` or `children` are not provided.',
      defaultValue: 'fa-solid fa-star',
    },
    src: {
      control: 'text',
      description: 'The URL of an SVG icon. Takes precedence over `name` and `children`.',
    },
    children: {
      control: 'object',
      description: 'Inline SVG content or other React nodes to render as the icon. Takes precedence over `name` if `src` is not provided.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'The size of the icon.',
      defaultValue: 'md',
    },
    color: {
      control: 'color', // Color picker for custom colors
      description: 'The color of the icon. Applies to Font Awesome icons and inline SVG children via `currentColor`.',
    },
  },
  // Decorator to wrap stories with the ThemeProvider
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
type Story = StoryObj<typeof Icon>;

// --- Individual Stories ---

// Default Star Icon (Font Awesome)
export const DefaultFontAwesome: Story = {
  args: {
    name: 'fa-solid fa-star',
  },
};

// Different Sizes (Font Awesome)
export const FontAwesomeSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: theme.spacing.lg, alignItems: 'center' }}>
      <Icon name="fa-solid fa-house" size="sm" title="Small House Icon" />
      <Icon name="fa-solid fa-house" size="md" title="Medium House Icon" />
      <Icon name="fa-solid fa-house" size="lg" title="Large House Icon" />
      <Icon name="fa-solid fa-house" size="xl" title="Extra Large House Icon" />
    </div>
  ),
  args: {},
};

// Different Colors (Font Awesome)
export const FontAwesomeColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: theme.spacing.lg, alignItems: 'center' }}>
      <Icon name="fa-solid fa-check-circle" color={theme.colors.secondary['60']} title="Success Icon" />
      <Icon name="fa-solid fa-info-circle" color={theme.colors.tertiary['60']} title="Info Icon" />
      <Icon name="fa-solid fa-exclamation-triangle" color={theme.colors.error['40']} title="Warning Icon" />
      <Icon name="fa-solid fa-user" color={theme.colors.primary['40']} title="Primary User Icon" />
    </div>
  ),
  args: {},
};

// Common Icons for an Educational Platform (Font Awesome)
export const EducationalFontAwesomeIcons: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: theme.spacing.lg, alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Icon name="fa-solid fa-book" size="lg" color={theme.colors.primary['40']} />
        <p style={{ ...theme.typography.caption, margin: 0 }}>Book</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="fa-solid fa-graduation-cap" size="lg" color={theme.colors.secondary['40']} />
        <p style={{ ...theme.typography.caption, margin: 0 }}>Graduation</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="fa-solid fa-chalkboard-teacher" size="lg" color={theme.colors.tertiary['40']} />
        <p style={{ ...theme.typography.caption, margin: 0 }}>Teacher</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="fa-solid fa-laptop-code" size="lg" />
        <p style={{ ...theme.typography.caption, margin: 0 }}>Coding</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="fa-solid fa-chart-line" size="lg" />
        <p style={{ ...theme.typography.caption, margin: 0 }}>Progress</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="fa-solid fa-comments" size="lg" />
        <p style={{ ...theme.typography.caption, margin: 0 }}>Discussions</p>
      </div>
    </div>
  ),
  args: {},
  parameters: {
    layout: 'padded',
  },
};

// Interactive Icon (Font Awesome)
export const InteractiveFontAwesome: Story = {
  args: {
    name: 'fa-solid fa-heart',
    size: 'lg',
    color: theme.colors.neutral['50'],
    onClick: () => alert('Heart clicked!'),
    style: { cursor: 'pointer' },
  },
};

// New Story: SVG from URL
export const SvgFromUrl: Story = {
  args: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Adobelogo.svg', // Example SVG URL
    size: 'xl',
    title: 'Adobe Logo',
    // Note: 'color' prop typically won't work on SVG URLs directly unless the SVG itself uses currentColor
  },
};

// New Story: Inline SVG
export const InlineSvg: Story = {
  args: {
    children: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
      </svg>
    ),
    size: 'lg',
    color: theme.colors.primary['40'], // This color will apply to the SVG via fill="currentColor"
    title: 'Checkmark Circle',
  },
};

// New Story: Inline SVG with custom color
export const InlineSvgCustomColor: Story = {
  args: {
    children: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
      </svg>
    ),
    size: 'xl',
    color: 'orange', // Custom color string
    title: 'Orange Checkmark Circle',
  },
};
