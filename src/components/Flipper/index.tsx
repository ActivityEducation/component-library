// src/components/Flipper.tsx
// This file defines the Flipper component for the AscendUCore Design System.
// It provides a 3D flip animation effect, useful for showcasing front and back
// content, like flashcards or interactive elements with hidden details.

import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

// Define the props interface for the Flipper component
interface FlipperProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The content to be displayed on the front side of the card.
   */
  front: React.ReactNode;
  /**
   * The content to be displayed on the back side of the card.
   */
  back: React.ReactNode;
  /**
   * If true, the card will initially be flipped to its back side.
   * Use this for uncontrolled behavior.
   * @default false
   */
  defaultFlipped?: boolean;
  /**
   * Controls the flipped state of the card (true for back, false for front).
   * Use this for controlled behavior.
   */
  isFlipped?: boolean;
  /**
   * Callback function that is called when the card's flipped state changes.
   * Provides the new flipped state (true if now showing back, false if now showing front).
   */
  onFlipChange?: (flipped: boolean) => void;
  /**
   * The duration of the flip animation in seconds.
   * @default 0.6
   */
  duration?: number;
  /**
   * The direction of the flip animation.
   * 'horizontal' (around Y-axis) or 'vertical' (around X-axis).
   * @default 'horizontal'
   */
  flipDirection?: 'horizontal' | 'vertical';
  /**
   * If true, the card will flip when clicked.
   * @default true
   */
  flipOnClick?: boolean; // New prop
  /**
   * Optional Emotion `css` prop for additional custom styles for the outer container.
   */
  css?: SerializedStyles;
}

// Outer container to establish the 3D perspective
const StyledFlipperContainer = styled.div`
  perspective: 1000px; // Required for 3D effect
  /*
   * Removed width: 100%; height: 100%; max-width; max-height;
   * to allow the container to size itself based on its content (FlipperInner).
   * The min-width/height ensure it's never too small.
   */
  width: 100%;
  height: 100%;
  display: flex; /* Use flex to center the inner flipper */
  justify-content: center;
  align-items: center;
  /* Add max-width/height here if you want an outer constraint,
     otherwise, it will grow with its content. */
`;

// Inner container that actually performs the flip rotation
const FlipperInner = styled.div<{ isFlipped: boolean; duration: number; flipDirection: 'horizontal' | 'vertical' }>`
  position: relative;
  width: 100%; /* Take full width of content-driven parent */
  height: 100%; /* Take full height of content-driven parent */
  min-width: 460px;
  min-height: 280px;
  text-align: center;
  transition: transform ${(props) => props.duration}s; // Apply transition duration
  transform-style: preserve-3d; // Required for children to have 3D position

  ${(props) =>
    props.isFlipped &&
    (props.flipDirection === 'vertical'
      ? css`
          transform: rotateX(180deg);
        `
      : css`
          transform: rotateY(180deg);
        `)}
`;

// Base styles for both front and back faces
// Updated to accept flipDirection prop
const FlipperFace = styled.div<{ flipDirection: 'horizontal' | 'vertical' }>`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden; // Hide the back of the element when facing away
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.theme.borderRadius.md};
  overflow: hidden; // Ensures content respects border-radius
  box-sizing: border-box; // Include padding/border in element's total width/height
`;

// Specific styles for the front face
const FlipperFront = styled(FlipperFace)`
  background-color: ${(props) => props.theme.colors.background.surface};
  border: 1px solid ${(props) => props.theme.colors.border.default};
  box-shadow: ${(props) => props.theme.shadows.md};
`;

// Specific styles for the back face
const FlipperBack = styled(FlipperFace)`
  background-color: ${(props) => props.theme.colors.primary['95']}; // Use a primary light color for back
  color: ${(props) => props.theme.colors.primary['10']}; // Dark text on back
  border: 1px solid ${(props) => props.theme.colors.primary['80']};
  box-shadow: ${(props) => props.theme.shadows.md};

  ${(props) =>
    props.flipDirection === 'vertical'
      ? css`
          transform: rotateX(180deg);
        `
      : css`
          transform: rotateY(180deg);
        `}
`;

