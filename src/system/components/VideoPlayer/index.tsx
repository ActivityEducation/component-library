// src/components/VideoPlayer.tsx
// This file defines the VideoPlayer component for the AscendUCore Design System.
// It provides a custom video player interface leveraging other UI Kit components
// for controls like play/pause, volume, progress, and fullscreen,
// and now includes support for interactive interrupt elements.

import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import type { SerializedStyles } from '@emotion/react';

// Import necessary components from the UI Kit
import { Button } from '../Button';
import { Slider } from '../Slider';
import { ProgressBar } from '../ProgressBar';
import { Card } from '../Card'; // Import Card for interrupt content
// import { Icon } from './Icon'; // Import Icon component
import { theme } from '../../theme'; // Import theme for styling

// Helper function to format time (e.g., 120 seconds -> 02:00)
const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedSeconds = String(remainingSeconds).padStart(2, '0');
  return `${paddedMinutes}:${paddedSeconds}`;
};

// Interface for interactive video interrupts
export interface VideoInterrupt {
  timestampSeconds: number; // The time in seconds when the interrupt should occur
  content: React.ReactNode; // The content to display in the card
  id: string; // Unique ID for the interrupt (useful for tracking if seen)
}

// Define the props interface for the VideoPlayer component
interface VideoPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The URL of the video source.
   */
  src: string;
  /**
   * The title of the video, used for accessibility and display.
   */
  title?: string;
  /**
   * If true, the video will start playing automatically.
   * @default false
   */
  autoPlay?: boolean;
  /**
   * If true, the video will be muted.
   * @default false
   */
  muted?: boolean;
  /**
   * If true, the video will loop after ending.
   */
  loop?: boolean;
  /**
   * An array of interactive interrupt elements to display at specific timestamps.
   */
  interrupts?: VideoInterrupt[];
  /**
   * URL for a placeholder image to display before the video loads or when paused.
   */
  placeholderImage?: string;
  /**
   * Optional Emotion `css` prop for additional custom styles.
   */
  css?: SerializedStyles;
}

// Styled container for the entire video player
const VideoPlayerContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px; // Max width for the player, adjust as needed
  background-color: #000; // Black background for video area
  border-radius: ${(props) => props.theme.borderRadius.md};
  overflow: hidden; // Ensures video and controls stay within rounded corners
  box-shadow: ${(props) => props.theme.shadows.lg};
  aspect-ratio: 16 / 9; // Maintain 16:9 aspect ratio
  display: flex;
  justify-content: center;
  align-items: center;

  // When controls are visible, ensure they are on top
  &:hover .controls-overlay {
    opacity: 1;
  }
`;

// Styled video element
const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  display: block; // Remove extra space below video
  object-fit: contain; // Ensure video fits within bounds without cropping
  background-color: black; // Fallback background if video doesn't load
`;

// Styled image for the placeholder
const PlaceholderImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; // Cover the entire player area
  z-index: 1; // Below controls, above video when video is paused/not playing
`;

// Overlay for controls, appears on hover/interaction
const ControlsOverlay = styled.div<{ show: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%; // Take full height to capture mouse events
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  pointer-events: ${(props) => (props.show ? 'auto' : 'none')}; // Allow interaction only when visible
  z-index: 2; // Above video and placeholder image
`;

// Container for the bottom controls (play/pause, volume, time, fullscreen)
const BottomControls = styled.div`
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.lg};
  gap: ${(props) => props.theme.spacing.md};
  color: #fff; // White text for controls
  flex-wrap: wrap; // Allow controls to wrap on small screens
`;

// Styled component for the current time and duration display
const TimeDisplay = styled.span`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.bodySmall.fontSize};
  color: #fff;
  white-space: nowrap; // Prevent time from wrapping
`;

// Styled container for the volume slider
const VolumeControl = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
  width: 100px; // Fixed width for volume slider
  flex-shrink: 0; // Prevent shrinking
