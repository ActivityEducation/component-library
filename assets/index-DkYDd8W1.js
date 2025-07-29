import{j as r}from"./iframe-RAegngwO.js";import{c as t}from"./emotion-styled-base.browser.esm-DWA-sfXA.js";import{k as i}from"./emotion-react.browser.esm-zPk2XnfE.js";const a=i`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,o=i`
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
`,c=t("svg",{target:"ezq7qlc2"})("animation:",a," 1.4s linear infinite;display:block;",e=>{switch(e.size){case"sm":return`
          width: 24px;
          height: 24px;
        `;case"lg":return`
          width: 48px;
          height: 48px;
        `;case"md":default:return`
          width: 36px;
          height: 36px;
        `}},";"),l=t("circle",{target:"ezq7qlc1"})("stroke:",e=>e.theme.colors.neutral[80],";stroke-width:4px;fill:none;"),d=t("circle",{target:"ezq7qlc0"})("stroke:",e=>e.theme.colors.primary[40],";stroke-width:4px;fill:none;stroke-linecap:round;animation:",o," 1.4s ease-in-out infinite;transform-origin:center;"),m=({size:e="md",...n})=>{const s=2*Math.PI*20;return r.jsxs(c,{viewBox:"0 0 50 50",size:e,...n,children:[r.jsx(l,{cx:"25",cy:"25",r:20}),r.jsx(d,{cx:"25",cy:"25",r:20,strokeDasharray:`${s*.75}, ${s*.25}`,strokeDashoffset:0})]})};m.__docgenInfo={description:`A circular Spinner component for the AscendUCore Design System.
It provides a visual indication of loading or processing in an indeterminate manner.
Supports different sizes.`,methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`The size of the spinner.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};export{m as S};
