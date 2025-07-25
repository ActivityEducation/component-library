import{j as n,t as e,r as x}from"./iframe-BMJQTajd.js";import{F as f}from"./index-Bv8LoQjq.js";import{C as t}from"./index-Bjg7ymKC.js";import{B as d}from"./index-BegQLpbm.js";import"./emotion-styled.browser.esm-CqS4Vnc4.js";import"./emotion-react.browser.esm-DDmkCpzG.js";import"./index-lRtKzDqF.js";const B={title:"Components/Flipper",component:f,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{front:{control:"object",description:"The content to be displayed on the front side of the card."},back:{control:"object",description:"The content to be displayed on the back side of the card."},defaultFlipped:{control:"boolean",description:"If true, the card will initially be flipped to its back side (uncontrolled).",defaultValue:!1},isFlipped:{control:"boolean",description:"Controls the flipped state of the card (true for back, false for front) (controlled)."},onFlipChange:{action:"flipChange",description:"Callback function when the card's flipped state changes."},duration:{control:{type:"range",min:.1,max:2,step:.1},description:"The duration of the flip animation in seconds.",defaultValue:.6},flipDirection:{control:"radio",options:["horizontal","vertical"],description:"The direction of the flip animation.",defaultValue:"horizontal"}},decorators:[o=>n.jsx("div",{style:{padding:e.spacing.xl,backgroundColor:e.colors.background.default,display:"flex",justifyContent:"center",alignItems:"center",minHeight:"350px"},children:n.jsx(o,{})})]},g=n.jsxs(t,{style:{padding:e.spacing.lg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"},children:[n.jsx("h3",{style:{...e.typography.h3,margin:0,color:e.colors.text.default},children:"Flashcard Front"}),n.jsx("p",{style:{...e.typography.body,margin:`${e.spacing.sm} 0 0 0`,color:e.colors.text.default},children:"What is ActivityPub?"})]}),m=n.jsxs(t,{style:{padding:e.spacing.lg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"},children:[n.jsx("h3",{style:{...e.typography.h3,margin:0,color:e.colors.primary[10]},children:"Flashcard Back"}),n.jsx("p",{style:{...e.typography.body,margin:`${e.spacing.sm} 0 ${e.spacing.md} 0`,color:e.colors.primary[10]},children:"A decentralized social networking protocol."}),n.jsx(d,{variant:"secondary",size:"sm",onClick:()=>alert("Got it!"),children:"Got It!"})]}),i={args:{front:g,back:m,flipDirection:"horizontal"}},a={args:{front:n.jsxs(t,{style:{padding:e.spacing.lg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"},children:[n.jsx("h3",{style:{...e.typography.h3,margin:0,color:e.colors.text.default},children:"Vertical Flipper"}),n.jsx("p",{style:{...e.typography.body,margin:`${e.spacing.sm} 0 0 0`,color:e.colors.text.default},children:"Click to see the back!"})]}),back:n.jsxs(t,{style:{padding:e.spacing.lg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"},children:[n.jsx("h3",{style:{...e.typography.h3,margin:0,color:e.colors.primary[10]},children:"Back Content"}),n.jsx("p",{style:{...e.typography.body,margin:`${e.spacing.sm} 0 0 0`,color:e.colors.primary[10]},children:"This side flips vertically."})]}),flipDirection:"vertical"}},l={args:{front:g,back:m,duration:1.5}},s={args:{front:g,back:m,defaultFlipped:!0}},c={render:o=>{const[r,h]=x.useState(!1),u=y=>{h(y),o.onFlipChange?.(y)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:e.spacing.lg,alignItems:"center"},children:[n.jsx(f,{...o,isFlipped:r,onFlipChange:u,front:n.jsxs(t,{style:{padding:e.spacing.lg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"},children:[n.jsx("h3",{style:{...e.typography.h3,margin:0,color:e.colors.text.default},children:"Controlled Card"}),n.jsxs("p",{style:{...e.typography.body,margin:`${e.spacing.sm} 0 0 0`,color:e.colors.text.default},children:["Currently: ",r?"Back":"Front"]})]}),back:n.jsxs(t,{style:{padding:e.spacing.lg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"},children:[n.jsx("h3",{style:{...e.typography.h3,margin:0,color:e.colors.primary[10]},children:"Controlled Card"}),n.jsxs("p",{style:{...e.typography.body,margin:`${e.spacing.sm} 0 ${e.spacing.md} 0`,color:e.colors.primary[10]},children:["Currently: ",r?"Back":"Front"]}),n.jsx(d,{variant:"secondary",size:"sm",onClick:()=>h(!1),children:"Flip Back"})]})}),n.jsxs(d,{onClick:()=>h(!r),children:["Toggle Flipper (",r?"Show Front":"Show Back",")"]})]})},args:{isFlipped:!1}},p={args:{front:n.jsxs(t,{style:{padding:e.spacing.lg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"},children:[n.jsx("h3",{style:{...e.typography.h3,margin:0,color:e.colors.text.default},children:"German Word"}),n.jsx("p",{style:{...e.typography.h1,margin:`${e.spacing.md} 0 0 0`,color:e.colors.primary[40]},children:"Der Hund"})]}),back:n.jsxs(t,{style:{padding:e.spacing.lg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"},children:[n.jsx("h3",{style:{...e.typography.h3,margin:0,color:e.colors.primary[10]},children:"English Translation"}),n.jsx("p",{style:{...e.typography.h1,margin:`${e.spacing.md} 0 ${e.spacing.md} 0`,color:e.colors.primary[10]},children:"Dog"}),n.jsx(d,{variant:"secondary",size:"sm",onClick:()=>alert("Remembered!"),children:"Remembered!"})]}),flipDirection:"horizontal"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    front: FrontContent,
    back: BackContent,
    flipDirection: 'horizontal'
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    front: FrontContent,
    back: BackContent,
    duration: 1.5 // 1.5 seconds
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    front: FrontContent,
    back: BackContent,
    defaultFlipped: true
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const I=["DefaultHorizontal","DefaultVertical","LongerDuration","InitiallyFlipped","ControlledFlipper","GermanFlashcard"];export{c as ControlledFlipper,i as DefaultHorizontal,a as DefaultVertical,p as GermanFlashcard,s as InitiallyFlipped,l as LongerDuration,I as __namedExportsOrder,B as default};
