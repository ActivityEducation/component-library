import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { theme, Icon } from '../../';
import { Flipper } from '../Flipper';

// --- Type Definitions ---

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
  name: string;
  layout: EduFieldLayout[];
}

interface FlashcardModel {
    id: string;
    name: string;
    summary?: string;
    'edu:fields': EduFieldDefinition[];
    'edu:cardTemplates': EduCardTemplate[];
}

interface FlashcardData {
    id: string;
    name: string;
    'edu:model': string;
    'edu:fieldsData': Record<string, any>;
}

// --- Component Props ---

interface FlashcardProps {
  model: FlashcardModel;
  data: FlashcardData;
}

// --- Constants for Scaling ---
const DESIGN_WIDTH = 633;
const DESIGN_HEIGHT = 400;
const MIN_FONT_SIZE = 12  ; // Minimum allowable font size
const MAX_FONT_SIZE = 48; // Maximum allowable font size

// --- Styled Components ---

const CardContainer = styled.div`
  width: 100%;
  aspect-ratio: ${DESIGN_WIDTH} / ${DESIGN_HEIGHT};
  position: relative;
  overflow: hidden;
  background-color: ${theme.colors.background.default};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  border: 1px solid ${theme.colors.border.default};
`;

const FieldWrapper = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  overflow: hidden;
`;

const ImageField = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const TextField = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  word-break: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
`;

// --- Helper Hook for Dynamic Font Sizing ---
const useDynamicFontSize = (text: string, containerRef: React.RefObject<HTMLDivElement | null>, scale: number) => {
    const [fontSize, setFontSize] = useState(100);

    useEffect(() => {
        if (containerRef.current && text) {
            const container = containerRef.current;
            const isSingleWord = !text.includes(' ');

            // For single words, we measure without wrapping to prevent premature splitting.
            if (isSingleWord) {
                container.style.whiteSpace = 'nowrap';
            } else {
                container.style.whiteSpace = 'normal';
            }

            let currentFontSize = MAX_FONT_SIZE * scale;
            container.style.fontSize = `${currentFontSize}px`;

            // Main loop to shrink font size until content fits.
            while (
                (container.scrollHeight > container.clientHeight || container.scrollWidth > container.clientWidth) &&
                currentFontSize > MIN_FONT_SIZE
            ) {
                currentFontSize--;
                container.style.fontSize = `${currentFontSize}px`;
            }

            // Restore normal wrapping for single words in case it still overflows at min font size
            // to allow for hyphenation or ellipsis.
            if (isSingleWord) {
                container.style.whiteSpace = 'normal';
            }
            
            setFontSize(currentFontSize);
        }
    }, [text, containerRef, scale]);

    return fontSize;
};


const FlashcardTemplate = React.forwardRef<HTMLDivElement, { template: EduCardTemplate; model: FlashcardModel; data: FlashcardData; scale: number }>(
  ({ template, model, data, scale }, ref) => {
    return (
      <CardContainer ref={ref}>
        {template.layout.map((layout) => {
          const fieldDef = model['edu:fields'].find(f => f.id === layout.fieldId);
          const fieldContent = data['edu:fieldsData'][fieldDef?.name || ''];

          if (!fieldDef || !fieldContent) return null;

          const scaledStyles = {
            left: `${layout.x * scale}px`,
            top: `${layout.y * scale}px`,
            width: `${layout.width * scale}px`,
            height: `${layout.height * scale}px`,
          };

          return (
            <FieldWrapper key={layout.fieldId} style={scaledStyles}>
              {fieldDef.type === 'text' && <DynamicTextField text={fieldContent} scale={scale} />}
              {fieldDef.type === 'image' && <ImageField src={fieldContent} alt={fieldDef.name} />}
              {fieldDef.type === 'icon' && <Icon name={fieldContent} size="lg" />}
            </FieldWrapper>
          );
        })}
      </CardContainer>
    );
  }
);

const DynamicTextField = ({ text, scale }: { text: string, scale: number }) => {
    const textRef = useRef<HTMLDivElement>(null);
    const fontSize = useDynamicFontSize(text, textRef, scale);
    const [isOverflowing, setIsOverflowing] = useState(false);

    useEffect(() => {
        const checkOverflow = () => {
            if (textRef.current) {
                const element = textRef.current;
                const hasOverflow = element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
                setIsOverflowing(hasOverflow);
            }
        };
        // Debounce the check slightly to wait for rendering after font size change
        const timer = setTimeout(checkOverflow, 50);
        return () => clearTimeout(timer);
    }, [fontSize, text, scale, textRef]);

    return (
        <TextField
            ref={textRef}
            style={{ 
                fontSize: `${fontSize}px`,
                textOverflow: 'ellipsis',
                overflow: 'hidden',
            }}
            title={isOverflowing ? text : undefined}
        >
             {text}
        </TextField>
    );
};

/**
 * The **Flashcard** component is designed to render interactive flashcards based on
 * a provided data model (`FlashcardModel`) and specific card data (`FlashcardData`).
 * It leverages the `Flipper` component to enable a 3D flip animation, allowing users
 * to switch between the front and back of the card. The component dynamically scales
 * its content, including text fields, to fit the card's dimensions, ensuring readability
 * across different sizes.
 *
 * This component is ideal for educational applications, language learning, or any
 * scenario requiring a digital flashcard experience.
 *
 * ```typescript
 * import { Flashcard } from "@activityeducation/component-library";
 * ```
 *
 * ## Justification
 * Flashcards are a highly effective tool for active recall and spaced repetition,
 * crucial for memorization and learning. A dedicated `Flashcard` component provides
 * a standardized, interactive, and visually appealing implementation of this learning
 * aid. Its ability to dynamically render content based on a flexible model allows for
 * diverse types of flashcards (e.g., text-based, image-based). The integrated flip
 * animation enhances engagement, while dynamic font sizing ensures content always
 * fits and remains legible, improving the overall learning experience.
 *
 * ## Acceptance Criteria
 * - **GIVEN** a `Flashcard` component is rendered with `model` and `data` props,
 * **THEN** it should display the content defined by the `Front` template of the model.
 * - **WHEN** the `Flashcard` is clicked, **THEN** it should flip to reveal the
 * content defined by the `Back` template of the model.
 * - **WHEN** the component's container is resized, **THEN** the content (including
 * text and images) within the card should dynamically scale to fit the new dimensions
 * while maintaining its aspect ratio.
 * - **GIVEN** a text field's content is too long for its allocated space, **THEN**
 * its font size should dynamically decrease to fit, down to a minimum readable size.
 * If still overflowing, it should show ellipsis and a title attribute for full text.
 * - **GIVEN** the `Flashcard` component, **THEN** it should correctly render different
 * field types (text, image, icon) as defined in the `FlashcardModel` and `FlashcardData`.
 *
 * ## Example & Props
 */
export const Flashcard: React.FC<FlashcardProps> = ({ model, data }) => {
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      const entry = entries[0];
      if (entry) {
        const newScale = entry.contentRect.width / DESIGN_WIDTH;
        setScale(newScale);
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const frontTemplate = model['edu:cardTemplates'].find(t => t.name === 'Front');
  const backTemplate = model['edu:cardTemplates'].find(t => t.name === 'Back');

  if (!frontTemplate || !backTemplate) return null;

  return (
    <div ref={containerRef} style={{ width: '100%'}}>
        <Flipper
            flipOnClick={true}
            front={<FlashcardTemplate template={frontTemplate} model={model} data={data} scale={scale} />}
            back={<FlashcardTemplate template={backTemplate} model={model} data={data} scale={scale} />}
        />
    </div>
  );
};
