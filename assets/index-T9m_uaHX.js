import{e as h,j as t}from"./iframe-XJf-RO9W.js";import{s as r}from"./emotion-styled.browser.esm-Zt9Xnlbb.js";const u=r.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none; // Prevent text selection on label
  font-family: ${e=>e.theme.typography.fontFamily};
  font-size: ${e=>e.theme.typography.body.fontSize};
  color: ${e=>e.theme.colors.text.default};

  &:hover .radio-indicator {
    border-color: ${e=>e.theme.colors.primary[50]};
  }

  &:focus-within .radio-indicator {
    outline: 2px solid ${e=>e.theme.colors.primary[60]};
    outline-offset: 2px;
  }

  // Disabled state for the whole wrapper
  &.disabled {
    cursor: not-allowed;
    opacity: 0.6;
    color: ${e=>e.theme.colors.neutral[50]};
  }
`,m=r.input`
  // Visually hide the radio but keep it accessible
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none; // Ensure it doesn't interfere with pointer events on the custom indicator
`,p=r.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${e=>e.theme.colors.border.default};
  border-radius: ${e=>e.theme.borderRadius.full}; // Circular shape
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${e=>e.theme.spacing.sm};
  transition: ${e=>e.theme.transitions.fast};
  flex-shrink: 0; // Prevent indicator from shrinking

  // Default unchecked state
  background-color: ${e=>e.theme.colors.background.surface};

  // Checked state
  ${e=>e.checked&&`
      background-color: ${e.theme.colors.primary[40]};
      border-color: ${e.theme.colors.primary[40]};
      // Inner circle indicator
      &::after {
        content: '';
        width: 10px;
        height: 10px;
        border-radius: ${e.theme.borderRadius.full};
        background-color: ${e.theme.colors.text.onPrimary}; // White dot
        transition: ${e.theme.transitions.fast};
      }
    `}

  // Disabled state overrides
  ${e=>e.disabled&&`
      background-color: ${e.theme.colors.neutral[90]};
      border-color: ${e.theme.colors.neutral[70]};
      cursor: not-allowed;
      &::after {
        background-color: ${e.theme.colors.neutral[50]}; // Dim inner dot
      }
    `}
`,f=({label:e,checked:i,disabled:o,onChange:s,id:n,name:d,value:l,...c})=>{const a=n||h.useId();return t.jsxs(u,{className:o?"disabled":"",htmlFor:a,children:[t.jsx(m,{type:"radio",id:a,name:d,value:l,checked:i,disabled:o,onChange:s,...c}),t.jsx(p,{checked:i,disabled:o,className:"radio-indicator"}),e&&t.jsx("span",{children:e})]})};f.__docgenInfo={description:"A Radio component for the AscendUCore Design System.\nAllows users to select a single option from a set. Supports checked and disabled states.\nIt should typically be used within a `RadioGroup` for proper functionality and accessibility.",methods:[],displayName:"Radio",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The label associated with the radio button."},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};export{f as R};
