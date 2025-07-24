import{r as p,t as e,j as o}from"./iframe-qfGYkdpq.js";import{s as Y}from"./emotion-styled.browser.esm-Dr63JBGY.js";import{c as q}from"./emotion-react.browser.esm-B3bQ_QJr.js";import{C as _}from"./index-RmxIL0IR.js";const N=Y.span`
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
`,G=Y.div`
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

  ${t=>t.isVisible&&q`
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
`,x=({children:t,content:V,position:u="bottom",...X})=>{const[h,L]=p.useState(!1),[y,M]=p.useState({}),v=p.useRef(null),b=p.useRef(null),w=p.useRef(null),O=p.useCallback(()=>{w.current&&clearTimeout(w.current),L(!0)},[]),A=p.useCallback(()=>{w.current&&clearTimeout(w.current),w.current=setTimeout(()=>{L(!1)},100)},[]),g=p.useCallback(()=>{if(!v.current||!b.current)return;const n=v.current.getBoundingClientRect(),i=b.current.getBoundingClientRect(),C=window.innerWidth||document.documentElement.clientWidth,z=window.innerHeight||document.documentElement.clientHeight,l=window.scrollX||window.pageXOffset,c=window.scrollY||window.pageYOffset,f=parseFloat(e.spacing.sm);let r,s,D,B,m,H=!1,a=u;if(u.startsWith("fix-"))switch(H=!0,u){case"fix-top-left":r=0,s=0;break;case"fix-top-right":r=0,D=0;break;case"fix-bottom-left":B=0,s=0;break;case"fix-bottom-right":B=0,D=0;break}else{switch(u){case"bottom":r=n.bottom+c+f,s=n.left+l+n.width/2-i.width/2,m="translateY(10px)";break;case"top":r=n.top+c-i.height-f,s=n.left+l+n.width/2-i.width/2,m="translateY(-10px)";break;case"right":r=n.top+c+n.height/2-i.height/2,s=n.right+l+f,m="translateX(10px)";break;case"left":r=n.top+c+n.height/2-i.height/2,s=n.left+l-i.width-f,m="translateX(-10px)";break}const d=10;(a==="bottom"||a==="top")&&s!==void 0&&(s<d+l?(s=n.right+l+f,m="translateX(10px)",a="right"):s+i.width>C+l-d&&(s=n.left+l-i.width-f,m="translateX(-10px)",a="left")),(a==="left"||a==="right"||a==="bottom"||a==="top")&&r!==void 0&&(r<d+c?(r=n.bottom+c+f,m="translateY(10px)",u==="top"&&(a="bottom")):r+i.height>z+c-d&&(r=n.top+c-i.height-f,m="translateY(-10px)",u==="bottom"&&(a="top"))),a==="top"||a==="bottom"?(s=n.left+l+n.width/2-i.width/2,s<d+l&&(s=d+l),s+i.width>C+l-d&&(s=C+l-d-i.width)):(a==="left"||a==="right")&&(r=n.top+c+n.height/2-i.height/2,r<d+c&&(r=d+c),r+i.height>z+c-d&&(r=z+c-d-i.height))}M({top:r,left:s,right:D,bottom:B,transform:m,isFixed:H})},[u,h,e.spacing.sm]);return p.useEffect(()=>(h?(g(),window.addEventListener("resize",g),window.addEventListener("scroll",g)):(window.removeEventListener("resize",g),window.removeEventListener("scroll",g)),()=>{window.removeEventListener("resize",g),window.removeEventListener("scroll",g)}),[h,g]),p.useEffect(()=>{const n=i=>{v.current&&!v.current.contains(i.target)&&b.current&&!b.current.contains(i.target)&&h&&A()};return h?(document.addEventListener("mousedown",n),document.addEventListener("touchstart",n)):(document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[h,A]),o.jsxs(N,{ref:v,onMouseEnter:O,onMouseLeave:A,onClick:n=>{("ontouchstart"in window||navigator.maxTouchPoints>0)&&(n.stopPropagation(),L(!h))},...X,children:[t,h&&o.jsx(G,{ref:b,isVisible:h,top:y.top,left:y.left,right:y.right,bottom:y.bottom,transform:y.transform,isFixed:y.isFixed,children:o.jsx(_,{children:V})})]})};x.__docgenInfo={description:`A Flyover component that wraps text and, upon hover (desktop) or tap (mobile),
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
@default 'bottom'`,defaultValue:{value:"'bottom'",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles for the trigger text."}}};const Z={title:"Components/Flyover",component:x,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{children:{control:"text",description:"The text content that triggers the flyover.",defaultValue:"glossary term"},content:{control:"object",description:"The content to be displayed inside the flyover card."},position:{control:"select",options:["top","bottom","left","right","fix-top-left","fix-top-right","fix-bottom-left","fix-bottom-right"],description:"The preferred position of the popover relative to the trigger or viewport.",defaultValue:"bottom"}},decorators:[t=>o.jsx("div",{style:{padding:e.spacing.xl,backgroundColor:e.colors.background.default,minHeight:"500px",display:"flex",justifyContent:"center",alignItems:"center",width:"100%"},children:o.jsx(t,{})})]},W=o.jsxs("div",{style:{padding:e.spacing.md},children:[o.jsx("h4",{style:{...e.typography.h4,margin:0,color:e.colors.text.default},children:"ActivityPub"}),o.jsx("p",{style:{...e.typography.bodySmall,margin:`${e.spacing.sm} 0 0 0`,color:e.colors.text.default},children:"A decentralized social networking protocol based on the ActivityStreams 2.0 data format. It enables federated social applications to communicate and interact across different servers."})]}),I=o.jsxs("div",{style:{padding:e.spacing.md},children:[o.jsx("h4",{style:{...e.typography.h4,margin:0,color:e.colors.text.default},children:"Federation"}),o.jsx("p",{style:{...e.typography.bodySmall,margin:`${e.spacing.sm} 0 0 0`,color:e.colors.text.default},children:"In the context of decentralized networks, federation refers to the ability of independent servers or instances to communicate and share data with each other, forming a larger, interconnected network."})]}),F={args:{children:"ActivityPub",content:W,position:"bottom"}},T={args:{children:"Federation",content:I,position:"top"}},j={args:{children:"Decentralized",content:o.jsxs("div",{style:{padding:e.spacing.md},children:[o.jsx("h4",{style:{...e.typography.h4,margin:0,color:e.colors.text.default},children:"Decentralized"}),o.jsx("p",{style:{...e.typography.bodySmall,margin:`${e.spacing.sm} 0 0 0`,color:e.colors.text.default},children:"A system where control and decision-making are distributed among participants, rather than centralized."})]}),position:"left"}},$={args:{children:"Blockchain",content:o.jsxs("div",{style:{padding:e.spacing.md},children:[o.jsx("h4",{style:{...e.typography.h4,margin:0,color:e.colors.text.default},children:"Blockchain"}),o.jsx("p",{style:{...e.typography.bodySmall,margin:`${e.spacing.sm} 0 0 0`,color:e.colors.text.default},children:"A distributed ledger technology that records transactions in a secure and immutable way."})]}),position:"right"}},k={render:()=>o.jsxs("p",{style:{...e.typography.body,maxWidth:"600px",lineHeight:"1.8",textAlign:"center"},children:["Welcome to our course on decentralized technologies. Today, we will explore the core concepts of"," ",o.jsx(x,{content:W,position:"bottom",children:"ActivityPub"}),", a protocol that powers the"," ",o.jsx(x,{content:I,position:"top",children:"federation"})," of social networks. Try resizing the browser window or scrolling to see how the popovers adjust their position automatically. Here's another term near the ",o.jsx(x,{content:W,position:"right",children:"right edge"})," of the container. And one near the ",o.jsx(x,{content:I,position:"left",children:"left edge"}),"."]}),args:{},parameters:{layout:"padded"}},S={args:{children:"Fixed Top-Left",content:o.jsxs("div",{style:{padding:e.spacing.md},children:[o.jsx("h4",{style:{...e.typography.h4,margin:0,color:e.colors.text.default},children:"Fixed Position"}),o.jsx("p",{style:{...e.typography.bodySmall,margin:`${e.spacing.sm} 0 0 0`,color:e.colors.text.default},children:"This popover is fixed to the top-left of the viewport."})]}),position:"fix-top-left"},parameters:{layout:"fullscreen"}},P={args:{children:"Fixed Top-Right",content:o.jsxs("div",{style:{padding:e.spacing.md},children:[o.jsx("h4",{style:{...e.typography.h4,margin:0,color:e.colors.text.default},children:"Fixed Position"}),o.jsx("p",{style:{...e.typography.bodySmall,margin:`${e.spacing.sm} 0 0 0`,color:e.colors.text.default},children:"This popover is fixed to the top-right of the viewport."})]}),position:"fix-top-right"},parameters:{layout:"fullscreen"}},R={args:{children:"Fixed Bottom-Left",content:o.jsxs("div",{style:{padding:e.spacing.md},children:[o.jsx("h4",{style:{...e.typography.h4,margin:0,color:e.colors.text.default},children:"Fixed Position"}),o.jsx("p",{style:{...e.typography.bodySmall,margin:`${e.spacing.sm} 0 0 0`,color:e.colors.text.default},children:"This popover is fixed to the bottom-left of the viewport."})]}),position:"fix-bottom-left"},parameters:{layout:"fullscreen"}},E={args:{children:"Fixed Bottom-Right",content:o.jsxs("div",{style:{padding:e.spacing.md},children:[o.jsx("h4",{style:{...e.typography.h4,margin:0,color:e.colors.text.default},children:"Fixed Position"}),o.jsx("p",{style:{...e.typography.bodySmall,margin:`${e.spacing.sm} 0 0 0`,color:e.colors.text.default},children:"This popover is fixed to the bottom-right of the viewport."})]}),position:"fix-bottom-right"},parameters:{layout:"fullscreen"}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'ActivityPub',
    content: DefinitionContent,
    position: 'bottom'
  }
}`,...F.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Federation',
    content: AnotherDefinition,
    position: 'top'
  }
}`,...T.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Decentralized',
    content: <div style={{
      padding: theme.spacing.md
    }}>
        <h4 style={{
        ...theme.typography.h4,
        margin: 0,
        color: theme.colors.text.default
      }}>Decentralized</h4>
        <p style={{
        ...theme.typography.bodySmall,
        margin: \`\${theme.spacing.sm} 0 0 0\`,
        color: theme.colors.text.default
      }}>
          A system where control and decision-making are distributed among participants, rather than centralized.
        </p>
      </div>,
    position: 'left'
  }
}`,...j.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Blockchain',
    content: <div style={{
      padding: theme.spacing.md
    }}>
        <h4 style={{
        ...theme.typography.h4,
        margin: 0,
        color: theme.colors.text.default
      }}>Blockchain</h4>
        <p style={{
        ...theme.typography.bodySmall,
        margin: \`\${theme.spacing.sm} 0 0 0\`,
        color: theme.colors.text.default
      }}>
          A distributed ledger technology that records transactions in a secure and immutable way.
        </p>
      </div>,
    position: 'right'
  }
}`,...$.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <p style={{
    ...theme.typography.body,
    maxWidth: '600px',
    lineHeight: '1.8',
    textAlign: 'center'
  }}>
      Welcome to our course on decentralized technologies. Today, we will explore the core concepts of{' '}
      <Flyover content={DefinitionContent} position="bottom">ActivityPub</Flyover>, a protocol that powers the{' '}
      <Flyover content={AnotherDefinition} position="top">federation</Flyover> of social networks.
      Try resizing the browser window or scrolling to see how the popovers adjust their position automatically.
      Here's another term near the <Flyover content={DefinitionContent} position="right">right edge</Flyover> of the container.
      And one near the <Flyover content={AnotherDefinition} position="left">left edge</Flyover>.
    </p>,
  args: {},
  parameters: {
    layout: 'padded'
  }
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Fixed Top-Left',
    content: <div style={{
      padding: theme.spacing.md
    }}>
        <h4 style={{
        ...theme.typography.h4,
        margin: 0,
        color: theme.colors.text.default
      }}>Fixed Position</h4>
        <p style={{
        ...theme.typography.bodySmall,
        margin: \`\${theme.spacing.sm} 0 0 0\`,
        color: theme.colors.text.default
      }}>
          This popover is fixed to the top-left of the viewport.
        </p>
      </div>,
    position: 'fix-top-left'
  },
  parameters: {
    // Ensure this story is not centered to properly show fixed position
    layout: 'fullscreen'
  }
}`,...S.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Fixed Top-Right',
    content: <div style={{
      padding: theme.spacing.md
    }}>
        <h4 style={{
        ...theme.typography.h4,
        margin: 0,
        color: theme.colors.text.default
      }}>Fixed Position</h4>
        <p style={{
        ...theme.typography.bodySmall,
        margin: \`\${theme.spacing.sm} 0 0 0\`,
        color: theme.colors.text.default
      }}>
          This popover is fixed to the top-right of the viewport.
        </p>
      </div>,
    position: 'fix-top-right'
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...P.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Fixed Bottom-Left',
    content: <div style={{
      padding: theme.spacing.md
    }}>
        <h4 style={{
        ...theme.typography.h4,
        margin: 0,
        color: theme.colors.text.default
      }}>Fixed Position</h4>
        <p style={{
        ...theme.typography.bodySmall,
        margin: \`\${theme.spacing.sm} 0 0 0\`,
        color: theme.colors.text.default
      }}>
          This popover is fixed to the bottom-left of the viewport.
        </p>
      </div>,
    position: 'fix-bottom-left'
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...R.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Fixed Bottom-Right',
    content: <div style={{
      padding: theme.spacing.md
    }}>
        <h4 style={{
        ...theme.typography.h4,
        margin: 0,
        color: theme.colors.text.default
      }}>Fixed Position</h4>
        <p style={{
        ...theme.typography.bodySmall,
        margin: \`\${theme.spacing.sm} 0 0 0\`,
        color: theme.colors.text.default
      }}>
          This popover is fixed to the bottom-right of the viewport.
        </p>
      </div>,
    position: 'fix-bottom-right'
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...E.parameters?.docs?.source}}};const ee=["Default","PositionTop","PositionLeft","PositionRight","InParagraphWithAutoFlip","FixedTopLeft","FixedTopRight","FixedBottomLeft","FixedBottomRight"];export{F as Default,R as FixedBottomLeft,E as FixedBottomRight,S as FixedTopLeft,P as FixedTopRight,k as InParagraphWithAutoFlip,j as PositionLeft,$ as PositionRight,T as PositionTop,ee as __namedExportsOrder,Z as default};
