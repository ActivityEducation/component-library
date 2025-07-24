// stories/WYSIWYGEditor.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { WYSIWYGEditor } from '../../components/Editor';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../theme';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof WYSIWYGEditor> = {
  title: 'Components/WYSIWYGEditor',
  component: WYSIWYGEditor,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the editor when it is empty.',
    },
    initialContent: {
      control: 'text',
      description: 'Optional initial HTML content to load into the editor.',
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ padding: theme.spacing.xl, backgroundColor: theme.colors.background.default }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    placeholder: 'Start writing your story here...',
  },
};

export const WithInitialContent: Story = {
  args: {
    placeholder: 'Start writing your story here...',
    initialContent: `
          <h1>Welcome to Your Story</h1>
          <p>This is a paragraph with <strong>bold</strong>, <em>italic</em>, and <u>underlined</u> text.</p>
          <h2>A Subheading</h2>
          <p>Here's another paragraph. You can try changing its format using the dropdown.</p>
          <ul>
            <li>Bullet list item 1</li>
            <li>Bullet list item 2</li>
          </ul>
          <ol>
            <li>Numbered list item 1</li>
            <li>Numbered list item 2</li>
          </ol>
          <blockquote>This is a blockquote. It's often used for citations or emphasized text.</blockquote>
          <p>You can also insert <a href="https://example.com" target="_blank" rel="noopener noreferrer">links</a>.</p>
          <p style="text-align: center;">This line is centered.</p>
          <p style="text-align: right;">This line is right-aligned.</p>
          <pre><code>function greet() {
  console.log('Hello, WYSIWYG!');
}</code></pre>
        `,
  },
};

export const WithCustomPlaceholder: Story = {
  args: {
    placeholder: 'Enter your assignment details...',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Editor is disabled.',
  },
  render: (args) => {
    return (
      <WYSIWYGEditor
        {...args}
        // To truly disable, you'd make contentEditable false and disable all buttons
        // For demonstration, we'll just show the placeholder with a hint.
        style={{ opacity: 0.7, pointerEvents: 'none' }}
      />
    );
  },
};
