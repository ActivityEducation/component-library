// src/components/Input.tsx
// This file defines the Input component for the AscendUCore Design System.
// It provides a text input field with an outlined appearance, supporting
// floating labels, helper text, error states, and leading/trailing content.

import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { theme } from '../../theme';
import { Icon } from '../Icon'; // Import the Icon component

// Define the props interface for the Input component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The label text for the input field. It will float above the input.
   */
  label?: string;
  /**
   * Helper text displayed below the input field.
   */
  helperText?: string;
  /**
   * If true, the input will display an error state.
   * @default false
   */
  error?: boolean;
  /**
   * The error message to display when `error` is true.
   */
  errorMessage?: string;
  /**
   * Content to be displayed at the leading (left) side of the input,
   * typically an icon or currency symbol.
   */
  leading?: React.ReactNode;
  /**
   * Content to be displayed at the trailing (right) side of the input,
   * typically an icon, clear button, or unit.
   */
  trailing?: React.ReactNode;
  /**
   * Optional Emotion `css` prop for additional custom styles for the outer container.
   */
  css?: SerializedStyles;
}

// Main container for the input component
const InputContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  vertical-align: top;
  width: 100%;
  font-family: ${theme.typography.fontFamily};
`;

// Wrapper for the input field and label, defining the outlined appearance
const InputWrapper = styled.div<{ isFocused: boolean; hasValue: boolean | null; error: boolean; disabled: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => (props.error ? props.theme.colors.error['40'] : props.theme.colors.border.default)};
  border-radius: ${(props) => props.theme.borderRadius.md};
  background-color: ${(props) => props.theme.colors.background.surface};
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-shadow: ${(props) => props.theme.shadows.sm};

  &:hover {
    border-color: ${(props) => (props.error ? props.theme.colors.error['50'] : props.theme.colors.primary['50'])};
  }

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${props.theme.colors.primary['40']};
      box-shadow: 0 0 0 2px ${props.theme.colors.primary['90']};
    `}

  ${(props) =>
    props.disabled &&
    css`
      background-color: ${props.theme.colors.neutral['95']};
      border-color: ${props.theme.colors.neutral['80']};
      cursor: not-allowed;
      box-shadow: none;
    `}
`;

// Styled label for the input field
const Label = styled.label<{ isFloating: boolean | null; isFocused: boolean; error: boolean; disabled: boolean; hasLeadingAdornment: boolean }>`
  position: absolute;
  /* Initial left position: considers leading adornment */
  left: ${(props) => {
    // Calculate the space taken by a 'md' size icon (20px) plus its horizontal padding (2 * theme.spacing.sm = 16px)
    const leadingAdornmentTotalWidth = `calc(20px + ${props.theme.spacing.sm} * 2)`; // 36px
    const basePadding = props.theme.spacing.lg; // Base padding for input text when no leading adornment (16px)
    const adornmentOffset = `calc(${leadingAdornmentTotalWidth} + ${props.theme.spacing.xs})`; // 36px + 4px = 40px

    return props.hasLeadingAdornment ? adornmentOffset : basePadding;
  }};
  
  top: 50%;
  transform: translateY(-50%);
  color: ${(props) => (props.error ? props.theme.colors.error['40'] : props.theme.colors.text.placeholder)};
  font-size: ${theme.typography.body.fontSize};
  transition: all 0.2s ease-in-out, left 0.2s ease-in-out; /* Add left to transition */
  pointer-events: none; // Allow clicks to pass through to input
  background-color: ${(props) => props.theme.colors.background.surface};
  padding: 0 4px; // Padding for the "notch" effect

  ${(props) =>
    (props.isFloating || props.isFocused) &&
    css`
      top: 0;
      transform: translateY(-50%) scale(0.85); // Smaller and moved up
      font-size: ${theme.typography.bodySmall.fontSize}; // Smaller font when floating
      color: ${(props.error ? props.theme.colors.error['40'] : props.isFocused ? props.theme.colors.primary['40'] : props.theme.colors.neutral['50'])};
      /* When floating, always align to the standard left padding (theme.spacing.lg) */
      left: ${props.theme.spacing.lg}; /* This ensures consistent alignment when floating */
    `}

  ${(props) =>
    props.disabled &&
    css`
      color: ${props.theme.colors.neutral['50']};
    `}
