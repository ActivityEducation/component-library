// src/components/Sidenav.tsx
// This file defines the Sidenav and SidenavContainer components for the AscendUCore Design System.
// A Sidenav (or sidebar) is a navigation container that slides in from the side of the screen.
// It can be used for primary navigation, secondary content, or temporary panels.

import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from '@emotion/styled';
import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

// --- SidenavContainer Component ---
// This component acts as the main wrapper for the Sidenav and its content.
// It sets up the flex layout and ensures proper positioning for the Sidenav.

interface SidenavContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the Sidenav container. Typically includes the Sidenav and the main content.
   */
  children: React.ReactNode;
  /**
   * Optional Emotion `css` prop for additional custom styles.
   */
  css?: SerializedStyles;
}

const StyledSidenavContainer = styled.div`
  display: flex;
  flex-direction: row; // Sidenav and content side-by-side
  height: 100%; // Take full height of parent
  width: 100%; // Take full width of parent
  overflow: hidden; // Hide content that overflows during Sidenav transition
  position: relative; // For positioning the overlay
`;

/**
 * The **SidenavContainer** component is a layout wrapper specifically designed
 * to house a `Sidenav` and its associated main content (`SidenavContent`).
 * It establishes the necessary flexbox context to correctly position the sidenav
 * and manage content flow, whether the sidenav is in 'side' or 'over' mode.
 *
 * ```typescript
 * import { SidenavContainer } from "@activityeducation/component-library";
 * ```
 *
 * ## Justification
 * This container is crucial for implementing a consistent and responsive side
 * navigation pattern. By providing a dedicated layout context, it simplifies
 * the positioning and animation of the sidenav, ensuring it integrates
 * seamlessly with the main application content. It manages overflow and
 * relative positioning, preventing layout shifts and ensuring a smooth user
 * experience when the sidenav opens or closes.
 *
 * ## Acceptance Criteria
 * - **GIVEN** `SidenavContainer` is rendered, **THEN** it should establish a
 * flex row layout for its children.
 * - **GIVEN** `Sidenav` and `SidenavContent` are placed inside, **THEN** it
 * should correctly manage their layout and overflow.
 * - **GIVEN** the container, **THEN** it should take up the full height and
 * width of its parent to provide a consistent layout area.
 *
 * ## Example & Props
 */
export const SidenavContainer: React.FC<SidenavContainerProps> = ({
  children,
  ...props
}) => {
  return <StyledSidenavContainer {...props}>{children}</StyledSidenavContainer>;
};

// --- Sidenav Component ---

// Define possible positions for the Sidenav
export type SidenavPosition = 'start' | 'end'; // 'start' is left (LTR), 'end' is right (LTR)

// Define possible modes for the Sidenav
export type SidenavMode = 'over' | 'side'; // 'over' overlays content, 'side' pushes content

interface SidenavProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The content to be rendered inside the Sidenav.
   */
  children: React.ReactNode;
  /**
   * Controls whether the sidenav is open or closed (controlled component).
   */
  open?: boolean;
  /**
   * Callback function that is called when the sidenav's open state changes.
   * Provides the new open state (true for open, false for closed).
   */
  onOpenChange?: (isOpen: boolean) => void;
  /**
   * The position of the sidenav ('start' for left, 'end' for right).
   * @default 'start'
   */
  position?: SidenavPosition;
  /**
   * The mode of the sidenav ('over' to overlay content, 'side' to push content).
   * @default 'side'
   */
  mode?: SidenavMode;
  /**
   * The width of the sidenav when open.
   * @default '280px'
   */
  width?: string;
  /**
   * Optional Emotion `css` prop for additional custom styles for the sidenav panel.
   */
  css?: SerializedStyles;
}

