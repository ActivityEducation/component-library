// src/stories/library/FlashcardModelEditor.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FlashcardModelEditor } from '../../components/Editor/FlashcardModel';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../theme';

const meta: Meta<typeof FlashcardModelEditor> = {
  title: 'Components/FlashcardModelEditor',
  component: FlashcardModelEditor,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    initialModelData: {
      control: 'object',
      description: 'An existing edu:FlashcardModel object to pre-populate the editor.',
    },
    onSave: {
      action: 'saved',
      description: 'Callback triggered when the save button is clicked.',
    },
    readOnly: {
      control: 'boolean',
      description: 'Puts the editor in a read-only state.',
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
type Story = StoryObj<typeof FlashcardModelEditor>;

const sampleModelData = {
  id: 'model_1678886400000',
  name: 'German Vocabulary Card',
  summary: 'A simple card for learning German nouns with their articles.',
  'edu:fields': [
    { id: 'field_1', name: 'German Term', type: 'text' as const },
    { id: 'field_2', name: 'English Translation', type: 'text' as const },
    { id: 'field_3', name: 'Example Image', type: 'image' as const },
  ],
  'edu:cardTemplates': [
    {
      id: 'front',
      name: 'Front' as const,
      layout: [
        { fieldId: 'field_1', x: 50, y: 150, width: 200, height: 60 },
        { fieldId: 'field_3', x: 300, y: 100, width: 250, height: 150 },
      ],
    },
    {
      id: 'back',
      name: 'Back' as const,
      layout: [
        { fieldId: 'field_2', x: 50, y: 150, width: 200, height: 60 },
      ],
    },
  ],
};

export const Default: Story = {
  args: {
    onSave: (model) => console.log('Saved Model:', model),
  },
};

export const WithInitialData: Story = {
  args: {
    initialModelData: sampleModelData,
    onSave: (model) => console.log('Saved Model:', model),
  },
};

export const ReadOnly: Story = {
  args: {
    initialModelData: sampleModelData,
    readOnly: true,
    onSave: (model) => console.log('Saved Model:', model),
  },
};