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
 * A container component for `Sidenav` and its associated main content.
 * It sets up the layout for a side navigation pattern.
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
 * A Sidenav component for the AscendUCore Design System.
 * It provides a side navigation panel that can be opened and closed,
 * supporting 'over' (overlaying content) and 'side' (pushing content) modes,
 * and 'start' (left) or 'end' (right) positions.
 * Must be rendered within a `SidenavContainer`.
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
      
    `}

  ${(props) =>
    props.sidenavMode === 'side' &&
    props.isSidenavOpen &&
    props.sidenavPosition === 'end' &&
    css`
      
    `}
`;

/**
 * A component to wrap the main content area when using a `Sidenav`.
 * It handles adjusting its position based on the `Sidenav`'s mode and open state.
 * Must be rendered within a `SidenavContainer`.
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
