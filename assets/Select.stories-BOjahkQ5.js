import{j as e,t as i,r as v}from"./iframe-qfGYkdpq.js";import{S as u,O as t}from"./index-BfZaWrA1.js";import"./emotion-styled.browser.esm-Dr63JBGY.js";import"./emotion-react.browser.esm-B3bQ_QJr.js";const x={title:"Components/Select",component:u,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{placeholder:{control:"text",description:"The placeholder text to display when no option is selected.",defaultValue:"Select an option"},value:{control:"text",description:"The currently selected value (controlled component)."},defaultValue:{control:"text",description:"The initial selected value (uncontrolled component)."},onValueChange:{action:"valueChange",description:"Callback function when the selected value changes."},disabled:{control:"boolean",description:"If true, the select input will be disabled.",defaultValue:!1},children:{control:!1}},decorators:[a=>e.jsx("div",{style:{padding:i.spacing.xl,backgroundColor:i.colors.background.default,minHeight:"300px",display:"flex",justifyContent:"center",alignItems:"flex-start"},children:e.jsx(a,{})})]},l={args:{placeholder:"Choose a course",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{value:"activitypub-basics",children:"ActivityPub Basics"}),e.jsx(t,{value:"decentralized-identity",children:"Decentralized Identity"}),e.jsx(t,{value:"federated-learning",children:"Federated Learning"})]})}},n={args:{defaultValue:"decentralized-identity",placeholder:"Choose a course",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{value:"activitypub-basics",children:"ActivityPub Basics"}),e.jsx(t,{value:"decentralized-identity",children:"Decentralized Identity"}),e.jsx(t,{value:"federated-learning",children:"Federated Learning"})]})}},o={args:{placeholder:"This select is disabled",disabled:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(t,{value:"activitypub-basics",children:"ActivityPub Basics"}),e.jsx(t,{value:"decentralized-identity",children:"Decentralized Identity"})]})}},s={args:{placeholder:"Select a topic",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{value:"ai",children:"Artificial Intelligence"}),e.jsx(t,{value:"blockchain",children:"Blockchain Technologies"}),e.jsx(t,{value:"cloud",children:"Cloud Computing"}),e.jsx(t,{value:"cybersecurity",children:"Cybersecurity"}),e.jsx(t,{value:"data-science",children:"Data Science"}),e.jsx(t,{value:"devops",children:"DevOps & SRE"}),e.jsx(t,{value:"frontend",children:"Frontend Development"}),e.jsx(t,{value:"backend",children:"Backend Development"}),e.jsx(t,{value:"mobile",children:"Mobile Development"}),e.jsx(t,{value:"networking",children:"Networking Basics"}),e.jsx(t,{value:"os",children:"Operating Systems"}),e.jsx(t,{value:"quantum",children:"Quantum Computing"}),e.jsx(t,{value:"robotics",children:"Robotics"}),e.jsx(t,{value:"ux-ui",children:"UX/UI Design"})]})}},r={render:a=>{const[c,p]=v.useState(a.value||a.defaultValue),h=d=>{p(d),a.onValueChange?.(d)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:i.spacing.md},children:[e.jsxs(u,{...a,value:c,onValueChange:h,placeholder:"Select your major course",children:[e.jsx(t,{value:"math",children:"Mathematics"}),e.jsx(t,{value:"cs",children:"Computer Science"}),e.jsx(t,{value:"physics",children:"Physics"}),e.jsx(t,{value:"chemistry",children:"Chemistry"})]}),e.jsxs("p",{style:{...i.typography.bodySmall,color:i.colors.neutral[50]},children:["Selected: ",c||"None"]})]})},args:{value:"cs"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Choose a course',
    children: <>
        <Option value="activitypub-basics">ActivityPub Basics</Option>
        <Option value="decentralized-identity">Decentralized Identity</Option>
        <Option value="federated-learning">Federated Learning</Option>
      </>
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'decentralized-identity',
    placeholder: 'Choose a course',
    children: <>
        <Option value="activitypub-basics">ActivityPub Basics</Option>
        <Option value="decentralized-identity">Decentralized Identity</Option>
        <Option value="federated-learning">Federated Learning</Option>
      </>
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'This select is disabled',
    disabled: true,
    children: <>
        <Option value="activitypub-basics">ActivityPub Basics</Option>
        <Option value="decentralized-identity">Decentralized Identity</Option>
      </>
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select a topic',
    children: <>
        <Option value="ai">Artificial Intelligence</Option>
        <Option value="blockchain">Blockchain Technologies</Option>
        <Option value="cloud">Cloud Computing</Option>
        <Option value="cybersecurity">Cybersecurity</Option>
        <Option value="data-science">Data Science</Option>
        <Option value="devops">DevOps & SRE</Option>
        <Option value="frontend">Frontend Development</Option>
        <Option value="backend">Backend Development</Option>
        <Option value="mobile">Mobile Development</Option>
        <Option value="networking">Networking Basics</Option>
        <Option value="os">Operating Systems</Option>
        <Option value="quantum">Quantum Computing</Option>
        <Option value="robotics">Robotics</Option>
        <Option value="ux-ui">UX/UI Design</Option>
      </>
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedCourse, setSelectedCourse] = useState<string | undefined>(args.value || args.defaultValue);
    const handleValueChange = (value: string) => {
      setSelectedCourse(value);
      args.onValueChange?.(value); // Log to Storybook actions
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing.md
    }}>
        <Select {...args} value={selectedCourse} onValueChange={handleValueChange} placeholder="Select your major course">
          <Option value="math">Mathematics</Option>
          <Option value="cs">Computer Science</Option>
          <Option value="physics">Physics</Option>
          <Option value="chemistry">Chemistry</Option>
        </Select>
        <p style={{
        ...theme.typography.bodySmall,
        color: theme.colors.neutral['50']
      }}>
          Selected: {selectedCourse || 'None'}
        </p>
      </div>;
  },
  args: {
    value: 'cs'
  }
}`,...r.parameters?.docs?.source}}};const b=["Default","WithDefaultValue","Disabled","ManyOptions","Controlled"];export{r as Controlled,l as Default,o as Disabled,s as ManyOptions,n as WithDefaultValue,b as __namedExportsOrder,x as default};
