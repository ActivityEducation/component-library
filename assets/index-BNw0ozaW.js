import{j as a}from"./iframe-qfGYkdpq.js";import{s as o}from"./emotion-styled.browser.esm-Dr63JBGY.js";const n=o.span`
  // Base styles for all badges
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${e=>e.theme.spacing.xxs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.full}; // Pill shape
  font-family: ${e=>e.theme.typography.fontFamily};
  font-size: ${e=>e.theme.typography.caption.fontSize}; // Small text
  font-weight: ${e=>e.theme.typography.button.fontWeight}; // Bold text
  text-transform: uppercase; // Uppercase text for badges
  letter-spacing: 0.5px;
  white-space: nowrap; // Prevent text wrapping
  line-height: 1; // Compact line height
  transition: ${e=>e.theme.transitions.fast};

  // Color variants based on theme colors
  ${e=>{switch(e.variant){case"primary":return`
          background-color: ${e.theme.colors.primary[90]};
          color: ${e.theme.colors.primary[10]};
        `;case"secondary":return`
          background-color: ${e.theme.colors.secondary[90]};
          color: ${e.theme.colors.secondary[10]};
        `;case"tertiary":return`
          background-color: ${e.theme.colors.tertiary[90]};
          color: ${e.theme.colors.tertiary[10]};
        `;case"success":return`
          background-color: ${e.theme.colors.secondary[90]}; // Using secondary for success
          color: ${e.theme.colors.secondary[10]};
        `;case"info":return`
          background-color: ${e.theme.colors.tertiary[90]}; // Using tertiary for info
          color: ${e.theme.colors.tertiary[10]};
        `;case"warning":return`
          background-color: #FFECB3; // Light yellow for warning
          color: #FF8F00; // Darker yellow for warning text
        `;case"error":return`
          background-color: ${e.theme.colors.error[90]};
          color: ${e.theme.colors.error[10]};
        `;case"default":default:return`
          background-color: ${e.theme.colors.neutral[90]};
          color: ${e.theme.colors.neutral[20]};
        `}}}
`,i=({children:e,variant:r="default",...t})=>a.jsx(n,{variant:r,...t,children:e});i.__docgenInfo={description:`A small, non-interactive Badge component for displaying short, important information
or status indicators in the AscendUCore Design System.
Supports various semantic color variants.`,methods:[],displayName:"Badge",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be rendered inside the badge."},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'secondary' | 'tertiary' | 'success' | 'info' | 'warning' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:`The visual style of the badge, indicating its semantic meaning.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};export{i as B};
