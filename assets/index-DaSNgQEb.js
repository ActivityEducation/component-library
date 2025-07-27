import{j as r}from"./iframe-DZHKm7cV.js";import{s as t}from"./emotion-styled.browser.esm-B9gxxbr3.js";import{c as n}from"./emotion-react.browser.esm-CpG_W-M7.js";const s=t.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sm}; /* Default gap between items */
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.md};
  background-color: ${e=>e.theme.colors.background.surface};
  border-radius: ${e=>e.theme.borderRadius.md};
  min-height: 48px; /* Standard height for toolbars */
  flex-wrap: wrap; /* Allow items to wrap on smaller screens */

  ${e=>e.justifyContent&&n`
      justify-content: ${e.justifyContent};
    `}
`,l=({justifyContent:e="flex-start",children:o,...a})=>r.jsx(s,{justifyContent:e,...a,children:o}),c=t.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.xs}; /* Smaller gap within a group */
  padding: 0 ${e=>e.theme.spacing.sm}; /* Padding inside group */
  border-right: 1px solid ${e=>e.theme.colors.border.default}; /* Separator */
  
  &:last-of-type {
    border-right: none; /* No separator after the last group */
  }
`;l.__docgenInfo={description:"The Toolbar component provides a container for grouping actions or controls.\nIt's designed to hold `Button` components or `ToolbarGroup` components for further organization.",methods:[],displayName:"Toolbar",props:{justifyContent:{required:!1,tsType:{name:"union",raw:"'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'",elements:[{name:"literal",value:"'flex-start'"},{name:"literal",value:"'flex-end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-evenly'"}]},description:"Defines the horizontal alignment of toolbar items.\nUses CSS `justify-content` property.\n@default 'flex-start'",defaultValue:{value:"'flex-start'",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles for the outer container."},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be rendered inside the toolbar, typically `Button` or `ToolbarGroup` components."}}};export{l as T,c as a};
