// src/components/Button.tsx
// This file defines the Button component for the AscendUCore Design System.
// It uses Emotion's `styled` API to apply styles based on the theme,
// supporting different variants, sizes, and states (e.g., disabled).

import React from 'react';
import styled from '@emotion/styled';
import type { SerializedStyles } from '@emotion/react';
import { Icon } from '../Icon'; // Import Icon component for icon buttons

// Define possible variants for the button, including 'icon'
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'destructive' | 'icon';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: React.ReactNode; // Children can be optional for icon buttons (when variant is 'icon')
  /**
   * Optional Emotion `css` prop for additional custom styles.
   */
  css?: SerializedStyles; // For additional custom styles using Emotion's css prop
}

const StyledButton = styled.button<Omit<ButtonProps, 'children' | 'css'>>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  font-family: ${(props) => props.theme.typography.fontFamily};
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  text-decoration: none; // In case it's used as a link
  white-space: nowrap; // Prevent text wrapping in buttons
  box-sizing: border-box; /* Include padding in element's total width/height */

  // Default border-radius for non-icon buttons
  border-radius: ${(props) => props.theme.borderRadius.md};

  // Sizing variants (for non-icon buttons)
  ${(props) => {
    if (props.variant !== 'icon') {
      switch (props.size) {
        case 'sm':
          return `
            padding: ${props.theme.spacing.sm} ${props.theme.spacing.md};
            font-size: ${props.theme.typography.bodySmall.fontSize};
          `;
        case 'lg':
          return `
            padding: ${props.theme.spacing.lg} ${props.theme.spacing.xl};
            font-size: ${props.theme.typography.bodyLarge.fontSize};
          `;
        case 'md':
        default:
          return `
            padding: ${props.theme.spacing.md} ${props.theme.spacing.lg};
            font-size: ${props.theme.typography.button.fontSize};
          `;
      }
    }
    return ''; // No padding/font-size for icon variant here, handled below
  }}

  // Color variants and Icon Button specific styles
  ${(props) => {
    let styles = '';
    let iconColor = ''; // To pass to the Icon component

    switch (props.variant) {
      case 'secondary':
        styles += `
          background-color: ${props.theme.colors.action.secondary};
          color: ${props.theme.colors.text.onSecondary};
          &:hover {
            background-color: ${props.theme.colors.action.secondaryHover};
            box-shadow: ${props.theme.shadows.sm};
          }
        `;
        iconColor = props.theme.colors.text.onSecondary;
        break;
      case 'tertiary':
        styles += `
          background-color: ${props.theme.colors.action.tertiary};
          color: ${props.theme.colors.text.onPrimary};
          &:hover {
            background-color: ${props.theme.colors.action.tertiaryHover};
            box-shadow: ${props.theme.shadows.sm};
          }
        `;
        iconColor = props.theme.colors.text.onPrimary;
        break;
      case 'ghost':
        styles += `
          background-color: transparent;
          color: ${props.theme.colors.text.default};
          &:hover {
            background-color: ${props.theme.colors.action.ghostHover};
            box-shadow: ${props.theme.shadows.sm};
          }
        `;
        iconColor = props.theme.colors.text.default;
        break;
      case 'destructive':
        styles += `
          background-color: ${props.theme.colors.action.error};
          color: ${props.theme.colors.text.onError};
          &:hover {
            background-color: ${props.theme.colors.action.errorHover};
            box-shadow: ${props.theme.shadows.sm};
          }
        `;
        iconColor = props.theme.colors.text.onError;
        break;
      case 'icon': // Icon Button specific styles
        styles += `
          border-radius: ${props.theme.borderRadius.full}; /* Completely rounded */
          flex-shrink: 0; /* Prevent shrinking in flex containers */
          background-color: transparent; /* Default for ghost-like icon buttons */
          color: ${props.theme.colors.neutral['50']}; /* Default icon color */

          &:hover {
            background-color: ${props.theme.colors.neutral['95']}; /* Light hover background */
            box-shadow: ${props.theme.shadows.sm};
          }
        `;
        iconColor = props.theme.colors.neutral['50']; // Default icon color for icon variant
        // Adjust size based on size prop for icon buttons
        switch (props.size) {
          case 'sm':
            styles += `
              width: 32px;
              height: 32px;
              padding: ${props.theme.spacing.xs};
            `;
            break;
          case 'lg':
            styles += `
              width: 48px;
              height: 48px;
              padding: ${props.theme.spacing.md};
            `;
            break;
          case 'md':
          default:
            styles += `
              width: 40px;
              height: 40px;
              padding: ${props.theme.spacing.sm};
            `;
            break;
        }
        break;
      case 'primary':
      default:
        styles += `
          background-color: ${props.theme.colors.action.primary};
          color: ${props.theme.colors.text.onPrimary};
          &:hover {
            background-color: ${props.theme.colors.action.primaryHover};
            box-shadow: ${props.theme.shadows.sm};
          }
        `;
        iconColor = props.theme.colors.text.onPrimary;
        break;
    }

    // Apply disabled styles
    if (props.disabled) {
      styles += `
        opacity: 0.6;
        cursor: not-allowed;
        box-shadow: none;
        background-color: ${props.theme.colors.neutral['80']};
        color: ${props.theme.colors.neutral['50']};
      `;
      iconColor = props.theme.colors.neutral['50']; // Disabled icon color
    }

    // Pass calculated iconColor via a CSS variable or directly to a nested Icon component
    // For direct children, this is handled by the component logic.
    styles += `
      & > .ascenducore-button-icon { /* Target the Icon component's wrapper class */
        color: ${iconColor}; /* Apply the calculated icon color */
      }
    `;

    return styles;
  }}
`;

/**
 * A versatile Button component for various actions within the AscendUCore Design System.
 * Supports different visual variants (primary, secondary, ghost, destructive, icon) and sizes (sm, md, lg).
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  ...props
}) => {
  let renderedChildren = children;

  // If variant is 'icon', ensure children are rendered as an Icon component
  if (variant === 'icon') {
    if (typeof children === 'string') {
      // If children is a string (assumed to be Font Awesome class name)
      renderedChildren = (
        <Icon
          name={children}
          size={size} // Pass button's size to icon for consistent sizing
          className="ascenducore-button-icon"
          // Color will be set by parent StyledButton CSS, but can be explicitly set here if needed
        />
      );
    } else if (React.isValidElement(children) && children.type === Icon) {
      // If children is already an Icon component, clone it to add class and ensure sizing/coloring
      renderedChildren = React.cloneElement(children, {
        className: `${(children.props as React.HTMLAttributes<HTMLElement>).className || ''} ascenducore-button-icon`, // Explicitly cast children.props
        size: (children.props as any).size || size, // Prefer child's size, fallback to button's size
        // Color will be set by parent StyledButton CSS
      } as any);
    } else {
      console.warn("Button with variant='icon' expects children to be an icon name string or an Icon component.");
      return null; // Or render a fallback for invalid children
    }
  }

  return (
    <StyledButton variant={variant} size={size} {...props}>
      {renderedChildren}
    </StyledButton>
  );
};
