// src/stories/Typography.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../theme';

const meta: Meta = {
  title: 'Design System/Typography',
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

export const Font_Family: Story = {
  render: () => (
    <>
      <h3>Font Family</h3>
      <p style={{ fontFamily: theme.typography.fontFamily, fontSize: theme.typography.body.fontSize, color: theme.colors.text.default }}>
        `{theme.typography.fontFamily}`
      </p>
    </>
  ),
};

export const Headings: Story = {
  render: () => (
    <>
      <h3>Headings</h3>
      <h1 style={{ ...theme.typography.h1, color: theme.colors.text.default }}>H1 Heading - The Quick Brown Fox Jumps Over The Lazy Dog</h1>
      <p style={{ fontSize: theme.typography.bodySmall.fontSize, color: theme.colors.neutral['60'] }}>
        `h1`: fontSize: {theme.typography.h1.fontSize}, fontWeight: {theme.typography.h1.fontWeight}, lineHeight: {theme.typography.h1.lineHeight}
      </p>

      <h2 style={{ ...theme.typography.h2, color: theme.colors.text.default }}>H2 Heading - The Quick Brown Fox Jumps Over The Lazy Dog</h2>
      <p style={{ fontSize: theme.typography.bodySmall.fontSize, color: theme.colors.neutral['60'] }}>
        `h2`: fontSize: {theme.typography.h2.fontSize}, fontWeight: {theme.typography.h2.fontWeight}, lineHeight: {theme.typography.h2.lineHeight}
      </p>

      <h3 style={{ ...theme.typography.h3, color: theme.colors.text.default }}>H3 Heading - The Quick Brown Fox Jumps Over The Lazy Dog</h3>
      <p style={{ fontSize: theme.typography.bodySmall.fontSize, color: theme.colors.neutral['60'] }}>
        `h3`: fontSize: {theme.typography.h3.fontSize}, fontWeight: {theme.typography.h3.fontWeight}, lineHeight: {theme.typography.h3.lineHeight}
      </p>

      <h4 style={{ ...theme.typography.h4, color: theme.colors.text.default }}>H4 Heading - The Quick Brown Fox Jumps Over The Lazy Dog</h4>
      <p style={{ fontSize: theme.typography.bodySmall.fontSize, color: theme.colors.neutral['60'] }}>
        `h4`: fontSize: {theme.typography.h4.fontSize}, fontWeight: {theme.typography.h4.fontWeight}, lineHeight: {theme.typography.h4.lineHeight}
      </p>

      <h5 style={{ ...theme.typography.h5, color: theme.colors.text.default }}>H5 Heading - The Quick Brown Fox Jumps Over The Lazy Dog</h5>
      <p style={{ fontSize: theme.typography.bodySmall.fontSize, color: theme.colors.neutral['60'] }}>
        `h5`: fontSize: {theme.typography.h5.fontSize}, fontWeight: {theme.typography.h5.fontWeight}, lineHeight: {theme.typography.h5.lineHeight}
      </p>

      <h6 style={{ ...theme.typography.h6, color: theme.colors.text.default }}>H6 Heading - The Quick Brown Fox Jumps Over The Lazy Dog</h6>
      <p style={{ fontSize: theme.typography.bodySmall.fontSize, color: theme.colors.neutral['60'] }}>
        `h6`: fontSize: {theme.typography.h6.fontSize}, fontWeight: {theme.typography.h6.fontWeight},
        lineHeight: {theme.typography.h6.lineHeight}
      </p>
    </>
  ),
};

export const Body_Text: Story = {
  render: () => (
    <>
      <h3>Body Text</h3>
      <p style={{ ...theme.typography.body, color: theme.colors.text.default }}>
        This is an example of the default body text.
        It is used for the majority of the content, ensuring readability for extended passages.
        The quick brown fox jumps over the lazy dog.
      </p>
      <p style={{ fontSize: theme.typography.bodySmall.fontSize, color: theme.colors.neutral['60'] }}>
        `body`: fontSize: {theme.typography.body.fontSize}, fontWeight: {theme.typography.body.fontWeight}, lineHeight: {theme.typography.body.lineHeight}
      </p>

      <p style={{ ...theme.typography.bodySmall, color: theme.colors.text.default }}>
        This is an example of small body text.
        It is suitable for secondary information, captions, or less prominent content. The quick brown fox jumps over the lazy dog.
      </p>
      <p style={{ fontSize: theme.typography.caption.fontSize, color: theme.colors.neutral['60'] }}>
        `bodySmall`: fontSize: {theme.typography.bodySmall.fontSize}, fontWeight: {theme.typography.bodySmall.fontWeight}, lineHeight: {theme.typography.bodySmall.lineHeight}
      </p>

      <p style={{ ...theme.typography.caption, color: theme.colors.text.default }}>
        This is an example of caption text.
        It is used for very small text, like footnotes or timestamps. The quick brown fox jumps over the lazy dog.
      </p>
      <p style={{ fontSize: theme.typography.caption.fontSize, color: theme.colors.neutral['60'] }}>
        `caption`: fontSize: {theme.typography.caption.fontSize}, fontWeight: {theme.typography.caption.fontWeight}, lineHeight: {theme.typography.caption.lineHeight}
      </p>
    </>
  ),
};
