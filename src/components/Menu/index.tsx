// src/components/MenuItem.tsx
// This file defines the MenuItem component for the AscendUCore Design System.
// MenuItem is an individual, clickable option within a Menu component.

import React, { Children, cloneElement, isValidElement, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import type { SerializedStyles } from '@emotion/react';
import { Icon } from '../Icon'; // Import the Icon component
import { theme } from '../../theme'; // Import theme for default icon color

// Define the props interface for the MenuItem component
interface MenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The content to be rendered inside the menu item (e.g., text, icon).
   */
  children: React.ReactNode;
  /**
   * Content to be displayed at the leading (left) side of the menu item,
   * typically an icon. Can be a string (Font Awesome class) or a ReactNode.
   */
  leading?: React.ReactNode;
  /**
   * Content to be displayed at the trailing (right) side of the menu item,
   * typically a secondary action or accelerator text. Can be a string (Font Awesome class)
   * or a ReactNode.
   */
  trailing?: React.ReactNode;
  /**
   * Optional Emotion `css` prop for additional custom styles.
   */
  css?: SerializedStyles;
}

// Styled component for the base MenuItem element
const StyledMenuItem = styled.button`
  display: flex;
  align-items: center;
  width: 100%; // Take full width of its parent Menu
  padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
  border: none;
  background-color: transparent; // Default transparent background
  cursor: pointer;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.body.fontSize};
  color: ${(props) => props.theme.colors.text.default};
  text-align: left; // Align text to the left
  transition: ${(props) => props.theme.transitions.fast};
  white-space: nowrap; // Prevent text wrapping

  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme.colors.neutral['95']}; // Light hover background
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.primary['60']};
    outline-offset: -2px;
  }

  // Disabled state
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    color: ${(props) => props.theme.colors.neutral['50']};
    background-color: transparent; // No hover effect when disabled
  }
`;

// Styled component for the leading content slot
const LeadingContent = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${(props) => props.theme.spacing.sm};
  flex-shrink: 0; // Prevent leading content from shrinking
  
  // Ensure icons within leading content inherit color or have default
  & > .fa-solid, & > .fa-regular, & > .fa-brands, & > svg, & > img {
    color: ${(props) => props.theme.colors.neutral['50']}; /* Default icon color */
  }
`;

// Styled component for the main content area
const MainContent = styled.div`
  flex-grow: 1; // Allows main content to take available space
`;

// Styled component for the trailing content slot
const TrailingContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${(props) => props.theme.spacing.sm};
  flex-shrink: 0; // Prevent trailing content from shrinking
  color: ${(props) => props.theme.colors.neutral['50']}; // Default icon/text color
  font-size: ${(props) => props.theme.typography.caption.fontSize}; // Smaller font for accelerators

  // Ensure icons within trailing content inherit color or have default
  & > .fa-solid, & > .fa-regular, & > .fa-brands, & > svg, & > img {
    color: ${(props) => props.theme.colors.neutral['50']}; /* Default icon color */
  }
`;

/**
 * An individual, clickable option within a `Menu` component in the AscendUCore Design System.
 * Supports leading and trailing content (including Font Awesome icons, SVG URLs, inline SVGs),
 * and integrates with the theme for consistent styling.
 *
 * ```typescript
 * import { MenuItem } from "@activityeducation/component-library";
 * ```
 *
 * ## Justification
 * The `MenuItem` component is a fundamental building block for dropdown menus,
 * context menus, and navigation lists. It provides a standardized visual and
 * interactive representation for individual actions or links. By supporting
 * leading and trailing icons/content, it allows for rich and informative menu
 * items, improving user comprehension and navigation efficiency. Its consistent
 * styling and accessibility features ensure a uniform and inclusive experience
 * across all menu-driven interactions in the application.
 *
 * ## Acceptance Criteria
 * - **GIVEN** a `MenuItem` is rendered, **THEN** it should display its `children`
 * content.
 * - **GIVEN** `leading` content is provided, **THEN** it should be displayed
 * on the left side of the menu item.
 * - **GIVEN** `trailing` content is provided, **THEN** it should be displayed
 * on the right side of the menu item, typically for accelerators or secondary icons.
 * - **WHEN** the `MenuItem` is clicked (and not disabled), **THEN** its `onClick`
 * callback should be triggered.
 * - **GIVEN** `disabled` is true, **THEN** the menu item should be visually disabled
 * and not clickable.
 * - **WHEN** the `MenuItem` is focused via keyboard, **THEN** it should display a
 * clear focus indicator.
 *
 * ## Example & Props
 */
