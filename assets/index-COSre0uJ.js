import{r as l,j as o}from"./iframe-CUhOUwcP.js";import{s as i}from"./emotion-styled.browser.esm-DVCxs-Ot.js";import{c as a}from"./emotion-react.browser.esm-Bku_YNzS.js";const y=i.div`
  perspective: 1000px; // Required for 3D effect
  /*
   * Removed width: 100%; height: 100%; max-width; max-height;
   * to allow the container to size itself based on its content (FlipperInner).
   * The min-width/height ensure it's never too small.
   */
  min-width: 250px;
  min-height: 150px;
  display: flex; /* Use flex to center the inner flipper */
  justify-content: center;
  align-items: center;
  /* Add max-width/height here if you want an outer constraint,
     otherwise, it will grow with its content. */
`,x=i.div`
  position: relative;
  width: 100%; /* Take full width of content-driven parent */
  height: 100%; /* Take full height of content-driven parent */
  text-align: center;
  transition: transform ${e=>e.duration}s; // Apply transition duration
  transform-style: preserve-3d; // Required for children to have 3D position

  ${e=>e.isFlipped&&(e.flipDirection==="vertical"?a`
          transform: rotateX(180deg);
        `:a`
          transform: rotateY(180deg);
        `)}
`,f=i.div`
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
`,k=i(f)`
  background-color: ${e=>e.theme.colors.background.surface};
  border: 1px solid ${e=>e.theme.colors.border.default};
  box-shadow: ${e=>e.theme.shadows.md};
`,F=i(f)`
  background-color: ${e=>e.theme.colors.primary[95]}; // Use a primary light color for back
  color: ${e=>e.theme.colors.primary[10]}; // Dark text on back
  border: 1px solid ${e=>e.theme.colors.primary[80]};
  box-shadow: ${e=>e.theme.shadows.md};

  ${e=>e.flipDirection==="vertical"?a`
          transform: rotateX(180deg);
        `:a`
          transform: rotateY(180deg);
        `}
`,T=({front:e,back:h,defaultFlipped:u=!1,isFlipped:r,onFlipChange:d,duration:m=.6,flipDirection:n="horizontal",onClick:c,...b})=>{const[g,w]=l.useState(u),s=r!==void 0?r:g,p=l.useCallback(()=>{const t=!s;r===void 0&&w(t),d?.(t)},[s,r,d]),v=l.useCallback(t=>{t.target===t.currentTarget&&p(),c?.(t)},[p,c]);return o.jsx(y,{...b,onClick:v,children:o.jsxs(x,{isFlipped:s,duration:m,flipDirection:n,children:[o.jsx(k,{flipDirection:n,children:e}),o.jsx(F,{flipDirection:n,children:h})]})})};T.__docgenInfo={description:`A component that provides a 3D flip animation for its content,
representing a front and back side. Ideal for flashcards or interactive elements.
Can be controlled or uncontrolled.`,methods:[],displayName:"Flipper",props:{front:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be displayed on the front side of the card."},back:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be displayed on the back side of the card."},defaultFlipped:{required:!1,tsType:{name:"boolean"},description:`If true, the card will initially be flipped to its back side.
Use this for uncontrolled behavior.
@default false`,defaultValue:{value:"false",computed:!1}},isFlipped:{required:!1,tsType:{name:"boolean"},description:`Controls the flipped state of the card (true for back, false for front).
Use this for controlled behavior.`},onFlipChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(flipped: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"flipped"}],return:{name:"void"}}},description:`Callback function that is called when the card's flipped state changes.
Provides the new flipped state (true if now showing back, false if now showing front).`},duration:{required:!1,tsType:{name:"number"},description:`The duration of the flip animation in seconds.
@default 0.6`,defaultValue:{value:"0.6",computed:!1}},flipDirection:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`The direction of the flip animation.
'horizontal' (around Y-axis) or 'vertical' (around X-axis).
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles for the outer container."}}};export{T as F};
