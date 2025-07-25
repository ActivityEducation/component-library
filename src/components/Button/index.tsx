// src/components/Button.tsx
// This file defines the Button component for the AscendUCore Design System.
// It uses Emotion's `styled` API to apply styles based on the theme,
// supporting different variants, sizes, and states (e.g., disabled).

import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { SerializedStyles } from '@emotion/react';
import { Icon } from '../Icon'; // Import Icon component for icon buttons

// Define possible variants for the button
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'destructive' | 'icon';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /**
   * If true, the button will display an active state (e.g., for toggles or selected states).
   * @default false
   */
  active?: boolean;
  /**
   * Optional Emotion `css` prop for additional custom styles.
   */
  css?: SerializedStyles;
  /**
   * The content to be rendered inside the button.
   * If `variant` is 'icon', this should be an `Icon` component or an inline SVG.
   */
  children: React.ReactNode;
}

const StyledButton = styled.button<Omit<ButtonProps, 'children' | 'css'>>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  border-radius: ${(props) => props.theme.borderRadius.md}; /* Default border radius */
  font-family: ${(props) => props.theme.typography.fontFamily};
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;
  text-decoration: none; // In case it's used as a link
  position: relative; // For potential pseudo-elements or overlays

  // Sizing variants
  ${(props) => {
    switch (props.size) {
      case 'sm':
        return `
          padding: ${props.theme.spacing.sm} ${props.theme.spacing.md};
          font-size: ${props.theme.typography.body.fontSize};
        `;
      case 'lg':
        return `
          padding: ${props.theme.spacing.lg} ${props.theme.spacing.xl};
          font-size: ${props.theme.typography.h1.fontSize.replace('48px', '20px')}; /* Example adjustment for a smaller heading */
        `;
      case 'md':
      default:
        return `
          padding: ${props.theme.spacing.md} ${props.theme.spacing.lg};
          font-size: ${props.theme.typography.body.fontSize};
        `;
    }
  }}

  // Color variants
  ${(props) => {
    switch (props.variant) {
      case 'secondary':
        return `
          background-color: ${props.theme.colors.action.secondary};
          color: ${props.theme.colors.text.onSecondary};
          &:hover {
            background-color: ${props.theme.colors.action.secondaryHover};
            box-shadow: ${props.theme.shadows.sm};
          }
          ${props.active &&
            css`
              background-color: ${props.theme.colors.secondary['50']};
              color: ${props.theme.colors.secondary['100']};
              box-shadow: inset 0 0 0 2px ${props.theme.colors.secondary['30']};
            `}
        `;
      case 'tertiary':
        return `
          background-color: ${props.theme.colors.tertiary['40']};
          color: ${props.theme.colors.tertiary['99']};
          &:hover {
            background-color: ${props.theme.colors.tertiary['50']};
            box-shadow: ${props.theme.shadows.sm};
          }
          ${props.active &&
            css`
              background-color: ${props.theme.colors.tertiary['30']};
              color: ${props.theme.colors.tertiary['100']};
              box-shadow: inset 0 0 0 2px ${props.theme.colors.tertiary['20']};
            `}
        `;
      case 'ghost':
        return `
          background-color: transparent;
          color: ${props.theme.colors.text.default};
          &:hover {
            background-color: ${props.theme.colors.neutral['95']};
            box-shadow: ${props.theme.shadows.sm};
          }
          ${props.active &&
            css`
              background-color: ${props.theme.colors.neutral['90']};
              color: ${props.theme.colors.primary['40']}; /* Active ghost might use primary accent */
              box-shadow: inset 0 0 0 1px ${props.theme.colors.neutral['70']};
            `}
        `;
      case 'destructive':
        return `
          background-color: ${props.theme.colors.action.error};
          color: ${props.theme.colors.text.onError};
          &:hover {
            background-color: ${props.theme.colors.action.errorHover};
            box-shadow: ${props.theme.shadows.sm};
          }
          ${props.active &&
            css`
              background-color: ${props.theme.colors.error['50']};
              color: ${props.theme.colors.error['100']};
              box-shadow: inset 0 0 0 2px ${props.theme.colors.error['30']};
            `}
        `;
      case 'icon':
        const iconSize = props.size === 'sm' ? '32px' : props.size === 'lg' ? '56px' : '40px'; // Consistent size for icon button
        return `
          width: ${iconSize};
          height: ${iconSize};
          padding: 0; // No padding for icon-only button
          border-radius: ${props.theme.borderRadius.full}; // Fully rounded
          background-color: transparent;
          color: ${props.theme.colors.text.default}; // Default icon color

          &:hover {
            background-color: ${props.theme.colors.neutral['95']};
          }
          ${props.active &&
            css`
              background-color: ${props.theme.colors.neutral['90']};
              color: ${props.theme.colors.primary['40']};
              box-shadow: inset 0 0 0 1px ${props.theme.colors.neutral['70']};
            `}
        `;
      case 'primary':
      default:
        return `
          background-color: ${props.theme.colors.action.primary};
          color: ${props.theme.colors.text.onPrimary};
          &:hover {
            background-color: ${props.theme.colors.action.primaryHover};
            box-shadow: ${props.theme.shadows.sm};
          }
          ${props.active &&
            css`
              background-color: ${props.theme.colors.primary['50']};
              color: ${props.theme.colors.primary['100']};
              box-shadow: inset 0 0 0 2px ${props.theme.colors.primary['30']};
            `}
        `;
    }
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  active = false,
  children,
  ...props
}) => {
  // If the variant is 'icon', ensure the child is wrapped in an Icon component if it's just a string,
  // or that it's a valid React element.
  const renderedChildren = variant === 'icon' && typeof children === 'string'
    ? <Icon name={children} /> // Assuming string children for icon variant are Font Awesome names
    : children;

  return (
    <StyledButton variant={variant} size={size} active={active} {...props}>
      {renderedChildren}
    </StyledButton>
  );
};
