import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./iframe-C3uWE8cP.js";import{s as f,t as g,T as E}from"./index-0UhJA7dS.js";import{I as O}from"./index-CPXLxjDA.js";import{B as d}from"./index-DgNSwxsC.js";const D=f.button`
  display: flex;
  align-items: center;
  width: 100%; // Take full width of its parent Menu
  padding: ${e=>e.theme.spacing.sm} ${e=>e.theme.spacing.md};
  border: none;
  background-color: transparent; // Default transparent background
  cursor: pointer;
  font-family: ${e=>e.theme.typography.fontFamily};
  font-size: ${e=>e.theme.typography.body.fontSize};
  color: ${e=>e.theme.colors.text.default};
  text-align: left; // Align text to the left
  transition: ${e=>e.theme.transitions.fast};
  white-space: nowrap; // Prevent text wrapping

  &:hover:not(:disabled) {
    background-color: ${e=>e.theme.colors.neutral[95]}; // Light hover background
  }

  &:focus-visible {
    outline: 2px solid ${e=>e.theme.colors.primary[60]};
    outline-offset: -2px;
  }

  // Disabled state
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    color: ${e=>e.theme.colors.neutral[50]};
    background-color: transparent; // No hover effect when disabled
  }
`,A=f.div`
  display: flex;
  align-items: center;
  margin-right: ${e=>e.theme.spacing.sm};
  flex-shrink: 0; // Prevent leading content from shrinking
  
  // Ensure icons within leading content inherit color or have default
  & > .fa-solid, & > .fa-regular, & > .fa-brands, & > svg, & > img {
    color: ${e=>e.theme.colors.neutral[50]}; /* Default icon color */
  }
`,$=f.div`
  flex-grow: 1; // Allows main content to take available space
`,N=f.div`
  display: flex;
  align-items: center;
  margin-left: ${e=>e.theme.spacing.sm};
  flex-shrink: 0; // Prevent trailing content from shrinking
  color: ${e=>e.theme.colors.neutral[50]}; // Default icon/text color
  font-size: ${e=>e.theme.typography.caption.fontSize}; // Smaller font for accelerators

  // Ensure icons within trailing content inherit color or have default
  & > .fa-solid, & > .fa-regular, & > .fa-brands, & > svg, & > img {
    color: ${e=>e.theme.colors.neutral[50]}; /* Default icon color */
  }
`,o=({children:e,leading:s,trailing:r,...l})=>{const c=u=>typeof u=="string"?t.jsx(O,{name:u,size:"md",color:g.colors.neutral[50]}):u;return t.jsxs(D,{role:"menuitem",...l,children:[s&&t.jsx(A,{children:c(s)}),t.jsx($,{children:e}),r&&t.jsx(N,{children:c(r)})]})},L=f.div`
  position: absolute; // Position absolutely relative to its positioning context
  background-color: ${e=>e.theme.colors.background.surface}; // Menu background
  border: 1px solid ${e=>e.theme.colors.border.default};    // Menu border
  border-radius: ${e=>e.theme.borderRadius.md};             // Rounded corners
  box-shadow: ${e=>e.theme.shadows.lg};                     // Prominent shadow
  min-width: 180px; // Minimum width for menu
  max-width: 280px; // Maximum width to prevent overly wide menus
  z-index: 1000; // Ensure menu appears above other content
  overflow: hidden; // Clip content if it overflows rounded corners
  padding: ${e=>e.theme.spacing.xs} 0; // Vertical padding, no horizontal