`;

// Styled overlay for interrupt content
const InterruptOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8); // Dark overlay
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10; // Above video and controls
  padding: ${(props) => props.theme.spacing.xl};

  // Ensure card inside interrupt overlay is responsive
  & > div {
    max-width: 90%; // Limit card width
    max-height: 90%; // Limit card height
    overflow-y: auto; // Allow scrolling if content is too large
  }
`;

// Styled container for the progress bar and its markers
const ProgressBarWrapper = styled.div`
  position: relative;
  width: calc(100% - 20px);
  margin-inline: auto;
  height: ${(props) => props.theme.spacing.sm}; /* Same height as progress bar */
  cursor: pointer;
`;

// Styled component for the interrupt indicator on the progress bar
const InterruptMarker = styled.div<{ position: number }>`
  position: absolute;
  top: 50%;
  left: ${(props) => props.position}%;
  transform: translate(-50%, -50%);
  width: 8px; // Size of the marker dot
  height: 8px;
  background-color: ${(props) => props.theme.colors.secondary['40']}; // Accent color for markers
  border-radius: ${(props) => props.theme.borderRadius.full};
  z-index: 5; // Above the progress bar fill, below the thumb if any
  pointer-events: none; // Do not interfere with progress bar clicks
`;

/**
 * A custom VideoPlayer component for the AscendUCore Design System.
 * Provides a responsive video player with custom controls for playback,
 * volume, progress, and fullscreen, integrating other UI Kit components.
 * Now includes support for interactive interrupt elements at specific timestamps,
 * visually indicated on the progress bar, and a placeholder image.
 */