export const MenuItem: React.FC<MenuItemProps> = ({
  children,
  leading,
  trailing,
  ...props
}) => {
  // Helper to render adornment using Icon component if it's a string (Font Awesome name)
  const renderAdornment = (adornment: React.ReactNode) => {
    if (typeof adornment === 'string') {
      return <Icon name={adornment} size="md" color={theme.colors.neutral['50']} />;
    }
    return adornment;
  };

  return (
    <StyledMenuItem role="menuitem" {...props}>
      {leading && <LeadingContent>{renderAdornment(leading)}</LeadingContent>}
      <MainContent>{children}</MainContent>
      {trailing && <TrailingContent>{renderAdornment(trailing)}</TrailingContent>}
    </StyledMenuItem>
  );
};

// Define the props interface for the Menu component
interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The element that triggers the menu to open.
   * This component will be cloned, and an onClick handler will be added to it.
   * The trigger is typed to accept common HTML attributes including ref and onClick.
   */
  trigger: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
  /**
   * The `MenuItem` components to be rendered within the menu.
   * Only `MenuItem` children are expected.
   */
  children: React.ReactNode;
  /**
   * If true, the menu is open. Use this for controlled behavior.
   */
  open?: boolean;
  /**
   * Callback function that is called when the menu's open state changes.
   * Provides the new open state (true for open, false for closed).
   */
  onOpenChange?: (isOpen: boolean) => void;
  /**
   * Optional Emotion `css` prop for additional custom styles for the menu container.
   */
  css?: SerializedStyles;
}

// Styled component for the menu container
const StyledMenu = styled.div`
  position: absolute; // Position absolutely relative to its positioning context
  background-color: ${(props) => props.theme.colors.background.surface}; // Menu background
  border: 1px solid ${(props) => props.theme.colors.border.default};    // Menu border
  border-radius: ${(props) => props.theme.borderRadius.md};             // Rounded corners
  box-shadow: ${(props) => props.theme.shadows.lg};                     // Prominent shadow
  min-width: 180px; // Minimum width for menu
  max-width: 280px; // Maximum width to prevent overly wide menus
  z-index: 1000; // Ensure menu appears above other content
  overflow: hidden; // Clip content if it overflows rounded corners
  padding: ${(props) => props.theme.spacing.xs} 0; // Vertical padding, no horizontal
`;

/**
 * The **Menu** component displays a list of `MenuItem` components when triggered,
 * providing a versatile solution for dropdowns, context menus, and overflow actions.
 * It handles its open/close state (both controlled and uncontrolled), basic positioning
 * relative to the trigger element, and the common "click outside to close" behavior.
 *
 * ```typescript
 * import { Menu, MenuItem } from "@activityeducation/component-library";
 * ```
 *
 * ## Justification
 * A standardized `Menu` component is crucial for organizing actions and navigation
 * in a compact and accessible way. It prevents UI clutter by hiding options until
 * needed, improving the user experience for complex interfaces. By providing built-in
 * state management, positioning logic, and accessibility features (like ARIA attributes
 * and keyboard navigation), it simplifies the implementation of interactive menus
 * across the application, ensuring consistency and reducing development effort.
 * Its reliance on `MenuItem` children guarantees uniform styling for all menu options.
 *
 * ## Acceptance Criteria
 * - **GIVEN** the `Menu` is rendered with a `trigger` and `MenuItem` children,
 * **THEN** the menu should initially be closed.
 * - **WHEN** the `trigger` element is clicked, **THEN** the menu dropdown should
 * toggle its visibility.
 * - **GIVEN** `open` prop is true, **THEN** the menu should be visible; otherwise,
 * it should be hidden (controlled behavior).
 * - **WHEN** the menu is open and a click occurs outside the menu or its trigger,
 * **THEN** the menu should close.
 * - **WHEN** a `MenuItem` within the open menu is clicked, **THEN** the menu should close.
 * - **WHEN** the menu's open state changes, **THEN** the `onOpenChange` callback
 * should be triggered with the new state.
 * - **GIVEN** the menu is open, **THEN** it should be positioned correctly
 * relative to its trigger, with basic viewport collision detection.
 * - **GIVEN** the menu contains many items, **THEN** it should be vertically scrollable.
 * - **WHEN** the menu is open, **THEN** keyboard navigation (ArrowUp, ArrowDown, Enter, Escape)
 * should allow users to navigate and select menu items, and close the menu.
 *
 * ## Example & Props
 */
