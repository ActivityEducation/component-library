// This is the main entry point for the AscendUCore UI Kit.
// It exports all public components and the theme provider,
// making them available for consumption by other applications.

// Components
export * from './components/Badge';
export * from './components/Button';
export * from './components/Card';
export * from './components/Checkbox';
export * from './components/Flipper';
export * from './components/Flyover';
export * from './components/Icon';
export * from './components/Input';
export * from './components/List';
export * from './components/Menu';
export * from './components/ProgressBar';
export * from './components/Radio';
export * from './components/Select';
export * from './components/Sidenav';
export * from './components/Slider';
export * from './components/Spinner';
export * from './components/Tab';
export * from './components/Table';
export * from './components/Toolbar';
export * from './components/VideoPlayer';
export * from './components/Editor';
export * from './components/Chart';
export * from './components/Transcript';
export * from './components/Editor/FlashcardModel';
export * from './components/Flashcard';

// Widgets
export * from './widgets/ObjectiveProgress';
export * from './widgets/UpcomingDeadlines';

// Export the theme object itself, useful for direct access to design tokens
export * from './theme';
// Export Emotion's ThemeProvider, which is essential for consuming applications
// to provide the theme context to AscendUCore components.
export * from '@emotion/react';