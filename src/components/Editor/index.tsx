// src/components/WYSIWYGEditor.tsx
// This component provides a basic What-You-See-Is-What-You-Get (WYSIWYG) rich text editor.
// It leverages the HTML contentEditable attribute and document.execCommand for basic formatting.
// The toolbar is built using existing AscendUCore Design System components like Button, Toolbar, Input, and Select.

import React, { useRef, useState, useCallback, useEffect } from 'react';
import styled from '@emotion/styled';
import { Toolbar, ToolbarGroup } from '../Toolbar'; // Use our Toolbar component
import { Button } from '../Button';   // Use our Button component
import { Input } from '../Input';     // Use our Input component
import { Select, Option } from '../Select'; // Use our Select and Option components
import { Icon } from '../Icon';       // Use our Icon component
import { Menu, MenuItem } from '../Menu'; // Use Menu and MenuItem for dropdowns
import { theme } from '../../theme';
import type { SerializedStyles } from '@emotion/react';

// Helper function to check if a command is active (e.g., is bold applied)
const isCommandActive = (command: string) => {
  if (typeof window === 'undefined' || !window.getSelection) return false;
  try {
    return document.queryCommandState(command);
  } catch (e) {
    // Some commands might throw errors if not supported or no selection
    return false;
  }
};

// Helper function to get the current block format more consistently
// Now accepts the editor element as an argument
const getCurrentBlockFormat = (editorElement: HTMLElement | null): string => {
  if (typeof window === 'undefined' || !window.getSelection || !editorElement) return 'p';

  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return 'p';

  let currentNode: Node | null = selection.getRangeAt(0).commonAncestorContainer;

  // Traverse up the DOM tree until we find a block-level element or the editor itself
  while (currentNode && currentNode !== editorElement) {
    if (currentNode.nodeType === Node.ELEMENT_NODE) {
      const tagName = (currentNode as HTMLElement).tagName.toLowerCase();
      // Check for common block-level tags that execCommand('formatBlock') works with
      if (['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'div', 'pre'].includes(tagName)) { // Added 'pre'
        return tagName;
      }
    }
    currentNode = currentNode.parentNode;
  }
  // Default to paragraph if no specific block format is found within the editor
  return 'p';
};


// Styled components
const EditorContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border.default};
  border-radius: ${(props) => props.theme.borderRadius.md};
  overflow: hidden; /* Ensures dropdowns/toolbars are contained */
  background-color: ${(props) => props.theme.colors.background.surface};
  font-family: ${(props) => props.theme.typography.fontFamily};
  color: ${(props) => props.theme.colors.text.default};
  display: flex;
  flex-direction: column;
`;

const EditorToolbar = styled(Toolbar)`
  border-bottom: 1px solid ${(props) => props.theme.colors.border.default};
  border-bottom-left-radius: ${(props) => props.theme.borderRadius.none};
  border-bottom-right-radius: ${(props) => props.theme.borderRadius.none};
  padding: ${(props) => props.theme.spacing.sm};
  flex-wrap: wrap; /* Allow toolbar items to wrap */
