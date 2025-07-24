// src/components/Option.tsx
// This file defines the Option component for the AscendUCore Design System.
// Option is an individual, selectable item within a Select component's dropdown.

import React, { cloneElement, Children, isValidElement, useRef, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { css, type SerializedStyles } from '@emotion/react';

// Define the props interface for the Option component
interface OptionProps extends React.LiHTMLAttributes<HTMLLIElement> {
  /**
   * The content to be rendered inside the option (e.g., text, icon).
   */
  children: React.ReactNode;
  /**
   * If true, the option will be disabled.
   */
  disabled?: boolean;
  /**
   * The unique value associated with this option.
   */
  value: string;
  /**
   * Indicates if this option is currently selected. Managed by the parent Select.
   */
  isSelected?: boolean;
  /**
   * Indicates if this option is currently highlighted (e.g., by keyboard navigation).
   * Managed by the parent Select.
   */
  isHighlighted?: boolean;
  /**
   * Callback function when the option is clicked. Managed by the parent Select.
   * This prop is renamed from `onSelect` to `onOptionSelect` to avoid type conflicts with
   * `React.LiHTMLAttributes`.
   * @param value The value of the clicked option.
   */
  onOptionSelect?: (value: string) => void;
  /**
   * Optional Emotion `css` prop for additional custom styles.
   */
  css?: SerializedStyles;
}

// Styled component for the base Option element
const StyledOption = styled.li<Pick<OptionProps, 'isSelected' | 'isHighlighted'>>`
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
  cursor: pointer;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.body.fontSize};
  color: ${(props) => props.theme.colors.text.default};
  text-align: left;
  transition: ${(props) => props.theme.transitions.fast};
  white-space: nowrap; // Prevent text wrapping
  min-height: 36px; // Ensure a minimum height for clickable area

  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme.colors.neutral['95']}; // Light hover background
  }

  // Highlighted state (for keyboard navigation)
  ${(props) =>
    props.isHighlighted &&
    `
      background-color: ${props.theme.colors.neutral['90']}; // Slightly darker background for highlight
      color: ${props.theme.colors.primary['40']}; // Primary color for highlighted text
    `}

  // Selected state
  ${(props) =>
    props.isSelected &&
    `
      background-color: ${props.theme.colors.primary['95']}; // Light primary background for selected
      color: ${props.theme.colors.primary['10']}; // Darker text for selected
      font-weight: ${props.theme.typography.button.fontWeight}; // Bolder for selected
      // Add a checkmark icon or similar for selected state (example using character)
      &::after {
        content: '✔';
        margin-left: auto; // Push to the right
        color: ${props.theme.colors.primary['40']};
        font-size: 1.2em;
      }
    `}

  // Disabled state
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    color: ${(props) => props.theme.colors.neutral['50']};
    background-color: transparent; // No hover effect when disabled
  }
`;

/**
 * An individual selectable item within a `Select` component's dropdown in the AscendUCore Design System.
 * It displays content and handles selection/highlighting states.
 */
export const Option: React.FC<OptionProps> = ({
  children,
  value,
  isSelected = false,
  isHighlighted = false,
  onOptionSelect, // Renamed from onSelect
  onClick, // Capture original onClick
  ...props
}) => {
  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    if (!props.disabled) {
      onOptionSelect?.(value); // Notify parent Select using the new prop name
      onClick?.(event); // Call original onClick if provided
    }
  };

  return (
    <StyledOption
      role="option"
      aria-selected={isSelected}
      isSelected={isSelected}
      isHighlighted={isHighlighted}
      onClick={handleClick}
      {...props}
    >
      {children}
    </StyledOption>
  );
};

// Define the props interface for the Select component
interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The placeholder text to display when no option is selected.
   */
  placeholder?: string;
  /**
   * The currently selected value (controlled component).
   * Must match the `value` prop of one of the `Option` children.
   */
  value?: string;
  /**
   * The initial selected value (uncontrolled component).
   * Must match the `value` prop of one of the `Option` children.
   */
  defaultValue?: string;
  /**
   * Callback function that is called when the selected value changes.
   * Provides the `value` of the newly selected option.
   */
  onValueChange?: (value: string) => void;
  /**
   * The `Option` components to be rendered within the select dropdown.
   * Only `Option` children are expected.
   */
  children: React.ReactNode;
  /**
   * If true, the select input will be disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Optional Emotion `css` prop for additional custom styles.
   */
  css?: SerializedStyles;
}

