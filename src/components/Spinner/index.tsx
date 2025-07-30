// src/components/Spinner.tsx
// This file defines the Spinner component for the AscendUCore Design System.
// A Spinner visually indicates that an application is loading or processing data
// with an indeterminate circular animation.

import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import type { SerializedStyles } from '@emotion/react';

// Define possible sizes for the Spinner
export type SpinnerSize = 'sm' | 'md' | 'lg';

// Define the props interface for the Spinner component
// Changed to extend React.SVGProps<SVGSVGElement> for correct SVG attributes
interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
  /**
   * The size of the spinner.
   * @default 'md'
   */
  size?: SpinnerSize;
  /**
   * Optional Emotion `css` prop for additional custom styles.
   */
  css?: SerializedStyles;
}

// Keyframe animation for the spinner's rotation
const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Keyframe animation for the indeterminate stroke effect
const indeterminatePath = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
`;

// Styled SVG element for the spinner container
// Pick 'size' from SpinnerProps, which now correctly extends SVGProps
const StyledSpinnerSvg = styled.svg<Pick<SpinnerProps, 'size'>>`
  // Base styles for the SVG container
  animation: ${rotate} 1.4s linear infinite; // Continuous rotation
  display: block; // Ensure it takes up its own space
  
  // Sizing based on prop
  ${(props) => {
    switch (props.size) {
      case 'sm':
        return `
          width: 24px;
          height: 24px;
        `;
      case 'lg':
        return `
          width: 48px;
          height: 48px;
        `;
      case 'md':
      default:
        return `
          width: 36px;
          height: 36px;
        `;
    }
  }}
`;

// Styled circle for the spinner's track (background)
const SpinnerCircleTrack = styled.circle`
  stroke: ${(props) => props.theme.colors.neutral['80']}; // Lighter color for the track
  stroke-width: 4px; // Thickness of the circle line
  fill: none; // No fill
`;

// Styled circle for the spinner's indeterminate progress
const SpinnerCircleProgress = styled.circle`
  stroke: ${(props) => props.theme.colors.primary['40']}; // Primary color for the progress
  stroke-width: 4px; // Thickness of the line
  fill: none; // No fill
  stroke-linecap: round; // Rounded ends for the stroke
  animation: ${indeterminatePath} 1.4s ease-in-out infinite; // Indeterminate animation
  transform-origin: center; // Ensure animation rotates from center
`;

/**
 * The **Spinner** component provides a visual indication of loading or processing
 * in an indeterminate circular animation. It is used to inform users that an
 * operation is in progress, preventing confusion and improving perceived performance.
 * The component supports different sizes to fit various UI contexts, from small
 * inline indicators to larger, more prominent loading states.
 *
 * ```typescript
 * import { Spinner } from "@activityeducation/component-library";
 * ```
 *
 * ## Justification
 * In modern web applications, providing immediate feedback to user actions is crucial
 * for a good user experience. The `Spinner` component addresses this by visually
 * communicating that the system is busy, preventing users from attempting further
 * actions or assuming the application is unresponsive. Its simple, elegant animation
 * is designed to be unobtrusive yet clear, maintaining the overall aesthetic of the
 * AscendUCore Design System. Supporting various sizes makes it versatile for different
 * loading scenarios (e.g., a small spinner on a loading button, a larger one for
 * page-level data fetching).
 *
 * ## Acceptance Criteria
 * - **GIVEN** the `Spinner` component is rendered, **THEN** it should display a
 * continuous circular animation.
 * - **GIVEN** the `size` prop is set to 'sm', 'md', or 'lg', **THEN** the spinner
 * should render at the corresponding small, medium, or large dimensions.
 * - **GIVEN** the spinner is used within a `Button` component, **THEN** it should
 * integrate seamlessly, indicating a loading state for the button.
 * - **GIVEN** the component is rendered, **THEN** it should use the theme's defined
 * primary and neutral colors for its animation.
 *
 * ## Example & Props
 */
export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md', // Default size
  ...props
}) => {
  // The SVG viewBox ensures consistent scaling regardless of `width`/`height`
  // The circle's `r` (radius) and `cx`/`cy` (center x/y) are based on a 50x50 viewBox
  const radius = 20; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference for stroke-dasharray calculations

  return (
    <StyledSpinnerSvg viewBox="0 0 50 50" size={size} {...props}>
      {/* Background track circle */}
      <SpinnerCircleTrack
        cx="25"
        cy="25"
        r={radius}
      />
      {/* Progress circle (animated) */}
      <SpinnerCircleProgress
        cx="25"
        cy="25"
        r={radius}
        // These values are crucial for the indeterminate animation effect
        // They define the visible and invisible parts of the stroke
        strokeDasharray={`${circumference * 0.75}, ${circumference * 0.25}`} // Example: 75% visible, 25% invisible
        strokeDashoffset={0} // Initial offset
      />
    </StyledSpinnerSvg>
  );
};
