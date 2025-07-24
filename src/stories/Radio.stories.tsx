// stories/Radio.stories.tsx
// This file defines Storybook stories for the Radio component of the AscendUCore UI Kit.
// It showcases various states and configurations of the radio button, including group behavior.

import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';

// Import the Radio component and the theme
import { Radio } from '..//components/Radio';
import { theme } from '..//theme';

// Define the metadata for your Radio component story
const meta: Meta<typeof Radio> = {
  title: 'Components/Radio', // Path in the Storybook sidebar
  component: Radio,          // The React component to document
  tags: ['autodocs'],         // Enables auto-generated documentation
  parameters: {
    layout: 'centered', // Center the component in the Storybook canvas
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The label associated with the radio button.',
      defaultValue: 'Option',
    },
    checked: {
      control: 'boolean',
      description: 'If true, the radio button is checked (controlled).',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'If true, the radio button is checked by default (uncontrolled).',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the radio button will be disabled.',
      defaultValue: false,
    },
    onChange: {
      action: 'changed', // Log change events
      description: 'Callback function when the radio button state changes.',
    },
    id: {
      control: 'text',
      description: 'A unique ID for the radio input (auto-generated if not provided).',
    },
    name: {
      control: 'text',
      description: 'The name attribute for the radio input, crucial for grouping.',
      defaultValue: 'radioGroup',
    },
    value: {
      control: 'text',
      description: 'The value associated with this specific radio option.',
      defaultValue: 'option1',
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
type Story = StoryObj<typeof Radio>;

// --- Individual Stories ---

// Unchecked Radio
export const Unchecked: Story = {
  args: {
    label: 'Unchecked Option',
    checked: false,
    name: 'singleRadio', // Use a unique name for single radios
    value: 'single',
  },
};

// Checked Radio
export const Checked: Story = {
  args: {
    label: 'Checked Option',
    checked: true,
    name: 'singleRadio',
    value: 'single',
  },
};

// Disabled Unchecked Radio
export const DisabledUnchecked: Story = {
  args: {
    label: 'Disabled Unchecked',
    disabled: true,
    checked: false,
    name: 'disabledRadio',
    value: 'disabled',
  },
};

// Disabled Checked Radio
export const DisabledChecked: Story = {
  args: {
    label: 'Disabled Checked',
    disabled: true,
    checked: true,
    name: 'disabledRadio',
    value: 'disabled',
  },
};

// Interactive Radio (controlled component example)
export const Interactive: Story = {
  render: (args) => {
    const [isChecked, setIsChecked] = useState(args.checked || false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
      args.onChange?.(event); // Log the event in Storybook actions
    };

    return (
      <Radio
        {...args}
        checked={isChecked}
        onChange={handleChange}
        label={args.label || 'Interactive Radio'}
        name="interactiveRadio"
        value="interactive"
      />
    );
  },
  args: {
    label: 'Interactive Radio',
    checked: false,
    disabled: false,
  },
};

// Radio Group Example (most common usage)
export const RadioGroupExample: Story = {
  render: () => {
    const [selectedOption, setSelectedOption] = useState('optionA');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedOption(event.target.value);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.sm, padding: theme.spacing.lg, border: `1px solid ${theme.colors.border.default}`, borderRadius: theme.borderRadius.md, backgroundColor: theme.colors.background.surface }}>
        <h3 style={{ ...theme.typography.h4, margin: 0, color: theme.colors.text.default }}>Select Course Difficulty:</h3>
        <Radio
          label="Beginner"
          name="difficulty"
          value="beginner"
          checked={selectedOption === 'beginner'}
          onChange={handleChange}
        />
        <Radio
          label="Intermediate"
          name="difficulty"
          value="intermediate"
          checked={selectedOption === 'intermediate'}
          onChange={handleChange}
        />
        <Radio
          label="Advanced"
          name="difficulty"
          value="advanced"
          checked={selectedOption === 'advanced'}
          onChange={handleChange}
        />
        <Radio
          label="Expert (Coming Soon)"
          name="difficulty"
          value="expert"
          checked={selectedOption === 'expert'}
          onChange={handleChange}
          disabled
        />
        <p style={{ ...theme.typography.bodySmall, color: theme.colors.neutral['50'], marginTop: theme.spacing.md }}>
          Selected Difficulty: {selectedOption}
        </p>
      </div>
    );
  },
  args: {}, // No args needed for render function
  parameters: {
    layout: 'padded',
  },
};