`;

const ContentEditableArea = styled.div`
  min-height: 200px;
  padding: ${(props) => props.theme.spacing.lg};
  outline: none;
  overflow-y: auto;
  line-height: ${(props) => props.theme.typography.body.lineHeight};
  font-size: ${(props) => props.theme.typography.body.fontSize};
  color: ${(props) => props.theme.colors.text.default};
  background-color: ${(props) => props.theme.colors.background.default};

  /* Default paragraph styling for direct text input */
  p {
    margin-bottom: ${(props) => props.theme.spacing.sm};
    &:last-child {
      margin-bottom: 0;
    }
  }

  /* Apply theme typography for headings */
  h1 {
    ${(props) => props.theme.typography.h1};
    margin-bottom: ${(props) => props.theme.spacing.md};
    margin-top: ${(props) => props.theme.spacing.lg};
  }
  h2 {
    ${(props) => props.theme.typography.h2};
    margin-bottom: ${(props) => props.theme.spacing.md};
    margin-top: ${(props) => props.theme.spacing.lg};
  }
  h3 {
    ${(props) => props.theme.typography.h3};
    margin-bottom: ${(props) => props.theme.spacing.sm};
    margin-top: ${(props) => props.theme.spacing.md};
  }
  h4 {
    ${(props) => props.theme.typography.h4};
    margin-bottom: ${(props) => props.theme.spacing.sm};
    margin-top: ${(props) => props.theme.spacing.md};
  }
  h5 {
    ${(props) => props.theme.typography.h5};
    margin-bottom: ${(props) => props.theme.spacing.xs};
    margin-top: ${(props) => props.theme.spacing.sm};
  }
  h6 {
    ${(props) => props.theme.typography.h6};
    margin-bottom: ${(props) => props.theme.spacing.xs};
    margin-top: ${(props) => props.theme.spacing.sm};
  }

  /* List styling */
  ul, ol {
    padding-left: ${(props) => props.theme.spacing.xl};
    margin-bottom: ${(props) => props.theme.spacing.sm};
  }
  li {
    margin-bottom: ${(props) => props.theme.spacing.xs};
  }

  /* Placeholder styling for empty contenteditable */
  &:empty:not(:focus)::before {
    content: attr(data-placeholder);
    color: ${(props) => props.theme.colors.neutral['60']};
    pointer-events: none;
    display: block; /* Required for :empty pseudo-element */
  }

  /* Text decoration for strikethrough */
  strike {
    text-decoration: line-through;
  }

  /* Styling for preformatted text */
  pre {
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
    font-size: 0.9em;
    background-color: ${(props) => props.theme.colors.neutral['95']};
    border: 1px solid ${(props) => props.theme.colors.neutral['80']};
    border-radius: ${(props) => props.theme.borderRadius.sm};
    padding: ${(props) => props.theme.spacing.sm};
    margin-bottom: ${(props) => props.theme.spacing.sm};
    overflow-x: auto; /* Allow horizontal scrolling for long lines */
    white-space: pre-wrap; /* Ensure text wraps within pre blocks */
    word-break: break-all; /* Break long words */
  }
