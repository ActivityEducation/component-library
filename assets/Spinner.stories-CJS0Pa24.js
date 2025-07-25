import{j as e,t as r,r as u}from"./iframe-CI6SfAYv.js";import{s as c}from"./emotion-styled.browser.esm-BNvuT_w2.js";import{k as g}from"./emotion-react.browser.esm-C8KZ_cib.js";import{B as h}from"./index-35YDmkMi.js";import"./index-17Ykmepx.js";const f=g`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,y=g`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
`,x=c.svg`
  // Base styles for the SVG container
  animation: ${f} 1.4s linear infinite; // Continuous rotation
  display: block; // Ensure it takes up its own space
  
  // Sizing based on prop
  ${s=>{switch(s.size){case"sm":return`
          width: 24px;
          height: 24px;
        `;case"lg":return`
          width: 48px;
          height: 48px;
        `;case"md":default:return`
          width: 36px;
          height: 36px;
        `}}}
`,S=c.circle`
  stroke: ${s=>s.theme.colors.neutral[80]}; // Lighter color for the track
  stroke-width: 4px; // Thickness of the circle line
  fill: none; // No fill
`,k=c.circle`
  stroke: ${s=>s.theme.colors.primary[40]}; // Primary color for the progress
  stroke-width: 4px; // Thickness of the line
  fill: none; // No fill
  stroke-linecap: round; // Rounded ends for the stroke
  animation: ${y} 1.4s ease-in-out infinite; // Indeterminate animation
  transform-origin: center; // Ensure animation rotates from center
`,t=({size:s="md",...a})=>{const m=2*Math.PI*20;return e.jsxs(x,{viewBox:"0 0 50 50",size:s,...a,children:[e.jsx(S,{cx:"25",cy:"25",r:20}),e.jsx(k,{cx:"25",cy:"25",r:20,strokeDasharray:`${m*.75}, ${m*.25}`,strokeDashoffset:0})]})};t.__docgenInfo={description:`A circular Spinner component for the AscendUCore Design System.
It provides a visual indication of loading or processing in an indeterminate manner.
Supports different sizes.`,methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`The size of the spinner.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};const I={title:"Components/Spinner",component:t,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg"],description:"The size of the spinner.",defaultValue:"md"}},decorators:[s=>e.jsx("div",{style:{padding:r.spacing.xl,backgroundColor:r.colors.background.default,display:"flex",justifyContent:"center",alignItems:"center",minHeight:"150px"},children:e.jsx(s,{})})]},n={args:{size:"md"}},o={args:{size:"sm"}},i={args:{size:"lg"}},l={render:()=>{const[s,a]=u.useState(!1),p=()=>{a(!0),setTimeout(()=>{a(!1),alert("Data loaded!")},2e3)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:r.spacing.md,alignItems:"center"},children:[e.jsx(h,{onClick:p,disabled:s,children:s?e.jsxs(e.Fragment,{children:[e.jsx(t,{size:"sm",style:{marginRight:r.spacing.xs}})," Loading..."]}):"Load Data"}),e.jsx("p",{style:{...r.typography.bodySmall,color:r.colors.neutral[50]},children:"Click the button to see the loading spinner."})]})},args:{},parameters:{layout:"padded"}},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:r.spacing.lg,alignItems:"center"},children:[e.jsx(t,{size:"sm"}),e.jsx(t,{size:"md"}),e.jsx(t,{size:"lg"})]}),args:{}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const b=["Default","Small","Large","WithLoadingButton","MultipleSizes"];export{n as Default,i as Large,d as MultipleSizes,o as Small,l as WithLoadingButton,b as __namedExportsOrder,I as default};
