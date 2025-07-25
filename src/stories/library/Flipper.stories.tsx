// stories/Flipper.stories.tsx
// This file defines Storybook stories for the Flipper component of the AscendUCore UI Kit.
// It showcases various configurations and interactive examples for the 3D flip animation.

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

// Import the Flipper, Card, Button components and the theme
import { Flipper } from '../../components/Flipper';
import { Card } from '../../components/Card'; // Use Card to wrap content
import { Button } from '../../components/Button'; // For interactive controls
import { theme } from '../../theme';

// Define the metadata for your Flipper component story
const meta: Meta<typeof Flipper> = {
  title: 'Components/Flipper', // Path in the Storybook sidebar
  component: Flipper,          // The React component to document
  tags: ['autodocs'],         // Enables auto-generated documentation
  parameters: {
    layout: 'centered', // Center the component in the Storybook canvas
  },
  argTypes: {
    front: {
      control: 'object', // Can be JSX
      description: 'The content to be displayed on the front side of the card.',
    },
    back: {
      control: 'object', // Can be JSX
      description: 'The content to be displayed on the back side of the card.',
    },
    defaultFlipped: {
      control: 'boolean',
      description: 'If true, the card will initially be flipped to its back side (uncontrolled).',
      defaultValue: false,
    },
    isFlipped: {
      control: 'boolean',
      description: 'Controls the flipped state of the card (true for back, false for front) (controlled).',
    },
    onFlipChange: {
      action: 'flipChange', // Log flip state changes
      description: 'Callback function when the card\'s flipped state changes.',
    },
    duration: {
      control: { type: 'range', min: 0.1, max: 2, step: 0.1 },
      description: 'The duration of the flip animation in seconds.',
      defaultValue: 0.6,
    },
    flipDirection: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'The direction of the flip animation.',
      defaultValue: 'horizontal',
    },
    flipOnClick: { // New argType for the new prop
      control: 'boolean',
      description: 'If true, the card flips when clicked.',
      defaultValue: true,
    },
  },
  // Decorator to wrap stories with the ThemeProvider
  decorators: [
    (Story) => (
      <div style={{ padding: theme.spacing.xl, backgroundColor: theme.colors.background.default, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '350px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Flipper>;

// --- Helper Content for Front/Back ---
const FrontContent = (
  <Card style={{ padding: theme.spacing.lg, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '300px', width: '500px' }}>
    <h3 style={{ ...theme.typography.h3, margin: 0, color: theme.colors.text.default }}>Flashcard Front</h3>
    <p style={{ ...theme.typography.body, margin: `${theme.spacing.sm} 0 0 0`, color: theme.colors.text.default }}>
      What is ActivityPub?
    </p>
  </Card>
);

const BackContent = (
  <Card style={{ padding: theme.spacing.lg, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '300px', width: '500px' }}>
    <h3 style={{ ...theme.typography.h3, margin: 0, color: theme.colors.primary['10'] }}>Flashcard Back</h3>
    <p style={{ ...theme.typography.body, margin: `${theme.spacing.sm} 0 ${theme.spacing.md} 0`, color: theme.colors.primary['10'] }}>
      A decentralized social networking protocol.
    </p>
    <Button variant="secondary" size="sm" onClick={() => alert('Got it!')}>
      Got It!
    </Button>
  </Card>
);

// --- Individual Stories ---

// Default Horizontal Flipper (uncontrolled, flips on click)
export const DefaultHorizontal: Story = {
  args: {
    front: FrontContent,
    back: BackContent,
    flipDirection: 'horizontal',
    flipOnClick: true, // Explicitly set to true for clarity
  },
};

// Default Vertical Flipper (uncontrolled, flips on click)
export const DefaultVertical: Story = {
  args: {
    front: (
      <Card style={{ padding: theme.spacing.lg, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '300px', width: '500px' }}>
        <h3 style={{ ...theme.typography.h3, margin: 0, color: theme.colors.text.default }}>Vertical Flipper</h3>
        <p style={{ ...theme.typography.body, margin: `${theme.spacing.sm} 0 0 0`, color: theme.colors.text.default }}>
          Click to see the back!
        </p>
      </Card>
    ),
    back: (
      <Card style={{ padding: theme.spacing.lg, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '300px', width: '500px' }}>
        <h3 style={{ ...theme.typography.h3, margin: 0, color: theme.colors.primary['10'] }}>Back Content</h3>
        <p style={{ ...theme.typography.body, margin: `${theme.spacing.sm} 0 0 0`, color: theme.colors.primary['10'] }}>
          This side flips vertically.
        </p>
      </Card>
    ),
    flipDirection: 'vertical',
    flipOnClick: true,
  },
};

// Flipper with Longer Duration
export const LongerDuration: Story = {
  args: {
    front: FrontContent,
    back: BackContent,
    duration: 1.5, // 1.5 seconds
    flipOnClick: true,
  },
};

// Initially Flipped Flipper
export const InitiallyFlipped: Story = {
  args: {
    front: FrontContent,
    back: BackContent,
    defaultFlipped: true,
    flipOnClick: true,
  },
};

// Controlled Flipper Example (with external button to flip)
export const ControlledFlipper: Story = {
  render: (args: any) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlipChange = (newFlippedState: boolean) => {
      setFlipped(newFlippedState);
      args.onFlipChange?.(newFlippedState); // Log to Storybook actions
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.lg, alignItems: 'center' }}>
        <Flipper
          {...args}
          isFlipped={flipped}
          onFlipChange={handleFlipChange}
          // Set flipOnClick to false so only the button controls it
          flipOnClick={false}
          front={
            <Card style={{ padding: theme.spacing.lg, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '300px', width: '500px' }}>
              <h3 style={{ ...theme.typography.h3, margin: 0, color: theme.colors.text.default }}>Controlled Card</h3>
              <p style={{ ...theme.typography.body, margin: `${theme.spacing.sm} 0 0 0`, color: theme.colors.text.default }}>
                Currently: {flipped ? 'Back' : 'Front'}
              </p>
            </Card>
          }
          back={
            <Card style={{ padding: theme.spacing.lg, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '300px', width: '500px' }}>
              <h3 style={{ ...theme.typography.h3, margin: 0, color: theme.colors.primary['10'] }}>Controlled Card</h3>
              <p style={{ ...theme.typography.body, margin: `${theme.spacing.sm} 0 ${theme.spacing.md} 0`, color: theme.colors.primary['10'] }}>
                Currently: {flipped ? 'Back' : 'Front'}
              </p>
              <Button variant="secondary" size="sm" onClick={(event: React.MouseEvent) => {
                setFlipped(false);
                event.stopPropagation();
              }}>
                Flip Back
              </Button>
            </Card>
          }
        />
        <Button onClick={() => setFlipped(!flipped)}>
          Toggle Flipper ({flipped ? 'Show Front' : 'Show Back'})
        </Button>
      </div>
    );
  },
  args: {
    isFlipped: false,
  },
};

// Flipper that DOES NOT flip on click (only by external means if implemented)
export const NoFlipOnClick: Story = {
  args: {
    front: (
      <Card style={{ padding: theme.spacing.lg, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '300px', width: '500px' }}>
        <h3 style={{ ...theme.typography.h3, margin: 0, color: theme.colors.text.default }}>No Flip on Click</h3>
        <p style={{ ...theme.typography.body, margin: `${theme.spacing.sm} 0 0 0`, color: theme.colors.text.default }}>
          This card will NOT flip when clicked.
        </p>
      </Card>
    ),
    back: (
      <Card style={{ padding: theme.spacing.lg, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '300px', width: '500px' }}>
        <h3 style={{ ...theme.typography.h3, margin: 0, color: theme.colors.primary['10'] }}>Back View</h3>
        <p style={{ ...theme.typography.body, margin: `${theme.spacing.sm} 0 0 0`, color: theme.colors.primary['10'] }}>
          It can only be flipped programmatically.
        </p>
      </Card>
    ),
    flipOnClick: false, // Explicitly set to false
  },
};

// New story: German to English Flashcard
export const GermanFlashcard: Story = {
  args: {
    front: (
      <Card style={{ padding: theme.spacing.lg, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '300px', width: '500px' }}>
        <h3 style={{ ...theme.typography.h3, margin: 0, color: theme.colors.text.default }}>German Word</h3>
        <p style={{ ...theme.typography.h1, margin: `${theme.spacing.md} 0 0 0`, color: theme.colors.primary['40'] }}>
          Der Hund
        </p>
      </Card>
    ),
    back: (
      <Card style={{ padding: theme.spacing.lg, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '300px', width: '500px' }}>
        <h3 style={{ ...theme.typography.h3, margin: 0, color: theme.colors.primary['10'] }}>English Translation</h3>
        <p style={{ ...theme.typography.h1, margin: `${theme.spacing.md} 0 ${theme.spacing.md} 0`, color: theme.colors.primary['10'] }}>
          Dog
        </p>
        <Button variant="secondary" size="sm" onClick={(event: React.MouseEvent) => {
          alert('Remembered!');
          event.stopPropagation();
        }}>
          Remembered!
        </Button>
      </Card>
    ),
    flipDirection: 'horizontal',
    flipOnClick: true,
  },
};
