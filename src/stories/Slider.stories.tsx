// This file defines Storybook stories for the Slider component of the AscendUCore UI Kit.
// It showcases various configurations and interactive examples for range selection.

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';

// Import the Slider component and the theme
import { Slider } from '..//components/Slider';
import { Button } from '..//components/Button'; // For interactive controls
import { theme } from '..//theme';

// Define the metadata for your Slider component story
const meta: Meta<typeof Slider> = {
  title: 'Components/Slider', // Path in the Storybook sidebar
  component: Slider,          // The React component to document
  tags: ['autodocs'],         // Enables auto-generated documentation
  parameters: {
    layout: 'padded', // Use padded layout for better visibility
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 }, // Slider for value
      description: 'The current value of the slider (controlled).',
    },
    defaultValue: {
      control: { type: 'range', min: 0, max: 100, step: 1 }, // Slider for default value
      description: 'The initial value of the slider (uncontrolled).',
      defaultValue: 50,
    },
    min: {
      control: { type: 'number', min: 0, step: 1 },
      description: 'The minimum value of the slider.',
      defaultValue: 0,
    },
    max: {
      control: { type: 'number', min: 1, step: 1 },
      description: 'The maximum value of the slider.',
      defaultValue: 100,
    },
    step: {
      control: { type: 'number', min: 1, step: 1 },
      description: 'The step increment for the slider.',
      defaultValue: 1,
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the slider will be disabled.',
      defaultValue: false,
    },
    onValueChange: {
      action: 'valueChange', // Log value change events
      description: 'Callback function when the slider value changes.',
    },
  },
  // Decorator to wrap stories with the ThemeProvider
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ padding: theme.spacing.xl, backgroundColor: theme.colors.background.default, width: '100%', maxWidth: '600px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Slider>;

// --- Individual Stories ---

// Default Slider
export const Default: Story = {
  args: {
    defaultValue: 50,
  },
};

// Slider with custom min/max
export const CustomRange: Story = {
  args: {
    defaultValue: 500,
    min: 100,
    max: 1000,
  },
};

// Slider with custom step
export const CustomStep: Story = {
  args: {
    defaultValue: 20,
    step: 5,
    max: 50,
  },
};

// Disabled Slider
export const Disabled: Story = {
  args: {
    defaultValue: 70,
    disabled: true,
  },
};

// Interactive Slider (controlled example)
export const Interactive: Story = {
  render: (args) => {
    const [sliderValue, setSliderValue] = useState(args.value || args.defaultValue || 0);

    const handleValueChange = (value: number) => {
      setSliderValue(value);
      args.onValueChange?.(value); // Log to Storybook actions
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md, width: '100%' }}>
        <Slider
          {...args}
          value={sliderValue}
          onValueChange={handleValueChange}
        />
        <p style={{ ...theme.typography.bodySmall, textAlign: 'center', color: theme.colors.neutral['50'] }}>
          Current Value: {sliderValue}
        </p>
        <div style={{ display: 'flex', gap: theme.spacing.sm, justifyContent: 'center' }}>
          <Button size="sm" onClick={() => setSliderValue(Math.max(args.min || 0, sliderValue - (args.step || 1)))} disabled={sliderValue === (args.min || 0)}>
            -
          </Button>
          <Button size="sm" onClick={() => setSliderValue(Math.min(args.max || 100, sliderValue + (args.step || 1)))} disabled={sliderValue === (args.max || 100)}>
            +
          </Button>
          <Button size="sm" variant="ghost" onClick={() => setSliderValue(args.min || 0)}>
            Reset
          </Button>
        </div>
      </div>
    );
  },
  args: {
    defaultValue: 25,
    min: 0,
    max: 100,
    step: 1,
  },
};
