import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as i,R as B}from"./iframe-C3uWE8cP.js";import{s as O,T as M,t as y}from"./index-0UhJA7dS.js";import{c as P}from"./emotion-react.browser.esm-BP-SUzAD.js";const F=O.li`
  display: flex;
  align-items: center;
  padding: ${e=>e.theme.spacing.sm} ${e=>e.theme.spacing.md};
  cursor: pointer;
  font-family: ${e=>e.theme.typography.fontFamily};
  font-size: ${e=>e.theme.typography.body.fontSize};
  color: ${e=>e.theme.colors.text.default};
  text-align: left;
  transition: ${e=>e.theme.transitions.fast};
  white-space: nowrap; // Prevent text wrapping
  min-height: 36px; // Ensure a minimum height for clickable area

  &:hover:not(:disabled) {
    background-color: ${e=>e.theme.colors.neutral[95]}; // Light hover background
  }

  // Highlighted state (for keyboard navigation)
  ${e=>e.isHighlighted&&`
      background-color: ${e.theme.colors.neutral[90]}; // Slightly darker background for highlight
      color: ${e.theme.colors.primary[40]}; // Primary color for highlighted text
    `}

  // Selected state
  ${e=>e.isSelected&&`
      background-color: ${e.theme.colors.primary[95]}; // Light primary background for selected
      color: ${e.theme.colors.primary[10]}; // Darker text for selected
      font-weight: ${e.theme.typography.button.fontWeight}; // Bolder for selected
      // Add a checkmark icon or similar for selected state (example using character)
      &::after {
        content: '✔';
        margin-left: auto; // Push to the right
        color: ${e.theme.colors.primary[40]};
        font-size: 1.2em;
      }
    `}

  // Disabled state
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    color: ${e=>e.theme.colors.neutral[50]};
    background-color: transparent; // No hover effect when disabled
  }
`,a=({children:e,value:s,isSelected:m=!1,isHighlighted:v=!1,onOptionSelect:h,onClick:g,...c})=>{const j=D=>{c.disabled||(h?.(s),g?.(D))};return t.jsx(F,{role:"option","aria-selected":m,isSelected:m,isHighlighted:v,onClick:j,...c,children:e})},N=O.div`
  position: relative;
  display: inline-block; // Allows it to sit inline with text
  width: 100%;
  max-width: 280px; // Default max width for select
  font-family: ${e=>e.theme.typography.fontFamily};
`,H=O.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${e=>e.theme.spacing.md} ${e=>e.theme.spacing.lg};
  border: 1px solid ${e=>e.theme.colors.border.default};
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: ${e=>e.theme.colors.background.surface};
  cursor: pointer;
  text-align: left;
  font-size: ${e=>e.theme.typography.body.fontSize};
  color: ${e=>e.hasValue?e.theme.colors.text.default:e.theme.colors.text.placeholder};
  transition: ${e=>e.theme.transitions.default};
  box-shadow: ${e=>e.theme.shadows.sm};

  &:hover {
    border-color: ${e=>e.theme.colors.primary[50]};
  }

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[60]};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary[90]};
  }

  ${e=>e.isOpen&&P`
      border-color: ${e.theme.colors.primary[60]};
      box-shadow: 0 0 0 2px ${e.theme.colors.primary[90]};
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: ${e=>e.theme.colors.neutral[90]};
    color: ${e=>e.theme.colors.neutral[50]};
    border-color: ${e=>e.theme.colors.neutral[70]};
    box-shadow: none;
  }
`,U=O.span`
  margin-left: ${e=>e.theme.spacing.sm};
  transition: transform 0.2s ease-in-out;
  transform: rotate(${e=>e.isOpen?"180deg":"0deg"});
  color: ${e=>e.theme.colors.neutral[50]};
`,_=O.ul`
  position: absolute;
  top: 100%; // Position below the trigger
  left: 0;
  width: 100%;
  max-height: 250px; // Max height for scrollable options
  overflow-y: auto; // Enable scrolling for many options
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: ${e=>e.theme.colors.background.surface};
  border: 1px solid ${e=>e.theme.colors.border.default};
  border-top: none; // No top border as it connects to trigger
  border-bottom-left-radius: ${e=>e.theme.borderRadius.md};
  border-bottom-right-radius: ${e=>e.theme.borderRadius.md};
  box-shadow: ${e=>e.theme.shadows.md};
  z-index: 999; // Ensure dropdown is above other content
`,z=({placeholder:e="Select an option",value:s,defaultValue:m,onValueChange:v,children:h,disabled:g=!1,...c})=>{const[j,D]=i.useState(s!==void 0?s:m),u=s!==void 0?s:j,[n,d]=i.useState(!1),[l,f]=i.useState(u),T=i.useRef(null),V=i.useRef(null),I=i.useRef(null),r=i.Children.map(h,o=>i.isValidElement(o)&&o.type===a?{value:o.props.value,label:o.props.children,disabled:o.props.disabled??!1}:null)?.filter(Boolean),q=r.find(o=>o.value===u)?.label||e;i.useEffect(()=>{const o=b=>{T.current&&!T.current.contains(b.target)&&d(!1)};return n?document.addEventListener("mousedown",o):document.removeEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[n]),i.useEffect(()=>{f(n?u||r[0]?.value:void 0)},[n,u,r]),i.useEffect(()=>{n&&l&&I.current&&I.current.querySelector(`[data-value="${l}"]`)?.scrollIntoView({block:"nearest"})},[n,l]);const L=B.useCallback(o=>{if(g)return;const b=l?r.findIndex(p=>p.value===l):-1;switch(o.key){case"ArrowDown":if(o.preventDefault(),!n)d(!0);else{const p=(b+1)%r.length;f(r[p]?.value)}break;case"ArrowUp":if(o.preventDefault(),!n)d(!0);else{const p=(b-1+r.length)%r.length;f(r[p]?.value)}break;case"Enter":case" ":o.preventDefault(),n&&l?(E(l),d(!1)):n||d(!0);break;case"Escape":d(!1),V.current?.focus();break;case"Tab":d(!1);break;default:if(o.key.length===1&&/[a-zA-Z0-9]/.test(o.key)){const p=o.key.toLowerCase(),A=r.find((x,R)=>R>b&&typeof x.label=="string"&&x.label.toLowerCase().startsWith(p));if(A)f(A.value);else{const x=r.find(R=>String(R.label).toLowerCase().startsWith(p));x&&f(x.value)}n||d(!0)}break}},[n,l,r,g]),E=o=>{s===void 0&&D(o),v?.(o),d(!1),V.current?.focus()};return t.jsxs(N,{ref:T,...c,children:[t.jsxs(H,{ref:V,onClick:()=>!g&&d(!n),disabled:g,isOpen:n,hasValue:u!==void 0&&u!=="",role:"combobox","aria-haspopup":"listbox","aria-expanded":n,"aria-controls":n?`${c.id||"select"}-listbox`:void 0,"aria-labelledby":c.id?`${c.id}-label`:void 0,onKeyDown:L,children:[t.jsx("span",{children:q}),t.jsx(U,{isOpen:n,children:"▼"})," "]}),n&&t.jsx(_,{ref:I,role:"listbox",id:`${c.id||"select"}-listbox`,"aria-activedescendant":l?`${c.id||"select"}-option-${l}`:void 0,tabIndex:-1,children:i.Children.map(h,o=>i.isValidElement(o)&&o.type===a?i.cloneElement(o,{isSelected:o.props.value===u,isHighlighted:o.props.value===l||u===void 0&&o.props.value===r[0]?.value,onOptionSelect:E,id:`${c.id||"select"}-option-${o.props.value}`}):(console.warn("Select expects only Option components as children."),null))})]})};a.__docgenInfo={description:"An individual selectable item within a `Select` component's dropdown in the AscendUCore Design System.\nIt displays content and handles selection/highlighting states.",methods:[],displayName:"Option",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be rendered inside the option (e.g., text, icon)."},disabled:{required:!1,tsType:{name:"boolean"},description:"If true, the option will be disabled."},value:{required:!0,tsType:{name:"string"},description:"The unique value associated with this option."},isSelected:{required:!1,tsType:{name:"boolean"},description:"Indicates if this option is currently selected. Managed by the parent Select.",defaultValue:{value:"false",computed:!1}},isHighlighted:{required:!1,tsType:{name:"boolean"},description:`Indicates if this option is currently highlighted (e.g., by keyboard navigation).
Managed by the parent Select.`,defaultValue:{value:"false",computed:!1}},onOptionSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback function when the option is clicked. Managed by the parent Select.\nThis prop is renamed from `onSelect` to `onOptionSelect` to avoid type conflicts with\n`React.LiHTMLAttributes`.\n@param value The value of the clicked option."},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};z.__docgenInfo={description:`A Select component for the AscendUCore Design System.
It allows users to choose a single option from a dropdown list,
providing accessibility features and controlled/uncontrolled behavior.`,methods:[],displayName:"Select",props:{placeholder:{required:!1,tsType:{name:"string"},description:"The placeholder text to display when no option is selected.",defaultValue:{value:"'Select an option'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"The currently selected value (controlled component).\nMust match the `value` prop of one of the `Option` children."},defaultValue:{required:!1,tsType:{name:"string"},description:"The initial selected value (uncontrolled component).\nMust match the `value` prop of one of the `Option` children."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback function that is called when the selected value changes.\nProvides the `value` of the newly selected option."},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The `Option` components to be rendered within the select dropdown.\nOnly `Option` children are expected."},disabled:{required:!1,tsType:{name:"boolean"},description:`If true, the select input will be disabled.
@default false`,defaultValue:{value:"false",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};const Z={title:"Components/Select",component:z,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{placeholder:{control:"text",description:"The placeholder text to display when no option is selected.",defaultValue:"Select an option"},value:{control:"text",description:"The currently selected value (controlled component)."},defaultValue:{control:"text",description:"The initial selected value (uncontrolled component)."},onValueChange:{action:"valueChange",description:"Callback function when the selected value changes."},disabled:{control:"boolean",description:"If true, the select input will be disabled.",defaultValue:!1},children:{control:!1}},decorators:[e=>t.jsx(M,{theme:y,children:t.jsx("div",{style:{padding:y.spacing.xl,backgroundColor:y.colors.background.default,minHeight:"300px",display:"flex",justifyContent:"center",alignItems:"flex-start"},children:t.jsx(e,{})})})]},w={args:{placeholder:"Choose a course",children:t.jsxs(t.Fragment,{children:[t.jsx(a,{value:"activitypub-basics",children:"ActivityPub Basics"}),t.jsx(a,{value:"decentralized-identity",children:"Decentralized Identity"}),t.jsx(a,{value:"federated-learning",children:"Federated Learning"})]})}},S={args:{defaultValue:"decentralized-identity",placeholder:"Choose a course",children:t.jsxs(t.Fragment,{children:[t.jsx(a,{value:"activitypub-basics",children:"ActivityPub Basics"}),t.jsx(a,{value:"decentralized-identity",children:"Decentralized Identity"}),t.jsx(a,{value:"federated-learning",children:"Federated Learning"})]})}},k={args:{placeholder:"This select is disabled",disabled:!0,children:t.jsxs(t.Fragment,{children:[t.jsx(a,{value:"activitypub-basics",children:"ActivityPub Basics"}),t.jsx(a,{value:"decentralized-identity",children:"Decentralized Identity"})]})}},C={args:{placeholder:"Select a topic",children:t.jsxs(t.Fragment,{children:[t.jsx(a,{value:"ai",children:"Artificial Intelligence"}),t.jsx(a,{value:"blockchain",children:"Blockchain Technologies"}),t.jsx(a,{value:"cloud",children:"Cloud Computing"}),t.jsx(a,{value:"cybersecurity",children:"Cybersecurity"}),t.jsx(a,{value:"data-science",children:"Data Science"}),t.jsx(a,{value:"devops",children:"DevOps & SRE"}),t.jsx(a,{value:"frontend",children:"Frontend Development"}),t.jsx(a,{value:"backend",children:"Backend Development"}),t.jsx(a,{value:"mobile",children:"Mobile Development"}),t.jsx(a,{value:"networking",children:"Networking Basics"}),t.jsx(a,{value:"os",children:"Operating Systems"}),t.jsx(a,{value:"quantum",children:"Quantum Computing"}),t.jsx(a,{value:"robotics",children:"Robotics"}),t.jsx(a,{value:"ux-ui",children:"UX/UI Design"})]})}},$={render:e=>{const[s,m]=i.useState(e.value||e.defaultValue),v=h=>{m(h),e.onValueChange?.(h)};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:y.spacing.md},children:[t.jsxs(z,{...e,value:s,onValueChange:v,placeholder:"Select your major course",children:[t.jsx(a,{value:"math",children:"Mathematics"}),t.jsx(a,{value:"cs",children:"Computer Science"}),t.jsx(a,{value:"physics",children:"Physics"}),t.jsx(a,{value:"chemistry",children:"Chemistry"})]}),t.jsxs("p",{style:{...y.typography.bodySmall,color:y.colors.neutral[50]},children:["Selected: ",s||"None"]})]})},args:{value:"cs"}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Choose a course',
    children: <>
        <Option value="activitypub-basics">ActivityPub Basics</Option>
        <Option value="decentralized-identity">Decentralized Identity</Option>
        <Option value="federated-learning">Federated Learning</Option>
      </>
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'decentralized-identity',
    placeholder: 'Choose a course',
    children: <>
        <Option value="activitypub-basics">ActivityPub Basics</Option>
        <Option value="decentralized-identity">Decentralized Identity</Option>
        <Option value="federated-learning">Federated Learning</Option>
      </>
  }
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'This select is disabled',
    disabled: true,
    children: <>
        <Option value="activitypub-basics">ActivityPub Basics</Option>
        <Option value="decentralized-identity">Decentralized Identity</Option>
      </>
  }
}`,...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};const G=["Default","WithDefaultValue","Disabled","ManyOptions","Controlled"];export{$ as Controlled,w as Default,k as Disabled,C as ManyOptions,S as WithDefaultValue,G as __namedExportsOrder,Z as default};
