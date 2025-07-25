import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../theme';
import { ColorPalette } from '../styleguide/ColorPalette';
import { Card } from '../../components/Card'; // Assuming Card is needed for semantic colors too

const meta: Meta = {
  title: 'Design System/Colors',
  component: ColorPalette, // Pointing to the ColorPalette component for documentation
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ margin: '3em' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'], // Tag for auto-generated documentation
  argTypes: {
    // Define argTypes for ColorPalette if it had props you wanted to control
    // For this example, we're passing props directly in stories.
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryColors: Story = {
  render: () => (
    <>
      <h3>Primary Colors</h3>
      <p>These colors are used for primary actions, branding elements, and active states.</p>
      <ColorPalette colors={theme.colors.primary} titlePrefix="Primary" />
    </>
  ),
};

export const SecondaryColors: Story = {
  render: () => (
    <>
      <h3>Secondary Colors</h3>
      <p>Used for secondary actions, accents, and success states.</p>
      <ColorPalette colors={theme.colors.secondary} titlePrefix="Secondary" />
    </>
  ),
};

export const TertiaryColors: Story = {
  render: () => (
    <>
      <h3>Tertiary Colors</h3>
      <p>Used for less prominent elements, decorative accents, or states.</p>
      <ColorPalette colors={theme.colors.tertiary} titlePrefix="Tertiary" />
    </>
  ),
};

export const NeutralColors: Story = {
  render: () => (
    <>
      <h3>Neutral Colors</h3>
      <p>Used for text, backgrounds, borders, and other subtle UI elements.</p>
      <ColorPalette colors={theme.colors.neutral} titlePrefix="Neutral" />
    </>
  ),
};

export const NeutralVariantColors: Story = {
  render: () => (
    <>
      <h3>Neutral Variant Colors</h3>
      <p>Alternative shades for backgrounds, borders, or text.</p>
      <ColorPalette colors={theme.colors.neutralVariant} titlePrefix="Neutral Variant" />
    </>
  ),
};

export const ErrorColors: Story = {
  render: () => (
    <>
      <h3>Error Colors</h3>
      <p>Used to indicate errors, warnings, or destructive actions.</p>
      <ColorPalette colors={theme.colors.error} titlePrefix="Error" />
    </>
  ),
};

export const SemanticColors: Story = {
  render: () => (
    <>
      <h3>Semantic Colors</h3>
      <p>Application-specific color aliases for consistent usage.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: theme.spacing.md, marginBottom: theme.spacing.xl }}>
        <Card style={{ width: '180px', textAlign: 'center', padding: theme.spacing.sm }}>
          <div style={{ backgroundColor: theme.colors.text.default, width: '100%', height: '40px', borderRadius: theme.borderRadius.default, marginBottom: theme.spacing.xs, border: `1px solid ${theme.colors.neutral['80']}` }}></div>
          <div style={{ fontSize: theme.typography.caption.fontSize, color: theme.colors.text.default }}>Text Default</div>
          <div style={{ fontSize: theme.typography.caption.fontSize, color: theme.colors.neutral['60'] }}>{theme.colors.text.default}</div>
        </Card>
        <Card style={{ width: '180px', textAlign: 'center', padding: theme.spacing.sm, backgroundColor: theme.colors.neutral['10'] }}>
          <div style={{ backgroundColor: theme.colors.text.light, width: '100%', height: '40px', borderRadius: theme.borderRadius.default, marginBottom: theme.spacing.xs, border: `1px solid ${theme.colors.neutral['80']}` }}></div>
          <div style={{ fontSize: theme.typography.caption.fontSize, color: theme.colors.text.default }}>Text Light</div>
          <div style={{ fontSize: theme.typography.caption.fontSize, color: theme.colors.neutral['60'] }}>{theme.colors.text.light}</div>
        </Card>
        <Card style={{ width: '180px', textAlign: 'center', padding: theme.spacing.sm, backgroundColor: theme.colors.primary['40'] }}>
          <div style={{ backgroundColor: theme.colors.text.onPrimary, width: '100%', height: '40px', borderRadius: theme.borderRadius.default, marginBottom: theme.spacing.xs, border: `1px solid ${theme.colors.neutral['80']}` }}></div>
          <div style={{ fontSize: theme.typography.caption.fontSize, color: theme.colors.text.default }}>Text on Primary</div>
          <div style={{ fontSize: theme.typography.caption.fontSize, color: theme.colors.neutral['60'] }}>{theme.colors.text.onPrimary}</div>
        </Card>
        <Card style={{ width: '180px', textAlign: 'center', padding: theme.spacing.sm }}>
          <div style={{ backgroundColor: theme.colors.background.default, width: '100%', height: '40px', borderRadius: theme.borderRadius.default, marginBottom: theme.spacing.xs, border: `1px solid ${theme.colors.neutral['80']}` }}></div>
          <div style={{ fontSize: theme.typography.caption.fontSize, color: theme.colors.text.default }}>Background Default</div>
          <div style={{ fontSize: theme.typography.caption.fontSize, color: theme.colors.neutral['60'] }}>{theme.colors.background.default}</div>
        </Card>
        <Card style={{ width: '180px', textAlign: 'center', padding: theme.spacing.sm }}>
          <div style={{ backgroundColor: theme.colors.background.surface, width: '100%', height: '40px', borderRadius: theme.borderRadius.default, marginBottom: theme.spacing.xs, border: `1px solid ${theme.colors.neutral['80']}` }}></div>
          <div style={{ fontSize: theme.typography.caption.fontSize, color: theme.colors.text.default }}>Background Surface</div>
          <div style={{ fontSize: theme.typography.caption.fontSize, color: theme.colors.neutral['60'] }}>{theme.colors.background.surface}</div>
        </Card>
      </div>
    </>
  ),
};
