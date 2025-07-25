// src/pages/Dashboard/index.tsx
import React from 'react';
import styled from '@emotion/styled';
import type { SerializedStyles } from '@emotion/react';

// Import components from your library using the package name alias
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ProgressBar } from '../components/ProgressBar';
import { List, ListItem } from '../components/List';
import { Badge } from '../components/Badge';
import { Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell } from '../components/Table';
import { Toolbar } from'../components/Toolbar';
import { Icon } from'../components/Icon';
import { theme } from'../theme';

// --- Styled Components for Layout ---

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${theme.colors.background.default};
  font-family: ${theme.typography.fontFamily};
`;

const HeaderToolbar = styled(Toolbar)`
  background-color: ${theme.colors.primary['40']};
  color: ${theme.colors.text.onPrimary};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  box-shadow: ${theme.shadows.md};
  z-index: 10; // Ensure header is on top
  position: sticky;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  border-radius: 0; /* No rounded corners on main header */
`;

const HeaderTitle = styled.h2`
  ${theme.typography.h3};
  color: inherit;
  margin: 0;
`;

const MainContentArea = styled.main`
  flex-grow: 1;
  padding: ${theme.spacing.xl};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid */
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg};
    gap: ${theme.spacing.lg};
    grid-template-columns: 1fr; /* Stack on smaller screens */
  }
`;

const StyledCard = styled(Card)`
  width: 100%; /* Allow cards to fill grid column */
  max-width: none; /* Override default max-width of Card for grid layout */
`;

const SectionTitle = styled.h3`
  ${theme.typography.h4};
  color: ${theme.colors.text.default};
  margin-top: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.md};
  width: 100%; /* Ensure title spans full width in grid context */
  grid-column: 1 / -1; /* Span all columns in grid */
`;

const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${theme.spacing.xl};
  color: ${theme.colors.neutral['60']};
  ${theme.typography.body};

  & > .fa-solid {
    font-size: ${theme.typography.h1.fontSize};
    margin-bottom: ${theme.spacing.md};
    color: ${theme.colors.neutral['70']};
  }
`;

// --- Mock Data ---
const mockCourses = [
  { id: 1, title: 'ActivityPub Fundamentals', progress: 75, status: 'In Progress', instructor: 'Alice Smith' },
  { id: 2, title: 'Decentralized Identity on the Web', progress: 100, status: 'Completed', instructor: 'Bob Johnson' },
  { id: 3, title: 'Federated Learning Architectures', progress: 30, status: 'Not Started', instructor: 'Charlie Davis' },
  { id: 4, title: 'Web3 & Education: Practical Applications', progress: 50, status: 'In Progress', instructor: 'Diana Miller' },
];

const mockRecentActivities = [
  { id: 1, type: 'assignment', desc: 'Submitted Assignment 3: ActivityPub API Design', timestamp: '2 hours ago' },
  { id: 2, type: 'discussion', desc: 'Replied to "Future of Federated Social Media"', timestamp: 'yesterday' },
  { id: 3, type: 'course', desc: 'Completed Module 2: Introduction to DID', timestamp: '3 days ago' },
  { id: 4, type: 'announcement', desc: 'New announcement: Webinar on IPFS integration', timestamp: '1 week ago' },
];

const mockObjectives = [
  { id: 1, name: 'Master ActivityPub Protocol', progress: 60, status: 'In Progress', dueDate: '2025-09-30' },
  { id: 2, name: 'Complete Decentralized Identity Course', progress: 85, status: 'At Risk', dueDate: '2025-08-15' },
  { id: 3, name: 'Publish First Federated Post', progress: 100, status: 'Achieved', dueDate: '2025-07-20' },
];

interface DashboardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Optional Emotion `css` prop for additional custom styles for the overall dashboard container.
   */
  css?: SerializedStyles;
}

/**
 * The Dashboard component provides a high-level overview page, showcasing
 * the integration of various components from the AscendUCore Design System.
 * It includes sections for progress, recent activities, courses, and quick actions,
 * adhering to EducationPub's UX/UI principles.
 */
