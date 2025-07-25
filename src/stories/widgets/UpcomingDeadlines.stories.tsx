// src/stories/widgets/UpcomingDeadlinesCard.stories.tsx
// This file defines Storybook stories for the UpcomingDeadlinesCard widget.
// It showcases different scenarios for displaying upcoming deadlines.

import type { Meta, StoryObj } from '@storybook/react';

// Import the UpcomingDeadlinesCard component and necessary types
import { UpcomingDeadlinesCard, DeadlineItem } from '../../widgets/UpcomingDeadlines';
import { theme } from '../../theme';

// Sample deadline data
const sampleDeadlines: DeadlineItem[] = [
  { id: 'd1', title: 'Module 4 Quiz', dueDate: 'Today', type: 'quiz', isUrgent: true },
  { id: 'd2', title: 'Assignment 2: Federated Identity', dueDate: 'Tomorrow', type: 'assignment' },
  { id: 'd3', title: 'Live Q&A with Instructor', dueDate: 'Aug 10', type: 'event' },
  { id: 'd4', title: 'Optional Reading: ActivityPub Spec', dueDate: 'Aug 15', type: 'assignment' },
  { id: 'd5', title: 'Final Project Submission', dueDate: 'Sep 1', type: 'assignment' },
];

// Define the metadata for your UpcomingDeadlinesCard story
const meta: Meta<typeof UpcomingDeadlinesCard> = {
  title: 'Widgets/Upcoming Deadlines Card', // Path in the Storybook sidebar
  component: UpcomingDeadlinesCard,          // The React component to document
  tags: ['autodocs'],                          // Enables auto-generated documentation
  parameters: {
    layout: 'padded', // Use padded layout for better visibility
  },
  argTypes: {
    deadlines: {
      control: 'object',
      description: 'An array of upcoming deadline items to display.',
    },
    onViewAll: {
      action: 'viewAllDeadlinesClicked', // Log when the button is clicked
      description: 'Callback for viewing all deadlines.',
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
type Story = StoryObj<typeof UpcomingDeadlinesCard>;

// --- Individual Stories ---

export const DefaultDeadlines: Story = {
  args: {
    deadlines: sampleDeadlines,
  },
};

export const NoDeadlines: Story = {
  args: {
    deadlines: [],
  },
};

export const OnlyUrgentDeadlines: Story = {
  args: {
    deadlines: [
      { id: 'u1', title: 'Short Quiz: Basic Terminology', dueDate: 'Today', type: 'quiz', isUrgent: true },
      { id: 'u2', title: 'Review Session RSVP', dueDate: 'Tomorrow', type: 'event', isUrgent: true },
    ],
  },
};

export const WithViewAllButton: Story = {
  args: {
    deadlines: sampleDeadlines,
    onViewAll: () => alert('Navigating to full deadlines page!'),
  },
};

export const MultipleTypes: Story = {
  args: {
    deadlines: [
      { id: 'm1', title: 'Assignment 1', dueDate: 'Today', type: 'assignment', isUrgent: true },
      { id: 'm2', title: 'Midterm Exam', dueDate: 'Next Week', type: 'quiz' },
      { id: 'm3', title: 'Guest Lecture', dueDate: 'Sep 5', type: 'event' },
    ],
  },
};
