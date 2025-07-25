import{j as a}from"./iframe-BMJQTajd.js";import{s as i}from"./emotion-styled.browser.esm-CqS4Vnc4.js";import{c as o}from"./emotion-react.browser.esm-DDmkCpzG.js";import{I as s}from"./index-lRtKzDqF.js";const d=i.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  border-radius: ${e=>e.theme.borderRadius.md}; /* Default border radius */
  font-family: ${e=>e.theme.typography.fontFamily};
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;
  text-decoration: none; // In case it's used as a link
  position: relative; // For potential pseudo-elements or overlays

  // Sizing variants
  ${e=>{switch(e.size){case"sm":return`
          padding: ${e.theme.spacing.sm} ${e.theme.spacing.md};
          font-size: ${e.theme.typography.body.fontSize};
        `;case"lg":return`
          padding: ${e.theme.spacing.lg} ${e.theme.spacing.xl};
          font-size: ${e.theme.typography.h1.fontSize.replace("48px","20px")}; /* Example adjustment for a smaller heading */
        `;case"md":default:return`
          padding: ${e.theme.spacing.md} ${e.theme.spacing.lg};
          font-size: ${e.theme.typography.body.fontSize};
        `}}}

  // Color variants
  ${e=>{switch(e.variant){case"secondary":return`
          background-color: ${e.theme.colors.action.secondary};
          color: ${e.theme.colors.text.onSecondary};
          &:hover {
            background-color: ${e.theme.colors.action.secondaryHover};
            box-shadow: ${e.theme.shadows.sm};
          }
          ${e.active&&o`
              background-color: ${e.theme.colors.secondary[50]};
              color: ${e.theme.colors.secondary[100]};
              box-shadow: inset 0 0 0 2px ${e.theme.colors.secondary[30]};
            `}
        `;case"tertiary":return`
          background-color: ${e.theme.colors.tertiary[40]};
          color: ${e.theme.colors.tertiary[99]};
          &:hover {
            background-color: ${e.theme.colors.tertiary[50]};
            box-shadow: ${e.theme.shadows.sm};
          }
          ${e.active&&o`
              background-color: ${e.theme.colors.tertiary[30]};
              color: ${e.theme.colors.tertiary[100]};
              box-shadow: inset 0 0 0 2px ${e.theme.colors.tertiary[20]};
            `}
        `;case"ghost":return`
          background-color: transparent;
          color: ${e.theme.colors.text.default};
          &:hover {
            background-color: ${e.theme.colors.neutral[95]};
            box-shadow: ${e.theme.shadows.sm};
          }
          ${e.active&&o`
              background-color: ${e.theme.colors.neutral[90]};
              color: ${e.theme.colors.primary[40]}; /* Active ghost might use primary accent */
              box-shadow: inset 0 0 0 1px ${e.theme.colors.neutral[70]};
            `}
        `;case"destructive":return`
          background-color: ${e.theme.colors.action.error};
          color: ${e.theme.colors.text.onError};
          &:hover {
            background-color: ${e.theme.colors.action.errorHover};
            box-shadow: ${e.theme.shadows.sm};
          }
          ${e.active&&o`
              background-color: ${e.theme.colors.error[50]};
              color: ${e.theme.colors.error[100]};
              box-shadow: inset 0 0 0 2px ${e.theme.colors.error[30]};
            `}
        `;case"icon":const t=e.size==="sm"?"32px":e.size==="lg"?"56px":"40px";return`
          width: ${t};
          height: ${t};
          padding: 0; // No padding for icon-only button
          border-radius: ${e.theme.borderRadius.full}; // Fully rounded
          background-color: transparent;
          color: ${e.theme.colors.text.default}; // Default icon color

          &:hover {
            background-color: ${e.theme.colors.neutral[95]};
          }
          ${e.active&&o`
              background-color: ${e.theme.colors.neutral[90]};
              color: ${e.theme.colors.primary[40]};
              box-shadow: inset 0 0 0 1px ${e.theme.colors.neutral[70]};
            `}
        `;case"primary":default:return`
          background-color: ${e.theme.colors.action.primary};
          color: ${e.theme.colors.text.onPrimary};
          &:hover {
            background-color: ${e.theme.colors.action.primaryHover};
            box-shadow: ${e.theme.shadows.sm};
          }
          ${e.active&&o`
              background-color: ${e.theme.colors.primary[50]};
              color: ${e.theme.colors.primary[100]};
              box-shadow: inset 0 0 0 2px ${e.theme.colors.primary[30]};
            `}
        `}}}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }
`,m=({variant:e="primary",size:t="md",active:n=!1,children:r,...c})=>{const l=e==="icon"&&typeof r=="string"?a.jsx(s,{name:r}):r;return a.jsx(d,{variant:e,size:t,active:n,...c,children:l})};m.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'ghost' | 'destructive' | 'icon'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'destructive'"},{name:"literal",value:"'icon'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:`If true, the button will display an active state (e.g., for toggles or selected states).
@default false`,defaultValue:{value:"false",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be rendered inside the button.\nIf `variant` is 'icon', this should be an `Icon` component or an inline SVG."}}};export{m as B};
