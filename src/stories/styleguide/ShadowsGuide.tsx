// src/components/ShadowsGuide.tsx
import React from 'react';
import { Card } from '../../components/Card'; // Corrected internal import path
import { theme } from '../../theme';

export const ShadowsGuide: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: theme.spacing.md, marginBottom: theme.spacing.xl }}>
      {Object.entries(theme.shadows).map(([key, value]) => (
        <Card
          key={key}
          style={{
            width: '180px',
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: value,
            border: `1px solid ${theme.colors.neutral['80']}`
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
