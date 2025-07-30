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
 * A linear **ProgressBar** component for the AscendUCore Design System.
 * It visually indicates the progress of an operation or a value within a defined range.
 * This component is designed to be accessible via ARIA attributes, providing a clear
 * and intuitive representation of completion status.
 *
 * ```typescript
 * import { ProgressBar } from "@activityeducation/component-library";
 * ```
 *
 * ## Justification
 * Progress bars are essential UI elements for providing feedback to users about the
 * status of ongoing processes, such as file uploads, data loading, or form completion.
 * A standardized `ProgressBar` ensures a consistent visual language for progress
 * indication across the application. It helps manage user expectations by showing
 * that an action is underway and approximately how much longer it might take,
 * reducing frustration and improving the overall user experience. Its accessibility
 * features ensure that all users, including those relying on assistive technologies,
 * can understand the progress status.
 *
 * ## Acceptance Criteria
 * - **GIVEN** the `ProgressBar` component is rendered, **THEN** it should display
 * a track and a fill segment indicating the current progress.
 * - **GIVEN** `value` and `max` props are provided, **THEN** the fill segment's
 * width should accurately represent the ratio of `value` to `max`.
 * - **WHEN** the `value` prop changes, **THEN** the fill segment should
 * transition smoothly to its new width.
 * - **GIVEN** the component, **THEN** it should include appropriate ARIA attributes
 * (`role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`) for accessibility.
 * - **GIVEN** `value` is 0, **THEN** the fill segment should not be visible.
 * - **GIVEN** `value` is equal to `max`, **THEN** the fill segment should span
 * the entire width of the track.
 *
 * ## Example & Props
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
