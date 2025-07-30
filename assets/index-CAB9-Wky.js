import{j as n}from"./iframe-DGiRyBXK.js";import{c as l}from"./emotion-styled-base.browser.esm-DOJJeMjc.js";import{c as t}from"./emotion-react.browser.esm-CRTluIfQ.js";import{I as s}from"./index-Cln6lCsR.js";const d=l("button",{target:"elgpv5l0"})("display:inline-flex;align-items:center;justify-content:center;cursor:pointer;border:none;border-radius:",e=>e.theme.borderRadius.md,";font-family:",e=>e.theme.typography.fontFamily,";transition:background-color 0.2s ease-in-out,color 0.2s ease-in-out,box-shadow 0.2s ease-in-out,border-color 0.2s ease-in-out;text-decoration:none;position:relative;",e=>{switch(e.size){case"sm":return`
          padding: ${e.theme.spacing.sm} ${e.theme.spacing.md};
          font-size: ${e.theme.typography.body.fontSize};
        `;case"lg":return`
          padding: ${e.theme.spacing.lg} ${e.theme.spacing.xl};
          font-size: ${e.theme.typography.h1.fontSize.replace("48px","20px")}; /* Example adjustment for a smaller heading */
        `;case"md":default:return`
          padding: ${e.theme.spacing.md} ${e.theme.spacing.lg};
          font-size: ${e.theme.typography.body.fontSize};
        `}},e=>{switch(e.variant){case"secondary":return`
          background-color: ${e.theme.colors.action.secondary};
          color: ${e.theme.colors.text.onSecondary};
          &:hover {
            background-color: ${e.theme.colors.action.secondaryHover};
            box-shadow: ${e.theme.shadows.sm};
          }
          ${e.active&&t("background-color:",e.theme.colors.secondary[50],";color:",e.theme.colors.secondary[100],";box-shadow:inset 0 0 0 2px ",e.theme.colors.secondary[30],";","")}
        `;case"tertiary":return`
          background-color: ${e.theme.colors.tertiary[40]};
          color: ${e.theme.colors.tertiary[99]};
          &:hover {
            background-color: ${e.theme.colors.tertiary[50]};
            box-shadow: ${e.theme.shadows.sm};
          }
          ${e.active&&t("background-color:",e.theme.colors.tertiary[30],";color:",e.theme.colors.tertiary[100],";box-shadow:inset 0 0 0 2px ",e.theme.colors.tertiary[20],";","")}
        `;case"ghost":return`
          background-color: transparent;
          color: ${e.theme.colors.text.default};
          &:hover {
            background-color: ${e.theme.colors.neutral[95]};
            box-shadow: ${e.theme.shadows.sm};
          }
          ${e.active&&t("background-color:",e.theme.colors.neutral[90],";color:",e.theme.colors.primary[40],";box-shadow:inset 0 0 0 1px ",e.theme.colors.neutral[70],";","")}
        `;case"destructive":return`
          background-color: ${e.theme.colors.action.error};
          color: ${e.theme.colors.text.onError};
          &:hover {
            background-color: ${e.theme.colors.action.errorHover};
            box-shadow: ${e.theme.shadows.sm};
          }
          ${e.active&&t("background-color:",e.theme.colors.error[50],";color:",e.theme.colors.error[100],";box-shadow:inset 0 0 0 2px ",e.theme.colors.error[30],";","")}
        `;case"icon":const o=e.size==="sm"?"32px":e.size==="lg"?"56px":"40px";return`
          width: ${o};
          height: ${o};
          padding: 0; // No padding for icon-only button
          border-radius: ${e.theme.borderRadius.full}; // Fully rounded
          background-color: transparent;
          color: ${e.theme.colors.text.default}; // Default icon color

          &:hover {
            background-color: ${e.theme.colors.neutral[95]};
          }
          ${e.active&&t("background-color:",e.theme.colors.neutral[90],";color:",e.theme.colors.primary[40],";box-shadow:inset 0 0 0 1px ",e.theme.colors.neutral[70],";","")}
        `;case"primary":default:return`
          background-color: ${e.theme.colors.action.primary};
          color: ${e.theme.colors.text.onPrimary};
          &:hover {
            background-color: ${e.theme.colors.action.primaryHover};
            box-shadow: ${e.theme.shadows.sm};
          }
          ${e.active&&t("background-color:",e.theme.colors.primary[50],";color:",e.theme.colors.primary[100],";box-shadow:inset 0 0 0 2px ",e.theme.colors.primary[30],";","")}
        `}}," &:disabled{opacity:0.5;cursor:not-allowed;box-shadow:none;}"),u=({variant:e="primary",size:o="md",active:r=!1,children:a,...i})=>{const c=e==="icon"&&typeof a=="string"?n.jsx(s,{name:a}):a;return n.jsx(d,{role:"button",variant:e,size:o,active:r,...i,children:c})};u.__docgenInfo={description:`The **Button** component is a fundamental UI element for triggering actions or
navigating within an application. It supports various visual styles (variants),
sizes, and states (active, disabled), and can display both text and icons.
The component is designed to be highly customizable while adhering to the
AscendUCore Design System's aesthetic and accessibility guidelines.

\`\`\`typescript
import { Button } from "@activityeducation/component-library";
\`\`\`

## Justification
Buttons are critical for user interaction, providing clear calls to action.
A standardized \`Button\` component ensures consistency in appearance and behavior
across the entire application, which is vital for a predictable and intuitive
user experience. By encapsulating styling, hover effects, and disabled states,
it simplifies development, reduces boilerplate code, and promotes reusability.
The various \`variant\` and \`size\` options offer flexibility to adapt to different
contexts, from primary calls to action to subtle icon-only controls.

## Acceptance Criteria
- **GIVEN** the \`Button\` component is rendered, **THEN** it should display its
\`children\` content within a clickable area.
- **GIVEN** \`variant\` is set to 'primary', 'secondary', 'tertiary', 'ghost',
'destructive', or 'icon', **THEN** the button should apply the corresponding
visual style (background, text color, borders).
- **GIVEN** \`size\` is set to 'sm', 'md', or 'lg', **THEN** the button should
apply the corresponding padding and font size.
- **WHEN** the button is hovered over, **THEN** it should display a distinct
hover effect (e.g., change in background color, shadow).
- **GIVEN** \`disabled\` is true, **THEN** the button should be visually disabled
and not clickable.
- **GIVEN** \`active\` is true, **THEN** the button should display a distinct
active state (e.g., a different background or inner shadow).
- **WHEN** the button is clicked (and not disabled), **THEN** the \`onClick\`
callback should be triggered.
- **GIVEN** \`variant\` is 'icon' and \`children\` is a string (Font Awesome class),
**THEN** it should render the icon correctly within a circular button.

## Example & Props`,methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'ghost' | 'destructive' | 'icon'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'destructive'"},{name:"literal",value:"'icon'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:`If true, the button will display an active state (e.g., for toggles or selected states).
@default false`,defaultValue:{value:"false",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be rendered inside the button.\nIf `variant` is 'icon', this should be an `Icon` component or an inline SVG."}}};export{u as B};