`;

// Interface for active styles
interface ActiveStyles {
  bold: boolean;
  italic: boolean;
  underline: boolean;
  strikeThrough: boolean;
  link: boolean;
  alignLeft: boolean;
  alignCenter: boolean;
  alignRight: boolean;
  justify: boolean;
  blockquote: boolean;
  bulletList: boolean;
  orderedList: boolean;
  [key: string]: boolean; // Index signature to allow string indexing
}

interface WYSIWYGEditorProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Placeholder text for the editor when it's empty.
   */
  placeholder?: string;
  /**
   * Optional initial HTML content to load into the editor.
   */
  initialContent?: string;
  /**
   * Optional Emotion `css` prop for additional custom styles for the outer container.
   */
  css?: SerializedStyles;
}

/**
 * The **WYSIWYGEditor** component provides a basic What-You-See-Is-What-You-Get (WYSIWYG)
 * rich text editing experience. It allows users to format text, apply headings, create lists,
 * and insert links using a familiar toolbar interface. The editor leverages the browser's
 * native `contentEditable` attribute and `document.execCommand` for basic formatting operations.
 *
 * ```typescript
 * import { WYSIWYGEditor } from "@activityeducation/component-library";
 * ```
 *
 * ## Justification
 * A WYSIWYG editor is a fundamental component for any application requiring rich text input,
 * such as content creation, messaging, or note-taking. It empowers users to express
 * themselves clearly and effectively by providing formatting options without requiring
 * knowledge of HTML or Markdown. By building upon existing UI Kit components (Button, Toolbar, Input, Select),
 * this editor ensures a consistent look and feel with the rest of the application,
 * reduces bundle size by reusing existing primitives, and simplifies maintenance.
 * It offers a user-friendly way to create visually appealing and structured content.
 *
 * ## Acceptance Criteria
 * - **GIVEN** the editor is empty, **THEN** the `placeholder` text should be visible.
 * - **GIVEN** `initialContent` is provided, **THEN** the editor should load with that HTML content.
 * - **WHEN** text is selected and a formatting button (e.g., Bold, Italic, Underline) is clicked,
 * **THEN** the selected text should be formatted accordingly.
 * - **WHEN** the cursor is within formatted text, **THEN** the corresponding toolbar button
 * should show an active state.
 * - **WHEN** a block format (e.g., Heading 1, Paragraph) is selected from the dropdown,
 * **THEN** the current block of text should change its format.
 * - **WHEN** the "Insert Link" button is clicked, **THEN** a URL input field should appear,
 * allowing the user to insert a hyperlink.
 * - **WHEN** a link is active on the selected text, **THEN** a "Remove Link" button should
 * appear in the toolbar.
 * - **WHEN** a list type (bullet or numbered) is selected, **THEN** the text should
 * transform into the chosen list format.
 * - **WHEN** the editor loses focus and its content is empty, **THEN** it should revert
 * to a state where the placeholder is visible.
 *
 * ## Example & Props
 */
export const WYSIWYGEditor: React.FC<WYSIWYGEditorProps> = ({ placeholder = 'Start typing...', initialContent = '', ...props }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [activeStyles, setActiveStyles] = useState<ActiveStyles>({
    bold: false,
    italic: false,
    underline: false,
    strikeThrough: false,
    link: false,
    alignLeft: false,
    alignCenter: false,
    alignRight: false,
    justify: false,
    blockquote: false,
    bulletList: false,
    orderedList: false,
  });
  const [currentBlockFormat, setCurrentBlockFormat] = useState<string>('p');
  const [linkInputVisible, setLinkInputVisible] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const savedSelection = useRef<Range | null>(null); // To save/restore selection


  // Function to save the current selection
  const saveSelection = useCallback(() => {
    if (window.getSelection && (window.getSelection()?.rangeCount ?? 0) > 0) {
      savedSelection.current = window.getSelection()?.getRangeAt(0) ?? null;
    }
  }, []);

  // Function to restore the saved selection
  const restoreSelection = useCallback(() => {
    if (savedSelection.current && editorRef.current) {
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(savedSelection.current);
        // Ensure focus is on the editor after restoring selection
        editorRef.current.focus();
      }
    }
  }, []);

  // Update active styles based on current selection
  const updateActiveStyles = useCallback(() => {
    if (typeof window === 'undefined' || !window.getSelection) return;

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const newActiveStyles: ActiveStyles = {
      bold: isCommandActive('bold'),
      italic: isCommandActive('italic'),
      underline: isCommandActive('underline'),
      strikeThrough: isCommandActive('strikeThrough'),
      link: isCommandActive('createLink'), // createLink indicates a link is active
      alignLeft: isCommandActive('justifyLeft'),
      alignCenter: isCommandActive('justifyCenter'),
      alignRight: isCommandActive('justifyRight'),
      justify: isCommandActive('justifyFull'),
      blockquote: isCommandActive('blockquote'),
      bulletList: isCommandActive('insertUnorderedList'),
      orderedList: isCommandActive('insertOrderedList'),
    };
    setActiveStyles(newActiveStyles);
    setCurrentBlockFormat(getCurrentBlockFormat(editorRef.current));
  }, []);

  // Centralized execCommand function
  const execCommand = useCallback((command: string, value: string | undefined = undefined) => {
    restoreSelection(); // Always restore selection before executing a command
    if (document.queryCommandSupported(command)) {
      if (command === 'formatBlock' && editorRef.current) {
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          let blockElement: HTMLElement | null = null;
          let currentNode: Node | null = range.commonAncestorContainer;

          // Find the block-level element containing the selection
          // Traverse up to find the closest block parent within the editor
          while (currentNode && currentNode !== editorRef.current) {
            if (currentNode.nodeType === Node.ELEMENT_NODE) {
              const tagName = (currentNode as HTMLElement).tagName.toLowerCase();
              if (['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'div', 'pre'].includes(tagName)) { // Added 'pre'
                blockElement = currentNode as HTMLElement;
                break;
              }
            }
            currentNode = currentNode.parentNode;
          }

          if (blockElement) {
            // Select the entire content of the identified block element
            const newRange = document.createRange();
            newRange.selectNodeContents(blockElement);
            selection.removeAllRanges();
            selection.addRange(newRange);
          } else if (selection.isCollapsed && editorRef.current.innerText.trim() === '') {
            // If editor is empty and selection is collapsed, just focus and exec
            editorRef.current.focus();
          }
        }
      }

      document.execCommand(command, false, value);
      // Give a tiny delay for DOM to settle, then update styles
      setTimeout(() => {
        updateActiveStyles();
      }, 0);
    }
  }, [restoreSelection, updateActiveStyles]);

  // Event handlers for contentEditable
  const handleInput = useCallback(() => {
    // This handles content changes and ensures at least one block element
    if (editorRef.current) {
      // If content is completely empty, ensure a paragraph is present for block formatting
      if (editorRef.current.innerHTML.trim() === '' && !linkInputVisible) {
        // Only add a single <br> for an empty line within the root
        // This is only if it's not truly empty and no link input is active
        // This helps maintain a cursor position, but allows :empty::before for placeholder
        if (editorRef.current.innerHTML === '') {
          editorRef.current.innerHTML = '<br>';
          const range = document.createRange();
          const selection = window.getSelection();
          if (editorRef.current.firstChild) {
            range.selectNodeContents(editorRef.current.firstChild as Node);
            range.collapse(true);
            selection?.removeAllRanges();
            selection?.addRange(range);
          }
        }
      } else if (editorRef.current.innerHTML === '<br>' && editorRef.current.innerText.trim() !== '') {
        // If it's just a <br> and text has been added, remove the <br>
        editorRef.current.innerHTML = editorRef.current.innerText;
      } else if (editorRef.current.innerHTML.trim() !== '' && editorRef.current.querySelector('p, h1, h2, h3, h4, h5, h6, ul, ol, pre') === null) {
        // If content exists but no block element, wrap it in a paragraph
        const textContent = editorRef.current.innerText.trim();
        if (textContent !== '') {
          editorRef.current.innerHTML = `<p>${textContent}</p>`;
          // Restore selection to the end of the new paragraph
          const newRange = document.createRange();
          newRange.selectNodeContents(editorRef.current.firstChild as Node);
          newRange.collapse(false); // Collapse to end
          const selection = window.getSelection();
          selection?.removeAllRanges();
          selection?.addRange(newRange);
        }
      }
    }
    updateActiveStyles(); // Update styles based on current content/selection
  }, [updateActiveStyles, linkInputVisible]);


  const handleSelectionChange = useCallback(() => {
    saveSelection(); // Save selection on any selection change (mouseup, keyup)
    updateActiveStyles(); // Update active styles based on new selection
  }, [saveSelection, updateActiveStyles]);

  const handleBlurEditor = useCallback(() => {
    saveSelection(); // Save selection when editor loses focus
    // When blurring, if editor is empty, ensure it's truly empty for placeholder to show
    if (editorRef.current && editorRef.current.innerHTML.trim() === '<br>') {
      editorRef.current.innerHTML = '';
    }
  }, [saveSelection]);

  // Initial setup and cleanup for event listeners
  useEffect(() => {
    if (editorRef.current) {
      if (initialContent) {
        editorRef.current.innerHTML = initialContent;
        // Optionally move cursor to end of initial content
        const range = document.createRange();
        const selection = window.getSelection();
        range.selectNodeContents(editorRef.current);
        range.collapse(false); // Collapse to end
        selection?.removeAllRanges();
        selection?.addRange(range);
      } else {
        editorRef.current.innerHTML = ''; // Ensure it's truly empty for placeholder
      }
      updateActiveStyles();
    }
  }, [initialContent, updateActiveStyles]);


  // Link handling
  const handleLinkClick = useCallback(() => {
    if (activeStyles.link) {
      // If link is active, disable link editing and remove it
      setLinkInputVisible(false);
      setLinkUrl('');
      execCommand('unlink');
    } else {
      // If no link is active, show input for new link
      restoreSelection(); // Ensure selection is restored before showing input
      setLinkInputVisible(true);
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        // Pre-fill linkUrl if there's an existing link on selected text
        const range = selection.getRangeAt(0);
        const parentAnchor = range.startContainer.parentElement?.closest('a');
        if (parentAnchor) {
          setLinkUrl(parentAnchor.href);
        }
      }
    }
  }, [activeStyles.link, execCommand, restoreSelection]);

  const handleConfirmLink = useCallback(() => {
    if (linkUrl.trim()) {
      execCommand('createLink', linkUrl);
      setLinkInputVisible(false);
      setLinkUrl('');
    }
  }, [linkUrl, execCommand]);

  const handleCloseLinkInput = useCallback(() => {
    setLinkInputVisible(false);
    setLinkUrl('');
  }, []);

  const handleRemoveLink = useCallback(() => {
    execCommand('unlink');
    setLinkInputVisible(false); // Hide input after removing link
    setLinkUrl(''); // Clear link URL
  }, [execCommand]);


  return (
    <EditorContainer style={props.style}>
      <EditorToolbar>
        <Select
          value={currentBlockFormat}
          onValueChange={(val) => execCommand('formatBlock', val)}
          placeholder="Format" // Display "Format" if no matching option found
          style={{ minWidth: '150px', marginRight: theme.spacing.md }} /* Increased width for clarity */
        >
          <Option value="p">Paragraph</Option>
          <Option value="h1">Heading 1</Option>
          <Option value="h2">Heading 2</Option>
          <Option value="h3">Heading 3</Option>
          <Option value="h4">Heading 4</Option>
          <Option value="h5">Heading 5</Option>
          <Option value="h6">Heading 6</Option>
          <Option value="pre">Preformatted</Option>
        </Select>

        <ToolbarGroup>
          <Button
            variant="icon"
            size="sm"
            onClick={() => execCommand('bold')}
            active={activeStyles.bold}
            title="Bold"
          >
            <Icon name="fa-solid fa-bold" size="sm" />
          </Button>
          <Button
            variant="icon"
            size="sm"
            onClick={() => execCommand('italic')}
            active={activeStyles.italic}
            title="Italic"
          >
            <Icon name="fa-solid fa-italic" size="sm" />
          </Button>
          <Button
            variant="icon"
            size="sm"
            onClick={() => execCommand('underline')}
            active={activeStyles.underline}
            title="Underline"
          >
            <Icon name="fa-solid fa-underline" size="sm" />
          </Button>
          <Button
            variant="icon"
            size="sm"
            onClick={() => execCommand('strikeThrough')}
            active={activeStyles.strikeThrough}
            title="Strikethrough"
          >
            <Icon name="fa-solid fa-strikethrough" size="sm" />
          </Button>
          <Button
            variant="icon"
            size="sm"
            onClick={() => execCommand('removeFormat')}
            title="Clear Formatting"
          >
            <Icon name="fa-solid fa-eraser" size="sm" />
          </Button>
        </ToolbarGroup>

        <ToolbarGroup>
          <Menu
            trigger={
              <Button
                variant="icon"
                size="sm"
                active={activeStyles.alignLeft || activeStyles.alignCenter || activeStyles.alignRight || activeStyles.justify}
                title="Alignment"
              >
                {/* Dynamically show the icon of the currently active alignment, default to left */}
                {activeStyles.alignLeft && <Icon name="fa-solid fa-align-left" size="sm" />}
                {activeStyles.alignCenter && <Icon name="fa-solid fa-align-center" size="sm" />}
                {activeStyles.alignRight && <Icon name="fa-solid fa-align-right" size="sm" />}
                {activeStyles.justify && <Icon name="fa-solid fa-align-justify" size="sm" />}
                {/* Fallback icon if no alignment is active, or if it's a mixed selection */}
                {!(activeStyles.alignLeft || activeStyles.alignCenter || activeStyles.alignRight || activeStyles.justify) && <Icon name="fa-solid fa-align-left" size="sm" />}
              </Button>
            }
          >
            <MenuItem onClick={() => execCommand('justifyLeft')}>
              <Icon name="fa-solid fa-align-left" size="sm" /> Align Left
            </MenuItem>
            <MenuItem onClick={() => execCommand('justifyCenter')}>
              <Icon name="fa-solid fa-align-center" size="sm" /> Align Center
            </MenuItem>
            <MenuItem onClick={() => execCommand('justifyRight')}>
              <Icon name="fa-solid fa-align-right" size="sm" /> Align Right
            </MenuItem>
            <MenuItem onClick={() => execCommand('justifyFull')}>
              <Icon name="fa-solid fa-align-justify" size="sm" /> Justify
            </MenuItem>
          </Menu>
        </ToolbarGroup>

        <ToolbarGroup>
          <Button
            variant="icon"
            size="sm"
            onClick={() => execCommand('insertUnorderedList')}
            active={activeStyles.bulletList}
            title="Bullet List"
          >
            <Icon name="fa-solid fa-list-ul" size="sm" />
          </Button>
          <Button
            variant="icon"
            size="sm"
            onClick={() => execCommand('insertOrderedList')}
            active={activeStyles.orderedList}
            title="Numbered List"
          >
            <Icon name="fa-solid fa-list-ol" size="sm" />
          </Button>
          <Button
            variant="icon"
            size="sm"
            onClick={() => execCommand('blockquote')}
            active={activeStyles.blockquote}
            title="Blockquote"
          >
            <Icon name="fa-solid fa-quote-right" size="sm" />
          </Button>
        </ToolbarGroup>

        <ToolbarGroup>
          <Button
            variant="icon"
            size="sm"
            onClick={() => execCommand('undo')}
            title="Undo"
          >
            <Icon name="fa-solid fa-undo" size="sm" />
          </Button>
          <Button
            variant="icon"
            size="sm"
            onClick={() => execCommand('redo')}
            title="Redo"
          >
            <Icon name="fa-solid fa-redo" size="sm" />
          </Button>
        </ToolbarGroup>

        <ToolbarGroup>
          <Button
            variant="icon"
            size="sm"
            onClick={handleLinkClick}
            active={activeStyles.link}
            title="Insert Link"
          >
            <Icon name="fa-solid fa-link" size="sm" />
          </Button>
          {activeStyles.link && (
            <Button
              variant="icon"
              size="sm"
              onClick={handleRemoveLink}
              title="Remove Link"
            >
              <Icon name="fa-solid fa-unlink" size="sm" />
            </Button>
          )}
        </ToolbarGroup>
      </EditorToolbar>

      {linkInputVisible && (
        <Toolbar style={{ padding: theme.spacing.sm, borderBottom: `1px solid ${theme.colors.border.default}` }}>
          <Input
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            placeholder="Enter URL"
            style={{ flexGrow: 1 }}
          />
          <Button onClick={handleConfirmLink} size="sm" variant="primary">
            Insert
          </Button>
          <Button onClick={handleCloseLinkInput} size="sm" variant="ghost">
            Cancel
          </Button>
        </Toolbar>
      )}

      <ContentEditableArea
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onBlur={handleBlurEditor} // Use the new blur handler
        onKeyUp={handleSelectionChange}
        onMouseUp={handleSelectionChange}
        data-placeholder={placeholder}
        suppressContentEditableWarning={true} // Suppress React warning for contentEditable
      />
    </EditorContainer>
  );
};
