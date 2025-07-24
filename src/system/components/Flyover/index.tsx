// src/components/Flyover.tsx
// This file defines the Flyover component for the AscendUCore Design System.
// It wraps text and, upon hover (desktop) or tap (mobile), displays a Card
// with additional content, useful for glossary terms, tooltips, or contextual info.

import React, { useState, useRef, useCallback, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { SerializedStyles } from '@emotion/react';
import { Card } from '../Card'; // Import Card component for the flyover content
import { theme } from '../../theme';

// Define possible positions for the flyover popover
export type FlyoverPosition =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'fix-top-left'
  | 'fix-top-right'
  | 'fix-bottom-left'
  | 'fix-bottom-right';

// Define the props interface for the Flyover component
interface FlyoverProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The text content that triggers the flyover.
   */
  children: React.ReactNode;
  /**
   * The content to be displayed inside the flyover card.
   */
  content: any;
  /**
   * The preferred position of the popover relative to the trigger.
   * If the preferred position causes the popover to go off-screen,
   * it will automatically flip to an available side.
   * Fixed positions (e.g., 'fix-top-left') are relative to the viewport.
   * @default 'bottom'
   */
  position?: FlyoverPosition;
  /**
   * Optional Emotion `css` prop for additional custom styles for the trigger text.
   */
  css?: SerializedStyles;
}

// Styled component for the trigger text (the wrapped text)
const FlyoverTrigger = styled.span`
  position: relative; // Crucial for positioning the absolute FlyoverCardContainer
  cursor: pointer;
  text-decoration: underline; // Visually indicate interactivity
  text-decoration-style: dotted;
  text-decoration-color: ${(props) => props.theme.colors.primary['40']};
  color: ${(props) => props.theme.colors.primary['40']};
  font-weight: ${(props) => props.theme.typography.button.fontWeight}; // Make it slightly bolder
  transition: all 0.2s ease-in-out;
  display: inline-block; /* Ensure it wraps content and allows positioning */

  &:hover {
    color: ${(props) => props.theme.colors.primary['50']};
    text-decoration-color: ${(props) => props.theme.colors.primary['50']};
  }
`;

// Styled component for the flyover card container
const FlyoverCardContainer = styled.div<{
  isVisible: boolean;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  transform?: string;
  isFixed?: boolean;
}>`
  position: ${(props) => (props.isFixed ? 'fixed' : 'absolute')};
  z-index: 1001; // Ensure it's above most content
  pointer-events: none; // Allow clicks to pass through when not active
  opacity: 0;
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;

  /* Dynamic positioning */
  top: ${(props) => (props.top !== undefined ? `${props.top}px` : 'auto')};
  left: ${(props) => (props.left !== undefined ? `${props.left}px` : 'auto')};
  right: ${(props) => (props.right !== undefined ? `${props.right}px` : 'auto')};
  bottom: ${(props) => (props.bottom !== undefined ? `${props.bottom}px` : 'auto')};
  transform: ${(props) => props.transform || 'translateY(10px)'}; // Default transform for bottom

  ${(props) =>
    props.isVisible &&
    css`
      opacity: 1;
      pointer-events: auto; // Enable interaction when visible
      transform: none; // Reset transform when visible
    `}

  /* Target the inner Card component for styling */
  & > div {
    max-width: 300px; // Max width for the flyover card
    min-width: 180px; // Min width for readability
    padding: ${(props) => props.theme.spacing.md};
    box-shadow: ${(props) => props.theme.shadows.lg}; // More prominent shadow
  }
`;

/**
 * A Flyover component that wraps text and, upon hover (desktop) or tap (mobile),
 * displays a `Card` containing additional content. Ideal for glossary terms,
 * definitions, or contextual information. The popover position is configurable
 * and includes automatic collision detection and flipping.
 */