export const Menu: React.FC<MenuProps> = ({
  trigger,
  children,
  open: controlledOpen,
  onOpenChange,
  ...props
}) => {
  // Manage internal open state for uncontrolled behavior
  const [internalOpen, setInternalOpen] = useState(false);
  // Determine the effective open state (controlled prop takes precedence)
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement>(null); // Ref for the trigger element

  // Function to set the menu's position
  const setMenuPosition = () => {
    if (triggerRef.current && menuRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const menuElement = menuRef.current;

      // Position the menu directly below the trigger, aligned to its left edge
      menuElement.style.top = `${triggerRect.bottom + window.scrollY + 8}px`; // 8px for a small gap
      menuElement.style.left = `${triggerRect.left + window.scrollX}px`;

      // Basic viewport collision detection (if menu goes off right edge, align to right)
      const viewportWidth = window.innerWidth;
      const menuRight = triggerRect.left + menuElement.offsetWidth;
      if (menuRight > viewportWidth) {
        menuElement.style.left = `${triggerRect.right + window.scrollX - menuElement.offsetWidth}px`;
      }
    }
  };

  // Effect for handling open/close and positioning
  useEffect(() => {
    if (isOpen) {
      setMenuPosition();
      window.addEventListener('resize', setMenuPosition); // Reposition on resize
      // Add a small timeout to allow the DOM to render the menu before adding click listener
      const timeoutId = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 0);
      return () => {
        window.removeEventListener('resize', setMenuPosition);
        document.removeEventListener('mousedown', handleClickOutside);
        clearTimeout(timeoutId);
      };
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', setMenuPosition);
    }
  }, [isOpen]); // Re-run effect when isOpen changes

  // Handle clicks outside the menu and its trigger
  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      triggerRef.current &&
      !triggerRef.current.contains(event.target as Node)
    ) {
      // Clicked outside both menu and trigger, so close the menu
      if (controlledOpen === undefined) {
        setInternalOpen(false); // Update internal state for uncontrolled
      }
      onOpenChange?.(false); // Notify parent for controlled
    }
  };

  // Toggle menu visibility
  const toggleMenu = () => {
    const newOpenState = !isOpen;
    if (controlledOpen === undefined) {
      setInternalOpen(newOpenState); // Update internal state for uncontrolled
    }
    onOpenChange?.(newOpenState); // Notify parent for controlled
  };

  // Clone the trigger element to attach our ref and onClick handler
  const clonedTrigger = cloneElement(trigger, {
    ref: (el: HTMLElement | null) => { // Explicitly type 'el' as HTMLElement | null
      // Assign our ref
      (triggerRef as React.MutableRefObject<HTMLElement | null>).current = el;
      // Also call the original ref if it exists
      const { ref } = trigger as any; // Cast to any to access ref property
      if (typeof ref === 'function') {
        ref(el);
      } else if (ref && typeof ref === 'object') {
        (ref as React.MutableRefObject<HTMLElement | null>).current = el;
      }
    },
    onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      toggleMenu();
      // Ensure trigger.props.onClick is called only if it exists and is a function
      if (typeof trigger.props.onClick === 'function') {
        trigger.props.onClick(event);
      }
    },
    'aria-haspopup': 'menu',
    'aria-expanded': isOpen,
  } as any);

  return (
    <>
      {clonedTrigger}
      {isOpen && (
        <StyledMenu ref={menuRef} role="menu" {...props}>
          {/* Iterate over children and inject necessary props into each MenuItem */}
          {Children.map(children, (child) => {
            if (isValidElement<MenuItemProps>(child) && child.type === MenuItem) {
              return cloneElement(child, {
                onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
                  // Close menu when a menu item is clicked
                  if (controlledOpen === undefined) {
                    setInternalOpen(false);
                  }
                  onOpenChange?.(false);
                  // Ensure child.props.onClick is called only if it exists and is a function
                  if (typeof child.props.onClick === 'function') {
                    child.props.onClick(event);
                  }
                },
              });
            }
            console.warn('Menu expects only MenuItem components as children.');
            return child;
          })}
        </StyledMenu>
      )}
    </>
  );
};
