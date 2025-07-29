import{j as e,t}from"./iframe-Ar-X8pQt.js";import{T as l}from"./index-w15-tIMF.js";import{B as n}from"./index-BSHTpJs8.js";import"./emotion-styled-base.browser.esm-B8HPte8b.js";import"./emotion-react.browser.esm-DbLFH1S2.js";import"./index-BwlLiWkr.js";const y={title:"Components/Toolbar",component:l,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"The content to be rendered inside the toolbar."},justifyContent:{control:"select",options:["flex-start","flex-end","center","space-between","space-around","space-evenly"],description:"Defines the horizontal alignment of items within the toolbar.",defaultValue:"flex-start"}},decorators:[c=>e.jsx("div",{style:{width:"700px"},children:e.jsx(c,{})})]},s={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"primary",size:"sm",children:"Action 1"}),e.jsx(n,{variant:"secondary",size:"sm",children:"Action 2"}),e.jsx(n,{variant:"ghost",size:"sm",children:"Action 3"})]})}},r={args:{justifyContent:"flex-end",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"ghost",size:"sm",children:"Cancel"}),e.jsx(n,{variant:"primary",size:"sm",children:"Save"})]})}},a={args:{justifyContent:"center",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"secondary",size:"sm",children:"Previous"}),e.jsx(n,{variant:"primary",size:"sm",children:"Next"})]})}},o={args:{justifyContent:"space-between",children:e.jsxs(e.Fragment,{children:[e.jsx("h3",{style:{...t.typography.h4,margin:0,color:t.colors.text.default},children:"AscendUCore"}),e.jsxs("div",{style:{display:"flex",gap:t.spacing.sm},children:[e.jsx(n,{variant:"ghost",size:"sm",children:"Courses"}),e.jsx(n,{variant:"ghost",size:"sm",children:"Profile"}),e.jsx(n,{variant:"primary",size:"sm",children:"Logout"})]})]})}},i={args:{justifyContent:"space-between",children:e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{...t.typography.bodySmall,color:t.colors.text.default},children:"Showing 1-10 of 100 results"}),e.jsxs("div",{style:{display:"flex",gap:t.spacing.sm},children:[e.jsx(n,{variant:"ghost",size:"sm",children:"<"}),e.jsx(n,{variant:"ghost",size:"sm",children:">"})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Button variant="primary" size="sm">
          Action 1
        </Button>
        <Button variant="secondary" size="sm">
          Action 2
        </Button>
        <Button variant="ghost" size="sm">
          Action 3
        </Button>
      </>
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    justifyContent: "flex-end",
    children: <>
        <Button variant="ghost" size="sm">
          Cancel
        </Button>
        <Button variant="primary" size="sm">
          Save
        </Button>
      </>
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    justifyContent: "center",
    children: <>
        <Button variant="secondary" size="sm">
          Previous
        </Button>
        <Button variant="primary" size="sm">
          Next
        </Button>
      </>
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    justifyContent: "space-between",
    children: <>
        <h3 style={{
        ...theme.typography.h4,
        margin: 0,
        color: theme.colors.text.default
      }}>
          AscendUCore
        </h3>
        <div style={{
        display: "flex",
        gap: theme.spacing.sm
      }}>
          <Button variant="ghost" size="sm">
            Courses
          </Button>
          <Button variant="ghost" size="sm">
            Profile
          </Button>
          <Button variant="primary" size="sm">
            Logout
          </Button>
        </div>
      </>
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    justifyContent: "space-between",
    children: <>
        <span style={{
        ...theme.typography.bodySmall,
        color: theme.colors.text.default
      }}>
          Showing 1-10 of 100 results
        </span>
        <div style={{
        display: "flex",
        gap: theme.spacing.sm
      }}>
          <Button variant="ghost" size="sm">
            {"<"}
          </Button>
          <Button variant="ghost" size="sm">
            {">"}
          </Button>
        </div>
      </>
  }
}`,...i.parameters?.docs?.source}}};const x=["Default","AlignEnd","CenterAligned","SpaceBetween","MixedContent"];export{r as AlignEnd,a as CenterAligned,s as Default,i as MixedContent,o as SpaceBetween,x as __namedExportsOrder,y as default};
