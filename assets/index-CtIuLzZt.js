import{j as o}from"./iframe-DZHKm7cV.js";import{s as a}from"./emotion-styled.browser.esm-B9gxxbr3.js";const n=a.div`
  width: 100%;
  height: ${e=>e.theme.spacing.sm}; // Fixed height for the bar
  background-color: ${e=>e.theme.colors.neutral[90]}; // Light background for the track
  border-radius: ${e=>e.theme.borderRadius.full}; // Fully rounded ends
  overflow: hidden; // Ensures the progress bar stays within rounded corners
  position: relative; // For positioning the inner bar
`,d=a.div`
  height: 100%;
  width: ${e=>e.progressWidth}%;
  background-color: ${e=>e.theme.colors.primary[40]}; // Primary color for the progress fill
  border-radius: ${e=>e.theme.borderRadius.full}; // Inherit rounded ends
  transition: width 0.3s ease-in-out; // Smooth transition for progress changes
`,l=({value:e=0,max:r=100,...t})=>{const s=Math.max(0,Math.min(e,r)),i=r===0?0:s/r*100;return o.jsx(n,{role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":r,...t,children:o.jsx(d,{progressWidth:i})})};l.__docgenInfo={description:`A linear ProgressBar component for the AscendUCore Design System.
It visually indicates the progress of an operation or a value within a defined range.
It is accessible via ARIA attributes.`,methods:[],displayName:"ProgressBar",props:{value:{required:!1,tsType:{name:"number"},description:`The current value of the progress bar.
@default 0`,defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:`The maximum value of the progress bar.
@default 100`,defaultValue:{value:"100",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};export{l as P};
