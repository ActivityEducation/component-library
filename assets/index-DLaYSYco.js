import{r as l,j as r}from"./iframe-DZHKm7cV.js";import{s as t}from"./emotion-styled.browser.esm-B9gxxbr3.js";import{c as a}from"./emotion-react.browser.esm-CpG_W-M7.js";const x=t.div`
  perspective: 1000px; // Required for 3D effect
  /*
   * Removed width: 100%; height: 100%; max-width; max-height;
   * to allow the container to size itself based on its content (FlipperInner).
   * The min-width/height ensure it's never too small.
   */
  width: 100%;
  height: 100%;
  display: flex; /* Use flex to center the inner flipper */
  justify-content: center;
  align-items: center;
  /* Add max-width/height here if you want an outer constraint,
     otherwise, it will grow with its content. */
`,k=t.div`
  position: relative;
  width: 100%; /* Take full width of content-driven parent */
  height: 100%; /* Take full height of content-driven parent */
  min-width: 460px;
  min-height: 280px;
  text-align: center;
  transition: transform ${e=>e.duration}s; // Apply transition duration
  transform-style: preserve-3d; // Required for children to have 3D position

  ${e=>e.isFlipped&&(e.flipDirection==="vertical"?a`
          transform: rotateX(180deg);
        `:a`
          transform: rotateY(180deg);
        `)}
`,u=t.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden; // Hide the back of the element when facing away
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${e=>e.theme.borderRadius.md};
  overflow: hidden; // Ensures content respects border-radius
  box-sizing: border-box; // Include padding/border in element's total width/height
`,F=t(u)`
  background-color: ${e=>e.theme.colors.background.surface};
  border: 1px solid ${e=>e.theme.colors.border.default};
  box-shadow: ${e=>e.theme.shadows.md};
`,T=t(u)`
  background-color: ${e=>e.theme.colors.primary[95]}; // Use a primary light color for back
  color: ${e=>e.theme.colors.primary[10]}; // Dark text on back
  border: 1px solid ${e=>e.theme.colors.primary[80]};
  box-shadow: ${e=>e.theme.shadows.md};

  ${e=>e.flipDirection==="vertical"?a`
          transform: rotateX(180deg);
        `:a`
          transform: rotateY(180deg);
        `}
`,R=({front:e,back:m,defaultFlipped:b=!1,isFlipped:i,onFlipChange:d,duration:w=.6,flipDirection:n="horizontal",flipOnClick:c=!1,onClick:p,...g})=>{const[v,y]=l.useState(b),s=i!==void 0?i:v,f=l.useCallback(()=>{const o=!s;i===void 0&&y(o),d?.(o)},[s,i,d]),h=l.useCallback(o=>{debugger;c&&f(),p?.(o)},[f,p,c]);return r.jsx(x,{...g,children:r.jsxs(k,{isFlipped:s,duration:w,flipDirection:n,children:[r.jsx(F,{onClick:h,flipDirection:n,children:e}),r.jsx(T,{onClick:h,flipDirection:n,children:m})]})})};R.__docgenInfo={description:`A component that provides a 3D flip animation for its content,
representing a front and back side. Ideal for flashcards or interactive elements.
Can be controlled or uncontrolled.`,methods:[],displayName:"Flipper",props:{front:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be displayed on the front side of the card."},back:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be displayed on the back side of the card."},defaultFlipped:{required:!1,tsType:{name:"boolean"},description:`If true, the card will initially be flipped to its back side.
Use this for uncontrolled behavior.
@default false`,defaultValue:{value:"false",computed:!1}},isFlipped:{required:!1,tsType:{name:"boolean"},description:`Controls the flipped state of the card (true for back, false for front).
Use this for controlled behavior.`},onFlipChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(flipped: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"flipped"}],return:{name:"void"}}},description:`Callback function that is called when the card's flipped state changes.
Provides the new flipped state (true if now showing back, false if now showing front).`},duration:{required:!1,tsType:{name:"number"},description:`The duration of the flip animation in seconds.
@default 0.6`,defaultValue:{value:"0.6",computed:!1}},flipDirection:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`The direction of the flip animation.
'horizontal' (around Y-axis) or 'vertical' (around X-axis).
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}},flipOnClick:{required:!1,tsType:{name:"boolean"},description:`If true, the card will flip when clicked.
@default true`,defaultValue:{value:"false",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles for the outer container."}}};export{R as F};
