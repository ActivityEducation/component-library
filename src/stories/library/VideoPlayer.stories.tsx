// VideoPlayer.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";

import { VideoPlayer } from "../../components/VideoPlayer";
import { theme } from "../../theme";

const meta: Meta<typeof VideoPlayer> = {
  title: "Components/VideoPlayer",
  component: VideoPlayer,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    src: {
      control: "text",
      description: "The URL of the video source.",
      defaultValue: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    title: {
      control: "text",
      description: "The title of the video, used for accessibility.",
      defaultValue: "Big Buck Bunny Sample",
    },
    autoPlay: {
      control: "boolean",
      description: "If true, the video will start playing automatically.",
      defaultValue: false,
    },
    loop: {
      control: "boolean",
      description: "If true, the video will loop after ending.",
      defaultValue: false,
    },
    muted: {
      control: "boolean",
      description: "If true, the video will be muted by default.",
      defaultValue: false,
    },
    interrupts: {
      control: "object",
      description:
        "An array of interactive interrupt elements to display at specific timestamps.",
    },
    placeholderImage: {
      control: "text",
      description:
        "URL for a placeholder image to display before the video loads or when paused.",
    },
    // ArgTypes for the new callbacks (actions will still show in Storybook UI)
    onPlay: { action: 'play' },
    onPause: { action: 'pause' },
    onPlayerVolumeChange: { action: 'volumeChange' },
    onPlayerTimeUpdate: { action: 'timeUpdate' },
    onFullScreenChange: { action: 'fullScreenChange' },
    onInterruptActive: { action: 'interruptActive' },
    onInterruptDismiss: { action: 'interruptDismiss' },
    onEnded: { action: 'ended' },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: theme.spacing.xl,
          backgroundColor: theme.colors.neutral["95"],
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof VideoPlayer>;

// --- Individual Stories ---

export const Default: Story = {
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Big Buck Bunny Sample",
    autoPlay: false,
  },
};

export const Autoplay: Story = {
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Autoplay Video",
    autoPlay: true,
    muted: true,
  },
};

export const Loop: Story = {
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Looping Video",
    loop: true,
    autoPlay: true,
    muted: true,
  },
};

export const MutedAutoplay: Story = {
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Muted Autoplay Video",
    autoPlay: true,
    muted: true,
  },
};

export const AnotherVideo: Story = {
  args: {
    src: "https://www.w3schools.com/html/movie.mp4", // Another sample video
    title: "The Bear Sample",
  },
};

export const WithInterrupts: Story = {
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4", // Big Buck Bunny is 10 seconds long
    title: "Video with Interrupts",
    autoPlay: false,
    muted: true, // Mute for consistent test environment
    interrupts: [
      {
        id: "intro-question",
        timestampSeconds: 3, // Interrupt at 3 seconds
        content: (
          <>
            <h3
              style={{
                ...theme.typography.h4,
                margin: 0,
                color: theme.colors.text.default,
              }}
            >
              Quick Question!
            </h3>
            <p
              style={{
                ...theme.typography.bodySmall,
                margin: 0,
                color: theme.colors.text.default,
              }}
            >
              What is the main character of this video?
            </p>
          </>
        ),
      },
      {
        id: "mid-video-info",
        timestampSeconds: 7, // Interrupt at 7 seconds
        content: (
          <>
            <h3
              style={{
                ...theme.typography.h4,
                margin: 0,
                color: theme.colors.text.default,
              }}
            >
              Did You Know?
            </h3>
            <p
              style={{
                ...theme.typography.bodySmall,
                margin: 0,
                color: theme.colors.text.default,
              }}
            >
              This video is a popular open-source animation.
            </p>
          </>
        ),
      },
    ],
  },
};

export const ControlsAutoHide: Story = {
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Video with Auto-Hiding Controls",
    autoPlay: true,
    muted: true,
  },
};

export const FullscreenToggle: Story = {
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Fullscreen Test Video",
  },
};

export const WithPlaceholderImage: Story = {
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Video with Placeholder",
    autoPlay: false,
    placeholderImage:
      "https://via.placeholder.com/640x360?text=Video+Placeholder",
  },
};