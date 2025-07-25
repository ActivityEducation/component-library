// src/components/widgets/UpcomingDeadlinesCard/index.tsx
// This component displays a list of upcoming deadlines (assignments, quizzes, events)
// on the dashboard, keeping learners informed of important dates.

import React from 'react';
import styled from '@emotion/styled';
import type { SerializedStyles } from '@emotion/react';

// Import components from your UI Kit
import { Card } from '../components/Card';
import { Icon } from '../components/Icon';
import { Button } from '../components/Button';
import { theme } from '../theme';
import { List, ListItem } from '../components/List';
import { Badge } from '../components/Badge'; // For optional urgency indication

// Define the type for an individual deadline item
export interface DeadlineItem {
  id: string;
  title: string;
  dueDate: string; // e.g., "Today", "Tomorrow", "Aug 15"
  type: 'assignment' | 'quiz' | 'event';
  isUrgent?: boolean; // Optional flag for highlighting urgent items
}

// Define props for the UpcomingDeadlinesCard component
interface UpcomingDeadlinesCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * An array of upcoming deadline items to display.
   */
  deadlines: DeadlineItem[];
  /**
   * Callback function for when the "View All Deadlines" button is clicked.
   */
  onViewAll?: () => void;
  /**
   * Optional Emotion `css` prop for additional custom styles for the outer container.
   */
  css?: SerializedStyles;
}

const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.lg};
  text-align: center;
  color: ${theme.colors.neutral['60']};
  ${theme.typography.bodySmall};
`;

const DeadlineDetails = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const DeadlineTitle = styled.span`
  ${theme.typography.bodySmall};
  color: ${theme.colors.text.default};
  font-weight: 500;
  line-height: 1.3;
`;

const DeadlineDueDate = styled.span`
  ${theme.typography.caption};
  color: ${theme.colors.neutral['50']};
  margin-top: ${theme.spacing.xxs};
  line-height: 1.2;
`;

// Helper function to get icon based on deadline type
const getDeadlineIcon = (type: DeadlineItem['type']): string => {
  switch (type) {
    case 'assignment':
      return 'fa-solid fa-file-signature';
    case 'quiz':
      return 'fa-solid fa-question-circle';
    case 'event':
      return 'fa-solid fa-calendar-alt';
    default:
      return 'fa-solid fa-calendar';
  }
};

/**
 * A dashboard widget that lists upcoming assignments, quizzes, or events.
 * It provides a quick overview of important deadlines to learners.
 */
export const UpcomingDeadlinesCard: React.FC<UpcomingDeadlinesCardProps> = ({
  deadlines,
  onViewAll,
  ...props
}) => {
  return (
    <Card
      title="Upcoming Deadlines"
      subtitle="Don't miss a beat in your learning journey."
      header={<Icon name="fa-solid fa-calendar-day" size="lg" color={theme.colors.tertiary['50']} />}
      actions={
        onViewAll && deadlines.length > 0 ? (
          <Button variant="ghost" size="sm" onClick={onViewAll} style={{ width: '100%' }}>
            View All Deadlines
          </Button>
        ) : null
      }
      {...props}
    >
      {deadlines.length > 0 ? (
        <List style={{ boxShadow: 'none', borderRadius: 'none' }}>
          {deadlines.slice(0, 5).map((item) => ( // Show top 5 deadlines
            <ListItem
              key={item.id}
              leading={<Icon name={getDeadlineIcon(item.type)} size="md" color={theme.colors.primary['40']} />}
              trailing={
                item.isUrgent ? <Badge variant="error" style={{ marginLeft: theme.spacing.md }}>Urgent</Badge> : null
              }
              interactive // Deadlines are often clickable to view details
              onClick={() => alert(`Viewing details for: ${item.title}`)}
            >
              <DeadlineDetails>
                <DeadlineTitle>{item.title}</DeadlineTitle>
                <DeadlineDueDate>{item.dueDate}</DeadlineDueDate>
              </DeadlineDetails>
            </ListItem>
          ))}
        </List>
      ) : (
        <EmptyStateContainer>
          <Icon name="fa-solid fa-clipboard-check" size="xl" />
          <p>No upcoming deadlines! Time to plan your next steps.</p>
        </EmptyStateContainer>
      )}
    </Card>
  );
};
