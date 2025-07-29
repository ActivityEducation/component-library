// src/components/Editor/FlashcardModel/FieldDefinitionPanel.tsx
import React, { useState } from 'react';
import { Button, Icon, Input, Select, Option, theme } from '../../../';

// --- Type Definitions ---
interface EduFieldDefinition {
  id: string;
  name: string;
  type: 'text' | 'image' | 'audio' | 'icon';
}

interface FieldDefinitionPanelProps {
  fields: EduFieldDefinition[];
  setFields: (fields: EduFieldDefinition[] | ((prevFields: EduFieldDefinition[]) => EduFieldDefinition[])) => void;
  readOnly: boolean;
}

/**
 * Panel for managing field definitions (add, rename, delete)
 */
export const FieldDefinitionPanel: React.FC<FieldDefinitionPanelProps> = ({ fields, setFields, readOnly }) => {
  const [newFieldName, setNewFieldName] = useState('');
  const [newFieldType, setNewFieldType] = useState<'text' | 'image' | 'audio' | 'icon'>('text');

  const handleAddField = () => {
    if (newFieldName.trim() && !readOnly) {
      setFields((prev) => [
        ...prev,
        { id: `field_${Date.now()}`, name: newFieldName.trim(), type: newFieldType },
      ]);
      setNewFieldName('');
    }
  };

  const handleDeleteField = (id: string) => {
    if (readOnly) return;
    setFields((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <div>
      <h3 style={theme.typography.h5}>Fields</h3>
      {!readOnly && (
        <>
          <Input
            label="Field Name"
            value={newFieldName}
            onChange={(e) => setNewFieldName(e.target.value)}
            placeholder="e.g., Term, Definition"
          />
          <Select
            value={newFieldType}
            onValueChange={(val) => setNewFieldType(val as any)}
            style={{ marginTop: theme.spacing.sm, width: '100%' }}
          >
            <Option value="text">Text</Option>
            <Option value="image">Image</Option>
            <Option value="audio">Audio</Option>
            <Option value="icon">Icon</Option>
          </Select>
          <Button onClick={handleAddField} variant="primary" size="sm" style={{ marginTop: theme.spacing.md, width: '100%' }}>
            Add Field
          </Button>
        </>
      )}
      <h4 style={theme.typography.h6}>Available Fields</h4>
      {fields.length > 0 ? (
        fields.map((field) => (
          <div
            key={field.id}
            draggable={!readOnly}
            onDragStart={(e) => {
              e.dataTransfer.setData('fieldId', field.id);
            }}
            style={{
              padding: theme.spacing.sm,
              border: `1px solid ${theme.colors.border.default}`,
              borderRadius: theme.borderRadius.sm,
              marginBottom: theme.spacing.xs,
              cursor: readOnly ? 'default' : 'grab',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <span>{field.name} ({field.type})</span>
            {!readOnly && (
              <Button variant="icon" size="sm" onClick={() => handleDeleteField(field.id)} title="Delete Field">
                <Icon name="fa-solid fa-trash" size="sm" />
              </Button>
            )}
          </div>
        ))
      ) : (
        <p style={theme.typography.caption}>No fields defined.</p>
      )}
    </div>
  );
};