export const Flyover: React.FC<FlyoverProps> = ({
  children,
  content,
  position = 'bottom', // Default position
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [popoverStyle, setPopoverStyle] = useState<{
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
    transform?: string;
    isFixed?: boolean;
  }>({});
  const triggerRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLDivElement>(null); // Ref for the Card component
  const timeoutRef = useRef<number | null>(null);

  const showFlyover = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(true);
  }, []);

  const hideFlyover = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 100); // Small delay before hiding
  }, []);

  // Calculate popover position dynamically
  const calculatePosition = useCallback(() => {
    if (!triggerRef.current || !cardRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const cardRect = cardRef.current.getBoundingClientRect(); // Get dimensions of the card content
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    const spacing = parseFloat(theme.spacing.sm); // Small gap between trigger and popover

    let newTop: number | undefined;
    let newLeft: number | undefined;
    let newRight: number | undefined;
    let newBottom: number | undefined;
    let newTransform: string | undefined;
    let isFixed = false;
    let effectivePosition = position; // Track the effective position after potential flips

    // Handle fixed positions first
    if (position.startsWith('fix-')) {
      isFixed = true;
      switch (position) {
        case 'fix-top-left':
          newTop = 0;
          newLeft = 0;
          break;
        case 'fix-top-right':
          newTop = 0;
          newRight = 0;
          break;
        case 'fix-bottom-left':
          newBottom = 0;
          newLeft = 0;
          break;
        case 'fix-bottom-right':
          newBottom = 0;
          newRight = 0;
          break;
      }
    } else {
      // Calculate initial preferred position relative to the trigger
      switch (position) {
        case 'bottom':
          newTop = triggerRect.bottom + scrollY + spacing;
          newLeft = triggerRect.left + scrollX + (triggerRect.width / 2) - (cardRect.width / 2);
          newTransform = 'translateY(10px)';
          break;
        case 'top':
          newTop = triggerRect.top + scrollY - cardRect.height - spacing;
          newLeft = triggerRect.left + scrollX + (triggerRect.width / 2) - (cardRect.width / 2);
          newTransform = 'translateY(-10px)';
          break;
        case 'right':
          newTop = triggerRect.top + scrollY + (triggerRect.height / 2) - (cardRect.height / 2);
          newLeft = triggerRect.right + scrollX + spacing;
          newTransform = 'translateX(10px)';
          break;
        case 'left':
          newTop = triggerRect.top + scrollY + (triggerRect.height / 2) - (cardRect.height / 2);
          newLeft = triggerRect.left + scrollX - cardRect.width - spacing;
          newTransform = 'translateX(-10px)';
          break;
      }

      // --- Collision Detection and Flipping Logic ---
      const buffer = 10; // Small buffer from viewport edges

      // Check and flip horizontally if needed
      if (effectivePosition === 'bottom' || effectivePosition === 'top') {
        if (newLeft !== undefined) {
          if (newLeft < buffer + scrollX) { // Goes off left
            newLeft = triggerRect.right + scrollX + spacing;
            newTransform = 'translateX(10px)';
            effectivePosition = 'right';
          } else if (newLeft + cardRect.width > viewportWidth + scrollX - buffer) { // Goes off right
            newLeft = triggerRect.left + scrollX - cardRect.width - spacing;
            newTransform = 'translateX(-10px)';
            effectivePosition = 'left';
          }
        }
      }

      // Check and flip vertically if needed
      if (effectivePosition === 'left' || effectivePosition === 'right' || effectivePosition === 'bottom' || effectivePosition === 'top') {
        if (newTop !== undefined) {
          if (newTop < buffer + scrollY) { // Goes off top
            newTop = triggerRect.bottom + scrollY + spacing;
            newTransform = 'translateY(10px)';
            // If original was 'top' and flipped to 'bottom', update effective position
            if (position === 'top') effectivePosition = 'bottom';
          } else if (newTop + cardRect.height > viewportHeight + scrollY - buffer) { // Goes off bottom
            newTop = triggerRect.top + scrollY - cardRect.height - spacing;
            newTransform = 'translateY(-10px)';
            // If original was 'bottom' and flipped to 'top', update effective position
            if (position === 'bottom') effectivePosition = 'top';
          }
        }
      }

      // Final adjustments for centering after potential flips
      if (effectivePosition === 'top' || effectivePosition === 'bottom') {
        newLeft = triggerRect.left + scrollX + (triggerRect.width / 2) - (cardRect.width / 2);
        // Re-clamp horizontally after centering
        if (newLeft < buffer + scrollX) newLeft = buffer + scrollX;
        if (newLeft + cardRect.width > viewportWidth + scrollX - buffer) newLeft = viewportWidth + scrollX - buffer - cardRect.width;
      } else if (effectivePosition === 'left' || effectivePosition === 'right') {
        newTop = triggerRect.top + scrollY + (triggerRect.height / 2) - (cardRect.height / 2);
        // Re-clamp vertically after centering
        if (newTop < buffer + scrollY) newTop = buffer + scrollY;
        if (newTop + cardRect.height > viewportHeight + scrollY - buffer) newTop = viewportHeight + scrollY - buffer - cardRect.height;
      }
    }

    setPopoverStyle({
      top: newTop,
      left: newLeft,
      right: newRight,
      bottom: newBottom,
      transform: newTransform,
      isFixed: isFixed,
    });
  }, [position, isVisible, theme.spacing.sm]); // Recalculate when position, visibility, or theme spacing changes

  // Recalculate position whenever visibility changes or window resizes/scrolls
  useEffect(() => {
    if (isVisible) {
      calculatePosition();
      window.addEventListener('resize', calculatePosition);
      window.addEventListener('scroll', calculatePosition);
    } else {
      window.removeEventListener('resize', calculatePosition);
      window.removeEventListener('scroll', calculatePosition);
    }

    return () => {
      window.removeEventListener('resize', calculatePosition);
      window.removeEventListener('scroll', calculatePosition);
    };
  }, [isVisible, calculatePosition]);

  // Handle click outside to close on mobile/touch devices
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node) &&
        cardRef.current &&
        !cardRef.current.contains(event.target as Node) &&
        isVisible
      ) {
        hideFlyover();
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside); // For mobile taps
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isVisible, hideFlyover]);

  return (
    <FlyoverTrigger
      ref={triggerRef}
      onMouseEnter={showFlyover}
      onMouseLeave={hideFlyover}
      onClick={(e) => {
        // Toggle visibility on click for mobile/touch
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
          e.stopPropagation(); // Prevent immediate close from document listener
          setIsVisible(!isVisible);
        }
      }}
      {...props}
    >
      {children}
      {isVisible && (
        <FlyoverCardContainer
          ref={cardRef}
          isVisible={isVisible}
          top={popoverStyle.top}
          left={popoverStyle.left}
          right={popoverStyle.right}
          bottom={popoverStyle.bottom}
          transform={popoverStyle.transform}
          isFixed={popoverStyle.isFixed}
        >
          <Card>{content}</Card>
        </FlyoverCardContainer>
      )}
    </FlyoverTrigger>
  );
};
