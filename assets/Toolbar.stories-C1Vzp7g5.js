import{j as e,t as s}from"./iframe-BMJQTajd.js";import{T as l}from"./index-CFNt3KCa.js";import{B as t}from"./index-BegQLpbm.js";import"./emotion-styled.browser.esm-CqS4Vnc4.js";import"./emotion-react.browser.esm-DDmkCpzG.js";import"./index-lRtKzDqF.js";const y={title:"Components/Toolbar",component:l,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"The content to be rendered inside the toolbar."},justifyContent:{control:"select",options:["flex-start","flex-end","center","space-between","space-around","space-evenly"],description:"Defines the horizontal alignment of items within the toolbar.",defaultValue:"flex-start"}},decorators:[c=>e.jsx("div",{style:{padding:s.spacing.xl,backgroundColor:s.colors.neutral[95],width:"100%"},children:e.jsx(c,{})})]},r={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",size:"sm",children:"Action 1"}),e.jsx(t,{variant:"secondary",size:"sm",children:"Action 2"}),e.jsx(t,{variant:"ghost",size:"sm",children:"Action 3"})]})}},n={args:{justifyContent:"flex-end",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"ghost",size:"sm",children:"Cancel"}),e.jsx(t,{variant:"primary",size:"sm",children:"Save"})]})}},a={args:{justifyContent:"center",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"secondary",size:"sm",children:"Previous"}),e.jsx(t,{variant:"primary",size:"sm",children:"Next"})]})}},o={args:{justifyContent:"space-between",children:e.jsxs(e.Fragment,{children:[e.jsx("h3",{style:{...s.typography.h4,margin:0,color:s.colors.text.default},children:"AscendUCore"}),e.jsxs("div",{style:{display:"flex",gap:s.spacing.sm},children:[e.jsx(t,{variant:"ghost",size:"sm",children:"Courses"}),e.jsx(t,{variant:"ghost",size:"sm",children:"Profile"}),e.jsx(t,{variant:"primary",size:"sm",children:"Logout"})]})]})}},i={args:{justifyContent:"space-between",children:e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{...s.typography.bodySmall,color:s.colors.text.default},children:"Showing 1-10 of 100 results"}),e.jsxs("div",{style:{display:"flex",gap:s.spacing.sm},children:[e.jsx(t,{variant:"ghost",size:"sm",children:"<"}),e.jsx(t,{variant:"ghost",size:"sm",children:">"})]})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Button variant="primary" size="sm">Action 1</Button>
        <Button variant="secondary" size="sm">Action 2</Button>
        <Button variant="ghost" size="sm">Action 3</Button>
      </>
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    justifyContent: 'flex-end',
    children: <>
        <Button variant="ghost" size="sm">Cancel</Button>
        <Button variant="primary" size="sm">Save</Button>
      </>
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    justifyContent: 'center',
    children: <>
        <Button variant="secondary" size="sm">Previous</Button>
        <Button variant="primary" size="sm">Next</Button>
      </>
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const x=["Default","AlignEnd","CenterAligned","SpaceBetween","MixedContent"];export{n as AlignEnd,a as CenterAligned,r as Default,i as MixedContent,o as SpaceBetween,x as __namedExportsOrder,y as default};
