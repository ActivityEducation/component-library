// src/components/Option.tsx
// This file defines the Option component for the AscendUCore Design System.
// Option is an individual, selectable item within a Select component's dropdown.

import React, { cloneElement, Children, isValidElement, useRef, useState, useEffect, useCallback } from 'react';
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
 *
 * ```typescript
 * import { Option } from "@activityeducation/component-library";
 * ```
 *
 * ## Justification
 * The `Option` component is a fundamental building block for dropdown menus, providing
 * a standardized visual and interactive representation for selectable choices. By being
 * a dedicated component, it ensures consistency in styling, hover effects, and active
 * states across all `Select` components in the application. It also encapsulates the
 * logic for communicating its selection to the parent `Select` component.
 *
 * ## Acceptance Criteria
 * - **GIVEN** an `Option` is rendered, **THEN** it should display its `children` content.
 * - **GIVEN** `isSelected` is true, **THEN** the option should display a distinct
 * selected state (e.g., different background/text color, checkmark).
 * - **GIVEN** `isHighlighted` is true, **THEN** the option should display a distinct
 * highlighted state (e.g., different background/text color for keyboard navigation).
 * - **WHEN** the `Option` is clicked, **THEN** the `onOptionSelect` callback should
 * be triggered with the `Option`'s `value`.
 * - **GIVEN** `disabled` is true, **THEN** the option should be visually disabled
 * and not clickable.
 *
 * ## Example & Props
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

// Define props for the Select component
interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The current selected value of the select. Makes it a controlled component.
   */
  value?: string;
  /**
   * The initial selected value of the select. Makes it an uncontrolled component.
   */
  defaultValue?: string;
  /**
   * Callback function when the selected value changes.
   * @param value The new selected value.
   */
  onValueChange?: (value: string) => void;
  /**
   * Placeholder text to display when no value is selected.
   */
  placeholder?: string;
  /**
   * If true, the select will be disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * The unique ID for the select component, used for accessibility (aria-labelledby, etc.).
   */
  id?: string;
  /**
   * Optional Emotion `css` prop for additional custom styles for the outer container.
   */
  css?: SerializedStyles;
  /**
   * Children should be `Option` components.
   */
  children: React.ReactElement<OptionProps> | React.ReactElement<OptionProps>[];
}

// Styled components for the Select
interface SelectTriggerProps {
  isOpen: boolean;
  disabled: boolean;
}

const SelectContainer = styled.div`
  position: relative;
  /*
    Use inline-flex to make the container shrink-wrap its content by default.
    This allows it to expand to fit the text length of the selected option.
    It will still respect explicit width/max-width set by a parent component
    or directly via style/className on the Select component itself.
  */
  display: inline-flex;
  font-family: ${(props) => props.theme.typography.fontFamily};
  /* Removed max-width: 300px; to allow content-based expansion */
`;

const SelectTrigger = styled.div<SelectTriggerProps>`
  display: flex;
  justify-content: space-between; /* Pushes content and arrow apart */
  align-items: center;
  width: 100%; /* Ensures trigger takes full width of its inline-flex container */
  height: 48px; /* Standard input height */
  border: 1px solid ${(props) => props.theme.colors.border.default};
  border-radius: ${(props) => props.theme.borderRadius.md};
  background-color: ${(props) => props.theme.colors.background.surface};
  color: ${(props) => props.theme.colors.text.default};
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;

  padding: 0 ${(props) => props.theme.spacing.lg} 0 ${(props) => props.theme.spacing.lg}; /* Consistent padding on both sides */


  &:hover {
    border-color: ${(props) => props.theme.colors.border.strong};
  }

  &:focus {
    border-color: ${(props) => props.theme.colors.border.focus};
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary['90']};
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: ${props.theme.colors.neutral['95']};
      color: ${props.theme.colors.neutral['60']};
      cursor: not-allowed;
      border-color: ${props.theme.colors.neutral['80']};
      &:hover {
        border-color: ${props.theme.colors.neutral['80']};
      }
    `}

  span {
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${(props) => props.theme.typography.body.fontSize};
    color: inherit;
  }
`;

interface DropdownArrowProps {
  isOpen: boolean;
}

const DropdownArrow = styled.span<DropdownArrowProps>`
  transition: transform 0.2s ease-in-out;
  transform: rotate(${(props) => (props.isOpen ? '180deg' : '0deg')});
  font-size: ${(props) => props.theme.typography.caption.fontSize}; /* Match caption font size for consistency */
  color: ${(props) => props.theme.colors.text.default};
  display: flex; /* Ensures it respects padding and flex alignment */
  align-items: center;
  justify-content: center;
