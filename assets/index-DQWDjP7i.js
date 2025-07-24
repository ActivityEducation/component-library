import{j as t,t as d}from"./iframe-qfGYkdpq.js";import{s as o}from"./emotion-styled.browser.esm-Dr63JBGY.js";import{c as m}from"./emotion-react.browser.esm-B3bQ_QJr.js";import{I as u}from"./index-DDHYf1aT.js";const p=o.li`
  display: flex;
  align-items: center;
  padding: ${e=>e.theme.spacing.md} ${e=>e.theme.spacing.lg};
  border-bottom: 1px solid ${e=>e.theme.colors.border.default};
  background-color: ${e=>e.theme.colors.background.surface};
  font-family: ${e=>e.theme.typography.fontFamily};
  font-size: ${e=>e.theme.typography.body.fontSize};
  color: ${e=>e.theme.colors.text.default};
  transition: ${e=>e.theme.transitions.fast};

  &:last-child {
    border-bottom: none; // No border after the last item
  }

  // Interactive state
  ${e=>e.interactive&&m`
      cursor: pointer;
      &:hover {
        background-color: ${e.theme.colors.neutral[95]}; // Light hover background
      }
    `}

  // Disabled state
  ${e=>e.disabled&&m`
      opacity: 0.6;
      cursor: not-allowed;
      background-color: ${e.theme.colors.neutral[98]}; // Slightly darker disabled background
      color: ${e.theme.colors.neutral[50]};
      ${e.interactive&&"pointer-events: none;"} // Disable pointer events if interactive
    `}
`,g=o.div`
  display: flex;
  align-items: center;
  margin-right: ${e=>e.theme.spacing.md};
  flex-shrink: 0; // Prevent leading content from shrinking
  
  // Ensure icons within leading content inherit color or have default
  & > .fa-solid, & > .fa-regular, & > .fa-brands, & > svg, & > img {
    color: ${e=>e.theme.colors.neutral[50]}; /* Default icon color */
  }
`,y=o.div`
  flex-grow: 1; // Allows main content to take available space
  display: flex;
  flex-direction: column;
  justify-content: center;
`,b=o.div`
  display: flex;
  align-items: center;
  margin-left: ${e=>e.theme.spacing.md};
  flex-shrink: 0; // Prevent trailing content from shrinking
  
  // Ensure icons within trailing content inherit color or have default
  & > .fa-solid, & > .fa-regular, & > .fa-brands, & > svg, & > img {
    color: ${e=>e.theme.colors.neutral[50]}; /* Default icon color */
  }
`,v=({children:e,leading:i,trailing:r,interactive:s=!1,disabled:a=!1,onClick:l,...f})=>{const h=n=>{s&&!a&&l&&l(n)},c=n=>typeof n=="string"?t.jsx(u,{name:n,size:"md",color:a?d.colors.neutral[50]:d.colors.neutral[50]}):n;return t.jsxs(p,{interactive:s,disabled:a,onClick:h,...f,children:[i&&t.jsx(g,{children:c(i)}),t.jsx(y,{children:e}),r&&t.jsx(b,{children:c(r)})]})},x=o.ul`
  // Base styles for the list container
  list-style: none; // Remove default list bullets
  margin: 0;
  padding: 0;
  background-color: ${e=>e.theme.colors.background.surface}; // Consistent background
  border-radius: ${e=>e.theme.borderRadius.md};             // Rounded corners
  box-shadow: ${e=>e.theme.shadows.sm};                     // Subtle shadow
  overflow: hidden; // Ensures rounded corners apply to children borders
  width: 100%;
  max-width: 500px; // Example max-width, can be overridden or made responsive
  box-sizing: border-box;
`,w=({children:e,...i})=>t.jsx(x,{...i,children:e});v.__docgenInfo={description:"An individual item component for use within a `List` in the AscendUCore Design System.\nIt supports leading and trailing content, interactive states, and integrates with the theme.\nLeading/trailing content can be Font Awesome icon names (strings), SVG URLs, inline SVGs, or any ReactNode.",methods:[],displayName:"ListItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main content to be rendered inside the list item."},leading:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Content to be displayed at the leading (left) side of the list item,
typically an icon, avatar, or checkbox. Can be a string (Font Awesome class)
or a ReactNode.`},trailing:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Content to be displayed at the trailing (right) side of the list item,
typically a secondary action, text, or badge. Can be a string (Font Awesome class)
or a ReactNode.`},interactive:{required:!1,tsType:{name:"boolean"},description:`If true, the list item will have a hover effect, indicating it's interactive.
@default false`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`If true, the list item will be disabled, preventing interaction.
@default false`,defaultValue:{value:"false",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};w.__docgenInfo={description:"A container component for displaying a collection of `ListItem` components\nin the AscendUCore Design System. It provides a consistent visual structure\nfor lists of content.",methods:[],displayName:"List",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The `ListItem` components to be rendered within the list.\nOnly `ListItem` children are expected."},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};export{w as L,v as a};
