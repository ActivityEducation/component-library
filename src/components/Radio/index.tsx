// This file defines the Radio component for the AscendUCore Design System.
// Radio buttons allow users to select a single option from a set.

import React from 'react';
import styled from '@emotion/styled';
import type { SerializedStyles } from '@emotion/react';

// Define the props interface for the Radio component
interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The label associated with the radio button.
   */
  label?: React.ReactNode;
  /**
   * Optional Emotion `css` prop for additional custom styles.
   */
  css?: SerializedStyles;
}

// Styled wrapper for the custom radio button
const RadioWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none; // Prevent text selection on label
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.body.fontSize};
  color: ${(props) => props.theme.colors.text.default};

  &:hover .radio-indicator {
    border-color: ${(props) => props.theme.colors.primary['50']};
  }

  &:focus-within .radio-indicator {
    outline: 2px solid ${(props) => props.theme.colors.primary['60']};
    outline-offset: 2px;
  }

  // Disabled state for the whole wrapper
  &.disabled {
    cursor: not-allowed;
    opacity: 0.6;
    color: ${(props) => props.theme.colors.neutral['50']};
  }
`;

// Hidden native input for accessibility
const HiddenRadio = styled.input`
  // Visually hide the radio but keep it accessible
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none; // Ensure it doesn't interfere with pointer events on the custom indicator
`;

// Custom visual indicator for the radio button
const RadioIndicator = styled.div<Pick<RadioProps, 'checked' | 'disabled'>>`
  width: 20px;
  height: 20px;
  border: 2px solid ${(props) => props.theme.colors.border.default};
  border-radius: ${(props) => props.theme.borderRadius.full}; // Circular shape
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${(props) => props.theme.spacing.sm};
  transition: ${(props) => props.theme.transitions.fast};
  flex-shrink: 0; // Prevent indicator from shrinking

  // Default unchecked state
  background-color: ${(props) => props.theme.colors.background.surface};

  // Checked state
  ${(props) =>
    props.checked &&
    `
      background-color: ${props.theme.colors.primary['40']};
      border-color: ${props.theme.colors.primary['40']};
      // Inner circle indicator
      &::after {
        content: '';
        width: 10px;
        height: 10px;
        border-radius: ${props.theme.borderRadius.full};
        background-color: ${props.theme.colors.text.onPrimary}; // White dot
        transition: ${props.theme.transitions.fast};
      }
    `}

  // Disabled state overrides
  ${(props) =>
    props.disabled &&
    `
      background-color: ${props.theme.colors.neutral['90']};
      border-color: ${props.theme.colors.neutral['70']};
      cursor: not-allowed;
      &::after {
        background-color: ${props.theme.colors.neutral['50']}; // Dim inner dot
      }
    `}
`;

/**
 * A Radio component for the AscendUCore Design System.
 * Allows users to select a single option from a set. Supports checked and disabled states.
 * It should typically be used within a `RadioGroup` for proper functionality and accessibility.
 */
export const Radio: React.FC<RadioProps> = ({
  label,
  checked, // Controlled prop
  disabled,
  onChange,
  id, // Ensure ID is passed for accessibility
  name, // Crucial for grouping radio buttons
  value, // Crucial for identifying the selected radio button
  ...props
}) => {
  const uniqueId = id || React.useId(); // Generate unique ID if not provided

  return (
    <RadioWrapper className={disabled ? 'disabled' : ''} htmlFor={uniqueId}>
      <HiddenRadio
        type="radio"
        id={uniqueId}
        name={name} // Pass name for grouping
        value={value} // Pass value for selection
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
      <RadioIndicator
        checked={checked}
        disabled={disabled}
        className="radio-indicator"
      />
      {label && <span>{label}</span>}
    </RadioWrapper>
  );
};
