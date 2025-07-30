import{e as a,j as t}from"./iframe-DGiRyBXK.js";import{c as s}from"./emotion-styled-base.browser.esm-DOJJeMjc.js";import{c as r}from"./emotion-react.browser.esm-CRTluIfQ.js";const m=s("label",{target:"e1g3q3582"})("display:inline-flex;align-items:center;cursor:pointer;user-select:none;font-family:",e=>e.theme.typography.fontFamily,";font-size:",e=>e.theme.typography.body.fontSize,";color:",e=>e.theme.colors.text.default,";&:hover .checkbox-indicator{border-color:",e=>e.theme.colors.primary[50],";}&:focus-within .checkbox-indicator{outline:2px solid ",e=>e.theme.colors.primary[60],";outline-offset:2px;}&.disabled{cursor:not-allowed;opacity:0.6;color:",e=>e.theme.colors.neutral[50],";}"),p=s("input",{target:"e1g3q3581"})({name:"2cco40",styles:"position:absolute;opacity:0;width:0;height:0;pointer-events:none"}),b=s("div",{target:"e1g3q3580"})("width:20px;height:20px;border:2px solid ",e=>e.theme.colors.border.default,";border-radius:",e=>e.theme.borderRadius.sm,";display:flex;align-items:center;justify-content:center;margin-right:",e=>e.theme.spacing.sm,";transition:",e=>e.theme.transitions.fast,";flex-shrink:0;background-color:",e=>e.theme.colors.background.surface,";color:",e=>e.theme.colors.text.onPrimary,";",e=>e.checked&&r("background-color:",e.theme.colors.primary[40],";border-color:",e.theme.colors.primary[40],";&::after{content:'✔';font-size:14px;line-height:1;}",""),e=>e.indeterminate&&r("background-color:",e.theme.colors.primary[40],";border-color:",e.theme.colors.primary[40],";&::after{content:'—';font-size:16px;line-height:1;font-weight:bold;}",""),e=>e.disabled&&r("background-color:",e.theme.colors.neutral[90],";border-color:",e.theme.colors.neutral[70],";cursor:not-allowed;&::after{color:",e.theme.colors.neutral[50],";}",""),";"),f=({label:e,indeterminate:o=!1,checked:c,disabled:i,onChange:d,id:h,...u})=>{const l=h||a.useId(),n=a.useRef(null);return a.useEffect(()=>{n.current&&(n.current.indeterminate=o)},[o]),t.jsxs(m,{className:i?"disabled":"",htmlFor:l,children:[t.jsx(p,{type:"checkbox",id:l,checked:c,disabled:i,onChange:d,ref:n,...u}),t.jsx(b,{checked:c,indeterminate:o,disabled:i,className:"checkbox-indicator"}),e&&t.jsx("span",{children:e})]})};f.__docgenInfo={description:`The **Checkbox** component allows users to select one or more options from a set.
It provides a custom visual indicator while maintaining the accessibility and
native behavior of a standard HTML checkbox input. Checkboxes are typically
used in groups or individually to represent binary choices or multiple selections.

\`\`\`typescript
import { Checkbox } from "@activityeducation/component-library";
\`\`\`

## Justification
A standardized \`Checkbox\` component is essential for consistent form inputs
and interactive elements across an application. It ensures a uniform look and
feel, contributing to a cohesive user experience. By providing a custom visual
indicator linked to a hidden native input, it maintains full accessibility for
users relying on assistive technologies. Its support for checked, unchecked,
indeterminate, and disabled states makes it versatile for a wide range of
UI scenarios, from simple toggles to "select all" functionalities.

## Acceptance Criteria
- **GIVEN** a \`Checkbox\` component is rendered, **THEN** it should display a
custom square indicator and an associated \`label\`.
- **GIVEN** \`checked\` prop is true, **THEN** the checkbox indicator should display
a distinct checked state (e.g., a checkmark).
- **GIVEN** \`indeterminate\` prop is true, **THEN** the checkbox indicator should
display a distinct indeterminate state (e.g., a dash), visually indicating a mixed selection.
- **GIVEN** \`disabled\` prop is true, **THEN** the checkbox and its label should
be visually disabled and not interactive.
- **WHEN** the checkbox or its label is clicked (and not disabled), **THEN** its
checked state should toggle, and the \`onChange\` callback should be triggered.
- **WHEN** the checkbox receives focus (e.g., via keyboard navigation), **THEN**
it should display a clear focus indicator.

## Example & Props`,methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The label associated with the checkbox."},indeterminate:{required:!1,tsType:{name:"boolean"},description:'If true, the checkbox will be in an indeterminate state (e.g., for "select all" checkboxes).\nNote: This is a visual state only; the `checked` prop still determines the underlying value.',defaultValue:{value:"false",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};export{f as C};