/**
 * The **Flipper** component provides a dynamic 3D flip animation effect, allowing
 * content to be displayed on both a "front" and "back" side. This component is
 * ideal for interactive elements like flashcards, showcasing hidden details,
 * or creating engaging transitions between related pieces of information.
 * It can operate as either a controlled or uncontrolled component, and offers
 * customization for flip direction and animation duration.
 *
 * ```typescript
 * import { Flipper } from "@activityeducation/component-library";
 * ```
 *
 * ## Justification
 * The `Flipper` component adds a layer of interactivity and visual interest to
 * the user interface, making content more engaging and memorable. It's particularly
 * useful in educational contexts (e.g., digital flashcards) where presenting
 * information in a reveal-on-demand manner enhances active recall. By encapsulating
 * the complex CSS 3D transformations and state management, it simplifies the
 * creation of such effects for developers, ensuring consistent performance and
 * appearance across the application. Its configurable flip direction and click
 * behavior provide flexibility for various design patterns.
 *
 * ## Acceptance Criteria
 * - **GIVEN** the `Flipper` component is rendered, **THEN** it should display
 * the `front` content by default.
 * - **WHEN** the `Flipper` is clicked (and `flipOnClick` is true), **THEN** it
 * should animate with a 3D flip effect to reveal the `back` content.
 * - **WHEN** the `Flipper` is clicked again (and `flipOnClick` is true), **THEN**
 * it should flip back to reveal the `front` content.
 * - **GIVEN** `defaultFlipped` is true, **THEN** the `Flipper` should initially
 * display the `back` content (uncontrolled behavior).
 * - **GIVEN** `isFlipped` prop is provided, **THEN** the `Flipper` should display
 * its `front` or `back` content based on the prop's value (controlled behavior).
 * - **WHEN** the `Flipper`'s flipped state changes, **THEN** the `onFlipChange`
 * callback should be triggered with the new state.
 * - **GIVEN** `duration` is set, **THEN** the flip animation should take the
 * specified amount of time.
 * - **GIVEN** `flipDirection` is 'horizontal' or 'vertical', **THEN** the flip
 * animation should occur around the Y-axis or X-axis, respectively.
 * - **GIVEN** `flipOnClick` is false, **THEN** clicking the component should
 * *not* trigger the flip animation.
 *
 * ## Example & Props
 */
export const Flipper: React.FC<FlipperProps> = ({
  front,
  back,
  defaultFlipped = false,
  isFlipped: controlledIsFlipped,
  onFlipChange,
  duration = 0.6,
  flipDirection = 'horizontal',
  flipOnClick = true, // Default to true for backward compatibility
  onClick, // Capture original onClick
  ...props
}) => {
  // Manage internal flipped state for uncontrolled behavior
  const [internalIsFlipped, setInternalIsFlipped] = useState(defaultFlipped);

  // Determine the effective flipped state (controlled prop takes precedence)
  const effectiveIsFlipped = controlledIsFlipped !== undefined ? controlledIsFlipped : internalIsFlipped;

  // Toggle flip state
  const toggleFlip = useCallback(() => {
    const newFlippedState = !effectiveIsFlipped;
    if (controlledIsFlipped === undefined) {
      setInternalIsFlipped(newFlippedState);
    }
    onFlipChange?.(newFlippedState); // Notify parent for controlled/uncontrolled
  }, [effectiveIsFlipped, controlledIsFlipped, onFlipChange]);

  // Handle click on the card to conditionally toggle flip
  const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    // Only flip if flipOnClick is true and the click is on the container itself
    // (not on children that might have their own click handlers)
    if (flipOnClick) toggleFlip();
    onClick?.(event); // Call original onClick if provided
  }, [toggleFlip, onClick, flipOnClick]);


  return (
    <StyledFlipperContainer {...props}>
      <FlipperInner isFlipped={effectiveIsFlipped} duration={duration} flipDirection={flipDirection}>
        {/* Pass flipDirection to FlipperFront and FlipperBack */}
        <FlipperFront onClick={handleClick} flipDirection={flipDirection}>{front}</FlipperFront>
        <FlipperBack onClick={handleClick} flipDirection={flipDirection}>{back}</FlipperBack>
      </FlipperInner>
    </StyledFlipperContainer>
  );
};
