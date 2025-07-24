import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as n,R as _}from"./iframe-C3uWE8cP.js";import{t as r,s as g,T as J}from"./index-0UhJA7dS.js";import{c as v}from"./emotion-react.browser.esm-BP-SUzAD.js";import{I as L}from"./index-CPXLxjDA.js";import{B as Q}from"./index-DgNSwxsC.js";const G=g.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  vertical-align: top;
  width: 100%;
  max-width: 320px; // Default max-width for inputs
  font-family: ${r.typography.fontFamily};
`,K=g.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid ${e=>e.error?e.theme.colors.error[40]:e.theme.colors.border.default};
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: ${e=>e.theme.colors.background.surface};
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-shadow: ${e=>e.theme.shadows.sm};

  &:hover {
    border-color: ${e=>e.error?e.theme.colors.error[50]:e.theme.colors.primary[50]};
  }

  ${e=>e.isFocused&&v`
      border-color: ${e.theme.colors.primary[40]};
      box-shadow: 0 0 0 2px ${e.theme.colors.primary[90]};
    `}

  ${e=>e.disabled&&v`
      background-color: ${e.theme.colors.neutral[95]};
      border-color: ${e.theme.colors.neutral[80]};
      cursor: not-allowed;
      box-shadow: none;
    `}
`,X=g.label`
  position: absolute;
  /* Initial left position: considers leading adornment */
  left: ${e=>{const c=`calc(20px + ${e.theme.spacing.sm} * 2)`,o=e.theme.spacing.lg,s=`calc(${c} + ${e.theme.spacing.xs})`;return e.hasLeadingAdornment?s:o}};
  
  top: 50%;
  transform: translateY(-50%);
  color: ${e=>e.error?e.theme.colors.error[40]:e.theme.colors.text.placeholder};
  font-size: ${r.typography.body.fontSize};
  transition: all 0.2s ease-in-out, left 0.2s ease-in-out; /* Add left to transition */
  pointer-events: none; // Allow clicks to pass through to input
  background-color: ${e=>e.theme.colors.background.surface};
  padding: 0 4px; // Padding for the "notch" effect

  ${e=>(e.isFloating||e.isFocused)&&v`
      top: 0;
      transform: translateY(-50%) scale(0.85); // Smaller and moved up
      font-size: ${r.typography.bodySmall.fontSize}; // Smaller font when floating
      color: ${e.error?e.theme.colors.error[40]:e.isFocused?e.theme.colors.primary[40]:e.theme.colors.neutral[50]};
      /* When floating, always align to the standard left padding (theme.spacing.lg) */
      left: ${e.theme.spacing.lg}; /* This ensures consistent alignment when floating */
    `}

  ${e=>e.disabled&&v`
      color: ${e.theme.colors.neutral[50]};
    `}
`,Z=g.input`
  flex-grow: 1; // Take up remaining space
  border: none;
  background-color: transparent;
  font-family: ${r.typography.fontFamily};
  font-size: ${r.typography.body.fontSize};
  color: ${r.colors.text.default};
  line-height: 1.5; // Ensure consistent line height
  min-height: 40px; // Minimum height for input area
  box-sizing: border-box; // Include padding in element's total width

  /* Dynamic padding based on adornments */
  padding-top: ${e=>e.theme.spacing.md};
  padding-bottom: ${e=>e.theme.spacing.md};
  padding-left: ${e=>e.hasLeading?e.theme.spacing.sm:e.theme.spacing.lg};
  padding-right: ${e=>e.hasTrailing?e.theme.spacing.sm:e.theme.spacing.lg};


  &:focus {
    outline: none; // Outline handled by InputWrapper
  }

  &::placeholder {
    color: transparent; // Hide native placeholder when label is used
  }

  &:disabled {
    cursor: not-allowed;
    color: ${r.colors.neutral[50]};
  }
`,N=g.div`
  display: flex;
  align-items: center;
  padding: 0 ${e=>e.theme.spacing.sm}; /* Padding around the icon/content */
  color: ${e=>e.theme.colors.neutral[50]}; // Default color for icons/text
  flex-shrink: 0; // Prevent shrinking
`,z=({label:e,helperText:c,error:o=!1,errorMessage:s,leading:l,trailing:i,value:a,defaultValue:u,onFocus:h,onBlur:d,onChange:M,disabled:m,id:q,...j})=>{const[V,k]=n.useState(!1),[B,W]=n.useState(a!==void 0?a:u!==void 0?u:""),D=n.useRef(null),R=!!B||D.current&&!!D.current.value,F=V||R,A=!!l,H=!!i;n.useEffect(()=>{a!==void 0&&W(a)},[a]);const O=n.useCallback(p=>{k(!0),h?.(p)},[h]),U=n.useCallback(p=>{k(!1),d?.(p)},[d]),Y=n.useCallback(p=>{a===void 0&&W(p.target.value),M?.(p)},[a,M]),P=q||`input-${_.useId()}`;return t.jsxs(G,{...j,children:[t.jsxs(K,{isFocused:V,hasValue:R,error:o,disabled:m||!1,children:[l&&t.jsx(N,{children:typeof l=="string"?t.jsx(L,{name:l,size:"md",color:m?r.colors.neutral[50]:r.colors.neutral[50]}):l}),t.jsx(Z,{id:P,onFocus:O,onBlur:U,onChange:Y,value:a,defaultValue:u,disabled:m,placeholder:e&&!F?e:j.placeholder,hasLeading:A,hasTrailing:H,...j}),e&&t.jsx(X,{htmlFor:P,isFloating:F,isFocused:V,error:o,disabled:m||!1,hasLeadingAdornment:A,children:e}),i&&t.jsx(N,{children:typeof i=="string"?t.jsx(L,{name:i,size:"md",color:m?r.colors.neutral[50]:r.colors.neutral[50]}):i})]}),(c||o&&s)&&t.jsx("span",{style:{fontSize:r.typography.caption.fontSize,color:o?r.colors.error[40]:r.colors.neutral[50],marginTop:r.spacing.xxs,paddingLeft:r.spacing.sm},children:o&&s?s:c})]})};z.__docgenInfo={description:`An Input component with an outlined appearance for the AscendUCore Design System.
Supports floating labels, helper text, error states, and leading/trailing content.`,methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:"The label text for the input field. It will float above the input."},helperText:{required:!1,tsType:{name:"string"},description:"Helper text displayed below the input field."},error:{required:!1,tsType:{name:"boolean"},description:`If true, the input will display an error state.
@default false`,defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"The error message to display when `error` is true."},leading:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Content to be displayed at the leading (left) side of the input,
typically an icon or currency symbol.`},trailing:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Content to be displayed at the trailing (right) side of the input,
typically an icon, clear button, or unit.`},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles for the outer container."}}};const ee=()=>t.jsx("span",{style:{fontSize:"18px"},children:"✉️"}),te=()=>t.jsx("span",{style:{fontSize:"18px"},children:"🔒"}),re=()=>t.jsx("span",{style:{fontSize:"18px"},children:"🔍"}),ae=()=>t.jsx("span",{style:{fontSize:"18px"},children:"€"}),de={title:"Components/Input",component:z,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{label:{control:"text",description:"The label text for the input field. It will float above the input.",defaultValue:"Username"},placeholder:{control:"text",description:"The placeholder text to display when the input is empty and label is floating.",defaultValue:"Enter your username"},helperText:{control:"text",description:"Helper text displayed below the input field.",defaultValue:"Must be at least 3 characters long."},error:{control:"boolean",description:"If true, the input will display an error state.",defaultValue:!1},errorMessage:{control:"text",description:"The error message to display when `error` is true."},leading:{control:"object",description:"Content to be displayed at the leading (left) side of the input."},trailing:{control:"object",description:"Content to be displayed at the trailing (right) side of the input."},disabled:{control:"boolean",description:"If true, the input will be disabled.",defaultValue:!1},type:{control:"select",options:["text","email","password","number","url","tel"],description:"The type of the input field.",defaultValue:"text"},value:{control:"text",description:"The current value of the input (controlled)."},defaultValue:{control:"text",description:"The initial value of the input (uncontrolled)."},onChange:{action:"changed",description:"Callback function when the input value changes."},onFocus:{action:"focused"},onBlur:{action:"blurred"}},decorators:[e=>t.jsx(J,{theme:r,children:t.jsx("div",{style:{padding:r.spacing.xl,backgroundColor:r.colors.background.default,display:"flex",flexDirection:"column",gap:r.spacing.xl,justifyContent:"center",alignItems:"flex-start",minHeight:"400px"},children:t.jsx(e,{})})})]},f={args:{label:"Email Address",placeholder:"your.email@example.com",helperText:"We will never share your email.",type:"email"}},y={args:{label:"Full Name",defaultValue:"John Doe",helperText:"Your name as it appears on your ID."}},b={args:{label:"Password",placeholder:"Enter your password",helperText:"Password must be at least 8 characters.",error:!0,errorMessage:"Password is too short. (Min 8 characters)",type:"password"}},x={args:{label:"Disabled Field",placeholder:"This field is disabled",defaultValue:"Cannot edit",disabled:!0}},I={args:{placeholder:"Search..."}},w={args:{label:"Email",placeholder:"your.email@example.com",leading:t.jsx(ee,{}),type:"email"}},S={args:{label:"Password",placeholder:"Enter password",trailing:t.jsx(te,{}),type:"password"}},T={args:{label:"Search Query",placeholder:"Search courses, topics...",leading:t.jsx(re,{}),trailing:t.jsx(Q,{variant:"ghost",size:"sm",style:{padding:"4px 8px"},children:"Clear"})}},E={args:{label:"Price",placeholder:"0.00",leading:t.jsx(ae,{}),trailing:t.jsx("span",{style:{fontSize:r.typography.bodySmall.fontSize,color:r.colors.neutral[50]},children:"EUR"}),type:"number"}},C={render:e=>{const[c,o]=n.useState(""),[s,l]=n.useState(!1),[i,a]=n.useState(""),u=h=>{const d=h.target.value;o(d),d.length>0&&d.length<5?(l(!0),a("Input must be at least 5 characters.")):(l(!1),a("")),e.onChange?.(h)};return t.jsx(z,{...e,label:"Controlled Input (Min 5 Chars)",placeholder:"Type something...",value:c,onChange:u,error:s,errorMessage:i,helperText:s?"":"Type to see validation. (Min 5 characters)"})},args:{label:"Controlled Input",placeholder:"Type here...",type:"text"}},$={args:{label:"Age",placeholder:"Enter your age",type:"number",min:0,max:120,step:1,helperText:"Enter a number between 0 and 120."}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    placeholder: 'your.email@example.com',
    helperText: 'We will never share your email.',
    type: 'email'
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Full Name',
    defaultValue: 'John Doe',
    helperText: 'Your name as it appears on your ID.'
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    helperText: 'Password must be at least 8 characters.',
    error: true,
    errorMessage: 'Password is too short. (Min 8 characters)',
    type: 'password'
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Field',
    placeholder: 'This field is disabled',
    defaultValue: 'Cannot edit',
    disabled: true
  }
}`,...x.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...'
  }
}`,...I.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'your.email@example.com',
    leading: <MailIcon />,
    type: 'email'
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    trailing: <LockIcon />,
    type: 'password'
  }
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search Query',
    placeholder: 'Search courses, topics...',
    leading: <SearchIcon />,
    trailing: <Button variant="ghost" size="sm" style={{
      padding: '4px 8px'
    }}>Clear</Button> // Example trailing button
  }
}`,...T.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Age',
    placeholder: 'Enter your age',
    type: 'number',
    min: 0,
    max: 120,
    step: 1,
    helperText: 'Enter a number between 0 and 120.'
  }
}`,...$.parameters?.docs?.source}}};const pe=["Default","WithDefaultValue","WithError","Disabled","BareInput","WithLeadingIcon","WithTrailingIcon","WithAdornments","WithCurrency","InteractiveValidation","NumberInput"];export{I as BareInput,f as Default,x as Disabled,C as InteractiveValidation,$ as NumberInput,T as WithAdornments,E as WithCurrency,y as WithDefaultValue,b as WithError,w as WithLeadingIcon,S as WithTrailingIcon,pe as __namedExportsOrder,de as default};
