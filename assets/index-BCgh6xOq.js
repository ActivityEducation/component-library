import{j as n}from"./iframe-DGiRyBXK.js";import{c as t}from"./emotion-styled-base.browser.esm-DOJJeMjc.js";import{k as r}from"./emotion-react.browser.esm-CRTluIfQ.js";const o=r`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,a=r`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
`,l=t("svg",{target:"ezq7qlc2"})("animation:",o," 1.4s linear infinite;display:block;",e=>{switch(e.size){case"sm":return`
          width: 24px;
          height: 24px;
        `;case"lg":return`
          width: 48px;
          height: 48px;
        `;case"md":default:return`
          width: 36px;
          height: 36px;
        `}},";"),c=t("circle",{target:"ezq7qlc1"})("stroke:",e=>e.theme.colors.neutral[80],";stroke-width:4px;fill:none;"),d=t("circle",{target:"ezq7qlc0"})("stroke:",e=>e.theme.colors.primary[40],";stroke-width:4px;fill:none;stroke-linecap:round;animation:",a," 1.4s ease-in-out infinite;transform-origin:center;"),p=({size:e="md",...s})=>{const i=2*Math.PI*20;return n.jsxs(l,{viewBox:"0 0 50 50",size:e,...s,children:[n.jsx(c,{cx:"25",cy:"25",r:20}),n.jsx(d,{cx:"25",cy:"25",r:20,strokeDasharray:`${i*.75}, ${i*.25}`,strokeDashoffset:0})]})};p.__docgenInfo={description:`The **Spinner** component provides a visual indication of loading or processing
in an indeterminate circular animation. It is used to inform users that an
operation is in progress, preventing confusion and improving perceived performance.
The component supports different sizes to fit various UI contexts, from small
inline indicators to larger, more prominent loading states.

\`\`\`typescript
import { Spinner } from "@activityeducation/component-library";
\`\`\`

## Justification
In modern web applications, providing immediate feedback to user actions is crucial
for a good user experience. The \`Spinner\` component addresses this by visually
communicating that the system is busy, preventing users from attempting further
actions or assuming the application is unresponsive. Its simple, elegant animation
is designed to be unobtrusive yet clear, maintaining the overall aesthetic of the
AscendUCore Design System. Supporting various sizes makes it versatile for different
loading scenarios (e.g., a small spinner on a loading button, a larger one for
page-level data fetching).

## Acceptance Criteria
- **GIVEN** the \`Spinner\` component is rendered, **THEN** it should display a
continuous circular animation.
- **GIVEN** the \`size\` prop is set to 'sm', 'md', or 'lg', **THEN** the spinner
should render at the corresponding small, medium, or large dimensions.
- **GIVEN** the spinner is used within a \`Button\` component, **THEN** it should
integrate seamlessly, indicating a loading state for the button.
- **GIVEN** the component is rendered, **THEN** it should use the theme's defined
primary and neutral colors for its animation.

## Example & Props`,methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`The size of the spinner.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};export{p as S};
