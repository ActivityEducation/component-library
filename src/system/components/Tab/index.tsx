// src/components/Tab.tsx
// This file defines the Tab component for the AscendUCore Design System.
// Individual tabs are clickable elements within a TabGroup that represent a distinct section or view.

import React, { useState, Children, isValidElement, cloneElement } from 'react';
import styled from '@emotion/styled';
import type { SerializedStyles } from '@emotion/react';

// Define the props interface for the Tab component
interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The content to be rendered inside the tab (e.g., text, icon).
   */
  children: React.ReactNode;
  /**
   * A unique value associated with this tab, used by TabGroup to identify the active tab.
   */
  value: string;
  /**
   * Indicates if this tab is currently active. Managed by the parent TabGroup.
   */
  isActive?: boolean;
  /**
   * Callback function when the tab is clicked. Managed by the parent TabGroup.
   * This prop is renamed from `onSelect` to `onTabSelect` to avoid type conflicts with
   * `React.ButtonHTMLAttributes`.
   * @param value The value of the clicked tab.
   */
  onTabSelect?: (value: string) => void;
  /**
   * Optional Emotion `css` prop for additional custom styles.
   */
  css?: SerializedStyles;
}

// Styled component for the base Tab element
const StyledTab = styled.button<Pick<TabProps, 'isActive'>>`
  // Base styles for all tabs
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.spacing.md} ${(props) => props.theme.spacing.lg};
  border: none;
  background-color: transparent; // Default transparent background
  cursor: pointer;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.body.fontSize};
  font-weight: ${(props) => props.theme.typography.body.fontWeight};
  color: ${(props) => props.theme.colors.text.default}; // Default text color
  transition: ${(props) => props.theme.transitions.default}; // Smooth transitions
  position: relative; // For the active indicator line

  // Hover state for inactive tabs
  &:hover:not(:disabled) {
    color: ${(props) => props.theme.colors.primary['40']}; // Primary color on hover
    background-color: ${(props) => props.theme.colors.neutral['95']}; // Light background on hover
  }

  // Active state styling
  ${(props) =>
    props.isActive &&
    `
    color: ${props.theme.colors.primary['40']}; // Active tab text color
    font-weight: ${props.theme.typography.button.fontWeight}; // Bolder for active tab
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px; // Thickness of the active indicator line
      background-color: ${props.theme.colors.primary['40']}; // Primary color for indicator
      border-radius: ${props.theme.borderRadius.sm} ${props.theme.borderRadius.sm} 0 0; // Rounded top corners
    }
  `}

  // Disabled state styling
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    color: ${(props) => props.theme.colors.neutral['50']};
  }
`;

/**
 * A single Tab component for use within a TabGroup in the AscendUCore Design System.
 * Represents a clickable section with an active state indicator.
 */
export const Tab: React.FC<TabProps> = ({
  children,
  value,
  isActive = false,
  onTabSelect, // Renamed from onSelect
  onClick, // Capture original onClick to allow external override if needed
  ...props
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onTabSelect?.(value); // Notify parent TabGroup using the new prop name
    onClick?.(event); // Call original onClick if provided
  };

  return (
    <StyledTab isActive={isActive} onClick={handleClick} {...props}>
      {children}
    </StyledTab>
  );
};


// Define the props interface for the TabGroup component
interface TabGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The Tab components to be rendered within the group.
   * Only `Tab` children are expected.
   */
  children: React.ReactNode;
  /**
   * The value of the tab that should be active by default.
   * Must match the `value` prop of one of the `Tab` children.
   */
  defaultValue?: string;
  /**
   * The value of the currently active tab (controlled component).
   * If provided, `onValueChange` must also be provided.
   */
  value?: string;
  /**
   * Callback function that is called when the active tab changes.
   * Provides the `value` of the newly active tab.
   */
  onValueChange?: (value: string) => void;
  /**
   * Optional Emotion `css` prop for additional custom styles.
   */
  css?: SerializedStyles;
}

// Styled component for the base TabGroup element
const StyledTabGroup = styled.div`
  // Base styles for the tab group container
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.colors.border.default}; // Separator line below tabs
  background-color: ${(props) => props.theme.colors.background.surface}; // Background for the tab bar
  border-radius: ${(props) => props.theme.borderRadius.md} ${(props) => props.theme.borderRadius.md} 0 0; // Rounded top corners
  overflow-x: auto; // Allow horizontal scrolling if tabs exceed width
  -webkit-overflow-scrolling: touch; // Smooth scrolling on iOS
  white-space: nowrap; // Prevent tabs from wrapping
  box-shadow: ${(props) => props.theme.shadows.sm}; // Subtle shadow for depth
`;

/**
 * A container component for managing a group of `Tab` components in the AscendUCore Design System.
 * It handles the active state of tabs, ensures consistent styling, and provides
 * a mechanism for changing the active tab. Can be used as a controlled or uncontrolled component.
 */
export const TabGroup: React.FC<TabGroupProps> = ({
  children,
  defaultValue,
  value: controlledValue,
  onValueChange,
  ...props
}) => {
  // Manage internal state for uncontrolled component behavior
  const [internalValue, setInternalValue] = useState<string | undefined>(
    controlledValue !== undefined ? controlledValue : defaultValue
  );

  // Determine the actual active value: controlled prop takes precedence
  const activeValue = controlledValue !== undefined ? controlledValue : internalValue;

  // Handler for when a tab is selected
  const handleTabSelect = (selectedValue: string) => {
    if (controlledValue === undefined) {
      // Only update internal state if it's an uncontrolled component
      setInternalValue(selectedValue);
    }
    onValueChange?.(selectedValue); // Always call the onValueChange prop if provided
  };

  return (
    <StyledTabGroup role="tablist" {...props}>
      {/* Iterate over children and inject necessary props into each Tab */}
      {Children.map(children, (child) => {
        if (isValidElement<TabProps>(child) && child.type === Tab) {
          return cloneElement(child, {
            isActive: child.props.value === activeValue, // Set isActive based on current active value
            onTabSelect: handleTabSelect, // Pass the selection handler to the renamed prop
          });
        }
        // Warn if non-Tab children are passed, or render them as is
        console.warn('TabGroup expects only Tab components as children.');
        return child;
      })}
    </StyledTabGroup>
  );
};
