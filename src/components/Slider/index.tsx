// This file defines the Slider component for the AscendUCore Design System.
// A Slider allows users to select a value from a range by moving a thumb along a track.

import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import { css, type SerializedStyles } from '@emotion/react';

// Define the props interface for the Slider component
interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The current value of the slider (controlled component).
   */
  value?: number;
  /**
   * The initial value of the slider (uncontrolled component).
   */
  defaultValue?: number;
  /**
   * The minimum value of the slider.
   * @default 0
   */
  min?: number;
  /**
   * The maximum value of the slider.
   * @default 100
   */
  max?: number;
  /**
   * The step increment for the slider's value.
   * @default 1
   */
  step?: number;
  /**
   * If true, the slider will be disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Callback function that is called when the slider's value changes.
   * Provides the new numeric value.
   */
  onValueChange?: (value: number) => void;
  /**
   * Optional Emotion `css` prop for additional custom styles.
   */
  css?: SerializedStyles;
}

// Styled container for the slider (track and thumb)
const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 24px; // Height to accommodate thumb
  display: flex;
  align-items: center;
  user-select: none; // Prevent text selection during drag
  touch-action: pan-y; // Optimize for touch devices (allow vertical scrolling)
`;

// Hidden native input for accessibility and basic functionality
const HiddenSliderInput = styled.input`
  // Visually hide the input but keep it accessible
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 1; // Ensure it's above the custom track/fill
  margin: 0; // Remove default margin
  padding: 0; // Remove default padding

  // Style focus outline for accessibility on the custom thumb/track
  &:focus-visible + div { // Target the SliderTrack when input is focused
    outline: 2px solid ${(props) => props.theme.colors.primary['60']};
    outline-offset: 2px;
    border-radius: ${(props) => props.theme.borderRadius.full}; // Match track rounding
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

// Styled component for the slider track
const SliderTrack = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 6px; // Height of the track line
  background-color: ${(props) => props.theme.colors.neutral['80']}; // Track background color
  border-radius: ${(props) => props.theme.borderRadius.full};
  transition: background-color 0.2s ease-in-out;
`;

// Styled component for the slider fill (progress)
const SliderFill = styled.div<{ fillWidth: number }>`
  position: absolute;
  left: 0;
  height: 6px; // Same height as track
  width: ${(props) => props.fillWidth}%;
  background-color: ${(props) => props.theme.colors.primary['40']}; // Fill color
  border-radius: ${(props) => props.theme.borderRadius.full};
  transition: width 0.2s ease-in-out;
`;

// Styled component for the draggable thumb
const SliderThumb = styled.div<{ thumbPosition: number; isDragging: boolean }>`
  position: absolute;
  top: 50%;
  left: ${(props) => props.thumbPosition}%;
  transform: translate(-50%, -50%); // Center the thumb
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.theme.colors.primary['40']}; // Thumb color
  border: 2px solid ${(props) => props.theme.colors.primary['40']};
  border-radius: ${(props) => props.theme.borderRadius.full};
  box-shadow: ${(props) => props.theme.shadows.sm};
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  z-index: 2; // Ensure thumb is above track/fill
  cursor: grab; // Indicate draggable

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.md};
  }

  ${(props) => props.isDragging && css`
    cursor: grabbing;
    box-shadow: ${props.theme.shadows.lg}; // More prominent shadow when dragging
  `}