`,b=({trigger:e,children:s,open:r,onOpenChange:l,...c})=>{const[u,v]=a.useState(!1),p=r!==void 0?r:u,m=a.useRef(null),h=a.useRef(null),k=()=>{if(h.current&&m.current){const n=h.current.getBoundingClientRect(),i=m.current;i.style.top=`${n.bottom+window.scrollY+8}px`,i.style.left=`${n.left+window.scrollX}px`;const T=window.innerWidth;n.left+i.offsetWidth>T&&(i.style.left=`${n.right+window.scrollX-i.offsetWidth}px`)}};a.useEffect(()=>{if(p){k(),window.addEventListener("resize",k);const n=setTimeout(()=>{document.addEventListener("mousedown",R)},0);return()=>{window.removeEventListener("resize",k),document.removeEventListener("mousedown",R),clearTimeout(n)}}else document.removeEventListener("mousedown",R),window.removeEventListener("resize",k)},[p]);const R=n=>{m.current&&!m.current.contains(n.target)&&h.current&&!h.current.contains(n.target)&&(r===void 0&&v(!1),l?.(!1))},j=()=>{const n=!p;r===void 0&&v(n),l?.(n)},S=a.cloneElement(e,{ref:n=>{h.current=n;const{ref:i}=e;typeof i=="function"?i(n):i&&typeof i=="object"&&(i.current=n)},onClick:n=>{j(),typeof e.props.onClick=="function"&&e.props.onClick(n)},"aria-haspopup":"menu","aria-expanded":p});return t.jsxs(t.Fragment,{children:[S,p&&t.jsx(L,{ref:m,role:"menu",...c,children:a.Children.map(s,n=>a.isValidElement(n)&&n.type===o?a.cloneElement(n,{onClick:i=>{r===void 0&&v(!1),l?.(!1),typeof n.props.onClick=="function"&&n.props.onClick(i)}}):(console.warn("Menu expects only MenuItem components as children."),n))})]})};o.__docgenInfo={description:"An individual, clickable option within a `Menu` component in the AscendUCore Design System.\nSupports leading and trailing content (including Font Awesome icons, SVG URLs, inline SVGs),\nand integrates with the theme for consistent styling.",methods:[],displayName:"MenuItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be rendered inside the menu item (e.g., text, icon)."},leading:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Content to be displayed at the leading (left) side of the menu item,
typically an icon. Can be a string (Font Awesome class) or a ReactNode.`},trailing:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Content to be displayed at the trailing (right) side of the menu item,
typically a secondary action or accelerator text. Can be a string (Font Awesome class)
or a ReactNode.`},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};b.__docgenInfo={description:"A Menu component for the AscendUCore Design System.\nIt displays a list of `MenuItem` components when triggered, and handles\nopen/close state, basic positioning relative to the trigger, and click-outside-to-close behavior.",methods:[],displayName:"Menu",props:{trigger:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement<React.HTMLAttributes<HTMLElement>>",elements:[{name:"ReactHTMLAttributes",raw:"React.HTMLAttributes<HTMLElement>",elements:[{name:"HTMLElement"}]}]},description:`The element that triggers the menu to open.
This component will be cloned, and an onClick handler will be added to it.
The trigger is typed to accept common HTML attributes including ref and onClick.`},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The `MenuItem` components to be rendered within the menu.\nOnly `MenuItem` children are expected."},open:{required:!1,tsType:{name:"boolean"},description:"If true, the menu is open. Use this for controlled behavior."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:`Callback function that is called when the menu's open state changes.
Provides the new open state (true for open, false for closed).`},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles for the menu container."}}};const H={title:"Components/Menu",component:b,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{trigger:{control:!1},children:{control:!1},open:{control:"boolean",description:"If true, the menu is open (controlled)."},onOpenChange:{action:"openChange",description:"Callback function when the menu open state changes."}},decorators:[e=>t.jsx(E,{theme:g,children:t.jsx("div",{style:{padding:g.spacing.xl,backgroundColor:g.colors.background.default,minHeight:"200px",display:"flex",justifyContent:"center",alignItems:"flex-start"},children:t.jsx(e,{})})})]},C={args:{trigger:t.jsx(d,{variant:"primary",children:"Open Menu"}),children:t.jsxs(t.Fragment,{children:[t.jsx(o,{onClick:()=>alert("Option 1 clicked"),children:"Option 1"}),t.jsx(o,{onClick:()=>alert("Option 2 clicked"),children:"Option 2"}),t.jsx(o,{onClick:()=>alert("Option 3 clicked"),children:"Option 3"})]})}},x={args:{trigger:t.jsx(d,{variant:"secondary",children:"Actions"}),children:t.jsxs(t.Fragment,{children:[t.jsx(o,{leading:"fa-solid fa-plus",onClick:()=>alert("Add clicked"),children:"Add New"}),t.jsx(o,{leading:t.jsx(O,{name:"fa-solid fa-edit"}),onClick:()=>alert("Edit clicked"),children:"Edit Item"}),t.jsx(o,{leading:t.jsx(O,{name:"fa-solid fa-trash",color:g.colors.error[40]}),onClick:()=>alert("Delete clicked"),children:"Delete Item"})]})}},y={args:{trigger:t.jsx(d,{variant:"ghost",children:"File"}),children:t.jsxs(t.Fragment,{children:[t.jsx(o,{trailing:"Ctrl+S",onClick:()=>alert("Save clicked"),children:"Save"}),t.jsx(o,{trailing:"Ctrl+P",onClick:()=>alert("Print clicked"),children:"Print"}),t.jsx(o,{trailing:t.jsx(O,{name:"fa-solid fa-external-link-alt",size:"sm"}),onClick:()=>alert("Open in New Window clicked"),children:"Open in New Window"})]})}},M={args:{trigger:t.jsx(d,{variant:"primary",children:"More Options"}),children:t.jsxs(t.Fragment,{children:[t.jsx(o,{onClick:()=>alert("View Details clicked"),children:"View Details"}),t.jsx(o,{disabled:!0,onClick:()=>alert("This should not fire"),children:"Edit (Disabled)"}),t.jsx(o,{onClick:()=>alert("Share clicked"),children:"Share"}),t.jsx(o,{disabled:!0,onClick:()=>alert("This should not fire"),children:"Delete (Disabled)"})]})}},w={render:e=>{const[s,r]=a.useState(!1),l=c=>{r(c),e.onOpenChange?.(c)};return t.jsxs(b,{trigger:t.jsxs(d,{variant:"tertiary",children:["Controlled Menu (",s?"Open":"Closed",")"]}),open:s,onOpenChange:l,children:[t.jsx(o,{onClick:()=>alert("Controlled Option 1"),children:"Controlled Option 1"}),t.jsx(o,{onClick:()=>alert("Controlled Option 2"),children:"Controlled Option 2"})]})},args:{open:!1}},I={render:e=>t.jsx("div",{style:{position:"relative",width:"100%",display:"flex",justifyContent:"flex-end"},children:t.jsxs(b,{trigger:t.jsx(d,{variant:"primary",children:"Open Right Menu"}),children:[t.jsx(o,{onClick:()=>alert("Right Option 1"),children:"Right Option 1"}),t.jsx(o,{onClick:()=>alert("Right Option 2"),children:"Right Option 2"}),t.jsx(o,{onClick:()=>alert("Right Option 3"),children:"Right Option 3"})]})}),args:{},parameters:{layout:"padded"}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button variant="primary">Open Menu</Button>,
    children: <>
        <MenuItem onClick={() => alert('Option 1 clicked')}>Option 1</MenuItem>
        <MenuItem onClick={() => alert('Option 2 clicked')}>Option 2</MenuItem>
        <MenuItem onClick={() => alert('Option 3 clicked')}>Option 3</MenuItem>
      </>
  }
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button variant="secondary">Actions</Button>,
    children: <>
        <MenuItem leading="fa-solid fa-plus" onClick={() => alert('Add clicked')}>Add New</MenuItem>
        <MenuItem leading={<Icon name="fa-solid fa-edit" />} onClick={() => alert('Edit clicked')}>Edit Item</MenuItem>
        <MenuItem leading={<Icon name="fa-solid fa-trash" color={theme.colors.error['40']} />} onClick={() => alert('Delete clicked')}>Delete Item</MenuItem>
      </>
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button variant="ghost">File</Button>,
    children: <>
        <MenuItem trailing="Ctrl+S" onClick={() => alert('Save clicked')}>Save</MenuItem>
        <MenuItem trailing="Ctrl+P" onClick={() => alert('Print clicked')}>Print</MenuItem>
        <MenuItem trailing={<Icon name="fa-solid fa-external-link-alt" size="sm" />} onClick={() => alert('Open in New Window clicked')}>Open in New Window</MenuItem>
      </>
  }
}`,...y.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button variant="primary">More Options</Button>,
    children: <>
        <MenuItem onClick={() => alert('View Details clicked')}>View Details</MenuItem>
        <MenuItem disabled onClick={() => alert('This should not fire')}>Edit (Disabled)</MenuItem>
        <MenuItem onClick={() => alert('Share clicked')}>Share</MenuItem>
        <MenuItem disabled onClick={() => alert('This should not fire')}>Delete (Disabled)</MenuItem>
      </>
  }
}`,...M.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenChange = (newOpenState: boolean) => {
      setIsOpen(newOpenState);
      args.onOpenChange?.(newOpenState); // Log to Storybook actions
    };
    return <Menu trigger={<Button variant="tertiary">Controlled Menu ({isOpen ? 'Open' : 'Closed'})</Button>} open={isOpen} onOpenChange={handleOpenChange}>
        <MenuItem onClick={() => alert('Controlled Option 1')}>Controlled Option 1</MenuItem>
        <MenuItem onClick={() => alert('Controlled Option 2')}>Controlled Option 2</MenuItem>
      </Menu>;
  },
  args: {
    open: false
  }
}`,...w.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div style={{
      position: 'relative',
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end'
    }}>
        <Menu trigger={<Button variant="primary">Open Right Menu</Button>}>
          <MenuItem onClick={() => alert('Right Option 1')}>Right Option 1</MenuItem>
          <MenuItem onClick={() => alert('Right Option 2')}>Right Option 2</MenuItem>
          <MenuItem onClick={() => alert('Right Option 3')}>Right Option 3</MenuItem>
        </Menu>
      </div>;
  },
  args: {},
  parameters: {
    layout: 'padded' // Ensure enough padding for positioning
  }
}`,...I.parameters?.docs?.source}}};const V=["Default","WithIcons","WithAccelerators","WithDisabledItems","ControlledMenu","RightAlignedMenu"];export{w as ControlledMenu,C as Default,I as RightAlignedMenu,y as WithAccelerators,M as WithDisabledItems,x as WithIcons,V as __namedExportsOrder,H as default};
