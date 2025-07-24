// src/components/ProgressBar.tsx
// This file defines the ProgressBar component for the AscendUCore Design System.
// It visually indicates the progress of an operation or a value within a range.

import React from 'react';
import styled from '@emotion/styled';
import type { SerializedStyles } from '@emotion/react';

// Define the props interface for the ProgressBar component
interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The current value of the progress bar.
   * @default 0
   */
  value?: number;
  /**
   * The maximum value of the progress bar.
   * @default 100
   */
  max?: number;
  /**
   * Optional Emotion `css` prop for additional custom styles.
   */
  css?: SerializedStyles;
}

// Styled component for the progress bar container (the track)
const ProgressBarTrack = styled.div`
  width: 100%;
  height: ${(props) => props.theme.spacing.sm}; // Fixed height for the bar
  background-color: ${(props) => props.theme.colors.neutral['90']}; // Light background for the track
  border-radius: ${(props) => props.theme.borderRadius.full}; // Fully rounded ends
  overflow: hidden; // Ensures the progress bar stays within rounded corners
  position: relative; // For positioning the inner bar
`;

// Styled component for the actual progress indicator
const ProgressBarFill = styled.div<{ progressWidth: number }>`
  height: 100%;
  width: ${(props) => props.progressWidth}%;
  background-color: ${(props) => props.theme.colors.primary['40']}; // Primary color for the progress fill
  border-radius: ${(props) => props.theme.borderRadius.full}; // Inherit rounded ends
  transition: width 0.3s ease-in-out; // Smooth transition for progress changes
`;

/**
 * A linear ProgressBar component for the AscendUCore Design System.
 * It visually indicates the progress of an operation or a value within a defined range.
 * It is accessible via ARIA attributes.
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({
  value = 0,
  max = 100,
  ...props
}) => {
  // Ensure value is within bounds [0, max]
  const clampedValue = Math.max(0, Math.min(value, max));
  const progressWidth = max === 0 ? 0 : (clampedValue / max) * 100;

  return (
    <ProgressBarTrack
      role="progressbar"
      aria-valuenow={clampedValue}
      aria-valuemin={0}
      aria-valuemax={max}
      {...props}
    >
      <ProgressBarFill progressWidth={progressWidth} />
    </ProgressBarTrack>
  );
};
