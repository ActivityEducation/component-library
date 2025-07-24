import{e as v,j as a,t,r as b}from"./iframe-qfGYkdpq.js";import{s as m}from"./emotion-styled.browser.esm-Dr63JBGY.js";const x=m.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none; // Prevent text selection on label
  font-family: ${e=>e.theme.typography.fontFamily};
  font-size: ${e=>e.theme.typography.body.fontSize};
  color: ${e=>e.theme.colors.text.default};

  &:hover .radio-indicator {
    border-color: ${e=>e.theme.colors.primary[50]};
  }

  &:focus-within .radio-indicator {
    outline: 2px solid ${e=>e.theme.colors.primary[60]};
    outline-offset: 2px;
  }

  // Disabled state for the whole wrapper
  &.disabled {
    cursor: not-allowed;
    opacity: 0.6;
    color: ${e=>e.theme.colors.neutral[50]};
  }
`,C=m.input`
  // Visually hide the radio but keep it accessible
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none; // Ensure it doesn't interfere with pointer events on the custom indicator
`,R=m.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${e=>e.theme.colors.border.default};
  border-radius: ${e=>e.theme.borderRadius.full}; // Circular shape
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${e=>e.theme.spacing.sm};
  transition: ${e=>e.theme.transitions.fast};
  flex-shrink: 0; // Prevent indicator from shrinking

  // Default unchecked state
  background-color: ${e=>e.theme.colors.background.surface};

  // Checked state
  ${e=>e.checked&&`
      background-color: ${e.theme.colors.primary[40]};
      border-color: ${e.theme.colors.primary[40]};
      // Inner circle indicator
      &::after {
        content: '';
        width: 10px;
        height: 10px;
        border-radius: ${e.theme.borderRadius.full};
        background-color: ${e.theme.colors.text.onPrimary}; // White dot
        transition: ${e.theme.transitions.fast};
      }
    `}

  // Disabled state overrides
  ${e=>e.disabled&&`
      background-color: ${e.theme.colors.neutral[90]};
      border-color: ${e.theme.colors.neutral[70]};
      cursor: not-allowed;
      &::after {
        background-color: ${e.theme.colors.neutral[50]}; // Dim inner dot
      }
    `}
`,r=({label:e,checked:n,disabled:o,onChange:d,id:i,name:f,value:k,...y})=>{const g=i||v.useId();return a.jsxs(x,{className:o?"disabled":"",htmlFor:g,children:[a.jsx(C,{type:"radio",id:g,name:f,value:k,checked:n,disabled:o,onChange:d,...y}),a.jsx(R,{checked:n,disabled:o,className:"radio-indicator"}),e&&a.jsx("span",{children:e})]})};r.__docgenInfo={description:"A Radio component for the AscendUCore Design System.\nAllows users to select a single option from a set. Supports checked and disabled states.\nIt should typically be used within a `RadioGroup` for proper functionality and accessibility.",methods:[],displayName:"Radio",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The label associated with the radio button."},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};const $={title:"Components/Radio",component:r,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{label:{control:"text",description:"The label associated with the radio button.",defaultValue:"Option"},checked:{control:"boolean",description:"If true, the radio button is checked (controlled)."},defaultChecked:{control:"boolean",description:"If true, the radio button is checked by default (uncontrolled)."},disabled:{control:"boolean",description:"If true, the radio button will be disabled.",defaultValue:!1},onChange:{action:"changed",description:"Callback function when the radio button state changes."},id:{control:"text",description:"A unique ID for the radio input (auto-generated if not provided)."},name:{control:"text",description:"The name attribute for the radio input, crucial for grouping.",defaultValue:"radioGroup"},value:{control:"text",description:"The value associated with this specific radio option.",defaultValue:"option1"}},decorators:[e=>a.jsx("div",{style:{padding:t.spacing.xl,backgroundColor:t.colors.background.default},children:a.jsx(e,{})})]},s={args:{label:"Unchecked Option",checked:!1,name:"singleRadio",value:"single"}},c={args:{label:"Checked Option",checked:!0,name:"singleRadio",value:"single"}},l={args:{label:"Disabled Unchecked",disabled:!0,checked:!1,name:"disabledRadio",value:"disabled"}},u={args:{label:"Disabled Checked",disabled:!0,checked:!0,name:"disabledRadio",value:"disabled"}},h={render:e=>{const[n,o]=b.useState(e.checked||!1),d=i=>{o(i.target.checked),e.onChange?.(i)};return a.jsx(r,{...e,checked:n,onChange:d,label:e.label||"Interactive Radio",name:"interactiveRadio",value:"interactive"})},args:{label:"Interactive Radio",checked:!1,disabled:!1}},p={render:()=>{const[e,n]=b.useState("optionA"),o=d=>{n(d.target.value)};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:t.spacing.sm,padding:t.spacing.lg,border:`1px solid ${t.colors.border.default}`,borderRadius:t.borderRadius.md,backgroundColor:t.colors.background.surface},children:[a.jsx("h3",{style:{...t.typography.h4,margin:0,color:t.colors.text.default},children:"Select Course Difficulty:"}),a.jsx(r,{label:"Beginner",name:"difficulty",value:"beginner",checked:e==="beginner",onChange:o}),a.jsx(r,{label:"Intermediate",name:"difficulty",value:"intermediate",checked:e==="intermediate",onChange:o}),a.jsx(r,{label:"Advanced",name:"difficulty",value:"advanced",checked:e==="advanced",onChange:o}),a.jsx(r,{label:"Expert (Coming Soon)",name:"difficulty",value:"expert",checked:e==="expert",onChange:o,disabled:!0}),a.jsxs("p",{style:{...t.typography.bodySmall,color:t.colors.neutral[50],marginTop:t.spacing.md},children:["Selected Difficulty: ",e]})]})},args:{},parameters:{layout:"padded"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Unchecked Option',
    checked: false,
    name: 'singleRadio',
    // Use a unique name for single radios
    value: 'single'
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Checked Option',
    checked: true,
    name: 'singleRadio',
    value: 'single'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Unchecked',
    disabled: true,
    checked: false,
    name: 'disabledRadio',
    value: 'disabled'
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Checked',
    disabled: true,
    checked: true,
    name: 'disabledRadio',
    value: 'disabled'
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const D=["Unchecked","Checked","DisabledUnchecked","DisabledChecked","Interactive","RadioGroupExample"];export{c as Checked,u as DisabledChecked,l as DisabledUnchecked,h as Interactive,p as RadioGroupExample,s as Unchecked,D as __namedExportsOrder,$ as default};
