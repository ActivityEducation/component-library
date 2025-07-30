import{e as u,j as t}from"./iframe-DGiRyBXK.js";import{c as i}from"./emotion-styled-base.browser.esm-DOJJeMjc.js";const h=i("label",{target:"e1s1cj312"})("display:inline-flex;align-items:center;cursor:pointer;user-select:none;font-family:",e=>e.theme.typography.fontFamily,";font-size:",e=>e.theme.typography.body.fontSize,";color:",e=>e.theme.colors.text.default,";&:hover .radio-indicator{border-color:",e=>e.theme.colors.primary[50],";}&:focus-within .radio-indicator{outline:2px solid ",e=>e.theme.colors.primary[60],";outline-offset:2px;}&.disabled{cursor:not-allowed;opacity:0.6;color:",e=>e.theme.colors.neutral[50],";}"),m=i("input",{target:"e1s1cj311"})({name:"2cco40",styles:"position:absolute;opacity:0;width:0;height:0;pointer-events:none"}),p=i("div",{target:"e1s1cj310"})("width:20px;height:20px;border:2px solid ",e=>e.theme.colors.border.default,";border-radius:",e=>e.theme.borderRadius.full,";display:flex;align-items:center;justify-content:center;margin-right:",e=>e.theme.spacing.sm,";transition:",e=>e.theme.transitions.fast,";flex-shrink:0;background-color:",e=>e.theme.colors.background.surface,";",e=>e.checked&&`
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
    `,e=>e.disabled&&`
      background-color: ${e.theme.colors.neutral[90]};
      border-color: ${e.theme.colors.neutral[70]};
      cursor: not-allowed;
      &::after {
        background-color: ${e.theme.colors.neutral[50]}; // Dim inner dot
      }
    `,";"),b=({label:e,checked:a,disabled:o,onChange:r,id:s,name:c,value:l,...d})=>{const n=s||u.useId();return t.jsxs(h,{className:o?"disabled":"",htmlFor:n,children:[t.jsx(m,{type:"radio",id:n,name:c,value:l,checked:a,disabled:o,onChange:r,...d}),t.jsx(p,{checked:a,disabled:o,className:"radio-indicator"}),e&&t.jsx("span",{children:e})]})};b.__docgenInfo={description:`The **Radio** component allows users to select a single option from a set of mutually
exclusive choices. It provides a custom visual indicator while maintaining the
accessibility and native behavior of a standard HTML radio input. Radios are typically
used in groups to present a clear selection of options.

\`\`\`typescript
import { Radio } from "@activityeducation/component-library";
\`\`\`

## Justification
A standardized \`Radio\` component ensures consistency in form inputs across the
application, contributing to a cohesive user experience. It improves accessibility
by correctly linking the visual indicator to a hidden native input, allowing assistive
technologies to interpret the control correctly. By encapsulating styling and basic
interaction logic, it simplifies form development and promotes reusability.
Its support for checked and disabled states provides flexibility for various form
and interaction scenarios.

## Acceptance Criteria
- **GIVEN** a \`Radio\` component is rendered, **THEN** it should display a custom
circular indicator and an associated \`label\`.
- **GIVEN** \`checked\` prop is true, **THEN** the radio indicator should display
a distinct checked state (e.g., a filled inner circle).
- **GIVEN** \`disabled\` prop is true, **THEN** the radio button and its label
should be visually disabled and not interactive.
- **WHEN** the radio button or its label is clicked (and not disabled), **THEN**
its checked state should toggle, and the \`onChange\` callback should be triggered.
- **GIVEN** multiple \`Radio\` components share the same \`name\` prop, **THEN**
only one radio button within that group should be selectable at a time.
- **WHEN** the radio button receives focus (e.g., via keyboard navigation), **THEN**
it should display a clear focus indicator.

## Example & Props`,methods:[],displayName:"Radio",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The label associated with the radio button."},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};export{b as R};
