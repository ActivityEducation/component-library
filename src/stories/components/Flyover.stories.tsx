// stories/Flyover.stories.tsx
// This file defines Storybook stories for the Flyover component of the AscendUCore UI Kit.
// It showcases how the component can be used to display contextual information on hover/tap.

import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';

// Import the Flyover component and the theme
import { Flyover } from '../../components/Flyover'; // Import FlyoverPosition type
import { theme } from '../../theme';

// Define the metadata for your Flyover component story
const meta: Meta<typeof Flyover> = {
  title: 'Components/Flyover', // Path in the Storybook sidebar
  component: Flyover,          // The React component to document
  tags: ['autodocs'],         // Enables auto-generated documentation
  parameters: {
    layout: 'padded', // Use padded layout for better visibility
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The text content that triggers the flyover.',
      defaultValue: 'glossary term',
    },
    content: {
      control: 'object',
      description: 'The content to be displayed inside the flyover card.',
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right', 'fix-top-left', 'fix-top-right', 'fix-bottom-left', 'fix-bottom-right'],
      description: 'The preferred position of the popover relative to the trigger or viewport.',
      defaultValue: 'bottom',
    },
  },
  // Decorator to wrap stories with the ThemeProvider
  decorators: [
    (Story) => (
      <div style={{ padding: theme.spacing.xl, backgroundColor: theme.colors.background.default, minHeight: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Flyover>;

// --- Helper Content for Flyover Card ---
const DefinitionContent = (
  <div style={{ padding: theme.spacing.md }}>
    <h4 style={{ ...theme.typography.h4, margin: 0, color: theme.colors.text.default }}>ActivityPub</h4>
    <p style={{ ...theme.typography.bodySmall, margin: `${theme.spacing.sm} 0 0 0`, color: theme.colors.text.default }}>
      A decentralized social networking protocol based on the ActivityStreams 2.0 data format.
      It enables federated social applications to communicate and interact across different servers.
    </p>
  </div>
);

const AnotherDefinition = (
  <div style={{ padding: theme.spacing.md }}>
    <h4 style={{ ...theme.typography.h4, margin: 0, color: theme.colors.text.default }}>Federation</h4>
    <p style={{ ...theme.typography.bodySmall, margin: `${theme.spacing.sm} 0 0 0`, color: theme.colors.text.default }}>
      In the context of decentralized networks, federation refers to the ability of independent servers
      or instances to communicate and share data with each other, forming a larger, interconnected network.
    </p>
  </div>
);

// --- Individual Stories ---

// Default Flyover with a simple glossary term (position: bottom)
export const Default: Story = {
  args: {
    children: 'ActivityPub',
    content: DefinitionContent,
    position: 'bottom',
  },
};

// Flyover with a longer definition (position: top)
export const PositionTop: Story = {
  args: {
    children: 'Federation',
    content: AnotherDefinition,
    position: 'top',
  },
};

// Flyover with position Left
export const PositionLeft: Story = {
  args: {
    children: 'Decentralized',
    content: (
      <div style={{ padding: theme.spacing.md }}>
        <h4 style={{ ...theme.typography.h4, margin: 0, color: theme.colors.text.default }}>Decentralized</h4>
        <p style={{ ...theme.typography.bodySmall, margin: `${theme.spacing.sm} 0 0 0`, color: theme.colors.text.default }}>
          A system where control and decision-making are distributed among participants, rather than centralized.
        </p>
      </div>
    ),
    position: 'left',
  },
};

// Flyover with position Right
export const PositionRight: Story = {
  args: {
    children: 'Blockchain',
    content: (
      <div style={{ padding: theme.spacing.md }}>
        <h4 style={{ ...theme.typography.h4, margin: 0, color: theme.colors.text.default }}>Blockchain</h4>
        <p style={{ ...theme.typography.bodySmall, margin: `${theme.spacing.sm} 0 0 0`, color: theme.colors.text.default }}>
          A distributed ledger technology that records transactions in a secure and immutable way.
        </p>
      </div>
    ),
    position: 'right',
  },
};

// Flyover in a paragraph context (demonstrates auto-flipping)
export const InParagraphWithAutoFlip: Story = {
  render: () => (
    <p style={{ ...theme.typography.body, maxWidth: '600px', lineHeight: '1.8', textAlign: 'center' }}>
      Welcome to our course on decentralized technologies. Today, we will explore the core concepts of{' '}
      <Flyover content={DefinitionContent} position="bottom">ActivityPub</Flyover>, a protocol that powers the{' '}
      <Flyover content={AnotherDefinition} position="top">federation</Flyover> of social networks.
      Try resizing the browser window or scrolling to see how the popovers adjust their position automatically.
      Here's another term near the <Flyover content={DefinitionContent} position="right">right edge</Flyover> of the container.
      And one near the <Flyover content={AnotherDefinition} position="left">left edge</Flyover>.
    </p>
  ),
  args: {},
  parameters: {
    layout: 'padded',
  },
};

// Fixed position: Top-Left
export const FixedTopLeft: Story = {
  args: {
    children: 'Fixed Top-Left',
    content: (
      <div style={{ padding: theme.spacing.md }}>
        <h4 style={{ ...theme.typography.h4, margin: 0, color: theme.colors.text.default }}>Fixed Position</h4>
        <p style={{ ...theme.typography.bodySmall, margin: `${theme.spacing.sm} 0 0 0`, color: theme.colors.text.default }}>
          This popover is fixed to the top-left of the viewport.
        </p>
      </div>
    ),
    position: 'fix-top-left',
  },
  parameters: {
    // Ensure this story is not centered to properly show fixed position
    layout: 'fullscreen',
  },
};

// Fixed position: Top-Right
export const FixedTopRight: Story = {
  args: {
    children: 'Fixed Top-Right',
    content: (
      <div style={{ padding: theme.spacing.md }}>
        <h4 style={{ ...theme.typography.h4, margin: 0, color: theme.colors.text.default }}>Fixed Position</h4>
        <p style={{ ...theme.typography.bodySmall, margin: `${theme.spacing.sm} 0 0 0`, color: theme.colors.text.default }}>
          This popover is fixed to the top-right of the viewport.
        </p>
      </div>
    ),
    position: 'fix-top-right',
  },
  parameters: {
    layout: 'fullscreen',
  },
};

// Fixed position: Bottom-Left
export const FixedBottomLeft: Story = {
  args: {
    children: 'Fixed Bottom-Left',
    content: (
      <div style={{ padding: theme.spacing.md }}>
        <h4 style={{ ...theme.typography.h4, margin: 0, color: theme.colors.text.default }}>Fixed Position</h4>
        <p style={{ ...theme.typography.bodySmall, margin: `${theme.spacing.sm} 0 0 0`, color: theme.colors.text.default }}>
          This popover is fixed to the bottom-left of the viewport.
        </p>
      </div>
    ),
    position: 'fix-bottom-left',
  },
  parameters: {
    layout: 'fullscreen',
  },
};

// Fixed position: Bottom-Right
export const FixedBottomRight: Story = {
  args: {
    children: 'Fixed Bottom-Right',
    content: (
      <div style={{ padding: theme.spacing.md }}>
        <h4 style={{ ...theme.typography.h4, margin: 0, color: theme.colors.text.default }}>Fixed Position</h4>
        <p style={{ ...theme.typography.bodySmall, margin: `${theme.spacing.sm} 0 0 0`, color: theme.colors.text.default }}>
          This popover is fixed to the bottom-right of the viewport.
        </p>
      </div>
    ),
    position: 'fix-bottom-right',
  },
  parameters: {
    layout: 'fullscreen',
  },
};
