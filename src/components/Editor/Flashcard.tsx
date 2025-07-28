import React, { useState, useRef, useEffect, useCallback } from "react";
import { Toolbar, Icon, Input, Button, Card } from "../../";

// --- Components from the provided component-library folder ---

// --- Type Definitions ---
interface FlashcardContent {
  id: string;
  type: "text" | "image";
  value: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface FlashcardData {
  front: FlashcardContent[];
  back: FlashcardContent[];
}

interface FlashcardContentItemProps {
  content: FlashcardContent;
  onDelete: (id: string) => void;
  onUpdate: (id: string, newValue: string) => void;
  onTransform: (
    id: string,
    newX: number,
    newY: number,
    newWidth: number,
    newHeight: number
  ) => void;
  readOnly: boolean;
  currentSide: "front" | "back";
  setDraggedItemGlobal: (item: FlashcardContent | null) => void;
  setDraggedSideGlobal: (side: "front" | "back" | null) => void;
  setDraggedOverContainerGlobal: (side: "front" | "back" | null) => void;
  handleDropGlobal: (
    e: React.DragEvent,
    targetSide: "front" | "back",
    itemId: string,
    sourceSide: "front" | "back"
  ) => void;
}

// --- FlashcardContentItem Component (renders individual content blocks) ---
const FlashcardContentItem: React.FC<FlashcardContentItemProps> = ({
  content,
  onDelete,
  onUpdate,
  onTransform,
  readOnly,
  currentSide,
  setDraggedItemGlobal,
  setDraggedSideGlobal,
  setDraggedOverContainerGlobal,
  handleDropGlobal,
}) => {
  const [isEditingText, setIsEditingText] = useState(false);
  const [isEditingImage, setIsEditingImage] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const imageUrlInputRef = useRef<HTMLInputElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const [isResizing, setIsResizing] = useState(false);
  const [resizeStartSize, setResizeStartSize] = useState({
    width: 0,
    height: 0,
  });
  const [resizeStartPos, setResizeStartPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isEditingText && contentRef.current) {
      contentRef.current.focus();
    }
    if (isEditingImage && imageUrlInputRef.current) {
      imageUrlInputRef.current.focus();
    }
  }, [isEditingText, isEditingImage]);

  const handleDoubleClickText = useCallback(() => {
    if (!readOnly && content.type === "text") {
      setIsEditingText(true);
    }
  }, [readOnly, content.type]);

  const handleBlurText = useCallback(() => {
    if (contentRef.current && content.type === "text") {
      onUpdate(content.id, contentRef.current.innerHTML);
    }
    setIsEditingText(false);
  }, [content.id, content.type, onUpdate]);

  const handleDoubleClickImage = useCallback(() => {
    if (!readOnly && content.type === "image") {
      setIsEditingImage(true);
    }
  }, [readOnly, content.type]);

  const handleBlurImage = useCallback(() => {
    if (imageUrlInputRef.current && content.type === "image") {
      onUpdate(content.id, imageUrlInputRef.current.value);
    }
    setIsEditingImage(false);
  }, [content.id, content.type, onUpdate]);

  const handleKeyDownImage = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleBlurImage();
      }
    },
    [handleBlurImage]
  );

  // --- Custom Drag Logic ---
  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (readOnly) return;
      if (
        isEditingText ||
        isEditingImage ||
        (e.target as HTMLElement).classList.contains("resize-handle")
      ) {
        return;
      }

      setIsDragging(true);
      setDraggedItemGlobal(content);
      setDraggedSideGlobal(currentSide);

      const itemRect = itemRef.current!.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - itemRect.left,
        y: e.clientY - itemRect.top,
      });
      e.preventDefault();
    },
    [
      readOnly,
      isEditingText,
      isEditingImage,
      content,
      currentSide,
      setDraggedItemGlobal,
      setDraggedSideGlobal,
    ]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isResizing) {
        const deltaX = e.clientX - resizeStartPos.x;
        const deltaY = e.clientY - resizeStartPos.y;

        let newWidth = resizeStartSize.width + deltaX;
        let newHeight = resizeStartSize.height + deltaY;

        newWidth = Math.max(50, newWidth);
        newHeight = Math.max(50, newHeight);

        const parentRect =
          itemRef.current!.parentElement!.getBoundingClientRect();
        newWidth = Math.min(newWidth, parentRect.width - content.x);
        newHeight = Math.min(newHeight, parentRect.height - content.y);

        onTransform(content.id, content.x, content.y, newWidth, newHeight);
      } else if (isDragging) {
        const parentRect =
          itemRef.current!.parentElement!.getBoundingClientRect();
        let newX = e.clientX - parentRect.left - dragOffset.x;
        let newY = e.clientY - parentRect.top - dragOffset.y;

        newX = Math.max(
          0,
          Math.min(newX, parentRect.width - itemRef.current!.offsetWidth)
        );
        newY = Math.max(
          0,
          Math.min(newY, parentRect.height - itemRef.current!.offsetHeight)
        );

        onTransform(content.id, newX, newY, content.width, content.height);
      }
    },
    [
      isResizing,
      isDragging,
      dragOffset,
      resizeStartSize,
      resizeStartPos,
      content,
      onTransform,
    ]
  );

  const handleMouseUp = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        setIsDragging(false);
        setDraggedItemGlobal(null);
        setDraggedSideGlobal(null);
        setDraggedOverContainerGlobal(null);

        const dropTargetElement = (e.target as HTMLElement).closest(
          ".flashcard-side-drop-target"
        );
        if (
          dropTargetElement &&
          (dropTargetElement as HTMLElement).dataset.side &&
          (dropTargetElement as HTMLElement).dataset.side !== currentSide
        ) {
          handleDropGlobal(
            e as unknown as React.DragEvent,
            (dropTargetElement as HTMLElement).dataset.side as "front" | "back",
            content.id,
            currentSide
          );
        }
      } else if (isResizing) {
        setIsResizing(false);
      }
    },
    [
      isDragging,
      isResizing,
      content.id,
      currentSide,
      setDraggedItemGlobal,
      setDraggedSideGlobal,
      setDraggedOverContainerGlobal,
      handleDropGlobal,
    ]
  );

  // --- Resize Handle Logic ---
  const handleResizeMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (readOnly) return;
      setIsResizing(true);
      setResizeStartSize({
        width: itemRef.current!.offsetWidth,
        height: itemRef.current!.offsetHeight,
      });
      setResizeStartPos({
        x: e.clientX,
        y: e.clientY,
      });
      e.stopPropagation();
      e.preventDefault();
    },
    [readOnly]
  );

  useEffect(() => {
    if (isDragging || isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, isResizing, handleMouseMove, handleMouseUp]);

  return (
    <div
      ref={itemRef}
      className={`absolute p-3 bg-background-DEFAULT rounded-md shadow-md border border-border-DEFAULT group transition-all duration-100 ease-out flex flex-col justify-center items-center overflow-hidden
                  ${!readOnly ? "cursor-grab" : ""}
                  ${
                    isDragging
                      ? "z-50 shadow-xl ring-4 ring-primary-40"
                      : "z-10"
                  }
                  `}
      style={{
        left: content.x,
        top: content.y,
        width: content.width,
        height: content.height,
        minWidth: "50px",
        minHeight: "50px",
      }}
      onMouseDown={handleMouseDown}
    >
      {content.type === "text" ? (
        <div
          ref={contentRef}
          contentEditable={isEditingText && !readOnly}
          onDoubleClick={handleDoubleClickText}
          onBlur={handleBlurText}
          dangerouslySetInnerHTML={{
            __html:
              content.value ||
              `<p class="text-text-placeholder">Double-click to edit text</p>`,
          }}
          className={`w-full h-full p-2 text-text-DEFAULT break-words overflow-auto no-scrollbar
            ${
              isEditingText
                ? "border border-border-focus rounded-md ring-2 ring-primary-20"
                : ""
            } ${readOnly ? "cursor-default" : ""}`}
          suppressContentEditableWarning={true}
        />
      ) : isEditingImage ? (
        <Input
          type="text"
          defaultValue={content.value}
          onBlur={handleBlurImage}
          onKeyDown={handleKeyDownImage}
          className="w-full h-full p-2 text-sm" // Apply Input's default styling, add custom here if needed
          placeholder="Enter image URL"
        />
      ) : (
        <img
          src={content.value}
          alt="Flashcard content"
          className="max-w-full max-h-full object-contain rounded-md cursor-pointer"
          onDoubleClick={handleDoubleClickImage}
          onError={(e) => {
            e.currentTarget.src = `https://placehold.co/${
              content.width || 150
            }x${content.height || 100}/eeeeee/aaaaaa?text=Image+Load+Error`;
            e.currentTarget.onerror = null;
          }}
        />
      )}
      {!readOnly && (
        <>
          {/* Delete button */}
          <Button
            onClick={() => onDelete(content.id)}
            aria-label="Delete content"
            title="Delete content"
            variant="icon"
            size="sm"
          >
            <Icon name="trash-2" className="text-text-onError" size="sm" />
          </Button>
          {/* Resize handle */}
          <div
            className="resize-handle absolute bottom-0 right-0 w-4 h-4 bg-neutral-70 rounded-br-md cursor-nwse-resize opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-30 flex items-center justify-center"
            onMouseDown={handleResizeMouseDown}
            title="Resize"
          >
            <Icon name="resize-handle" className="text-text-light" size="sm" />
          </div>
        </>
      )}
    </div>
  );
};

