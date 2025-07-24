import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./iframe-C3uWE8cP.js";import{s as S,T as N,t as i}from"./index-0UhJA7dS.js";import{c as p}from"./emotion-react.browser.esm-BP-SUzAD.js";import{B as r}from"./index-DgNSwxsC.js";import{L as $,a as l}from"./index-DiCp4-2J.js";import{I as c}from"./index-CPXLxjDA.js";const E=S.div`
  display: flex;
  flex-direction: row; // Sidenav and content side-by-side
  height: 100%; // Take full height of parent
  width: 100%; // Take full width of parent
  overflow: hidden; // Hide content that overflows during Sidenav transition
  position: relative; // For positioning the overlay
`,u=({children:n,...t})=>e.jsx(E,{...t,children:n}),P=S.div`
  position: absolute; /* Default for 'over' mode */
  top: 0;
  bottom: 0;
  width: ${n=>n.width};
  background-color: ${n=>n.theme.colors.background.surface};
  box-shadow: ${n=>n.theme.shadows.lg};
  z-index: 100; /* Ensure it's above main content */
  transition: transform 0.3s ease-in-out;
  overflow-y: auto; /* Allow scrolling for sidenav content */
  flex-shrink: 0; /* Prevent shrinking in flex container */

  // Position based on 'position' prop
  ${n=>n.position==="start"?p`
          left: 0;
          transform: translateX(${n.isOpen?"0":"-100%"});
        `:p`
          right: 0;
          transform: translateX(${n.isOpen?"0":"100%"});
        `}

  // Adjust for 'side' mode (not absolute, part of flex flow)
  ${n=>n.mode==="side"&&p`
      position: relative;
      transform: none; /* Reset transform as it's part of flow */
      margin-left: ${n.position==="start"&&!n.isOpen?`-${n.width}`:"0"};
      margin-right: ${n.position==="end"&&!n.isOpen?`-${n.width}`:"0"};
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
  opacity: ${n=>n.isOpen?1:0};
  transition: opacity 0.3s ease-in-out;
  pointer-events: ${n=>n.isOpen?"auto":"none"}; /* Only interactive when open */
`,d=({children:n,open:t,onOpenChange:a,position:C="start",mode:o="side",width:b="280px",...q})=>{const[k,T]=s.useState(!1),v=t!==void 0?t:k,j=s.useRef(null);s.useEffect(()=>{const O=B=>{o==="over"&&j.current&&!j.current.contains(B.target)&&(t===void 0&&T(!1),a?.(!1))};return v?document.addEventListener("mousedown",O):document.removeEventListener("mousedown",O),()=>{document.removeEventListener("mousedown",O)}},[v,o,t,a]);const M=s.useCallback(()=>{o==="over"&&(t===void 0&&T(!1),a?.(!1))},[o,t,a]);return e.jsxs(e.Fragment,{children:[o==="over"&&e.jsx(R,{isOpen:v,onClick:M}),e.jsx(P,{ref:j,isOpen:v,position:C,mode:o,width:b,...q,children:n})]})},I=S.div`
  flex-grow: 1; // Take up remaining space in the SidenavContainer
  overflow-y: auto; // Allow scrolling for main content
  transition: margin-left 0.3s ease-in-out, margin-right 0.3s ease-in-out;
  padding: ${n=>n.theme.spacing.lg}; // Default padding for content

  ${n=>n.sidenavMode==="side"&&n.isSidenavOpen&&n.sidenavPosition==="start"&&p`
      
    `}

  ${n=>n.sidenavMode==="side"&&n.isSidenavOpen&&n.sidenavPosition==="end"&&p`
      
    `}
`,m=({children:n,sidenavWidth:t="280px",sidenavPosition:a="start",sidenavMode:C="side",isSidenavOpen:o=!1,...b})=>e.jsx(I,{sidenavWidth:t,sidenavPosition:a,sidenavMode:C,isSidenavOpen:o,...b,children:n});u.__docgenInfo={description:"A container component for `Sidenav` and its associated main content.\nIt sets up the layout for a side navigation pattern.",methods:[],displayName:"SidenavContainer",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the Sidenav container. Typically includes the Sidenav and the main content."},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};d.__docgenInfo={description:`A Sidenav component for the AscendUCore Design System.
It provides a side navigation panel that can be opened and closed,
supporting 'over' (overlaying content) and 'side' (pushing content) modes,
and 'start' (left) or 'end' (right) positions.
Must be rendered within a \`SidenavContainer\`.`,methods:[],displayName:"Sidenav",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be rendered inside the Sidenav."},open:{required:!1,tsType:{name:"boolean"},description:"Controls whether the sidenav is open or closed (controlled component)."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:`Callback function that is called when the sidenav's open state changes.
Provides the new open state (true for open, false for closed).`},position:{required:!1,tsType:{name:"union",raw:"'start' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:`The position of the sidenav ('start' for left, 'end' for right).
@default 'start'`,defaultValue:{value:"'start'",computed:!1}},mode:{required:!1,tsType:{name:"union",raw:"'over' | 'side'",elements:[{name:"literal",value:"'over'"},{name:"literal",value:"'side'"}]},description:`The mode of the sidenav ('over' to overlay content, 'side' to push content).
@default 'side'`,defaultValue:{value:"'side'",computed:!1}},width:{required:!1,tsType:{name:"string"},description:`The width of the sidenav when open.
@default '280px'`,defaultValue:{value:"'280px'",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles for the sidenav panel."}}};m.__docgenInfo={description:"A component to wrap the main content area when using a `Sidenav`.\nIt handles adjusting its position based on the `Sidenav`'s mode and open state.\nMust be rendered within a `SidenavContainer`.",methods:[],displayName:"SidenavContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main content of the application."},sidenavWidth:{required:!1,tsType:{name:"string"},description:`The width of the Sidenav. This is crucial for 'side' mode to correctly
calculate the content's offset.`,defaultValue:{value:"'280px'",computed:!1}},sidenavPosition:{required:!1,tsType:{name:"union",raw:"'start' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:"The position of the Sidenav.",defaultValue:{value:"'start'",computed:!1}},sidenavMode:{required:!1,tsType:{name:"union",raw:"'over' | 'side'",elements:[{name:"literal",value:"'over'"},{name:"literal",value:"'side'"}]},description:"The mode of the Sidenav.",defaultValue:{value:"'side'",computed:!1}},isSidenavOpen:{required:!1,tsType:{name:"boolean"},description:"Whether the Sidenav is open.",defaultValue:{value:"false",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};const x=e.jsxs("div",{style:{padding:i.spacing.lg,display:"flex",flexDirection:"column",height:"100%"},children:[e.jsx("h3",{style:{...i.typography.h3,margin:`0 0 ${i.spacing.lg} 0`,color:i.colors.primary[40]},children:"AscendUCore Nav"}),e.jsxs($,{style:{boxShadow:"none",borderRadius:"none",flexGrow:1},children:[e.jsx(l,{interactive:!0,leading:e.jsx(c,{name:"fa-solid fa-home"}),children:"Dashboard"}),e.jsx(l,{interactive:!0,leading:e.jsx(c,{name:"fa-solid fa-book"}),children:"My Courses"}),e.jsx(l,{interactive:!0,leading:e.jsx(c,{name:"fa-solid fa-chart-line"}),children:"Progress"}),e.jsx(l,{interactive:!0,leading:e.jsx(c,{name:"fa-solid fa-comments"}),children:"Discussions"}),e.jsx(l,{interactive:!0,leading:e.jsx(c,{name:"fa-solid fa-cog"}),children:"Settings"})]}),e.jsx("div",{style:{marginTop:"auto",padding:i.spacing.md},children:e.jsx(r,{variant:"secondary",style:{width:"100%"},children:"Logout"})})]}),w=e.jsxs("div",{style:{padding:i.spacing.lg,height:"100%",overflowY:"auto"},children:[e.jsx("h2",{style:{...i.typography.h2,margin:`0 0 ${i.spacing.lg} 0`},children:"Main Application Content"}),e.jsx("p",{style:i.typography.body,children:"This is the primary content area of your application. When the sidenav is in 'side' mode, this content will be pushed to make space for the sidenav. In 'over' mode, the sidenav will appear on top of this content."}),e.jsx("p",{style:i.typography.body,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{style:i.typography.body,children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."}),e.jsx("p",{style:i.typography.body,children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."}),e.jsx("p",{style:i.typography.body,children:"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."})]}),z={title:"Components/Sidenav",component:d,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{open:{control:"boolean",description:"Controls whether the sidenav is open or closed (controlled)."},onOpenChange:{action:"openChange",description:"Callback function when the sidenav open state changes."},position:{control:"radio",options:["start","end"],description:"The position of the sidenav (left or right).",defaultValue:"start"},mode:{control:"radio",options:["over","side"],description:"The mode of the sidenav (overlay content or push content).",defaultValue:"side"},width:{control:"text",description:'The width of the sidenav when open (e.g., "280px", "30%").',defaultValue:"280px"},children:{control:!1}},decorators:[n=>e.jsx(N,{theme:i,children:e.jsxs("div",{style:{height:"100vh",width:"100vw",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{padding:i.spacing.md,background:i.colors.primary[40],color:"#fff",display:"flex",alignItems:"center",gap:i.spacing.md},children:[e.jsx("h1",{style:{...i.typography.h3,margin:0,color:"#fff"},children:"App Header"}),e.jsx("span",{style:{marginLeft:"auto"},children:e.jsx(r,{variant:"ghost",onClick:()=>{},style:{color:"#fff"},children:"Toggle Sidenav (via header)"})})]}),e.jsx("div",{style:{flexGrow:1,display:"flex"},children:e.jsx(n,{})})]})})]},h={render:n=>{const[t,a]=s.useState(!0);return e.jsxs(u,{style:{flexGrow:1},children:[e.jsx(d,{...n,open:t,onOpenChange:a,mode:"side",position:"start",children:x}),e.jsxs(m,{sidenavWidth:n.width,sidenavPosition:"start",sidenavMode:"side",isSidenavOpen:t,children:[e.jsx(r,{onClick:()=>a(!t),variant:"primary",style:{marginBottom:i.spacing.md},children:"Toggle Sidenav"}),w]})]})},args:{width:"280px"}},f={render:n=>{const[t,a]=s.useState(!1);return e.jsxs(u,{style:{flexGrow:1},children:[e.jsx(d,{...n,open:t,onOpenChange:a,mode:"over",position:"start",children:x}),e.jsxs(m,{sidenavWidth:n.width,sidenavPosition:"start",sidenavMode:"over",isSidenavOpen:t,children:[e.jsx(r,{onClick:()=>a(!t),variant:"primary",style:{marginBottom:i.spacing.md},children:"Toggle Sidenav"}),w]})]})},args:{width:"280px"}},g={render:n=>{const[t,a]=s.useState(!0);return e.jsxs(u,{style:{flexGrow:1},children:[e.jsxs(m,{sidenavWidth:n.width,sidenavPosition:"end",sidenavMode:"side",isSidenavOpen:t,children:[e.jsx(r,{onClick:()=>a(!t),variant:"primary",style:{marginBottom:i.spacing.md},children:"Toggle Sidenav"}),w]}),e.jsx(d,{...n,open:t,onOpenChange:a,mode:"side",position:"end",children:x})]})},args:{width:"280px"}},y={render:n=>{const[t,a]=s.useState(!1);return e.jsxs(u,{style:{flexGrow:1},children:[e.jsxs(m,{sidenavWidth:n.width,sidenavPosition:"end",sidenavMode:"over",isSidenavOpen:t,children:[e.jsx(r,{onClick:()=>a(!t),variant:"primary",style:{marginBottom:i.spacing.md},children:"Toggle Sidenav"}),w]}),e.jsx(d,{...n,open:t,onOpenChange:a,mode:"over",position:"end",children:x})]})},args:{width:"280px"}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const U=["SideSidenav","OverSidenav","SideSidenavEnd","OverSidenavEnd"];export{f as OverSidenav,y as OverSidenavEnd,h as SideSidenav,g as SideSidenavEnd,U as __namedExportsOrder,z as default};
