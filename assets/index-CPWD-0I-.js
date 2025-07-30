import{r,j as a}from"./iframe-DGiRyBXK.js";import{c as d}from"./emotion-styled-base.browser.esm-DOJJeMjc.js";import{c as o}from"./emotion-react.browser.esm-CRTluIfQ.js";const y=d("div",{target:"ejfmi1m3"})({name:"1rc7j4s",styles:"display:flex;flex-direction:row;height:100%;width:100%;overflow:hidden;position:relative"}),S=({children:e,...n})=>a.jsx(y,{...n,children:e}),w=d("div",{target:"ejfmi1m2"})("position:absolute;top:0;bottom:0;width:",e=>e.width,";background-color:",e=>e.theme.colors.background.surface,";box-shadow:",e=>e.theme.shadows.lg,";z-index:100;transition:transform 0.3s ease-in-out;overflow-y:auto;flex-shrink:0;",e=>e.position==="start"?o("left:0;transform:translateX(",e.isOpen?"0":"-100%",");",""):o("right:0;transform:translateX(",e.isOpen?"0":"100%",");",""),e=>e.mode==="side"&&o("position:relative;transform:none;margin-left:",e.position==="start"&&!e.isOpen?`-${e.width}`:"0",";margin-right:",e.position==="end"&&!e.isOpen?`-${e.width}`:"0",";transition:margin-left 0.3s ease-in-out,margin-right 0.3s ease-in-out;",""),";"),b=d("div",{target:"ejfmi1m1"})("position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(0, 0, 0, 0.6);z-index:99;opacity:",e=>e.isOpen?1:0,";transition:opacity 0.3s ease-in-out;pointer-events:",e=>e.isOpen?"auto":"none",";"),T=({children:e,open:n,onOpenChange:i,position:l="start",mode:t="side",width:c="280px",...m})=>{const[v,u]=r.useState(!1),s=n!==void 0?n:v,h=r.useRef(null);r.useEffect(()=>{const p=g=>{t==="over"&&h.current&&!h.current.contains(g.target)&&(n===void 0&&u(!1),i?.(!1))};return s?document.addEventListener("mousedown",p):document.removeEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)}},[s,t,n,i]);const f=r.useCallback(()=>{t==="over"&&(n===void 0&&u(!1),i?.(!1))},[t,n,i]);return a.jsxs(a.Fragment,{children:[t==="over"&&a.jsx(b,{isOpen:s,onClick:f}),a.jsx(w,{ref:h,isOpen:s,position:l,mode:t,width:c,...m,children:e})]})},E=d("div",{target:"ejfmi1m0"})("flex-grow:1;overflow-y:auto;transition:margin-left 0.3s ease-in-out,margin-right 0.3s ease-in-out;padding:",e=>e.theme.spacing.lg,";",e=>e.sidenavMode==="side"&&e.isSidenavOpen&&e.sidenavPosition==="start"&&o("margin-left:",e.sidenavWidth,";","")," ",e=>e.sidenavMode==="side"&&e.isSidenavOpen&&e.sidenavPosition==="end"&&o("margin-right:",e.sidenavWidth,";",""),";"),N=({children:e,sidenavWidth:n="280px",sidenavPosition:i="start",sidenavMode:l="side",isSidenavOpen:t=!1,...c})=>a.jsx(E,{sidenavWidth:n,sidenavPosition:i,sidenavMode:l,isSidenavOpen:t,...c,children:e});S.__docgenInfo={description:`The **SidenavContainer** component is a layout wrapper specifically designed
to house a \`Sidenav\` and its associated main content (\`SidenavContent\`).
It establishes the necessary flexbox context to correctly position the sidenav
and manage content flow, whether the sidenav is in 'side' or 'over' mode.

\`\`\`typescript
import { SidenavContainer } from "@activityeducation/component-library";
\`\`\`

## Justification
This container is crucial for implementing a consistent and responsive side
navigation pattern. By providing a dedicated layout context, it simplifies
the positioning and animation of the sidenav, ensuring it integrates
seamlessly with the main application content. It manages overflow and
relative positioning, preventing layout shifts and ensuring a smooth user
experience when the sidenav opens or closes.

## Acceptance Criteria
- **GIVEN** \`SidenavContainer\` is rendered, **THEN** it should establish a
flex row layout for its children.
- **GIVEN** \`Sidenav\` and \`SidenavContent\` are placed inside, **THEN** it
should correctly manage their layout and overflow.
- **GIVEN** the container, **THEN** it should take up the full height and
width of its parent to provide a consistent layout area.

## Example & Props`,methods:[],displayName:"SidenavContainer",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the Sidenav container. Typically includes the Sidenav and the main content."},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};T.__docgenInfo={description:`The **Sidenav** component provides a flexible and customizable side navigation panel.
It can be configured to appear from the 'start' (left) or 'end' (right) of the screen,
and operate in 'over' mode (overlaying the main content with a scrim) or 'side' mode
(pushing the main content to make space). The Sidenav is typically used for primary
navigation, secondary content, or temporary panels.

It should be rendered as a direct child within a \`SidenavContainer\` to ensure proper layout.

\`\`\`typescript
import { Sidenav } from "@activityeducation/component-library";
\`\`\`

## Justification
A \`Sidenav\` is a common UI pattern for organizing a large number of navigation links
or secondary content without cluttering the main screen. This component ensures a
consistent and accessible implementation of side navigation across the application.
Its configurable modes and positions provide flexibility to adapt to different
design requirements (e.g., persistent sidebars on desktop vs. temporary overlays on mobile).
The built-in scrim and click-outside-to-close behavior enhance user experience
for overlay modes.

## Acceptance Criteria
- **GIVEN** the \`Sidenav\` is rendered, **THEN** it should display its \`children\`
content within a panel.
- **GIVEN** the \`open\` prop is true, **THEN** the sidenav should be visible;
otherwise, it should be hidden.
- **WHEN** the sidenav's open state changes (e.g., by user interaction or prop update),
**THEN** the \`onOpenChange\` callback should be triggered with the new state.
- **GIVEN** \`position\` is 'start' or 'end', **THEN** the sidenav should appear
on the left or right side of the screen, respectively.
- **GIVEN** \`mode\` is 'over', **THEN** the sidenav should overlay the content
and display a transparent scrim behind it. Clicking the scrim should close the sidenav.
- **GIVEN** \`mode\` is 'side', **THEN** the sidenav should push the main content
to make space for itself, without a scrim.
- **GIVEN** \`width\` is specified, **THEN** the sidenav should render at that width
when open.

## Example & Props`,methods:[],displayName:"Sidenav",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be rendered inside the Sidenav."},open:{required:!1,tsType:{name:"boolean"},description:"Controls whether the sidenav is open or closed (controlled component)."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:`Callback function that is called when the sidenav's open state changes.
Provides the new open state (true for open, false for closed).`},position:{required:!1,tsType:{name:"union",raw:"'start' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:`The position of the sidenav ('start' for left, 'end' for right).
@default 'start'`,defaultValue:{value:"'start'",computed:!1}},mode:{required:!1,tsType:{name:"union",raw:"'over' | 'side'",elements:[{name:"literal",value:"'over'"},{name:"literal",value:"'side'"}]},description:`The mode of the sidenav ('over' to overlay content, 'side' to push content).
@default 'side'`,defaultValue:{value:"'side'",computed:!1}},width:{required:!1,tsType:{name:"string"},description:`The width of the sidenav when open.
@default '280px'`,defaultValue:{value:"'280px'",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles for the sidenav panel."}}};N.__docgenInfo={description:`The **SidenavContent** component is a companion to the \`Sidenav\` component,
designed to wrap the main content area of your application. When used within
a \`SidenavContainer\`, it intelligently adjusts its margins to accommodate
the \`Sidenav\` when it is in 'side' mode, ensuring that the main content
is pushed rather than overlaid.

\`\`\`typescript
import { SidenavContent } from "@activityeducation/component-library";
\`\`\`

## Justification
This component is crucial for creating responsive layouts that adapt to the
presence of a side navigation. By automatically managing margins based on the
sidenav's state and mode, it simplifies the complex CSS required for such
layouts, preventing content overlap and ensuring a smooth user experience.
It promotes a clear separation of concerns between navigation and main content.

## Acceptance Criteria
- **GIVEN** \`SidenavContent\` is rendered within a \`SidenavContainer\`, **THEN**
it should occupy the remaining space in the flex layout.
- **GIVEN** the \`sidenavMode\` is 'side' and \`isSidenavOpen\` is true, **THEN**
the content should be pushed by the \`sidenavWidth\` from the \`sidenavPosition\`
(left or right).
- **GIVEN** the \`sidenavMode\` is 'over', **THEN** the content's margins should
not be affected by the sidenav's open state.
- **GIVEN** the content is long, **THEN** it should be vertically scrollable.
- **WHEN** the sidenav's open state changes, **THEN** the content's margin
should transition smoothly.

## Example & Props`,methods:[],displayName:"SidenavContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main content of the application."},sidenavWidth:{required:!1,tsType:{name:"string"},description:`The width of the Sidenav. This is crucial for 'side' mode to correctly
calculate the content's offset.`,defaultValue:{value:"'280px'",computed:!1}},sidenavPosition:{required:!1,tsType:{name:"union",raw:"'start' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:"The position of the Sidenav.",defaultValue:{value:"'start'",computed:!1}},sidenavMode:{required:!1,tsType:{name:"union",raw:"'over' | 'side'",elements:[{name:"literal",value:"'over'"},{name:"literal",value:"'side'"}]},description:"The mode of the Sidenav.",defaultValue:{value:"'side'",computed:!1}},isSidenavOpen:{required:!1,tsType:{name:"boolean"},description:"Whether the Sidenav is open.",defaultValue:{value:"false",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};export{T as S,S as a,N as b};
