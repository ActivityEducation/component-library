// This file serves as a simple demonstration application for the AscendUCore UI Kit.
// It uses the ThemeProvider to apply the design system's theme and showcases
// various Button component variants and sizes.
// In a real component library, Storybook would typically be used for comprehensive
// component showcasing and documentation.

import { ThemeProvider } from '@emotion/react';
import { theme } from './theme'; // Import the theme object
import { Button } from './components/Button'; // Import the Button component

function App() {
  return (
    // Wrap the entire application with the ThemeProvider to make theme values accessible
    <ThemeProvider theme={theme}>
      <div
        style={{
          padding: theme.spacing['2xl'], // Use theme spacing for overall padding
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing.lg, // Use theme spacing for gaps between sections
          backgroundColor: theme.colors.background.default, // Use theme background color
          minHeight: '100vh', // Ensure it takes full viewport height
          fontFamily: theme.typography.fontFamily, // Apply global font family
          color: theme.colors.text.default, // Apply global text color
        }}
      >
        <h1
          style={{
            ...theme.typography.h1, // Apply h1 typography from theme
            marginBottom: theme.spacing.xl, // Use theme spacing
            color: theme.colors.primary['40'], // Use a primary color for the title
          }}
        >
          Welcome to AscendUCore UI Kit
        </h1>
        <p style={{ ...theme.typography.body, marginBottom: theme.spacing.lg }}>
          This is a demonstration of the foundational components and theme.
        </p>

        <section style={{ marginBottom: theme.spacing.xl }}>
          <h2 style={{ ...theme.typography.h2, marginBottom: theme.spacing.md }}>Buttons</h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap', // Allow buttons to wrap on smaller screens
              gap: theme.spacing.md, // Use theme spacing for gaps between buttons
              alignItems: 'center',
            }}
          >
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="tertiary">Tertiary Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="destructive">Destructive Button</Button>
            <Button disabled>Disabled Button</Button>
          </div>
        </section>

        <section style={{ marginBottom: theme.spacing.xl }}>
          <h2 style={{ ...theme.typography.h2, marginBottom: theme.spacing.md }}>Button Sizes</h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: theme.spacing.md,
              alignItems: 'center',
            }}
          >
            <Button size="sm">Small Button</Button>
            <Button size="md">Medium Button</Button>
            <Button size="lg">Large Button</Button>
          </div>
        </section>

        <section style={{ marginBottom: theme.spacing.xl }}>
          <h2 style={{ ...theme.typography.h2, marginBottom: theme.spacing.md }}>Typography Examples</h2>
          <p style={theme.typography.h1}>Heading 1 Example</p>
          <p style={theme.typography.h2}>Heading 2 Example</p>
          <p style={theme.typography.h3}>Heading 3 Example</p>
          <p style={theme.typography.h4}>Heading 4 Example</p>
          <p style={theme.typography.bodyLarge}>This is a large body text example, great for introductory paragraphs.</p>
          <p style={theme.typography.body}>This is a standard body text example, used for most content.</p>
          <p style={theme.typography.bodySmall}>This is a small body text example, useful for less prominent information.</p>
          <p style={theme.typography.caption}>This is a caption text example, often used for metadata or footnotes.</p>
        </section>

        <section>
          <h2 style={{ ...theme.typography.h2, marginBottom: theme.spacing.md }}>Spacing & Borders</h2>
          <div
            style={{
              display: 'flex',
              gap: theme.spacing.md,
              padding: theme.spacing.lg,
              border: `1px solid ${theme.colors.border.default}`,
              borderRadius: theme.borderRadius.md,
              backgroundColor: theme.colors.background.surface,
              boxShadow: theme.shadows.sm,
            }}
          >
            <p style={theme.typography.body}>
              This box demonstrates theme spacing, borders, and background colors.
            </p>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
