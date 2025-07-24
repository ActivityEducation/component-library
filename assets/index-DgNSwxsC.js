import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as n}from"./iframe-C3uWE8cP.js";import{s}from"./index-0UhJA7dS.js";import{I as i}from"./index-CPXLxjDA.js";const l=s.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  font-family: ${e=>e.theme.typography.fontFamily};
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  text-decoration: none; // In case it's used as a link
  white-space: nowrap; // Prevent text wrapping in buttons
  box-sizing: border-box; /* Include padding in element's total width/height */

  // Default border-radius for non-icon buttons
  border-radius: ${e=>e.theme.borderRadius.md};

  // Sizing variants (for non-icon buttons)
  ${e=>{if(e.variant!=="icon")switch(e.size){case"sm":return`
            padding: ${e.theme.spacing.sm} ${e.theme.spacing.md};
            font-size: ${e.theme.typography.bodySmall.fontSize};
          `;case"lg":return`
            padding: ${e.theme.spacing.lg} ${e.theme.spacing.xl};
            font-size: ${e.theme.typography.bodyLarge.fontSize};
          `;case"md":default:return`
            padding: ${e.theme.spacing.md} ${e.theme.spacing.lg};
            font-size: ${e.theme.typography.button.fontSize};
          `}return""}}

  // Color variants and Icon Button specific styles
  ${e=>{let o="",t="";switch(e.variant){case"secondary":o+=`
          background-color: ${e.theme.colors.action.secondary};
          color: ${e.theme.colors.text.onSecondary};
          &:hover {
            background-color: ${e.theme.colors.action.secondaryHover};
            box-shadow: ${e.theme.shadows.sm};
          }
        `,t=e.theme.colors.text.onSecondary;break;case"tertiary":o+=`
          background-color: ${e.theme.colors.action.tertiary};
          color: ${e.theme.colors.text.onPrimary};
          &:hover {
            background-color: ${e.theme.colors.action.tertiaryHover};
            box-shadow: ${e.theme.shadows.sm};
          }
        `,t=e.theme.colors.text.onPrimary;break;case"ghost":o+=`
          background-color: transparent;
          color: ${e.theme.colors.text.default};
          &:hover {
            background-color: ${e.theme.colors.action.ghostHover};
            box-shadow: ${e.theme.shadows.sm};
          }
        `,t=e.theme.colors.text.default;break;case"destructive":o+=`
          background-color: ${e.theme.colors.action.error};
          color: ${e.theme.colors.text.onError};
          &:hover {
            background-color: ${e.theme.colors.action.errorHover};
            box-shadow: ${e.theme.shadows.sm};
          }
        `,t=e.theme.colors.text.onError;break;case"icon":switch(o+=`
          border-radius: ${e.theme.borderRadius.full}; /* Completely rounded */
          flex-shrink: 0; /* Prevent shrinking in flex containers */
          background-color: transparent; /* Default for ghost-like icon buttons */
          color: ${e.theme.colors.neutral[50]}; /* Default icon color */

          &:hover {
            background-color: ${e.theme.colors.neutral[95]}; /* Light hover background */
            box-shadow: ${e.theme.shadows.sm};
          }
        `,t=e.theme.colors.neutral[50],e.size){case"sm":o+=`
              width: 32px;
              height: 32px;
              padding: ${e.theme.spacing.xs};
            `;break;case"lg":o+=`
              width: 48px;
              height: 48px;
              padding: ${e.theme.spacing.md};
            `;break;case"md":default:o+=`
              width: 40px;
              height: 40px;
              padding: ${e.theme.spacing.sm};
            `;break}break;case"primary":default:o+=`
          background-color: ${e.theme.colors.action.primary};
          color: ${e.theme.colors.text.onPrimary};
          &:hover {
            background-color: ${e.theme.colors.action.primaryHover};
            box-shadow: ${e.theme.shadows.sm};
          }
        `,t=e.theme.colors.text.onPrimary;break}return e.disabled&&(o+=`
        opacity: 0.6;
        cursor: not-allowed;
        box-shadow: none;
        background-color: ${e.theme.colors.neutral[80]};
        color: ${e.theme.colors.neutral[50]};
      `,t=e.theme.colors.neutral[50]),o+=`
      & > .ascenducore-button-icon { /* Target the Icon component's wrapper class */
        color: ${t}; /* Apply the calculated icon color */
      }
    `,o}}
`,d=({variant:e="primary",size:o="md",children:t,...c})=>{let a=t;if(e==="icon")if(typeof t=="string")a=r.jsx(i,{name:t,size:o,className:"ascenducore-button-icon"});else if(n.isValidElement(t)&&t.type===i)a=n.cloneElement(t,{className:`${t.props.className||""} ascenducore-button-icon`,size:t.props.size||o});else return console.warn("Button with variant='icon' expects children to be an icon name string or an Icon component."),null;return r.jsx(l,{variant:e,size:o,...c,children:a})};d.__docgenInfo={description:`A versatile Button component for various actions within the AscendUCore Design System.
Supports different visual variants (primary, secondary, ghost, destructive, icon) and sizes (sm, md, lg).`,methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'ghost' | 'destructive' | 'icon'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'destructive'"},{name:"literal",value:"'icon'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};export{d as B};
