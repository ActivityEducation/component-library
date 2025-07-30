import{j as t}from"./iframe-DGiRyBXK.js";import{c as l}from"./emotion-styled-base.browser.esm-DOJJeMjc.js";const c=l("span",{target:"e1qksbum0"})("display:inline-flex;align-items:center;justify-content:center;line-height:1;flex-shrink:0;vertical-align:middle;color:",e=>e.color||e.theme.colors.neutral[50],";transition:color 0.2s ease-in-out;",e=>{switch(e.size){case"xs":return`
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
        `}},"&>svg{width:100%;height:100%;fill:currentColor;}&>img{width:100%;height:100%;object-fit:contain;}"),d=({name:e,src:i,children:o,size:s="md",color:r,...a})=>{let n=null;return i?n=t.jsx("img",{src:i,alt:e||"icon"}):e?n=t.jsx("i",{className:e}):o?n=o:console.warn('Icon component rendered without a "name", "src", or "children" prop. No icon will be displayed.'),t.jsx(c,{size:s,color:r,"aria-hidden":!e&&!i&&!o?!0:void 0,...a,children:n})};d.__docgenInfo={description:"A reusable **Icon** component for the AscendUCore Design System.\nIt provides a flexible way to display icons, supporting Font Awesome icon classes,\nSVG URLs, and inline SVG content. Sizing and coloring are managed consistently\nthrough props and theme, making it a versatile utility for visual elements.\n\nIt's important to note that for Font Awesome icons to render correctly,\ntheir CSS library must be loaded globally in your project.\n\n```typescript\nimport { Icon } from \"@activityeducation/component-library\";\n```\n\n## Justification\nThe `Icon` component is fundamental for enhancing user interfaces with visual cues,\nimproving readability, and guiding user interaction. By providing a unified component\nfor various icon sources (Font Awesome, SVG URLs, inline SVG), it ensures consistency\nin size, color, and alignment across the entire application. This abstraction\nsimplifies icon management for developers, allowing them to easily swap icon types\nor adjust their appearance without modifying underlying HTML/SVG structures.\nIt contributes significantly to a cohesive and intuitive visual language.\n\n## Acceptance Criteria\n- **GIVEN** the `Icon` component is rendered, **THEN** it should display an icon\nbased on the `name`, `src`, or `children` prop.\n- **GIVEN** `name` (Font Awesome class) is provided, **THEN** it should render\nthe corresponding Font Awesome icon.\n- **GIVEN** `src` (SVG URL) is provided, **THEN** it should render an `<img>` tag\nwith the SVG as its source.\n- **GIVEN** `children` (inline SVG) is provided, **THEN** it should render the\ninline SVG content.\n- **GIVEN** `size` is set to 'xs', 'sm', 'md', 'lg', 'xl', or 'xxl', **THEN** the\nicon should render at the corresponding predefined dimensions.\n- **GIVEN** `color` is provided, **THEN** the icon's color should apply to Font Awesome\nicons and inline SVGs (via `currentColor`).\n- **WHEN** no `name`, `src`, or `children` prop is provided, **THEN** a console\nwarning should be issued, and no icon should be displayed.\n- **GIVEN** the icon is purely decorative (no `name`, `src`, or `children`), **THEN**\nit should have `aria-hidden=\"true\"` for accessibility.\n\n## Example & Props",methods:[],displayName:"Icon",props:{name:{required:!1,tsType:{name:"string"},description:`The Font Awesome icon class name (e.g., 'fa-solid fa-star', 'fa-brands fa-github').
Use this for Font Awesome icons.`},src:{required:!1,tsType:{name:"string"},description:"The URL of an SVG icon. When provided, the component will render an `<img>` tag.\nNote: Direct coloring via `color` prop might be limited for SVG URLs."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be rendered inside the icon, typically an inline SVG element.\nWhen provided, the `color` prop will apply as `currentColor`."},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:`The size of the icon.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"The color of the icon, using theme colors or a custom CSS color string.\nApplies to Font Awesome icons and inline SVG children via `currentColor`.\n@default theme.colors.neutral['50']"},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};export{d as I};
