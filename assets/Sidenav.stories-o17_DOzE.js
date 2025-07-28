import{j as e,t as n,r as m}from"./iframe-CkUD85aG.js";import{S as d,a as v,b as h}from"./index-BDr8nxOs.js";import{B as o}from"./index-BbGklbUC.js";import{L as y,a as s}from"./index-AYkoUy90.js";import{I as r}from"./index-BvK6iIix.js";import"./emotion-styled.browser.esm-YHkEzSHc.js";import"./emotion-react.browser.esm-Cwb0n8oH.js";const g=e.jsxs("div",{style:{padding:n.spacing.lg,display:"flex",flexDirection:"column",height:"100%"},children:[e.jsx("h3",{style:{...n.typography.h3,margin:`0 0 ${n.spacing.lg} 0`,color:n.colors.primary[40]},children:"AscendUCore Nav"}),e.jsxs(y,{style:{boxShadow:"none",borderRadius:"none",flexGrow:1},children:[e.jsx(s,{interactive:!0,leading:e.jsx(r,{name:"fa-solid fa-home"}),children:"Dashboard"}),e.jsx(s,{interactive:!0,leading:e.jsx(r,{name:"fa-solid fa-book"}),children:"My Courses"}),e.jsx(s,{interactive:!0,leading:e.jsx(r,{name:"fa-solid fa-chart-line"}),children:"Progress"}),e.jsx(s,{interactive:!0,leading:e.jsx(r,{name:"fa-solid fa-comments"}),children:"Discussions"}),e.jsx(s,{interactive:!0,leading:e.jsx(r,{name:"fa-solid fa-cog"}),children:"Settings"})]}),e.jsx("div",{style:{marginTop:"auto",padding:n.spacing.md},children:e.jsx(o,{variant:"secondary",style:{width:"100%"},children:"Logout"})})]}),x=e.jsxs("div",{style:{padding:n.spacing.lg,height:"100%",overflowY:"auto"},children:[e.jsx("h2",{style:{...n.typography.h2,margin:`0 0 ${n.spacing.lg} 0`},children:"Main Application Content"}),e.jsx("p",{style:n.typography.body,children:"This is the primary content area of your application. When the sidenav is in 'side' mode, this content will be pushed to make space for the sidenav. In 'over' mode, the sidenav will appear on top of this content."}),e.jsx("p",{style:n.typography.body,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{style:n.typography.body,children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."}),e.jsx("p",{style:n.typography.body,children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."}),e.jsx("p",{style:n.typography.body,children:"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."})]}),q={title:"Components/Sidenav",component:d,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{open:{control:"boolean",description:"Controls whether the sidenav is open or closed (controlled)."},onOpenChange:{action:"openChange",description:"Callback function when the sidenav open state changes."},position:{control:"radio",options:["start","end"],description:"The position of the sidenav (left or right).",defaultValue:"start"},mode:{control:"radio",options:["over","side"],description:"The mode of the sidenav (overlay content or push content).",defaultValue:"side"},width:{control:"text",description:'The width of the sidenav when open (e.g., "280px", "30%").',defaultValue:"280px"},children:{control:!1}},decorators:[t=>e.jsxs("div",{style:{height:"100vh",width:"100vw",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{padding:n.spacing.md,background:n.colors.primary[40],color:"#fff",display:"flex",alignItems:"center",gap:n.spacing.md},children:[e.jsx("h1",{style:{...n.typography.h3,margin:0,color:"#fff"},children:"App Header"}),e.jsx("span",{style:{marginLeft:"auto"},children:e.jsx(o,{variant:"ghost",onClick:()=>{},style:{color:"#fff"},children:"Toggle Sidenav (via header)"})})]}),e.jsx("div",{style:{flexGrow:1,display:"flex"},children:e.jsx(t,{})})]})]},l={render:t=>{const[i,a]=m.useState(!0);return e.jsxs(v,{style:{flexGrow:1},children:[e.jsx(d,{...t,open:i,onOpenChange:a,mode:"side",position:"start",children:g}),e.jsxs(h,{sidenavWidth:t.width,sidenavPosition:"start",sidenavMode:"side",isSidenavOpen:i,children:[e.jsx(o,{onClick:()=>a(!i),variant:"primary",style:{marginBottom:n.spacing.md},children:"Toggle Sidenav"}),x]})]})},args:{width:"280px"}},p={render:t=>{const[i,a]=m.useState(!1);return e.jsxs(v,{style:{flexGrow:1},children:[e.jsx(d,{...t,open:i,onOpenChange:a,mode:"over",position:"start",children:g}),e.jsxs(h,{sidenavWidth:t.width,sidenavPosition:"start",sidenavMode:"over",isSidenavOpen:i,children:[e.jsx(o,{onClick:()=>a(!i),variant:"primary",style:{marginBottom:n.spacing.md},children:"Toggle Sidenav"}),x]})]})},args:{width:"280px"}},c={render:t=>{const[i,a]=m.useState(!0);return e.jsxs(v,{style:{flexGrow:1},children:[e.jsxs(h,{sidenavWidth:t.width,sidenavPosition:"end",sidenavMode:"side",isSidenavOpen:i,children:[e.jsx(o,{onClick:()=>a(!i),variant:"primary",style:{marginBottom:n.spacing.md},children:"Toggle Sidenav"}),x]}),e.jsx(d,{...t,open:i,onOpenChange:a,mode:"side",position:"end",children:g})]})},args:{width:"280px"}},u={render:t=>{const[i,a]=m.useState(!1);return e.jsxs(v,{style:{flexGrow:1},children:[e.jsxs(h,{sidenavWidth:t.width,sidenavPosition:"end",sidenavMode:"over",isSidenavOpen:i,children:[e.jsx(o,{onClick:()=>a(!i),variant:"primary",style:{marginBottom:n.spacing.md},children:"Toggle Sidenav"}),x]}),e.jsx(d,{...t,open:i,onOpenChange:a,mode:"over",position:"end",children:g})]})},args:{width:"280px"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const B=["SideSidenav","OverSidenav","SideSidenavEnd","OverSidenavEnd"];export{p as OverSidenav,u as OverSidenavEnd,l as SideSidenav,c as SideSidenavEnd,B as __namedExportsOrder,q as default};
