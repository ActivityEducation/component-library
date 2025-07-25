import{j as e,t as s}from"./iframe-CUhOUwcP.js";import{s as a}from"./emotion-styled.browser.esm-DVCxs-Ot.js";import{C as S}from"./index-FpduDP9J.js";import{B as i}from"./index-DWmN52dn.js";import{P as u}from"./index-CQG4qJdo.js";import{L as g,a as o}from"./index-DRRrGnwL.js";import{B as x}from"./index-B94-ZCN2.js";import{T as D,a as $,b as j,c as l,d as P,e as d}from"./index-CKnwgLXk.js";import{T}from"./index-CXDLutqo.js";import{I as r}from"./index-DmB4jJR3.js";import"./index-C_33SIl_.js";import"./index-COSre0uJ.js";import"./index-GE15-x7a.js";import"./index-Cy3HKWZA.js";import"./index-cc4YgYVq.js";import"./index-CXctrSs4.js";import"./index-7OPGXIgg.js";import"./index-WPXo8x2J.js";import"./index-Cu_Bt6nJ.js";import"./index-BpOWu1Ut.js";import"./index-CX22U3Jf.js";import"./index-Bi7NsQvI.js";import"./index-yMqrkw0u.js";import"./index-DNNr7T5M.js";import"./index-BkOIa7Dt.js";import"./ObjectiveProgress-Deypp-5I.js";import"./UpcomingDeadlines-B4361DGz.js";import"./emotion-react.browser.esm-Bku_YNzS.js";import"./index-BD4C_oav.js";import"./index-DQLaKyW0.js";const I=a.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${s.colors.background.default};
  font-family: ${s.typography.fontFamily};
`,R=a(T)`
  background-color: ${s.colors.primary[40]};
  color: ${s.colors.text.onPrimary};
  padding: ${s.spacing.md} ${s.spacing.lg};
  box-shadow: ${s.shadows.md};
  z-index: 10; // Ensure header is on top
  position: sticky;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  border-radius: 0; /* No rounded corners on main header */
`,z=a.h2`
  ${s.typography.h3};
  color: inherit;
  margin: 0;
`,O=a.main`
  flex-grow: 1;
  padding: ${s.spacing.xl};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid */
  gap: ${s.spacing.xl};

  @media (max-width: ${s.breakpoints.md}) {
    padding: ${s.spacing.lg};
    gap: ${s.spacing.lg};
    grid-template-columns: 1fr; /* Stack on smaller screens */
  }
`,n=a(S)`
  width: 100%; /* Allow cards to fill grid column */
  max-width: none; /* Override default max-width of Card for grid layout */
`,F=a.h3`
  ${s.typography.h4};
  color: ${s.colors.text.default};
  margin-top: ${s.spacing.lg};
  margin-bottom: ${s.spacing.md};
  width: 100%; /* Ensure title spans full width in grid context */
  grid-column: 1 / -1; /* Span all columns in grid */
