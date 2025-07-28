import{j as t,t as a,r as g}from"./iframe-CkUD85aG.js";import{R as d}from"./index-CFa7R-jh.js";import"./emotion-styled.browser.esm-YHkEzSHc.js";const k={title:"Components/Radio",component:d,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{label:{control:"text",description:"The label associated with the radio button.",defaultValue:"Option"},checked:{control:"boolean",description:"If true, the radio button is checked (controlled)."},defaultChecked:{control:"boolean",description:"If true, the radio button is checked by default (uncontrolled)."},disabled:{control:"boolean",description:"If true, the radio button will be disabled.",defaultValue:!1},onChange:{action:"changed",description:"Callback function when the radio button state changes."},id:{control:"text",description:"A unique ID for the radio input (auto-generated if not provided)."},name:{control:"text",description:"The name attribute for the radio input, crucial for grouping.",defaultValue:"radioGroup"},value:{control:"text",description:"The value associated with this specific radio option.",defaultValue:"option1"}},decorators:[e=>t.jsx("div",{style:{padding:a.spacing.xl,backgroundColor:a.colors.background.default},children:t.jsx(e,{})})]},o={args:{label:"Unchecked Option",checked:!1,name:"singleRadio",value:"single"}},r={args:{label:"Checked Option",checked:!0,name:"singleRadio",value:"single"}},c={args:{label:"Disabled Unchecked",disabled:!0,checked:!1,name:"disabledRadio",value:"disabled"}},l={args:{label:"Disabled Checked",disabled:!0,checked:!0,name:"disabledRadio",value:"disabled"}},s={render:e=>{const[u,n]=g.useState(e.checked||!1),h=p=>{n(p.target.checked),e.onChange?.(p)};return t.jsx(d,{...e,checked:u,onChange:h,label:e.label||"Interactive Radio",name:"interactiveRadio",value:"interactive"})},args:{label:"Interactive Radio",checked:!1,disabled:!1}},i={render:()=>{const[e,u]=g.useState("optionA"),n=h=>{u(h.target.value)};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:a.spacing.sm,padding:a.spacing.lg,border:`1px solid ${a.colors.border.default}`,borderRadius:a.borderRadius.md,backgroundColor:a.colors.background.surface},children:[t.jsx("h3",{style:{...a.typography.h4,margin:0,color:a.colors.text.default},children:"Select Course Difficulty:"}),t.jsx(d,{label:"Beginner",name:"difficulty",value:"beginner",checked:e==="beginner",onChange:n}),t.jsx(d,{label:"Intermediate",name:"difficulty",value:"intermediate",checked:e==="intermediate",onChange:n}),t.jsx(d,{label:"Advanced",name:"difficulty",value:"advanced",checked:e==="advanced",onChange:n}),t.jsx(d,{label:"Expert (Coming Soon)",name:"difficulty",value:"expert",checked:e==="expert",onChange:n,disabled:!0}),t.jsxs("p",{style:{...a.typography.bodySmall,color:a.colors.neutral[50],marginTop:a.spacing.md},children:["Selected Difficulty: ",e]})]})},args:{},parameters:{layout:"padded"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Unchecked Option',
    checked: false,
    name: 'singleRadio',
    // Use a unique name for single radios
    value: 'single'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Checked Option',
    checked: true,
    name: 'singleRadio',
    value: 'single'
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Unchecked',
    disabled: true,
    checked: false,
    name: 'disabledRadio',
    value: 'disabled'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Checked',
    disabled: true,
    checked: true,
    name: 'disabledRadio',
    value: 'disabled'
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [isChecked, setIsChecked] = useState(args.checked || false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
      args.onChange?.(event); // Log the event in Storybook actions
    };
    return <Radio {...args} checked={isChecked} onChange={handleChange} label={args.label || 'Interactive Radio'} name="interactiveRadio" value="interactive" />;
  },
  args: {
    label: 'Interactive Radio',
    checked: false,
    disabled: false
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedOption, setSelectedOption] = useState('optionA');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedOption(event.target.value);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing.sm,
      padding: theme.spacing.lg,
      border: \`1px solid \${theme.colors.border.default}\`,
      borderRadius: theme.borderRadius.md,
      backgroundColor: theme.colors.background.surface
    }}>
        <h3 style={{
        ...theme.typography.h4,
        margin: 0,
        color: theme.colors.text.default
      }}>Select Course Difficulty:</h3>
        <Radio label="Beginner" name="difficulty" value="beginner" checked={selectedOption === 'beginner'} onChange={handleChange} />
        <Radio label="Intermediate" name="difficulty" value="intermediate" checked={selectedOption === 'intermediate'} onChange={handleChange} />
        <Radio label="Advanced" name="difficulty" value="advanced" checked={selectedOption === 'advanced'} onChange={handleChange} />
        <Radio label="Expert (Coming Soon)" name="difficulty" value="expert" checked={selectedOption === 'expert'} onChange={handleChange} disabled />
        <p style={{
        ...theme.typography.bodySmall,
        color: theme.colors.neutral['50'],
        marginTop: theme.spacing.md
      }}>
          Selected Difficulty: {selectedOption}
        </p>
      </div>;
  },
  args: {},
  // No args needed for render function
  parameters: {
    layout: 'padded'
  }
}`,...i.parameters?.docs?.source}}};const v=["Unchecked","Checked","DisabledUnchecked","DisabledChecked","Interactive","RadioGroupExample"];export{r as Checked,l as DisabledChecked,c as DisabledUnchecked,s as Interactive,i as RadioGroupExample,o as Unchecked,v as __namedExportsOrder,k as default};
