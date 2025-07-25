import{j as f,t as r}from"./iframe-BodoAwUW.js";import{B as b}from"./index-CyB4szlw.js";import{I as B}from"./index-D3dK0B9m.js";import"./emotion-styled.browser.esm-DhTfgDDH.js";import"./emotion-react.browser.esm-BzCtg2OT.js";const C={title:"Components/Button",component:b,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","ghost","destructive","icon"],description:"The visual style of the button.",defaultValue:"primary"},size:{control:"radio",options:["sm","md","lg"],description:"The size of the button.",defaultValue:"md"},children:{control:"text",description:'The content to be rendered inside the button. For "icon" variant, use an icon name string or an Icon component.',defaultValue:"Button"},onClick:{action:"clicked",description:"Callback function when the button is clicked."},disabled:{control:"boolean",description:"If true, the button will be disabled.",defaultValue:!1}},decorators:[v=>f.jsx("div",{style:{padding:r.spacing.xl,backgroundColor:r.colors.background.default,display:"flex",justifyContent:"center",alignItems:"center",minHeight:"150px"},children:f.jsx(v,{})})]},e={args:{variant:"primary",children:"Primary Button"}},a={args:{variant:"secondary",children:"Secondary Button"}},o={args:{variant:"tertiary",children:"Tertiary Button"}},n={args:{variant:"ghost",children:"Ghost Button"}},s={args:{variant:"destructive",children:"Delete Item"}},t={args:{size:"sm",children:"Small Button"}},c={args:{size:"lg",children:"Large Button"}},i={args:{disabled:!0,children:"Disabled Button"}},l={args:{variant:"primary",size:"md",children:"Click Me",onClick:()=>console.log("Button clicked!"),disabled:!1}},d={args:{variant:"icon",children:"fa-solid fa-plus",size:"md"}},m={args:{variant:"icon",children:"fa-solid fa-star",size:"md",style:{backgroundColor:r.colors.primary[40],color:r.colors.text.onPrimary}}},u={args:{variant:"icon",children:"fa-solid fa-bell",size:"md",style:{backgroundColor:r.colors.secondary[40],color:r.colors.text.onSecondary}}},p={args:{variant:"icon",children:"fa-solid fa-bell",size:"sm"}},g={args:{variant:"icon",children:"fa-solid fa-cog",size:"lg"}},h={args:{variant:"icon",children:f.jsx(B,{name:"fa-solid fa-heart",color:"red",size:"lg"}),size:"lg"}},y={args:{variant:"icon",children:"fa-solid fa-times",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Ghost Button'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    children: 'Delete Item'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: 'Small Button'
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    children: 'Large Button'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled Button'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Click Me',
    onClick: () => console.log('Button clicked!'),
    disabled: false
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'icon',
    children: 'fa-solid fa-plus',
    // Font Awesome icon name
    size: 'md'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'icon',
    children: 'fa-solid fa-star',
    size: 'md',
    style: {
      // Apply background color directly for primary look
      backgroundColor: theme.colors.primary['40'],
      color: theme.colors.text.onPrimary
    }
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'icon',
    children: 'fa-solid fa-bell',
    size: 'md',
    style: {
      // Apply background color directly for secondary look
      backgroundColor: theme.colors.secondary['40'],
      color: theme.colors.text.onSecondary
    }
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'icon',
    children: 'fa-solid fa-bell',
    size: 'sm'
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'icon',
    children: 'fa-solid fa-cog',
    size: 'lg'
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'icon',
    children: <Icon name="fa-solid fa-heart" color="red" size="lg" />,
    // Directly pass Icon component
    size: 'lg' // Size prop on button ensures container size, icon's size prop can override visual icon size
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'icon',
    children: 'fa-solid fa-times',
    disabled: true
  }
}`,...y.parameters?.docs?.source}}};const D=["Primary","Secondary","Tertiary","Ghost","Destructive","Small","Large","Disabled","Interactive","IconButtonDefault","IconButtonPrimary","IconButtonSecondary","IconButtonSmall","IconButtonLarge","IconButtonWithCustomIcon","IconButtonDisabled"];export{s as Destructive,i as Disabled,n as Ghost,d as IconButtonDefault,y as IconButtonDisabled,g as IconButtonLarge,m as IconButtonPrimary,u as IconButtonSecondary,p as IconButtonSmall,h as IconButtonWithCustomIcon,l as Interactive,c as Large,e as Primary,a as Secondary,t as Small,o as Tertiary,D as __namedExportsOrder,C as default};
