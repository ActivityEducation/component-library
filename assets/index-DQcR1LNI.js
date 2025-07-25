import{r as a,j as d}from"./iframe-OEcLT8CW.js";import{s as u}from"./emotion-styled.browser.esm-CDovtSm7.js";const m=u.button`
  // Base styles for all tabs
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${e=>e.theme.spacing.md} ${e=>e.theme.spacing.lg};
  border: none;
  background-color: transparent; // Default transparent background
  cursor: pointer;
  font-family: ${e=>e.theme.typography.fontFamily};
  font-size: ${e=>e.theme.typography.body.fontSize};
  font-weight: ${e=>e.theme.typography.body.fontWeight};
  color: ${e=>e.theme.colors.text.default}; // Default text color
  transition: ${e=>e.theme.transitions.default}; // Smooth transitions
  position: relative; // For the active indicator line

  // Hover state for inactive tabs
  &:hover:not(:disabled) {
    color: ${e=>e.theme.colors.primary[40]}; // Primary color on hover
    background-color: ${e=>e.theme.colors.neutral[95]}; // Light background on hover
  }

  // Active state styling
  ${e=>e.isActive&&`
    color: ${e.theme.colors.primary[40]}; // Active tab text color
    font-weight: ${e.theme.typography.button.fontWeight}; // Bolder for active tab
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px; // Thickness of the active indicator line
      background-color: ${e.theme.colors.primary[40]}; // Primary color for indicator
      border-radius: ${e.theme.borderRadius.sm} ${e.theme.borderRadius.sm} 0 0; // Rounded top corners
    }
  `}

  // Disabled state styling
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    color: ${e=>e.theme.colors.neutral[50]};
  }
`,p=({children:e,value:n,isActive:o=!1,onTabSelect:r,onClick:i,...s})=>{const c=l=>{r?.(n),i?.(l)};return d.jsx(m,{isActive:o,onClick:c,...s,children:e})},b=u.div`
  // Base styles for the tab group container
  display: flex;
  border-bottom: 1px solid ${e=>e.theme.colors.border.default}; // Separator line below tabs
  background-color: ${e=>e.theme.colors.background.surface}; // Background for the tab bar
  border-radius: ${e=>e.theme.borderRadius.md} ${e=>e.theme.borderRadius.md} 0 0; // Rounded top corners
  overflow-x: auto; // Allow horizontal scrolling if tabs exceed width
  -webkit-overflow-scrolling: touch; // Smooth scrolling on iOS
  white-space: nowrap; // Prevent tabs from wrapping
  box-shadow: ${e=>e.theme.shadows.sm}; // Subtle shadow for depth
`,f=({children:e,defaultValue:n,value:o,onValueChange:r,...i})=>{const[s,c]=a.useState(o!==void 0?o:n),l=o!==void 0?o:s,h=t=>{o===void 0&&c(t),r?.(t)};return d.jsx(b,{role:"tablist",...i,children:a.Children.map(e,t=>a.isValidElement(t)&&t.type===p?a.cloneElement(t,{isActive:t.props.value===l,onTabSelect:h}):(console.warn("TabGroup expects only Tab components as children."),t))})};p.__docgenInfo={description:`A single Tab component for use within a TabGroup in the AscendUCore Design System.
Represents a clickable section with an active state indicator.`,methods:[],displayName:"Tab",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be rendered inside the tab (e.g., text, icon)."},value:{required:!0,tsType:{name:"string"},description:"A unique value associated with this tab, used by TabGroup to identify the active tab."},isActive:{required:!1,tsType:{name:"boolean"},description:"Indicates if this tab is currently active. Managed by the parent TabGroup.",defaultValue:{value:"false",computed:!1}},onTabSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback function when the tab is clicked. Managed by the parent TabGroup.\nThis prop is renamed from `onSelect` to `onTabSelect` to avoid type conflicts with\n`React.ButtonHTMLAttributes`.\n@param value The value of the clicked tab."},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};f.__docgenInfo={description:"A container component for managing a group of `Tab` components in the AscendUCore Design System.\nIt handles the active state of tabs, ensures consistent styling, and provides\na mechanism for changing the active tab. Can be used as a controlled or uncontrolled component.",methods:[],displayName:"TabGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The Tab components to be rendered within the group.\nOnly `Tab` children are expected."},defaultValue:{required:!1,tsType:{name:"string"},description:"The value of the tab that should be active by default.\nMust match the `value` prop of one of the `Tab` children."},value:{required:!1,tsType:{name:"string"},description:"The value of the currently active tab (controlled component).\nIf provided, `onValueChange` must also be provided."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback function that is called when the active tab changes.\nProvides the `value` of the newly active tab."},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};export{f as T,p as a};
