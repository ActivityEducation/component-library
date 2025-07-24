import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-C3uWE8cP.js";import{s as p,T as u,t as n}from"./index-0UhJA7dS.js";import{B as s}from"./index-DgNSwxsC.js";import"./index-CPXLxjDA.js";const h=p.div`
  // Base styles for the toolbar, drawing from the AscendUCore theme
  display: flex;
  align-items: center; // Vertically align items in the center
  padding: ${t=>t.theme.spacing.md}; // Consistent padding
  gap: ${t=>t.theme.spacing.sm};     // Small gap between items
  background-color: ${t=>t.theme.colors.background.surface}; // Use surface background
  border-radius: ${t=>t.theme.borderRadius.md};             // Rounded corners
  box-shadow: ${t=>t.theme.shadows.sm};                     // Subtle shadow

  // Apply justify-content based on prop
  justify-content: ${t=>t.justifyContent||"flex-start"};

  // Ensure responsiveness: toolbars should take full width
  width: 100%;
  box-sizing: border-box; // Include padding and border in the element's total width and height
  flex-wrap: wrap; // Allow items to wrap to the next line on smaller screens
`,c=({children:t,justifyContent:d="flex-start",...m})=>e.jsx(h,{justifyContent:d,...m,children:t});c.__docgenInfo={description:`A flexible Toolbar component for grouping actions or navigation items in the AscendUCore Design System.
It provides a consistent visual container and handles horizontal arrangement of its children.`,methods:[],displayName:"Toolbar",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`The content to be rendered inside the toolbar. Typically a collection of buttons,
links, or other interactive elements.`},justifyContent:{required:!1,tsType:{name:"union",raw:"'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'",elements:[{name:"literal",value:"'flex-start'"},{name:"literal",value:"'flex-end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-evenly'"}]},description:"Defines the horizontal alignment of items within the toolbar.\nCorresponds to CSS `justify-content` property.\n@default 'flex-start'",defaultValue:{value:"'flex-start'",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};const j={title:"Components/Toolbar",component:c,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"The content to be rendered inside the toolbar."},justifyContent:{control:"select",options:["flex-start","flex-end","center","space-between","space-around","space-evenly"],description:"Defines the horizontal alignment of items within the toolbar.",defaultValue:"flex-start"}},decorators:[t=>e.jsx(u,{theme:n,children:e.jsx("div",{style:{padding:n.spacing.xl,backgroundColor:n.colors.neutral[95],width:"100%"},children:e.jsx(t,{})})})]},r={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"primary",size:"sm",children:"Action 1"}),e.jsx(s,{variant:"secondary",size:"sm",children:"Action 2"}),e.jsx(s,{variant:"ghost",size:"sm",children:"Action 3"})]})}},a={args:{justifyContent:"flex-end",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"ghost",size:"sm",children:"Cancel"}),e.jsx(s,{variant:"primary",size:"sm",children:"Save"})]})}},o={args:{justifyContent:"center",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"secondary",size:"sm",children:"Previous"}),e.jsx(s,{variant:"primary",size:"sm",children:"Next"})]})}},i={args:{justifyContent:"space-between",children:e.jsxs(e.Fragment,{children:[e.jsx("h3",{style:{...n.typography.h4,margin:0,color:n.colors.text.default},children:"AscendUCore"}),e.jsxs("div",{style:{display:"flex",gap:n.spacing.sm},children:[e.jsx(s,{variant:"ghost",size:"sm",children:"Courses"}),e.jsx(s,{variant:"ghost",size:"sm",children:"Profile"}),e.jsx(s,{variant:"primary",size:"sm",children:"Logout"})]})]})}},l={args:{justifyContent:"space-between",children:e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{...n.typography.bodySmall,color:n.colors.text.default},children:"Showing 1-10 of 100 results"}),e.jsxs("div",{style:{display:"flex",gap:n.spacing.sm},children:[e.jsx(s,{variant:"ghost",size:"sm",children:"<"}),e.jsx(s,{variant:"ghost",size:"sm",children:">"})]})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Button variant="primary" size="sm">Action 1</Button>
        <Button variant="secondary" size="sm">Action 2</Button>
        <Button variant="ghost" size="sm">Action 3</Button>
      </>
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    justifyContent: 'flex-end',
    children: <>
        <Button variant="ghost" size="sm">Cancel</Button>
        <Button variant="primary" size="sm">Save</Button>
      </>
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    justifyContent: 'center',
    children: <>
        <Button variant="secondary" size="sm">Previous</Button>
        <Button variant="primary" size="sm">Next</Button>
      </>
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    justifyContent: 'space-between',
    children: <>
        <h3 style={{
        ...theme.typography.h4,
        margin: 0,
        color: theme.colors.text.default
      }}>AscendUCore</h3>
        <div style={{
        display: 'flex',
        gap: theme.spacing.sm
      }}>
          <Button variant="ghost" size="sm">Courses</Button>
          <Button variant="ghost" size="sm">Profile</Button>
          <Button variant="primary" size="sm">Logout</Button>
        </div>
      </>
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    justifyContent: 'space-between',
    children: <>
        <span style={{
        ...theme.typography.bodySmall,
        color: theme.colors.text.default
      }}>
          Showing 1-10 of 100 results
        </span>
        <div style={{
        display: 'flex',
        gap: theme.spacing.sm
      }}>
          <Button variant="ghost" size="sm">{'<'}</Button>
          <Button variant="ghost" size="sm">{'>'}</Button>
        </div>
      </>
  }
}`,...l.parameters?.docs?.source}}};const b=["Default","AlignEnd","CenterAligned","SpaceBetween","MixedContent"];export{a as AlignEnd,o as CenterAligned,r as Default,l as MixedContent,i as SpaceBetween,b as __namedExportsOrder,j as default};
