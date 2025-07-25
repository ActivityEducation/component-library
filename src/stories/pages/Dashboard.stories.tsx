// src/stories/pages/Dashboard.stories.tsx
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

// Import the Dashboard component and other components needed for the Sidenav story
import { Dashboard } from '../../pages/Dashboard';
import { Sidenav, SidenavContainer, SidenavContent, Button, Icon, List, ListItem, theme } from '../../';

// Define the metadata for your Dashboard component story
const meta: Meta<typeof Dashboard> = {
  title: 'Pages/Dashboard', // Path in the Storybook sidebar
  component: Dashboard,     // The main component to document
  tags: ['autodocs'],       // Enables auto-generated documentation
  parameters: {
    layout: 'fullscreen',   // Use fullscreen layout for a page component
  },
  argTypes: {
    // If Dashboard had props, you'd define them here.
    // Since it's a page component, direct props might be minimal.
  },
  // Decorator to wrap stories with the ThemeProvider and ensure full height
  decorators: [
    (Story) => (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: theme.colors.background.default }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Dashboard>;

// --- Individual Stories ---

// Default Dashboard Story (standalone)
export const DefaultDashboard: Story = {
  args: {
    // No specific args for a full page component usually, unless it takes global data
  },
};

// Sidenav Navigation Content
const SidenavNavContent = (
  <div style={{ padding: theme.spacing.lg, display: 'flex', flexDirection: 'column', height: '100%' }}>
    <h3 style={{ ...theme.typography.h3, margin: `0 0 ${theme.spacing.lg} 0`, color: theme.colors.primary['40'] }}>
      App Navigation
    </h3>
    <List style={{ boxShadow: 'none', borderRadius: 'none', flexGrow: 1 }}>
      <ListItem interactive leading={<Icon name="fa-solid fa-home" />}>
        Dashboard
      </ListItem>
      <ListItem interactive leading={<Icon name="fa-solid fa-book" />}>
        My Courses
      </ListItem>
      <ListItem interactive leading={<Icon name="fa-solid fa-chart-line" />}>
        Progress
      </ListItem>
      <ListItem interactive leading={<Icon name="fa-solid fa-cog" />}>
        Settings
      </ListItem>
    </List>
    <div style={{ marginTop: 'auto', padding: theme.spacing.md }}>
      <Button variant="secondary" style={{ width: '100%' }}>Logout</Button>
    </div>
  </div>
);