import{r as n,j as u}from"./iframe-DBjxWcSu.js";import{s as l}from"./emotion-styled.browser.esm-BYbfZwar.js";import{c as I}from"./emotion-react.browser.esm-B0Qy288v.js";const M=l.div`
  position: relative;
  width: 100%;
  height: 24px; // Height to accommodate thumb
  display: flex;
  align-items: center;
  user-select: none; // Prevent text selection during drag
  touch-action: pan-y; // Optimize for touch devices (allow vertical scrolling)
`,q=l.input`
  // Visually hide the input but keep it accessible
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 1; // Ensure it's above the custom track/fill
  margin: 0; // Remove default margin
  padding: 0; // Remove default padding

  // Style focus outline for accessibility on the custom thumb/track
  &:focus-visible + div { // Target the SliderTrack when input is focused
    outline: 2px solid ${e=>e.theme.colors.primary[60]};
    outline-offset: 2px;
    border-radius: ${e=>e.theme.borderRadius.full}; // Match track rounding
  }

  &:disabled {
    cursor: not-allowed;
  }
`,P=l.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 6px; // Height of the track line
  background-color: ${e=>e.theme.colors.neutral[80]}; // Track background color
  border-radius: ${e=>e.theme.borderRadius.full};
  transition: background-color 0.2s ease-in-out;
`,j=l.div`
  position: absolute;
  left: 0;
  height: 6px; // Same height as track
  width: ${e=>e.fillWidth}%;
  background-color: ${e=>e.theme.colors.primary[40]}; // Fill color
  border-radius: ${e=>e.theme.borderRadius.full};
  transition: width 0.2s ease-in-out;
`,V=l.div`
  position: absolute;
  top: 50%;
  left: ${e=>e.thumbPosition}%;
  transform: translate(-50%, -50%); // Center the thumb
  width: 20px;
  height: 20px;
  background-color: ${e=>e.theme.colors.primary[40]}; // Thumb color
  border: 2px solid ${e=>e.theme.colors.primary[40]};
  border-radius: ${e=>e.theme.borderRadius.full};
  box-shadow: ${e=>e.theme.shadows.sm};
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  z-index: 2; // Ensure thumb is above track/fill
  cursor: grab; // Indicate draggable

  &:hover {
    box-shadow: ${e=>e.theme.shadows.md};
  }

  ${e=>e.isDragging&&I`
    cursor: grabbing;
    box-shadow: ${e.theme.shadows.lg}; // More prominent shadow when dragging
  `}
`,z=({value:e,defaultValue:b,min:r=0,max:s=100,step:d=1,disabled:a=!1,onValueChange:w,onChange:y,...T})=>{const[$,x]=n.useState(e!==void 0?e:b!==void 0?b:r),h=e!==void 0?e:$,[c,E]=n.useState(!1),i=n.useRef(null),p=n.useRef(null),S=s===r?0:(h-r)/(s-r)*100;n.useEffect(()=>{e!==void 0&&x(e)},[e]);const f=n.useCallback(t=>{const o=parseFloat(t.target.value);e===void 0&&x(o),w?.(o),y?.(t)},[e,w,y]),m=n.useCallback(t=>{if(!p.current||a)return;const o=p.current.getBoundingClientRect();let g=(("touches"in t?t.touches[0].clientX:t.clientX)-o.left)/o.width;g=Math.max(0,Math.min(1,g));const R=r+g*(s-r),L=Math.round(R/d)*d,C=Math.max(r,Math.min(s,L));if(i.current){i.current.value=String(C);const D={target:i.current,currentTarget:i.current,type:"change",bubbles:!0,cancelable:!1,nativeEvent:t,isDefaultPrevented:()=>!1,isPropagationStopped:()=>!1,persist:()=>{},preventDefault:()=>{},stopPropagation:()=>{}};f(D)}},[r,s,d,a,f]),k=n.useCallback(t=>{a||(E(!0),t.preventDefault(),m(t.nativeEvent))},[a,m]);return n.useEffect(()=>{const t=v=>{c&&(v.preventDefault(),m(v))},o=()=>{E(!1)};return c?(document.addEventListener("mousemove",t),document.addEventListener("mouseup",o),document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",o)):(document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",o),document.removeEventListener("touchmove",t),document.removeEventListener("touchend",o)),()=>{document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",o),document.removeEventListener("touchmove",t),document.removeEventListener("touchend",o)}},[c,m]),u.jsxs(M,{onMouseDown:k,onTouchStart:k,...T,children:[u.jsx(q,{type:"range",min:r,max:s,step:d,value:h,disabled:a,onChange:f,ref:i,"aria-valuenow":h,"aria-valuemin":r,"aria-valuemax":s,"aria-disabled":a}),u.jsx(P,{ref:p}),u.jsx(j,{fillWidth:S}),u.jsx(V,{thumbPosition:S,isDragging:c})]})};z.__docgenInfo={description:`A Slider component for the AscendUCore Design System.
It allows users to select a single value from a continuous or discrete range.
Supports controlled/uncontrolled usage, min/max/step values, and disabled state.`,methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:"The current value of the slider (controlled component)."},defaultValue:{required:!1,tsType:{name:"number"},description:"The initial value of the slider (uncontrolled component)."},min:{required:!1,tsType:{name:"number"},description:`The minimum value of the slider.
@default 0`,defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:`The maximum value of the slider.
@default 100`,defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:`The step increment for the slider's value.
@default 1`,defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`If true, the slider will be disabled.
@default false`,defaultValue:{value:"false",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:`Callback function that is called when the slider's value changes.
Provides the new numeric value.`},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};export{z as S};
