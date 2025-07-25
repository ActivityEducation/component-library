// This file defines the ListItem component for the AscendUCore Design System.
// ListItem is an individual item within a List component, designed to display
// content, and optionally leading/trailing elements, with interactive states.

import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

import { theme } from '../../theme';
import { Icon } from '../Icon';

// Define the props interface for the ListItem component
interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  /**
   * The main content to be rendered inside the list item.
   */
  children: React.ReactNode;
  /**
   * Content to be displayed at the leading (left) side of the list item,
   * typically an icon, avatar, or checkbox. Can be a string (Font Awesome class)
   * or a ReactNode.
   */
  leading?: React.ReactNode;
  /**
   * Content to be displayed at the trailing (right) side of the list item,
   * typically a secondary action, text, or badge. Can be a string (Font Awesome class)
   * or a ReactNode.
   */
  trailing?: React.ReactNode;
  /**
   * If true, the list item will have a hover effect, indicating it's interactive.
   * @default false
   */
  interactive?: boolean;
  /**
   * If true, the list item will be disabled, preventing interaction.
   * @default false
   */
  disabled?: boolean;
  /**
   * Optional Emotion `css` prop for additional custom styles.
   */
  css?: SerializedStyles;
}

// Styled component for the base ListItem element
const StyledListItem = styled.li<Pick<ListItemProps, 'interactive' | 'disabled'>>`
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.spacing.md} ${(props) => props.theme.spacing.lg};
  border-bottom: 1px solid ${(props) => props.theme.colors.border.default};
  background-color: ${(props) => props.theme.colors.background.surface};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.body.fontSize};
  color: ${(props) => props.theme.colors.text.default};
  transition: ${(props) => props.theme.transitions.fast};

  &:last-child {
    border-bottom: none; // No border after the last item
  }

  // Interactive state
  ${(props) =>
    props.interactive &&
    css`
      cursor: pointer;
      &:hover {
        background-color: ${props.theme.colors.neutral['95']}; // Light hover background
      }
    `}

  // Disabled state
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      background-color: ${props.theme.colors.neutral['98']}; // Slightly darker disabled background
      color: ${props.theme.colors.neutral['50']};
      ${props.interactive && 'pointer-events: none;'} // Disable pointer events if interactive
    `}
`;

// Styled component for the leading content slot
const LeadingContent = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${(props) => props.theme.spacing.md};
  flex-shrink: 0; // Prevent leading content from shrinking
  
  // Ensure icons within leading content inherit color or have default
  & > .fa-solid, & > .fa-regular, & > .fa-brands, & > svg, & > img {
    color: ${(props) => props.theme.colors.neutral['50']}; /* Default icon color */
  }
`;

// Styled component for the main content area
const MainContent = styled.div`
  flex-grow: 1; // Allows main content to take available space
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// Styled component for the trailing content slot
const TrailingContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${(props) => props.theme.spacing.md};
  flex-shrink: 0; // Prevent trailing content from shrinking
  
  // Ensure icons within trailing content inherit color or have default
  & > .fa-solid, & > .fa-regular, & > .fa-brands, & > svg, & > img {
    color: ${(props) => props.theme.colors.neutral['50']}; /* Default icon color */
  }
`;

/**
 * An individual item component for use within a `List` in the AscendUCore Design System.
 * It supports leading and trailing content, interactive states, and integrates with the theme.
 * Leading/trailing content can be Font Awesome icon names (strings), SVG URLs, inline SVGs, or any ReactNode.
 */
export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(({ // Wrap with forwardRef
  children,
  leading,
  trailing,
  interactive = false,
  disabled = false,
  onClick,
  ...props
}, ref) => { // Receive the ref
  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    if (interactive && !disabled && onClick) {
      onClick(event);
    }
  };

  // Helper to render adornment using Icon component if it's a string (Font Awesome name)
  const renderAdornment = (adornment: React.ReactNode) => {
    if (typeof adornment === 'string') {
      return <Icon name={adornment} size="md" color={disabled ? theme.colors.neutral['50'] : theme.colors.neutral['50']} />;
    }
    return adornment;
  };

  return (
    <StyledListItem
      ref={ref} // Pass the ref to the styled component
      interactive={interactive}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {leading && <LeadingContent>{renderAdornment(leading)}</LeadingContent>}
      <MainContent>{children}</MainContent>
      {trailing && <TrailingContent>{renderAdornment(trailing)}</TrailingContent>}
    </StyledListItem>
  );
});

// Define the props interface for the List component
interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  /**
   * The `ListItem` components to be rendered within the list.
   * Only `ListItem` children are expected.
   */
  children: React.ReactNode;
  /**
   * Optional Emotion `css` prop for additional custom styles.
   */
  css?: SerializedStyles;
}

// Styled component for the base List element (unordered list)
const StyledList = styled.ul`
  // Base styles for the list container
  list-style: none; // Remove default list bullets
  margin: 0;
  padding: 0;
  background-color: ${(props) => props.theme.colors.background.surface}; // Consistent background
  border-radius: ${(props) => props.theme.borderRadius.md};             // Rounded corners
  box-shadow: ${(props) => props.theme.shadows.sm};                     // Subtle shadow
  overflow: hidden; // Ensures rounded corners apply to children borders
  width: 100%;
  /* Removed max-width to allow the list to fill its parent's width */
  box-sizing: border-box;
`;

/**
 * A container component for displaying a collection of `ListItem` components
 * in the AscendUCore Design System. It provides a consistent visual structure
 * for lists of content.
 */
export const List: React.FC<ListProps> = ({
  children,
  ...props
}) => {
  return (
    <StyledList {...props}>
      {children}
    </StyledList>
  );
};
