// This file defines the Badge component for the AscendUCore Design System.
// Badges are small, non-interactive components used to display short, important
// pieces of information, status indicators, or counts.

import React from 'react';
import styled from '@emotion/styled';
import type { SerializedStyles } from '@emotion/react';

// Define possible visual variants for the Badge
export type BadgeVariant = 'default' | 'primary' | 'secondary' | 'tertiary' | 'success' | 'info' | 'warning' | 'error';

// Define the props interface for the Badge component
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The content to be rendered inside the badge.
   */
  children: React.ReactNode;
  /**
   * The visual style of the badge, indicating its semantic meaning.
   * @default 'default'
   */
  variant?: BadgeVariant;
  /**
   * Optional Emotion `css` prop for additional custom styles.
   */
  css?: SerializedStyles;
}

// Styled component for the base Badge element
const StyledBadge = styled.span<Pick<BadgeProps, 'variant'>>`
  // Base styles for all badges
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.spacing.xxs} ${(props) => props.theme.spacing.sm};
  border-radius: ${(props) => props.theme.borderRadius.full}; // Pill shape
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.caption.fontSize}; // Small text
  font-weight: ${(props) => props.theme.typography.button.fontWeight}; // Bold text
  text-transform: uppercase; // Uppercase text for badges
  letter-spacing: 0.5px;
  white-space: nowrap; // Prevent text wrapping
  line-height: 1; // Compact line height
  transition: ${(props) => props.theme.transitions.fast};

  // Color variants based on theme colors
  ${(props) => {
    switch (props.variant) {
      case 'primary':
        return `
          background-color: ${props.theme.colors.primary['90']};
          color: ${props.theme.colors.primary['10']};
        `;
      case 'secondary':
        return `
          background-color: ${props.theme.colors.secondary['90']};
          color: ${props.theme.colors.secondary['10']};
        `;
      case 'tertiary':
        return `
          background-color: ${props.theme.colors.tertiary['90']};
          color: ${props.theme.colors.tertiary['10']};
        `;
      case 'success':
        return `
          background-color: ${props.theme.colors.secondary['90']}; // Using secondary for success
          color: ${props.theme.colors.secondary['10']};
        `;
      case 'info':
        return `
          background-color: ${props.theme.colors.tertiary['90']}; // Using tertiary for info
          color: ${props.theme.colors.tertiary['10']};
        `;
      case 'warning':
        return `
          background-color: #FFECB3; // Light yellow for warning
          color: #FF8F00; // Darker yellow for warning text
        `;
      case 'error':
        return `
          background-color: ${props.theme.colors.error['90']};
          color: ${props.theme.colors.error['10']};
        `;
      case 'default':
      default:
        return `
          background-color: ${props.theme.colors.neutral['90']};
          color: ${props.theme.colors.neutral['20']};
        `;
    }
  }}
`;

/**
 * A small, non-interactive **Badge** component for displaying short, important information
 * or status indicators in the AscendUCore Design System.
 * It supports various semantic color variants, making it suitable for conveying status,
 * counts, or labels in a concise visual manner.
 *
 * ```typescript
 * import { Badge } from "@activityeducation/component-library";
 * ```
 *
 * ## Justification
 * Badges are highly effective for drawing attention to new information, indicating status,
 * or displaying counts in a compact and visually distinct way. A standardized `Badge`
 * component ensures consistency in these visual cues across the application, improving
 * user comprehension and interface clarity. By providing predefined color `variant`s,
 * it helps maintain a cohesive design language and simplifies the implementation of
 * status indicators for developers. Its non-interactive nature ensures it's used
 * purely for informational display.
 *
 * ## Acceptance Criteria
 * - **GIVEN** the `Badge` component is rendered, **THEN** it should display its
 * `children` content.
 * - **GIVEN** `variant` is set to 'default', 'primary', 'secondary', 'tertiary',
 * 'success', 'info', 'warning', or 'error', **THEN** the badge should apply the
 * corresponding background and text colors.
 * - **GIVEN** the badge content, **THEN** it should be displayed with uppercase
 * text and a pill-like (fully rounded) shape.
 * - **GIVEN** the badge, **THEN** it should be non-interactive (no hover effects,
 * no cursor changes).
 *
 * ## Example & Props
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default', // Default variant
  ...props
}) => {
  return (
    <StyledBadge variant={variant} {...props}>
      {children}
    </StyledBadge>
  );
};
