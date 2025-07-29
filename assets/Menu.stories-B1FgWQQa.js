import{j as e,t as d,r as k}from"./iframe-CGsrx03R.js";import{M as u,a as t}from"./index-bulm4LNr.js";import{B as n}from"./index-BprbcPJ4.js";import{I as p}from"./index-DkVkd4wc.js";import"./emotion-styled-base.browser.esm-BC397mIf.js";import"./emotion-react.browser.esm-BJCtjihh.js";const y={title:"Components/Menu",component:u,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{trigger:{control:!1},children:{control:!1},open:{control:"boolean",description:"If true, the menu is open (controlled)."},onOpenChange:{action:"openChange",description:"Callback function when the menu open state changes."}},decorators:[r=>e.jsx("div",{style:{padding:d.spacing.xl,backgroundColor:d.colors.background.default,minHeight:"200px",display:"flex",justifyContent:"center",alignItems:"flex-start"},children:e.jsx(r,{})})]},i={args:{trigger:e.jsx(n,{variant:"primary",children:"Open Menu"}),children:e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>alert("Option 1 clicked"),children:"Option 1"}),e.jsx(t,{onClick:()=>alert("Option 2 clicked"),children:"Option 2"}),e.jsx(t,{onClick:()=>alert("Option 3 clicked"),children:"Option 3"})]})}},o={args:{trigger:e.jsx(n,{variant:"secondary",children:"Actions"}),children:e.jsxs(e.Fragment,{children:[e.jsx(t,{leading:"fa-solid fa-plus",onClick:()=>alert("Add clicked"),children:"Add New"}),e.jsx(t,{leading:e.jsx(p,{name:"fa-solid fa-edit"}),onClick:()=>alert("Edit clicked"),children:"Edit Item"}),e.jsx(t,{leading:e.jsx(p,{name:"fa-solid fa-trash",color:d.colors.error[40]}),onClick:()=>alert("Delete clicked"),children:"Delete Item"})]})}},a={args:{trigger:e.jsx(n,{variant:"ghost",children:"File"}),children:e.jsxs(e.Fragment,{children:[e.jsx(t,{trailing:"Ctrl+S",onClick:()=>alert("Save clicked"),children:"Save"}),e.jsx(t,{trailing:"Ctrl+P",onClick:()=>alert("Print clicked"),children:"Print"}),e.jsx(t,{trailing:e.jsx(p,{name:"fa-solid fa-external-link-alt",size:"sm"}),onClick:()=>alert("Open in New Window clicked"),children:"Open in New Window"})]})}},l={args:{trigger:e.jsx(n,{variant:"primary",children:"More Options"}),children:e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>alert("View Details clicked"),children:"View Details"}),e.jsx(t,{disabled:!0,onClick:()=>alert("This should not fire"),children:"Edit (Disabled)"}),e.jsx(t,{onClick:()=>alert("Share clicked"),children:"Share"}),e.jsx(t,{disabled:!0,onClick:()=>alert("This should not fire"),children:"Delete (Disabled)"})]})}},s={render:r=>{const[m,h]=k.useState(!1),C=g=>{h(g),r.onOpenChange?.(g)};return e.jsxs(u,{trigger:e.jsxs(n,{variant:"tertiary",children:["Controlled Menu (",m?"Open":"Closed",")"]}),open:m,onOpenChange:C,children:[e.jsx(t,{onClick:()=>alert("Controlled Option 1"),children:"Controlled Option 1"}),e.jsx(t,{onClick:()=>alert("Controlled Option 2"),children:"Controlled Option 2"})]})},args:{open:!1}},c={render:r=>e.jsx("div",{style:{position:"relative",width:"100%",display:"flex",justifyContent:"flex-end"},children:e.jsxs(u,{trigger:e.jsx(n,{variant:"primary",children:"Open Right Menu"}),children:[e.jsx(t,{onClick:()=>alert("Right Option 1"),children:"Right Option 1"}),e.jsx(t,{onClick:()=>alert("Right Option 2"),children:"Right Option 2"}),e.jsx(t,{onClick:()=>alert("Right Option 3"),children:"Right Option 3"})]})}),args:{},parameters:{layout:"padded"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button variant="primary">Open Menu</Button>,
    children: <>
        <MenuItem onClick={() => alert('Option 1 clicked')}>Option 1</MenuItem>
        <MenuItem onClick={() => alert('Option 2 clicked')}>Option 2</MenuItem>
        <MenuItem onClick={() => alert('Option 3 clicked')}>Option 3</MenuItem>
      </>
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button variant="secondary">Actions</Button>,
    children: <>
        <MenuItem leading="fa-solid fa-plus" onClick={() => alert('Add clicked')}>Add New</MenuItem>
        <MenuItem leading={<Icon name="fa-solid fa-edit" />} onClick={() => alert('Edit clicked')}>Edit Item</MenuItem>
        <MenuItem leading={<Icon name="fa-solid fa-trash" color={theme.colors.error['40']} />} onClick={() => alert('Delete clicked')}>Delete Item</MenuItem>
      </>
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button variant="ghost">File</Button>,
    children: <>
        <MenuItem trailing="Ctrl+S" onClick={() => alert('Save clicked')}>Save</MenuItem>
        <MenuItem trailing="Ctrl+P" onClick={() => alert('Print clicked')}>Print</MenuItem>
        <MenuItem trailing={<Icon name="fa-solid fa-external-link-alt" size="sm" />} onClick={() => alert('Open in New Window clicked')}>Open in New Window</MenuItem>
      </>
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button variant="primary">More Options</Button>,
    children: <>
        <MenuItem onClick={() => alert('View Details clicked')}>View Details</MenuItem>
        <MenuItem disabled onClick={() => alert('This should not fire')}>Edit (Disabled)</MenuItem>
        <MenuItem onClick={() => alert('Share clicked')}>Share</MenuItem>
        <MenuItem disabled onClick={() => alert('This should not fire')}>Delete (Disabled)</MenuItem>
      </>
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenChange = (newOpenState: boolean) => {
      setIsOpen(newOpenState);
      args.onOpenChange?.(newOpenState); // Log to Storybook actions
    };
    return <Menu trigger={<Button variant="tertiary">Controlled Menu ({isOpen ? 'Open' : 'Closed'})</Button>} open={isOpen} onOpenChange={handleOpenChange}>
        <MenuItem onClick={() => alert('Controlled Option 1')}>Controlled Option 1</MenuItem>
        <MenuItem onClick={() => alert('Controlled Option 2')}>Controlled Option 2</MenuItem>
      </Menu>;
  },
  args: {
    open: false
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div style={{
      position: 'relative',
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end'
    }}>
        <Menu trigger={<Button variant="primary">Open Right Menu</Button>}>
          <MenuItem onClick={() => alert('Right Option 1')}>Right Option 1</MenuItem>
          <MenuItem onClick={() => alert('Right Option 2')}>Right Option 2</MenuItem>
          <MenuItem onClick={() => alert('Right Option 3')}>Right Option 3</MenuItem>
        </Menu>
      </div>;
  },
  args: {},
  parameters: {
    layout: 'padded' // Ensure enough padding for positioning
  }
}`,...c.parameters?.docs?.source}}};const v=["Default","WithIcons","WithAccelerators","WithDisabledItems","ControlledMenu","RightAlignedMenu"];export{s as ControlledMenu,i as Default,c as RightAlignedMenu,a as WithAccelerators,l as WithDisabledItems,o as WithIcons,v as __namedExportsOrder,y as default};
