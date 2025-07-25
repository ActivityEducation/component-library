import{j as t}from"./iframe-CUhOUwcP.js";import{s as a}from"./emotion-styled.browser.esm-DVCxs-Ot.js";const l=a.div`
  display: flex;
  flex-direction: column;
  background-color: ${e=>e.theme.colors.background.surface}; // Use surface background
  border: 1px solid ${e=>e.theme.colors.border.default};    // Default border
  border-radius: ${e=>e.theme.borderRadius.md};             // Medium rounded corners
  box-shadow: ${e=>e.theme.shadows.sm};                     // Small shadow for subtle depth
  overflow: hidden; // Ensures rounded corners apply to children
  width: 100%;
  box-sizing: border-box;
`,m=a.div`
  display: flex;
  align-items: center;
  padding: ${e=>e.theme.spacing.md} ${e=>e.theme.spacing.lg};
  border-bottom: 1px solid ${e=>e.theme.colors.neutral[90]}; // Light separator
  gap: ${e=>e.theme.spacing.md}; // Gap for header elements
`,p=a.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1; // Allows title group to take available space
`,h=a.h3`
  font-family: ${e=>e.theme.typography.fontFamily};
  font-size: ${e=>e.theme.typography.h4.fontSize};
  font-weight: ${e=>e.theme.typography.h4.fontWeight};
  color: ${e=>e.theme.colors.text.default};
  margin: 0;
  line-height: 1.2;
`,f=a.h4`
  font-family: ${e=>e.theme.typography.fontFamily};
  font-size: ${e=>e.theme.typography.bodySmall.fontSize};
  color: ${e=>e.theme.colors.neutral[50]};
  margin: 0;
  line-height: 1.2;
`,y=a.div`
  padding: ${e=>e.theme.spacing.lg};
  flex-grow: 1; // Allows content to fill available space
  color: ${e=>e.theme.colors.text.default};
  font-family: ${e=>e.theme.typography.fontFamily};
  font-size: ${e=>e.theme.typography.body.fontSize};
`,g=a.div`
  display: flex;
  justify-content: flex-end; // Align actions to the right by default
  padding: ${e=>e.theme.spacing.md} ${e=>e.theme.spacing.lg};
  gap: ${e=>e.theme.spacing.sm}; // Gap between action buttons
  border-top: 1px solid ${e=>e.theme.colors.neutral[90]}; // Light separator
`,u=a.div`
  padding: ${e=>e.theme.spacing.md} ${e=>e.theme.spacing.lg};
  border-top: 1px solid ${e=>e.theme.colors.neutral[90]}; // Light separator
  font-family: ${e=>e.theme.typography.fontFamily};
  font-size: ${e=>e.theme.typography.caption.fontSize};
  color: ${e=>e.theme.colors.neutral[50]};
`,R=({header:e,title:o,subtitle:n,children:r,actions:i,footer:s,...d})=>{const c=e||o||n;return t.jsxs(l,{...d,children:[c&&t.jsxs(m,{children:[e," ",(o||n)&&t.jsxs(p,{children:[o&&t.jsx(h,{children:o}),n&&t.jsx(f,{children:n})]})]}),r&&t.jsx(y,{children:r}),i&&t.jsx(g,{children:i}),s&&t.jsx(u,{children:s})]})};R.__docgenInfo={description:`A versatile Card component for grouping and displaying content in the AscendUCore Design System.
It provides a consistent visual container with structured slots for header, title, subtitle,
main content, actions, and footer, akin to @angular/material/card.`,methods:[],displayName:"Card",props:{header:{required:!1,tsType:{name:"union",raw:"React.ReactNode | any",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"any"}]},description:"Content for the card's header section."},title:{required:!1,tsType:{name:"union",raw:"React.ReactNode | any",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"any"}]},description:"The main title of the card."},subtitle:{required:!1,tsType:{name:"union",raw:"React.ReactNode | any",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"any"}]},description:"A subtitle for the card, typically smaller than the title."},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | any",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"any"}]},description:"The main content of the card."},actions:{required:!1,tsType:{name:"union",raw:"React.ReactNode | any",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"any"}]},description:"Content for the card's actions section, typically buttons."},footer:{required:!1,tsType:{name:"union",raw:"React.ReactNode | any",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"any"}]},description:"Content for the card's footer section."},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles for the outer container."}}};export{R as C};
