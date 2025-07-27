import{j as e,t as i}from"./iframe-DZHKm7cV.js";import{s as a}from"./emotion-styled.browser.esm-B9gxxbr3.js";import{C as l}from"./index-B2AR2asN.js";import{I as r}from"./index-DA9UlLMO.js";import{B as d}from"./index-CXwCvUvK.js";import{L as c,a as p}from"./index-Br91DahA.js";import{B as m}from"./index-cRXKMlDP.js";const u=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${i.spacing.lg};
  text-align: center;
  color: ${i.colors.neutral[60]};
  ${i.typography.bodySmall};
`,g=a.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`,f=a.span`
  ${i.typography.bodySmall};
  color: ${i.colors.text.default};
  font-weight: 500;
  line-height: 1.3;
`,h=a.span`
  ${i.typography.caption};
  color: ${i.colors.neutral[50]};
  margin-top: ${i.spacing.xxs};
  line-height: 1.2;
`,y=n=>{switch(n){case"assignment":return"fa-solid fa-file-signature";case"quiz":return"fa-solid fa-question-circle";case"event":return"fa-solid fa-calendar-alt";default:return"fa-solid fa-calendar"}},x=({deadlines:n,onViewAll:s,...o})=>e.jsx(l,{title:"Upcoming Deadlines",subtitle:"Don't miss a beat in your learning journey.",header:e.jsx(r,{name:"fa-solid fa-calendar-day",size:"lg",color:i.colors.tertiary[50]}),actions:s&&n.length>0?e.jsx(d,{variant:"ghost",size:"sm",onClick:s,style:{width:"100%"},children:"View All Deadlines"}):null,...o,children:n.length>0?e.jsx(c,{style:{boxShadow:"none",borderRadius:"none"},children:n.slice(0,5).map(t=>e.jsx(p,{leading:e.jsx(r,{name:y(t.type),size:"md",color:i.colors.primary[40]}),trailing:t.isUrgent?e.jsx(m,{variant:"error",style:{marginLeft:i.spacing.md},children:"Urgent"}):null,interactive:!0,onClick:()=>alert(`Viewing details for: ${t.title}`),children:e.jsxs(g,{children:[e.jsx(f,{children:t.title}),e.jsx(h,{children:t.dueDate})]})},t.id))}):e.jsxs(u,{children:[e.jsx(r,{name:"fa-solid fa-clipboard-check",size:"xl"}),e.jsx("p",{children:"No upcoming deadlines! Time to plan your next steps."})]})});x.__docgenInfo={description:`A dashboard widget that lists upcoming assignments, quizzes, or events.
It provides a quick overview of important deadlines to learners.`,methods:[],displayName:"UpcomingDeadlinesCard",props:{deadlines:{required:!0,tsType:{name:"Array",elements:[{name:"DeadlineItem"}],raw:"DeadlineItem[]"},description:"An array of upcoming deadline items to display."},onViewAll:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:'Callback function for when the "View All Deadlines" button is clicked.'},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles for the outer container."}}};export{x as U};
