import{j as a,t as s,r as g}from"./iframe-OEcLT8CW.js";import{S as c}from"./index-oiQMzIHI.js";import{B as d}from"./index-ClY7ognZ.js";import"./emotion-styled.browser.esm-CDovtSm7.js";import"./emotion-react.browser.esm-DGsMn0KN.js";import"./index-GB8cKMHG.js";const v={title:"Components/Slider",component:c,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"The current value of the slider (controlled)."},defaultValue:{control:{type:"range",min:0,max:100,step:1},description:"The initial value of the slider (uncontrolled).",defaultValue:50},min:{control:{type:"number",min:0,step:1},description:"The minimum value of the slider.",defaultValue:0},max:{control:{type:"number",min:1,step:1},description:"The maximum value of the slider.",defaultValue:100},step:{control:{type:"number",min:1,step:1},description:"The step increment for the slider.",defaultValue:1},disabled:{control:"boolean",description:"If true, the slider will be disabled.",defaultValue:!1},onValueChange:{action:"valueChange",description:"Callback function when the slider value changes."}},decorators:[e=>a.jsx("div",{style:{padding:s.spacing.xl,backgroundColor:s.colors.background.default,width:"100%",maxWidth:"600px"},children:a.jsx(e,{})})]},l={args:{defaultValue:50}},n={args:{defaultValue:500,min:100,max:1e3}},o={args:{defaultValue:20,step:5,max:50}},i={args:{defaultValue:70,disabled:!0}},u={render:e=>{const[t,r]=g.useState(e.value||e.defaultValue||0),p=m=>{r(m),e.onValueChange?.(m)};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:s.spacing.md,width:"100%"},children:[a.jsx(c,{...e,value:t,onValueChange:p}),a.jsxs("p",{style:{...s.typography.bodySmall,textAlign:"center",color:s.colors.neutral[50]},children:["Current Value: ",t]}),a.jsxs("div",{style:{display:"flex",gap:s.spacing.sm,justifyContent:"center"},children:[a.jsx(d,{size:"sm",onClick:()=>r(Math.max(e.min||0,t-(e.step||1))),disabled:t===(e.min||0),children:"-"}),a.jsx(d,{size:"sm",onClick:()=>r(Math.min(e.max||100,t+(e.step||1))),disabled:t===(e.max||100),children:"+"}),a.jsx(d,{size:"sm",variant:"ghost",onClick:()=>r(e.min||0),children:"Reset"})]})]})},args:{defaultValue:25,min:0,max:100,step:1}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 50
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 500,
    min: 100,
    max: 1000
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 20,
    step: 5,
    max: 50
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 70,
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [sliderValue, setSliderValue] = useState(args.value || args.defaultValue || 0);
    const handleValueChange = (value: number) => {
      setSliderValue(value);
      args.onValueChange?.(value); // Log to Storybook actions
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing.md,
      width: '100%'
    }}>
        <Slider {...args} value={sliderValue} onValueChange={handleValueChange} />
        <p style={{
        ...theme.typography.bodySmall,
        textAlign: 'center',
        color: theme.colors.neutral['50']
      }}>
          Current Value: {sliderValue}
        </p>
        <div style={{
        display: 'flex',
        gap: theme.spacing.sm,
        justifyContent: 'center'
      }}>
          <Button size="sm" onClick={() => setSliderValue(Math.max(args.min || 0, sliderValue - (args.step || 1)))} disabled={sliderValue === (args.min || 0)}>
            -
          </Button>
          <Button size="sm" onClick={() => setSliderValue(Math.min(args.max || 100, sliderValue + (args.step || 1)))} disabled={sliderValue === (args.max || 100)}>
            +
          </Button>
          <Button size="sm" variant="ghost" onClick={() => setSliderValue(args.min || 0)}>
            Reset
          </Button>
        </div>
      </div>;
  },
  args: {
    defaultValue: 25,
    min: 0,
    max: 100,
    step: 1
  }
}`,...u.parameters?.docs?.source}}};const b=["Default","CustomRange","CustomStep","Disabled","Interactive"];export{n as CustomRange,o as CustomStep,l as Default,i as Disabled,u as Interactive,b as __namedExportsOrder,v as default};
