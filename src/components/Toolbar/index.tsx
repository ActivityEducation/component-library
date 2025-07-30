// src/components/Toolbar.tsx
// This file defines the Toolbar component for the AscendUCore Design System.
// A Toolbar is a flexible container used to group related actions or navigation items,
// typically arranged horizontally. It's ideal for headers, footers, or action bars.

import React from 'react';
import styled from '@emotion/styled';
import { css, type SerializedStyles } from '@emotion/react';

// Define the props interface for the Toolbar component
interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Defines the horizontal alignment of toolbar items.
   * Uses CSS `justify-content` property.
   * @default 'flex-start'
   */
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  /**
   * Optional Emotion `css` prop for additional custom styles for the outer container.
   */
  css?: SerializedStyles;
  /**
   * The content to be rendered inside the toolbar, typically `Button` or `ToolbarGroup` components.
   */
  children: React.ReactNode;
}

// Styled component for the main Toolbar container
const StyledToolbar = styled.div<Omit<ToolbarProps, 'children' | 'css'>>`
  display: flex;
  gap: ${(props) => props.theme.spacing.sm}; /* Default gap between items */
  padding: ${(props) => props.theme.spacing.xs} ${(props) => props.theme.spacing.md};
  background: ${(props) => props.theme.colors.background.toolbar};
  min-height: 64px; /* Standard height for toolbars */
  align-items: center;
  flex-direction: row;

  ${(props) =>
    props.justifyContent &&
    css`
      justify-content: ${props.justifyContent};
    `}
`;

/**
 * The **Toolbar** component provides a flexible container for grouping actions, controls,
 * or navigation items. It is designed to arrange its children horizontally and is
 * ideal for use in headers, footers, or action bars within an application.
 *
 * ```typescript
 * import { Toolbar } from "@activityeducation/component-library";
 * ```
 *
 * ## Justification
 * A standardized `Toolbar` component is essential for maintaining a consistent and
 * intuitive user interface across different parts of an application. It ensures that
 * related actions are visually grouped and easily accessible, improving user efficiency
 * and reducing cognitive load. By encapsulating layout and styling concerns, it allows
 * developers to focus on the functionality of the actions themselves, accelerating
 * development and simplifying maintenance. Its flexibility in content arrangement
 * (e.g., `justifyContent` options) makes it adaptable to various UI patterns, from
 * simple button groups to complex navigation headers.
 *
 * ## Acceptance Criteria
 * - **GIVEN** the `Toolbar` component is rendered, **THEN** its children should be
 * arranged horizontally.
 * - **GIVEN** `justifyContent` prop is set, **THEN** the items within the toolbar
 * should align horizontally according to the specified value (`flex-start`, `flex-end`, `center`, etc.).
 * - **GIVEN** multiple `Button` components are placed directly inside the `Toolbar`,
 * **THEN** they should have a default spacing between them.
 * - **GIVEN** `ToolbarGroup` components are used within the `Toolbar`, **THEN** they
 * should visually separate groups of actions (e.g., with a border).
 * - **GIVEN** the `Toolbar` contains mixed content (e.g., text and buttons), **THEN**
 * all content should be vertically aligned in the center.
 *
 * ## Example & Props
 */
export const Toolbar: React.FC<ToolbarProps> = ({ justifyContent = 'flex-start', children, ...props }) => {
  return (
    <StyledToolbar justifyContent={justifyContent} {...props}>
      {children}
    </StyledToolbar>
  );
};

// Define the props interface for the ToolbarGroup component
export interface ToolbarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Optional Emotion `css` prop for additional custom styles for the outer container.
   */
  css?: SerializedStyles;
  /**
   * The content to be rendered inside the toolbar group, typically `Button` components.
   */
  children: React.ReactNode;
}

// Styled component for grouping items within a Toolbar
export const ToolbarGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs}; /* Smaller gap within a group */
  padding: 0 ${(props) => props.theme.spacing.sm}; /* Padding inside group */
  border-right: 1px solid ${(props) => props.theme.colors.border.default}; /* Separator */
  
  &:last-of-type {
    border-right: none; /* No separator after the last group */
  }
`;
