import{r as c,t as F,j as R}from"./iframe-XJf-RO9W.js";import{s as T}from"./emotion-styled.browser.esm-Zt9Xnlbb.js";import{c as P}from"./emotion-react.browser.esm-DE_3pz7Q.js";import{C as S}from"./index-BmzST_Tt.js";const j=T.span`
  position: relative; // Crucial for positioning the absolute FlyoverCardContainer
  cursor: pointer;
  text-decoration: underline; // Visually indicate interactivity
  text-decoration-style: dotted;
  text-decoration-color: ${t=>t.theme.colors.primary[40]};
  color: ${t=>t.theme.colors.primary[40]};
  font-weight: ${t=>t.theme.typography.button.fontWeight}; // Make it slightly bolder
  transition: all 0.2s ease-in-out;
  display: inline-block; /* Ensure it wraps content and allows positioning */

  &:hover {
    color: ${t=>t.theme.colors.primary[50]};
    text-decoration-color: ${t=>t.theme.colors.primary[50]};
  }
`,z=T.div`
  position: ${t=>t.isFixed?"fixed":"absolute"};
  z-index: 1001; // Ensure it's above most content
  pointer-events: none; // Allow clicks to pass through when not active
  opacity: 0;
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;

  /* Dynamic positioning */
  top: ${t=>t.top!==void 0?`${t.top}px`:"auto"};
  left: ${t=>t.left!==void 0?`${t.left}px`:"auto"};
  right: ${t=>t.right!==void 0?`${t.right}px`:"auto"};
  bottom: ${t=>t.bottom!==void 0?`${t.bottom}px`:"auto"};
  transform: ${t=>t.transform||"translateY(10px)"}; // Default transform for bottom

  ${t=>t.isVisible&&P`
      opacity: 1;
      pointer-events: auto; // Enable interaction when visible
      transform: none; // Reset transform when visible
    `}

  /* Target the inner Card component for styling */
  & > div {
    max-width: 300px; // Max width for the flyover card
    min-width: 180px; // Min width for readability
    padding: ${t=>t.theme.spacing.md};
    box-shadow: ${t=>t.theme.shadows.lg}; // More prominent shadow
  }
`,V=({children:t,content:L,position:p="bottom",...Y})=>{const[d,b]=c.useState(!1),[u,X]=c.useState({}),g=c.useRef(null),v=c.useRef(null),w=c.useRef(null),M=c.useCallback(()=>{w.current&&clearTimeout(w.current),b(!0)},[]),x=c.useCallback(()=>{w.current&&clearTimeout(w.current),w.current=setTimeout(()=>{b(!1)},100)},[]),m=c.useCallback(()=>{if(!g.current||!v.current)return;const e=g.current.getBoundingClientRect(),o=v.current.getBoundingClientRect(),y=window.innerWidth||document.documentElement.clientWidth,E=window.innerHeight||document.documentElement.clientHeight,a=window.scrollX||window.pageXOffset,s=window.scrollY||window.pageYOffset,h=parseFloat(F.spacing.sm);let i,n,$,k,f,C=!1,r=p;if(p.startsWith("fix-"))switch(C=!0,p){case"fix-top-left":i=0,n=0;break;case"fix-top-right":i=0,$=0;break;case"fix-bottom-left":k=0,n=0;break;case"fix-bottom-right":k=0,$=0;break}else{switch(p){case"bottom":i=e.bottom+s+h,n=e.left+a+e.width/2-o.width/2,f="translateY(10px)";break;case"top":i=e.top+s-o.height-h,n=e.left+a+e.width/2-o.width/2,f="translateY(-10px)";break;case"right":i=e.top+s+e.height/2-o.height/2,n=e.right+a+h,f="translateX(10px)";break;case"left":i=e.top+s+e.height/2-o.height/2,n=e.left+a-o.width-h,f="translateX(-10px)";break}const l=10;(r==="bottom"||r==="top")&&n!==void 0&&(n<l+a?(n=e.right+a+h,f="translateX(10px)",r="right"):n+o.width>y+a-l&&(n=e.left+a-o.width-h,f="translateX(-10px)",r="left")),(r==="left"||r==="right"||r==="bottom"||r==="top")&&i!==void 0&&(i<l+s?(i=e.bottom+s+h,f="translateY(10px)",p==="top"&&(r="bottom")):i+o.height>E+s-l&&(i=e.top+s-o.height-h,f="translateY(-10px)",p==="bottom"&&(r="top"))),r==="top"||r==="bottom"?(n=e.left+a+e.width/2-o.width/2,n<l+a&&(n=l+a),n+o.width>y+a-l&&(n=y+a-l-o.width)):(r==="left"||r==="right")&&(i=e.top+s+e.height/2-o.height/2,i<l+s&&(i=l+s),i+o.height>E+s-l&&(i=E+s-l-o.height))}X({top:i,left:n,right:$,bottom:k,transform:f,isFixed:C})},[p,d,F.spacing.sm]);return c.useEffect(()=>(d?(m(),window.addEventListener("resize",m),window.addEventListener("scroll",m)):(window.removeEventListener("resize",m),window.removeEventListener("scroll",m)),()=>{window.removeEventListener("resize",m),window.removeEventListener("scroll",m)}),[d,m]),c.useEffect(()=>{const e=o=>{g.current&&!g.current.contains(o.target)&&v.current&&!v.current.contains(o.target)&&d&&x()};return d?(document.addEventListener("mousedown",e),document.addEventListener("touchstart",e)):(document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}},[d,x]),R.jsxs(j,{ref:g,onMouseEnter:M,onMouseLeave:x,onClick:e=>{("ontouchstart"in window||navigator.maxTouchPoints>0)&&(e.stopPropagation(),b(!d))},...Y,children:[t,d&&R.jsx(z,{ref:v,isVisible:d,top:u.top,left:u.left,right:u.right,bottom:u.bottom,transform:u.transform,isFixed:u.isFixed,children:R.jsx(S,{children:L})})]})};V.__docgenInfo={description:`A Flyover component that wraps text and, upon hover (desktop) or tap (mobile),
displays a \`Card\` containing additional content. Ideal for glossary terms,
definitions, or contextual information. The popover position is configurable
and includes automatic collision detection and flipping.`,methods:[],displayName:"Flyover",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The text content that triggers the flyover."},content:{required:!0,tsType:{name:"any"},description:"The content to be displayed inside the flyover card."},position:{required:!1,tsType:{name:"union",raw:"FlyoverPosition | any",elements:[{name:"union",raw:`| 'top'
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
@default 'bottom'`,defaultValue:{value:"'bottom'",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles for the trigger text."}}};export{V as F};
