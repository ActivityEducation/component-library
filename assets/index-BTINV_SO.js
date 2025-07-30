import{r as a,e as V,j as n,t}from"./iframe-DGiRyBXK.js";import{c as u}from"./emotion-styled-base.browser.esm-DOJJeMjc.js";import{c as p}from"./emotion-react.browser.esm-CRTluIfQ.js";import{I as z}from"./index-Cln6lCsR.js";const q=u("div",{target:"evrvt2e4"})("display:inline-flex;flex-direction:column;position:relative;vertical-align:top;width:100%;font-family:",t.typography.fontFamily,";"),G=u("div",{target:"evrvt2e3"})("position:relative;display:flex;align-items:center;border:1px solid ",e=>e.error?e.theme.colors.error[40]:e.theme.colors.border.default,";border-radius:",e=>e.theme.borderRadius.md,";background-color:",e=>e.theme.colors.background.surface,";transition:border-color 0.2s ease-in-out,box-shadow 0.2s ease-in-out;box-shadow:",e=>e.theme.shadows.sm,";&:hover{border-color:",e=>e.error?e.theme.colors.error[50]:e.theme.colors.primary[50],";}",e=>e.isFocused&&p("border-color:",e.theme.colors.primary[40],";box-shadow:0 0 0 2px ",e.theme.colors.primary[90],";","")," ",e=>e.disabled&&p("background-color:",e.theme.colors.neutral[95],";border-color:",e.theme.colors.neutral[80],";cursor:not-allowed;box-shadow:none;",""),";"),L=u("label",{target:"evrvt2e2"})("position:absolute;left:",e=>{const h=`calc(20px + ${e.theme.spacing.sm} * 2)`,i=e.theme.spacing.lg,s=`calc(${h} + ${e.theme.spacing.xs})`;return e.hasLeadingAdornment?s:i},";top:50%;transform:translateY(-50%);color:",e=>e.error?e.theme.colors.error[40]:e.theme.colors.text.placeholder,";font-size:",t.typography.body.fontSize,";transition:all 0.2s ease-in-out,left 0.2s ease-in-out;pointer-events:none;background-color:",e=>e.theme.colors.background.surface,";border-radius:",e=>e.theme.borderRadius.md,";padding:0 4px;",e=>(e.isFloating||e.isFocused)&&p("top:0;transform:translateY(-50%) scale(0.85);font-size:",t.typography.bodySmall.fontSize,";color:",e.error?e.theme.colors.error[40]:e.isFocused?e.theme.colors.primary[40]:e.theme.colors.neutral[50],";left:",e.theme.spacing.lg,";","")," ",e=>e.disabled&&p("color:",e.theme.colors.neutral[50],";",""),";"),W=u("input",{target:"evrvt2e1"})("flex-grow:1;border:none;background-color:transparent;font-family:",t.typography.fontFamily,";font-size:",t.typography.body.fontSize,";color:",t.colors.text.default,";line-height:1.5;min-height:40px;box-sizing:border-box;padding-top:",e=>e.theme.spacing.md,";padding-bottom:",e=>e.theme.spacing.md,";padding-left:",e=>e.hasLeading?e.theme.spacing.sm:e.theme.spacing.lg,";padding-right:",e=>e.hasTrailing?e.theme.spacing.sm:e.theme.spacing.lg,";&:focus{outline:none;}&::placeholder{color:transparent;}&:disabled{cursor:not-allowed;color:",t.colors.neutral[50],";}"),k=u("div",{target:"evrvt2e0"})("display:flex;align-items:center;padding:0 ",e=>e.theme.spacing.sm,";color:",e=>e.theme.colors.neutral[50],";flex-shrink:0;"),$=({label:e,helperText:h,error:i=!1,errorMessage:s,leading:l,trailing:d,value:o,defaultValue:m,onFocus:y,onBlur:b,onChange:x,disabled:c,id:H,...f})=>{const[g,v]=a.useState(!1),[S,I]=a.useState(o!==void 0?o:m!==void 0?m:""),T=a.useRef(null),w=!!S||T.current&&!!T.current.value,E=g||w,N=!!l,j=!!d;a.useEffect(()=>{o!==void 0&&I(o)},[o]);const F=a.useCallback(r=>{v(!0),y?.(r)},[y]),C=a.useCallback(r=>{v(!1),b?.(r)},[b]),A=a.useCallback(r=>{o===void 0&&I(r.target.value),x?.(r)},[o,x]),R=H||`input-${V.useId()}`;return n.jsxs(q,{...f,children:[n.jsxs(G,{isFocused:g,hasValue:w,error:i,disabled:c||!1,children:[l&&n.jsx(k,{children:typeof l=="string"?n.jsx(z,{name:l,size:"md",color:c?t.colors.neutral[50]:t.colors.neutral[50]}):l}),n.jsx(W,{id:R,onFocus:F,onBlur:C,onChange:A,value:o,defaultValue:m,disabled:c,placeholder:e&&!E?e:f.placeholder,hasLeading:N,hasTrailing:j,...f}),e&&n.jsx(L,{htmlFor:R,isFloating:E,isFocused:g,error:i,disabled:c||!1,hasLeadingAdornment:N,children:e}),d&&n.jsx(k,{children:typeof d=="string"?n.jsx(z,{name:d,size:"md",color:c?t.colors.neutral[50]:t.colors.neutral[50]}):d})]}),(h||i&&s)&&n.jsx("span",{style:{fontSize:t.typography.caption.fontSize,color:i?t.colors.error[40]:t.colors.neutral[50],marginTop:t.spacing.xxs,paddingLeft:t.spacing.sm},children:i&&s?s:h})]})};$.__docgenInfo={description:`The **Input** component provides a text input field with an outlined appearance.
It supports a floating label, helper text, error states, and optional leading
and trailing adornments (icons, text, or other React nodes). This component
is designed to be highly customizable and accessible, providing clear visual
feedback to the user.

\`\`\`typescript
import { Input } from "@activityeducation/component-library";
\`\`\`

## Justification
A standardized \`Input\` component is fundamental for any form-based interaction
in a web application. It ensures consistency in data entry fields across the
entire platform, contributing to a cohesive and intuitive user experience.
By encapsulating complex styling (outlined appearance, floating label animation)
and accessibility features (ARIA attributes, proper label association), it
significantly reduces development effort and promotes reusability. The support
for various states (focused, error, disabled) and adornments makes it versatile
for a wide range of input needs.

## Acceptance Criteria
- **GIVEN** the \`Input\` component is rendered, **THEN** it should display a
text input field with an outlined border.
- **GIVEN** a \`label\` prop is provided, **THEN** it should display a floating
label that animates above the input field when focused or when it contains a value.
- **GIVEN** \`helperText\` is provided, **THEN** it should display descriptive
text below the input field.
- **GIVEN** \`error\` is true and \`errorMessage\` is provided, **THEN** the input
should display a distinct error state (e.g., red border) and the error message.
- **GIVEN** \`leading\` content is provided, **THEN** it should be displayed
on the left side of the input field.
- **GIVEN** \`trailing\` content is provided, **THEN** it should be displayed
on the right side of the input field.
- **GIVEN** \`disabled\` is true, **THEN** the input field should be visually
disabled and not interactive.
- **WHEN** the input field receives focus, **THEN** it should display a clear
focus indicator (e.g., a highlighted border/shadow).
- **WHEN** the input value changes, **THEN** the \`onChange\` callback should be triggered.

## Example & Props`,methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:"The label text for the input field. It will float above the input."},helperText:{required:!1,tsType:{name:"string"},description:"Helper text displayed below the input field."},error:{required:!1,tsType:{name:"boolean"},description:`If true, the input will display an error state.
@default false`,defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"The error message to display when `error` is true."},leading:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Content to be displayed at the leading (left) side of the input,
typically an icon or currency symbol.`},trailing:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Content to be displayed at the trailing (right) side of the input,
typically an icon, clear button, or unit.`},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles for the outer container."}}};export{$ as I};
