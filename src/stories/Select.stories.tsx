// This file defines Storybook stories for the Select and Option components of the AscendUCore UI Kit.
// It showcases various configurations and interactive examples for dropdown selection.

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';

// Import the Select and Option components, and the theme
import { Select, Option } from '..//components/Select';
import { theme } from '..//theme';

// Define the metadata for your Select component story
const meta: Meta<typeof Select> = {
  title: 'Components/Select', // Path in the Storybook sidebar
  component: Select,          // The main component to document
  tags: ['autodocs'],         // Enables auto-generated documentation
  parameters: {
    layout: 'padded', // Use padded layout for better visibility
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'The placeholder text to display when no option is selected.',
      defaultValue: 'Select an option',
    },
    value: {
      control: 'text',
      description: 'The currently selected value (controlled component).',
    },
    defaultValue: {
      control: 'text',
      description: 'The initial selected value (uncontrolled component).',
    },
    onValueChange: {
      action: 'valueChange', // Log value change events
      description: 'Callback function when the selected value changes.',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the select input will be disabled.',
      defaultValue: false,
    },
    children: {
      control: false, // Children are defined directly in stories
    },
  },
  // Decorator to wrap stories with the ThemeProvider
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ padding: theme.spacing.xl, backgroundColor: theme.colors.background.default, minHeight: '300px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Select>;

// --- Individual Stories ---

// Default Select with a placeholder
export const Default: Story = {
  args: {
    placeholder: 'Choose a course',
    children: (
      <>
        <Option value="activitypub-basics">ActivityPub Basics</Option>
        <Option value="decentralized-identity">Decentralized Identity</Option>
        <Option value="federated-learning">Federated Learning</Option>
      </>
    ),
  },
};

// Select with a default selected value (uncontrolled)
export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'decentralized-identity',
    placeholder: 'Choose a course',
    children: (
      <>
        <Option value="activitypub-basics">ActivityPub Basics</Option>
        <Option value="decentralized-identity">Decentralized Identity</Option>
        <Option value="federated-learning">Federated Learning</Option>
      </>
    ),
  },
};

// Disabled Select
export const Disabled: Story = {
  args: {
    placeholder: 'This select is disabled',
    disabled: true,
    children: (
      <>
        <Option value="activitypub-basics">ActivityPub Basics</Option>
        <Option value="decentralized-identity">Decentralized Identity</Option>
      </>
    ),
  },
};

// Select with many options (to demonstrate scrolling)
export const ManyOptions: Story = {
  args: {
    placeholder: 'Select a topic',
    children: (
      <>
        <Option value="ai">Artificial Intelligence</Option>
        <Option value="blockchain">Blockchain Technologies</Option>
        <Option value="cloud">Cloud Computing</Option>
        <Option value="cybersecurity">Cybersecurity</Option>
        <Option value="data-science">Data Science</Option>
        <Option value="devops">DevOps & SRE</Option>
        <Option value="frontend">Frontend Development</Option>
        <Option value="backend">Backend Development</Option>
        <Option value="mobile">Mobile Development</Option>
        <Option value="networking">Networking Basics</Option>
        <Option value="os">Operating Systems</Option>
        <Option value="quantum">Quantum Computing</Option>
        <Option value="robotics">Robotics</Option>
        <Option value="ux-ui">UX/UI Design</Option>
      </>
    ),
  },
};

// Controlled Select Example
export const Controlled: Story = {
  render: (args) => {
    const [selectedCourse, setSelectedCourse] = useState<string | undefined>(args.value || args.defaultValue);

    const handleValueChange = (value: string) => {
      setSelectedCourse(value);
      args.onValueChange?.(value); // Log to Storybook actions
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md }}>
        <Select
          {...args}
          value={selectedCourse}
          onValueChange={handleValueChange}
          placeholder="Select your major course"
        >
          <Option value="math">Mathematics</Option>
          <Option value="cs">Computer Science</Option>
          <Option value="physics">Physics</Option>
          <Option value="chemistry">Chemistry</Option>
        </Select>
        <p style={{ ...theme.typography.bodySmall, color: theme.colors.neutral['50'] }}>
          Selected: {selectedCourse || 'None'}
        </p>
      </div>
    );
  },
  args: {
    value: 'cs',
  },
};
