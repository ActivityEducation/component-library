// src/stories/Spacing.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../theme';
import { SpacingGuide } from '../styleguide/SpacingGuide';

const meta: Meta = {
  title: 'Design System/Spacing',
  component: SpacingGuide, // Pointing to the SpacingGuide component for documentation
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ margin: '3em' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SpacingScale: Story = {
  render: () => (
    <>
      <h3>Spacing Scale</h3>
      <p>Our spacing scale ensures consistent visual rhythm and hierarchy. All spacing values are based on multiples of a base unit (4px for small values, scaling up).</p>
      <SpacingGuide />
    </>
  ),
};