`,y=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${s.spacing.xl};
  color: ${s.colors.neutral[60]};
  ${s.typography.body};

  & > .fa-solid {
    font-size: ${s.typography.h1.fontSize};
    margin-bottom: ${s.spacing.md};
    color: ${s.colors.neutral[70]};
  }
`,p=[{id:1,title:"ActivityPub Fundamentals",progress:75,status:"In Progress",instructor:"Alice Smith"},{id:2,title:"Decentralized Identity on the Web",progress:100,status:"Completed",instructor:"Bob Johnson"},{id:3,title:"Federated Learning Architectures",progress:30,status:"Not Started",instructor:"Charlie Davis"},{id:4,title:"Web3 & Education: Practical Applications",progress:50,status:"In Progress",instructor:"Diana Miller"}],b=[{id:1,type:"assignment",desc:"Submitted Assignment 3: ActivityPub API Design",timestamp:"2 hours ago"},{id:2,type:"discussion",desc:'Replied to "Future of Federated Social Media"',timestamp:"yesterday"},{id:3,type:"course",desc:"Completed Module 2: Introduction to DID",timestamp:"3 days ago"},{id:4,type:"announcement",desc:"New announcement: Webinar on IPFS integration",timestamp:"1 week ago"}],c=[{id:1,name:"Master ActivityPub Protocol",progress:60,status:"In Progress",dueDate:"2025-09-30"},{id:2,name:"Complete Decentralized Identity Course",progress:85,status:"At Risk",dueDate:"2025-08-15"},{id:3,name:"Publish First Federated Post",progress:100,status:"Achieved",dueDate:"2025-07-20"}],v=({...h})=>{const f=p.reduce((t,k)=>t+k.progress,0)/p.length,w=c.filter(t=>t.status==="In Progress").length,C=c.filter(t=>t.status==="Achieved").length,A=c.filter(t=>t.status==="At Risk").length;return e.jsxs(I,{...h,children:[e.jsxs(R,{justifyContent:"space-between",children:[e.jsx(z,{children:"EduPub Dashboard"}),e.jsxs(i,{variant:"ghost",style:{color:s.colors.text.onPrimary},children:[e.jsx(r,{name:"fa-solid fa-user-circle",size:"lg",style:{marginRight:s.spacing.sm}}),"John Doe"]})]}),e.jsxs(O,{children:[e.jsx(n,{title:e.jsx("span",{style:{color:s.colors.text.default},children:"Your Key Objectives"}),subtitle:e.jsx("span",{style:{color:s.colors.neutral[50]},children:"Tracking your progress towards learning goals."}),actions:e.jsxs(i,{variant:"primary",size:"sm",onClick:()=>alert("View All Objectives"),children:[e.jsx(r,{name:"fa-solid fa-eye",style:{marginRight:s.spacing.xs}})," View All Objectives"]}),style:{gridColumn:"1 / -1"},children:e.jsxs("p",{style:{...s.typography.body,margin:0,color:s.colors.text.default},children:["You have **",w,"** objectives in progress, **",C,"** completed, and **",A,"** at risk. Keep pushing forward!"]})}),e.jsxs(n,{title:e.jsx("span",{style:{color:s.colors.text.default},children:"Overall Course Progress"}),children:[e.jsx(u,{value:f}),e.jsxs("p",{style:{...s.typography.bodySmall,textAlign:"center",margin:`${s.spacing.sm} 0 0 0`,color:s.colors.neutral[50]},children:[f.toFixed(0),"% Completed Across All Courses"]})]}),e.jsxs(n,{title:e.jsx("span",{style:{color:s.colors.text.default},children:"My Current Objectives"}),actions:e.jsxs(i,{variant:"primary",size:"sm",onClick:()=>alert("Add New Objective"),children:[e.jsx(r,{name:"fa-solid fa-plus",style:{marginRight:s.spacing.xs}})," New Objective"]}),children:[c.length>0?e.jsx(g,{style:{boxShadow:"none",border:"none"},children:c.map(t=>e.jsx(o,{interactive:!0,onClick:()=>alert(`View Objective: ${t.name}`),leading:e.jsx(r,{name:"fa-solid fa-bullseye",size:"sm"}),trailing:e.jsx(x,{variant:t.status==="Achieved"?"success":t.status==="In Progress"?"primary":"error",children:t.status}),children:e.jsxs("div",{style:{flexGrow:1,marginRight:s.spacing.md},children:[e.jsx("p",{style:{...s.typography.bodySmall,fontWeight:s.typography.button.fontWeight,margin:0,color:s.colors.text.default},children:t.name}),e.jsx(u,{value:t.progress,max:100,style:{width:"100%",height:"4px",marginTop:s.spacing.xxs}}),e.jsxs("p",{style:{...s.typography.caption,margin:0,color:s.colors.neutral[60]},children:["Progress: ",t.progress,"% ",t.dueDate&&`(Due: ${t.dueDate})`]})]})},t.id))}):e.jsxs(y,{children:[e.jsx(r,{name:"fa-solid fa-bullseye"}),e.jsx("p",{children:"No objectives set yet! Start by creating your first goal."})]}),e.jsx(i,{variant:"ghost",size:"sm",style:{marginTop:s.spacing.md,width:"100%"},onClick:()=>alert("View All Objectives"),children:"View All Objectives"})]}),e.jsxs(n,{title:e.jsx("span",{style:{color:s.colors.text.default},children:"Flashcards & Quick Actions"}),actions:e.jsxs(i,{variant:"secondary",size:"sm",onClick:()=>alert("Add New Flashcard"),children:[e.jsx(r,{name:"fa-solid fa-plus",style:{marginRight:s.spacing.xs}})," New Flashcard"]}),children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:s.spacing.md},children:[e.jsxs("p",{style:{...s.typography.body,color:s.colors.text.default},children:["You have ",e.jsx(x,{variant:"primary",children:"7"})," flashcards due for review today."]}),e.jsxs(i,{variant:"secondary",size:"md",style:{width:"100%"},onClick:()=>alert("Start Study Session"),children:[e.jsx(r,{name:"fa-solid fa-play-circle",style:{marginRight:s.spacing.xs}})," Start Study Session"]})]}),e.jsxs("div",{style:{marginTop:s.spacing.lg,paddingTop:s.spacing.md,borderTop:`1px solid ${s.colors.neutral[90]}`},children:[e.jsx("h5",{style:{...s.typography.h5,color:s.colors.text.default,marginBottom:s.spacing.sm},children:"Quick Access:"}),e.jsxs(g,{style:{boxShadow:"none",border:"none"},children:[e.jsx(o,{interactive:!0,leading:e.jsx(r,{name:"fa-solid fa-comments"}),onClick:()=>alert("Go to Discussions"),children:"Discussions"}),e.jsx(o,{interactive:!0,leading:e.jsx(r,{name:"fa-solid fa-chart-line"}),onClick:()=>alert("Go to Progress Report"),children:"Progress Report"}),e.jsx(o,{interactive:!0,leading:e.jsx(r,{name:"fa-solid fa-cog"}),onClick:()=>alert("Go to Settings"),children:"Settings"})]})]})]}),e.jsxs(n,{title:e.jsx("span",{style:{color:s.colors.text.default},children:"Recent Activities"}),children:[b.length>0?e.jsx(g,{style:{boxShadow:"none",border:"none"},children:b.map(t=>e.jsx(o,{leading:e.jsx(r,{name:t.type==="assignment"?"fa-solid fa-clipboard-list":t.type==="discussion"?"fa-solid fa-comments":t.type==="course"?"fa-solid fa-book":"fa-solid fa-bullhorn",size:"sm"}),trailing:e.jsx("span",{style:{...s.typography.caption,color:s.colors.neutral[60]},children:t.timestamp}),interactive:!0,onClick:()=>alert(`View ${t.desc}`),children:e.jsx("span",{style:{...s.typography.bodySmall,color:s.colors.text.default},children:t.desc})},t.id))}):e.jsxs(y,{children:[e.jsx(r,{name:"fa-solid fa-bell"}),e.jsx("p",{children:"No recent activity. Start learning to see updates!"})]}),e.jsx(i,{variant:"ghost",size:"sm",style:{marginTop:s.spacing.md,width:"100%"},onClick:()=>alert("View All Activities"),children:"View All Activities"})]}),e.jsx(F,{children:"My Courses"}),e.jsx(n,{style:{gridColumn:"1 / -1",padding:0,boxShadow:"none",border:"none"},children:p.length>0?e.jsxs(D,{striped:!0,bordered:!0,children:[e.jsx($,{children:e.jsxs(j,{children:[e.jsx(l,{children:"Course Title"}),e.jsx(l,{children:"Instructor"}),e.jsx(l,{children:"Progress"}),e.jsx(l,{children:"Status"}),e.jsx(l,{children:"Actions"})]})}),e.jsx(P,{children:p.map(t=>e.jsxs(j,{children:[e.jsx(d,{style:{minWidth:"180px"},children:t.title}),e.jsx(d,{style:{minWidth:"120px"},children:t.instructor}),e.jsx(d,{style:{minWidth:"100px"},children:e.jsx(u,{value:t.progress,max:100,style:{width:"80px",height:"6px"}})}),e.jsx(d,{style:{minWidth:"100px"},children:e.jsx(x,{variant:t.status==="Completed"?"success":t.status==="In Progress"?"primary":"default",children:t.status})}),e.jsx(d,{style:{minWidth:"100px"},children:e.jsx(i,{variant:"ghost",size:"sm",onClick:()=>alert(`Access ${t.title}`),children:"Access"})})]},t.id))})]}):e.jsxs(y,{style:{margin:0,border:`1px solid ${s.colors.border.default}`,borderRadius:s.borderRadius.md},children:[e.jsx(r,{name:"fa-solid fa-book"}),e.jsx("p",{children:"You haven't enrolled in any courses yet."}),e.jsx(i,{variant:"primary",style:{marginTop:s.spacing.md},onClick:()=>alert("Browse Courses"),children:"Browse Courses"})]})})]})]})};v.__docgenInfo={description:`The Dashboard component provides a high-level overview page, showcasing
the integration of various components from the AscendUCore Design System.
It includes sections for progress, recent activities, courses, and quick actions,
adhering to EducationPub's UX/UI principles.`,methods:[],displayName:"Dashboard",props:{css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles for the overall dashboard container."}}};const me={title:"Pages/Dashboard",component:v,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{},decorators:[h=>e.jsx("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",backgroundColor:s.colors.background.default},children:e.jsx(h,{})})]},m={args:{}};s.spacing.lg,{...s.typography.h3,margin:`${s.spacing.lg}`,color:s.colors.primary[40]},g,o,r,o,r,o,r,o,r,s.spacing.md,i;m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    // No specific args for a full page component usually, unless it takes global data
  }
}`,...m.parameters?.docs?.source}}};const ge=["DefaultDashboard"];export{m as DefaultDashboard,ge as __namedExportsOrder,me as default};
