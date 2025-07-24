// stories/TabGroup.stories.tsx
// This file defines Storybook stories for the TabGroup and Tab components of the AscendUCore UI Kit.
// It demonstrates how to use tab navigation to switch between different content views.

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';

// Import the TabGroup, Tab components and the theme from your UI Kit
import { TabGroup } from '../system/components/Tab';
import { Tab } from '../system/components/Tab';
import { Card } from '../system/components/Card'; // Use Card to simulate tab content
import { theme } from '../system/theme';

// Define the metadata for your TabGroup component story
const meta: Meta<typeof TabGroup> = {
  title: 'Components/TabGroup', // Path in the Storybook sidebar
  component: TabGroup,          // The main component to document
  tags: ['autodocs'],         // Enables auto-generated documentation
  parameters: {
    layout: 'padded', // Use padded layout for better visibility of tab content
  },
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The value of the tab that should be active by default (uncontrolled).',
    },
    value: {
      control: 'text',
      description: 'The value of the currently active tab (controlled).',
    },
    onValueChange: {
      action: 'tabChanged', // Log tab change events
      description: 'Callback function when the active tab changes.',
    },
    children: {
      control: false, // Children are defined directly in stories
    },
  },
  // Decorator to wrap stories with the ThemeProvider
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ padding: theme.spacing.xl, backgroundColor: theme.colors.neutral['95'], width: '100%' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TabGroup>;

// --- Individual Stories ---

// Basic Tab Group with default active tab
export const Default: Story = {
  args: {
    defaultValue: 'overview',
    children: (
      <>
        <Tab value="overview">Overview</Tab>
        <Tab value="modules">Modules</Tab>
        <Tab value="assignments">Assignments</Tab>
        <Tab value="discussions">Discussions</Tab>
      </>
    ),
  },
};

// Tab Group with a different initial active tab
export const InitialActiveTab: Story = {
  args: {
    defaultValue: 'assignments',
    children: (
      <>
        <Tab value="overview">Overview</Tab>
        <Tab value="modules">Modules</Tab>
        <Tab value="assignments">Assignments</Tab>
        <Tab value="discussions">Discussions</Tab>
      </>
    ),
  },
};

// Tab Group with disabled tabs
export const WithDisabledTabs: Story = {
  args: {
    defaultValue: 'overview',
    children: (
      <>
        <Tab value="overview">Overview</Tab>
        <Tab value="modules">Modules</Tab>
        <Tab value="assignments" disabled>Assignments</Tab> {/* Disabled tab */}
        <Tab value="discussions">Discussions</Tab>
      </>
    ),
  },
};

// Interactive Tab Group with content changing based on active tab
export const InteractiveTabsWithContent: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState(args.defaultValue || 'overview');

    const handleTabChange = (value: string) => {
      setActiveTab(value);
      args.onValueChange?.(value); // Call the Storybook action logger
    };

    const renderContent = () => {
      switch (activeTab) {
        case 'overview':
          return (
            <Card style={{ marginTop: theme.spacing.lg }}>
              <h3 style={{ ...theme.typography.h4, margin: 0, color: theme.colors.text.default }}>Course Overview</h3>
              <p style={{ ...theme.typography.body, margin: 0, color: theme.colors.text.default }}>
                This section provides a general introduction to the course, learning objectives, and prerequisites.
              </p>
            </Card>
          );
        case 'modules':
          return (
            <Card style={{ marginTop: theme.spacing.lg }}>
              <h3 style={{ ...theme.typography.h4, margin: 0, color: theme.colors.text.default }}>Course Modules</h3>
              <p style={{ ...theme.typography.body, margin: 0, color: theme.colors.text.default }}>
                Explore the structured modules, each containing lessons and quizzes.
              </p>
              <ul style={{ margin: 0, paddingLeft: theme.spacing.lg, ...theme.typography.bodySmall }}>
                <li>Module 1: Foundations</li>
                <li>Module 2: Advanced Topics</li>
                <li>Module 3: Project Work</li>
              </ul>
            </Card>
          );
        case 'assignments':
          return (
            <Card style={{ marginTop: theme.spacing.lg }}>
              <h3 style={{ ...theme.typography.h4, margin: 0, color: theme.colors.text.default }}>Assignments</h3>
              <p style={{ ...theme.typography.body, margin: 0, color: theme.colors.text.default }}>
                View and submit your assignments here. Keep track of deadlines.
              </p>
            </Card>
          );
        case 'discussions':
          return (
            <Card style={{ marginTop: theme.spacing.lg }}>
              <h3 style={{ ...theme.typography.h4, margin: 0, color: theme.colors.text.default }}>Discussions</h3>
              <p style={{ ...theme.typography.body, margin: 0, color: theme.colors.text.default }}>
                Engage with peers and instructors in course-related discussions.
              </p>
            </Card>
          );
        default:
          return null;
      }
    };

    return (
      <div style={{ width: '100%', maxWidth: '700px' }}>
        <TabGroup value={activeTab} onValueChange={handleTabChange}>
          <Tab value="overview">Overview</Tab>
          <Tab value="modules">Modules</Tab>
          <Tab value="assignments">Assignments</Tab>
          <Tab value="discussions">Discussions</Tab>
        </TabGroup>
        {renderContent()}
      </div>
    );
  },
  args: {
    defaultValue: 'overview',
  },
};
