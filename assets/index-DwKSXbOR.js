import{r as o,j as h}from"./iframe-XJf-RO9W.js";import{s as f}from"./emotion-styled.browser.esm-Zt9Xnlbb.js";import{c as D}from"./emotion-react.browser.esm-DE_3pz7Q.js";const A=f.li`
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
`,S=({children:e,value:y,isSelected:m=!1,isHighlighted:b=!1,onOptionSelect:l,onClick:i,...a})=>{const w=x=>{a.disabled||(l?.(y),i?.(x))};return h.jsx(A,{role:"option","aria-selected":m,isSelected:m,isHighlighted:b,onClick:w,...a,children:e})},z=f.div`
  position: relative;
  /*
    Use inline-flex to make the container shrink-wrap its content by default.
    This allows it to expand to fit the text length of the selected option.
    It will still respect explicit width/max-width set by a parent component
    or directly via style/className on the Select component itself.
  */
  display: inline-flex;
  font-family: ${e=>e.theme.typography.fontFamily};
  /* Removed max-width: 300px; to allow content-based expansion */
`,P=f.div`
  display: flex;
  justify-content: space-between; /* Pushes content and arrow apart */
  align-items: center;
  width: 100%; /* Ensures trigger takes full width of its inline-flex container */
  height: 48px; /* Standard input height */
  border: 1px solid ${e=>e.theme.colors.border.default};
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: ${e=>e.theme.colors.background.surface};
  color: ${e=>e.theme.colors.text.default};
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;

  padding: 0 ${e=>e.theme.spacing.lg} 0 ${e=>e.theme.spacing.lg}; /* Consistent padding on both sides */


  &:hover {
    border-color: ${e=>e.theme.colors.border.strong};
  }

  &:focus {
    border-color: ${e=>e.theme.colors.border.focus};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary[90]};
  }

  ${e=>e.disabled&&D`
      background-color: ${e.theme.colors.neutral[95]};
      color: ${e.theme.colors.neutral[60]};
      cursor: not-allowed;
      border-color: ${e.theme.colors.neutral[80]};
      &:hover {
        border-color: ${e.theme.colors.neutral[80]};
      }
    `}

  span {
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${e=>e.theme.typography.body.fontSize};
    color: inherit;
  }
`,V=f.span`
  transition: transform 0.2s ease-in-out;
  transform: rotate(${e=>e.isOpen?"180deg":"0deg"});
  font-size: ${e=>e.theme.typography.caption.fontSize}; /* Match caption font size for consistency */
  color: ${e=>e.theme.colors.text.default};
  display: flex; /* Ensures it respects padding and flex alignment */
  align-items: center;
  justify-content: center;
`,j=f.ul`
  position: absolute;
  top: 100%; /* Position below the trigger */
  left: 0;
  width: 100%; /* Dropdown should always match the trigger's width */
  background-color: ${e=>e.theme.colors.background.surface};
  border: 1px solid ${e=>e.theme.colors.border.default};
  border-radius: ${e=>e.theme.borderRadius.md};
  box-shadow: ${e=>e.theme.shadows.md};
  max-height: 200px;
  overflow-y: auto;
  z-index: 100; /* Ensure it appears above other content */
  list-style: none;
  padding: ${e=>e.theme.spacing.xs} 0;
  margin-top: ${e=>e.theme.spacing.xs}; /* Small gap between trigger and dropdown */

  /* Hide scrollbar for Chrome, Safari, and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: none; /* Firefox */

  /* Hide scrollbar for IE and Edge */
  -ms-overflow-style: none; /* IE and Edge */
`,H=({value:e,defaultValue:y,onValueChange:m,placeholder:b,disabled:l=!1,children:i,id:a,style:w,...x})=>{const[n,c]=o.useState(!1),[E,C]=o.useState(e!==void 0?e:y),[s,p]=o.useState(E),g=o.useRef(null),v=o.useRef(null),d=e!==void 0?e:E,q=o.Children.toArray(i).find(t=>o.isValidElement(t)&&t.props.value===d)?.props.children||b,$=o.useCallback(t=>{l||(C(t),m?.(t),c(!1),p(t))},[m,l]),k=o.useCallback(()=>{if(!l){if(c(t=>!t),!n&&d)p(d);else if(!n&&!d&&o.Children.toArray(i).length>0){const t=o.Children.toArray(i).find(r=>o.isValidElement(r)&&!r.props.disabled);p(t?.props.value)}}},[l,n,d,i]);o.useEffect(()=>{const t=r=>{g.current&&!g.current.contains(r.target)&&c(!1)};return n?document.addEventListener("mousedown",t):document.removeEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[n]);const I=o.useCallback(t=>{const r=o.Children.toArray(i).filter(u=>o.isValidElement(u)&&!u.props.disabled);if(r.length===0)return;const O=r.findIndex(u=>u.props.value===s);switch(t.key){case"ArrowDown":t.preventDefault(),c(!0),p(r[(O+1)%r.length]?.props.value);break;case"ArrowUp":t.preventDefault(),c(!0),p(r[(O-1+r.length)%r.length]?.props.value);break;case"Enter":case" ":t.preventDefault(),n&&s?$(s):n||k();break;case"Escape":n&&(t.preventDefault(),c(!1),g.current?.focus());break;case"Tab":n&&c(!1);break;default:if(!n&&/^[a-zA-Z0-9]$/.test(t.key)){const u=t.key.toLowerCase(),R=r.find(T=>typeof T.props.children=="string"&&T.props.children.toLowerCase().startsWith(u));R&&(p(R.props.value),c(!0))}break}},[i,n,s,$,k]);return o.useEffect(()=>{n&&v.current&&s&&v.current.querySelector(`#${a||"select"}-option-${s}`)?.scrollIntoView({block:"nearest"})},[n,s,a]),h.jsxs(z,{ref:g,style:w,...x,children:[h.jsxs(P,{role:"combobox","aria-haspopup":"listbox","aria-expanded":n,"aria-controls":n?`${a||"select"}-listbox`:void 0,"aria-labelledby":a?`${a}-label`:void 0,onClick:k,onKeyDown:I,tabIndex:l?-1:0,isOpen:n,disabled:l,children:[h.jsx("span",{children:q}),h.jsx(V,{isOpen:n,children:"▼"})," "]}),n&&h.jsx(j,{ref:v,role:"listbox",id:`${a||"select"}-listbox`,"aria-activedescendant":s?`${a||"select"}-option-${s}`:void 0,tabIndex:-1,children:o.Children.map(i,t=>o.isValidElement(t)&&t.type===S?o.cloneElement(t,{isSelected:t.props.value===d,isHighlighted:t.props.value===s||d===void 0&&t.props.value===o.Children.toArray(i).find(r=>o.isValidElement(r)&&r.type===S)?.props.value,onOptionSelect:$,id:`${a||"select"}-option-${t.props.value}`}):(console.warn("Select expects only Option components as children."),null))})]})};S.__docgenInfo={description:"An individual selectable item within a `Select` component's dropdown in the AscendUCore Design System.\nIt displays content and handles selection/highlighting states.",methods:[],displayName:"Option",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be rendered inside the option (e.g., text, icon)."},disabled:{required:!1,tsType:{name:"boolean"},description:"If true, the option will be disabled."},value:{required:!0,tsType:{name:"string"},description:"The unique value associated with this option."},isSelected:{required:!1,tsType:{name:"boolean"},description:"Indicates if this option is currently selected. Managed by the parent Select.",defaultValue:{value:"false",computed:!1}},isHighlighted:{required:!1,tsType:{name:"boolean"},description:`Indicates if this option is currently highlighted (e.g., by keyboard navigation).
Managed by the parent Select.`,defaultValue:{value:"false",computed:!1}},onOptionSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback function when the option is clicked. Managed by the parent Select.\nThis prop is renamed from `onSelect` to `onOptionSelect` to avoid type conflicts with\n`React.LiHTMLAttributes`.\n@param value The value of the clicked option."},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};H.__docgenInfo={description:"",methods:[],displayName:"Select",props:{value:{required:!1,tsType:{name:"string"},description:"The current selected value of the select. Makes it a controlled component."},defaultValue:{required:!1,tsType:{name:"string"},description:"The initial selected value of the select. Makes it an uncontrolled component."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:`Callback function when the selected value changes.
@param value The new selected value.`},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text to display when no value is selected."},disabled:{required:!1,tsType:{name:"boolean"},description:`If true, the select will be disabled.
@default false`,defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"The unique ID for the select component, used for accessibility (aria-labelledby, etc.)."},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles for the outer container."},children:{required:!0,tsType:{name:"union",raw:"React.ReactElement<OptionProps> | React.ReactElement<OptionProps>[]",elements:[{name:"ReactReactElement",raw:"React.ReactElement<OptionProps>",elements:[{name:"OptionProps"}]},{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<OptionProps>",elements:[{name:"OptionProps"}]}],raw:"React.ReactElement<OptionProps>[]"}]},description:"Children should be `Option` components."}}};export{S as O,H as S};
