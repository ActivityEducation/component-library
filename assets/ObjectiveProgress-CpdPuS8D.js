import{j as e,t}from"./iframe-DZHKm7cV.js";import{s as a}from"./emotion-styled.browser.esm-B9gxxbr3.js";import{C as f}from"./index-B2AR2asN.js";import{P as g}from"./index-CtIuLzZt.js";import{I as h}from"./index-DA9UlLMO.js";import{B as v}from"./index-CXwCvUvK.js";const y=r=>{switch(r){case"achieved":return"success";case"on-track":return"primary";case"at-risk":return"warning";default:return"default"}},x=r=>{switch(r){case"achieved":return"fa-solid fa-check-circle";case"on-track":return"fa-solid fa-sync-alt";case"at-risk":return"fa-solid fa-exclamation-triangle";default:return"fa-solid fa-info-circle"}},b=a.div`
  display: flex;
  align-items: center;
  gap: ${t.spacing.md};
  flex-grow: 1; // Allow content to take space
`,j=a.div`
  display: flex;
  flex-direction: column;
  gap: ${t.spacing.sm};
`,k=a.div`
  display: flex;
  align-items: center;
  gap: ${t.spacing.sm};
`,w=a.span`
  ${t.typography.bodySmall};
  color: ${t.colors.text.default};
  white-space: nowrap; // Prevent text from wrapping
`,T=({title:r,description:l,currentValue:i,targetValue:s,unit:d="",status:n,onViewDetails:o,...p})=>{const u=s===0?0:i/s*100,c=y(n),m=x(n);return e.jsx(f,{title:r,subtitle:l,header:e.jsx(b,{children:e.jsx(h,{name:m,size:"xxl",color:t.colors[c==="success"?"secondary":c==="primary"?"primary":"error"][40]})}),actions:o?e.jsx(v,{variant:"ghost",size:"sm",onClick:o,children:"View Details"}):null,...p,children:e.jsx(j,{children:e.jsxs(k,{children:[e.jsx(g,{value:i,max:s}),e.jsxs(w,{children:[i," / ",s," ",d," (",Math.round(u),"%)"]})]})})})};T.__docgenInfo={description:`A dashboard widget displaying the progress of a single learning objective or key result.
It includes a title, description, progress bar, status badge, and an optional action button.`,methods:[],displayName:"ObjectiveProgressCard",props:{title:{required:!0,tsType:{name:"string"},description:"The title of the objective."},description:{required:!0,tsType:{name:"string"},description:"A brief description or key result statement for the objective."},currentValue:{required:!0,tsType:{name:"number"},description:"The current value of the objective's progress."},targetValue:{required:!0,tsType:{name:"number"},description:"The target value for the objective."},unit:{required:!1,tsType:{name:"string"},description:"The unit of measurement for the progress (e.g., 'items', '%', 'hours').",defaultValue:{value:"''",computed:!1}},status:{required:!0,tsType:{name:"union",raw:"'on-track' | 'at-risk' | 'achieved'",elements:[{name:"literal",value:"'on-track'"},{name:"literal",value:"'at-risk'"},{name:"literal",value:"'achieved'"}]},description:"The status of the objective ('on-track', 'at-risk', 'achieved')."},onViewDetails:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:'Callback function for when the "View Details" button is clicked.'},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles for the outer container."}}};export{T as O};
