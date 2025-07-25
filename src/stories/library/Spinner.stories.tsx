// This file defines Storybook stories for the Spinner component of the AscendUCore UI Kit.
// It showcases different sizes and usage contexts for the indeterminate loading indicator.

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

// Import the Spinner and Button components, and the theme
import { Spinner } from '../../components/Spinner';
import { Button } from '../../components/Button';
import { theme } from '../../theme';

// Define the metadata for your Spinner component story
const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner', // Path in the Storybook sidebar
  component: Spinner,          // The React component to document
  tags: ['autodocs'],         // Enables auto-generated documentation
  parameters: {
    layout: 'centered', // Center the component in the Storybook canvas
  },
  argTypes: {
    size: {
      control: 'select', // Use a select dropdown for size prop
      options: ['sm', 'md', 'lg'], // Available options
      description: 'The size of the spinner.',
      defaultValue: 'md',
    },
  },
  // Decorator to wrap stories with the ThemeProvider
  decorators: [
    (Story) => (
      <div style={{ padding: theme.spacing.xl, backgroundColor: theme.colors.background.default, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '150px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

// --- Individual Stories ---

// Default Spinner (medium size)
export const Default: Story = {
  args: {
    size: 'md',
  },
};

// Small Spinner
export const Small: Story = {
  args: {
    size: 'sm',
  },
};

// Large Spinner
export const Large: Story = {
  args: {
    size: 'lg',
  },
};

// Spinner in context with a loading button
export const WithLoadingButton: Story = {
  render: () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
      setIsLoading(true);
      // Simulate an async operation
      setTimeout(() => {
        setIsLoading(false);
        alert('Data loaded!');
      }, 2000);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md, alignItems: 'center' }}>
        <Button onClick={handleClick} disabled={isLoading}>
          {isLoading ? (
            <>
              <Spinner size="sm" style={{ marginRight: theme.spacing.xs }} /> Loading...
            </>
          ) : (
            'Load Data'
          )}
        </Button>
        <p style={{ ...theme.typography.bodySmall, color: theme.colors.neutral['50'] }}>
          Click the button to see the loading spinner.
        </p>
      </div>
    );
  },
  args: {}, // No args needed for render function
  parameters: {
    layout: 'padded', // Ensure enough padding for the button
  },
};

// Multiple Spinners
export const MultipleSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: theme.spacing.lg, alignItems: 'center' }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
  args: {},
};
