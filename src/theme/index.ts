// This file defines the comprehensive theme object for the AscendUCore Design System.
// It combines raw colors into semantic names, and includes other design tokens like spacing,
// typography, border radii, shadows, and breakpoints.
// It also extends Emotion's Theme interface for robust TypeScript support.

import { primary, secondary, tertiary, neutral, neutralVariant, error } from './colors';

// Define the full theme structure for AscendUCore
export const theme = {
  colors: {
    // Raw color palettes
    primary,
    secondary,
    tertiary,
    neutral,
    neutralVariant,
    error,

    // Semantic colors for common UI elements, derived from the raw palettes
    text: {
      default: neutral['10'],       // Default dark text on light backgrounds
      light: neutral['90'],        // Light text (e.g., for dark backgrounds)
      onPrimary: primary['99'],    // Text color to use on primary backgrounds
      onSecondary: secondary['99'],// Text color to use on secondary backgrounds
      onError: error['99'],        // Text color to use on error backgrounds
      placeholder: neutral['60'],  // Placeholder text color
      link: primary['60'],         // Link text color
      linkHover: primary['70'],    // Link text color on hover
    },
    background: {
      default: neutral['100'],     // Main page background color
      surface: neutral['98'],      // Background for cards, modals, and other elevated surfaces
      primary: primary['40'],      // Primary background color (e.g., for primary buttons)
      secondary: secondary['40'],  // Secondary background color
      tertiary: tertiary['40'],    // Tertiary background color
      error: error['40'],          // Error background color
    },
    border: {
      default: neutral['80'],      // Default border color
      strong: neutral['60'],       // Stronger border color
      focus: primary['60'],        // Border color for focused elements
      error: error['60'],          // Border color for error states
    },
    action: {
      primary: primary['40'],      // Primary action color (e.g., primary button background)
      primaryHover: primary['50'], // Primary action hover state
      secondary: secondary['40'],  // Secondary action color
      secondaryHover: secondary['50'], // Secondary action hover state
      tertiary: tertiary['40'],    // Tertiary action color
      tertiaryHover: tertiary['50'], // Tertiary action hover state
      ghostHover: neutral['95'],   // Hover state for ghost buttons/elements
      error: error['40'],          // Error action color
      errorHover: error['50'],     // Error action hover state
    },
    status: {
      success: secondary['60'],    // Success indicator color
      warning: '#FFC107',          // Example warning color (can be defined in palette if needed)
      info: tertiary['60'],        // Information indicator color
    }
  },
  // Spacing scale for consistent padding, margin, and gaps
  spacing: {
    'xxs': '2px', // Very small spacing
    'xs': '4px',
    'sm': '8px',
    'md': '16px',
    'lg': '24px',
    'xl': '32px',
    '2xl': '48px',
    '3xl': '64px',
  },
  // Typography definitions for consistent text styles
  typography: {
    // Default font family for the entire system
    fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    // Headings
    h1: {
      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', // Responsive font size for large headings
      fontWeight: 700,
      lineHeight: 1.2,
      color: neutral['10'],
    },
    h2: {
      fontSize: 'clamp(2rem, 4vw, 2.8rem)',
      fontWeight: 600,
      lineHeight: 1.3,
      color: neutral['10'],
    },
    h3: {
      fontSize: 'clamp(1.75rem, 3.5vw, 2.2rem)',
      fontWeight: 600,
      lineHeight: 1.4,
      color: neutral['10'],
    },
    h4: {
      fontSize: 'clamp(1.5rem, 3vw, 1.8rem)',
      fontWeight: 500,
      lineHeight: 1.4,
      color: neutral['10'],
    },
    h5: {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: 1.45,
    },
    // Body text
    body: {
      fontSize: '1rem', // 16px
      fontWeight: 400,
      lineHeight: 1.6,
      color: neutral['30'],
    },
    bodyLarge: {
      fontSize: '1.125rem', // 18px
      fontWeight: 400,
      lineHeight: 1.7,
      color: neutral['30'],
    },
    bodySmall: {
      fontSize: '0.875rem', // 14px
      fontWeight: 400,
      lineHeight: 1.5,
      color: neutral['40'],
    },
    // Other text styles
    caption: {
      fontSize: '0.75rem', // 12px
      fontWeight: 400,
      lineHeight: 1.4,
      color: neutral['50'],
    },
    button: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1,
      textTransform: 'none', // Buttons should not be all caps by default
    }
  },
  // Border radius values for consistent rounded corners
  borderRadius: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px', // For pill-shaped elements
  },
  // Shadow definitions for depth and hierarchy
  shadows: {
    none: 'none',
    sm: '0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.08)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.1)',
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  // Transitions for smooth UI interactions
  transitions: {
    default: 'all 0.2s ease-in-out',
    fast: 'all 0.1s ease-out',
    slow: 'all 0.3s ease-in',
  },
};

// Extend Emotion's Theme interface for TypeScript support.
// This allows components to access `props.theme` with full type safety.
declare module '@emotion/react' {
  export interface Theme {
    colors: typeof theme.colors;
    spacing: typeof theme.spacing;
    typography: typeof theme.typography;
    borderRadius: typeof theme.borderRadius;
    shadows: typeof theme.shadows;
    breakpoints: typeof theme.breakpoints;
    transitions: typeof theme.transitions;
  }
}