export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  title = 'Video Player',
  autoPlay = false,
  loop = false,
  muted = false,
  interrupts = [], // Default to empty array
  placeholderImage, // New prop
  ...props
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null); // Ref for the main player container

  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(muted ? 0 : 1); // Volume from 0 to 1
  const [isMuted, setIsMuted] = useState(muted);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showControls, setShowControls] = useState(true); // State to auto-hide controls
  const [hasPlayed, setHasPlayed] = useState(false); // Track if video has started playing at least once

  // States for interrupt functionality
  const [currentInterrupt, setCurrentInterrupt] = useState<VideoInterrupt | null>(null);
  const [isInterruptActive, setIsInterruptActive] = useState(false);
  // Using a Set to track seen interrupts for the current video session
  const seenInterrupts = useRef(new Set<string>());

  // Timer for auto-hiding controls
  const controlsHideTimeout = useRef<number | null>(null);

  // Event handlers for video element
  const handlePlay = useCallback(() => {
    setIsPlaying(true);
    setHasPlayed(true); // Mark as played once
  }, []);
  const handlePause = useCallback(() => setIsPlaying(false), []);

  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current) {
      const newCurrentTime = videoRef.current.currentTime;
      setCurrentTime(newCurrentTime);

      // Check for interrupts
      if (!isInterruptActive) { // Only check if no interrupt is currently active
        for (const interrupt of interrupts) {
          // Trigger interrupt if current time is at or slightly past the timestamp
          // and it hasn't been seen yet in this session.
          // Using a small buffer (e.g., 0.5s) to ensure it triggers even if timeupdate is not exact
          if (
            newCurrentTime >= interrupt.timestampSeconds &&
            newCurrentTime < interrupt.timestampSeconds + 0.5 &&
            !seenInterrupts.current.has(interrupt.id)
          ) {
            videoRef.current.pause();
            setCurrentInterrupt(interrupt);
            setIsInterruptActive(true);
            seenInterrupts.current.add(interrupt.id); // Mark as seen
            break; // Only trigger one interrupt at a time
          }
        }
      }
    }
  }, [interrupts, isInterruptActive]);

  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      // Set initial volume based on muted prop or default
      videoRef.current.volume = muted ? 0 : 1;
      videoRef.current.muted = muted;
    }
  }, [muted]);
  const handleVolumeChange = useCallback(() => {
    if (videoRef.current) {
      setVolume(videoRef.current.volume);
      setIsMuted(videoRef.current.muted);
    }
  }, []);
  const handleEnded = useCallback(() => {
    setIsPlaying(false);
    if (videoRef.current && !loop) {
      videoRef.current.currentTime = 0; // Reset to start if not looping
    }
    seenInterrupts.current.clear(); // Clear seen interrupts when video ends
    setHasPlayed(false); // Reset hasPlayed state when video ends
  }, [loop]);

  // Attach/detach video event listeners
  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('play', handlePlay);
      videoElement.addEventListener('pause', handlePause);
      videoElement.addEventListener('timeupdate', handleTimeUpdate);
      videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);
      videoElement.addEventListener('volumechange', handleVolumeChange);
      videoElement.addEventListener('ended', handleEnded);

      // Initial play/pause based on autoPlay prop
      if (autoPlay) {
        videoElement.play().catch(error => console.error("Autoplay failed:", error));
      } else {
        videoElement.pause();
      }
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('play', handlePlay);
        videoElement.removeEventListener('pause', handlePause);
        videoElement.removeEventListener('timeupdate', handleTimeUpdate);
        videoElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
        videoElement.removeEventListener('volumechange', handleVolumeChange);
        videoElement.removeEventListener('ended', handleEnded);
      }
    };
  }, [autoPlay, handlePlay, handlePause, handleTimeUpdate, handleLoadedMetadata, handleVolumeChange, handleEnded]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullScreen(document.fullscreenElement === playerContainerRef.current);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Control functions
  const togglePlayPause = useCallback(() => {
    if (isInterruptActive) return; // Prevent play/pause when interrupt is active

    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(error => console.error("Play failed:", error));
      }
    }
  }, [isPlaying, isInterruptActive]);

  const handleProgressSeek = useCallback((value: number) => {
    if (videoRef.current) {
      const newTime = (value / 100) * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime); // Update state immediately for smoother UI
    }
  }, [duration]);

  const handleVolumeSliderChange = useCallback((value: number) => {
    if (videoRef.current) {
      const newVolume = value / 100; // Convert 0-100 to 0-1
      videoRef.current.volume = newVolume;
      setIsMuted(newVolume === 0); // Mute if volume is 0
    }
  }, []);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      // If unmuting from a previously 0 volume, set to a default (e.g., 0.5)
      if (isMuted && videoRef.current.volume === 0) {
        videoRef.current.volume = 0.5;
        setVolume(0.5);
      }
    }
  }, [isMuted]);

  const toggleFullScreen = useCallback(() => {
    if (playerContainerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        playerContainerRef.current.requestFullscreen().catch(err => {
          console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
      }
    }
  }, []);

  // Auto-hide controls logic
  const handleMouseMove = useCallback(() => {
    setShowControls(true);
    if (controlsHideTimeout.current) {
      clearTimeout(controlsHideTimeout.current);
    }
    controlsHideTimeout.current = setTimeout(() => {
      if (isPlaying && !isFullScreen && !isInterruptActive) { // Only hide if playing, not fullscreen, and no interrupt
        setShowControls(false);
      }
    }, 3000); // Hide after 3 seconds of inactivity
  }, [isPlaying, isFullScreen, isInterruptActive]);

  const handleMouseLeave = useCallback(() => {
    if (isPlaying && !isFullScreen && !isInterruptActive) {
      setShowControls(false);
    }
    if (controlsHideTimeout.current) {
      clearTimeout(controlsHideTimeout.current);
    }
  }, [isPlaying, isFullScreen, isInterruptActive]);

  // Stop hiding controls when paused or on fullscreen or interrupt is active
  useEffect(() => {
    if (!isPlaying || isFullScreen || isInterruptActive) {
      setShowControls(true);
      if (controlsHideTimeout.current) {
        clearTimeout(controlsHideTimeout.current);
      }
    }
  }, [isPlaying, isFullScreen, isInterruptActive]);

  // Dismiss interrupt and resume video
  const dismissInterrupt = useCallback(() => {
    setIsInterruptActive(false);
    setCurrentInterrupt(null);
    if (videoRef.current) {
      videoRef.current.play().catch(error => console.error("Resume play failed:", error));
    }
  }, []);

  return (
    <VideoPlayerContainer
      ref={playerContainerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={togglePlayPause} // Click anywhere on player to play/pause
      title={title}
      {...props}
    >
      {/* Conditionally render placeholder image */}
      {placeholderImage && (!hasPlayed || !isPlaying) && (
        <PlaceholderImage src={placeholderImage} alt={`${title} placeholder`} />
      )}

      <StyledVideo
        ref={videoRef}
        src={src}
        loop={loop}
        preload="metadata" // Load enough to get duration
        title={title}
        // Controls are handled by custom UI, so native controls are off
        controls={false}
      />

      {isInterruptActive && currentInterrupt && (
        <InterruptOverlay>
          <Card style={{ maxWidth: '400px', width: '100%', textAlign: 'center' }}>
            {currentInterrupt.content}
            <Button variant="primary" onClick={(e: any) => { e.stopPropagation(); dismissInterrupt(); }}
              style={{ marginTop: theme.spacing.md }}>
              Continue
            </Button>
          </Card>
        </InterruptOverlay>
      )}

      <ControlsOverlay show={showControls || !isPlaying || isFullScreen} className="controls-overlay">
        {/* Progress Bar with Interrupt Markers */}
        <ProgressBarWrapper
          onClick={(e) => {
            // Prevent seeking when interrupt is active
            if (isInterruptActive) {
              e.stopPropagation();
              return;
            }
            if (videoRef.current && e.currentTarget) {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const newProgressPercentage = (clickX / rect.width) * 100;
              handleProgressSeek(newProgressPercentage);
            }
          }}
        >
          <ProgressBar
            value={(currentTime / duration) * 100 || 0}
            max={100}
            style={{ cursor: 'pointer' }}
          />
          {/* Render interrupt markers */}
          {interrupts.map((interrupt) => {
            const markerPosition = (interrupt.timestampSeconds / duration) * 100;
            // Only render if duration is known and position is valid
            if (duration > 0 && !isNaN(markerPosition) && isFinite(markerPosition)) {
              return (
                <InterruptMarker
                  key={interrupt.id}
                  position={markerPosition}
                  title={`Interrupt at ${formatTime(interrupt.timestampSeconds)}`}
                />
              );
            }
            return null;
          })}
        </ProgressBarWrapper>


        {/* Bottom Controls */}
        <BottomControls>
          {/* Play/Pause Button */}
          <Button variant="icon" size="sm" onClick={(e: any) => { e.stopPropagation(); togglePlayPause(); }}
            style={{ color: '#fff' }} disabled={isInterruptActive}>
            {isPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play'}
          </Button>

          {/* Volume Control */}
          <VolumeControl>
            <Button variant="icon" size="sm" onClick={(e: any) => { e.stopPropagation(); toggleMute(); }}
              style={{ color: '#fff' }} disabled={isInterruptActive}>
              {isMuted || volume === 0 ? 'fa-solid fa-volume-mute' : (volume > 0.5 ? 'fa-solid fa-volume-up' : 'fa-solid fa-volume-down')}
            </Button>
            <Slider
              min={0}
              max={100}
              step={1}
              value={isMuted ? 0 : volume * 100} // Convert 0-1 to 0-100 for slider
              onValueChange={handleVolumeSliderChange}
              onClick={(e: any) => e.stopPropagation()} // Prevent player play/pause click
              style={{ flexGrow: 1 }}
              disabled={isInterruptActive}
            />
          </VolumeControl>

          {/* Current Time / Duration */}
          <TimeDisplay>
            {formatTime(currentTime)} / {formatTime(duration)}
          </TimeDisplay>

          {/* Spacer to push fullscreen button to the right */}
          <div style={{ flexGrow: 1 }} />

          {/* Fullscreen Button */}
          <Button variant="icon" size="sm" onClick={(e: any) => { e.stopPropagation(); toggleFullScreen(); }}
            style={{ color: '#fff' }} disabled={isInterruptActive}>
            {isFullScreen ? 'fa-solid fa-compress-arrows-alt' : 'fa-solid fa-expand-arrows-alt'}
          </Button>
        </BottomControls>
      </ControlsOverlay>
    </VideoPlayerContainer>
  );
};
