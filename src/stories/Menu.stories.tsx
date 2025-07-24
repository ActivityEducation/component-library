// stories/Menu.stories.tsx
// This file defines Storybook stories for the Menu and MenuItem components of the AscendUCore UI Kit.
// It showcases various configurations and interactions for dropdown menus.

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';

// Import Menu, MenuItem, Button, and Icon components, and the theme
import { Menu, MenuItem } from '../system/components/Menu';
import { Button } from '../system/components/Button';
import { Icon } from '../system/components/Icon'; // Import Icon component for direct use
import { theme } from '../system/theme';

// Define the metadata for your Menu component story
const meta: Meta<typeof Menu> = {
  title: 'Components/Menu', // Path in the Storybook sidebar
  component: Menu,          // The main component to document
  tags: ['autodocs'],         // Enables auto-generated documentation
  parameters: {
    layout: 'padded', // Use padded layout for better visibility
  },
  argTypes: {
    trigger: {
      control: false, // Trigger is defined directly in stories
    },
    children: {
      control: false, // Children are defined directly in stories
    },
    open: {
      control: 'boolean',
      description: 'If true, the menu is open (controlled).',
    },
    onOpenChange: {
      action: 'openChange', // Log open/close events
      description: 'Callback function when the menu open state changes.',
    },
  },
  // Decorator to wrap stories with the ThemeProvider
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ padding: theme.spacing.xl, backgroundColor: theme.colors.background.default, minHeight: '200px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Menu>;

// --- Individual Stories ---

// Basic Menu with simple text items
export const Default: Story = {
  args: {
    trigger: <Button variant="primary">Open Menu</Button>,
    children: (
      <>
        <MenuItem onClick={() => alert('Option 1 clicked')}>Option 1</MenuItem>
        <MenuItem onClick={() => alert('Option 2 clicked')}>Option 2</MenuItem>
        <MenuItem onClick={() => alert('Option 3 clicked')}>Option 3</MenuItem>
      </>
    ),
  },
};

// Menu with Leading Icons (using Icon component directly or string names)
export const WithIcons: Story = {
  args: {
    trigger: <Button variant="secondary">Actions</Button>,
    children: (
      <>
        <MenuItem leading="fa-solid fa-plus" onClick={() => alert('Add clicked')}>Add New</MenuItem>
        <MenuItem leading={<Icon name="fa-solid fa-edit" />} onClick={() => alert('Edit clicked')}>Edit Item</MenuItem>
        <MenuItem leading={<Icon name="fa-solid fa-trash" color={theme.colors.error['40']} />} onClick={() => alert('Delete clicked')}>Delete Item</MenuItem>
      </>
    ),
  },
};

// Menu with Trailing Content (e.g., keyboard accelerators or icons)
export const WithAccelerators: Story = {
  args: {
    trigger: <Button variant="ghost">File</Button>,
    children: (
      <>
        <MenuItem trailing="Ctrl+S" onClick={() => alert('Save clicked')}>Save</MenuItem>
        <MenuItem trailing="Ctrl+P" onClick={() => alert('Print clicked')}>Print</MenuItem>
        <MenuItem trailing={<Icon name="fa-solid fa-external-link-alt" size="sm" />} onClick={() => alert('Open in New Window clicked')}>Open in New Window</MenuItem>
      </>
    ),
  },
};

// Menu with Disabled Items
export const WithDisabledItems: Story = {
  args: {
    trigger: <Button variant="primary">More Options</Button>,
    children: (
      <>
        <MenuItem onClick={() => alert('View Details clicked')}>View Details</MenuItem>
        <MenuItem disabled onClick={() => alert('This should not fire')}>Edit (Disabled)</MenuItem>
        <MenuItem onClick={() => alert('Share clicked')}>Share</MenuItem>
        <MenuItem disabled onClick={() => alert('This should not fire')}>Delete (Disabled)</MenuItem>
      </>
    ),
  },
};

// Controlled Menu Example
export const ControlledMenu: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenChange = (newOpenState: boolean) => {
      setIsOpen(newOpenState);
      args.onOpenChange?.(newOpenState); // Log to Storybook actions
    };

    return (
      <Menu
        trigger={<Button variant="tertiary">Controlled Menu ({isOpen ? 'Open' : 'Closed'})</Button>}
        open={isOpen}
        onOpenChange={handleOpenChange}
      >
        <MenuItem onClick={() => alert('Controlled Option 1')}>Controlled Option 1</MenuItem>
        <MenuItem onClick={() => alert('Controlled Option 2')}>Controlled Option 2</MenuItem>
      </Menu>
    );
  },
  args: {
    open: false,
  },
};

// Menu positioned at the right (adjusting trigger position for demo)
export const RightAlignedMenu: Story = {
  render: (args) => {
    return (
      <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
        <Menu
          trigger={<Button variant="primary">Open Right Menu</Button>}
        >
          <MenuItem onClick={() => alert('Right Option 1')}>Right Option 1</MenuItem>
          <MenuItem onClick={() => alert('Right Option 2')}>Right Option 2</MenuItem>
          <MenuItem onClick={() => alert('Right Option 3')}>Right Option 3</MenuItem>
        </Menu>
      </div>
    );
  },
  args: {},
  parameters: {
    layout: 'padded', // Ensure enough padding for positioning
  },
};
