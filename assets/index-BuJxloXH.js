import{j as r}from"./iframe-DBjxWcSu.js";import{s}from"./emotion-styled.browser.esm-BYbfZwar.js";import{k as n}from"./emotion-react.browser.esm-B0Qy288v.js";const o=n`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,a=n`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
`,l=s.svg`
  // Base styles for the SVG container
  animation: ${o} 1.4s linear infinite; // Continuous rotation
  display: block; // Ensure it takes up its own space
  
  // Sizing based on prop
  ${e=>{switch(e.size){case"sm":return`
          width: 24px;
          height: 24px;
        `;case"lg":return`
          width: 48px;
          height: 48px;
        `;case"md":default:return`
          width: 36px;
          height: 36px;
        `}}}
`,c=s.circle`
  stroke: ${e=>e.theme.colors.neutral[80]}; // Lighter color for the track
  stroke-width: 4px; // Thickness of the circle line
  fill: none; // No fill
`,d=s.circle`
  stroke: ${e=>e.theme.colors.primary[40]}; // Primary color for the progress
  stroke-width: 4px; // Thickness of the line
  fill: none; // No fill
  stroke-linecap: round; // Rounded ends for the stroke
  animation: ${a} 1.4s ease-in-out infinite; // Indeterminate animation
  transform-origin: center; // Ensure animation rotates from center
`,m=({size:e="md",...i})=>{const t=2*Math.PI*20;return r.jsxs(l,{viewBox:"0 0 50 50",size:e,...i,children:[r.jsx(c,{cx:"25",cy:"25",r:20}),r.jsx(d,{cx:"25",cy:"25",r:20,strokeDasharray:`${t*.75}, ${t*.25}`,strokeDashoffset:0})]})};m.__docgenInfo={description:`A circular Spinner component for the AscendUCore Design System.
It provides a visual indication of loading or processing in an indeterminate manner.
Supports different sizes.`,methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`The size of the spinner.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};export{m as S};