`;

// Styled input element
const StyledInput = styled.input<{ hasLeading: boolean; hasTrailing: boolean }>`
  flex-grow: 1; // Take up remaining space
  border: none;
  background-color: transparent;
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body.fontSize};
  color: ${theme.colors.text.default};
  line-height: 1.5; // Ensure consistent line height
  min-height: 40px; // Minimum height for input area
  box-sizing: border-box; // Include padding in element's total width

  /* Dynamic padding based on adornments */
  padding-top: ${(props) => props.theme.spacing.md};
  padding-bottom: ${(props) => props.theme.spacing.md};
  padding-left: ${(props) => (props.hasLeading ? props.theme.spacing.sm : props.theme.spacing.lg)};
  padding-right: ${(props) => (props.hasTrailing ? props.theme.spacing.sm : props.theme.spacing.lg)};


  &:focus {
    outline: none; // Outline handled by InputWrapper
  }

  &::placeholder {
    color: transparent; // Hide native placeholder when label is used
  }

  &:disabled {
    cursor: not-allowed;
    color: ${theme.colors.neutral['50']};
  }
`;

// Styled container for leading/trailing content
const ContentAdornment = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${(props) => props.theme.spacing.sm}; /* Padding around the icon/content */
  color: ${(props) => props.theme.colors.neutral['50']}; // Default color for icons/text
  flex-shrink: 0; // Prevent shrinking
`;

/**
 * An Input component with an outlined appearance for the AscendUCore Design System.
 * Supports floating labels, helper text, error states, and leading/trailing content.
 */
export const Input: React.FC<InputProps> = ({
  label,
  helperText,
  error = false,
  errorMessage,
  leading,
  trailing,
  value,
  defaultValue,
  onFocus,
  onBlur,
  onChange,
  disabled,
  id,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(value !== undefined ? value : (defaultValue !== undefined ? defaultValue : ''));

  // Use a ref for the actual input element to check its value
  const inputRef = useRef<HTMLInputElement>(null);

  // Determine if the label should float (either focused or has a value)
  const hasValue = !!internalValue || (inputRef.current && !!inputRef.current.value);
  const isFloating = isFocused || hasValue;

  // Determine presence of leading/trailing adornments
  const hasLeadingAdornment = !!leading;
  const hasTrailingAdornment = !!trailing;

  // Update internal value if controlled 'value' prop changes
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const handleFocus = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(event);
  }, [onFocus]);

  const handleBlur = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(event);
  }, [onBlur]);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    // Only update internal state if it's an uncontrolled component
    if (value === undefined) {
      setInternalValue(event.target.value);
    }
    onChange?.(event); // Call original onChange if provided
  }, [value, onChange]);

  const uniqueId = id || `input-${React.useId()}`; // Generate unique ID for accessibility

  return (
    <InputContainer {...props}>
      <InputWrapper isFocused={isFocused} hasValue={hasValue} error={error} disabled={disabled || false}>
        {/* Render leading content, wrapping in Icon if it's a string (Font Awesome class) */}
        {leading && (
          <ContentAdornment>
            {typeof leading === 'string' ? <Icon name={leading} size="md" color={disabled ? theme.colors.neutral['50'] : theme.colors.neutral['50']} /> : leading}
          </ContentAdornment>
        )}
        <StyledInput
          id={uniqueId}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          value={value} // Use controlled value if provided, otherwise internalValue
          defaultValue={defaultValue} // Only effective for uncontrolled
          disabled={disabled}
          placeholder={label && !isFloating ? label : props.placeholder} // Show label as placeholder only when not floating
          hasLeading={hasLeadingAdornment} // Pass prop for padding adjustment
          hasTrailing={hasTrailingAdornment} // Pass prop for padding adjustment
          {...props}
        />
        {label && (
          <Label htmlFor={uniqueId} isFloating={isFloating} isFocused={isFocused} error={error} disabled={disabled || false} hasLeadingAdornment={hasLeadingAdornment}>
            {label}
          </Label>
        )}
        {/* Render trailing content, wrapping in Icon if it's a string (Font Awesome class) */}
        {trailing && (
          <ContentAdornment>
            {typeof trailing === 'string' ? <Icon name={trailing} size="md" color={disabled ? theme.colors.neutral['50'] : theme.colors.neutral['50']} /> : trailing}
          </ContentAdornment>
        )}
      </InputWrapper>
      {(helperText || (error && errorMessage)) && (
        <span
          style={{
            fontSize: theme.typography.caption.fontSize,
            color: error ? theme.colors.error['40'] : theme.colors.neutral['50'],
            marginTop: theme.spacing.xxs,
            paddingLeft: theme.spacing.sm,
          }}
        >
          {error && errorMessage ? errorMessage : helperText}
        </span>
      )}
    </InputContainer>
  );
};
