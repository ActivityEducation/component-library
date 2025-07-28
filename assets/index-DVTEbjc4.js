import{r,e as E,j as o,t}from"./iframe-DBjxWcSu.js";import{s as h}from"./emotion-styled.browser.esm-BYbfZwar.js";import{c as u}from"./emotion-react.browser.esm-B0Qy288v.js";import{I as R}from"./index-BjSZ1avc.js";const N=h.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  vertical-align: top;
  width: 100%;
  font-family: ${t.typography.fontFamily};
`,P=h.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid ${e=>e.error?e.theme.colors.error[40]:e.theme.colors.border.default};
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: ${e=>e.theme.colors.background.surface};
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-shadow: ${e=>e.theme.shadows.sm};

  &:hover {
    border-color: ${e=>e.error?e.theme.colors.error[50]:e.theme.colors.primary[50]};
  }

  ${e=>e.isFocused&&u`
      border-color: ${e.theme.colors.primary[40]};
      box-shadow: 0 0 0 2px ${e.theme.colors.primary[90]};
    `}

  ${e=>e.disabled&&u`
      background-color: ${e.theme.colors.neutral[95]};
      border-color: ${e.theme.colors.neutral[80]};
      cursor: not-allowed;
      box-shadow: none;
    `}
`,W=h.label`
  position: absolute;
  /* Initial left position: considers leading adornment */
  left: ${e=>{const m=`calc(20px + ${e.theme.spacing.sm} * 2)`,a=e.theme.spacing.lg,i=`calc(${m} + ${e.theme.spacing.xs})`;return e.hasLeadingAdornment?i:a}};
  
  top: 50%;
  transform: translateY(-50%);
  color: ${e=>e.error?e.theme.colors.error[40]:e.theme.colors.text.placeholder};
  font-size: ${t.typography.body.fontSize};
  transition: all 0.2s ease-in-out, left 0.2s ease-in-out; /* Add left to transition */
  pointer-events: none; // Allow clicks to pass through to input
  background-color: ${e=>e.theme.colors.background.surface};
  padding: 0 4px; // Padding for the "notch" effect

  ${e=>(e.isFloating||e.isFocused)&&u`
      top: 0;
      transform: translateY(-50%) scale(0.85); // Smaller and moved up
      font-size: ${t.typography.bodySmall.fontSize}; // Smaller font when floating
      color: ${e.error?e.theme.colors.error[40]:e.isFocused?e.theme.colors.primary[40]:e.theme.colors.neutral[50]};
      /* When floating, always align to the standard left padding (theme.spacing.lg) */
      left: ${e.theme.spacing.lg}; /* This ensures consistent alignment when floating */
    `}

  ${e=>e.disabled&&u`
      color: ${e.theme.colors.neutral[50]};
    `}
`,D=h.input`
  flex-grow: 1; // Take up remaining space
  border: none;
  background-color: transparent;
  font-family: ${t.typography.fontFamily};
  font-size: ${t.typography.body.fontSize};
  color: ${t.colors.text.default};
  line-height: 1.5; // Ensure consistent line height
  min-height: 40px; // Minimum height for input area
  box-sizing: border-box; // Include padding in element's total width

  /* Dynamic padding based on adornments */
  padding-top: ${e=>e.theme.spacing.md};
  padding-bottom: ${e=>e.theme.spacing.md};
  padding-left: ${e=>e.hasLeading?e.theme.spacing.sm:e.theme.spacing.lg};
  padding-right: ${e=>e.hasTrailing?e.theme.spacing.sm:e.theme.spacing.lg};


  &:focus {
    outline: none; // Outline handled by InputWrapper
  }

  &::placeholder {
    color: transparent; // Hide native placeholder when label is used
  }

  &:disabled {
    cursor: not-allowed;
    color: ${t.colors.neutral[50]};
  }
`,j=h.div`
  display: flex;
  align-items: center;
  padding: 0 ${e=>e.theme.spacing.sm}; /* Padding around the icon/content */
  color: ${e=>e.theme.colors.neutral[50]}; // Default color for icons/text
  flex-shrink: 0; // Prevent shrinking
`,O=({label:e,helperText:m,error:a=!1,errorMessage:i,leading:l,trailing:c,value:n,defaultValue:f,onFocus:y,onBlur:b,onChange:x,disabled:d,id:v,...p})=>{const[g,$]=r.useState(!1),[F,w]=r.useState(n!==void 0?n:f!==void 0?f:""),I=r.useRef(null),T=!!F||I.current&&!!I.current.value,S=g||T,k=!!l,A=!!c;r.useEffect(()=>{n!==void 0&&w(n)},[n]);const C=r.useCallback(s=>{$(!0),y?.(s)},[y]),q=r.useCallback(s=>{$(!1),b?.(s)},[b]),L=r.useCallback(s=>{n===void 0&&w(s.target.value),x?.(s)},[n,x]),z=v||`input-${E.useId()}`;return o.jsxs(N,{...p,children:[o.jsxs(P,{isFocused:g,hasValue:T,error:a,disabled:d||!1,children:[l&&o.jsx(j,{children:typeof l=="string"?o.jsx(R,{name:l,size:"md",color:d?t.colors.neutral[50]:t.colors.neutral[50]}):l}),o.jsx(D,{id:z,onFocus:C,onBlur:q,onChange:L,value:n,defaultValue:f,disabled:d,placeholder:e&&!S?e:p.placeholder,hasLeading:k,hasTrailing:A,...p}),e&&o.jsx(W,{htmlFor:z,isFloating:S,isFocused:g,error:a,disabled:d||!1,hasLeadingAdornment:k,children:e}),c&&o.jsx(j,{children:typeof c=="string"?o.jsx(R,{name:c,size:"md",color:d?t.colors.neutral[50]:t.colors.neutral[50]}):c})]}),(m||a&&i)&&o.jsx("span",{style:{fontSize:t.typography.caption.fontSize,color:a?t.colors.error[40]:t.colors.neutral[50],marginTop:t.spacing.xxs,paddingLeft:t.spacing.sm},children:a&&i?i:m})]})};O.__docgenInfo={description:`An Input component with an outlined appearance for the AscendUCore Design System.
Supports floating labels, helper text, error states, and leading/trailing content.`,methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:"The label text for the input field. It will float above the input."},helperText:{required:!1,tsType:{name:"string"},description:"Helper text displayed below the input field."},error:{required:!1,tsType:{name:"boolean"},description:`If true, the input will display an error state.
@default false`,defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"The error message to display when `error` is true."},leading:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Content to be displayed at the leading (left) side of the input,
typically an icon or currency symbol.`},trailing:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Content to be displayed at the trailing (right) side of the input,
typically an icon, clear button, or unit.`},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles for the outer container."}}};export{O as I};
