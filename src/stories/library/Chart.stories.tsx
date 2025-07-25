// stories/Chart.stories.tsx
// This file defines Storybook stories for the Chart component of the AscendUCore UI Kit.
// It showcases different types of charts with sample data and demonstrates responsiveness.

import type { Meta, StoryObj } from '@storybook/react';

// Import the Chart component and other necessary components/theme
import { Chart } from '../../components/Chart';
import { Card } from '../../components/Card'; // Assuming Card might be a parent in usage
import { theme } from '../../theme';

// Sample Data for Charts
const lineChartData = [
  { name: 'Jan', 'Course Progress': 4000, 'Assignments Done': 2400 },
  { name: 'Feb', 'Course Progress': 3000, 'Assignments Done': 1398 },
  { name: 'Mar', 'Course Progress': 2000, 'Assignments Done': 9800 },
  { name: 'Apr', 'Course Progress': 2780, 'Assignments Done': 3908 },
  { name: 'May', 'Course Progress': 1890, 'Assignments Done': 4800 },
  { name: 'Jun', 'Course Progress': 2390, 'Assignments Done': 3800 },
  { name: 'Jul', 'Course Progress': 3490, 'Assignments Done': 4300 },
];

const barChartData = [
  { name: 'Module A', 'Score': 75 },
  { name: 'Module B', 'Score': 90 },
  { name: 'Module C', 'Score': 60 },
  { name: 'Module D', 'Score': 85 },
];

const pieChartData = [
  { name: 'Completed', value: 300 },
  { name: 'In Progress', value: 150 },
  { name: 'Not Started', value: 50 },
];

// Define the metadata for your Chart component story
const meta: Meta<typeof Chart> = {
  title: 'Components/Chart', // Path in the Storybook sidebar
  component: Chart,          // The React component to document
  tags: ['autodocs'],         // Enables auto-generated documentation
  parameters: {
    layout: 'padded', // Use padded layout for better visibility
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['line', 'bar', 'pie'],
      description: 'The type of chart to render.',
      defaultValue: 'line',
    },
    data: {
      control: 'object',
      description: 'The data for the chart.',
    },
    dataKey: {
      control: 'text',
      description: 'The key from the data objects to be used for the main value.',
    },
    nameKey: {
      control: 'text',
      description: 'The key from the data objects to be used for the label.',
    },
    title: {
      control: 'text',
      description: 'The title of the chart.',
      defaultValue: 'Sample Chart',
    },
    description: {
      control: 'text',
      description: 'An optional description for the chart.',
    },
    colors: {
      control: 'object',
      description: 'An array of color strings for the chart elements.',
    },
    aspectRatio: {
      control: { type: 'number', min: 0.1, step: 0.1 },
      description: 'The aspect ratio (width / height) of the chart container.',
      defaultValue: 16 / 9,
    },
  },
  // Decorator to wrap stories with the ThemeProvider and provide a fixed size container
  decorators: [
    (Story) => (
      <div style={{
        padding: theme.spacing.xl,
        backgroundColor: theme.colors.background.default,
        width: '100%',
        maxWidth: '700px', // Max width for the story container
        height: '400px', // Explicit height for the story container
        display: 'flex', // Make it a flex container
        flexDirection: 'column', // Orient children vertically
        boxSizing: 'border-box', // Include padding in width/height
      }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Chart>;

// --- Individual Stories ---

// Line Chart Story
export const LineChartStory: Story = {
  args: {
    type: 'line',
    title: 'Monthly Course Progress',
    description: 'Track your progress and completed assignments over time.',
    data: lineChartData,
    dataKey: 'Course Progress',
    nameKey: 'name',
    colors: [theme.colors.primary['40']], // Example single color for line
  },
};

// Bar Chart Story
export const BarChartStory: Story = {
  args: {
    type: 'bar',
    title: 'Module Scores',
    description: 'Average scores for recent modules.',
    data: barChartData,
    dataKey: 'Score',
    nameKey: 'name',
    colors: [theme.colors.secondary['40']], // Example single color for bars
  },
};

// Pie Chart Story
export const PieChartStory: Story = {
  args: {
    type: 'pie',
    title: 'Content Completion Status',
    description: 'Breakdown of your learning content status.',
    data: pieChartData,
    dataKey: 'value',
    nameKey: 'name',
    colors: [
      theme.colors.secondary['60'],   // Completed
      theme.colors.primary['40'],     // In Progress
      theme.colors.neutral['60'],     // Not Started
    ],
  },
};

// Multi-Series Line Chart (if data supports it)
export const MultiSeriesLineChart: Story = {
  args: {
    type: 'line',
    title: 'Comparative Progress',
    description: 'Comparing course progress and assignments over months.',
    data: lineChartData,
    dataKey: 'Course Progress', // Primary data key
    nameKey: 'name',
    // For multi-series, Recharts automatically picks up other keys if they exist in data.
    // If you explicitly wanted to show multiple lines, you'd render multiple <Line> components
    // inside the Chart component's render method or define a 'series' prop.
    // For this story, we'll assume Recharts handles simple multi-key data for default lines.
    // You might need to adjust the Chart component to explicitly render multiple lines/bars.
    // However, as per Chart component's current implementation, it only renders one line/bar.
    // To properly demonstrate multi-series, the Chart component itself would need a 'series' prop.
    // For now, let's keep it simple and ensure the primary line shows.
    colors: [theme.colors.primary['40'], theme.colors.secondary['40']],
  },
};

// Empty State Chart
export const EmptyChart: Story = {
  args: {
    type: 'bar', // Can be any type
    title: 'No Data Chart',
    description: 'This chart shows an empty state when no data is provided.',
    data: [], // Empty data array
    dataKey: 'value',
    nameKey: 'name',
  },
};

// Chart with custom aspect ratio
export const CustomAspectRatio: Story = {
  args: {
    type: 'bar',
    title: 'Custom Aspect Ratio Chart',
    description: 'This chart has a 2:1 aspect ratio (wider).',
    data: barChartData,
    dataKey: 'Score',
    nameKey: 'name',
    aspectRatio: 2, // 2:1 aspect ratio
  },
};
