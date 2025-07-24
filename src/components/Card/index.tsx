// src/components/Card.tsx
// This file defines the Card component for the AscendUCore Design System.
// Cards are versatile containers used to group related content, now with
// structured slots for header, title, subtitle, content, actions, and footer,
// akin to @angular/material/card.

import React from 'react';
import styled from '@emotion/styled';
import type { SerializedStyles } from '@emotion/react';

// Define the props interface for the Card component
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Content for the card's header section.
   */
  header?: React.ReactNode | any;
  /**
   * The main title of the card.
   */
  title?: React.ReactNode | any;
  /**
   * A subtitle for the card, typically smaller than the title.
   */
  subtitle?: React.ReactNode | any;
  /**
   * The main content of the card.
   */
  children?: React.ReactNode | any;
  /**
   * Content for the card's actions section, typically buttons.
   */
  actions?: React.ReactNode | any;
  /**
   * Content for the card's footer section.
   */
  footer?: React.ReactNode | any;
  /**
   * Optional Emotion `css` prop for additional custom styles for the outer container.
   */
  css?: SerializedStyles;
}

// Styled container for the entire card
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background.surface}; // Use surface background
  border: 1px solid ${(props) => props.theme.colors.border.default};    // Default border
  border-radius: ${(props) => props.theme.borderRadius.md};             // Medium rounded corners
  box-shadow: ${(props) => props.theme.shadows.sm};                     // Small shadow for subtle depth
  overflow: hidden; // Ensures rounded corners apply to children
  width: 100%;
  box-sizing: border-box;

  // Default max-width, can be overridden by parent or specific instances
  max-width: 400px;
`;

// Styled component for the card header
const CardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.spacing.md} ${(props) => props.theme.spacing.lg};
  border-bottom: 1px solid ${(props) => props.theme.colors.neutral['90']}; // Light separator
  gap: ${(props) => props.theme.spacing.md}; // Gap for header elements
`;

// Styled component for the card title area (holds title and subtitle)
const CardTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1; // Allows title group to take available space
`;

// Styled component for the card title
const CardTitle = styled.h3`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.h4.fontSize};
  font-weight: ${(props) => props.theme.typography.h4.fontWeight};
  color: ${(props) => props.theme.colors.text.default};
  margin: 0;
  line-height: 1.2;
`;

// Styled component for the card subtitle
const CardSubtitle = styled.h4`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.bodySmall.fontSize};
  color: ${(props) => props.theme.colors.neutral['50']};
  margin: 0;
  line-height: 1.2;
`;

// Styled component for the main card content area
const CardContent = styled.div`
  padding: ${(props) => props.theme.spacing.lg};
  flex-grow: 1; // Allows content to fill available space
  color: ${(props) => props.theme.colors.text.default};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.body.fontSize};
`;

// Styled component for the card actions area
const CardActions = styled.div`
  display: flex;
  justify-content: flex-end; // Align actions to the right by default
  padding: ${(props) => props.theme.spacing.md} ${(props) => props.theme.spacing.lg};
  gap: ${(props) => props.theme.spacing.sm}; // Gap between action buttons
  border-top: 1px solid ${(props) => props.theme.colors.neutral['90']}; // Light separator
`;

// Styled component for the card footer
const CardFooter = styled.div`
  padding: ${(props) => props.theme.spacing.md} ${(props) => props.theme.spacing.lg};
  border-top: 1px solid ${(props) => props.theme.colors.neutral['90']}; // Light separator
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.caption.fontSize};
  color: ${(props) => props.theme.colors.neutral['50']};
`;

/**
 * A versatile Card component for grouping and displaying content in the AscendUCore Design System.
 * It provides a consistent visual container with structured slots for header, title, subtitle,
 * main content, actions, and footer, akin to @angular/material/card.
 */
export const Card: React.FC<CardProps> = ({
  header,
  title,
  subtitle,
  children,
  actions,
  footer,
  ...props
}) => {
  const hasHeaderContent = header || title || subtitle;

  return (
    <StyledCard {...props}>
      {hasHeaderContent && (
        <CardHeader>
          {header} {/* Render full header content if provided */}
          {(title || subtitle) && (
            <CardTitleGroup>
              {title && <CardTitle>{title}</CardTitle>}
              {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
            </CardTitleGroup>
          )}
        </CardHeader>
      )}
      {children && <CardContent>{children}</CardContent>}
      {actions && <CardActions>{actions}</CardActions>}
      {footer && <CardFooter>{footer}</CardFooter>}
    </StyledCard>
  );
};