// Styled component for the main Select container
const SelectContainer = styled.div`
  position: relative;
  display: inline-block; // Allows it to sit inline with text
  width: 100%;
  max-width: 280px; // Default max width for select
  font-family: ${(props) => props.theme.typography.fontFamily};
`;

// Styled component for the visual trigger (the input-like part)
const SelectTrigger = styled.button<{ isOpen: boolean; hasValue: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${(props) => props.theme.spacing.md} ${(props) => props.theme.spacing.lg};
  border: 1px solid ${(props) => props.theme.colors.border.default};
  border-radius: ${(props) => props.theme.borderRadius.md};
  background-color: ${(props) => props.theme.colors.background.surface};
  cursor: pointer;
  text-align: left;
  font-size: ${(props) => props.theme.typography.body.fontSize};
  color: ${(props) => (props.hasValue ? props.theme.colors.text.default : props.theme.colors.text.placeholder)};
  transition: ${(props) => props.theme.transitions.default};
  box-shadow: ${(props) => props.theme.shadows.sm};

  &:hover {
    border-color: ${(props) => props.theme.colors.primary['50']};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary['60']};
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary['90']};
  }

  ${(props) =>
    props.isOpen &&
    css`
      border-color: ${props.theme.colors.primary['60']};
      box-shadow: 0 0 0 2px ${props.theme.colors.primary['90']};
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: ${(props) => props.theme.colors.neutral['90']};
    color: ${(props) => props.theme.colors.neutral['50']};
    border-color: ${(props) => props.theme.colors.neutral['70']};
    box-shadow: none;
  }
`;

// Styled component for the dropdown arrow icon
const DropdownArrow = styled.span<{ isOpen: boolean }>`
  margin-left: ${(props) => props.theme.spacing.sm};
  transition: transform 0.2s ease-in-out;
  transform: rotate(${(props) => (props.isOpen ? '180deg' : '0deg')});
  color: ${(props) => props.theme.colors.neutral['50']};
`;

// Styled component for the dropdown menu list
const SelectDropdown = styled.ul`
  position: absolute;
  top: 100%; // Position below the trigger
  left: 0;
  width: 100%;
  max-height: 250px; // Max height for scrollable options
  overflow-y: auto; // Enable scrolling for many options
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: ${(props) => props.theme.colors.background.surface};
  border: 1px solid ${(props) => props.theme.colors.border.default};
  border-top: none; // No top border as it connects to trigger
  border-bottom-left-radius: ${(props) => props.theme.borderRadius.md};
  border-bottom-right-radius: ${(props) => props.theme.borderRadius.md};
  box-shadow: ${(props) => props.theme.shadows.md};
  z-index: 999; // Ensure dropdown is above other content
`;

/**
 * A Select component for the AscendUCore Design System.
 * It allows users to choose a single option from a dropdown list,
 * providing accessibility features and controlled/uncontrolled behavior.
 */
export const Select: React.FC<SelectProps> = ({
  placeholder = 'Select an option',
  value: controlledValue,
  defaultValue,
  onValueChange,
  children,
  disabled = false,
  ...props
}) => {
  // Manage internal state for selected value (uncontrolled)
  const [internalValue, setInternalValue] = useState<string | undefined>(
    controlledValue !== undefined ? controlledValue : defaultValue
  );
  // Determine the effective selected value
  const selectedValue = controlledValue !== undefined ? controlledValue : internalValue;

  // Manage open/closed state of the dropdown
  const [isOpen, setIsOpen] = useState(false);
  // Manage highlighted option for keyboard navigation
  const [highlightedValue, setHighlightedValue] = useState<string | undefined>(selectedValue);

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  // Get all option values and their elements
  const options = Children.map(children, (child) => {
    if (isValidElement<OptionProps>(child) && child.type === Option) {
      return { value: child.props.value, label: child.props.children, disabled: child.props.disabled ?? false };
    }
    return null;
  })?.filter(Boolean) as { value: string; label: React.ReactNode }[];

  const selectedOptionLabel = options.find((opt) => opt.value === selectedValue)?.label || placeholder;

  // Effect to handle click outside to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Effect to manage highlighted item on open/value change
  useEffect(() => {
    if (isOpen) {
      // If opening, highlight the selected item or the first item
      setHighlightedValue(selectedValue || options[0]?.value);
    } else {
      // When closing, reset highlight
      setHighlightedValue(undefined);
    }
  }, [isOpen, selectedValue, options]);

  // Effect to scroll highlighted item into view
  useEffect(() => {
    if (isOpen && highlightedValue && dropdownRef.current) {
      const highlightedElement = dropdownRef.current.querySelector(`[data-value="${highlightedValue}"]`);
      highlightedElement?.scrollIntoView({ block: 'nearest' });
    }
  }, [isOpen, highlightedValue]);


  // Handle keyboard navigation
  const handleKeyDown = React.useCallback((event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;

    const currentIdx = highlightedValue ? options.findIndex(opt => opt.value === highlightedValue) : -1;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault(); // Prevent page scroll
        if (!isOpen) {
          setIsOpen(true);
        } else {
          const nextIdx = (currentIdx + 1) % options.length;
          setHighlightedValue(options[nextIdx]?.value);
        }
        break;
      case 'ArrowUp':
        event.preventDefault(); // Prevent page scroll
        if (!isOpen) {
          setIsOpen(true);
        } else {
          const prevIdx = (currentIdx - 1 + options.length) % options.length;
          setHighlightedValue(options[prevIdx]?.value);
        }
        break;
      case 'Enter':
      case ' ': // Space key
        event.preventDefault();
        if (isOpen && highlightedValue) {
          handleOptionSelect(highlightedValue);
          setIsOpen(false);
        } else if (!isOpen) {
          setIsOpen(true);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        triggerRef.current?.focus(); // Return focus to trigger
        break;
      case 'Tab':
        setIsOpen(false); // Close on tab out
        break;
      default:
        // Allow typing to jump to options (basic implementation)
        if (event.key.length === 1 && /[a-zA-Z0-9]/.test(event.key)) {
          const char = event.key.toLowerCase();
          const nextOption = options.find((opt, idx) =>
            idx > currentIdx && typeof opt.label === 'string' && opt.label.toLowerCase().startsWith(char)
          ) as {value: string; label: React.ReactNode} | undefined;
          if (nextOption) {
            setHighlightedValue(nextOption.value);
          } else {
            // Loop back to start if no further match
            const firstMatch = options.find(opt => String(opt.label).toLowerCase().startsWith(char));
          if (firstMatch) setHighlightedValue(firstMatch.value);
          } // Fix: Added closing brace for the else block
          if (!isOpen) setIsOpen(true);
        }
        break;
    }
  }, [isOpen, highlightedValue, options, disabled]);

  // Handle option selection
  const handleOptionSelect = (value: string) => {
    if (controlledValue === undefined) {
      setInternalValue(value);
    }
    onValueChange?.(value);
    setIsOpen(false); // Close dropdown on selection
    triggerRef.current?.focus(); // Return focus to trigger
  };

  return (
    <SelectContainer ref={containerRef} {...props}>
      <SelectTrigger
        ref={triggerRef}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        isOpen={isOpen}
        hasValue={selectedValue !== undefined && selectedValue !== ''}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={isOpen ? `${props.id || 'select'}-listbox` : undefined}
        aria-labelledby={props.id ? `${props.id}-label` : undefined} // If you add a separate label
        onKeyDown={handleKeyDown}
      >
        <span>{selectedOptionLabel}</span>
        <DropdownArrow isOpen={isOpen}>▼</DropdownArrow> {/* Unicode arrow */}
      </SelectTrigger>

      {isOpen && (
        <SelectDropdown
          ref={dropdownRef}
          role="listbox"
          id={`${props.id || 'select'}-listbox`}
          aria-activedescendant={highlightedValue ? `${props.id || 'select'}-option-${highlightedValue}` : undefined}
          tabIndex={-1} // Make it focusable but not part of tab flow
        >
          {Children.map(children, (child) => {
            if (isValidElement<OptionProps>(child) && child.type === Option) {
              return cloneElement(child, {
                isSelected: child.props.value === selectedValue,
                isHighlighted: child.props.value === highlightedValue || (selectedValue === undefined && child.props.value === options[0]?.value),
                onOptionSelect: handleOptionSelect, // Pass the selection handler
                id: `${props.id || 'select'}-option-${child.props.value}`, // Unique ID for ARIA
              });
            }
            console.warn('Select expects only Option components as children.');
            return null; // Return null for invalid children
          })}
        </SelectDropdown>
      )}
    </SelectContainer>
  );
};
