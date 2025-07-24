// This file defines Storybook stories for the VideoPlayer component of the AscendUCore UI Kit.
// It showcases the video player with various configurations.

import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';

// Import the VideoPlayer component and the theme
import { VideoPlayer } from '../system/components/VideoPlayer';
import { theme } from '../system/theme';

// Define the metadata for your VideoPlayer component story
const meta: Meta<typeof VideoPlayer> = {
  title: 'Components/VideoPlayer', // Path in the Storybook sidebar
  component: VideoPlayer,          // The React component to document
  tags: ['autodocs'],         // Enables auto-generated documentation
  parameters: {
    layout: 'padded', // Use padded layout for better visibility
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'The URL of the video source.',
      defaultValue: 'https://www.w3schools.com/html/mov_bbb.mp4', // Example video URL
    },
    title: {
      control: 'text',
      description: 'The title of the video, used for accessibility.',
      defaultValue: 'Big Buck Bunny Sample',
    },
    autoPlay: {
      control: 'boolean',
      description: 'If true, the video will start playing automatically.',
      defaultValue: false,
    },
    loop: {
      control: 'boolean',
      description: 'If true, the video will loop after ending.',
      defaultValue: false,
    },
    muted: {
      control: 'boolean',
      description: 'If true, the video will be muted by default.',
      defaultValue: false,
    },
    interrupts: {
      control: 'object',
      description: 'An array of interactive interrupt elements to display at specific timestamps.',
    },
  },
  // Decorator to wrap stories with the ThemeProvider
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ padding: theme.spacing.xl, backgroundColor: theme.colors.neutral['95'], display: 'flex', justifyContent: 'center' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof VideoPlayer>;

// --- Individual Stories ---

// Default Video Player
export const Default: Story = {
  args: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Big Buck Bunny Sample',
  },
};

// Video Player with Autoplay
export const Autoplay: Story = {
  args: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Autoplay Video',
    autoPlay: true,
    muted: true, // Autoplay often requires muted to work in browsers
  },
};

// Video Player with Loop
export const Loop: Story = {
  args: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Looping Video',
    loop: true,
    autoPlay: true,
    muted: true,
  },
};

// Video Player with Muted Autoplay
export const MutedAutoplay: Story = {
  args: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Muted Autoplay Video',
    autoPlay: true,
    muted: true,
  },
};

// Video Player with a different source (if available)
export const AnotherVideo: Story = {
  args: {
    src: 'https://www.w3schools.com/html/movie.mp4', // Another sample video
    title: 'The Bear Sample',
  },
};

// Video Player with Interactive Interrupts
export const WithInterrupts: Story = {
  args: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4', // Big Buck Bunny is 10 seconds long
    title: 'Video with Interrupts',
    autoPlay: false,
    muted: false,
    interrupts: [
      {
        id: 'intro-question',
        timestampSeconds: 3, // Interrupt at 3 seconds
        content: (
          <>
            <h3 style={{ ...theme.typography.h4, margin: 0, color: theme.colors.text.default }}>
              Quick Question!
            </h3>
            <p style={{ ...theme.typography.bodySmall, margin: 0, color: theme.colors.text.default }}>
              What is the main character of this video?
            </p>
          </>
        ),
      },
      {
        id: 'mid-video-info',
        timestampSeconds: 7, // Interrupt at 7 seconds
        content: (
          <>
            <h3 style={{ ...theme.typography.h4, margin: 0, color: theme.colors.text.default }}>
              Did You Know?
            </h3>
            <p style={{ ...theme.typography.bodySmall, margin: 0, color: theme.colors.text.default }}>
              This video is a popular open-source animation.
            </p>
          </>
        ),
      },
    ],
  },
};
