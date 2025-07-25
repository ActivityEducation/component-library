import{r as s,j as n,t as i}from"./iframe-CI6SfAYv.js";import{s as S}from"./emotion-styled.browser.esm-BNvuT_w2.js";import{c as p}from"./emotion-react.browser.esm-C8KZ_cib.js";import{B as r}from"./index-35YDmkMi.js";import{L as N,a as l}from"./index-CWV98atL.js";import{I as c}from"./index-17Ykmepx.js";const $=S.div`
  display: flex;
  flex-direction: row; // Sidenav and content side-by-side
  height: 100%; // Take full height of parent
  width: 100%; // Take full width of parent
  overflow: hidden; // Hide content that overflows during Sidenav transition
  position: relative; // For positioning the overlay
`,u=({children:e,...t})=>n.jsx($,{...t,children:e}),E=S.div`
  position: absolute; /* Default for 'over' mode */
  top: 0;
  bottom: 0;
  width: ${e=>e.width};
  background-color: ${e=>e.theme.colors.background.surface};
  box-shadow: ${e=>e.theme.shadows.lg};
  z-index: 100; /* Ensure it's above main content */
  transition: transform 0.3s ease-in-out;
  overflow-y: auto; /* Allow scrolling for sidenav content */
  flex-shrink: 0; /* Prevent shrinking in flex container */

  // Position based on 'position' prop
  ${e=>e.position==="start"?p`
          left: 0;
          transform: translateX(${e.isOpen?"0":"-100%"});
        `:p`
          right: 0;
          transform: translateX(${e.isOpen?"0":"100%"});
        `}

  // Adjust for 'side' mode (not absolute, part of flex flow)
  ${e=>e.mode==="side"&&p`
      position: relative;
      transform: none; /* Reset transform as it's part of flow */
      margin-left: ${e.position==="start"&&!e.isOpen?`-${e.width}`:"0"};
      margin-right: ${e.position==="end"&&!e.isOpen?`-${e.width}`:"0"};
      /* Transition margin for 'side' mode */
      transition: margin-left 0.3s ease-in-out, margin-right 0.3s ease-in-out;
    `}
`,R=S.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99; /* Below sidenav, above main content */
  opacity: ${e=>e.isOpen?1:0};
  transition: opacity 0.3s ease-in-out;
  pointer-events: ${e=>e.isOpen?"auto":"none"}; /* Only interactive when open */
`,d=({children:e,open:t,onOpenChange:a,position:C="start",mode:o="side",width:b="280px",...q})=>{const[k,T]=s.useState(!1),v=t!==void 0?t:k,j=s.useRef(null);s.useEffect(()=>{const O=B=>{o==="over"&&j.current&&!j.current.contains(B.target)&&(t===void 0&&T(!1),a?.(!1))};return v?document.addEventListener("mousedown",O):document.removeEventListener("mousedown",O),()=>{document.removeEventListener("mousedown",O)}},[v,o,t,a]);const M=s.useCallback(()=>{o==="over"&&(t===void 0&&T(!1),a?.(!1))},[o,t,a]);return n.jsxs(n.Fragment,{children:[o==="over"&&n.jsx(R,{isOpen:v,onClick:M}),n.jsx(E,{ref:j,isOpen:v,position:C,mode:o,width:b,...q,children:e})]})},P=S.div`
  flex-grow: 1; // Take up remaining space in the SidenavContainer
  overflow-y: auto; // Allow scrolling for main content
  transition: margin-left 0.3s ease-in-out, margin-right 0.3s ease-in-out;
  padding: ${e=>e.theme.spacing.lg}; // Default padding for content

  ${e=>e.sidenavMode==="side"&&e.isSidenavOpen&&e.sidenavPosition==="start"&&p`
      
    `}

  ${e=>e.sidenavMode==="side"&&e.isSidenavOpen&&e.sidenavPosition==="end"&&p`
      
    `}
