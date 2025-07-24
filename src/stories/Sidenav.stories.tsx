// stories/Sidenav.stories.tsx
// This file defines Storybook stories for the Sidenav, SidenavContainer, and SidenavContent components.
// It showcases various configurations of side navigation, including different modes and positions.

import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';

// Import Sidenav components, Button, List, ListItem, and theme
import { Sidenav, SidenavContainer, SidenavContent } from '..//components/Sidenav';
import { Button } from '..//components/Button';
import { List, ListItem } from '..//components/List';
import { Icon } from '..//components/Icon';
import { theme } from '..//theme';

// Helper content for Sidenav
const SidenavNavContent = (
  <div style={{ padding: theme.spacing.lg, display: 'flex', flexDirection: 'column', height: '100%' }}>
    <h3 style={{ ...theme.typography.h3, margin: `0 0 ${theme.spacing.lg} 0`, color: theme.colors.primary['40'] }}>
      AscendUCore Nav
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
      <ListItem interactive leading={<Icon name="fa-solid fa-comments" />}>
        Discussions
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

// Helper content for Main Content
const MainContent = (
  <div style={{ padding: theme.spacing.lg, height: '100%', overflowY: 'auto' }}>
    <h2 style={{ ...theme.typography.h2, margin: `0 0 ${theme.spacing.lg} 0` }}>Main Application Content</h2>
    <p style={theme.typography.body}>
      This is the primary content area of your application. When the sidenav is in 'side' mode,
      this content will be pushed to make space for the sidenav. In 'over' mode, the sidenav
      will appear on top of this content.
    </p>
    <p style={theme.typography.body}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p style={theme.typography.body}>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
    </p>
    <p style={theme.typography.body}>
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
      similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
      Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,
      omnis voluptas assumenda est, omnis dolor repellendus.
    </p>
    <p style={theme.typography.body}>
      Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
      Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
    </p>
  </div>
);

// Define the metadata for your Sidenav component story
const meta: Meta<typeof Sidenav> = {
  title: 'Components/Sidenav', // Path in the Storybook sidebar
  component: Sidenav,          // The main component to document
  tags: ['autodocs'],         // Enables auto-generated documentation
  parameters: {
    layout: 'fullscreen', // Use fullscreen layout to demonstrate sidenav behavior
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls whether the sidenav is open or closed (controlled).',
    },
    onOpenChange: {
      action: 'openChange', // Log open/close events
      description: 'Callback function when the sidenav open state changes.',
    },
    position: {
      control: 'radio',
      options: ['start', 'end'],
      description: 'The position of the sidenav (left or right).',
      defaultValue: 'start',
    },
    mode: {
      control: 'radio',
      options: ['over', 'side'],
      description: 'The mode of the sidenav (overlay content or push content).',
      defaultValue: 'side',
    },
    width: {
      control: 'text',
      description: 'The width of the sidenav when open (e.g., "280px", "30%").',
      defaultValue: '280px',
    },
    children: {
      control: false, // Children are defined directly in stories
    },
  },
  // Decorator to wrap stories with the ThemeProvider
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: theme.spacing.md, background: theme.colors.primary['40'], color: '#fff', display: 'flex', alignItems: 'center', gap: theme.spacing.md }}>
            <h1 style={{ ...theme.typography.h3, margin: 0, color: '#fff' }}>App Header</h1>
            <span style={{ marginLeft: 'auto' }}>
              <Button variant="ghost" onClick={() => {
                // This button will be outside the SidenavContainer in the story,
                // so it's a generic toggle for the Sidenav in the render function.
              }} style={{ color: '#fff' }}>
                Toggle Sidenav (via header)
              </Button>
            </span>
          </div>
          <div style={{ flexGrow: 1, display: 'flex' }}>
            <Story />
          </div>
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Sidenav>;

// --- Individual Stories ---

// Side Sidenav (default)
export const SideSidenav: Story = {
  render: (args: any) => {
    const [open, setOpen] = useState(true); // Start open for demonstration

    return (
      <SidenavContainer style={{ flexGrow: 1 }}>
        <Sidenav
          {...args}
          open={open}
          onOpenChange={setOpen}
          mode="side"
          position="start"
        >
          {SidenavNavContent}
        </Sidenav>
        <SidenavContent
          sidenavWidth={args.width}
          sidenavPosition="start"
          sidenavMode="side"
          isSidenavOpen={open}
        >
          <Button onClick={() => setOpen(!open)} variant="primary" style={{ marginBottom: theme.spacing.md }}>
            Toggle Sidenav
          </Button>
          {MainContent}
        </SidenavContent>
      </SidenavContainer>
    );
  },
  args: {
    width: '280px',
  },
};

// Over Sidenav
export const OverSidenav: Story = {
  render: (args: any) => {
    const [open, setOpen] = useState(false);

    return (
      <SidenavContainer style={{ flexGrow: 1 }}>
        <Sidenav
          {...args}
          open={open}
          onOpenChange={setOpen}
          mode="over"
          position="start"
        >
          {SidenavNavContent}
        </Sidenav>
        <SidenavContent
          sidenavWidth={args.width} // Not directly used by SidenavContent in 'over' mode
          sidenavPosition="start"
          sidenavMode="over"
          isSidenavOpen={open}
        >
          <Button onClick={() => setOpen(!open)} variant="primary" style={{ marginBottom: theme.spacing.md }}>
            Toggle Sidenav
          </Button>
          {MainContent}
        </SidenavContent>
      </SidenavContainer>
    );
  },
  args: {
    width: '280px',
  },
};

// Side Sidenav from End (Right)
export const SideSidenavEnd: Story = {
  render: (args: any) => {
    const [open, setOpen] = useState(true);

    return (
      <SidenavContainer style={{ flexGrow: 1 }}>
        <SidenavContent
          sidenavWidth={args.width}
          sidenavPosition="end"
          sidenavMode="side"
          isSidenavOpen={open}
        >
          <Button onClick={() => setOpen(!open)} variant="primary" style={{ marginBottom: theme.spacing.md }}>
            Toggle Sidenav
          </Button>
          {MainContent}
        </SidenavContent>
        <Sidenav
          {...args}
          open={open}
          onOpenChange={setOpen}
          mode="side"
          position="end"
        >
          {SidenavNavContent}
        </Sidenav>
      </SidenavContainer>
    );
  },
  args: {
    width: '280px',
  },
};

// Over Sidenav from End (Right)
export const OverSidenavEnd: Story = {
  render: (args: any) => {
    const [open, setOpen] = useState(false);

    return (
      <SidenavContainer style={{ flexGrow: 1 }}>
        <SidenavContent
          sidenavWidth={args.width} // Not directly used by SidenavContent in 'over' mode
          sidenavPosition="end"
          sidenavMode="over"
          isSidenavOpen={open}
        >
          <Button onClick={() => setOpen(!open)} variant="primary" style={{ marginBottom: theme.spacing.md }}>
            Toggle Sidenav
          </Button>
          {MainContent}
        </SidenavContent>
        <Sidenav
          {...args}
          open={open}
          onOpenChange={setOpen}
          mode="over"
          position="end"
        >
          {SidenavNavContent}
        </Sidenav>
      </SidenavContainer>
    );
  },
  args: {
    width: '280px',
  },
};
