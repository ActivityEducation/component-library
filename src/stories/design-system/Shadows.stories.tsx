import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../theme';
import { ShadowsGuide } from '../styleguide/ShadowsGuide';

const meta: Meta = {
  title: 'Design System/Shadows',
  component: ShadowsGuide, // Pointing to the ShadowsGuide component for documentation
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

export const SubtleShadows: Story = {
  render: () => (
    <>
      <h3>Subtle Shadows</h3>
      <p>Subtle shadows for depth and visual separation.</p>
      <ShadowsGuide />
    </>
  ),
};
