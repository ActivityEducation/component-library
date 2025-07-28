import{j as o,t as n}from"./iframe-DBjxWcSu.js";import{O as u}from"./ObjectiveProgress-B8-IF2fy.js";import"./emotion-styled.browser.esm-BYbfZwar.js";import"./index--bmTD6EN.js";import"./index-B0cpd8Ed.js";import"./index-BjSZ1avc.js";import"./index-BiwRjp0i.js";import"./emotion-react.browser.esm-B0Qy288v.js";const f={title:"Widgets/Objective Progress Card",component:u,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{title:{control:"text",description:"The title of the objective.",defaultValue:"Master Advanced Vocabulary"},description:{control:"text",description:"A brief description or key result statement.",defaultValue:"Learn 500 new French vocabulary words with 80% retention."},currentValue:{control:{type:"range",min:0,max:500,step:1},description:"The current value of the objective's progress.",defaultValue:250},targetValue:{control:{type:"number",min:1,step:1},description:"The target value for the objective.",defaultValue:500},unit:{control:"text",description:"The unit of measurement for the progress (e.g., 'words', 'items').",defaultValue:"words"},status:{control:"select",options:["on-track","at-risk","achieved"],description:"The status of the objective.",defaultValue:"on-track"},onViewDetails:{action:"viewDetailsClicked",description:"Callback for viewing objective details."}},decorators:[c=>o.jsx("div",{style:{padding:n.spacing.xl,backgroundColor:n.colors.neutral[95],width:"100%",maxWidth:"400px"},children:o.jsx(c,{})})]},e={args:{title:'Complete "ActivityPub Deep Dive"',description:"Finish all 10 modules of the ActivityPub course.",currentValue:7,targetValue:10,unit:"modules",status:"on-track"}},t={args:{title:"Pass B2 French Exam",description:"Achieve a score of 80% or higher on the practice B2 exam.",currentValue:85,targetValue:100,unit:"%",status:"achieved"}},r={args:{title:"Daily Speaking Practice",description:"Complete 30 minutes of speaking practice daily for 7 days.",currentValue:3,targetValue:7,unit:"days",status:"at-risk"}},a={args:{title:'Read "Federated Systems" Book',description:"Read 200 pages of the assigned book.",currentValue:120,targetValue:200,unit:"pages",status:"on-track"}},s={args:{title:"Start New Project",description:"Begin building a decentralized chat application.",currentValue:0,targetValue:10,unit:"stages",status:"on-track"}},i={args:{title:"Review Grammar Rules",description:"Review all grammar rules for Unit 3.",currentValue:100,targetValue:100,unit:"%",status:"achieved",onViewDetails:void 0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Complete "ActivityPub Deep Dive"',
    description: 'Finish all 10 modules of the ActivityPub course.',
    currentValue: 7,
    targetValue: 10,
    unit: 'modules',
    status: 'on-track'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Pass B2 French Exam',
    description: 'Achieve a score of 80% or higher on the practice B2 exam.',
    currentValue: 85,
    targetValue: 100,
    unit: '%',
    status: 'achieved'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Daily Speaking Practice',
    description: 'Complete 30 minutes of speaking practice daily for 7 days.',
    currentValue: 3,
    targetValue: 7,
    unit: 'days',
    status: 'at-risk'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Read "Federated Systems" Book',
    description: 'Read 200 pages of the assigned book.',
    currentValue: 120,
    targetValue: 200,
    unit: 'pages',
    status: 'on-track'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Start New Project',
    description: 'Begin building a decentralized chat application.',
    currentValue: 0,
    targetValue: 10,
    unit: 'stages',
    status: 'on-track' // Status can still be 'on-track' if not past due
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Review Grammar Rules',
    description: 'Review all grammar rules for Unit 3.',
    currentValue: 100,
    targetValue: 100,
    unit: '%',
    status: 'achieved',
    onViewDetails: undefined // Explicitly remove the button
  }
}`,...i.parameters?.docs?.source}}};const k=["OnTrack","Achieved","AtRisk","CustomObjective","ZeroProgress","NoDetailsButton"];export{t as Achieved,r as AtRisk,a as CustomObjective,i as NoDetailsButton,e as OnTrack,s as ZeroProgress,k as __namedExportsOrder,f as default};
