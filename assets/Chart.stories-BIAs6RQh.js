import{j as i,t as e}from"./iframe-CkUD85aG.js";import{C as p}from"./index-DPRa9-QR.js";import"./emotion-styled.browser.esm-YHkEzSHc.js";import"./index-BvK6iIix.js";import"./index-D-TiErUn.js";import"./index-DN5FX4hD.js";const c=[{name:"Jan","Course Progress":4e3,"Assignments Done":2400},{name:"Feb","Course Progress":3e3,"Assignments Done":1398},{name:"Mar","Course Progress":2e3,"Assignments Done":9800},{name:"Apr","Course Progress":2780,"Assignments Done":3908},{name:"May","Course Progress":1890,"Assignments Done":4800},{name:"Jun","Course Progress":2390,"Assignments Done":3800},{name:"Jul","Course Progress":3490,"Assignments Done":4300}],m=[{name:"Module A",Score:75},{name:"Module B",Score:90},{name:"Module C",Score:60},{name:"Module D",Score:85}],d=[{name:"Completed",value:300},{name:"In Progress",value:150},{name:"Not Started",value:50}],S={title:"Components/Chart",component:p,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{type:{control:"select",options:["line","bar","pie"],description:"The type of chart to render.",defaultValue:"line"},data:{control:"object",description:"The data for the chart."},dataKey:{control:"text",description:"The key from the data objects to be used for the main value."},nameKey:{control:"text",description:"The key from the data objects to be used for the label."},title:{control:"text",description:"The title of the chart.",defaultValue:"Sample Chart"},description:{control:"text",description:"An optional description for the chart."},colors:{control:"object",description:"An array of color strings for the chart elements."},aspectRatio:{control:{type:"number",min:.1,step:.1},description:"The aspect ratio (width / height) of the chart container.",defaultValue:16/9}},decorators:[l=>i.jsx("div",{style:{padding:e.spacing.xl,backgroundColor:e.colors.background.default,width:"100%",maxWidth:"700px",height:"400px",display:"flex",flexDirection:"column",boxSizing:"border-box"},children:i.jsx(l,{})})]},r={args:{type:"line",title:"Monthly Course Progress",description:"Track your progress and completed assignments over time.",data:c,dataKey:"Course Progress",nameKey:"name",colors:[e.colors.primary[40]]}},t={args:{type:"bar",title:"Module Scores",description:"Average scores for recent modules.",data:m,dataKey:"Score",nameKey:"name",colors:[e.colors.secondary[40]]}},a={args:{type:"pie",title:"Content Completion Status",description:"Breakdown of your learning content status.",data:d,dataKey:"value",nameKey:"name",colors:[e.colors.secondary[60],e.colors.primary[40],e.colors.neutral[60]]}},o={args:{type:"line",title:"Comparative Progress",description:"Comparing course progress and assignments over months.",data:c,dataKey:"Course Progress",nameKey:"name",colors:[e.colors.primary[40],e.colors.secondary[40]]}},s={args:{type:"bar",title:"No Data Chart",description:"This chart shows an empty state when no data is provided.",data:[],dataKey:"value",nameKey:"name"}},n={args:{type:"bar",title:"Custom Aspect Ratio Chart",description:"This chart has a 2:1 aspect ratio (wider).",data:m,dataKey:"Score",nameKey:"name",aspectRatio:2}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'line',
    title: 'Monthly Course Progress',
    description: 'Track your progress and completed assignments over time.',
    data: lineChartData,
    dataKey: 'Course Progress',
    nameKey: 'name',
    colors: [theme.colors.primary['40']] // Example single color for line
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'bar',
    title: 'Module Scores',
    description: 'Average scores for recent modules.',
    data: barChartData,
    dataKey: 'Score',
    nameKey: 'name',
    colors: [theme.colors.secondary['40']] // Example single color for bars
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'pie',
    title: 'Content Completion Status',
    description: 'Breakdown of your learning content status.',
    data: pieChartData,
    dataKey: 'value',
    nameKey: 'name',
    colors: [theme.colors.secondary['60'],
    // Completed
    theme.colors.primary['40'],
    // In Progress
    theme.colors.neutral['60'] // Not Started
    ]
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'line',
    title: 'Comparative Progress',
    description: 'Comparing course progress and assignments over months.',
    data: lineChartData,
    dataKey: 'Course Progress',
    // Primary data key
    nameKey: 'name',
    // For multi-series, Recharts automatically picks up other keys if they exist in data.
    // If you explicitly wanted to show multiple lines, you'd render multiple <Line> components
    // inside the Chart component's render method or define a 'series' prop.
    // For this story, we'll assume Recharts handles simple multi-key data for default lines.
    // You might need to adjust the Chart component to explicitly render multiple lines/bars.
    // However, as per Chart component's current implementation, it only renders one line/bar.
    // To properly demonstrate multi-series, the Chart component itself would need a 'series' prop.
    // For now, let's keep it simple and ensure the primary line shows.
    colors: [theme.colors.primary['40'], theme.colors.secondary['40']]
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'bar',
    // Can be any type
    title: 'No Data Chart',
    description: 'This chart shows an empty state when no data is provided.',
    data: [],
    // Empty data array
    dataKey: 'value',
    nameKey: 'name'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'bar',
    title: 'Custom Aspect Ratio Chart',
    description: 'This chart has a 2:1 aspect ratio (wider).',
    data: barChartData,
    dataKey: 'Score',
    nameKey: 'name',
    aspectRatio: 2 // 2:1 aspect ratio
  }
}`,...n.parameters?.docs?.source}}};const b=["LineChartStory","BarChartStory","PieChartStory","MultiSeriesLineChart","EmptyChart","CustomAspectRatio"];export{t as BarChartStory,n as CustomAspectRatio,s as EmptyChart,r as LineChartStory,o as MultiSeriesLineChart,a as PieChartStory,b as __namedExportsOrder,S as default};
