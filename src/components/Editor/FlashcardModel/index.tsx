// src/components/Editor/FlashcardModel/index.tsx
import React, { useState, useRef, useMemo } from "react";
import styled from "@emotion/styled";
import {
  Button,
  Icon,
  Input,
  Toolbar,
  ToolbarGroup,
  theme,
} from "../../../";
import { FieldDefinitionPanel } from "./FieldDefinitionPanel";

// --- Type Definitions (from EducationPub Vocabulary Specification) ---

interface EduFieldDefinition {
  id: string;
  name: string;
  type: 'text' | 'image' | 'audio' | 'icon';
}

interface EduFieldLayout {
  fieldId: string;
  x: number;
  y: number;
  width: number;
  height: number;
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

// --- Grid and Snap Configuration ---
const GRID_SIZE = 8;
const CANVAS_MARGIN = 8;
const snapToGrid = (value: number) => Math.round(value / GRID_SIZE) * GRID_SIZE;

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
  position: relative;
`;

const TemplateCanvas = styled.div`
  position: relative;
  background-color: ${theme.colors.background.default};
  border: 2px dashed ${theme.colors.border.default};
  border-radius: ${theme.borderRadius.md};
  height: 400px; /* 384px for grid + 16px for margins */
  width: 100%;
  max-width: 656px; /* 640px for grid + 16px for margins */
  margin-inline: auto;
  box-shadow: ${theme.shadows.sm};
  overflow: hidden;

  background-image: linear-gradient(
      to right,
      ${theme.colors.neutral["95"]} 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, ${theme.colors.neutral["95"]} 1px, transparent 1px);
  background-size: ${GRID_SIZE}px ${GRID_SIZE}px;
`;

const DraggableFieldContainer = styled.div`
  position: absolute;
  padding: ${theme.spacing.sm};
  border: 1px solid ${theme.colors.primary['80']};
  background-color: rgba(228, 243, 255, 0.7);
  color: ${theme.colors.primary["10"]};
  font-size: ${theme.typography.bodySmall.fontSize};
  border-radius: ${theme.borderRadius.sm};
  cursor: grab;
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
  transition: border-color 0.2s ease-in-out;

  &:hover {
    border-color: ${theme.colors.primary['50']};
  }
`;

const ResizeHandle = styled.div`
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: ${theme.colors.primary['60']};
    border: 1px solid ${theme.colors.background.default};
    border-radius: 50%;
    z-index: 20;

    &.bottom-right {
        bottom: -5px;
        right: -5px;
        cursor: se-resize;
    }
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
  const [activeTemplate, setActiveTemplate] = useState<"Front" | "Back">("Front");

  const [actionState, setActionState] = useState<{
    type: 'move' | 'resize' | null;
    fieldId: string | null;
    offsetX?: number;
    offsetY?: number;
  }>({ type: null, fieldId: null });

  const [liveLayoutItem, setLiveLayoutItem] = useState<EduFieldLayout | null>(null);

