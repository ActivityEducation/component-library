import{r as i,j as r,t as x}from"./iframe-DswsxQhr.js";import{s as m}from"./emotion-styled.browser.esm-Yzw7CN3j.js";import{I as R}from"./index-DZoBe0um.js";const M=m.button`
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
`,k=m.div`
  display: flex;
  align-items: center;
  margin-right: ${e=>e.theme.spacing.sm};
  flex-shrink: 0; // Prevent leading content from shrinking
  
  // Ensure icons within leading content inherit color or have default
  & > .fa-solid, & > .fa-regular, & > .fa-brands, & > svg, & > img {
    color: ${e=>e.theme.colors.neutral[50]}; /* Default icon color */
  }
`,T=m.div`
  flex-grow: 1; // Allows main content to take available space
`,E=m.div`
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
`,w=({children:e,leading:u,trailing:o,...s})=>{const p=a=>typeof a=="string"?r.jsx(R,{name:a,size:"md",color:x.colors.neutral[50]}):a;return r.jsxs(M,{role:"menuitem",...s,children:[u&&r.jsx(k,{children:p(u)}),r.jsx(T,{children:e}),o&&r.jsx(E,{children:p(o)})]})},$=m.div`
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
`,C=({trigger:e,children:u,open:o,onOpenChange:s,...p})=>{const[a,h]=i.useState(!1),c=o!==void 0?o:a,l=i.useRef(null),d=i.useRef(null),f=()=>{if(d.current&&l.current){const t=d.current.getBoundingClientRect(),n=l.current;n.style.top=`${t.bottom+window.scrollY+8}px`,n.style.left=`${t.left+window.scrollX}px`;const v=window.innerWidth;t.left+n.offsetWidth>v&&(n.style.left=`${t.right+window.scrollX-n.offsetWidth}px`)}};i.useEffect(()=>{if(c){f(),window.addEventListener("resize",f);const t=setTimeout(()=>{document.addEventListener("mousedown",g)},0);return()=>{window.removeEventListener("resize",f),document.removeEventListener("mousedown",g),clearTimeout(t)}}else document.removeEventListener("mousedown",g),window.removeEventListener("resize",f)},[c]);const g=t=>{l.current&&!l.current.contains(t.target)&&d.current&&!d.current.contains(t.target)&&(o===void 0&&h(!1),s?.(!1))},y=()=>{const t=!c;o===void 0&&h(t),s?.(t)},b=i.cloneElement(e,{ref:t=>{d.current=t;const{ref:n}=e;typeof n=="function"?n(t):n&&typeof n=="object"&&(n.current=t)},onClick:t=>{y(),typeof e.props.onClick=="function"&&e.props.onClick(t)},"aria-haspopup":"menu","aria-expanded":c});return r.jsxs(r.Fragment,{children:[b,c&&r.jsx($,{ref:l,role:"menu",...p,children:i.Children.map(u,t=>i.isValidElement(t)&&t.type===w?i.cloneElement(t,{onClick:n=>{o===void 0&&h(!1),s?.(!1),typeof t.props.onClick=="function"&&t.props.onClick(n)}}):(console.warn("Menu expects only MenuItem components as children."),t))})]})};w.__docgenInfo={description:"An individual, clickable option within a `Menu` component in the AscendUCore Design System.\nSupports leading and trailing content (including Font Awesome icons, SVG URLs, inline SVGs),\nand integrates with the theme for consistent styling.",methods:[],displayName:"MenuItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be rendered inside the menu item (e.g., text, icon)."},leading:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Content to be displayed at the leading (left) side of the menu item,
typically an icon. Can be a string (Font Awesome class) or a ReactNode.`},trailing:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Content to be displayed at the trailing (right) side of the menu item,
typically a secondary action or accelerator text. Can be a string (Font Awesome class)
or a ReactNode.`},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};C.__docgenInfo={description:"A Menu component for the AscendUCore Design System.\nIt displays a list of `MenuItem` components when triggered, and handles\nopen/close state, basic positioning relative to the trigger, and click-outside-to-close behavior.",methods:[],displayName:"Menu",props:{trigger:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement<React.HTMLAttributes<HTMLElement>>",elements:[{name:"ReactHTMLAttributes",raw:"React.HTMLAttributes<HTMLElement>",elements:[{name:"HTMLElement"}]}]},description:`The element that triggers the menu to open.
This component will be cloned, and an onClick handler will be added to it.
The trigger is typed to accept common HTML attributes including ref and onClick.`},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The `MenuItem` components to be rendered within the menu.\nOnly `MenuItem` children are expected."},open:{required:!1,tsType:{name:"boolean"},description:"If true, the menu is open. Use this for controlled behavior."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:`Callback function that is called when the menu's open state changes.
Provides the new open state (true for open, false for closed).`},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles for the menu container."}}};export{C as M,w as a};
