// src/components/Checkbox.tsx
// This file defines the Checkbox component for the AscendUCore Design System.
// Checkboxes allow users to select one or more options from a set.

import React from 'react';
import styled from '@emotion/styled';
import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

// Define the props interface for the Checkbox component
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The label associated with the checkbox.
   */
  label?: React.ReactNode;
  /**
   * If true, the checkbox will be in an indeterminate state (e.g., for "select all" checkboxes).
   * Note: This is a visual state only; the `checked` prop still determines the underlying value.
   */
  indeterminate?: boolean;
  /**
   * Optional Emotion `css` prop for additional custom styles.
   */
  css?: SerializedStyles;
}

// Styled wrapper for the custom checkbox
const CheckboxWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none; // Prevent text selection on label
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.body.fontSize};
  color: ${(props) => props.theme.colors.text.default};

  &:hover .checkbox-indicator {
    border-color: ${(props) => props.theme.colors.primary['50']};
  }

  &:focus-within .checkbox-indicator {
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
const HiddenCheckbox = styled.input`
  // Visually hide the checkbox but keep it accessible
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none; // Ensure it doesn't interfere with pointer events on the custom indicator
`;

// Custom visual indicator for the checkbox
const CheckboxIndicator = styled.div<Pick<CheckboxProps, 'checked' | 'indeterminate' | 'disabled'>>`
  width: 20px;
  height: 20px;
  border: 2px solid ${(props) => props.theme.colors.border.default};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${(props) => props.theme.spacing.sm};
  transition: ${(props) => props.theme.transitions.fast};
  flex-shrink: 0; // Prevent indicator from shrinking

  // Default unchecked state
  background-color: ${(props) => props.theme.colors.background.surface};
  color: ${(props) => props.theme.colors.text.onPrimary}; // Color for checkmark/dash

  // Checked state
  ${(props) =>
    props.checked &&
    css`
      background-color: ${props.theme.colors.primary['40']};
      border-color: ${props.theme.colors.primary['40']};
      // Checkmark icon (simple SVG or character for demonstration)
      &::after {
        content: '✔';
        font-size: 14px;
        line-height: 1;
      }
    `}

  // Indeterminate state
  ${(props) =>
    props.indeterminate &&
    css`
      background-color: ${props.theme.colors.primary['40']};
      border-color: ${props.theme.colors.primary['40']};
      // Dash icon
      &::after {
        content: '—'; // Em dash for indeterminate
        font-size: 16px;
        line-height: 1;
        font-weight: bold;
      }
    `}

  // Disabled state overrides
  ${(props) =>
    props.disabled &&
    css`
      background-color: ${props.theme.colors.neutral['90']};
      border-color: ${props.theme.colors.neutral['70']};
      cursor: not-allowed;
      &::after {
        color: ${props.theme.colors.neutral['50']}; // Dim checkmark/dash
      }
    `}
`;

/**
 * A Checkbox component for the AscendUCore Design System.
 * Allows users to select one or more options. Supports checked, unchecked,
 * indeterminate, and disabled states.
 */
export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  indeterminate = false,
  checked, // Controlled prop
  disabled,
  onChange,
  id, // Ensure ID is passed for accessibility
  ...props
}) => {
  const uniqueId = id || React.useId(); // Generate unique ID if not provided

  // Ref for the indeterminate state, as it's a DOM property
  const checkboxRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <CheckboxWrapper className={disabled ? 'disabled' : ''} htmlFor={uniqueId}>
      <HiddenCheckbox
        type="checkbox"
        id={uniqueId}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        ref={checkboxRef}
        {...props}
      />
      <CheckboxIndicator
        checked={checked}
        indeterminate={indeterminate}
        disabled={disabled}
        className="checkbox-indicator"
      />
      {label && <span>{label}</span>}
    </CheckboxWrapper>
  );
};
