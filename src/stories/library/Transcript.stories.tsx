// src/stories/library/Transcript.stories.tsx
// This file defines Storybook stories for the Transcript component.
// It showcases the component with various transcript data and simulated time updates.

import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

// Import the Transcript component and its types
import { Transcript, TranscriptSegment } from '../../components/Transcript';
import { Button, Slider } from '../../'; // For controls
import { theme } from '../../theme';

// Sample transcript data
const longTranscript: TranscriptSegment[] = [
  { id: '1', text: 'Welcome to this introductory course on federated learning platforms.', start: 0, end: 3.5 },
  { id: '2', text: 'In this module, we will cover the core principles of ActivityPub.', start: 3.6, end: 7.2 },
  { id: '3', text: 'Understanding decentralization is key to building robust social networks.', start: 7.3, end: 11.0 },
  { id: '4', text: 'We will explore how different instances can communicate seamlessly.', start: 11.1, end: 14.8 },
  { id: '5', text: 'This enables a vast, interconnected network of educators and learners.', start: 14.9, end: 19.0 },
  { id: '6', text: 'Our platform aims to provide comprehensible input for language acquisition.', start: 19.1, end: 23.5 },
  { id: '7', text: 'You will learn about various activity types, such as posts and replies.', start: 23.6, end: 27.8 },
  { id: '8', text: 'We also discuss how to implement secure server-to-server communications.', start: 27.9, end: 32.5 },
  { id: '9', text: 'Finally, we will look at real-time interaction features.', start: 32.6, end: 35.5 },
  { id: '10', text: 'Thank you for joining this lesson.', start: 35.6, end: 37.0 },
];

const shortTranscript: TranscriptSegment[] = [
  { id: 'a', text: 'Hello, world!', start: 0, end: 1.5 },
  { id: 'b', text: 'This is a short example.', start: 1.6, end: 3.0 },
];

const emptyTranscript: TranscriptSegment[] = [];

// Define the metadata for your Transcript component story
const meta: Meta<typeof Transcript> = {
  title: 'Components/Transcript', // Path in the Storybook sidebar
  component: Transcript,          // The React component to document
  tags: ['autodocs'],               // Enables auto-generated documentation
  parameters: {
    layout: 'padded', // Use padded layout for better visibility
  },
  argTypes: {
    transcript: {
      control: 'object',
      description: 'The array of transcript segments.',
    },
    currentTime: {
      control: { type: 'range', min: 0, max: 40, step: 0.1 }, // Adjust max based on longest transcript duration
      description: 'The current playback time in seconds.',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: theme.spacing.xl, backgroundColor: theme.colors.neutral['95'], display: 'flex', flexDirection: 'column', gap: theme.spacing.lg, width: '100%', maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Transcript>;

// --- Individual Stories ---

// Story with a long transcript and interactive time slider
export const InteractiveTranscript: Story = {
  render: (args) => {
    const [currentTime, setCurrentTime] = useState(args.currentTime || 0);
    const [started, setStarted] = useState(false);
    // Simulate playing through the transcript automatically
    useEffect(() => {
      let intervalId: number;
      if (started && currentTime < longTranscript[longTranscript.length - 1].end + 2) { // Play slightly past end
        intervalId = setInterval(() => {
            setCurrentTime((prevTime) => prevTime + 0.1);
        }, 100); // Update every 100ms
      }
      return () => clearInterval(intervalId);
    }, [currentTime, started]);

    return (
      <>
        <Transcript {...args} transcript={longTranscript} currentTime={currentTime} />
        <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.md }}>
          <Slider
            min={0}
            max={longTranscript[longTranscript.length - 1].end + 5} // Slider max slightly beyond end
            step={0.1}
            value={currentTime}
            onValueChange={(value) => setCurrentTime(value)}
            style={{ flexGrow: 1 }}
          />
          <span style={{ minWidth: '40px', textAlign: 'right', ...theme.typography.bodySmall }}>
            {currentTime.toFixed(1)}s
          </span>
          <Button size="sm" onClick={() => {
            setStarted(false);
            setCurrentTime(0);
          }}>Reset</Button>
          <Button size="sm" onClick={() => {
            setStarted(true);
            setCurrentTime(0)
          }}>Start</Button>
        </div>
      </>
    );
  },
  args: {
    currentTime: 0,
    transcript: longTranscript, // Provide the long transcript for this story
  },
};

// Story with a short transcript
export const ShortTranscript: Story = {
  args: {
    transcript: shortTranscript,
    currentTime: 1.8, // Highlight the second sentence
  },
};

// Story with no transcript data (empty state)
export const EmptyTranscript: Story = {
  args: {
    transcript: emptyTranscript,
    currentTime: 0,
  },
};

// Story with only the first sentence active
export const FirstSentenceActive: Story = {
  args: {
    transcript: longTranscript,
    currentTime: 1.0,
  },
};

// Story with a sentence in the middle active
export const MiddleSentenceActive: Story = {
  args: {
    transcript: longTranscript,
    currentTime: 12.5,
  },
};

// Story with the last sentence active
export const LastSentenceActive: Story = {
  args: {
    transcript: longTranscript,
    currentTime: 36.0,
  },
};