// --- FlashcardEditor Component ---
interface FlashcardEditorProps {
  initialCardData: FlashcardData;
  onSave: (updatedCard: FlashcardData) => void;
  readOnly?: boolean;
}

const FlashcardEditor: React.FC<FlashcardEditorProps> = ({
  initialCardData,
  onSave,
  readOnly = false,
}) => {
  const [card, setCard] = useState<FlashcardData>(initialCardData);
  const [editingSide, setEditingSide] = useState<"front" | "back">("front");

  const [draggedItemGlobal, setDraggedItemGlobal] =
    useState<FlashcardContent | null>(null);
  const [draggedSideGlobal, setDraggedSideGlobal] = useState<
    "front" | "back" | null
  >(null);
  const [draggedOverContainerGlobal, setDraggedOverContainerGlobal] = useState<
    "front" | "back" | null
  >(null);

  useEffect(() => {
    setCard(initialCardData);
  }, [initialCardData]);

  const handleUpdateContent = useCallback(
    (side: "front" | "back", id: string, newValue: string) => {
      setCard((prevCard) => {
        const updatedSide = prevCard[side].map((item) =>
          item.id === id ? { ...item, value: newValue } : item
        );
        return { ...prevCard, [side]: updatedSide };
      });
    },
    []
  );

  const handleTransformContent = useCallback(
    (
      side: "front" | "back",
      id: string,
      newX: number,
      newY: number,
      newWidth: number,
      newHeight: number
    ) => {
      setCard((prevCard) => {
        const updatedSide = prevCard[side].map((item) =>
          item.id === id
            ? { ...item, x: newX, y: newY, width: newWidth, height: newHeight }
            : item
        );
        return { ...prevCard, [side]: updatedSide };
      });
    },
    []
  );

  const handleAddContent = useCallback(
    (side: "front" | "back", type: "text" | "image") => {
      const newContent: FlashcardContent = {
        id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
        type,
        value:
          type === "text"
            ? ""
            : `https://placehold.co/150x100/eeeeee/aaaaaa?text=New+Image`,
        x: 50,
        y: 50,
        width: type === "text" ? 200 : 150,
        height: type === "text" ? 80 : 100,
      };
      setCard((prevCard) => ({
        ...prevCard,
        [side]: [...prevCard[side], newContent],
      }));
    },
    []
  );

  const handleDeleteContent = useCallback(
    (side: "front" | "back", id: string) => {
      setCard((prevCard) => ({
        ...prevCard,
        [side]: prevCard[side].filter((item) => item.id !== id),
      }));
    },
    []
  );

  const handleDropGlobal = useCallback(
    (
      e: React.DragEvent,
      targetSide: "front" | "back",
      itemId: string,
      sourceSide: "front" | "back"
    ) => {
      e.preventDefault();
      setDraggedOverContainerGlobal(null);

      if (!draggedItemGlobal || targetSide === sourceSide) return;

      setCard((prevCard) => {
        let newCard = { ...prevCard };

        const sourceIndex = newCard[sourceSide].findIndex(
          (item) => item.id === itemId
        );
        if (sourceIndex === -1) return prevCard;

        const [itemToMove] = newCard[sourceSide].splice(sourceIndex, 1);

        const containerRect = e.currentTarget.getBoundingClientRect();
        let newX =
          e.clientX -
          containerRect.left -
          (draggedItemGlobal ? draggedItemGlobal.width / 2 : 0);
        let newY =
          e.clientY -
          containerRect.top -
          (draggedItemGlobal ? draggedItemGlobal.height / 2 : 0);

        newX = Math.max(
          0,
          Math.min(newX, containerRect.width - itemToMove.width)
        );
        newY = Math.max(
          0,
          Math.min(newY, containerRect.height - itemToMove.height)
        );

        newCard[targetSide].push({
          ...itemToMove,
          x: newX,
          y: newY,
        });

        return newCard;
      });

      setDraggedItemGlobal(null);
      setDraggedSideGlobal(null);
    },
    [draggedItemGlobal]
  );

  const handleSaveCard = useCallback(() => {
    onSave(card);
    console.log("Flashcard saved:", card);
  }, [card, onSave]);

  const renderSide = (side: "front" | "back") => (
    <Card
      data-side={side}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) =>
        handleDropGlobal(
          e,
          side,
          draggedItemGlobal?.id || "",
          draggedSideGlobal || "front"
        )
      }
      onDragEnter={() => setDraggedOverContainerGlobal(side)}
      onDragLeave={() => setDraggedOverContainerGlobal(null)}
    >
      <div>
        {card[side].length === 0 && !readOnly && (
          <p>Click "Add Text" or "Add Image" to place content.</p>
        )}
        {card[side].map((content) => (
          <FlashcardContentItem
            key={content.id}
            content={content}
            onDelete={(id) => handleDeleteContent(side, id)}
            onUpdate={(id, newValue) => handleUpdateContent(side, id, newValue)}
            onTransform={(id, newX, newY, newWidth, newHeight) =>
              handleTransformContent(side, id, newX, newY, newWidth, newHeight)
            }
            readOnly={readOnly}
            currentSide={side}
            setDraggedItemGlobal={setDraggedItemGlobal}
            setDraggedSideGlobal={setDraggedSideGlobal}
            setDraggedOverContainerGlobal={setDraggedOverContainerGlobal}
            handleDropGlobal={handleDropGlobal}
          />
        ))}
      </div>
    </Card>
  );

  return (
    <div>
      <Card>
        <h2>Interactive Flashcard Creator</h2>
        {/* Save Button */}
        {!readOnly && (
          <Toolbar style={{ marginBottom: '20px' }}>
            <h3>{editingSide}</h3>
            <Button
              onClick={() =>
                setEditingSide(editingSide === "front" ? "back" : "front")
              }
              variant="tertiary"
              size="sm"
            >
              Flip Card
            </Button>
            <Button
              onClick={() => handleAddContent(editingSide, "text")}
              variant="secondary"
              size="sm"
            >
              Add Text
            </Button>
            <Button
              onClick={() => handleAddContent(editingSide, "image")}
              variant="primary"
              size="sm"
            >
              Add Image
            </Button>
            <Button size="sm" onClick={handleSaveCard}>Save Flashcard</Button>
          </Toolbar>
        )}

        {/* Flashcard Display Area */}
        <div>
          {editingSide === "front" ? renderSide("front") : renderSide("back")}
        </div>
      </Card>
    </div>
  );
};

export default FlashcardEditor;