const SidenavPanel = styled.div<{
  isOpen: boolean;
  position: SidenavPosition;
  mode: SidenavMode;
  width: string;
}>`
  position: absolute; /* Default for 'over' mode */
  top: 0;
  bottom: 0;
  width: ${(props) => props.width};
  background-color: ${(props) => props.theme.colors.background.surface};
  box-shadow: ${(props) => props.theme.shadows.lg};
  z-index: 100; /* Ensure it's above main content */
  transition: transform 0.3s ease-in-out;
  overflow-y: auto; /* Allow scrolling for sidenav content */
  flex-shrink: 0; /* Prevent shrinking in flex container */

  // Position based on 'position' prop
  ${(props) =>
    props.position === 'start'
      ? css`
          left: 0;
          transform: translateX(${props.isOpen ? '0' : '-100%'});
        `
      : css`
          right: 0;
          transform: translateX(${props.isOpen ? '0' : '100%'});
        `}

  // Adjust for 'side' mode (not absolute, part of flex flow)
  ${(props) =>
    props.mode === 'side' &&
    css`
      position: relative;
      transform: none; /* Reset transform as it's part of flow */
      margin-left: ${props.position === 'start' && !props.isOpen ? `-${props.width}` : '0'};
      margin-right: ${props.position === 'end' && !props.isOpen ? `-${props.width}` : '0'};
      /* Transition margin for 'side' mode */
      transition: margin-left 0.3s ease-in-out, margin-right 0.3s ease-in-out;
    `}
`;

const SidenavScrim = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99; /* Below sidenav, above main content */
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  pointer-events: ${(props) => (props.isOpen ? 'auto' : 'none')}; /* Only interactive when open */
`;

/**
 * The **Sidenav** component provides a flexible and customizable side navigation panel.
 * It can be configured to appear from the 'start' (left) or 'end' (right) of the screen,
 * and operate in 'over' mode (overlaying the main content with a scrim) or 'side' mode
 * (pushing the main content to make space). The Sidenav is typically used for primary
 * navigation, secondary content, or temporary panels.
 *
 * It should be rendered as a direct child within a `SidenavContainer` to ensure proper layout.
 *
 * ```typescript
 * import { Sidenav } from "@activityeducation/component-library";
 * ```
 *
 * ## Justification
 * A `Sidenav` is a common UI pattern for organizing a large number of navigation links
 * or secondary content without cluttering the main screen. This component ensures a
 * consistent and accessible implementation of side navigation across the application.
 * Its configurable modes and positions provide flexibility to adapt to different
 * design requirements (e.g., persistent sidebars on desktop vs. temporary overlays on mobile).
 * The built-in scrim and click-outside-to-close behavior enhance user experience
 * for overlay modes.
 *
 * ## Acceptance Criteria
 * - **GIVEN** the `Sidenav` is rendered, **THEN** it should display its `children`
 * content within a panel.
 * - **GIVEN** the `open` prop is true, **THEN** the sidenav should be visible;
 * otherwise, it should be hidden.
 * - **WHEN** the sidenav's open state changes (e.g., by user interaction or prop update),
 * **THEN** the `onOpenChange` callback should be triggered with the new state.
 * - **GIVEN** `position` is 'start' or 'end', **THEN** the sidenav should appear
 * on the left or right side of the screen, respectively.
 * - **GIVEN** `mode` is 'over', **THEN** the sidenav should overlay the content
 * and display a transparent scrim behind it. Clicking the scrim should close the sidenav.
 * - **GIVEN** `mode` is 'side', **THEN** the sidenav should push the main content
 * to make space for itself, without a scrim.
 * - **GIVEN** `width` is specified, **THEN** the sidenav should render at that width
 * when open.
 *
 * ## Example & Props
 */
export const Sidenav: React.FC<SidenavProps> = ({
  children,
  open: controlledOpen,
  onOpenChange,
  position = 'start',
  mode = 'side',
  width = '280px',
  ...props
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const sidenavRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close sidenav (only for 'over' mode)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mode === 'over' && sidenavRef.current && !sidenavRef.current.contains(event.target as Node)) {
        if (controlledOpen === undefined) {
          setInternalOpen(false);
        }
        onOpenChange?.(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, mode, controlledOpen, onOpenChange]);

  const handleScrimClick = useCallback(() => {
    if (mode === 'over') {
      if (controlledOpen === undefined) {
        setInternalOpen(false);
      }
      onOpenChange?.(false);
    }
  }, [mode, controlledOpen, onOpenChange]);

  return (
    <>
      {mode === 'over' && <SidenavScrim isOpen={isOpen} onClick={handleScrimClick} />}
      <SidenavPanel
        ref={sidenavRef}
        isOpen={isOpen}
        position={position}
        mode={mode}
        width={width}
        {...props}
      >
        {children}
      </SidenavPanel>
    </>
  );
};

// --- SidenavContent Component ---
// This component wraps the main content area that sits alongside the Sidenav.

interface SidenavContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The main content of the application.
   */
  children: React.ReactNode;
  /**
   * The width of the Sidenav. This is crucial for 'side' mode to correctly
   * calculate the content's offset.
   */
  sidenavWidth?: string;
  /**
   * The position of the Sidenav.
   */
  sidenavPosition?: SidenavPosition;
  /**
   * The mode of the Sidenav.
   */
  sidenavMode?: SidenavMode;
  /**
   * Whether the Sidenav is open.
   */
  isSidenavOpen?: boolean;
  /**
   * Optional Emotion `css` prop for additional custom styles.
   */
  css?: SerializedStyles;
}

const StyledSidenavContent = styled.div<{
  sidenavWidth: string;
  sidenavPosition: SidenavPosition;
  sidenavMode: SidenavMode;
  isSidenavOpen: boolean;
}>`
  flex-grow: 1; // Take up remaining space in the SidenavContainer
  overflow-y: auto; // Allow scrolling for main content
  transition: margin-left 0.3s ease-in-out, margin-right 0.3s ease-in-out;
  padding: ${(props) => props.theme.spacing.lg}; // Default padding for content

  ${(props) =>
    props.sidenavMode === 'side' &&
    props.isSidenavOpen &&
    props.sidenavPosition === 'start' &&
    css`
      margin-left: ${props.sidenavWidth}; /* Push content to the right */
    `}

  ${(props) =>
    props.sidenavMode === 'side' &&
    props.isSidenavOpen &&
    props.sidenavPosition === 'end' &&
    css`
      margin-right: ${props.sidenavWidth}; /* Push content to the left */
    `}
