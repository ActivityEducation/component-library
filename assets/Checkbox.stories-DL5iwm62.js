import{j as a,t,r as f}from"./iframe-OEcLT8CW.js";import{C as c}from"./index-CdEScRw5.js";import"./emotion-styled.browser.esm-CDovtSm7.js";import"./emotion-react.browser.esm-DGsMn0KN.js";const j={title:"Components/Checkbox",component:c,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{label:{control:"text",description:"The label associated with the checkbox.",defaultValue:"Option"},checked:{control:"boolean",description:"If true, the checkbox is checked (controlled)."},defaultChecked:{control:"boolean",description:"If true, the checkbox is checked by default (uncontrolled)."},indeterminate:{control:"boolean",description:"If true, the checkbox will be in an indeterminate state.",defaultValue:!1},disabled:{control:"boolean",description:"If true, the checkbox will be disabled.",defaultValue:!1},onChange:{action:"changed",description:"Callback function when the checkbox state changes."},id:{control:"text",description:"A unique ID for the checkbox input (auto-generated if not provided)."}},decorators:[e=>a.jsx("div",{style:{padding:t.spacing.xl,backgroundColor:t.colors.background.default},children:a.jsx(e,{})})]},s={args:{label:"Unchecked Option",checked:!1}},o={args:{label:"Checked Option",checked:!0}},d={args:{label:"Indeterminate Option",indeterminate:!0,checked:!1}},l={args:{label:"Disabled Unchecked",disabled:!0,checked:!1}},i={args:{label:"Disabled Checked",disabled:!0,checked:!0}},h={args:{label:"Disabled Indeterminate",disabled:!0,indeterminate:!0,checked:!1}},p={args:{"aria-label":"Accept terms",checked:!1}},u={render:e=>{const[m,n]=f.useState(e.checked||!1),g=r=>{n(r.target.checked),e.onChange?.(r)};return a.jsx(c,{...e,checked:m,onChange:g,label:e.label||"Interactive Checkbox"})},args:{label:"Interactive Checkbox",checked:!1,indeterminate:!1,disabled:!1}},b={render:()=>{const[e,m]=f.useState([]),n=g=>{const{value:r,checked:C}=g.target;m(k=>C?[...k,r]:k.filter(x=>x!==r))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:t.spacing.sm},children:[a.jsx("h3",{style:{...t.typography.h4,margin:0,color:t.colors.text.default},children:"Select Learning Paths:"}),a.jsx(c,{label:"Foundational Concepts",value:"foundational",checked:e.includes("foundational"),onChange:n}),a.jsx(c,{label:"Advanced Topics",value:"advanced",checked:e.includes("advanced"),onChange:n}),a.jsx(c,{label:"Project-Based Learning",value:"project",checked:e.includes("project"),onChange:n}),a.jsx(c,{label:"Certification Prep",value:"certification",checked:e.includes("certification"),onChange:n,disabled:!0}),a.jsxs("p",{style:{...t.typography.bodySmall,color:t.colors.neutral[50],marginTop:t.spacing.md},children:["Selected: ",e.join(", ")||"None"]})]})},args:{},parameters:{layout:"padded"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Unchecked Option',
    checked: false
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Checked Option',
    checked: true
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Indeterminate Option',
    indeterminate: true,
    checked: false // Indeterminate visually, but underlying value can be false or true
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Unchecked',
    disabled: true,
    checked: false
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Checked',
    disabled: true,
    checked: true
  }
}`,...i.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Indeterminate',
    disabled: true,
    indeterminate: true,
    checked: false
  }
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Accept terms',
    // Example for accessibility without visible label
    checked: false
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [isChecked, setIsChecked] = useState(args.checked || false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
      args.onChange?.(event); // Log the event in Storybook actions
    };
    return <Checkbox {...args} checked={isChecked} onChange={handleChange} label={args.label || 'Interactive Checkbox'} />;
  },
  args: {
    label: 'Interactive Checkbox',
    checked: false,
    indeterminate: false,
    disabled: false
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const {
        value,
        checked
      } = event.target;
      setSelectedOptions(prev => checked ? [...prev, value] : prev.filter(option => option !== value));
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing.sm
    }}>
        <h3 style={{
        ...theme.typography.h4,
        margin: 0,
        color: theme.colors.text.default
      }}>Select Learning Paths:</h3>
        <Checkbox label="Foundational Concepts" value="foundational" checked={selectedOptions.includes('foundational')} onChange={handleChange} />
        <Checkbox label="Advanced Topics" value="advanced" checked={selectedOptions.includes('advanced')} onChange={handleChange} />
        <Checkbox label="Project-Based Learning" value="project" checked={selectedOptions.includes('project')} onChange={handleChange} />
        <Checkbox label="Certification Prep" value="certification" checked={selectedOptions.includes('certification')} onChange={handleChange} disabled // Example of a disabled option in a group
      />
        <p style={{
        ...theme.typography.bodySmall,
        color: theme.colors.neutral['50'],
        marginTop: theme.spacing.md
      }}>
          Selected: {selectedOptions.join(', ') || 'None'}
        </p>
      </div>;
  },
  args: {},
  // No args needed for render function
  parameters: {
    // Override layout for this specific story if needed
    layout: 'padded'
  }
}`,...b.parameters?.docs?.source}}};const O=["Unchecked","Checked","Indeterminate","DisabledUnchecked","DisabledChecked","DisabledIndeterminate","NoLabel","Interactive","CheckboxGroup"];export{b as CheckboxGroup,o as Checked,i as DisabledChecked,h as DisabledIndeterminate,l as DisabledUnchecked,d as Indeterminate,u as Interactive,p as NoLabel,s as Unchecked,O as __namedExportsOrder,j as default};
