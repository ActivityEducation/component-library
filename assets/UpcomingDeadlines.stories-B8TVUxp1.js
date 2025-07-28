import{j as s,t as r}from"./iframe-XJf-RO9W.js";import{U as l}from"./UpcomingDeadlines-C4znN0P-.js";import"./emotion-styled.browser.esm-Zt9Xnlbb.js";import"./index-BmzST_Tt.js";import"./index-guuBgZ9n.js";import"./index-ByguWD-9.js";import"./emotion-react.browser.esm-DE_3pz7Q.js";import"./index-BevCfjQH.js";import"./index-C2jQ6SkN.js";const d=[{id:"d1",title:"Module 4 Quiz",dueDate:"Today",type:"quiz",isUrgent:!0},{id:"d2",title:"Assignment 2: Federated Identity",dueDate:"Tomorrow",type:"assignment"},{id:"d3",title:"Live Q&A with Instructor",dueDate:"Aug 10",type:"event"},{id:"d4",title:"Optional Reading: ActivityPub Spec",dueDate:"Aug 15",type:"assignment"},{id:"d5",title:"Final Project Submission",dueDate:"Sep 1",type:"assignment"}],w={title:"Widgets/Upcoming Deadlines Card",component:l,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{deadlines:{control:"object",description:"An array of upcoming deadline items to display."},onViewAll:{action:"viewAllDeadlinesClicked",description:"Callback for viewing all deadlines."}},decorators:[o=>s.jsx("div",{style:{padding:r.spacing.xl,backgroundColor:r.colors.neutral[95],width:"100%",maxWidth:"400px"},children:s.jsx(o,{})})]},e={args:{deadlines:d}},t={args:{deadlines:[]}},a={args:{deadlines:[{id:"u1",title:"Short Quiz: Basic Terminology",dueDate:"Today",type:"quiz",isUrgent:!0},{id:"u2",title:"Review Session RSVP",dueDate:"Tomorrow",type:"event",isUrgent:!0}]}},n={args:{deadlines:d,onViewAll:()=>alert("Navigating to full deadlines page!")}},i={args:{deadlines:[{id:"m1",title:"Assignment 1",dueDate:"Today",type:"assignment",isUrgent:!0},{id:"m2",title:"Midterm Exam",dueDate:"Next Week",type:"quiz"},{id:"m3",title:"Guest Lecture",dueDate:"Sep 5",type:"event"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    deadlines: sampleDeadlines
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    deadlines: []
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    deadlines: [{
      id: 'u1',
      title: 'Short Quiz: Basic Terminology',
      dueDate: 'Today',
      type: 'quiz',
      isUrgent: true
    }, {
      id: 'u2',
      title: 'Review Session RSVP',
      dueDate: 'Tomorrow',
      type: 'event',
      isUrgent: true
    }]
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    deadlines: sampleDeadlines,
    onViewAll: () => alert('Navigating to full deadlines page!')
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    deadlines: [{
      id: 'm1',
      title: 'Assignment 1',
      dueDate: 'Today',
      type: 'assignment',
      isUrgent: true
    }, {
      id: 'm2',
      title: 'Midterm Exam',
      dueDate: 'Next Week',
      type: 'quiz'
    }, {
      id: 'm3',
      title: 'Guest Lecture',
      dueDate: 'Sep 5',
      type: 'event'
    }]
  }
}`,...i.parameters?.docs?.source}}};const A=["DefaultDeadlines","NoDeadlines","OnlyUrgentDeadlines","WithViewAllButton","MultipleTypes"];export{e as DefaultDeadlines,i as MultipleTypes,t as NoDeadlines,a as OnlyUrgentDeadlines,n as WithViewAllButton,A as __namedExportsOrder,w as default};
