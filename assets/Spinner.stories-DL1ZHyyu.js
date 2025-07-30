import{j as e,t as s,r as p}from"./iframe-DGiRyBXK.js";import{S as a}from"./index-BCgh6xOq.js";import{B as m}from"./index-CAB9-Wky.js";import"./emotion-styled-base.browser.esm-DOJJeMjc.js";import"./emotion-react.browser.esm-CRTluIfQ.js";import"./index-Cln6lCsR.js";const S={title:"Components/Spinner",component:a,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg"],description:"The size of the spinner.",defaultValue:"md"}},decorators:[r=>e.jsx("div",{style:{padding:s.spacing.xl,backgroundColor:s.colors.background.default,display:"flex",justifyContent:"center",alignItems:"center",minHeight:"150px"},children:e.jsx(r,{})})]},t={args:{size:"md"}},n={args:{size:"sm"}},o={args:{size:"lg"}},i={render:()=>{const[r,d]=p.useState(!1),c=()=>{d(!0),setTimeout(()=>{d(!1),alert("Data loaded!")},2e3)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:s.spacing.md,alignItems:"center"},children:[e.jsx(m,{onClick:c,disabled:r,children:r?e.jsxs(e.Fragment,{children:[e.jsx(a,{size:"sm",style:{marginRight:s.spacing.xs}})," Loading..."]}):"Load Data"}),e.jsx("p",{style:{...s.typography.bodySmall,color:s.colors.neutral[50]},children:"Click the button to see the loading spinner."})]})},args:{},parameters:{layout:"padded"}},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:s.spacing.lg,alignItems:"center"},children:[e.jsx(a,{size:"sm"}),e.jsx(a,{size:"md"}),e.jsx(a,{size:"lg"})]}),args:{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isLoading, setIsLoading] = useState(false);
    const handleClick = () => {
      setIsLoading(true);
      // Simulate an async operation
      setTimeout(() => {
        setIsLoading(false);
        alert('Data loaded!');
      }, 2000);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing.md,
      alignItems: 'center'
    }}>
        <Button onClick={handleClick} disabled={isLoading}>
          {isLoading ? <>
              <Spinner size="sm" style={{
            marginRight: theme.spacing.xs
          }} /> Loading...
            </> : 'Load Data'}
        </Button>
        <p style={{
        ...theme.typography.bodySmall,
        color: theme.colors.neutral['50']
      }}>
          Click the button to see the loading spinner.
        </p>
      </div>;
  },
  args: {},
  // No args needed for render function
  parameters: {
    layout: 'padded' // Ensure enough padding for the button
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: theme.spacing.lg,
    alignItems: 'center'
  }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>,
  args: {}
}`,...l.parameters?.docs?.source}}};const z=["Default","Small","Large","WithLoadingButton","MultipleSizes"];export{t as Default,o as Large,l as MultipleSizes,n as Small,i as WithLoadingButton,z as __namedExportsOrder,S as default};
