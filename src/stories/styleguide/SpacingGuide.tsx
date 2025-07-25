// src/components/SpacingGuide.tsx
import React from 'react';
import { theme } from '../../theme';

export const SpacingGuide: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.lg, marginBottom: theme.spacing.xl }}>
      {Object.entries(theme.spacing).map(([key, value]) => (
        <div key={key} style={{ display: 'flex', alignItems: 'center', backgroundColor: theme.colors.background.surface, borderRadius: theme.borderRadius.md, padding: theme.spacing.sm, border: `1px solid ${theme.colors.border.default}` }}>
          <div style={{
            width: value,
            height: value,
            backgroundColor: theme.colors.primary['60'],
            flexShrink: 0,
            marginRight: theme.spacing.md,
            border: `1px solid ${theme.colors.primary['40']}`
          }}></div>
          <div style={{ display: 'flex', flexDirection: 'column', color: theme.colors.text.default }}>
            <span style={{ fontSize: theme.typography.body.fontSize, fontWeight: 500 }}>{key}</span>
            <span style={{ fontSize: theme.typography.caption.fontSize, color: theme.colors.neutral['60'] }}>{value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
