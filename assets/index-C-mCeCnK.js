import{r as o,j as s,t as E}from"./iframe-DGiRyBXK.js";import{c as u}from"./emotion-styled-base.browser.esm-DOJJeMjc.js";import{I as x}from"./index-Cln6lCsR.js";const N=u("button",{target:"eo291hd4"})("display:flex;align-items:center;width:100%;padding:",e=>e.theme.spacing.sm," ",e=>e.theme.spacing.md,";border:none;background-color:transparent;cursor:pointer;font-family:",e=>e.theme.typography.fontFamily,";font-size:",e=>e.theme.typography.body.fontSize,";color:",e=>e.theme.colors.text.default,";text-align:left;transition:",e=>e.theme.transitions.fast,";white-space:nowrap;&:hover:not(:disabled){background-color:",e=>e.theme.colors.neutral[95],";}&:focus-visible{outline:2px solid ",e=>e.theme.colors.primary[60],";outline-offset:-2px;}&:disabled{opacity:0.6;cursor:not-allowed;color:",e=>e.theme.colors.neutral[50],";background-color:transparent;}"),T=u("div",{target:"eo291hd3"})("display:flex;align-items:center;margin-right:",e=>e.theme.spacing.sm,";flex-shrink:0;&>.fa-solid,&>.fa-regular,&>.fa-brands,&>svg,&>img{color:",e=>e.theme.colors.neutral[50],";}"),I=u("div",{target:"eo291hd2"})({name:"1ff36h2",styles:"flex-grow:1"}),R=u("div",{target:"eo291hd1"})("display:flex;align-items:center;margin-left:",e=>e.theme.spacing.sm,";flex-shrink:0;color:",e=>e.theme.colors.neutral[50],";font-size:",e=>e.theme.typography.caption.fontSize,";&>.fa-solid,&>.fa-regular,&>.fa-brands,&>svg,&>img{color:",e=>e.theme.colors.neutral[50],";}"),y=({children:e,leading:m,trailing:i,...r})=>{const p=a=>typeof a=="string"?s.jsx(x,{name:a,size:"md",color:E.colors.neutral[50]}):a;return s.jsxs(N,{role:"menuitem",...r,children:[m&&s.jsx(T,{children:p(m)}),s.jsx(I,{children:e}),i&&s.jsx(R,{children:p(i)})]})},M=u("div",{target:"eo291hd0"})("position:absolute;background-color:",e=>e.theme.colors.background.surface,";border:1px solid ",e=>e.theme.colors.border.default,";border-radius:",e=>e.theme.borderRadius.md,";box-shadow:",e=>e.theme.shadows.lg,";min-width:180px;max-width:280px;z-index:1000;overflow:hidden;padding:",e=>e.theme.spacing.xs," 0;"),k=({trigger:e,children:m,open:i,onOpenChange:r,...p})=>{const[a,f]=o.useState(!1),c=i!==void 0?i:a,l=o.useRef(null),d=o.useRef(null),h=()=>{if(d.current&&l.current){const n=d.current.getBoundingClientRect(),t=l.current;t.style.top=`${n.bottom+window.scrollY+8}px`,t.style.left=`${n.left+window.scrollX}px`;const v=window.innerWidth;n.left+t.offsetWidth>v&&(t.style.left=`${n.right+window.scrollX-t.offsetWidth}px`)}};o.useEffect(()=>{if(c){h(),window.addEventListener("resize",h);const n=setTimeout(()=>{document.addEventListener("mousedown",g)},0);return()=>{window.removeEventListener("resize",h),document.removeEventListener("mousedown",g),clearTimeout(n)}}else document.removeEventListener("mousedown",g),window.removeEventListener("resize",h)},[c]);const g=n=>{l.current&&!l.current.contains(n.target)&&d.current&&!d.current.contains(n.target)&&(i===void 0&&f(!1),r?.(!1))},b=()=>{const n=!c;i===void 0&&f(n),r?.(n)},w=o.cloneElement(e,{ref:n=>{d.current=n;const{ref:t}=e;typeof t=="function"?t(n):t&&typeof t=="object"&&(t.current=n)},onClick:n=>{b(),typeof e.props.onClick=="function"&&e.props.onClick(n)},"aria-haspopup":"menu","aria-expanded":c});return s.jsxs(s.Fragment,{children:[w,c&&s.jsx(M,{ref:l,role:"menu",...p,children:o.Children.map(m,n=>o.isValidElement(n)&&n.type===y?o.cloneElement(n,{onClick:t=>{i===void 0&&f(!1),r?.(!1),typeof n.props.onClick=="function"&&n.props.onClick(t)}}):(console.warn("Menu expects only MenuItem components as children."),n))})]})};y.__docgenInfo={description:`An individual, clickable option within a \`Menu\` component in the AscendUCore Design System.
Supports leading and trailing content (including Font Awesome icons, SVG URLs, inline SVGs),
and integrates with the theme for consistent styling.

\`\`\`typescript
import { MenuItem } from "@activityeducation/component-library";
\`\`\`

## Justification
The \`MenuItem\` component is a fundamental building block for dropdown menus,
context menus, and navigation lists. It provides a standardized visual and
interactive representation for individual actions or links. By supporting
leading and trailing icons/content, it allows for rich and informative menu
items, improving user comprehension and navigation efficiency. Its consistent
styling and accessibility features ensure a uniform and inclusive experience
across all menu-driven interactions in the application.

## Acceptance Criteria
- **GIVEN** a \`MenuItem\` is rendered, **THEN** it should display its \`children\`
content.
- **GIVEN** \`leading\` content is provided, **THEN** it should be displayed
on the left side of the menu item.
- **GIVEN** \`trailing\` content is provided, **THEN** it should be displayed
on the right side of the menu item, typically for accelerators or secondary icons.
- **WHEN** the \`MenuItem\` is clicked (and not disabled), **THEN** its \`onClick\`
callback should be triggered.
- **GIVEN** \`disabled\` is true, **THEN** the menu item should be visually disabled
and not clickable.
- **WHEN** the \`MenuItem\` is focused via keyboard, **THEN** it should display a
clear focus indicator.

## Example & Props`,methods:[],displayName:"MenuItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be rendered inside the menu item (e.g., text, icon)."},leading:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Content to be displayed at the leading (left) side of the menu item,
typically an icon. Can be a string (Font Awesome class) or a ReactNode.`},trailing:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Content to be displayed at the trailing (right) side of the menu item,
typically a secondary action or accelerator text. Can be a string (Font Awesome class)
or a ReactNode.`},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};k.__docgenInfo={description:`The **Menu** component displays a list of \`MenuItem\` components when triggered,
providing a versatile solution for dropdowns, context menus, and overflow actions.
It handles its open/close state (both controlled and uncontrolled), basic positioning
relative to the trigger element, and the common "click outside to close" behavior.

\`\`\`typescript
import { Menu, MenuItem } from "@activityeducation/component-library";
\`\`\`

## Justification
A standardized \`Menu\` component is crucial for organizing actions and navigation
in a compact and accessible way. It prevents UI clutter by hiding options until
needed, improving the user experience for complex interfaces. By providing built-in
state management, positioning logic, and accessibility features (like ARIA attributes
and keyboard navigation), it simplifies the implementation of interactive menus
across the application, ensuring consistency and reducing development effort.
Its reliance on \`MenuItem\` children guarantees uniform styling for all menu options.

## Acceptance Criteria
- **GIVEN** the \`Menu\` is rendered with a \`trigger\` and \`MenuItem\` children,
**THEN** the menu should initially be closed.
- **WHEN** the \`trigger\` element is clicked, **THEN** the menu dropdown should
toggle its visibility.
- **GIVEN** \`open\` prop is true, **THEN** the menu should be visible; otherwise,
it should be hidden (controlled behavior).
- **WHEN** the menu is open and a click occurs outside the menu or its trigger,
**THEN** the menu should close.
- **WHEN** a \`MenuItem\` within the open menu is clicked, **THEN** the menu should close.
- **WHEN** the menu's open state changes, **THEN** the \`onOpenChange\` callback
should be triggered with the new state.
- **GIVEN** the menu is open, **THEN** it should be positioned correctly
relative to its trigger, with basic viewport collision detection.
- **GIVEN** the menu contains many items, **THEN** it should be vertically scrollable.
- **WHEN** the menu is open, **THEN** keyboard navigation (ArrowUp, ArrowDown, Enter, Escape)
should allow users to navigate and select menu items, and close the menu.

## Example & Props`,methods:[],displayName:"Menu",props:{trigger:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement<React.HTMLAttributes<HTMLElement>>",elements:[{name:"ReactHTMLAttributes",raw:"React.HTMLAttributes<HTMLElement>",elements:[{name:"HTMLElement"}]}]},description:`The element that triggers the menu to open.
This component will be cloned, and an onClick handler will be added to it.
The trigger is typed to accept common HTML attributes including ref and onClick.`},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The `MenuItem` components to be rendered within the menu.\nOnly `MenuItem` children are expected."},open:{required:!1,tsType:{name:"boolean"},description:"If true, the menu is open. Use this for controlled behavior."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:`Callback function that is called when the menu's open state changes.
Provides the new open state (true for open, false for closed).`},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles for the menu container."}}};export{k as M,y as a};