`;

/**
 * The **SidenavContent** component is a companion to the `Sidenav` component,
 * designed to wrap the main content area of your application. When used within
 * a `SidenavContainer`, it intelligently adjusts its margins to accommodate
 * the `Sidenav` when it is in 'side' mode, ensuring that the main content
 * is pushed rather than overlaid.
 *
 * ```typescript
 * import { SidenavContent } from "@activityeducation/component-library";
 * ```
 *
 * ## Justification
 * This component is crucial for creating responsive layouts that adapt to the
 * presence of a side navigation. By automatically managing margins based on the
 * sidenav's state and mode, it simplifies the complex CSS required for such
 * layouts, preventing content overlap and ensuring a smooth user experience.
 * It promotes a clear separation of concerns between navigation and main content.
 *
 * ## Acceptance Criteria
 * - **GIVEN** `SidenavContent` is rendered within a `SidenavContainer`, **THEN**
 * it should occupy the remaining space in the flex layout.
 * - **GIVEN** the `sidenavMode` is 'side' and `isSidenavOpen` is true, **THEN**
 * the content should be pushed by the `sidenavWidth` from the `sidenavPosition`
 * (left or right).
 * - **GIVEN** the `sidenavMode` is 'over', **THEN** the content's margins should
 * not be affected by the sidenav's open state.
 * - **GIVEN** the content is long, **THEN** it should be vertically scrollable.
 * - **WHEN** the sidenav's open state changes, **THEN** the content's margin
 * should transition smoothly.
 *
 * ## Example & Props
 */
export const SidenavContent: React.FC<SidenavContentProps> = ({
  children,
  sidenavWidth = '280px',
  sidenavPosition = 'start',
  sidenavMode = 'side',
  isSidenavOpen = false,
  ...props
}) => {
  return (
    <StyledSidenavContent
      sidenavWidth={sidenavWidth}
      sidenavPosition={sidenavPosition}
      sidenavMode={sidenavMode}
      isSidenavOpen={isSidenavOpen}
      {...props}
    >
      {children}
    </StyledSidenavContent>
  );
};