`,m=({children:e,sidenavWidth:t="280px",sidenavPosition:a="start",sidenavMode:C="side",isSidenavOpen:o=!1,...b})=>n.jsx(P,{sidenavWidth:t,sidenavPosition:a,sidenavMode:C,isSidenavOpen:o,...b,children:e});u.__docgenInfo={description:"A container component for `Sidenav` and its associated main content.\nIt sets up the layout for a side navigation pattern.",methods:[],displayName:"SidenavContainer",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the Sidenav container. Typically includes the Sidenav and the main content."},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};d.__docgenInfo={description:`A Sidenav component for the AscendUCore Design System.
It provides a side navigation panel that can be opened and closed,
supporting 'over' (overlaying content) and 'side' (pushing content) modes,
and 'start' (left) or 'end' (right) positions.
Must be rendered within a \`SidenavContainer\`.`,methods:[],displayName:"Sidenav",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be rendered inside the Sidenav."},open:{required:!1,tsType:{name:"boolean"},description:"Controls whether the sidenav is open or closed (controlled component)."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:`Callback function that is called when the sidenav's open state changes.
Provides the new open state (true for open, false for closed).`},position:{required:!1,tsType:{name:"union",raw:"'start' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:`The position of the sidenav ('start' for left, 'end' for right).
@default 'start'`,defaultValue:{value:"'start'",computed:!1}},mode:{required:!1,tsType:{name:"union",raw:"'over' | 'side'",elements:[{name:"literal",value:"'over'"},{name:"literal",value:"'side'"}]},description:`The mode of the sidenav ('over' to overlay content, 'side' to push content).
@default 'side'`,defaultValue:{value:"'side'",computed:!1}},width:{required:!1,tsType:{name:"string"},description:`The width of the sidenav when open.
@default '280px'`,defaultValue:{value:"'280px'",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles for the sidenav panel."}}};m.__docgenInfo={description:"A component to wrap the main content area when using a `Sidenav`.\nIt handles adjusting its position based on the `Sidenav`'s mode and open state.\nMust be rendered within a `SidenavContainer`.",methods:[],displayName:"SidenavContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main content of the application."},sidenavWidth:{required:!1,tsType:{name:"string"},description:`The width of the Sidenav. This is crucial for 'side' mode to correctly
calculate the content's offset.`,defaultValue:{value:"'280px'",computed:!1}},sidenavPosition:{required:!1,tsType:{name:"union",raw:"'start' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:"The position of the Sidenav.",defaultValue:{value:"'start'",computed:!1}},sidenavMode:{required:!1,tsType:{name:"union",raw:"'over' | 'side'",elements:[{name:"literal",value:"'over'"},{name:"literal",value:"'side'"}]},description:"The mode of the Sidenav.",defaultValue:{value:"'side'",computed:!1}},isSidenavOpen:{required:!1,tsType:{name:"boolean"},description:"Whether the Sidenav is open.",defaultValue:{value:"false",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};const x=n.jsxs("div",{style:{padding:i.spacing.lg,display:"flex",flexDirection:"column",height:"100%"},children:[n.jsx("h3",{style:{...i.typography.h3,margin:`0 0 ${i.spacing.lg} 0`,color:i.colors.primary[40]},children:"AscendUCore Nav"}),n.jsxs(N,{style:{boxShadow:"none",borderRadius:"none",flexGrow:1},children:[n.jsx(l,{interactive:!0,leading:n.jsx(c,{name:"fa-solid fa-home"}),children:"Dashboard"}),n.jsx(l,{interactive:!0,leading:n.jsx(c,{name:"fa-solid fa-book"}),children:"My Courses"}),n.jsx(l,{interactive:!0,leading:n.jsx(c,{name:"fa-solid fa-chart-line"}),children:"Progress"}),n.jsx(l,{interactive:!0,leading:n.jsx(c,{name:"fa-solid fa-comments"}),children:"Discussions"}),n.jsx(l,{interactive:!0,leading:n.jsx(c,{name:"fa-solid fa-cog"}),children:"Settings"})]}),n.jsx("div",{style:{marginTop:"auto",padding:i.spacing.md},children:n.jsx(r,{variant:"secondary",style:{width:"100%"},children:"Logout"})})]}),w=n.jsxs("div",{style:{padding:i.spacing.lg,height:"100%",overflowY:"auto"},children:[n.jsx("h2",{style:{...i.typography.h2,margin:`0 0 ${i.spacing.lg} 0`},children:"Main Application Content"}),n.jsx("p",{style:i.typography.body,children:"This is the primary content area of your application. When the sidenav is in 'side' mode, this content will be pushed to make space for the sidenav. In 'over' mode, the sidenav will appear on top of this content."}),n.jsx("p",{style:i.typography.body,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),n.jsx("p",{style:i.typography.body,children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."}),n.jsx("p",{style:i.typography.body,children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."}),n.jsx("p",{style:i.typography.body,children:"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."})]}),D={title:"Components/Sidenav",component:d,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{open:{control:"boolean",description:"Controls whether the sidenav is open or closed (controlled)."},onOpenChange:{action:"openChange",description:"Callback function when the sidenav open state changes."},position:{control:"radio",options:["start","end"],description:"The position of the sidenav (left or right).",defaultValue:"start"},mode:{control:"radio",options:["over","side"],description:"The mode of the sidenav (overlay content or push content).",defaultValue:"side"},width:{control:"text",description:'The width of the sidenav when open (e.g., "280px", "30%").',defaultValue:"280px"},children:{control:!1}},decorators:[e=>n.jsxs("div",{style:{height:"100vh",width:"100vw",display:"flex",flexDirection:"column"},children:[n.jsxs("div",{style:{padding:i.spacing.md,background:i.colors.primary[40],color:"#fff",display:"flex",alignItems:"center",gap:i.spacing.md},children:[n.jsx("h1",{style:{...i.typography.h3,margin:0,color:"#fff"},children:"App Header"}),n.jsx("span",{style:{marginLeft:"auto"},children:n.jsx(r,{variant:"ghost",onClick:()=>{},style:{color:"#fff"},children:"Toggle Sidenav (via header)"})})]}),n.jsx("div",{style:{flexGrow:1,display:"flex"},children:n.jsx(e,{})})]})]},h={render:e=>{const[t,a]=s.useState(!0);return n.jsxs(u,{style:{flexGrow:1},children:[n.jsx(d,{...e,open:t,onOpenChange:a,mode:"side",position:"start",children:x}),n.jsxs(m,{sidenavWidth:e.width,sidenavPosition:"start",sidenavMode:"side",isSidenavOpen:t,children:[n.jsx(r,{onClick:()=>a(!t),variant:"primary",style:{marginBottom:i.spacing.md},children:"Toggle Sidenav"}),w]})]})},args:{width:"280px"}},f={render:e=>{const[t,a]=s.useState(!1);return n.jsxs(u,{style:{flexGrow:1},children:[n.jsx(d,{...e,open:t,onOpenChange:a,mode:"over",position:"start",children:x}),n.jsxs(m,{sidenavWidth:e.width,sidenavPosition:"start",sidenavMode:"over",isSidenavOpen:t,children:[n.jsx(r,{onClick:()=>a(!t),variant:"primary",style:{marginBottom:i.spacing.md},children:"Toggle Sidenav"}),w]})]})},args:{width:"280px"}},g={render:e=>{const[t,a]=s.useState(!0);return n.jsxs(u,{style:{flexGrow:1},children:[n.jsxs(m,{sidenavWidth:e.width,sidenavPosition:"end",sidenavMode:"side",isSidenavOpen:t,children:[n.jsx(r,{onClick:()=>a(!t),variant:"primary",style:{marginBottom:i.spacing.md},children:"Toggle Sidenav"}),w]}),n.jsx(d,{...e,open:t,onOpenChange:a,mode:"side",position:"end",children:x})]})},args:{width:"280px"}},y={render:e=>{const[t,a]=s.useState(!1);return n.jsxs(u,{style:{flexGrow:1},children:[n.jsxs(m,{sidenavWidth:e.width,sidenavPosition:"end",sidenavMode:"over",isSidenavOpen:t,children:[n.jsx(r,{onClick:()=>a(!t),variant:"primary",style:{marginBottom:i.spacing.md},children:"Toggle Sidenav"}),w]}),n.jsx(d,{...e,open:t,onOpenChange:a,mode:"over",position:"end",children:x})]})},args:{width:"280px"}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const [open, setOpen] = useState(true); // Start open for demonstration

    return <SidenavContainer style={{
      flexGrow: 1
    }}>
        <Sidenav {...args} open={open} onOpenChange={setOpen} mode="side" position="start">
          {SidenavNavContent}
        </Sidenav>
        <SidenavContent sidenavWidth={args.width} sidenavPosition="start" sidenavMode="side" isSidenavOpen={open}>
          <Button onClick={() => setOpen(!open)} variant="primary" style={{
          marginBottom: theme.spacing.md
        }}>
            Toggle Sidenav
          </Button>
          {MainContent}
        </SidenavContent>
      </SidenavContainer>;
  },
  args: {
    width: '280px'
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const [open, setOpen] = useState(false);
    return <SidenavContainer style={{
      flexGrow: 1
    }}>
        <Sidenav {...args} open={open} onOpenChange={setOpen} mode="over" position="start">
          {SidenavNavContent}
        </Sidenav>
        <SidenavContent sidenavWidth={args.width} // Not directly used by SidenavContent in 'over' mode
      sidenavPosition="start" sidenavMode="over" isSidenavOpen={open}>
          <Button onClick={() => setOpen(!open)} variant="primary" style={{
          marginBottom: theme.spacing.md
        }}>
            Toggle Sidenav
          </Button>
          {MainContent}
        </SidenavContent>
      </SidenavContainer>;
  },
  args: {
    width: '280px'
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const [open, setOpen] = useState(true);
    return <SidenavContainer style={{
      flexGrow: 1
    }}>
        <SidenavContent sidenavWidth={args.width} sidenavPosition="end" sidenavMode="side" isSidenavOpen={open}>
          <Button onClick={() => setOpen(!open)} variant="primary" style={{
          marginBottom: theme.spacing.md
        }}>
            Toggle Sidenav
          </Button>
          {MainContent}
        </SidenavContent>
        <Sidenav {...args} open={open} onOpenChange={setOpen} mode="side" position="end">
          {SidenavNavContent}
        </Sidenav>
      </SidenavContainer>;
  },
  args: {
    width: '280px'
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const [open, setOpen] = useState(false);
    return <SidenavContainer style={{
      flexGrow: 1
    }}>
        <SidenavContent sidenavWidth={args.width} // Not directly used by SidenavContent in 'over' mode
      sidenavPosition="end" sidenavMode="over" isSidenavOpen={open}>
          <Button onClick={() => setOpen(!open)} variant="primary" style={{
          marginBottom: theme.spacing.md
        }}>
            Toggle Sidenav
          </Button>
          {MainContent}
        </SidenavContent>
        <Sidenav {...args} open={open} onOpenChange={setOpen} mode="over" position="end">
          {SidenavNavContent}
        </Sidenav>
      </SidenavContainer>;
  },
  args: {
    width: '280px'
  }
}`,...y.parameters?.docs?.source}}};const _=["SideSidenav","OverSidenav","SideSidenavEnd","OverSidenavEnd"];export{f as OverSidenav,y as OverSidenavEnd,h as SideSidenav,g as SideSidenavEnd,_ as __namedExportsOrder,D as default};
