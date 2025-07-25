// stories/Input.stories.tsx
// This file defines Storybook stories for the Input component of the AscendUCore UI Kit.
// It showcases various states and configurations of the text input field.

import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

// Import the Input component and the theme
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { theme } from '../../theme';

// Example Icons (replace with actual icon library like Lucide React if available)
const MailIcon = () => <span style={{ fontSize: '18px' }}>✉️</span>;
const LockIcon = () => <span style={{ fontSize: '18px' }}>🔒</span>;
const SearchIcon = () => <span style={{ fontSize: '18px' }}>🔍</span>;
const EuroIcon = () => <span style={{ fontSize: '18px' }}>€</span>;

// Define the metadata for your Input component story
const meta: Meta<typeof Input> = {
  title: 'Components/Input', // Path in the Storybook sidebar
  component: Input,          // The React component to document
  tags: ['autodocs'],         // Enables auto-generated documentation
  parameters: {
    layout: 'padded', // Use padded layout for better visibility
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The label text for the input field. It will float above the input.',
      defaultValue: 'Username',
    },
    placeholder: {
      control: 'text',
      description: 'The placeholder text to display when the input is empty and label is floating.',
      defaultValue: 'Enter your username',
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the input field.',
      defaultValue: 'Must be at least 3 characters long.',
    },
    error: {
      control: 'boolean',
      description: 'If true, the input will display an error state.',
      defaultValue: false,
    },
    errorMessage: {
      control: 'text',
      description: 'The error message to display when `error` is true.',
    },
    leading: {
      control: 'object',
      description: 'Content to be displayed at the leading (left) side of the input.',
    },
    trailing: {
      control: 'object',
      description: 'Content to be displayed at the trailing (right) side of the input.',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the input will be disabled.',
      defaultValue: false,
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'url', 'tel'],
      description: 'The type of the input field.',
      defaultValue: 'text',
    },
    value: {
      control: 'text',
      description: 'The current value of the input (controlled).',
    },
    defaultValue: {
      control: 'text',
      description: 'The initial value of the input (uncontrolled).',
    },
    onChange: {
      action: 'changed', // Log change events
      description: 'Callback function when the input value changes.',
    },
    onFocus: { action: 'focused' },
    onBlur: { action: 'blurred' },
  },
  // Decorator to wrap stories with the ThemeProvider
  decorators: [
    (Story) => (
      <div style={{ padding: theme.spacing.xl, backgroundColor: theme.colors.background.default, display: 'flex', flexDirection: 'column', gap: theme.spacing.xl, justifyContent: 'center', alignItems: 'flex-start', minHeight: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

// --- Individual Stories ---

// Default Input
export const Default: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'your.email@example.com',
    helperText: 'We will never share your email.',
    type: 'email',
  },
};

// Input with a default value (uncontrolled)
export const WithDefaultValue: Story = {
  args: {
    label: 'Full Name',
    defaultValue: 'John Doe',
    helperText: 'Your name as it appears on your ID.',
  },
};

// Input with an error state
export const WithError: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    helperText: 'Password must be at least 8 characters.',
    error: true,
    errorMessage: 'Password is too short. (Min 8 characters)',
    type: 'password',
  },
};

// Disabled Input
export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    placeholder: 'This field is disabled',
    defaultValue: 'Cannot edit',
    disabled: true,
  },
};

// Input without a label or helper text
export const BareInput: Story = {
  args: {
    placeholder: 'Search...',
  },
};

// Input with Leading Icon
export const WithLeadingIcon: Story = {
  args: {
    label: 'Email',
    placeholder: 'your.email@example.com',
    leading: <MailIcon />,
    type: 'email',
  },
};

// Input with Trailing Icon
export const WithTrailingIcon: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    trailing: <LockIcon />,
    type: 'password',
  },
};

// Input with Both Leading and Trailing Content
export const WithAdornments: Story = {
  args: {
    label: 'Search Query',
    placeholder: 'Search courses, topics...',
    leading: <SearchIcon />,
    trailing: <Button variant="ghost" size="sm" style={{ padding: '4px 8px' }}>Clear</Button>, // Example trailing button
  },
};

// Input with Currency Symbol
export const WithCurrency: Story = {
  args: {
    label: 'Price',
    placeholder: '0.00',
    leading: <EuroIcon />,
    trailing: <span style={{ fontSize: theme.typography.bodySmall.fontSize, color: theme.colors.neutral['50'] }}>EUR</span>,
    type: 'number',
  },
};


// Interactive Input (controlled component example with validation)
export const InteractiveValidation: Story = {
  render: (args) => {
    const [inputValue, setInputValue] = useState('');
    const [inputError, setInputError] = useState(false);
    const [inputErrorMessage, setInputErrorMessage] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setInputValue(newValue);

      if (newValue.length > 0 && newValue.length < 5) {
        setInputError(true);
        setInputErrorMessage('Input must be at least 5 characters.');
      } else {
        setInputError(false);
        setInputErrorMessage('');
      }
      args.onChange?.(event); // Log original event
    };

    return (
      <Input
        {...args}
        label="Controlled Input (Min 5 Chars)"
        placeholder="Type something..."
        value={inputValue}
        onChange={handleChange}
        error={inputError}
        errorMessage={inputErrorMessage}
        helperText={inputError ? '' : 'Type to see validation. (Min 5 characters)'}
      />
    );
  },
  args: {
    label: 'Controlled Input',
    placeholder: 'Type here...',
    type: 'text',
  },
};

// Number Input
export const NumberInput: Story = {
  args: {
    label: 'Age',
    placeholder: 'Enter your age',
    type: 'number',
    min: 0,
    max: 120,
    step: 1,
    helperText: 'Enter a number between 0 and 120.',
  },
};
