// src/components/BorderRadiusGuide.tsx
import React from 'react';
import { Card } from '../../components/Card'; // Corrected internal import path
import { theme } from '../../theme';

export const BorderRadiusGuide: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: theme.spacing.md, marginBottom: theme.spacing.xl }}>
      {Object.entries(theme.borderRadius).map(([key, value]) => (
        <Card
          key={key}
          style={{
            width: '150px',
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: value,
            border: `2px solid ${theme.colors.primary['40']}`,
            backgroundColor: theme.colors.background.surface
          }}
        >
          <div style={{ fontSize: theme.typography.bodySmall.fontSize, color: theme.colors.text.default, textAlign: 'center' }}>
            {key}<br/>`{value}`
          </div>
        </Card>
      ))}
    </div>
  );
};
