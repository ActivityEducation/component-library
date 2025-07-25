// src/components/ColorPalette.tsx
import React from 'react';
import { theme } from '../../theme';
import { Card } from '../../components/Card'; // Corrected internal import path

interface ColorPaletteProps {
  colors: Record<string, string>;
  titlePrefix: string;
}

export const ColorPalette: React.FC<ColorPaletteProps> = ({ colors, titlePrefix }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: theme.spacing.md, marginBottom: theme.spacing.xl }}>
      {Object.entries(colors).map(([key, value]) => (
        <Card key={key} style={{ width: '120px', textAlign: 'center', padding: theme.spacing.sm }}>
          <div style={{
            backgroundColor: value,
            width: '100%',
            height: '60px',
            borderRadius: theme.borderRadius.md,
            marginBottom: theme.spacing.xs,
            border: `1px solid ${theme.colors.neutral['80']}`
          }}></div>
          <div style={{ fontSize: theme.typography.caption.fontSize, color: theme.colors.text.default }}>
            {titlePrefix} {key}
          </div>
          <div style={{ fontSize: theme.typography.caption.fontSize, color: theme.colors.neutral['60'] }}>
            {value}
          </div>
        </Card>
      ))}
    </div>
  );
};
