import{j as o}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-C3uWE8cP.js";import{s as a}from"./index-0UhJA7dS.js";const c=a.span`
  display: inline-flex; /* Use inline-flex to allow it to sit inline with text */
  align-items: center; /* Center icon vertically */
  justify-content: center; /* Center icon horizontally */
  line-height: 1; /* Prevent extra space around icon */
  flex-shrink: 0; /* Prevent icon from shrinking in flex containers */
  vertical-align: middle; /* Align with text baseline */

  // Default color from theme or prop
  color: ${e=>e.color||e.theme.colors.neutral[50]};
  transition: color 0.2s ease-in-out;

  // Sizing based on prop: set font-size, and explicit width/height for consistent bounding box
  ${e=>{switch(e.size){case"sm":return`
          font-size: 16px;
          width: 16px;
          height: 16px;
        `;case"lg":return`
          font-size: 24px;
          width: 24px;
          height: 24px;
        `;case"xl":return`
          font-size: 32px;
          width: 32px;
          height: 32px;
        `;case"md":default:return`
          font-size: 20px;
          width: 20px;
          height: 20px;
        `}}}

  // Styles for direct SVG children (inline SVG)
  & > svg {
    width: 100%;
    height: 100%;
    fill: currentColor; /* Allows coloring SVG paths with the 'color' prop */
  }

  // Styles for img (SVG URLs)
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* Ensure SVG scales correctly within its container */
  }
`,d=({name:e,src:i,children:t,size:r="md",color:s,...l})=>{let n=null;return i?n=o.jsx("img",{src:i,alt:e||"icon"}):e?n=o.jsx("i",{className:e}):t?n=t:console.warn('Icon component rendered without a "name", "src", or "children" prop. No icon will be displayed.'),o.jsx(c,{size:r,color:s,"aria-hidden":!e&&!i&&!t?!0:void 0,...l,children:n})};d.__docgenInfo={description:`A reusable Icon component for the AscendUCore Design System.
It supports Font Awesome icon classes, SVG URLs, and inline SVG content.
Sizing and coloring are managed consistently through props and theme.
Ensure Font Awesome CSS is loaded globally for Font Awesome icons to render.`,methods:[],displayName:"Icon",props:{name:{required:!1,tsType:{name:"string"},description:`The Font Awesome icon class name (e.g., 'fa-solid fa-star', 'fa-brands fa-github').
Use this for Font Awesome icons.`},src:{required:!1,tsType:{name:"string"},description:"The URL of an SVG icon. When provided, the component will render an `<img>` tag.\nNote: Direct coloring via `color` prop might be limited for SVG URLs."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be rendered inside the icon, typically an inline SVG element.\nWhen provided, the `color` prop will apply as `currentColor`."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:`The size of the icon.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"The color of the icon, using theme colors or a custom CSS color string.\nApplies to Font Awesome icons and inline SVG children via `currentColor`.\n@default theme.colors.neutral['50']"},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};export{d as I};