`;

/**
 * The **Slider** component allows users to select a single value from a predefined
 * range by dragging a thumb along a track. It supports both continuous and discrete
 * value selection, configurable minimum, maximum, and step increments. This component
 * provides a visually intuitive way for users to adjust settings, filter data, or
 * control progress within an application.
 *
 * ```typescript
 * import { Slider } from "@activityeducation/component-library";
 * ```
 *
 * ## Justification
 * A `Slider` component is essential for interactive user interfaces where a range of
 * values needs to be selected without direct numerical input. It enhances usability
 * by offering a visual representation of the selection range and the current value,
 * making adjustments quick and intuitive. By encapsulating the complex logic of
 * dragging, value calculation, and accessibility (via a hidden native input),
 * it simplifies development and ensures consistent behavior and styling across the
 * AscendUCore Design System. Its responsiveness and touch-friendly design make it
 * suitable for all devices.
 *
 * ## Acceptance Criteria
 * - **GIVEN** the `Slider` is rendered, **THEN** it should display a track, a fill
 * indicating the current value, and a draggable thumb.
 * - **GIVEN** `min`, `max`, and `step` props are provided, **THEN** the slider's
 * range and increment should correspond to these values.
 * - **WHEN** the user drags the thumb or clicks on the track, **THEN** the slider's
 * value should update, and the `onValueChange` callback should be triggered.
 * - **GIVEN** the `disabled` prop is true, **THEN** the slider should be visually
 * disabled and not interactive.
 * - **GIVEN** the slider is focused via keyboard, **THEN** it should display a
 * clear focus indicator.
 * - **WHEN** the slider's value changes, **THEN** the fill and thumb position
 * should visually update accordingly.
 *
 * ## Example & Props
 */
export const Slider: React.FC<SliderProps> = ({
  value: controlledValue,
  defaultValue,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  onValueChange,
  onChange, // Capture original onChange from input props
  ...props
}) => {
  // Manage internal state for uncontrolled behavior
  const [internalValue, setInternalValue] = useState<number>(
    controlledValue !== undefined ? controlledValue : (defaultValue !== undefined ? defaultValue : min)
  );

  // Determine the effective value: controlled prop takes precedence
  const effectiveValue = controlledValue !== undefined ? controlledValue : internalValue;

  // State to track if the slider is currently being dragged
  const [isDragging, setIsDragging] = useState(false);

  // Refs for the hidden input and the visual track
  const inputRef = useRef<HTMLInputElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Calculate percentage for fill width and thumb position
  const percentage = max === min ? 0 : ((effectiveValue - min) / (max - min)) * 100;

  // Update internal value if controlledValue changes
  useEffect(() => {
    if (controlledValue !== undefined) {
      setInternalValue(controlledValue);
    }
  }, [controlledValue]);

  // Function to calculate and set the new value based on mouse/touch event
  // Handle changes from the hidden input (still the primary way value is propagated)
  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue); // Notify parent for controlled/uncontrolled
    onChange?.(event); // Call original onChange if provided
  }, [controlledValue, onValueChange, onChange]);


  // Function to calculate and set the new value based on mouse/touch event
  const updateValueFromEvent = useCallback((event: MouseEvent | TouchEvent) => {
    if (!trackRef.current || disabled) return;

    const trackRect = trackRef.current.getBoundingClientRect();
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;

    // Calculate the position relative to the track
    let newPosition = (clientX - trackRect.left) / trackRect.width;
    newPosition = Math.max(0, Math.min(1, newPosition)); // Clamp between 0 and 1

    // Map position to value range and snap to step
    const rawValue = min + newPosition * (max - min);
    const steppedValue = Math.round(rawValue / step) * step;
    const clampedSteppedValue = Math.max(min, Math.min(max, steppedValue));

    // Update the hidden input's value directly to trigger its onChange
    if (inputRef.current) {
      inputRef.current.value = String(clampedSteppedValue);
      // Manually dispatch change event to ensure React picks it up if needed
      // This is often not strictly necessary with controlled components or direct value updates
      const syntheticEvent = {
        target: inputRef.current,
        currentTarget: inputRef.current,
        type: 'change',
        bubbles: true,
        cancelable: false,
        nativeEvent: event as Event,
        isDefaultPrevented: () => false,
        isPropagationStopped: () => false,
        persist: () => {},
        preventDefault: () => {},
        stopPropagation: () => {},
      } as React.ChangeEvent<HTMLInputElement>;
      handleInputChange(syntheticEvent);
    }
  }, [min, max, step, disabled, handleInputChange]);

  // Handle mouse down/touch start on the track or thumb
  const handleInteractionStart = useCallback((event: React.MouseEvent | React.TouchEvent) => {
    if (disabled) return;
    setIsDragging(true);
    // Prevent default to avoid text selection or mobile scrolling conflicts
    event.preventDefault();
    updateValueFromEvent(event.nativeEvent);
  }, [disabled, updateValueFromEvent]);

  // Global mouse/touch move and up listeners
  useEffect(() => {
    const handleMove = (event: MouseEvent | TouchEvent) => {
      if (isDragging) {
        event.preventDefault(); // Prevent scrolling/selection while dragging
        updateValueFromEvent(event);
      }
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleMove, { passive: false }); // Use passive: false for preventDefault
      document.addEventListener('touchend', handleEnd);
    } else {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, updateValueFromEvent]);

  return (
    <SliderContainer
      onMouseDown={handleInteractionStart}
      onTouchStart={handleInteractionStart}
      {...props}
    >
      <HiddenSliderInput
        type="range"
        min={min}
        max={max}
        step={step}
        value={effectiveValue}
        disabled={disabled}
        onChange={handleInputChange}
        ref={inputRef}
        aria-valuenow={effectiveValue}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-disabled={disabled}
      />
      <SliderTrack ref={trackRef} />
      <SliderFill fillWidth={percentage} />
      <SliderThumb thumbPosition={percentage} isDragging={isDragging} />
    </SliderContainer>
  );
};
