// src/stories/widgets/ObjectiveProgressCard.stories.tsx
// This file defines Storybook stories for the ObjectiveProgressCard widget.
// It showcases different states and data for an objective's progress.

import type { Meta, StoryObj } from '@storybook/react';

// Import the ObjectiveProgressCard component
import { ObjectiveProgressCard } from '../../widgets/ObjectiveProgress';
import { theme } from '../../theme';

// Define the metadata for your ObjectiveProgressCard story
const meta: Meta<typeof ObjectiveProgressCard> = {
  title: 'Widgets/Objective Progress Card', // Path in the Storybook sidebar
  component: ObjectiveProgressCard,          // The React component to document
  tags: ['autodocs'],                         // Enables auto-generated documentation
  parameters: {
    layout: 'padded', // Use padded layout for better visibility
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the objective.',
      defaultValue: 'Master Advanced Vocabulary',
    },
    description: {
      control: 'text',
      description: 'A brief description or key result statement.',
      defaultValue: 'Learn 500 new French vocabulary words with 80% retention.',
    },
    currentValue: {
      control: { type: 'range', min: 0, max: 500, step: 1 },
      description: 'The current value of the objective\'s progress.',
      defaultValue: 250,
    },
    targetValue: {
      control: { type: 'number', min: 1, step: 1 },
      description: 'The target value for the objective.',
      defaultValue: 500,
    },
    unit: {
      control: 'text',
      description: 'The unit of measurement for the progress (e.g., \'words\', \'items\').',
      defaultValue: 'words',
    },
    status: {
      control: 'select',
      options: ['on-track', 'at-risk', 'achieved'],
      description: 'The status of the objective.',
      defaultValue: 'on-track',
    },
    onViewDetails: {
      action: 'viewDetailsClicked', // Log when the button is clicked
      description: 'Callback for viewing objective details.',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: theme.spacing.xl, backgroundColor: theme.colors.neutral['95'], width: '100%', maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ObjectiveProgressCard>;

// --- Individual Stories ---

export const OnTrack: Story = {
  args: {
    title: 'Complete "ActivityPub Deep Dive"',
    description: 'Finish all 10 modules of the ActivityPub course.',
    currentValue: 7,
    targetValue: 10,
    unit: 'modules',
    status: 'on-track',
  },
};

export const Achieved: Story = {
  args: {
    title: 'Pass B2 French Exam',
    description: 'Achieve a score of 80% or higher on the practice B2 exam.',
    currentValue: 85,
    targetValue: 100,
    unit: '%',
    status: 'achieved',
  },
};

export const AtRisk: Story = {
  args: {
    title: 'Daily Speaking Practice',
    description: 'Complete 30 minutes of speaking practice daily for 7 days.',
    currentValue: 3,
    targetValue: 7,
    unit: 'days',
    status: 'at-risk',
  },
};

export const CustomObjective: Story = {
  args: {
    title: 'Read "Federated Systems" Book',
    description: 'Read 200 pages of the assigned book.',
    currentValue: 120,
    targetValue: 200,
    unit: 'pages',
    status: 'on-track',
  },
};

export const ZeroProgress: Story = {
  args: {
    title: 'Start New Project',
    description: 'Begin building a decentralized chat application.',
    currentValue: 0,
    targetValue: 10,
    unit: 'stages',
    status: 'on-track', // Status can still be 'on-track' if not past due
  },
};

export const NoDetailsButton: Story = {
  args: {
    title: 'Review Grammar Rules',
    description: 'Review all grammar rules for Unit 3.',
    currentValue: 100,
    targetValue: 100,
    unit: '%',
    status: 'achieved',
    onViewDetails: undefined, // Explicitly remove the button
  },
};
