import{j as o}from"./iframe-Ar-X8pQt.js";import{c as a}from"./emotion-styled-base.browser.esm-B8HPte8b.js";const c=a("span",{target:"e1qksbum0"})("display:inline-flex;align-items:center;justify-content:center;line-height:1;flex-shrink:0;vertical-align:middle;color:",e=>e.color||e.theme.colors.neutral[50],";transition:color 0.2s ease-in-out;",e=>{switch(e.size){case"xs":return`
          font-size: 12px;
          width: 12px;
          height: 12px;
        `;case"sm":return`
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
        `;case"xxl":return`
          font-size: 46px;
          width: 46px;
          height: 46px;
        `;case"md":default:return`
          font-size: 20px;
          width: 20px;
          height: 20px;
        `}},"&>svg{width:100%;height:100%;fill:currentColor;}&>img{width:100%;height:100%;object-fit:contain;}"),d=({name:e,src:t,children:i,size:s="md",color:r,...l})=>{let n=null;return t?n=o.jsx("img",{src:t,alt:e||"icon"}):e?n=o.jsx("i",{className:e}):i?n=i:console.warn('Icon component rendered without a "name", "src", or "children" prop. No icon will be displayed.'),o.jsx(c,{size:s,color:r,"aria-hidden":!e&&!t&&!i?!0:void 0,...l,children:n})};d.__docgenInfo={description:`A reusable Icon component for the AscendUCore Design System.
It supports Font Awesome icon classes, SVG URLs, and inline SVG content.
Sizing and coloring are managed consistently through props and theme.
Ensure Font Awesome CSS is loaded globally for Font Awesome icons to render.`,methods:[],displayName:"Icon",props:{name:{required:!1,tsType:{name:"string"},description:`The Font Awesome icon class name (e.g., 'fa-solid fa-star', 'fa-brands fa-github').
Use this for Font Awesome icons.`},src:{required:!1,tsType:{name:"string"},description:"The URL of an SVG icon. When provided, the component will render an `<img>` tag.\nNote: Direct coloring via `color` prop might be limited for SVG URLs."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be rendered inside the icon, typically an inline SVG element.\nWhen provided, the `color` prop will apply as `currentColor`."},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:`The size of the icon.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"The color of the icon, using theme colors or a custom CSS color string.\nApplies to Font Awesome icons and inline SVG children via `currentColor`.\n@default theme.colors.neutral['50']"},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};export{d as I};
