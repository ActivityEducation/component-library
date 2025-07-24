// src/components/Toolbar.tsx
// This file defines the Toolbar component for the AscendUCore Design System.
// A Toolbar is a flexible container used to group related actions or navigation items,
// typically arranged horizontally. It's ideal for headers, footers, or action bars.

import React from 'react';
import styled from '@emotion/styled';
import type { SerializedStyles } from '@emotion/react';

// Define the props interface for the Toolbar component
interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The content to be rendered inside the toolbar. Typically a collection of buttons,
   * links, or other interactive elements.
   */
  children: React.ReactNode;
  /**
   * Defines the horizontal alignment of items within the toolbar.
   * Corresponds to CSS `justify-content` property.
   * @default 'flex-start'
   */
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  /**
   * Optional Emotion `css` prop for additional custom styles.
   */
  css?: SerializedStyles;
}

// Styled component for the base Toolbar element
const StyledToolbar = styled.div<Omit<ToolbarProps, 'children' | 'css'>>`
  // Base styles for the toolbar, drawing from the AscendUCore theme
  display: flex;
  align-items: center; // Vertically align items in the center
  padding: ${(props) => props.theme.spacing.md}; // Consistent padding
  gap: ${(props) => props.theme.spacing.sm};     // Small gap between items
  background-color: ${(props) => props.theme.colors.background.surface}; // Use surface background
  border-radius: ${(props) => props.theme.borderRadius.md};             // Rounded corners
  box-shadow: ${(props) => props.theme.shadows.sm};                     // Subtle shadow

  // Apply justify-content based on prop
  justify-content: ${(props) => props.justifyContent || 'flex-start'};

  // Ensure responsiveness: toolbars should take full width
  width: 100%;
  box-sizing: border-box; // Include padding and border in the element's total width and height
  flex-wrap: wrap; // Allow items to wrap to the next line on smaller screens
`;

/**
 * A flexible Toolbar component for grouping actions or navigation items in the AscendUCore Design System.
 * It provides a consistent visual container and handles horizontal arrangement of its children.
 */
export const Toolbar: React.FC<ToolbarProps> = ({
  children,
  justifyContent = 'flex-start', // Default alignment
  ...props // Pass remaining props to the underlying div element
}) => {
  return (
    <StyledToolbar justifyContent={justifyContent} {...props}>
      {children}
    </StyledToolbar>
  );
};
