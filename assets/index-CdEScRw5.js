import{e as i,j as o}from"./iframe-OEcLT8CW.js";import{s as c}from"./emotion-styled.browser.esm-CDovtSm7.js";import{c as n}from"./emotion-react.browser.esm-DGsMn0KN.js";const u=c.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none; // Prevent text selection on label
  font-family: ${e=>e.theme.typography.fontFamily};
  font-size: ${e=>e.theme.typography.body.fontSize};
  color: ${e=>e.theme.colors.text.default};

  &:hover .checkbox-indicator {
    border-color: ${e=>e.theme.colors.primary[50]};
  }

  &:focus-within .checkbox-indicator {
    outline: 2px solid ${e=>e.theme.colors.primary[60]};
    outline-offset: 2px;
  }

  // Disabled state for the whole wrapper
  &.disabled {
    cursor: not-allowed;
    opacity: 0.6;
    color: ${e=>e.theme.colors.neutral[50]};
  }
`,f=c.input`
  // Visually hide the checkbox but keep it accessible
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none; // Ensure it doesn't interfere with pointer events on the custom indicator
`,p=c.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${e=>e.theme.colors.border.default};
  border-radius: ${e=>e.theme.borderRadius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${e=>e.theme.spacing.sm};
  transition: ${e=>e.theme.transitions.fast};
  flex-shrink: 0; // Prevent indicator from shrinking

  // Default unchecked state
  background-color: ${e=>e.theme.colors.background.surface};
  color: ${e=>e.theme.colors.text.onPrimary}; // Color for checkmark/dash

  // Checked state
  ${e=>e.checked&&n`
      background-color: ${e.theme.colors.primary[40]};
      border-color: ${e.theme.colors.primary[40]};
      // Checkmark icon (simple SVG or character for demonstration)
      &::after {
        content: '✔';
        font-size: 14px;
        line-height: 1;
      }
    `}

  // Indeterminate state
  ${e=>e.indeterminate&&n`
      background-color: ${e.theme.colors.primary[40]};
      border-color: ${e.theme.colors.primary[40]};
      // Dash icon
      &::after {
        content: '—'; // Em dash for indeterminate
        font-size: 16px;
        line-height: 1;
        font-weight: bold;
      }
    `}

  // Disabled state overrides
  ${e=>e.disabled&&n`
      background-color: ${e.theme.colors.neutral[90]};
      border-color: ${e.theme.colors.neutral[70]};
      cursor: not-allowed;
      &::after {
        color: ${e.theme.colors.neutral[50]}; // Dim checkmark/dash
      }
    `}
`,b=({label:e,indeterminate:t=!1,checked:a,disabled:r,onChange:d,id:h,...m})=>{const l=h||i.useId(),s=i.useRef(null);return i.useEffect(()=>{s.current&&(s.current.indeterminate=t)},[t]),o.jsxs(u,{className:r?"disabled":"",htmlFor:l,children:[o.jsx(f,{type:"checkbox",id:l,checked:a,disabled:r,onChange:d,ref:s,...m}),o.jsx(p,{checked:a,indeterminate:t,disabled:r,className:"checkbox-indicator"}),e&&o.jsx("span",{children:e})]})};b.__docgenInfo={description:`A Checkbox component for the AscendUCore Design System.
Allows users to select one or more options. Supports checked, unchecked,
indeterminate, and disabled states.`,methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The label associated with the checkbox."},indeterminate:{required:!1,tsType:{name:"boolean"},description:'If true, the checkbox will be in an indeterminate state (e.g., for "select all" checkboxes).\nNote: This is a visual state only; the `checked` prop still determines the underlying value.',defaultValue:{value:"false",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};export{b as C};
