import{r as c,t as R,j as F}from"./iframe-DGiRyBXK.js";import{c as C}from"./emotion-styled-base.browser.esm-DOJJeMjc.js";import{C as W}from"./index-yh91TgFT.js";const Y=C("span",{target:"eiyrqu71"})("position:relative;cursor:pointer;text-decoration:underline;text-decoration-style:dotted;text-decoration-color:",e=>e.theme.colors.primary[40],";color:",e=>e.theme.colors.primary[40],";font-weight:",e=>e.theme.typography.button.fontWeight,";transition:all 0.2s ease-in-out;display:inline-block;&:hover{color:",e=>e.theme.colors.primary[50],";text-decoration-color:",e=>e.theme.colors.primary[50],";}");var P={name:"x3koge",styles:"opacity:1;pointer-events:auto;transform:none"};const S=C("div",{target:"eiyrqu70"})("position:",e=>e.isFixed?"fixed":"absolute",";z-index:1001;pointer-events:none;opacity:0;transition:opacity 0.2s ease-in-out,transform 0.2s ease-in-out;top:",e=>e.top!==void 0?`${e.top}px`:"auto",";left:",e=>e.left!==void 0?`${e.left}px`:"auto",";right:",e=>e.right!==void 0?`${e.right}px`:"auto",";bottom:",e=>e.bottom!==void 0?`${e.bottom}px`:"auto",";transform:",e=>e.transform||"translateY(10px)",";",e=>e.isVisible&&P,"&>div{max-width:300px;min-width:180px;padding:",e=>e.theme.spacing.md,";box-shadow:",e=>e.theme.shadows.lg,";}"),X=({children:e,content:L,position:u="bottom",...H})=>{const[p,b]=c.useState(!1),[m,I]=c.useState({}),v=c.useRef(null),g=c.useRef(null),w=c.useRef(null),V=c.useCallback(()=>{w.current&&clearTimeout(w.current),b(!0)},[]),x=c.useCallback(()=>{w.current&&clearTimeout(w.current),w.current=setTimeout(()=>{b(!1)},100)},[]),h=c.useCallback(()=>{if(!v.current||!g.current)return;const t=v.current.getBoundingClientRect(),o=g.current.getBoundingClientRect(),y=window.innerWidth||document.documentElement.clientWidth,E=window.innerHeight||document.documentElement.clientHeight,a=window.scrollX||window.pageXOffset,s=window.scrollY||window.pageYOffset,f=parseFloat(R.spacing.sm);let i,n,T,k,d,N=!1,r=u;if(u.startsWith("fix-"))switch(N=!0,u){case"fix-top-left":i=0,n=0;break;case"fix-top-right":i=0,T=0;break;case"fix-bottom-left":k=0,n=0;break;case"fix-bottom-right":k=0,T=0;break}else{switch(u){case"bottom":i=t.bottom+s+f,n=t.left+a+t.width/2-o.width/2,d="translateY(10px)";break;case"top":i=t.top+s-o.height-f,n=t.left+a+t.width/2-o.width/2,d="translateY(-10px)";break;case"right":i=t.top+s+t.height/2-o.height/2,n=t.right+a+f,d="translateX(10px)";break;case"left":i=t.top+s+t.height/2-o.height/2,n=t.left+a-o.width-f,d="translateX(-10px)";break}const l=10;(r==="bottom"||r==="top")&&n!==void 0&&(n<l+a?(n=t.right+a+f,d="translateX(10px)",r="right"):n+o.width>y+a-l&&(n=t.left+a-o.width-f,d="translateX(-10px)",r="left")),(r==="left"||r==="right"||r==="bottom"||r==="top")&&i!==void 0&&(i<l+s?(i=t.bottom+s+f,d="translateY(10px)",u==="top"&&(r="bottom")):i+o.height>E+s-l&&(i=t.top+s-o.height-f,d="translateY(-10px)",u==="bottom"&&(r="top"))),r==="top"||r==="bottom"?(n=t.left+a+t.width/2-o.width/2,n<l+a&&(n=l+a),n+o.width>y+a-l&&(n=y+a-l-o.width)):(r==="left"||r==="right")&&(i=t.top+s+t.height/2-o.height/2,i<l+s&&(i=l+s),i+o.height>E+s-l&&(i=E+s-l-o.height))}I({top:i,left:n,right:T,bottom:k,transform:d,isFixed:N})},[u,p,R.spacing.sm]);return c.useEffect(()=>(p?(h(),window.addEventListener("resize",h),window.addEventListener("scroll",h)):(window.removeEventListener("resize",h),window.removeEventListener("scroll",h)),()=>{window.removeEventListener("resize",h),window.removeEventListener("scroll",h)}),[p,h]),c.useEffect(()=>{const t=o=>{v.current&&!v.current.contains(o.target)&&g.current&&!g.current.contains(o.target)&&p&&x()};return p?(document.addEventListener("mousedown",t),document.addEventListener("touchstart",t)):(document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}},[p,x]),F.jsxs(Y,{ref:v,onMouseEnter:V,onMouseLeave:x,onClick:t=>{("ontouchstart"in window||navigator.maxTouchPoints>0)&&(t.stopPropagation(),b(!p))},...H,children:[e,p&&F.jsx(S,{ref:g,isVisible:p,top:m.top,left:m.left,right:m.right,bottom:m.bottom,transform:m.transform,isFixed:m.isFixed,children:F.jsx(W,{children:L})})]})};X.__docgenInfo={description:`A **Flyover** component that wraps text and, upon hover (desktop) or tap (mobile),
displays a \`Card\` containing additional content. Ideal for glossary terms,
definitions, or contextual information. The popover position is configurable
and includes automatic collision detection and flipping to ensure it remains
visible within the viewport.

\`\`\`typescript
import { Flyover } from "@activityeducation/component-library";
\`\`\`

## Justification
The \`Flyover\` component enhances the user experience by providing on-demand
contextual information without navigating away from the current view. It's
particularly useful for educational content (e.g., definitions of complex terms),
tooltips, or brief supplementary details. Its intelligent positioning logic
(auto-flipping) ensures that the popover is always visible, even near viewport
edges, improving usability. The support for both hover (desktop) and tap (mobile)
interactions makes it universally accessible.

## Acceptance Criteria
- **GIVEN** the \`Flyover\` component is rendered, **THEN** it should display its
\`children\` content as a clickable trigger.
- **WHEN** the trigger is hovered over (desktop) or tapped (mobile), **THEN**
a \`Card\` containing the \`content\` prop should appear as a popover.
- **WHEN** the mouse leaves the trigger or the popover, or a click occurs outside
(for mobile/tap), **THEN** the popover should disappear.
- **GIVEN** \`position\` is set to 'top', 'bottom', 'left', or 'right', **THEN**
the popover should attempt to position itself accordingly relative to the trigger.
- **GIVEN** the preferred position would cause the popover to go off-screen,
**THEN** it should automatically flip to an available side to remain visible.
- **GIVEN** \`position\` is a fixed value (e.g., 'fix-top-left'), **THEN** the
popover should be positioned absolutely relative to the viewport.
- **WHEN** the window is resized or scrolled (and the popover is visible),
**THEN** the popover should re-calculate and adjust its position.

## Example & Props`,methods:[],displayName:"Flyover",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The text content that triggers the flyover."},content:{required:!0,tsType:{name:"any"},description:"The content to be displayed inside the flyover card."},position:{required:!1,tsType:{name:"union",raw:"FlyoverPosition | any",elements:[{name:"union",raw:`| 'top'
| 'bottom'
| 'left'
| 'right'
| 'fix-top-left'
| 'fix-top-right'
| 'fix-bottom-left'
| 'fix-bottom-right'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'fix-top-left'"},{name:"literal",value:"'fix-top-right'"},{name:"literal",value:"'fix-bottom-left'"},{name:"literal",value:"'fix-bottom-right'"}]},{name:"any"}]},description:`The preferred position of the popover relative to the trigger.
If the preferred position causes the popover to go off-screen,
it will automatically flip to an available side.
Fixed positions (e.g., 'fix-top-left') are relative to the viewport.
@default 'bottom'`,defaultValue:{value:"'bottom'",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles for the trigger text."}}};export{X as F};