export const Dashboard: React.FC<DashboardProps> = ({ ...props }) => {
  const overallCourseProgress = mockCourses.reduce((sum, course) => sum + course.progress, 0) / mockCourses.length;
  const objectivesInProgress = mockObjectives.filter(obj => obj.status === 'In Progress').length;
  const objectivesCompleted = mockObjectives.filter(obj => obj.status === 'Achieved').length;
  const objectivesAtRisk = mockObjectives.filter(obj => obj.status === 'At Risk').length;


  return (
    <DashboardContainer {...props}>
      <HeaderToolbar justifyContent="space-between">
        <HeaderTitle>EduPub Dashboard</HeaderTitle>
        <Button variant="ghost" style={{ color: theme.colors.text.onPrimary }}>
          <Icon name="fa-solid fa-user-circle" size="lg" style={{ marginRight: theme.spacing.sm }} />
          John Doe
        </Button>
      </HeaderToolbar>

      <MainContentArea>
        {/* Key Objectives Overview Card */}
        <StyledCard
          title={<span style={{ color: theme.colors.text.default }}>Your Key Objectives</span>}
          subtitle={<span style={{ color: theme.colors.neutral['50'] }}>Tracking your progress towards learning goals.</span>}
          actions={
            <Button variant="primary" size="sm" onClick={() => alert('View All Objectives')}>
              <Icon name="fa-solid fa-eye" style={{ marginRight: theme.spacing.xs }} /> View All Objectives
            </Button>
          }
          style={{ gridColumn: '1 / -1' }} /* Span full width on all screens */
        >
          <p style={{ ...theme.typography.body, margin: 0, color: theme.colors.text.default }}>
            You have **{objectivesInProgress}** objectives in progress, **{objectivesCompleted}** completed, and **{objectivesAtRisk}** at risk. Keep pushing forward!
          </p>
        </StyledCard>

        {/* Overall Progress Card (Now specifically for Courses) */}
        <StyledCard
          title={<span style={{ color: theme.colors.text.default }}>Overall Course Progress</span>}
        >
          <ProgressBar value={overallCourseProgress} />
          <p style={{ ...theme.typography.bodySmall, textAlign: 'center', margin: `${theme.spacing.sm} 0 0 0`, color: theme.colors.neutral['50'] }}>
            {overallCourseProgress.toFixed(0)}% Completed Across All Courses
          </p>
        </StyledCard>

        {/* My Current Objectives Card (Detailed List) */}
        <StyledCard
          title={<span style={{ color: theme.colors.text.default }}>My Current Objectives</span>}
          actions={
            <Button variant="primary" size="sm" onClick={() => alert('Add New Objective')}>
              <Icon name="fa-solid fa-plus" style={{ marginRight: theme.spacing.xs }} /> New Objective
            </Button>
          }
        >
          {mockObjectives.length > 0 ? (
            <List style={{ boxShadow: 'none', border: 'none' }}>
              {mockObjectives.map(obj => (
                <ListItem
                  key={obj.id}
                  interactive
                  onClick={() => alert(`View Objective: ${obj.name}`)}
                  leading={<Icon name="fa-solid fa-bullseye" size="sm" />}
                  trailing={
                    <Badge variant={
                      obj.status === 'Achieved' ? 'success' :
                      obj.status === 'In Progress' ? 'primary' :
                      'error' // 'At Risk'
                    }>
                      {obj.status}
                    </Badge>
                  }
                >
                  <div style={{ flexGrow: 1, marginRight: theme.spacing.md }}>
                    <p style={{ ...theme.typography.bodySmall, fontWeight: theme.typography.button.fontWeight, margin: 0, color: theme.colors.text.default }}>
                      {obj.name}
                    </p>
                    <ProgressBar value={obj.progress} max={100} style={{ width: '100%', height: '4px', marginTop: theme.spacing.xxs }} />
                    <p style={{ ...theme.typography.caption, margin: 0, color: theme.colors.neutral['60'] }}>
                      Progress: {obj.progress}% {obj.dueDate && `(Due: ${obj.dueDate})`}
                    </p>
                  </div>
                </ListItem>
              ))}
            </List>
          ) : (
            <EmptyStateContainer>
              <Icon name="fa-solid fa-bullseye" />
              <p>No objectives set yet! Start by creating your first goal.</p>
            </EmptyStateContainer>
          )}
          <Button variant="ghost" size="sm" style={{ marginTop: theme.spacing.md, width: '100%' }} onClick={() => alert('View All Objectives')}>View All Objectives</Button>
        </StyledCard>

        {/* Flashcards Due & Quick Actions Card */}
        <StyledCard
          title={<span style={{ color: theme.colors.text.default }}>Flashcards & Quick Actions</span>}
          actions={
            <Button variant="secondary" size="sm" onClick={() => alert('Add New Flashcard')}>
              <Icon name="fa-solid fa-plus" style={{ marginRight: theme.spacing.xs }} /> New Flashcard
            </Button>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md }}>
            <p style={{ ...theme.typography.body, color: theme.colors.text.default }}>
              You have <Badge variant="primary">7</Badge> flashcards due for review today.
            </p>
            <Button variant="secondary" size="md" style={{ width: '100%' }} onClick={() => alert('Start Study Session')}>
              <Icon name="fa-solid fa-play-circle" style={{ marginRight: theme.spacing.xs }} /> Start Study Session
            </Button>
          </div>
          <div style={{ marginTop: theme.spacing.lg, paddingTop: theme.spacing.md, borderTop: `1px solid ${theme.colors.neutral['90']}` }}>
            <h5 style={{ ...theme.typography.h5, color: theme.colors.text.default, marginBottom: theme.spacing.sm }}>Quick Access:</h5>
            <List style={{ boxShadow: 'none', border: 'none' }}>
              <ListItem interactive leading={<Icon name="fa-solid fa-comments" />} onClick={() => alert('Go to Discussions')}>Discussions</ListItem>
              <ListItem interactive leading={<Icon name="fa-solid fa-chart-line" />} onClick={() => alert('Go to Progress Report')}>Progress Report</ListItem>
              <ListItem interactive leading={<Icon name="fa-solid fa-cog" />} onClick={() => alert('Go to Settings')}>Settings</ListItem>
            </List>
          </div>
        </StyledCard>


        {/* Recent Activities Card */}
        <StyledCard
          title={<span style={{ color: theme.colors.text.default }}>Recent Activities</span>}
        >
          {mockRecentActivities.length > 0 ? (
            <List style={{ boxShadow: 'none', border: 'none' }}>
              {mockRecentActivities.map(activity => (
                <ListItem
                  key={activity.id}
                  leading={<Icon name={
                    activity.type === 'assignment' ? 'fa-solid fa-clipboard-list' :
                    activity.type === 'discussion' ? 'fa-solid fa-comments' :
                    activity.type === 'course' ? 'fa-solid fa-book' :
                    'fa-solid fa-bullhorn' // Default for announcement
                  } size="sm" />}
                  trailing={<span style={{ ...theme.typography.caption, color: theme.colors.neutral['60'] }}>{activity.timestamp}</span>}
                  interactive
                  onClick={() => alert(`View ${activity.desc}`)}
                >
                  <span style={{ ...theme.typography.bodySmall, color: theme.colors.text.default }}>{activity.desc}</span>
                </ListItem>
              ))}
            </List>
          ) : (
            <EmptyStateContainer>
              <Icon name="fa-solid fa-bell" />
              <p>No recent activity. Start learning to see updates!</p>
            </EmptyStateContainer>
          )}
          <Button variant="ghost" size="sm" style={{ marginTop: theme.spacing.md, width: '100%' }} onClick={() => alert('View All Activities')}>View All Activities</Button>
        </StyledCard>


        {/* My Courses Table Card */}
        <SectionTitle>My Courses</SectionTitle>
        <StyledCard style={{ gridColumn: '1 / -1', padding: 0, boxShadow: 'none', border: 'none' }}>
          {mockCourses.length > 0 ? (
            <Table striped bordered>
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Course Title</TableHeaderCell>
                  <TableHeaderCell>Instructor</TableHeaderCell>
                  <TableHeaderCell>Progress</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                  <TableHeaderCell>Actions</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mockCourses.map(course => (
                  <TableRow key={course.id}>
                    <TableCell style={{ minWidth: '180px' }}>{course.title}</TableCell>
                    <TableCell style={{ minWidth: '120px' }}>{course.instructor}</TableCell>
                    <TableCell style={{ minWidth: '100px' }}>
                      <ProgressBar value={course.progress} max={100} style={{ width: '80px', height: '6px' }} />
                    </TableCell>
                    <TableCell style={{ minWidth: '100px' }}>
                      <Badge variant={
                        course.status === 'Completed' ? 'success' :
                        course.status === 'In Progress' ? 'primary' :
                        'default'
                      }>
                        {course.status}
                      </Badge>
                    </TableCell>
                    <TableCell style={{ minWidth: '100px' }}>
                      <Button variant="ghost" size="sm" onClick={() => alert(`Access ${course.title}`)}>
                        Access
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <EmptyStateContainer style={{ margin: 0, border: `1px solid ${theme.colors.border.default}`, borderRadius: theme.borderRadius.md }}>
              <Icon name="fa-solid fa-book" />
              <p>You haven't enrolled in any courses yet.</p>
              <Button variant="primary" style={{ marginTop: theme.spacing.md }} onClick={() => alert('Browse Courses')}>Browse Courses</Button>
            </EmptyStateContainer>
          )}
        </StyledCard>
      </MainContentArea>
    </DashboardContainer>
  );
};
