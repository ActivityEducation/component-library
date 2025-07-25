// src/components/Chart/index.tsx
// This file defines a Chart component for the AscendUCore Design System.
// It uses the Recharts library to render various types of data visualizations,
// including line, bar, and pie charts, with responsive design.

import React from 'react';
import styled from '@emotion/styled';
import type { SerializedStyles } from '@emotion/react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell, // Needed for coloring individual segments in PieChart
} from 'recharts';
import { theme } from '../../theme'; // Import your existing theme
import { Icon } from '../Icon'; // Import the Icon component

// Define possible chart types
export type ChartType = 'line' | 'bar' | 'pie';

// Define props for the Chart component
interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The type of chart to render.
   */
  type: ChartType;
  /**
   * The data for the chart. This should be an array of objects.
   * Example: `[{ name: 'Jan', value: 400 }, { name: 'Feb', value: 300 }]`
   */
  data: Array<any>;
  /**
   * The key from the data objects to be used for the main value (e.g., y-axis for line/bar, slice value for pie).
   */
  dataKey: string;
  /**
   * The key from the data objects to be used for the label (e.g., x-axis for line/bar, slice name for pie).
   */
  nameKey: string;
  /**
   * The title of the chart.
   */
  title?: string;
  /**
   * An optional description for the chart.
   */
  description?: string;
  /**
   * An array of color strings to use for the chart elements (lines, bars, pie slices).
   * These should ideally be from your theme's color palette.
   * If not provided, a default set of theme colors will be used.
   */
  colors?: string[];
  /**
   * The aspect ratio of the chart container (width / height).
   * This is recommended for responsive charts.
   * @default 16 / 9
   */
  aspectRatio?: number;
  /**
   * Optional Emotion `css` prop for additional custom styles for the overall chart container.
   */
  css?: SerializedStyles;
}

// Default colors to use if not provided in props
const defaultChartColors = [
  theme.colors.primary['40'],
  theme.colors.secondary['40'],
  theme.colors.tertiary['40'],
  theme.colors.error['40'],
  theme.colors.primary['60'],
  theme.colors.secondary['60'],
  theme.colors.tertiary['60'],
];

// Styled container for the chart
const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.background.surface};
  border: 1px solid ${theme.colors.border.default};
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.shadows.sm};
  padding: ${theme.spacing.lg};
  width: 100%; /* Take up full width of parent */
  height: 100%; /* Take up full height of parent if parent has defined height */
  box-sizing: border-box;
  flex: 1; /* Allow it to grow and shrink within a flex parent */
  min-height: 200px; /* Ensure a minimum height for the chart */
`;

const ChartTitle = styled.h4`
  ${theme.typography.h5};
  color: ${theme.colors.text.default};
  margin: 0 0 ${theme.spacing.xs} 0;
`;

const ChartDescription = styled.p`
  ${theme.typography.bodySmall};
  color: ${theme.colors.neutral['60']};
  margin: 0 0 ${theme.spacing.md} 0;
`;

const EmptyChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1; /* Allow it to take available height */
  color: ${theme.colors.neutral['60']};
  ${theme.typography.bodySmall};
  text-align: center;
`;

/**
 * A flexible Chart component for the AscendUCore Design System,
 * supporting line, bar, and pie charts using Recharts.
 * It provides basic styling, responsiveness, and empty state handling.
 */
export const Chart: React.FC<ChartProps> = ({
  type,
  data,
  dataKey,
  nameKey,
  title,
  description,
  colors = defaultChartColors,
  aspectRatio = 16 / 9,
  ...props
}) => {
  if (!data || data.length === 0) {
    return (
      <ChartWrapper {...props}>
        {title && <ChartTitle>{title}</ChartTitle>}
        {description && <ChartDescription>{description}</ChartDescription>}
        <EmptyChartContainer>
          <Icon name="fa-solid fa-chart-line" size="xl" />
          <p>No data available to display this chart.</p>
        </EmptyChartContainer>
      </ChartWrapper>
    );
  }

  // Render chart based on type
  const renderChart = () => {
    switch (type) {
      case 'line':
        return (
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={theme.colors.neutral['80']} />
            <XAxis dataKey={nameKey} stroke={theme.colors.neutral['50']} tickLine={false} axisLine={{ stroke: theme.colors.neutral['70'] }} />
            <YAxis stroke={theme.colors.neutral['50']} tickLine={false} axisLine={{ stroke: theme.colors.neutral['70'] }} />
            <Tooltip
              contentStyle={{
                backgroundColor: theme.colors.background.surface,
                borderColor: theme.colors.border.default,
                borderRadius: theme.borderRadius.sm,
                color: theme.colors.text.default,
                fontSize: theme.typography.caption.fontSize,
              }}
              labelStyle={{ color: theme.colors.primary['40'] }}
              itemStyle={{ color: theme.colors.text.default }}
            />
            <Legend wrapperStyle={{ fontSize: theme.typography.caption.fontSize, color: theme.colors.text.default, paddingTop: theme.spacing.sm }} />
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={colors[0]}
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        );
      case 'bar':
        return (
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={theme.colors.neutral['80']} />
            <XAxis dataKey={nameKey} stroke={theme.colors.neutral['50']} tickLine={false} axisLine={{ stroke: theme.colors.neutral['70'] }} />
            <YAxis stroke={theme.colors.neutral['50']} tickLine={false} axisLine={{ stroke: theme.colors.neutral['70'] }} />
            <Tooltip
              contentStyle={{
                backgroundColor: theme.colors.background.surface,
                borderColor: theme.colors.border.default,
                borderRadius: theme.borderRadius.sm,
                color: theme.colors.text.default,
                fontSize: theme.typography.caption.fontSize,
              }}
              labelStyle={{ color: theme.colors.primary['40'] }}
              itemStyle={{ color: theme.colors.text.default }}
            />
            <Legend wrapperStyle={{ fontSize: theme.typography.caption.fontSize, color: theme.colors.text.default, paddingTop: theme.spacing.sm }} />
            <Bar dataKey={dataKey} fill={colors[0]} />
          </BarChart>
        );
      case 'pie':
        // For pie chart, data objects should typically have name and value keys directly
        // colors will be applied to each segment using Cell
        return (
          <PieChart>
            <Pie
              data={data}
              dataKey={dataKey}
              nameKey={nameKey}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill={colors[0]}
              labelLine={false}
              label={({ name, percent }) => `${name} (${(percent! * 100).toFixed(0)}%)`}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: theme.colors.background.surface,
                borderColor: theme.colors.border.default,
                borderRadius: theme.borderRadius.sm,
                color: theme.colors.text.default,
                fontSize: theme.typography.caption.fontSize,
              }}
              itemStyle={{ color: theme.colors.text.default }}
            />
            <Legend wrapperStyle={{ fontSize: theme.typography.caption.fontSize, color: theme.colors.text.default, paddingTop: theme.spacing.sm }} />
          </PieChart>
        );
      default:
        return <EmptyChartContainer>Unsupported chart type: {type}</EmptyChartContainer>;
    }
  };

  return (
    <ChartWrapper {...props}>
      {title && <ChartTitle>{title}</ChartTitle>}
      {description && <ChartDescription>{description}</ChartDescription>}
      {/* ResponsiveContainer should fill the wrapper, it handles internal resizing */}
      <ResponsiveContainer width="100%" height="100%">
        {renderChart()}
      </ResponsiveContainer>
    </ChartWrapper>
  );
};
