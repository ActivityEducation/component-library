// stories/Card.stories.tsx
// This file defines Storybook stories for the Card component of the AscendUCore UI Kit.
// It showcases various ways the Card can be used to display content,
// including its new structured slots.

import type { Meta, StoryObj } from '@storybook/react';
import { css, ThemeProvider } from '@emotion/react';

// Import the Card, Button, and Icon components and the theme from your UI Kit
import { Card } from '../system/components/Card';
import { Button } from '../system/components/Button';
import { Icon } from '../system/components/Icon'; // For header icons
import { theme } from '../system/theme';

// Define the metadata for your Card component story
const meta: Meta<typeof Card> = {
  title: 'Components/Card', // Path in the Storybook sidebar
  component: Card,          // The React component to document
  tags: ['autodocs'],         // Enables auto-generated documentation
  parameters: {
    layout: 'centered', // Center the card in the Storybook canvas
  },
  argTypes: {
    header: {
      control: 'object',
      description: 'Content for the card\'s header section.',
    },
    title: {
      control: 'text',
      description: 'The main title of the card.',
      defaultValue: 'Card Title',
    },
    subtitle: {
      control: 'text',
      description: 'A subtitle for the card, typically smaller than the title.',
      defaultValue: 'Card Subtitle',
    },
    children: {
      control: 'text',
      description: 'The main content of the card.',
      defaultValue: 'This is the main content area of the card. It can hold paragraphs, lists, or any other React nodes.',
    },
    actions: {
      control: 'object',
      description: 'Content for the card\'s actions section, typically buttons.',
    },
    footer: {
      control: 'text',
      description: 'Content for the card\'s footer section.',
    },
  },
  // Decorator to wrap stories with the ThemeProvider
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ padding: theme.spacing.xl, backgroundColor: theme.colors.neutral['95'], display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: '400px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

// --- Individual Stories ---

// Default Card with only children content
export const Default: Story = {
  args: {
    children: 'This is a default card with some basic text content.',
  },
};

// Card with Title and Content
export const WithTitleAndContent: Story = {
  args: {
    title: 'Course Introduction',
    children: 'This card introduces a new course. It contains a title and a brief description of the course content.',
  },
};

// Card with Title, Subtitle, and Content
export const WithTitleSubtitleAndContent: Story = {
  args: {
    title: 'Module 1: ActivityPub Basics',
    subtitle: 'Understanding Decentralized Social Networks',
    children: 'This module covers the fundamental concepts of ActivityPub, including actors, objects, and activities. Prepare to dive deep into the fediverse!',
  },
};

// Card with Content and Actions
export const WithContentAndActions: Story = {
  args: {
    children: 'You have new assignments due soon. Please check your dashboard for details.',
    actions: (
      <>
        <Button variant="ghost" size="sm">Dismiss</Button>
        <Button variant="primary" size="sm">View Assignments</Button>
      </>
    ),
  },
};

// Card with Header, Title, Subtitle, Content, and Actions
export const FullFeaturedCard: Story = {
  args: {
    header: <Icon name="fa-solid fa-book" size="lg" color={theme.colors.primary['40']} />,
    title: 'Upcoming Webinar: Advanced Federation',
    subtitle: 'Presented by Dr. Alice Wonderland',
    children: (
      <>
        <p>Join our expert-led webinar on advanced topics in federated learning and ActivityPub implementation.</p>
        <p style={{ ...theme.typography.caption, color: theme.colors.neutral['60'] }}>Date: August 15, 2024 | Time: 10:00 AM EST</p>
      </>
    ),
    actions: (
      <>
        <Button variant="secondary" size="sm">Add to Calendar</Button>
        <Button variant="primary" size="sm">Register Now</Button>
      </>
    ),
  },
};

// Card with only Header and Content (e.g., for a profile summary)
export const WithHeaderAndContent: Story = {
  args: {
    header: <Icon name="fa-solid fa-user-circle" size="xl" color={theme.colors.neutral['50']} />,
    title: 'John Doe',
    subtitle: 'Student ID: 12345',
    children: (
      <>
        <p>Currently enrolled in: Introduction to ActivityPub, Decentralized Identity.</p>
        <p>Progress: 75% overall completion.</p>
      </>
    ),
  },
};

// Card with Footer
export const WithFooter: Story = {
  args: {
    title: 'Privacy Policy Update',
    children: 'Our privacy policy has been updated. Please review the changes at your earliest convenience.',
    footer: 'Last updated: July 23, 2024',
  },
};

// Card with all slots filled
export const AllSlots: Story = {
  args: {
    header: <Icon name="fa-solid fa-bell" size="lg" color={theme.colors.tertiary['40']} />,
    title: 'New Notification',
    subtitle: 'From System Administrator',
    children: 'You have received a new message regarding your course enrollment. Please check your inbox.',
    actions: <Button variant="primary" size="sm">View Message</Button>,
    footer: 'Received 5 minutes ago',
  },
};

// Card with custom CSS (example)
export const CustomStyledCard: Story = {
  args: {
    title: 'Custom Card',
    children: 'This card has custom background and border styles applied via the `css` prop.',
    css: css`
      background-color: ${theme.colors.secondary['95']};
      border-color: ${theme.colors.secondary['60']};
      border-width: 2px;
      box-shadow: ${theme.shadows.lg};
    `,
  },
};
