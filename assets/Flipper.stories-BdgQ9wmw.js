import{j as n,t as e,r as C}from"./iframe-OEcLT8CW.js";import{F as u}from"./index-DgR5zQyZ.js";import{C as t}from"./index--GQInS8w.js";import{B as g}from"./index-ClY7ognZ.js";import"./emotion-styled.browser.esm-CDovtSm7.js";import"./emotion-react.browser.esm-DGsMn0KN.js";import"./index-GB8cKMHG.js";const B={title:"Components/Flipper",component:u,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{front:{control:"object",description:"The content to be displayed on the front side of the card."},back:{control:"object",description:"The content to be displayed on the back side of the card."},defaultFlipped:{control:"boolean",description:"If true, the card will initially be flipped to its back side (uncontrolled).",defaultValue:!1},isFlipped:{control:"boolean",description:"Controls the flipped state of the card (true for back, false for front) (controlled)."},onFlipChange:{action:"flipChange",description:"Callback function when the card's flipped state changes."},duration:{control:{type:"range",min:.1,max:2,step:.1},description:"The duration of the flip animation in seconds.",defaultValue:.6},flipDirection:{control:"radio",options:["horizontal","vertical"],description:"The direction of the flip animation.",defaultValue:"horizontal"},flipOnClick:{control:"boolean",description:"If true, the card flips when clicked.",defaultValue:!0}},decorators:[r=>n.jsx("div",{style:{padding:e.spacing.xl,backgroundColor:e.colors.background.default,display:"flex",justifyContent:"center",alignItems:"center",minHeight:"350px"},children:n.jsx(r,{})})]},y=n.jsxs(t,{style:{padding:e.spacing.lg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"300px",width:"500px"},children:[n.jsx("h3",{style:{...e.typography.h3,margin:0,color:e.colors.text.default},children:"Flashcard Front"}),n.jsx("p",{style:{...e.typography.body,margin:`${e.spacing.sm} 0 0 0`,color:e.colors.text.default},children:"What is ActivityPub?"})]}),f=n.jsxs(t,{style:{padding:e.spacing.lg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"300px",width:"500px"},children:[n.jsx("h3",{style:{...e.typography.h3,margin:0,color:e.colors.primary[10]},children:"Flashcard Back"}),n.jsx("p",{style:{...e.typography.body,margin:`${e.spacing.sm} 0 ${e.spacing.md} 0`,color:e.colors.primary[10]},children:"A decentralized social networking protocol."}),n.jsx(g,{variant:"secondary",size:"sm",onClick:()=>alert("Got it!"),children:"Got It!"})]}),l={args:{front:y,back:f,flipDirection:"horizontal",flipOnClick:!0}},a={args:{front:n.jsxs(t,{style:{padding:e.spacing.lg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"300px",width:"500px"},children:[n.jsx("h3",{style:{...e.typography.h3,margin:0,color:e.colors.text.default},children:"Vertical Flipper"}),n.jsx("p",{style:{...e.typography.body,margin:`${e.spacing.sm} 0 0 0`,color:e.colors.text.default},children:"Click to see the back!"})]}),back:n.jsxs(t,{style:{padding:e.spacing.lg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"300px",width:"500px"},children:[n.jsx("h3",{style:{...e.typography.h3,margin:0,color:e.colors.primary[10]},children:"Back Content"}),n.jsx("p",{style:{...e.typography.body,margin:`${e.spacing.sm} 0 0 0`,color:e.colors.primary[10]},children:"This side flips vertically."})]}),flipDirection:"vertical",flipOnClick:!0}},s={args:{front:y,back:f,duration:1.5,flipOnClick:!0}},c={args:{front:y,back:f,defaultFlipped:!0,flipOnClick:!0}},p={render:r=>{const[o,m]=C.useState(!1),x=i=>{m(i),r.onFlipChange?.(i)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:e.spacing.lg,alignItems:"center"},children:[n.jsx(u,{...r,isFlipped:o,onFlipChange:x,flipOnClick:!1,front:n.jsxs(t,{style:{padding:e.spacing.lg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"300px",width:"500px"},children:[n.jsx("h3",{style:{...e.typography.h3,margin:0,color:e.colors.text.default},children:"Controlled Card"}),n.jsxs("p",{style:{...e.typography.body,margin:`${e.spacing.sm} 0 0 0`,color:e.colors.text.default},children:["Currently: ",o?"Back":"Front"]})]}),back:n.jsxs(t,{style:{padding:e.spacing.lg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"300px",width:"500px"},children:[n.jsx("h3",{style:{...e.typography.h3,margin:0,color:e.colors.primary[10]},children:"Controlled Card"}),n.jsxs("p",{style:{...e.typography.body,margin:`${e.spacing.sm} 0 ${e.spacing.md} 0`,color:e.colors.primary[10]},children:["Currently: ",o?"Back":"Front"]}),n.jsx(g,{variant:"secondary",size:"sm",onClick:i=>{m(!1),i.stopPropagation()},children:"Flip Back"})]})}),n.jsxs(g,{onClick:()=>m(!o),children:["Toggle Flipper (",o?"Show Front":"Show Back",")"]})]})},args:{isFlipped:!1}},d={args:{front:n.jsxs(t,{style:{padding:e.spacing.lg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"300px",width:"500px"},children:[n.jsx("h3",{style:{...e.typography.h3,margin:0,color:e.colors.text.default},children:"No Flip on Click"}),n.jsx("p",{style:{...e.typography.body,margin:`${e.spacing.sm} 0 0 0`,color:e.colors.text.default},children:"This card will NOT flip when clicked."})]}),back:n.jsxs(t,{style:{padding:e.spacing.lg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"300px",width:"500px"},children:[n.jsx("h3",{style:{...e.typography.h3,margin:0,color:e.colors.primary[10]},children:"Back View"}),n.jsx("p",{style:{...e.typography.body,margin:`${e.spacing.sm} 0 0 0`,color:e.colors.primary[10]},children:"It can only be flipped programmatically."})]}),flipOnClick:!1}},h={args:{front:n.jsxs(t,{style:{padding:e.spacing.lg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"300px",width:"500px"},children:[n.jsx("h3",{style:{...e.typography.h3,margin:0,color:e.colors.text.default},children:"German Word"}),n.jsx("p",{style:{...e.typography.h1,margin:`${e.spacing.md} 0 0 0`,color:e.colors.primary[40]},children:"Der Hund"})]}),back:n.jsxs(t,{style:{padding:e.spacing.lg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"300px",width:"500px"},children:[n.jsx("h3",{style:{...e.typography.h3,margin:0,color:e.colors.primary[10]},children:"English Translation"}),n.jsx("p",{style:{...e.typography.h1,margin:`${e.spacing.md} 0 ${e.spacing.md} 0`,color:e.colors.primary[10]},children:"Dog"}),n.jsx(g,{variant:"secondary",size:"sm",onClick:r=>{alert("Remembered!"),r.stopPropagation()},children:"Remembered!"})]}),flipDirection:"horizontal",flipOnClick:!0}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    front: FrontContent,
    back: BackContent,
    flipDirection: 'horizontal',
    flipOnClick: true // Explicitly set to true for clarity
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    front: <Card style={{
      padding: theme.spacing.lg,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '300px',
      width: '500px'
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
      height: '300px',
      width: '500px'
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
    flipDirection: 'vertical',
    flipOnClick: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    front: FrontContent,
    back: BackContent,
    duration: 1.5,
    // 1.5 seconds
    flipOnClick: true
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    front: FrontContent,
    back: BackContent,
    defaultFlipped: true,
    flipOnClick: true
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
        <Flipper {...args} isFlipped={flipped} onFlipChange={handleFlipChange}
      // Set flipOnClick to false so only the button controls it
      flipOnClick={false} front={<Card style={{
        padding: theme.spacing.lg,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '300px',
        width: '500px'
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
        height: '300px',
        width: '500px'
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
              <Button variant="secondary" size="sm" onClick={(event: React.MouseEvent) => {
          setFlipped(false);
          event.stopPropagation();
        }}>
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    front: <Card style={{
      padding: theme.spacing.lg,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '300px',
      width: '500px'
    }}>
        <h3 style={{
        ...theme.typography.h3,
        margin: 0,
        color: theme.colors.text.default
      }}>No Flip on Click</h3>
        <p style={{
        ...theme.typography.body,
        margin: \`\${theme.spacing.sm} 0 0 0\`,
        color: theme.colors.text.default
      }}>
          This card will NOT flip when clicked.
        </p>
      </Card>,
    back: <Card style={{
      padding: theme.spacing.lg,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '300px',
      width: '500px'
    }}>
        <h3 style={{
        ...theme.typography.h3,
        margin: 0,
        color: theme.colors.primary['10']
      }}>Back View</h3>
        <p style={{
        ...theme.typography.body,
        margin: \`\${theme.spacing.sm} 0 0 0\`,
        color: theme.colors.primary['10']
      }}>
          It can only be flipped programmatically.
        </p>
      </Card>,
    flipOnClick: false // Explicitly set to false
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    front: <Card style={{
      padding: theme.spacing.lg,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '300px',
      width: '500px'
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
      height: '300px',
      width: '500px'
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
        <Button variant="secondary" size="sm" onClick={(event: React.MouseEvent) => {
        alert('Remembered!');
        event.stopPropagation();
      }}>
          Remembered!
        </Button>
      </Card>,
    flipDirection: 'horizontal',
    flipOnClick: true
  }
}`,...h.parameters?.docs?.source}}};const $=["DefaultHorizontal","DefaultVertical","LongerDuration","InitiallyFlipped","ControlledFlipper","NoFlipOnClick","GermanFlashcard"];export{p as ControlledFlipper,l as DefaultHorizontal,a as DefaultVertical,h as GermanFlashcard,c as InitiallyFlipped,s as LongerDuration,d as NoFlipOnClick,$ as __namedExportsOrder,B as default};
