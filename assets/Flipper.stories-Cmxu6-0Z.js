import{r as y,j as n,t as e}from"./iframe-C9qpv1Bz.js";import{s as c}from"./emotion-styled.browser.esm-Car2homq.js";import{c as u}from"./emotion-react.browser.esm-Dy7Q9i4V.js";import{C as r}from"./index-Cl2342ej.js";import{B as x}from"./index-BM5aybXr.js";import"./index-8ndG3XIt.js";const S=c.div`
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
`,R=c.div`
  position: relative;
  width: 100%; /* Take full width of content-driven parent */
  height: 100%; /* Take full height of content-driven parent */
  text-align: center;
  transition: transform ${t=>t.duration}s; // Apply transition duration
  transform-style: preserve-3d; // Required for children to have 3D position

  ${t=>t.isFlipped&&(t.flipDirection==="vertical"?u`
          transform: rotateX(180deg);
        `:u`
          transform: rotateY(180deg);
        `)}
`,D=c.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden; // Hide the back of the element when facing away
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${t=>t.theme.borderRadius.md};
  overflow: hidden; // Ensures content respects border-radius
  box-sizing: border-box; // Include padding/border in element's total width/height
`,q=c(D)`
  background-color: ${t=>t.theme.colors.background.surface};
  border: 1px solid ${t=>t.theme.colors.border.default};
  box-shadow: ${t=>t.theme.shadows.md};
`,V=c(D)`
  background-color: ${t=>t.theme.colors.primary[95]}; // Use a primary light color for back
  color: ${t=>t.theme.colors.primary[10]}; // Dark text on back
  border: 1px solid ${t=>t.theme.colors.primary[80]};
  box-shadow: ${t=>t.theme.shadows.md};

  ${t=>t.flipDirection==="vertical"?u`
          transform: rotateX(180deg);
        `:u`
          transform: rotateY(180deg);
        `}
