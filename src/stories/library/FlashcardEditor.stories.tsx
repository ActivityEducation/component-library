import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
// Assuming FlashcardEditor is located at src/components/FlashcardEditor/index.tsx
// Adjust this import path based on your actual component library structure
import FlashcardEditor from '../../components/Editor/Flashcard';

// --- Type Definitions (Duplicate from component for Storybook's context) ---
// These interfaces are necessary for Storybook to understand the component's props.
interface FlashcardContent {
  id: string;
  type: 'text' | 'image';
  value: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface FlashcardData {
  front: FlashcardContent[];
  back: FlashcardContent[];
}

// --- Initial Data for Stories ---
const defaultCardData: FlashcardData = {
  front: [
    { id: 'f1', type: 'text', value: '<p class="text-xl font-medium">What is the capital of <strong class="text-primary-60">France</strong>?</p>', x: 50, y: 50, width: 300, height: 80 },
    { id: 'f2', type: 'image', value: 'https://placehold.co/150x100/ADD8E6/000000?text=Question', x: 100, y: 180, width: 150, height: 100 },
  ],
  back: [
    { id: 'b1', type: 'text', value: '<p class="text-xl font-medium">The capital of France is <strong class="text-secondary-60">Paris</strong>.</p><p class="text-sm text-neutral-60">Known as the City of Love.</p>', x: 50, y: 50, width: 350, height: 120 },
    { id: 'b2', type: 'image', value: 'https://placehold.co/150x100/FFB6C1/000000?text=Answer', x: 200, y: 180, width: 150, height: 100 },
  ],
};

const emptyCardData: FlashcardData = {
  front: [],
  back: [],
};

// --- Storybook Meta Configuration ---
const meta: Meta<typeof FlashcardEditor> = {
  title: 'Components/FlashcardEditor', // Categorizes the component in Storybook UI
  component: FlashcardEditor,
  tags: ['autodocs'], // Enables auto-generated documentation
  parameters: {
    layout: 'fullscreen', // Use fullscreen layout for better demo of complex editor
  },
  argTypes: {
    initialCardData: {
      control: 'object',
      description: 'The initial data for the flashcard (front and back content, including position and size).',
    },
    onSave: {
      action: 'cardSaved', // Logs the event when onSave is called
      description: 'Callback function triggered when the "Save Flashcard" button is clicked.',
    },
    readOnly: {
      control: 'boolean',
      description: 'If true, the editor will be in read-only mode, disabling editing, dragging, and resizing.',
    },
  },
  // Default args applied to all stories unless overridden
  args: {
    onSave: (card) => console.log('Flashcard data saved:', card), // Default action for all stories
  },
};

export default meta;

// --- Individual Stories ---

type Story = StoryObj<typeof FlashcardEditor>;

export const Default: Story = {
  args: {
    initialCardData: defaultCardData,
    readOnly: false,
  },
};

export const ReadOnlyMode: Story = {
  args: {
    initialCardData: defaultCardData,
    readOnly: true,
  },
  name: 'Read-Only Mode', // Custom name for the story in Storybook UI
};

export const EmptyFlashcard: Story = {
  args: {
    initialCardData: emptyCardData,
    readOnly: false,
  },
  name: 'Empty Flashcard',
};

