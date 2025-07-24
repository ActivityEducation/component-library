// This file defines Storybook stories for the Table component of the AscendUCore UI Kit.
// It showcases various configurations and content arrangements for tabular data.

import type { Meta, StoryObj } from '@storybook/react';

// Import the Table component and its sub-components, and the theme
import { Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell } from '../../components/Table';
import { theme } from '../../theme';

// Define sample data for the table stories
const sampleData = [
  { id: 1, course: 'ActivityPub Basics', instructor: 'Alice Smith', progress: '75%', status: 'In Progress' },
  { id: 2, course: 'Decentralized Identity', instructor: 'Bob Johnson', progress: '100%', status: 'Completed' },
  { id: 3, course: 'Federated Learning', instructor: 'Charlie Brown', progress: '20%', status: 'Not Started' },
  { id: 4, course: 'Web3 & Education', instructor: 'Diana Prince', progress: '50%', status: 'In Progress' },
];

// Define the metadata for your Table component story
const meta: Meta<typeof Table> = {
  title: 'Components/Table', // Path in the Storybook sidebar
  component: Table,          // The main component to document
  tags: ['autodocs'],         // Enables auto-generated documentation
  parameters: {
    layout: 'padded', // Use padded layout for better visibility
  },
  argTypes: {
    children: {
      control: false, // Children are defined directly in stories
    },
    striped: {
      control: 'boolean',
      description: 'If true, applies alternating background colors to table rows.',
      defaultValue: false,
    },
    bordered: {
      control: 'boolean',
      description: 'If true, applies borders to all cells.',
      defaultValue: false,
    },
  },
  // Decorator to wrap stories with the ThemeProvider
  decorators: [
    (Story) => (
      <div style={{ padding: theme.spacing.xl, backgroundColor: theme.colors.neutral['95'], width: '100%' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Table>;

// --- Individual Stories ---

// Default Table Story
export const Default: Story = {
  args: {
    children: (
      <>
        <TableHead>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Course Title</TableHeaderCell>
            <TableHeaderCell>Instructor</TableHeaderCell>
            <TableHeaderCell>Progress</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sampleData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.course}</TableCell>
              <TableCell>{row.instructor}</TableCell>
              <TableCell>{row.progress}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </>
    ),
  },
};

// Striped Table Story
export const Striped: Story = {
  args: {
    striped: true,
    children: (
      <>
        <TableHead>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Course Title</TableHeaderCell>
            <TableHeaderCell>Instructor</TableHeaderCell>
            <TableHeaderCell>Progress</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sampleData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.course}</TableCell>
              <TableCell>{row.instructor}</TableCell>
              <TableCell>{row.progress}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </>
    ),
  },
};

// Bordered Table Story
export const Bordered: Story = {
  args: {
    bordered: true,
    children: (
      <>
        <TableHead>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Course Title</TableHeaderCell>
            <TableHeaderCell>Instructor</TableHeaderCell>
            <TableHeaderCell>Progress</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sampleData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.course}</TableCell>
              <TableCell>{row.instructor}</TableCell>
              <TableCell>{row.progress}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </>
    ),
  },
};

// Striped and Bordered Table Story
export const StripedAndBordered: Story = {
  args: {
    striped: true,
    bordered: true,
    children: (
      <>
        <TableHead>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Course Title</TableHeaderCell>
            <TableHeaderCell>Instructor</TableHeaderCell>
            <TableHeaderCell>Progress</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sampleData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.course}</TableCell>
              <TableCell>{row.instructor}</TableCell>
              <TableCell>{row.progress}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </>
    ),
  },
};

// Empty State Table Story
export const EmptyState: Story = {
  args: {
    children: (
      <>
        <TableHead>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Course Title</TableHeaderCell>
            <TableHeaderCell>Instructor</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell colSpan={3} style={{ textAlign: 'center', padding: theme.spacing.xl, color: theme.colors.neutral['60'] }}>
              No data available.
            </TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
};
