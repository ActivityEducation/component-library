// src/stories/BorderRadius.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../theme';
import { BorderRadiusGuide } from '../styleguide/BorderRadiusGuide';

const meta: Meta = {
  title: 'Design System/Border Radius',
  component: BorderRadiusGuide, // Pointing to the BorderRadiusGuide component for documentation
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

export const RoundedCorners: Story = {
  render: () => (
    <>
      <h3>Rounded Corners</h3>
      <p>Consistent rounding for UI elements.</p>
      <BorderRadiusGuide />
    </>
  ),
};
