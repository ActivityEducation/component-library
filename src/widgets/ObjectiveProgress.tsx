// src/components/widgets/ObjectiveProgressCard/index.tsx
// This component displays the progress of a single learning objective or key result
// on the dashboard, leveraging Card, ProgressBar, Badge, and Icon components.

import React from 'react';
import styled from '@emotion/styled';
import type { SerializedStyles } from '@emotion/react';

// Import components from your UI Kit
import { Card } from '../components/Card';
import { ProgressBar } from '../components/ProgressBar';
import { Icon } from '../components/Icon';
import { Button } from '../components/Button';
import { theme } from '../theme';

// Define the type for objective status
export type ObjectiveStatus = 'on-track' | 'at-risk' | 'achieved';

// Define props for the ObjectiveProgressCard component
interface ObjectiveProgressCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The title of the objective.
   */
  title: string;
  /**
   * A brief description or key result statement for the objective.
   */
  description: string;
  /**
   * The current value of the objective's progress.
   */
  currentValue: number;
  /**
   * The target value for the objective.
   */
  targetValue: number;
  /**
   * The unit of measurement for the progress (e.g., 'items', '%', 'hours').
   */
  unit?: string;
  /**
   * The status of the objective ('on-track', 'at-risk', 'achieved').
   */
  status: ObjectiveStatus;
  /**
   * Callback function for when the "View Details" button is clicked.
   */
  onViewDetails?: () => void;
  /**
   * Optional Emotion `css` prop for additional custom styles for the outer container.
   */
  css?: SerializedStyles;
}

// Helper to map status to Badge variant
const getBadgeVariant = (status: ObjectiveStatus): 'success' | 'primary' | 'warning' | 'error' | 'info' | 'default' => {
  switch (status) {
    case 'achieved':
      return 'success'; // Green for success
    case 'on-track':
      return 'primary'; // Primary color for on-track
    case 'at-risk':
      return 'warning'; // Yellow/Orange for at-risk
    default:
      return 'default';
  }
};

// Helper to map status to an icon
const getStatusIcon = (status: ObjectiveStatus): string => {
  switch (status) {
    case 'achieved':
      return 'fa-solid fa-check-circle';
    case 'on-track':
      return 'fa-solid fa-sync-alt'; // or fa-solid fa-circle-notch for ongoing
    case 'at-risk':
      return 'fa-solid fa-exclamation-triangle';
    default:
      return 'fa-solid fa-info-circle';
  }
};

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  flex-grow: 1; // Allow content to take space
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

// const ObjectiveTitle = styled.h4`
//   ${theme.typography.h4};
//   color: ${theme.colors.text.default};
//   margin: 0;
// `;

// const ObjectiveDescription = styled.p`
//   ${theme.typography.bodySmall};
//   color: ${theme.colors.neutral['60']};
//   margin: 0;
// `;

const ProgressText = styled.span`
  ${theme.typography.bodySmall};
  color: ${theme.colors.text.default};
  white-space: nowrap; // Prevent text from wrapping
`;

/**
 * A dashboard widget displaying the progress of a single learning objective or key result.
 * It includes a title, description, progress bar, status badge, and an optional action button.
 */
export const ObjectiveProgressCard: React.FC<ObjectiveProgressCardProps> = ({
  title,
  description,
  currentValue,
  targetValue,
  unit = '',
  status,
  onViewDetails,
  ...props
}) => {
  const progressPercentage = targetValue === 0 ? 0 : (currentValue / targetValue) * 100;
  const badgeVariant = getBadgeVariant(status);
  const statusIcon = getStatusIcon(status);

  return (
    <Card
      title={title}
      subtitle={description}
      header={
        <HeaderContent>
          <Icon name={statusIcon} size="xxl" color={theme.colors[badgeVariant === 'success' ? 'secondary' : badgeVariant === 'primary' ? 'primary' : 'error']['40']} />
        </HeaderContent>
      }
      actions={
        onViewDetails ? (
          <Button variant="ghost" size="sm" onClick={onViewDetails}>
            View Details
          </Button>
        ) : null
      }
      {...props}
    >
      <ContentWrapper>
        <ProgressBarContainer>
          <ProgressBar value={currentValue} max={targetValue} />
          <ProgressText>
            {currentValue} / {targetValue} {unit} ({Math.round(progressPercentage)}%)
          </ProgressText>
        </ProgressBarContainer>
        {/* Additional content can go here if needed */}
      </ContentWrapper>
    </Card>
  );
};
