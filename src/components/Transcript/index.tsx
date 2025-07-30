// src/components/Transcript/index.tsx
// This component displays a video transcript and highlights the currently
// spoken sentence based on the provided currentTime.

import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import type { SerializedStyles } from '@emotion/react';

// Import components from your UI Kit
import { Card } from '../Card';
import { List, ListItem } from '../List';
import { theme } from '../../theme';
import { Icon } from '../Icon'; // For empty state icon

// Define the type for an individual transcript segment
export interface TranscriptSegment {
  id: string; // Unique ID for the segment
  text: string; // The text content of the segment (e.g., a sentence)
  start: number; // Start timestamp in seconds
  end: number;   // End timestamp in seconds
}

// Define props for the Transcript component
interface TranscriptProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * An array of transcript segments to display.
   * Each segment should have a unique `id`, `text`, `start`, and `end` timestamp.
   */
  transcript: TranscriptSegment[];
  /**
   * The current playback time of the video in seconds.
   * This is used to determine which segment to highlight.
   */
  currentTime: number;
  /**
   * Optional Emotion `css` prop for additional custom styles for the outer container.
   */
  css?: SerializedStyles;
}

const TranscriptContainer = styled.div`
  max-height: 400px; /* Limit height to enable scrolling */
  overflow-y: auto;  /* Enable vertical scrolling */
  position: relative; /* For internal positioning if needed */
  background-color: ${theme.colors.background.surface};
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.shadows.sm};
  width: 100%; /* Ensure it takes full width of its parent */
  /* Removed max-width to allow the component to fill its parent's width */
  box-sizing: border-box;

  /* Hide scrollbar for Chrome, Safari, and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for Firefox */
  scrollbar-width: none;
  /* Hide scrollbar for IE and Edge */
  -ms-overflow-style: none;
`;

const StyledTranscriptListItem = styled(ListItem)<{ isActive?: boolean }>`
  cursor: default; /* Not directly clickable to view details, but for highlighting */
  padding: ${theme.spacing.sm} ${theme.spacing.md}; /* Smaller padding for transcript lines */
  font-size: ${theme.typography.bodySmall.fontSize};
  line-height: ${theme.typography.bodySmall.lineHeight};
  color: ${theme.colors.text.default};
  width: 100%;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  border-bottom: 1px solid ${theme.colors.neutral['90']}; /* Lighter separator */

  &:last-child {
    border-bottom: none;
  }

  ${(props) =>
    props.isActive &&
    `
    background-color: ${props.theme.colors.primary['95']}; /* Light primary background for active */
    color: ${props.theme.colors.primary['10']};            /* Dark text on active highlight */
    font-weight: ${props.theme.typography.body.fontWeight}; /* Slightly bolder */
  `}
`;

const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.lg};
  text-align: center;
  width: 100%;
  color: ${theme.colors.neutral['60']};
  ${theme.typography.bodySmall};
  min-height: 150px; /* Ensure empty state has some height */
`;


/**
 * The **Transcript** component is designed to display the textual content of a video or audio
 * file, providing a synchronized and accessible way for users to follow along with spoken
 * content. It automatically highlights the currently active segment (e.g., a sentence)
 * based on the provided `currentTime` and ensures that the active segment is always
 * scrolled into view, enhancing readability and user experience.
 *
 * ```typescript
 * import { Transcript } from "@activityeducation/component-library";
 * ```
 *
 * ## Justification
 * In an educational or content consumption platform, a transcript component is crucial for
 * accessibility, comprehension, and navigation. It caters to diverse learning styles,
 * allowing users to read along, review specific sections, or quickly locate information
 * within a video. For users with hearing impairments, it provides essential access to
 * the audio content. For all users, it aids in retention and understanding by presenting
 * information in both auditory and visual formats. The auto-scrolling and highlighting
 * features ensure a seamless and intuitive experience, directly linking the text to the
 * playback, which is vital for effective learning and content review.
 *
 * ## Acceptance Criteria
 * - **GIVEN** a transcript is provided, **WHEN** the `currentTime` updates, **THEN** the
 * corresponding transcript segment should be highlighted.
 * - **GIVEN** the active transcript segment changes, **THEN** the component should
 * automatically scroll to bring the active segment into view.
 * - **GIVEN** an empty `transcript` array is provided, **THEN** an appropriate "No transcript
 * available" empty state message should be displayed.
 * - **GIVEN** a long transcript, **THEN** the component should be scrollable, allowing
 * users to view all segments.
 * - **GIVEN** the component is rendered, **THEN** the header should display "Transcript"
 * along with a closed-captioning icon for clear identification.
 *
 * ## Example & Props
 */
export const Transcript: React.FC<TranscriptProps> = ({
  transcript,
  currentTime,
  ...props
}) => {
  const activeSegmentRef = useRef<HTMLLIElement>(null);

  // Determine the currently active segment
  const activeSegment = transcript.find(
    (segment) => currentTime >= segment.start && currentTime < segment.end
  );

  // Scroll the active segment into view when it changes
  useEffect(() => {
    if (activeSegmentRef.current) {
      activeSegmentRef.current.scrollIntoView({
        behavior: 'smooth', // Smooth scroll effect
        block: 'center',    // Align to the middle of the container
      });
    }
  }, [activeSegment]); // Only re-run when the activeSegment changes

  return (
    <TranscriptContainer {...props}>
      <Card
        title="Transcript"
        header={<Icon name="fa-solid fa-closed-captioning" size="lg" color={theme.colors.primary['50']} />}
        style={{ boxShadow: 'none', borderRadius: '0', border: 'none', padding: 0 }}
      >
        {transcript.length > 0 ? (
          <List style={{ boxShadow: 'none', borderRadius: '0' }}>
            {transcript.map((segment) => (
              <StyledTranscriptListItem
                key={segment.id}
                ref={activeSegment && activeSegment.id === segment.id ? activeSegmentRef : null}
                isActive={activeSegment?.id === segment.id}
                // No direct onClick for individual list items in transcript, as it's typically for display
              >
                {segment.text}
              </StyledTranscriptListItem>
            ))}
          </List>
        ) : (
          <EmptyStateContainer>
            <Icon name="fa-solid fa-file-alt" size="xl" />
            <p>No transcript available.</p>
          </EmptyStateContainer>
        )}
      </Card>
    </TranscriptContainer>
  );
};
