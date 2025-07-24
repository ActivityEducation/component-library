// stories/ProgressBar.stories.tsx
// This file defines Storybook stories for the ProgressBar component of the AscendUCore UI Kit.
// It showcases various progress states and interactive examples.

import { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';

// Import the ProgressBar component and the theme
import { ProgressBar } from '../system/components/ProgressBar';
import { Button } from '../system/components/Button'; // For interactive controls
import { theme } from '../system/theme';

// Define the metadata for your ProgressBar component story
const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar', // Path in the Storybook sidebar
  component: ProgressBar,          // The React component to document
  tags: ['autodocs'],         // Enables auto-generated documentation
  parameters: {
    layout: 'padded', // Use padded layout for better visibility
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 }, // Slider for value
      description: 'The current value of the progress bar (0-100).',
      defaultValue: 50,
    },
    max: {
      control: { type: 'number', min: 1, step: 1 }, // Number input for max
      description: 'The maximum value of the progress bar.',
      defaultValue: 100,
    },
  },
  // Decorator to wrap stories with the ThemeProvider
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ padding: theme.spacing.xl, backgroundColor: theme.colors.background.default, width: '100%', maxWidth: '600px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

// --- Individual Stories ---

// Progress Bar at 0%
export const ZeroProgress: Story = {
  args: {
    value: 0,
  },
};

// Progress Bar at 25%
export const TwentyFivePercent: Story = {
  args: {
    value: 25,
  },
};

// Progress Bar at 50%
export const FiftyPercent: Story = {
  args: {
    value: 50,
  },
};

// Progress Bar at 75%
export const SeventyFivePercent: Story = {
  args: {
    value: 75,
  },
};

// Progress Bar at 100%
export const FullProgress: Story = {
  args: {
    value: 100,
  },
};

// Progress Bar with custom max value
export const CustomMax: Story = {
  args: {
    value: 75,
    max: 200, // Example: 75 out of 200
  },
};

// Interactive Progress Bar
export const Interactive: Story = {
  render: (args) => {
    const [progress, setProgress] = useState(args.value || 0);

    const increment = () => {
      setProgress((prev) => Math.min(prev + 10, args.max || 100));
    };

    const decrement = () => {
      setProgress((prev) => Math.max(prev - 10, 0));
    };

    const reset = () => {
      setProgress(0);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md, width: '100%' }}>
        <ProgressBar value={progress} max={args.max} />
        <p style={{ ...theme.typography.bodySmall, textAlign: 'center', color: theme.colors.neutral['50'] }}>
          Current Progress: {progress} / {args.max}
        </p>
        <div style={{ display: 'flex', gap: theme.spacing.sm, justifyContent: 'center' }}>
          <Button size="sm" onClick={decrement} disabled={progress === 0}>
            Decrease
          </Button>
          <Button size="sm" onClick={increment} disabled={progress === (args.max || 100)}>
            Increase
          </Button>
          <Button size="sm" variant="ghost" onClick={reset}>
            Reset
          </Button>
        </div>
      </div>
    );
  },
  args: {
    value: 30,
    max: 100,
  },
};

// Animated Progress Bar (simulating loading)
export const AnimatedLoading: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      let interval: number;
      if (isLoading && progress < 100) {
        interval = setInterval(() => {
          setProgress((prev) => {
            const newProgress = prev + Math.floor(Math.random() * 10) + 1; // Random increment
            if (newProgress >= 100) {
              clearInterval(interval);
              setIsLoading(false);
              return 100;
            }
            return newProgress;
          });
        }, 300); // Update every 300ms
      } else if (!isLoading && progress === 100) {
        // Reset after a short delay if fully loaded
        setTimeout(() => setProgress(0), 1000);
      }
      return () => clearInterval(interval);
    }, [isLoading, progress]);

    const startLoading = () => {
      setIsLoading(true);
      setProgress(0); // Reset progress when starting
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md, width: '100%' }}>
        <ProgressBar value={progress} max={100} />
        <p style={{ ...theme.typography.bodySmall, textAlign: 'center', color: theme.colors.neutral['50'] }}>
          {isLoading ? `Loading... ${progress}%` : (progress === 100 ? 'Complete!' : 'Ready to Load')}
        </p>
        <div style={{ display: 'flex', gap: theme.spacing.sm, justifyContent: 'center' }}>
          <Button onClick={startLoading} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Start Loading'}
          </Button>
        </div>
      </div>
    );
  },
  args: {
    value: 0,
    max: 100,
  },
};
