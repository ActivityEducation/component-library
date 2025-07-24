// This file defines Storybook stories for the Checkbox component of the AscendUCore UI Kit.
// It showcases various states and configurations of the checkbox.

import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';

// Import the Checkbox component and the theme
import { Checkbox } from '..//components/Checkbox';
import { theme } from '..//theme';

// Define the metadata for your Checkbox component story
const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox', // Path in the Storybook sidebar
  component: Checkbox,          // The React component to document
  tags: ['autodocs'],         // Enables auto-generated documentation
  parameters: {
    layout: 'centered', // Center the component in the Storybook canvas
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The label associated with the checkbox.',
      defaultValue: 'Option',
    },
    checked: {
      control: 'boolean',
      description: 'If true, the checkbox is checked (controlled).',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'If true, the checkbox is checked by default (uncontrolled).',
    },
    indeterminate: {
      control: 'boolean',
      description: 'If true, the checkbox will be in an indeterminate state.',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the checkbox will be disabled.',
      defaultValue: false,
    },
    onChange: {
      action: 'changed', // Log change events
      description: 'Callback function when the checkbox state changes.',
    },
    id: {
      control: 'text',
      description: 'A unique ID for the checkbox input (auto-generated if not provided).',
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
type Story = StoryObj<typeof Checkbox>;

// --- Individual Stories ---

// Unchecked Checkbox
export const Unchecked: Story = {
  args: {
    label: 'Unchecked Option',
    checked: false,
  },
};

// Checked Checkbox
export const Checked: Story = {
  args: {
    label: 'Checked Option',
    checked: true,
  },
};

// Indeterminate Checkbox
export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate Option',
    indeterminate: true,
    checked: false, // Indeterminate visually, but underlying value can be false or true
  },
};

// Disabled Unchecked Checkbox
export const DisabledUnchecked: Story = {
  args: {
    label: 'Disabled Unchecked',
    disabled: true,
    checked: false,
  },
};

// Disabled Checked Checkbox
export const DisabledChecked: Story = {
  args: {
    label: 'Disabled Checked',
    disabled: true,
    checked: true,
  },
};

// Disabled Indeterminate Checkbox
export const DisabledIndeterminate: Story = {
  args: {
    label: 'Disabled Indeterminate',
    disabled: true,
    indeterminate: true,
    checked: false,
  },
};

// Checkbox without a visible label (still accessible via `aria-label` or `title` if needed)
export const NoLabel: Story = {
  args: {
    'aria-label': 'Accept terms', // Example for accessibility without visible label
    checked: false,
  },
};

// Interactive Checkbox (controlled component example)
export const Interactive: Story = {
  render: (args) => {
    const [isChecked, setIsChecked] = useState(args.checked || false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
      args.onChange?.(event); // Log the event in Storybook actions
    };

    return (
      <Checkbox
        {...args}
        checked={isChecked}
        onChange={handleChange}
        label={args.label || 'Interactive Checkbox'}
      />
    );
  },
  args: {
    label: 'Interactive Checkbox',
    checked: false,
    indeterminate: false,
    disabled: false,
  },
};

// Group of Checkboxes
export const CheckboxGroup: Story = {
  render: () => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = event.target;
      setSelectedOptions((prev) =>
        checked ? [...prev, value] : prev.filter((option) => option !== value)
      );
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.sm }}>
        <h3 style={{ ...theme.typography.h4, margin: 0, color: theme.colors.text.default }}>Select Learning Paths:</h3>
        <Checkbox
          label="Foundational Concepts"
          value="foundational"
          checked={selectedOptions.includes('foundational')}
          onChange={handleChange}
        />
        <Checkbox
          label="Advanced Topics"
          value="advanced"
          checked={selectedOptions.includes('advanced')}
          onChange={handleChange}
        />
        <Checkbox
          label="Project-Based Learning"
          value="project"
          checked={selectedOptions.includes('project')}
          onChange={handleChange}
        />
        <Checkbox
          label="Certification Prep"
          value="certification"
          checked={selectedOptions.includes('certification')}
          onChange={handleChange}
          disabled // Example of a disabled option in a group
        />
        <p style={{ ...theme.typography.bodySmall, color: theme.colors.neutral['50'], marginTop: theme.spacing.md }}>
          Selected: {selectedOptions.join(', ') || 'None'}
        </p>
      </div>
    );
  },
  args: {}, // No args needed for render function
  parameters: {
    // Override layout for this specific story if needed
    layout: 'padded',
  },
};