`,k=({front:t,back:o,defaultFlipped:l=!1,isFlipped:i,onFlipChange:s,duration:$=.6,flipDirection:b="horizontal",onClick:j,...I})=>{const[T,B]=y.useState(l),C=i!==void 0?i:T,v=y.useCallback(()=>{const a=!C;i===void 0&&B(a),s?.(a)},[C,i,s]),z=y.useCallback(a=>{a.target===a.currentTarget&&v(),j?.(a)},[v,j]);return n.jsx(S,{...I,onClick:z,children:n.jsxs(R,{isFlipped:C,duration:$,flipDirection:b,children:[n.jsx(q,{flipDirection:b,children:t}),n.jsx(V,{flipDirection:b,children:o})]})})};k.__docgenInfo={description:`A component that provides a 3D flip animation for its content,
representing a front and back side. Ideal for flashcards or interactive elements.
Can be controlled or uncontrolled.`,methods:[],displayName:"Flipper",props:{front:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be displayed on the front side of the card."},back:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be displayed on the back side of the card."},defaultFlipped:{required:!1,tsType:{name:"boolean"},description:`If true, the card will initially be flipped to its back side.
Use this for uncontrolled behavior.
@default false`,defaultValue:{value:"false",computed:!1}},isFlipped:{required:!1,tsType:{name:"boolean"},description:`Controls the flipped state of the card (true for back, false for front).
Use this for controlled behavior.`},onFlipChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(flipped: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"flipped"}],return:{name:"void"}}},description:`Callback function that is called when the card's flipped state changes.
Provides the new flipped state (true if now showing back, false if now showing front).`},duration:{required:!1,tsType:{name:"number"},description:`The duration of the flip animation in seconds.
@default 0.6`,defaultValue:{value:"0.6",computed:!1}},flipDirection:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`The direction of the flip animation.
'horizontal' (around Y-axis) or 'vertical' (around X-axis).
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles for the outer container."}}};const _={title:"Components/Flipper",component:k,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{front:{control:"object",description:"The content to be displayed on the front side of the card."},back:{control:"object",description:"The content to be displayed on the back side of the card."},defaultFlipped:{control:"boolean",description:"If true, the card will initially be flipped to its back side (uncontrolled).",defaultValue:!1},isFlipped:{control:"boolean",description:"Controls the flipped state of the card (true for back, false for front) (controlled)."},onFlipChange:{action:"flipChange",description:"Callback function when the card's flipped state changes."},duration:{control:{type:"range",min:.1,max:2,step:.1},description:"The duration of the flip animation in seconds.",defaultValue:.6},flipDirection:{control:"radio",options:["horizontal","vertical"],description:"The direction of the flip animation.",defaultValue:"horizontal"}},decorators:[t=>n.jsx("div",{style:{padding:e.spacing.xl,backgroundColor:e.colors.background.default,display:"flex",justifyContent:"center",alignItems:"center",minHeight:"350px"},children:n.jsx(t,{})})]},F=n.jsxs(r,{style:{padding:e.spacing.lg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"},children:[n.jsx("h3",{style:{...e.typography.h3,margin:0,color:e.colors.text.default},children:"Flashcard Front"}),n.jsx("p",{style:{...e.typography.body,margin:`${e.spacing.sm} 0 0 0`,color:e.colors.text.default},children:"What is ActivityPub?"})]}),w=n.jsxs(r,{style:{padding:e.spacing.lg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"},children:[n.jsx("h3",{style:{...e.typography.h3,margin:0,color:e.colors.primary[10]},children:"Flashcard Back"}),n.jsx("p",{style:{...e.typography.body,margin:`${e.spacing.sm} 0 ${e.spacing.md} 0`,color:e.colors.primary[10]},children:"A decentralized social networking protocol."}),n.jsx(x,{variant:"secondary",size:"sm",onClick:()=>alert("Got it!"),children:"Got It!"})]}),d={args:{front:F,back:w,flipDirection:"horizontal"}},p={args:{front:n.jsxs(r,{style:{padding:e.spacing.lg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"},children:[n.jsx("h3",{style:{...e.typography.h3,margin:0,color:e.colors.text.default},children:"Vertical Flipper"}),n.jsx("p",{style:{...e.typography.body,margin:`${e.spacing.sm} 0 0 0`,color:e.colors.text.default},children:"Click to see the back!"})]}),back:n.jsxs(r,{style:{padding:e.spacing.lg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"},children:[n.jsx("h3",{style:{...e.typography.h3,margin:0,color:e.colors.primary[10]},children:"Back Content"}),n.jsx("p",{style:{...e.typography.body,margin:`${e.spacing.sm} 0 0 0`,color:e.colors.primary[10]},children:"This side flips vertically."})]}),flipDirection:"vertical"}},h={args:{front:F,back:w,duration:1.5}},m={args:{front:F,back:w,defaultFlipped:!0}},g={render:t=>{const[o,l]=y.useState(!1),i=s=>{l(s),t.onFlipChange?.(s)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:e.spacing.lg,alignItems:"center"},children:[n.jsx(k,{...t,isFlipped:o,onFlipChange:i,front:n.jsxs(r,{style:{padding:e.spacing.lg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"},children:[n.jsx("h3",{style:{...e.typography.h3,margin:0,color:e.colors.text.default},children:"Controlled Card"}),n.jsxs("p",{style:{...e.typography.body,margin:`${e.spacing.sm} 0 0 0`,color:e.colors.text.default},children:["Currently: ",o?"Back":"Front"]})]}),back:n.jsxs(r,{style:{padding:e.spacing.lg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"},children:[n.jsx("h3",{style:{...e.typography.h3,margin:0,color:e.colors.primary[10]},children:"Controlled Card"}),n.jsxs("p",{style:{...e.typography.body,margin:`${e.spacing.sm} 0 ${e.spacing.md} 0`,color:e.colors.primary[10]},children:["Currently: ",o?"Back":"Front"]}),n.jsx(x,{variant:"secondary",size:"sm",onClick:()=>l(!1),children:"Flip Back"})]})}),n.jsxs(x,{onClick:()=>l(!o),children:["Toggle Flipper (",o?"Show Front":"Show Back",")"]})]})},args:{isFlipped:!1}},f={args:{front:n.jsxs(r,{style:{padding:e.spacing.lg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"},children:[n.jsx("h3",{style:{...e.typography.h3,margin:0,color:e.colors.text.default},children:"German Word"}),n.jsx("p",{style:{...e.typography.h1,margin:`${e.spacing.md} 0 0 0`,color:e.colors.primary[40]},children:"Der Hund"})]}),back:n.jsxs(r,{style:{padding:e.spacing.lg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"},children:[n.jsx("h3",{style:{...e.typography.h3,margin:0,color:e.colors.primary[10]},children:"English Translation"}),n.jsx("p",{style:{...e.typography.h1,margin:`${e.spacing.md} 0 ${e.spacing.md} 0`,color:e.colors.primary[10]},children:"Dog"}),n.jsx(x,{variant:"secondary",size:"sm",onClick:()=>alert("Remembered!"),children:"Remembered!"})]}),flipDirection:"horizontal"}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    front: FrontContent,
    back: BackContent,
    flipDirection: 'horizontal'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    front: <Card style={{
      padding: theme.spacing.lg,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%'
    }}>
        <h3 style={{
        ...theme.typography.h3,
        margin: 0,
        color: theme.colors.text.default
      }}>Vertical Flipper</h3>
        <p style={{
        ...theme.typography.body,
        margin: \`\${theme.spacing.sm} 0 0 0\`,
        color: theme.colors.text.default
      }}>
          Click to see the back!
        </p>
      </Card>,
    back: <Card style={{
      padding: theme.spacing.lg,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%'
    }}>
        <h3 style={{
        ...theme.typography.h3,
        margin: 0,
        color: theme.colors.primary['10']
      }}>Back Content</h3>
        <p style={{
        ...theme.typography.body,
        margin: \`\${theme.spacing.sm} 0 0 0\`,
        color: theme.colors.primary['10']
      }}>
          This side flips vertically.
        </p>
      </Card>,
    flipDirection: 'vertical'
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    front: FrontContent,
    back: BackContent,
    duration: 1.5 // 1.5 seconds
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    front: FrontContent,
    back: BackContent,
    defaultFlipped: true
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const [flipped, setFlipped] = useState(false);
    const handleFlipChange = (newFlippedState: boolean) => {
      setFlipped(newFlippedState);
      args.onFlipChange?.(newFlippedState); // Log to Storybook actions
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing.lg,
      alignItems: 'center'
    }}>
        <Flipper {...args} isFlipped={flipped} onFlipChange={handleFlipChange} front={<Card style={{
        padding: theme.spacing.lg,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
      }}>
              <h3 style={{
          ...theme.typography.h3,
          margin: 0,
          color: theme.colors.text.default
        }}>Controlled Card</h3>
              <p style={{
          ...theme.typography.body,
          margin: \`\${theme.spacing.sm} 0 0 0\`,
          color: theme.colors.text.default
        }}>
                Currently: {flipped ? 'Back' : 'Front'}
              </p>
            </Card>} back={<Card style={{
        padding: theme.spacing.lg,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
      }}>
              <h3 style={{
          ...theme.typography.h3,
          margin: 0,
          color: theme.colors.primary['10']
        }}>Controlled Card</h3>
              <p style={{
          ...theme.typography.body,
          margin: \`\${theme.spacing.sm} 0 \${theme.spacing.md} 0\`,
          color: theme.colors.primary['10']
        }}>
                Currently: {flipped ? 'Back' : 'Front'}
              </p>
              <Button variant="secondary" size="sm" onClick={() => setFlipped(false)}>
                Flip Back
              </Button>
            </Card>} />
        <Button onClick={() => setFlipped(!flipped)}>
          Toggle Flipper ({flipped ? 'Show Front' : 'Show Back'})
        </Button>
      </div>;
  },
  args: {
    isFlipped: false
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    front: <Card style={{
      padding: theme.spacing.lg,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%'
    }}>
        <h3 style={{
        ...theme.typography.h3,
        margin: 0,
        color: theme.colors.text.default
      }}>German Word</h3>
        <p style={{
        ...theme.typography.h1,
        margin: \`\${theme.spacing.md} 0 0 0\`,
        color: theme.colors.primary['40']
      }}>
          Der Hund
        </p>
      </Card>,
    back: <Card style={{
      padding: theme.spacing.lg,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%'
    }}>
        <h3 style={{
        ...theme.typography.h3,
        margin: 0,
        color: theme.colors.primary['10']
      }}>English Translation</h3>
        <p style={{
        ...theme.typography.h1,
        margin: \`\${theme.spacing.md} 0 \${theme.spacing.md} 0\`,
        color: theme.colors.primary['10']
      }}>
          Dog
        </p>
        <Button variant="secondary" size="sm" onClick={() => alert('Remembered!')}>
          Remembered!
        </Button>
      </Card>,
    flipDirection: 'horizontal'
  }
}`,...f.parameters?.docs?.source}}};const L=["DefaultHorizontal","DefaultVertical","LongerDuration","InitiallyFlipped","ControlledFlipper","GermanFlashcard"];export{g as ControlledFlipper,d as DefaultHorizontal,p as DefaultVertical,f as GermanFlashcard,m as InitiallyFlipped,h as LongerDuration,L as __namedExportsOrder,_ as default};
