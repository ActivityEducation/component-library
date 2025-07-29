import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Flashcard } from '../../components/Flashcard';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../theme';

const meta: Meta<typeof Flashcard> = {
  title: 'Components/Flashcard',
  component: Flashcard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    model: {
      control: 'object',
      description: 'The edu:FlashcardModel object that defines the card structure.',
    },
    data: {
      control: 'object',
      description: 'The edu:Flashcard object containing the content.',
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ width: '100%', maxWidth: '633px', margin: 'auto' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Flashcard>;

// --- Sample Data from API ---

const apiModel = {
    id:"http://localhost/api/objects/9ff37253-cb29-4067-b023-0ab8a9b3c156",
    type:"edu:FlashcardModel",
    name:"Test Model",
    summary:"This is a test",
    "edu:fields":[
        {"id":"field_1753767152771","name":"image","type":"image" as const},
        {"id":"field_1753767155974","name":"word","type":"text" as const},
        {"id":"field_1753767159435","name":"category","type":"text" as const}
    ],
    "edu:cardTemplates":[
        {"id":"front","name":"Front","layout":[
            {"fieldId":"field_1753767152771","x":8,"y":64,"width":616,"height":328},
            {"fieldId":"field_1753767159435","x":8,"y":8,"width":168,"height":44}
        ]},
        {"id":"back","name":"Back","layout":[
            {"fieldId":"field_1753767155974","x":8,"y":64,"width":616,"height":328},
            {"fieldId":"field_1753767159435","x":8,"y":8,"width":168,"height":44}
        ]}
    ]
};

const apiFlashcardData = {
    id:"http://localhost/api/objects/9183b06f-d092-4786-913f-bf4faa634fdd",
    type: "edu:Flashcard",
    name:"der Hund",
    "edu:model":"http://localhost/api/objects/9ff37253-cb29-4067-b023-0ab8a9b3c156",
    "edu:fieldsData":{
        "word":"der Hund",
        "image":"https://cdn.duden.de/_media_/full/H/Hund-201100278453.jpg",
        "category":"Noun"
    }
};

// --- Data for Long German Word Story ---

const longWordData = {
    id: 'flashcard_long_word',
    name: 'A long German word for nurse',
    'edu:model': 'model_long_word',
    'edu:fieldsData': {
        "word":'Lebensabschnittsgefährte',
        "image":"data:image/jpeg;base64,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",
        "category":"Noun"
    }
};


export const Flippable: Story = {
  args: {
    model: apiModel,
    data: apiFlashcardData,
  },
};

export const WithLongGermanWord: Story = {
    args: {
        model: apiModel,
        data: longWordData,
    },
};
