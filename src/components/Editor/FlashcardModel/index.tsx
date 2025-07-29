// src/components/Editor/FlashcardModel/index.tsx
import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import {
  Button,
  Icon,
  Input,
  Toolbar,
  ToolbarGroup,
  theme,
} from "../../../";
import { FieldDefinitionPanel } from "./FieldDefinitionPanel"; // Import the refactored component

// --- Type Definitions (from EducationPub Vocabulary Specification) ---

interface EduFieldDefinition {
  id: string;
  name: string;
  type: "text" | "image" | "audio";
}

interface EduFieldLayout {
  fieldId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  fontSize?: string;
  color?: string;
  textAlign?: "left" | "right" | "center" | "justify";
}

interface EduCardTemplate {
  id: string;
  name: string; // "Front" or "Back"
  layout: EduFieldLayout[];
}

interface EduFlashcardModel {
  id: string;
  name: string;
  summary?: string;
  "edu:fields": EduFieldDefinition[];
  "edu:cardTemplates": EduCardTemplate[];
  "edu:stylingCSS"?: string;
}

// --- Component Props ---

interface FlashcardModelEditorProps {
  initialModelData?: EduFlashcardModel;
  onSave: (updatedModel: EduFlashcardModel) => void;
  readOnly?: boolean;
}

// --- Styled Components ---

const EditorLayout = styled.div`
  display: flex;
  background-color: ${theme.colors.background.default};
  border-radius: ${theme.borderRadius.lg};
  border: 1px solid ${theme.colors.border.default};
  overflow: hidden;
  height: 80vh;
  min-height: 600px;
  font-family: ${theme.typography.fontFamily};

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    height: auto;
  }
`;

const LeftPanel = styled.div`
  width: 300px;
  flex-shrink: 0;
  border-right: 1px solid ${theme.colors.border.default};
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.background.toolbar};
  padding: ${theme.spacing.md};
  overflow-y: auto;

  @media (max-width: ${theme.breakpoints.md}) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid ${theme.colors.border.default};
  }
`;

const RightPanel = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.md};
`;

const TemplateCanvas = styled.div`
  position: relative;
  background-color: ${theme.colors.background.default};
  border: 2px dashed ${theme.colors.border.default};
  border-radius: ${theme.borderRadius.md};
  height: 400px;
  width: 100%;
  max-width: 600px;
  margin-inline: auto;
  box-shadow: ${theme.shadows.sm};
  overflow: hidden;