`;

const SelectDropdown = styled.ul`
  position: absolute;
  top: 100%; /* Position below the trigger */
  left: 0;
  width: 100%; /* Dropdown should always match the trigger's width */
  background-color: ${(props) => props.theme.colors.background.surface};
  border: 1px solid ${(props) => props.theme.colors.border.default};
  border-radius: ${(props) => props.theme.borderRadius.md};
  box-shadow: ${(props) => props.theme.shadows.md};
  max-height: 200px;
  overflow-y: auto;
  z-index: 100; /* Ensure it appears above other content */
  list-style: none;
  padding: ${(props) => props.theme.spacing.xs} 0;
  margin-top: ${(props) => props.theme.spacing.xs}; /* Small gap between trigger and dropdown */

  /* Hide scrollbar for Chrome, Safari, and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: none; /* Firefox */

  /* Hide scrollbar for IE and Edge */
  -ms-overflow-style: none; /* IE and Edge */
`;

/**
 * The **Select** component provides a customizable dropdown menu for selecting a single
 * option from a list. It acts as a controlled or uncontrolled component, managing its
 * internal state or responding to external `value` changes. It works in conjunction
 * with the `Option` component to display individual choices.
 *
 * This component ensures an accessible and visually consistent selection experience
 * across the application, handling keyboard navigation, dropdown toggling, and
 * value changes.
 *
 * ```typescript
 * import { Select, Option } from "@activityeducation/component-library";
 * ```
 *
 * ## Justification
 * A standardized `Select` component is crucial for forms and interactive interfaces
 * where users need to choose from a predefined set of options. It improves usability
 * by providing a compact and organized way to present choices, preventing clutter
 * on the screen. By abstracting the complex logic of dropdown behavior, accessibility
 * (ARIA attributes, keyboard navigation), and state management, it simplifies development
 * and ensures a consistent user experience. Its integration with the `Option` component
 * allows for flexible content within each selectable item.
 *
 * ## Acceptance Criteria
 * - **GIVEN** the `Select` is rendered, **THEN** it should display a trigger button
 * with the currently selected option's label or a placeholder.
 * - **GIVEN** `defaultValue` is provided, **THEN** the `Select` should initially
 * display the option matching that value (uncontrolled behavior).
 * - **GIVEN** `value` and `onValueChange` are provided, **THEN** the `Select` should
 * behave as a controlled component, with the displayed value determined by the `value` prop.
 * - **WHEN** the trigger is clicked, **THEN** the dropdown list of `Option` components
 * should toggle visibility.
 * - **WHEN** an `Option` within the dropdown is clicked, **THEN** the `Select`'s value
 * should update, the dropdown should close, and the `onValueChange` callback should be triggered.
 * - **GIVEN** `disabled` is true, **THEN** the `Select` trigger should be visually
 * disabled and not interactive.
 * - **WHEN** the dropdown is open, **THEN** keyboard navigation (ArrowUp, ArrowDown, Enter, Escape)
 * should allow users to highlight and select options, and close the dropdown.
 * - **GIVEN** many `Option` children, **THEN** the dropdown should be vertically scrollable.
 * - **WHEN** the `Select` loses focus, **THEN** the dropdown should close.
 *
 * ## Example & Props
 */
export const Select: React.FC<SelectProps> = ({
  value,
  defaultValue,
  onValueChange,
  placeholder,
  disabled = false,
  children,
  id,
  style,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  // Internal state for selected value if uncontrolled, or to manage initial state
  const [internalValue, setInternalValue] = useState<string | undefined>(
    value !== undefined ? value : defaultValue
  );
  const [highlightedValue, setHighlightedValue] = useState<string | undefined>(internalValue);

  const selectRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  // Determine the effective value (controlled prop takes precedence)
  const effectiveValue = value !== undefined ? value : internalValue;

  // Find the label for the currently selected option
  const selectedOptionLabel = Children.toArray(children).find(
    (child): child is React.ReactElement<OptionProps> =>
      isValidElement<OptionProps>(child) && child.props.value === effectiveValue
  )?.props.children || placeholder;


  const handleOptionSelect = useCallback(
    (optionValue: string) => {
      if (disabled) return;
      setInternalValue(optionValue); // Update internal state for uncontrolled flow
      onValueChange?.(optionValue); // Call parent handler
      setIsOpen(false); // Close dropdown
      setHighlightedValue(optionValue); // Reset highlighted to selected on close
    },
    [onValueChange, disabled]
  );

  const toggleDropdown = useCallback(() => {
    if (disabled) return;
    setIsOpen((prev) => !prev);
    // When opening, ensure highlighted value is the current selected value
    if (!isOpen && effectiveValue) {
      setHighlightedValue(effectiveValue);
    } else if (!isOpen && !effectiveValue && Children.toArray(children).length > 0) {
      // If no value, highlight the first option when opening
      const firstOption = Children.toArray(children).find(
        (child) => isValidElement<OptionProps>(child) && !child.props.disabled
      ) as React.ReactElement<OptionProps>;
      setHighlightedValue(firstOption?.props.value);
    }
  }, [disabled, isOpen, effectiveValue, children]);


  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
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

  // Keyboard navigation for dropdown
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const options = Children.toArray(children).filter(
        (child) => isValidElement<OptionProps>(child) && !child.props.disabled
      ) as React.ReactElement<OptionProps>[];

      if (options.length === 0) return;

      const currentHighlightedIndex = options.findIndex(
        (option) => option.props.value === highlightedValue
      );

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault(); // Prevent page scrolling
          setIsOpen(true);
          setHighlightedValue(
            options[(currentHighlightedIndex + 1) % options.length]?.props.value
          );
          break;
        case 'ArrowUp':
          event.preventDefault(); // Prevent page scrolling
          setIsOpen(true);
          setHighlightedValue(
            options[
              (currentHighlightedIndex - 1 + options.length) % options.length
            ]?.props.value
          );
          break;
        case 'Enter':
        case ' ': // Space key to select
          event.preventDefault();
          if (isOpen && highlightedValue) {
            handleOptionSelect(highlightedValue);
          } else if (!isOpen) {
            toggleDropdown();
          }
          break;
        case 'Escape':
          if (isOpen) {
            event.preventDefault();
            setIsOpen(false);
            selectRef.current?.focus(); // Return focus to the trigger
          }
          break;
        case 'Tab':
          if (isOpen) {
            setIsOpen(false); // Close on tab out
          }
          break;
        default:
          // For typing to select an option (e.g., 'p' for Paragraph)
          if (!isOpen && /^[a-zA-Z0-9]$/.test(event.key)) {
            const typedChar = event.key.toLowerCase();
            const matchedOption = options.find(opt =>
              typeof opt.props.children === 'string' &&
              opt.props.children.toLowerCase().startsWith(typedChar)
            );
            if (matchedOption) {
              setHighlightedValue(matchedOption.props.value);
              setIsOpen(true);
            }
          }
          break;
      }
    },
    [children, isOpen, highlightedValue, handleOptionSelect, toggleDropdown]
  );

  // Scroll highlighted option into view
  useEffect(() => {
    if (isOpen && dropdownRef.current && highlightedValue) {
      const highlightedElement = dropdownRef.current.querySelector(
        `#${id || 'select'}-option-${highlightedValue}`
      );
      highlightedElement?.scrollIntoView({ block: 'nearest' });
    }
  }, [isOpen, highlightedValue, id]);


  return (
    <SelectContainer ref={selectRef} style={style} {...props}>
      <SelectTrigger
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={isOpen ? `${id || 'select'}-listbox` : undefined}
        aria-labelledby={id ? `${id}-label` : undefined} // If you add a separate label
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0} // Make trigger focusable unless disabled
        isOpen={isOpen}
        disabled={disabled}
      >
        <span>{selectedOptionLabel}</span>
        <DropdownArrow isOpen={isOpen}>▼</DropdownArrow> {/* Unicode arrow */}
      </SelectTrigger>

      {isOpen && (
        <SelectDropdown
          ref={dropdownRef}
          role="listbox"
          id={`${id || 'select'}-listbox`}
          aria-activedescendant={highlightedValue ? `${id || 'select'}-option-${highlightedValue}` : undefined}
          tabIndex={-1} // Make it focusable but not part of tab flow
        >
          {Children.map(children, (child) => {
            if (isValidElement<OptionProps>(child) && child.type === Option) {
              return cloneElement(child, {
                isSelected: child.props.value === effectiveValue,
                isHighlighted: child.props.value === highlightedValue || (effectiveValue === undefined && child.props.value === (Children.toArray(children).find(c => isValidElement<OptionProps>(c) && c.type === Option) as React.ReactElement<OptionProps>)?.props.value), // Highlight first if no effectiveValue
                onOptionSelect: handleOptionSelect, // Pass the selection handler
                id: `${id || 'select'}-option-${child.props.value}`, // Unique ID for ARIA
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
