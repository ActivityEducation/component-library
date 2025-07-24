// src/index.ts
// This is the main entry point for the AscendUCore UI Kit.
// It exports all public components and the theme provider,
// making them available for consumption by other applications.

export { Button } from './components/Button';
// Export the theme object itself, useful for direct access to design tokens
export { theme } from './theme';
// Export Emotion's ThemeProvider, which is essential for consuming applications
// to provide the theme context to AscendUCore components.
export { ThemeProvider } from '@emotion/react';

// You might also want to export the TypeScript type for your theme if needed
// import type { Theme } from '@emotion/react';
// export type { Theme };
