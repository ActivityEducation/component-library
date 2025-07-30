import{r as s,j as u}from"./iframe-DGiRyBXK.js";import{c as l}from"./emotion-styled-base.browser.esm-DOJJeMjc.js";import{c as j}from"./emotion-react.browser.esm-CRTluIfQ.js";const q=l("div",{target:"e140gsve4"})({name:"14p8hh7",styles:"position:relative;width:100%;height:24px;display:flex;align-items:center;user-select:none;touch-action:pan-y"}),D=l("input",{target:"e140gsve3"})("position:absolute;width:100%;height:100%;opacity:0;cursor:pointer;z-index:1;margin:0;padding:0;&:focus-visible+div{outline:2px solid ",e=>e.theme.colors.primary[60],";outline-offset:2px;border-radius:",e=>e.theme.borderRadius.full,";}&:disabled{cursor:not-allowed;}"),H=l("div",{target:"e140gsve2"})("position:absolute;left:0;right:0;height:6px;background-color:",e=>e.theme.colors.neutral[80],";border-radius:",e=>e.theme.borderRadius.full,";transition:background-color 0.2s ease-in-out;"),V=l("div",{target:"e140gsve1"})("position:absolute;left:0;height:6px;width:",e=>e.fillWidth,"%;background-color:",e=>e.theme.colors.primary[40],";border-radius:",e=>e.theme.borderRadius.full,";transition:width 0.2s ease-in-out;"),P=l("div",{target:"e140gsve0"})("position:absolute;top:50%;left:",e=>e.thumbPosition,"%;transform:translate(-50%, -50%);width:20px;height:20px;background-color:",e=>e.theme.colors.primary[40],";border:2px solid ",e=>e.theme.colors.primary[40],";border-radius:",e=>e.theme.borderRadius.full,";box-shadow:",e=>e.theme.shadows.sm,";transition:background-color 0.2s ease-in-out,box-shadow 0.2s ease-in-out;z-index:2;cursor:grab;&:hover{box-shadow:",e=>e.theme.shadows.md,";}",e=>e.isDragging&&j("cursor:grabbing;box-shadow:",e.theme.shadows.lg,";",""),";"),M=({value:e,defaultValue:b,min:a=0,max:i=100,step:d=1,disabled:r=!1,onValueChange:y,onChange:E,...k})=>{const[I,w]=s.useState(e!==void 0?e:b!==void 0?b:a),h=e!==void 0?e:I,[c,x]=s.useState(!1),o=s.useRef(null),p=s.useRef(null),T=i===a?0:(h-a)/(i-a)*100;s.useEffect(()=>{e!==void 0&&w(e)},[e]);const v=s.useCallback(t=>{const n=parseFloat(t.target.value);e===void 0&&w(n),y?.(n),E?.(t)},[e,y,E]),m=s.useCallback(t=>{if(!p.current||r)return;const n=p.current.getBoundingClientRect();let g=(("touches"in t?t.touches[0].clientX:t.clientX)-n.left)/n.width;g=Math.max(0,Math.min(1,g));const N=a+g*(i-a),L=Math.round(N/d)*d,R=Math.max(a,Math.min(i,L));if(o.current){o.current.value=String(R);const C={target:o.current,currentTarget:o.current,type:"change",bubbles:!0,cancelable:!1,nativeEvent:t,isDefaultPrevented:()=>!1,isPropagationStopped:()=>!1,persist:()=>{},preventDefault:()=>{},stopPropagation:()=>{}};v(C)}},[a,i,d,r,v]),S=s.useCallback(t=>{r||(x(!0),t.preventDefault(),m(t.nativeEvent))},[r,m]);return s.useEffect(()=>{const t=f=>{c&&(f.preventDefault(),m(f))},n=()=>{x(!1)};return c?(document.addEventListener("mousemove",t),document.addEventListener("mouseup",n),document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n)):(document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",n),document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)),()=>{document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",n),document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}},[c,m]),u.jsxs(q,{onMouseDown:S,onTouchStart:S,...k,children:[u.jsx(D,{type:"range",min:a,max:i,step:d,value:h,disabled:r,onChange:v,ref:o,"aria-valuenow":h,"aria-valuemin":a,"aria-valuemax":i,"aria-disabled":r}),u.jsx(H,{ref:p}),u.jsx(V,{fillWidth:T}),u.jsx(P,{thumbPosition:T,isDragging:c})]})};M.__docgenInfo={description:`The **Slider** component allows users to select a single value from a predefined
range by dragging a thumb along a track. It supports both continuous and discrete
value selection, configurable minimum, maximum, and step increments. This component
provides a visually intuitive way for users to adjust settings, filter data, or
control progress within an application.

\`\`\`typescript
import { Slider } from "@activityeducation/component-library";
\`\`\`

## Justification
A \`Slider\` component is essential for interactive user interfaces where a range of
values needs to be selected without direct numerical input. It enhances usability
by offering a visual representation of the selection range and the current value,
making adjustments quick and intuitive. By encapsulating the complex logic of
dragging, value calculation, and accessibility (via a hidden native input),
it simplifies development and ensures consistent behavior and styling across the
AscendUCore Design System. Its responsiveness and touch-friendly design make it
suitable for all devices.

## Acceptance Criteria
- **GIVEN** the \`Slider\` is rendered, **THEN** it should display a track, a fill
indicating the current value, and a draggable thumb.
- **GIVEN** \`min\`, \`max\`, and \`step\` props are provided, **THEN** the slider's
range and increment should correspond to these values.
- **WHEN** the user drags the thumb or clicks on the track, **THEN** the slider's
value should update, and the \`onValueChange\` callback should be triggered.
- **GIVEN** the \`disabled\` prop is true, **THEN** the slider should be visually
disabled and not interactive.
- **GIVEN** the slider is focused via keyboard, **THEN** it should display a
clear focus indicator.
- **WHEN** the slider's value changes, **THEN** the fill and thumb position
should visually update accordingly.

## Example & Props`,methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:"The current value of the slider (controlled component)."},defaultValue:{required:!1,tsType:{name:"number"},description:"The initial value of the slider (uncontrolled component)."},min:{required:!1,tsType:{name:"number"},description:`The minimum value of the slider.
@default 0`,defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:`The maximum value of the slider.
@default 100`,defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:`The step increment for the slider's value.
@default 1`,defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`If true, the slider will be disabled.
@default false`,defaultValue:{value:"false",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:`Callback function that is called when the slider's value changes.
Provides the new numeric value.`},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};export{M as S};