  const canvasRef = useRef<HTMLDivElement>(null);

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
    if (!fieldId || currentTemplate.layout.some((l) => l.fieldId === fieldId)) return;
    const canvasRect = canvasRef.current!.getBoundingClientRect();
    const x = e.clientX - canvasRect.left;
    const y = e.clientY - canvasRect.top;
    const newLayout: EduFieldLayout = {
      fieldId,
      x: snapToGrid(Math.max(CANVAS_MARGIN, x - 75)),
      y: snapToGrid(Math.max(CANVAS_MARGIN, y - 25)),
      width: 160,
      height: 64,
    };
    updateTemplateLayout([...currentTemplate.layout, newLayout]);
  };

  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement>,
    fieldId: string,
    actionType: 'move' | 'resize'
    ) => {
    if (readOnly || e.button !== 0) return; // Only allow left-click
    e.stopPropagation();

    const layoutItem = currentTemplate.layout.find(l => l.fieldId === fieldId);
    if (!layoutItem) return;

    setLiveLayoutItem(layoutItem);
    
    const targetElement = actionType === 'resize' ? e.currentTarget.parentElement! : e.currentTarget;
    setActionState({
        type: actionType,
        fieldId: fieldId,
        offsetX: e.clientX - targetElement.getBoundingClientRect().left,
        offsetY: e.clientY - targetElement.getBoundingClientRect().top,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (readOnly || !actionState.type || !actionState.fieldId || !liveLayoutItem) return;
    e.preventDefault();

    const canvasRect = canvasRef.current!.getBoundingClientRect();

    if (actionState.type === 'move') {
        let newX = e.clientX - canvasRect.left - actionState.offsetX!;
        let newY = e.clientY - canvasRect.top - actionState.offsetY!;
        newX = Math.max(CANVAS_MARGIN, Math.min(newX, canvasRect.width - liveLayoutItem.width - CANVAS_MARGIN));
        newY = Math.max(CANVAS_MARGIN, Math.min(newY, canvasRect.height - liveLayoutItem.height - CANVAS_MARGIN));
        setLiveLayoutItem(prev => prev ? { ...prev, x: newX, y: newY } : null);
    } else if (actionState.type === 'resize') {
        let newWidth = e.clientX - canvasRect.left - liveLayoutItem.x;
        let newHeight = e.clientY - canvasRect.top - liveLayoutItem.y;
        newWidth = Math.max(GRID_SIZE * 2, Math.min(newWidth, canvasRect.width - liveLayoutItem.x - CANVAS_MARGIN));
        newHeight = Math.max(GRID_SIZE * 2, Math.min(newHeight, canvasRect.height - liveLayoutItem.y - CANVAS_MARGIN));
        setLiveLayoutItem(prev => prev ? { ...prev, width: newWidth, height: newHeight } : null);
    }
  };

  const handleMouseUp = () => {
    if (readOnly || !actionState.type || !actionState.fieldId || !liveLayoutItem) return;
    const canvasRect = canvasRef.current!.getBoundingClientRect();

    let snappedX = snapToGrid(liveLayoutItem.x);
    let snappedY = snapToGrid(liveLayoutItem.y);
    let snappedWidth = snapToGrid(liveLayoutItem.width);
    let snappedHeight = snapToGrid(liveLayoutItem.height);

    snappedX = Math.max(CANVAS_MARGIN, snappedX);
    snappedY = Math.max(CANVAS_MARGIN, snappedY);

    if (snappedX + snappedWidth > canvasRect.width - CANVAS_MARGIN) {
        snappedWidth = snapToGrid(canvasRect.width - CANVAS_MARGIN - snappedX);
    }
    if (snappedY + snappedHeight > canvasRect.height - CANVAS_MARGIN) {
        snappedHeight = snapToGrid(canvasRect.height - CANVAS_MARGIN - snappedY);
    }

    const finalItem = {
      ...liveLayoutItem,
      x: snappedX,
      y: snappedY,
      width: Math.max(GRID_SIZE * 2, snappedWidth),
      height: Math.max(GRID_SIZE * 2, snappedHeight),
    };

    const finalLayout = currentTemplate.layout.map(l =>
        l.fieldId === actionState.fieldId ? finalItem : l
    );

    updateTemplateLayout(finalLayout);
    setActionState({ type: null, fieldId: null });
    setLiveLayoutItem(null);
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
    const finalModel = { ...model, "edu:stylingCSS": "/* CSS would be generated here */" };
    onSave(finalModel);
  };

  const renderedLayoutItems = useMemo(() => {
    return currentTemplate.layout.filter(item => item.fieldId !== actionState.fieldId);
  }, [currentTemplate.layout, actionState.fieldId]);


  return (
    <EditorLayout>
      <LeftPanel>
        <h2 style={{ ...theme.typography.h4, marginTop: 0 }}>Flashcard Template</h2>
        {!readOnly ? (
          <div style={{ marginBottom: theme.spacing.md }}>
            <Input label="Model Name" value={model.name} onChange={(e) => setModel({ ...model, name: e.target.value })} placeholder="e.g., Vocabulary Card" />
            <Input label="Summary" value={model.summary || ''} onChange={(e) => setModel({ ...model, summary: e.target.value })} placeholder="A brief description" style={{ marginTop: theme.spacing.sm }} />
          </div>
        ) : (
          <>
            <h3 style={{ ...theme.typography.h6, margin: 0 }}>{model.name}</h3>
            <p>{model.summary}</p>
          </>
        )}
        <FieldDefinitionPanel fields={model["edu:fields"]} setFields={setFields} readOnly={readOnly} />
      </LeftPanel>
      <RightPanel>
        <Toolbar style={{ justifyContent: "space-between", flexShrink: 0, marginBottom: theme.spacing.sm, backgroundColor: "white" }}>
          <ToolbarGroup>
            <Button variant="ghost" size="sm" onClick={() => setActiveTemplate(activeTemplate === "Back" ? "Front" : "Back")} style={{ display: 'flex', gap: '0.5rem' }} active={activeTemplate === "Front"}>
              <Icon name="fa-solid fa-rotate" size="sm" />
              <span>{activeTemplate}</span>
            </Button>
          </ToolbarGroup>
          {!readOnly && <Button onClick={handleSaveClick} variant="primary" size="sm">Save</Button>}
        </Toolbar>

        <TemplateCanvas ref={canvasRef} onDrop={handleDrop} onDragOver={(e) => e.preventDefault()} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
          {renderedLayoutItems.map((layoutItem) => {
            const field = model["edu:fields"].find((f) => f.id === layoutItem.fieldId);
            if (!field) return null;
            return (
              <DraggableFieldContainer
                key={layoutItem.fieldId}
                style={{ left: layoutItem.x, top: layoutItem.y, width: layoutItem.width, height: layoutItem.height }}
                onMouseDown={(e) => handleMouseDown(e, layoutItem.fieldId, 'move')}
              >
                {field.name}
                 {!readOnly && (
                    <ResizeHandle className="bottom-right" onMouseDown={(e) => handleMouseDown(e, layoutItem.fieldId, 'resize')} />
                  )}
              </DraggableFieldContainer>
            );
          })}
          {liveLayoutItem && (
             <DraggableFieldContainer
               style={{ left: liveLayoutItem.x, top: liveLayoutItem.y, width: liveLayoutItem.width, height: liveLayoutItem.height }}
               onMouseDown={(e) => handleMouseDown(e, liveLayoutItem.fieldId, 'move')}
             >
               {model["edu:fields"].find(f => f.id === liveLayoutItem.fieldId)?.name}
               {!readOnly && (
                    <ResizeHandle className="bottom-right" onMouseDown={(e) => handleMouseDown(e, liveLayoutItem.fieldId, 'resize')} />
                )}
             </DraggableFieldContainer>
          )}
        </TemplateCanvas>
      </RightPanel>
    </EditorLayout>
  );
};

export default FlashcardModelEditor;