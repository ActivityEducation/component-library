// src/components/Icon.tsx
// This file defines the Icon component for the AscendUCore Design System.
// It provides a flexible way to display icons, supporting Font Awesome,
// SVG URLs, and inline SVG content, akin to @angular/material/icon.

import React from 'react';
import styled from '@emotion/styled';
import type { SerializedStyles } from '@emotion/react';

// IMPORTANT: For Font Awesome icons to render, you need to include its CSS in your project.
// Example in your public/index.html or main CSS file:
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" xintegrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

// Define possible sizes for the Icon
export type IconSize = 'sm' | 'md' | 'lg' | 'xl';

// Define the props interface for the Icon component
interface IconProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The Font Awesome icon class name (e.g., 'fa-solid fa-star', 'fa-brands fa-github').
   * Use this for Font Awesome icons.
   */
  name?: string;
  /**
   * The URL of an SVG icon. When provided, the component will render an `<img>` tag.
   * Note: Direct coloring via `color` prop might be limited for SVG URLs.
   */
  src?: string;
  /**
   * The content to be rendered inside the icon, typically an inline SVG element.
   * When provided, the `color` prop will apply as `currentColor`.
   */
  children?: React.ReactNode;
  /**
   * The size of the icon.
   * @default 'md'
   */
  size?: IconSize;
  /**
   * The color of the icon, using theme colors or a custom CSS color string.
   * Applies to Font Awesome icons and inline SVG children via `currentColor`.
   * @default theme.colors.neutral['50']
   */
  color?: string;
  /**
   * Optional Emotion `css` prop for additional custom styles.
   */
  css?: SerializedStyles;
}

// Styled component for the icon container. This will ensure consistent sizing
// and alignment regardless of the icon type (Font Awesome, SVG, etc.).
const StyledIconContainer = styled.span<Pick<IconProps, 'size' | 'color'>>`
  display: inline-flex; /* Use inline-flex to allow it to sit inline with text */
  align-items: center; /* Center icon vertically */
  justify-content: center; /* Center icon horizontally */
  line-height: 1; /* Prevent extra space around icon */
  flex-shrink: 0; /* Prevent icon from shrinking in flex containers */
  vertical-align: middle; /* Align with text baseline */

  // Default color from theme or prop
  color: ${(props) => props.color || props.theme.colors.neutral['50']};
  transition: color 0.2s ease-in-out;

  // Sizing based on prop: set font-size, and explicit width/height for consistent bounding box
  ${(props) => {
    switch (props.size) {
      case 'sm':
        return `
          font-size: 16px;
          width: 16px;
          height: 16px;
        `;
      case 'lg':
        return `
          font-size: 24px;
          width: 24px;
          height: 24px;
        `;
      case 'xl':
        return `
          font-size: 32px;
          width: 32px;
          height: 32px;
        `;
      case 'md':
      default:
        return `
          font-size: 20px;
          width: 20px;
          height: 20px;
        `;
    }
  }}

  // Styles for direct SVG children (inline SVG)
  & > svg {
    width: 100%;
    height: 100%;
    fill: currentColor; /* Allows coloring SVG paths with the 'color' prop */
  }

  // Styles for img (SVG URLs)
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* Ensure SVG scales correctly within its container */
  }
`;

/**
 * A reusable Icon component for the AscendUCore Design System.
 * It supports Font Awesome icon classes, SVG URLs, and inline SVG content.
 * Sizing and coloring are managed consistently through props and theme.
 * Ensure Font Awesome CSS is loaded globally for Font Awesome icons to render.
 */
export const Icon: React.FC<IconProps> = ({
  name,
  src,
  children,
  size = 'md', // Default size
  color,
  ...props
}) => {
  let iconContent: React.ReactNode = null;

  if (src) {
    // Render SVG from URL
    iconContent = <img src={src} alt={name || "icon"} />;
  } else if (name) {
    // Render Font Awesome icon
    iconContent = <i className={name} />;
  } else if (children) {
    // Render inline SVG or other children
    iconContent = children;
  } else {
    console.warn('Icon component rendered without a "name", "src", or "children" prop. No icon will be displayed.');
  }

  return (
    <StyledIconContainer
      size={size}
      color={color}
      aria-hidden={!name && !src && !children ? true : undefined} // Hide from screen readers if purely decorative or empty
      {...props}
    >
      {iconContent}
    </StyledIconContainer>
  );
};
