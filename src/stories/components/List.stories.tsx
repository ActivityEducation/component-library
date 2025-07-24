// stories/List.stories.tsx
// This file defines Storybook stories for the List and ListItem components of the AscendUCore UI Kit.
// It showcases various types of lists, including interactive, with leading/trailing content, and disabled states.

import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

// Import List, ListItem components and the theme
import { List, ListItem } from '../../components/List';
import { Button } from '../../components/Button'; // For trailing actions
import { Badge } from '../../components/Badge';   // For trailing badges
import { Checkbox } from '../../components/Checkbox'; // For leading checkboxes
import { Icon } from '../../components/Icon'; // Import Icon component for direct use
import { theme } from '../../theme';

// Define the metadata for your List component story
const meta: Meta<typeof List> = {
  title: 'Components/List', // Path in the Storybook sidebar
  component: List,          // The main component to document
  tags: ['autodocs'],         // Enables auto-generated documentation
  parameters: {
    layout: 'padded', // Use padded layout for better visibility
  },
  argTypes: {
    children: {
      control: false, // Children are defined directly in stories
    },
  },
  // Decorator to wrap stories with the ThemeProvider
  decorators: [
    (Story) => (
      <div style={{ padding: theme.spacing.xl, backgroundColor: theme.colors.neutral['95'], display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof List>;

// --- Individual Stories ---

// Basic List of non-interactive items
export const DefaultList: Story = {
  args: {
    children: (
      <>
        <ListItem>Item One</ListItem>
        <ListItem>Item Two</ListItem>
        <ListItem>Item Three</ListItem>
      </>
    ),
  },
};

// Interactive List (clickable items)
export const InteractiveList: Story = {
  args: {
    children: (
      <>
        <ListItem interactive onClick={() => alert('Clicked Course: ActivityPub Basics')}>
          Introduction to ActivityPub
        </ListItem>
        <ListItem interactive onClick={() => alert('Clicked Course: Federated Systems')}>
          Advanced Federated Systems
        </ListItem>
        <ListItem interactive onClick={() => alert('Clicked Course: Decentralized Identity')}>
          Decentralized Identity
        </ListItem>
      </>
    ),
  },
};

// List with Leading Icons (using Icon component directly)
export const ListWithLeadingIcons: Story = {
  args: {
    children: (
      <>
        <ListItem leading={<Icon name="fa-solid fa-user" />}>My Profile</ListItem>
        <ListItem leading={<Icon name="fa-solid fa-book" />}>My Courses</ListItem>
        <ListItem leading={<Icon name="fa-solid fa-bell" />}>Notifications</ListItem>
        <ListItem leading={<Icon name="fa-solid fa-cog" />}>Settings</ListItem>
      </>
    ),
  },
};

// List with Trailing Content (e.g., badges, buttons, icons)
export const ListWithTrailingContent: Story = {
  args: {
    children: (
      <>
        <ListItem trailing={<Badge variant="primary">New</Badge>}>
          New Announcements
        </ListItem>
        <ListItem trailing={<Badge variant="success">5</Badge>}>
          Completed Assignments
        </ListItem>
        <ListItem trailing={<Button variant="ghost" size="sm">View</Button>}>
          Course Progress
        </ListItem>
        <ListItem trailing={<Icon name="fa-solid fa-arrow-right" size="sm" />}>
          Next Step
        </ListItem>
      </>
    ),
  },
};

// List with both Leading and Trailing Content (using Icon component directly)
export const FullFeaturedList: Story = {
  args: {
    children: (
      <>
        <ListItem leading={<Icon name="fa-solid fa-book-open" />} trailing={<Badge variant="info">3 Modules</Badge>} interactive onClick={() => alert('Go to Module 1')}>
          Module 1: ActivityPub Basics
        </ListItem>
        <ListItem leading={<Icon name="fa-solid fa-arrow-circle-right" />} trailing={<Icon name="fa-solid fa-chevron-right" size="sm" />} interactive onClick={() => alert('Go to Module 2')}>
          Module 2: Advanced Federation
        </ListItem>
        <ListItem leading={<Icon name="fa-solid fa-user-edit" />} trailing={<Button variant="ghost" size="sm">Edit</Button>} interactive onClick={() => alert('Edit Profile')}>
          Edit Profile Information
        </ListItem>
        <ListItem leading={<Icon name="fa-solid fa-exclamation-circle" />} trailing={<Badge variant="error">!</Badge>} interactive onClick={() => alert('View Notifications')}>
          Unread Notifications
        </ListItem>
      </>
    ),
  },
};

// List with Checkboxes (controlled example)
export const ListWithCheckboxes: Story = {
  render: () => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
      const { checked } = event.target;
      setSelectedItems((prev: any) =>
        checked ? [...prev, value] : prev.filter((item: any) => item !== value)
      );
    };

    return (
      <List>
        <ListItem
          leading={
            <Checkbox
              checked={selectedItems.includes('item1')}
              onChange={(e: any) => handleCheckboxChange(e, 'item1')}
            />
          }
        >
          Selectable Item 1
        </ListItem>
        <ListItem
          leading={
            <Checkbox
              checked={selectedItems.includes('item2')}
              onChange={(e: any) => handleCheckboxChange(e, 'item2')}
            />
          }
        >
          Selectable Item 2
        </ListItem>
        <ListItem
          leading={
            <Checkbox
              checked={selectedItems.includes('item3')}
              onChange={(e: any) => handleCheckboxChange(e, 'item3')}
            />
          }
          disabled // Example of a disabled selectable item
        >
          Disabled Selectable Item 3
        </ListItem>
      </List>
    );
  },
  args: {},
  parameters: {
    layout: 'padded',
  },
};

// List with Disabled Items
export const ListWithDisabledItems: Story = {
  args: {
    children: (
      <>
        <ListItem>Active Item</ListItem>
        <ListItem disabled>Disabled Item</ListItem>
        <ListItem interactive disabled onClick={() => alert('This should not fire')}>
          Disabled Interactive Item
        </ListItem>
      </>
    ),
  },
};

// List with SVG URL Icons
export const ListWithSvgUrlIcons: Story = {
  args: {
    children: (
      <>
        <ListItem leading={<Icon src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Adobelogo.svg" size="md" />}>
          Adobe Product
        </ListItem>
        <ListItem leading={<Icon src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" size="md" />}>
          GitHub Repository
        </ListItem>
      </>
    ),
  },
};

// List with Inline SVG Icons
export const ListWithInlineSvgIcons: Story = {
  args: {
    children: (
      <>
        <ListItem leading={
          <Icon size="md" color={theme.colors.primary['40']}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
            </svg>
          </Icon>
        }>
          Task Completed
        </ListItem>
        <ListItem leading={
          <Icon size="md" color={theme.colors.error['40']}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" fill="currentColor"/>
            </svg>
          </Icon>
        }>
          Action Required
        </ListItem>
      </>
    ),
  },
};