`;

const DraggableFieldContainer = styled.div<{ isDragging?: boolean }>`
  position: absolute;
  padding: ${theme.spacing.sm};
  border: 1px solid ${theme.colors.primary["60"]};
  background-color: rgba(228, 243, 255, 0.7);
  color: ${theme.colors.primary["10"]};
  font-size: ${theme.typography.bodySmall.fontSize};
  border-radius: ${theme.borderRadius.sm};
  cursor: ${(props) => (props.isDragging ? "grabbing" : "grab")};
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 10;
`;

/**
 * The main editor component
 */
export const FlashcardModelEditor: React.FC<FlashcardModelEditorProps> = ({
  initialModelData,
  onSave,
  readOnly = false,
}) => {
  const [model, setModel] = useState<EduFlashcardModel>(
    initialModelData || {
      id: `model_${Date.now()}`,
      name: "",
      summary: "",
      "edu:fields": [],
      "edu:cardTemplates": [
        { id: "front", name: "Front", layout: [] },
        { id: "back", name: "Back", layout: [] },
      ],
    }
  );
  const [activeTemplate, setActiveTemplate] = useState<"Front" | "Back">(
    "Front"
  );

  const canvasRef = useRef<HTMLDivElement>(null);
  const draggedItemRef = useRef<{
    fieldId: string;
    offsetX: number;
    offsetY: number;
  } | null>(null);

  const setFields = (update: React.SetStateAction<EduFieldDefinition[]>) => {
    setModel((prev) => ({
      ...prev,
      "edu:fields":
        typeof update === "function" ? update(prev["edu:fields"]) : update,
    }));
  };

  const currentTemplate = model["edu:cardTemplates"].find(
    (t) => t.name === activeTemplate
  )!;

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (readOnly) return;

    const fieldId = e.dataTransfer.getData("fieldId");
    if (!fieldId) return;

    if (currentTemplate.layout.some((l) => l.fieldId === fieldId)) return;

    const canvasRect = canvasRef.current!.getBoundingClientRect();
    const x = e.clientX - canvasRect.left;
    const y = e.clientY - canvasRect.top;

    const newLayout: EduFieldLayout = {
      fieldId,
      x: Math.max(0, x - 75),
      y: Math.max(0, y - 25),
      width: 150,
      height: 50,
    };

    updateTemplateLayout([...currentTemplate.layout, newLayout]);
  };

  const handleDragStart = (
    e: React.MouseEvent<HTMLDivElement>,
    layoutItem: EduFieldLayout
  ) => {
    if (readOnly) return;
    const target = e.target as HTMLDivElement;
    draggedItemRef.current = {
      fieldId: layoutItem.fieldId,
      offsetX: e.clientX - target.getBoundingClientRect().left,
      offsetY: e.clientY - target.getBoundingClientRect().top,
    };
    target.style.cursor = "grabbing";
  };

  const handleDragOver = (e: React.MouseEvent<HTMLDivElement>) => {
    if (readOnly || !draggedItemRef.current) return;
    e.preventDefault();

    const canvasRect = canvasRef.current!.getBoundingClientRect();
    let newX = e.clientX - canvasRect.left - draggedItemRef.current.offsetX;
    let newY = e.clientY - canvasRect.top - draggedItemRef.current.offsetY;

    const layoutItem = currentTemplate.layout.find(
      (l) => l.fieldId === draggedItemRef.current!.fieldId
    )!;
    newX = Math.max(0, Math.min(newX, canvasRect.width - layoutItem.width));
    newY = Math.max(0, Math.min(newY, canvasRect.height - layoutItem.height));

    const updatedLayout = currentTemplate.layout.map((l) =>
      l.fieldId === draggedItemRef.current!.fieldId
        ? { ...l, x: newX, y: newY }
        : l
    );
    updateTemplateLayout(updatedLayout);
  };

  const handleDragEnd = (e: React.MouseEvent<HTMLDivElement>) => {
    if (readOnly) return;
    draggedItemRef.current = null;
    (e.target as HTMLDivElement).style.cursor = "grab";
  };

  const updateTemplateLayout = (newLayout: EduFieldLayout[]) => {
    setModel((prev) => ({
      ...prev,
      "edu:cardTemplates": prev["edu:cardTemplates"].map((t) =>
        t.name === activeTemplate ? { ...t, layout: newLayout } : t
      ),
    }));
  };

  const handleSaveClick = () => {
    const finalModel = {
      ...model,
      "edu:stylingCSS": "/* CSS would be generated here */",
    };
    onSave(finalModel);
  };

  return (
    <EditorLayout>
      <LeftPanel>
        <h2 style={{ ...theme.typography.h4, marginTop: 0 }}>
          Flashcard Template
        </h2>
        {!readOnly ? (
          <div style={{ marginBottom: theme.spacing.md }}>
            <Input
              label="Model Name"
              value={model.name}
              onChange={(e) => setModel({ ...model, name: e.target.value })}
              placeholder="e.g., Vocabulary Card"
            />
            <Input
              label="Summary"
              value={model.summary}
              onChange={(e) => setModel({ ...model, summary: e.target.value })}
              placeholder="A brief description"
              style={{ marginTop: theme.spacing.sm }}
            />
          </div>
        ) : (
          <>
            <h3 style={{ ...theme.typography.h6, margin: 0 }}>{model.name}</h3>
            <p>{model.summary}</p>
          </>
        )}
        <FieldDefinitionPanel
          fields={model["edu:fields"]}
          setFields={setFields}
          readOnly={readOnly}
        />
      </LeftPanel>
      <RightPanel>
        <Toolbar
          style={{
            justifyContent: "space-between",
            flexShrink: 0,
            marginBottom: theme.spacing.sm,
            backgroundColor: "white",
          }}
        >
          <ToolbarGroup>
            <Button
              variant="ghost"
              size="sm"
              onClick={() =>
                activeTemplate === "Back"
                  ? setActiveTemplate("Front")
                  : setActiveTemplate("Back")
              }
              style={{ display: 'flex', gap: '0.5rem' }}
              active={activeTemplate === "Front"}
            >
              <Icon name="fa-solid fa-rotate" size="sm" />
              <span>{activeTemplate}</span>
            </Button>
          </ToolbarGroup>

          {!readOnly && (
            <Button onClick={handleSaveClick} variant="primary" size="sm">
              Save
            </Button>
          )}
        </Toolbar>

        <TemplateCanvas
          ref={canvasRef}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onMouseMove={handleDragOver}
          onMouseUp={handleDragEnd}
        >
          {currentTemplate.layout.map((layoutItem) => {
            const field = model["edu:fields"].find(
              (f) => f.id === layoutItem.fieldId
            );
            if (!field) return null;
            return (
              <DraggableFieldContainer
                key={layoutItem.fieldId}
                style={{
                  left: layoutItem.x,
                  top: layoutItem.y,
                  width: layoutItem.width,
                  height: layoutItem.height,
                }}
                onMouseDown={(e) => handleDragStart(e, layoutItem)}
                isDragging={
                  draggedItemRef.current?.fieldId === layoutItem.fieldId
                }
              >
                {field.name}
              </DraggableFieldContainer>
            );
          })}
        </TemplateCanvas>
      </RightPanel>
    </EditorLayout>
  );
};

export default FlashcardModelEditor;
