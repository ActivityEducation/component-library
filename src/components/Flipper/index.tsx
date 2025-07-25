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
 * A component that provides a 3D flip animation for its content,
 * representing a front and back side. Ideal for flashcards or interactive elements.
 * Can be controlled or uncontrolled.
 */
export const Flipper: React.FC<FlipperProps> = ({
  front,
  back,
  defaultFlipped = false,
  isFlipped: controlledIsFlipped,
  onFlipChange,
  duration = 0.6,
  flipDirection = 'horizontal',
  flipOnClick = false, // Default to true for backward compatibility
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
    debugger;
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
