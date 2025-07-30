// index.tsx
import React, { useState, useRef, useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import type { SerializedStyles } from "@emotion/react";

// Import necessary components from the UI Kit
import { Button } from "../Button";
import { Slider } from "../Slider";
import { ProgressBar } from "../ProgressBar";
import { Card } from "../Card";
import { theme } from "../../theme";

// --- Utility Functions ---

// Helper function to format time (e.g., 120 seconds -> 02:00)
const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const paddedMinutes = String(minutes).padStart(2, "0");
  const paddedSeconds = String(remainingSeconds).padStart(2, "0");
  return `${paddedMinutes}:${paddedSeconds}`;
};

// --- Interfaces ---

// Interface for interactive video interrupts
export interface VideoInterrupt {
  timestampSeconds: number; // The time in seconds when the interrupt should occur
  content: React.ReactNode; // The content to display in the card
  id: string; // Unique ID for the interrupt (useful for tracking if seen)
}

// Define the props interface for the VideoPlayer component
// We explicitly omit the default onTimeUpdate and onVolumeChange from HTMLAttributes to avoid conflicts
interface VideoPlayerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onTimeUpdate' | 'onVolumeChange'> { // Explicitly OMIT onTimeUpdate and onVolumeChange
  src: string;
  title?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  interrupts?: VideoInterrupt[];
  placeholderImage?: string;
  css?: SerializedStyles;
  
  // NEW: Callback props for state changes
  onPlay?: () => void;
  onPause?: () => void;
  onPlayerVolumeChange?: (volume: number, isMuted: boolean) => void; // Renamed to avoid clash
  onPlayerTimeUpdate?: (currentTime: number, duration: number) => void; // Custom name
  onFullScreenChange?: (isFullScreen: boolean) => void;
  onInterruptActive?: (interrupt: VideoInterrupt) => void;
  onInterruptDismiss?: () => void;
  onEnded?: () => void;
}

// --- Styled Components ---

const VideoPlayerContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  background-color: #000;
  border-radius: ${(props) => props.theme.borderRadius.md};
  overflow: hidden;
  box-shadow: ${(props) => props.theme.shadows.lg};
  aspect-ratio: 16 / 9;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;

  // When controls are visible, ensure they are on top
  &:hover .controls-overlay {
    opacity: 1;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  background-color: black;
`;

const PlaceholderImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const ControlsOverlay = styled.div<{ show: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  pointer-events: ${(props) => (props.show ? "auto" : "none")};
  z-index: 2;
`;

const BottomControls = styled.div`
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.spacing.sm}
    ${(props) => props.theme.spacing.lg};
  gap: ${(props) => props.theme.spacing.md};
  color: #fff;
  flex-wrap: wrap;
`;

const TimeDisplay = styled.span`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.bodySmall.fontSize};
  color: #fff;
  white-space: nowrap;
`;

const VolumeControl = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
  width: 120px;
  flex-shrink: 0;
`;

const InterruptOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  padding: ${(props) => props.theme.spacing.xl};

  & > div {
    max-width: 90%;
    max-height: 90%;
    overflow-y: auto;
  }
`;

const ProgressBarWrapper = styled.div`
  position: relative;
  width: calc(100% - 20px);
  margin-inline: auto;
  height: ${(props) => props.theme.spacing.sm};
  cursor: pointer;
`;

const InterruptMarker = styled.div<{ position: number }>`
  position: absolute;
  top: 50%;
  left: ${(props) => props.position}%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background-color: ${(props) => props.theme.colors.secondary["40"]};
  border-radius: ${(props) => props.theme.borderRadius.full};
  z-index: 5;
  pointer-events: none;
`;

/**
 * The **VideoPlayer** is a comprehensive and interactive component designed for embedding video content within the learning platform. It goes beyond standard playback by integrating features specifically for educational purposes, such as interactive interrupts. This component ensures a consistent, accessible, and engaging video experience for all users, abstracting the complexities of the HTML5 video API into a simple, prop-driven interface built with components from our own design system.
 *
 * ```typescript
 * import { VideoPlayer } from "@activityeducation/component-library";
 * ```
 *
 * ## Justification
 * For the application, the `VideoPlayer` serves as a cornerstone for delivering dynamic educational content. By providing a standardized player, we ensure a uniform look, feel, and functionality across all courses and modules, which reinforces the platform's professional and cohesive identity. The component's most significant feature, **interactive interrupts**, transforms video from a passive medium into an active learning tool. This allows instructional designers to embed questions, key takeaways, or supplementary materials directly into the video timeline, creating opportunities for formative assessment and deeper engagement. Encapsulating this functionality within a single, reusable component drastically simplifies development and content creation, allowing for rapid deployment of rich, interactive video lessons.
 *
 * From the end-user's perspective, the `VideoPlayer` offers a familiar and intuitive interface that minimizes cognitive load and allows them to focus on the learning material. The custom controls are clear and accessible, and the visual markers for interrupts on the progress bar set clear expectations, letting learners know when interaction points are coming up. This feature enhances the learning process by breaking up long videos, reinforcing key concepts at crucial moments, and providing immediate opportunities for self-assessment. The inclusion of a placeholder image and smooth transitions creates a polished, high-quality experience that builds user confidence and makes the learning journey more engaging and effective.
 *
 * ## Acceptance Criteria
 * - **GIVEN** a user views a page with the `VideoPlayer`, **WHEN** the video is playing, **THEN** the controls should automatically hide after 3 seconds of mouse inactivity.
 * - **GIVEN** a user views a video with interrupts defined, **WHEN** the video playback time reaches an interrupt's timestamp, **THEN** the video must pause and the interrupt's content must be displayed in an overlay `Card`.
 * - **GIVEN** an interrupt is displayed, **WHEN** the user clicks the "Continue" button, **THEN** the overlay must disappear and the video must resume playing.
 * - **GIVEN** a user hovers over the progress bar, **WHEN** interrupts are defined, **THEN** markers should be visible on the progress bar at the corresponding timestamps.
 * - **GIVEN** the `placeholderImage` prop is provided, **WHEN** the video has not yet been played, **THEN** the placeholder image must be visible.
 * - **GIVEN** the video is playing and the user pauses it, **THEN** the placeholder image should become visible again if it was provided.
 * - **GIVEN** a user clicks anywhere on the video viewport, **THEN** the video's play/pause state should toggle accordingly.
 * - **GIVEN** a user clicks the fullscreen button, **THEN** the player should attempt to enter or exit fullscreen mode.
 *
 *
 * ## Example & Props
 */
export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  title = "Video Player",
  autoPlay = false,
  loop = false,
  muted = false,
  interrupts = [],
  placeholderImage,
  onPlay,
  onPause,
  onPlayerVolumeChange,
  onPlayerTimeUpdate,
  onFullScreenChange,
  onInterruptActive,
  onInterruptDismiss,
  onEnded,
  ...props
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);

  // --- State Management ---
  const [playerState, setPlayerState] = useState({
    isPlaying: autoPlay,
    currentTime: 0,
    duration: 0,
    volume: muted ? 0 : 1,
    isMuted: muted,
    isFullScreen: false,
    showControls: true,
    hasPlayed: false,
    currentInterrupt: null as VideoInterrupt | null,
    isInterruptActive: false,
  });

  const seenInterrupts = useRef(new Set<string>());
  const controlsHideTimeout = useRef<number | null>(null);

  // Destructure playerState for easier access
  const {
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    isFullScreen,
    showControls,
    hasPlayed,
    currentInterrupt,
    isInterruptActive,
  } = playerState;

  // --- Event Handlers (memoized with useCallback) ---

  const handlePlay = useCallback(() => {
    setPlayerState((prevState) => ({ ...prevState, isPlaying: true, hasPlayed: true }));
    onPlay?.();
  }, [onPlay]);

  const handlePause = useCallback(() => {
    setPlayerState((prevState) => ({ ...prevState, isPlaying: false }));
    onPause?.();
  }, [onPause]);

  const handleTimeUpdate = useCallback(() => {
    if (!videoRef.current) return;

    const newCurrentTime = videoRef.current.currentTime;
    setPlayerState((prevState) => ({ ...prevState, currentTime: newCurrentTime }));
    onPlayerTimeUpdate?.(newCurrentTime, playerState.duration);

    // Check for interrupts
    if (!isInterruptActive) {
      for (const interrupt of interrupts) {
        if (
          newCurrentTime >= interrupt.timestampSeconds &&
          newCurrentTime < interrupt.timestampSeconds + 0.5 &&
          !seenInterrupts.current.has(interrupt.id)
        ) {
          videoRef.current.pause();
          setPlayerState((prevState) => ({
            ...prevState,
            currentInterrupt: interrupt,
            isInterruptActive: true,
          }));
          seenInterrupts.current.add(interrupt.id);
          onInterruptActive?.(interrupt);
          break; // Only trigger one interrupt at a time
        }
      }
    }
  }, [interrupts, isInterruptActive, onPlayerTimeUpdate, onInterruptActive, playerState.duration]);

  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      setPlayerState((prevState) => ({
        ...prevState,
        duration: videoRef.current!.duration,
      }));
      videoRef.current.volume = muted ? 0 : 1;
    }
  }, [muted]);

  const handleVolumeChange = useCallback(() => {
    if (videoRef.current) {
      const newVolume = videoRef.current.volume;
      const newIsMuted = videoRef.current.muted;
      setPlayerState((prevState) => ({
        ...prevState,
        volume: newVolume,
        isMuted: newIsMuted,
      }));
      onPlayerVolumeChange?.(newVolume, newIsMuted);
    }
  }, [onPlayerVolumeChange]);

  const handleEnded = useCallback(() => {
    setPlayerState((prevState) => ({ ...prevState, isPlaying: false }));
    if (videoRef.current && !loop) {
      videoRef.current.currentTime = 0;
    }
    seenInterrupts.current.clear();
    setPlayerState((prevState) => ({ ...prevState, hasPlayed: false }));
    onEnded?.();
  }, [loop, onEnded]);

  const handleFullscreenChange = useCallback(() => {
    const newIsFullScreen = document.fullscreenElement === playerContainerRef.current;
    setPlayerState((prevState) => ({
      ...prevState,
      isFullScreen: newIsFullScreen,
    }));
    onFullScreenChange?.(newIsFullScreen);
  }, [onFullScreenChange]);

  // --- Effects ---

  // Attach/detach video event listeners
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    videoElement.addEventListener("play", handlePlay);
    videoElement.addEventListener("pause", handlePause);
    videoElement.addEventListener("timeupdate", handleTimeUpdate);
    videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);
    videoElement.addEventListener("volumechange", handleVolumeChange);
    videoElement.addEventListener("ended", handleEnded);

    return () => {
      videoElement.removeEventListener("play", handlePlay);
      videoElement.removeEventListener("pause", handlePause);
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
      videoElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
      videoElement.removeEventListener("volumechange", handleVolumeChange);
      videoElement.removeEventListener("ended", handleEnded);
    };
  }, [
    handlePlay,
    handlePause,
    handleTimeUpdate,
    handleLoadedMetadata,
    handleVolumeChange,
    handleEnded,
  ]);

  // Fullscreen change listener
  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, [handleFullscreenChange]);

  // Auto-hide controls logic
  useEffect(() => {
    if (!isPlaying || isFullScreen || isInterruptActive) {
      setPlayerState((prevState) => ({ ...prevState, showControls: true }));
      if (controlsHideTimeout.current) {
        clearTimeout(controlsHideTimeout.current);
      }
    }
  }, [isPlaying, isFullScreen, isInterruptActive]);

  // --- Control Functions (memoized with useCallback) ---

  const togglePlayPause = useCallback(async () => {
    if (isInterruptActive) return;

    if (videoRef.current) {
      if (isPlaying) {
        await videoRef.current.pause();
      } else {
        await videoRef.current.play().catch((error) => {
          console.error("Failed to play video via user interaction:", error);
        });
      }
    }
  }, [isPlaying, isInterruptActive]);

  const handleProgressSeek = useCallback(
    (value: number) => {
      if (videoRef.current) {
        const newTime = (value / 100) * duration;
        videoRef.current.currentTime = newTime;
        setPlayerState((prevState) => ({ ...prevState, currentTime: newTime }));
      }
    },
    [duration]
  );

  const handleVolumeSliderChange = useCallback((value: number) => {
    if (videoRef.current) {
      const newVolume = value / 100;
      videoRef.current.volume = newVolume;
      // The state update and onVolumeChange prop call are already handled by the native 'volumechange' listener.
    }
  }, []);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      if (isMuted && videoRef.current.volume === 0) {
        videoRef.current.volume = 0.5;
      }
    }
  }, [isMuted]);

  const toggleFullScreen = useCallback(() => {
    if (playerContainerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        playerContainerRef.current.requestFullscreen().catch((err) => {
          console.error(
            `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
          );
        });
      }
    }
  }, []);

  const handleMouseMove = useCallback(() => {
    setPlayerState((prevState) => ({ ...prevState, showControls: true }));
    if (controlsHideTimeout.current) {
      clearTimeout(controlsHideTimeout.current);
    }
    controlsHideTimeout.current = setTimeout(() => {
      if (isPlaying && !isFullScreen && !isInterruptActive) {
        setPlayerState((prevState) => ({ ...prevState, showControls: false }));
      }
    }, 3000) as any;
  }, [isPlaying, isFullScreen, isInterruptActive]);

  const handleMouseLeave = useCallback(() => {
    if (isPlaying && !isFullScreen && !isInterruptActive) {
      setPlayerState((prevState) => ({ ...prevState, showControls: false }));
    }
    if (controlsHideTimeout.current) {
      clearTimeout(controlsHideTimeout.current);
    }
  }, [isPlaying, isFullScreen, isInterruptActive]);

  const dismissInterrupt = useCallback(() => {
    setPlayerState((prevState) => ({
      ...prevState,
      isInterruptActive: false,
      currentInterrupt: null,
    }));
    onInterruptDismiss?.();
    if (videoRef.current) {
      videoRef.current.play().catch((error) => console.error("Resume play failed:", error));
    }
  }, [onInterruptDismiss]);

  // --- Render ---

  return (
    <VideoPlayerContainer
      ref={playerContainerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={togglePlayPause}
      title={title}
      {...props}
    >
      {placeholderImage && (!hasPlayed || !isPlaying) && (
        <PlaceholderImage src={placeholderImage} alt={`${title} placeholder`} />
      )}

      <StyledVideo
        ref={videoRef}
        src={src}
        loop={loop}
        autoPlay={autoPlay}
        muted={muted}
        preload="metadata"
        controls={false}
      />

      {isInterruptActive && currentInterrupt && (
        <InterruptOverlay>
          <Card
            style={{ maxWidth: "400px", width: "100%", textAlign: "center" }}
          >
            {currentInterrupt.content}
            <Button
              variant="primary"
              onClick={(e: any) => {
                e.stopPropagation();
                dismissInterrupt();
              }}
              style={{ marginTop: theme.spacing.md }}
              aria-label="Continue video playback"
            >
              Continue
            </Button>
          </Card>
        </InterruptOverlay>
      )}

      <ControlsOverlay
        show={showControls || !isPlaying || isFullScreen}
        className="controls-overlay"
      >
        <ProgressBarWrapper
          onClick={(e) => {
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
            style={{ cursor: "pointer" }}
          />
          {interrupts.map((interrupt) => {
            const markerPosition =
              (interrupt.timestampSeconds / duration) * 100;
            if (
              duration > 0 &&
              !isNaN(markerPosition) &&
              isFinite(markerPosition)
            ) {
              return (
                <InterruptMarker
                  key={interrupt.id}
                  position={markerPosition}
                  title={`Interrupt at ${formatTime(
                    interrupt.timestampSeconds
                  )}`}
                />
              );
            }
            return null;
          })}
        </ProgressBarWrapper>

        <BottomControls>
          <Button
            aria-label={isPlaying ? "pause" : "play"}
            variant="icon"
            size="sm"
            onClick={(e: any) => {
              e.stopPropagation();
              togglePlayPause();
            }}
            style={{ color: "#fff" }}
            disabled={isInterruptActive}
          >
            {isPlaying ? "fa-solid fa-pause" : "fa-solid fa-play"}
          </Button>

          <VolumeControl>
            <Button
              aria-label={
                isMuted || volume === 0 ? "volume mute" : "volume up"
              }
              variant="icon"
              style={{ minWidth: "32px", color: "#fff" }}
              size="sm"
              onClick={(e: any) => {
                e.stopPropagation();
                toggleMute();
              }}
              disabled={isInterruptActive}
            >
              {isMuted || volume === 0
                ? "fa-solid fa-volume-mute"
                : volume > 0.5
                ? "fa-solid fa-volume-up"
                : "fa-solid fa-volume-down"}
            </Button>
            <Slider
              min={0}
              max={100}
              step={1}
              value={isMuted ? 0 : volume * 100}
              onValueChange={handleVolumeSliderChange}
              onClick={(e: any) => e.stopPropagation()}
              style={{ flexGrow: 1 }}
              disabled={isInterruptActive}
            />
          </VolumeControl>

          <TimeDisplay>
            {formatTime(currentTime)} / {formatTime(duration)}
          </TimeDisplay>

          <div style={{ flexGrow: 1 }} />

          <Button
            variant="icon"
            size="sm"
            onClick={(e: any) => {
              e.stopPropagation();
              toggleFullScreen();
            }}
            style={{ color: "#fff" }}
            disabled={isInterruptActive}
            aria-label={isFullScreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullScreen
              ? "fa-solid fa-compress-arrows-alt"
              : "fa-solid fa-expand-arrows-alt"}
          </Button>
        </BottomControls>
      </ControlsOverlay>
    </VideoPlayerContainer>
  );
};

export default VideoPlayer;
