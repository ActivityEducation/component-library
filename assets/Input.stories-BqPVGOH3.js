import{j as e,t as r,r as g}from"./iframe-DBjxWcSu.js";import{I}from"./index-DVTEbjc4.js";import{B as C}from"./index-BiwRjp0i.js";import"./emotion-styled.browser.esm-BYbfZwar.js";import"./emotion-react.browser.esm-B0Qy288v.js";import"./index-BjSZ1avc.js";const V=()=>e.jsx("span",{style:{fontSize:"18px"},children:"✉️"}),v=()=>e.jsx("span",{style:{fontSize:"18px"},children:"🔒"}),M=()=>e.jsx("span",{style:{fontSize:"18px"},children:"🔍"}),j=()=>e.jsx("span",{style:{fontSize:"18px"},children:"€"}),L={title:"Components/Input",component:I,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{label:{control:"text",description:"The label text for the input field. It will float above the input.",defaultValue:"Username"},placeholder:{control:"text",description:"The placeholder text to display when the input is empty and label is floating.",defaultValue:"Enter your username"},helperText:{control:"text",description:"Helper text displayed below the input field.",defaultValue:"Must be at least 3 characters long."},error:{control:"boolean",description:"If true, the input will display an error state.",defaultValue:!1},errorMessage:{control:"text",description:"The error message to display when `error` is true."},leading:{control:"object",description:"Content to be displayed at the leading (left) side of the input."},trailing:{control:"object",description:"Content to be displayed at the trailing (right) side of the input."},disabled:{control:"boolean",description:"If true, the input will be disabled.",defaultValue:!1},type:{control:"select",options:["text","email","password","number","url","tel"],description:"The type of the input field.",defaultValue:"text"},value:{control:"text",description:"The current value of the input (controlled)."},defaultValue:{control:"text",description:"The initial value of the input (uncontrolled)."},onChange:{action:"changed",description:"Callback function when the input value changes."},onFocus:{action:"focused"},onBlur:{action:"blurred"}},decorators:[a=>e.jsx("div",{style:{padding:r.spacing.xl,backgroundColor:r.colors.background.default,display:"flex",flexDirection:"column",gap:r.spacing.xl,justifyContent:"center",alignItems:"flex-start",minHeight:"400px"},children:e.jsx(a,{})})]},t={args:{label:"Email Address",placeholder:"your.email@example.com",helperText:"We will never share your email.",type:"email"}},s={args:{label:"Full Name",defaultValue:"John Doe",helperText:"Your name as it appears on your ID."}},n={args:{label:"Password",placeholder:"Enter your password",helperText:"Password must be at least 8 characters.",error:!0,errorMessage:"Password is too short. (Min 8 characters)",type:"password"}},o={args:{label:"Disabled Field",placeholder:"This field is disabled",defaultValue:"Cannot edit",disabled:!0}},l={args:{placeholder:"Search..."}},i={args:{label:"Email",placeholder:"your.email@example.com",leading:e.jsx(V,{}),type:"email"}},c={args:{label:"Password",placeholder:"Enter password",trailing:e.jsx(v,{}),type:"password"}},p={args:{label:"Search Query",placeholder:"Search courses, topics...",leading:e.jsx(M,{}),trailing:e.jsx(C,{variant:"ghost",size:"sm",style:{padding:"4px 8px"},children:"Clear"})}},u={args:{label:"Price",placeholder:"0.00",leading:e.jsx(j,{}),trailing:e.jsx("span",{style:{fontSize:r.typography.bodySmall.fontSize,color:r.colors.neutral[50]},children:"EUR"}),type:"number"}},d={render:a=>{const[E,S]=g.useState(""),[b,y]=g.useState(!1),[w,x]=g.useState(""),T=f=>{const m=f.target.value;S(m),m.length>0&&m.length<5?(y(!0),x("Input must be at least 5 characters.")):(y(!1),x("")),a.onChange?.(f)};return e.jsx(I,{...a,label:"Controlled Input (Min 5 Chars)",placeholder:"Type something...",value:E,onChange:T,error:b,errorMessage:w,helperText:b?"":"Type to see validation. (Min 5 characters)"})},args:{label:"Controlled Input",placeholder:"Type here...",type:"text"}},h={args:{label:"Age",placeholder:"Enter your age",type:"number",min:0,max:120,step:1,helperText:"Enter a number between 0 and 120."}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    placeholder: 'your.email@example.com',
    helperText: 'We will never share your email.',
    type: 'email'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Full Name',
    defaultValue: 'John Doe',
    helperText: 'Your name as it appears on your ID.'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    helperText: 'Password must be at least 8 characters.',
    error: true,
    errorMessage: 'Password is too short. (Min 8 characters)',
    type: 'password'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Field',
    placeholder: 'This field is disabled',
    defaultValue: 'Cannot edit',
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'your.email@example.com',
    leading: <MailIcon />,
    type: 'email'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    trailing: <LockIcon />,
    type: 'password'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search Query',
    placeholder: 'Search courses, topics...',
    leading: <SearchIcon />,
    trailing: <Button variant="ghost" size="sm" style={{
      padding: '4px 8px'
    }}>Clear</Button> // Example trailing button
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Price',
    placeholder: '0.00',
    leading: <EuroIcon />,
    trailing: <span style={{
      fontSize: theme.typography.bodySmall.fontSize,
      color: theme.colors.neutral['50']
    }}>EUR</span>,
    type: 'number'
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [inputValue, setInputValue] = useState('');
    const [inputError, setInputError] = useState(false);
    const [inputErrorMessage, setInputErrorMessage] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setInputValue(newValue);
      if (newValue.length > 0 && newValue.length < 5) {
        setInputError(true);
        setInputErrorMessage('Input must be at least 5 characters.');
      } else {
        setInputError(false);
        setInputErrorMessage('');
      }
      args.onChange?.(event); // Log original event
    };
    return <Input {...args} label="Controlled Input (Min 5 Chars)" placeholder="Type something..." value={inputValue} onChange={handleChange} error={inputError} errorMessage={inputErrorMessage} helperText={inputError ? '' : 'Type to see validation. (Min 5 characters)'} />;
  },
  args: {
    label: 'Controlled Input',
    placeholder: 'Type here...',
    type: 'text'
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Age',
    placeholder: 'Enter your age',
    type: 'number',
    min: 0,
    max: 120,
    step: 1,
    helperText: 'Enter a number between 0 and 120.'
  }
}`,...h.parameters?.docs?.source}}};const k=["Default","WithDefaultValue","WithError","Disabled","BareInput","WithLeadingIcon","WithTrailingIcon","WithAdornments","WithCurrency","InteractiveValidation","NumberInput"];export{l as BareInput,t as Default,o as Disabled,d as InteractiveValidation,h as NumberInput,p as WithAdornments,u as WithCurrency,s as WithDefaultValue,n as WithError,i as WithLeadingIcon,c as WithTrailingIcon,k as __namedExportsOrder,L as default};
