import{j as t,t as s,r as u}from"./iframe-XJf-RO9W.js";import{T as x}from"./index-GibhputC.js";import"./index-C2jQ6SkN.js";import{B as h}from"./index-ByguWD-9.js";import"./index-BmzST_Tt.js";import"./index-B3-2WBgO.js";import"./index-ImqK2cea.js";import"./index-B7iyCpam.js";import"./index-guuBgZ9n.js";import"./index-D1S9llNI.js";import"./index-BevCfjQH.js";import"./index-DaQSjhOt.js";import"./index-CD-Z_Pzg.js";import"./index-T9m_uaHX.js";import"./index-DwKSXbOR.js";import"./index-C0ZroZ3A.js";import{S as v}from"./index-BeI4ymMm.js";import"./index-B6iSQPDi.js";import"./index-DPmmUMJ_.js";import"./index-Cuppfap7.js";import"./index-hKkMw5Tq.js";import"./index-Dq57-o_O.js";import"./index-Cp3CGPsa.js";import"./index-BPlyJI9X.js";import"./ObjectiveProgress-Dz16heLb.js";import"./UpcomingDeadlines-C4znN0P-.js";import"./emotion-styled.browser.esm-Zt9Xnlbb.js";import"./emotion-react.browser.esm-DE_3pz7Q.js";import"./index-CegwbtpY.js";import"./index-C4kivIfZ.js";const e=[{id:"1",text:"Welcome to this introductory course on federated learning platforms.",start:0,end:3.5},{id:"2",text:"In this module, we will cover the core principles of ActivityPub.",start:3.6,end:7.2},{id:"3",text:"Understanding decentralization is key to building robust social networks.",start:7.3,end:11},{id:"4",text:"We will explore how different instances can communicate seamlessly.",start:11.1,end:14.8},{id:"5",text:"This enables a vast, interconnected network of educators and learners.",start:14.9,end:19},{id:"6",text:"Our platform aims to provide comprehensible input for language acquisition.",start:19.1,end:23.5},{id:"7",text:"You will learn about various activity types, such as posts and replies.",start:23.6,end:27.8},{id:"8",text:"We also discuss how to implement secure server-to-server communications.",start:27.9,end:32.5},{id:"9",text:"Finally, we will look at real-time interaction features.",start:32.6,end:35.5},{id:"10",text:"Thank you for joining this lesson.",start:35.6,end:37}],f=[{id:"a",text:"Hello, world!",start:0,end:1.5},{id:"b",text:"This is a short example.",start:1.6,end:3}],S=[],Z={title:"Components/Transcript",component:x,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{transcript:{control:"object",description:"The array of transcript segments."},currentTime:{control:{type:"range",min:0,max:40,step:.1},description:"The current playback time in seconds."}},decorators:[n=>t.jsx("div",{style:{padding:s.spacing.xl,backgroundColor:s.colors.neutral[95],display:"flex",flexDirection:"column",gap:s.spacing.lg,width:"100%",maxWidth:"600px"},children:t.jsx(n,{})})]},o={render:n=>{const[r,a]=u.useState(n.currentTime||0),[g,T]=u.useState(!1);return u.useEffect(()=>{let i;return g&&r<e[e.length-1].end+2&&(i=setInterval(()=>{a(y=>y+.1)},100)),()=>clearInterval(i)},[r,g]),t.jsxs(t.Fragment,{children:[t.jsx(x,{...n,transcript:e,currentTime:r}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:s.spacing.md},children:[t.jsx(v,{min:0,max:e[e.length-1].end+5,step:.1,value:r,onValueChange:i=>a(i),style:{flexGrow:1}}),t.jsxs("span",{style:{minWidth:"40px",textAlign:"right",...s.typography.bodySmall},children:[r.toFixed(1),"s"]}),t.jsx(h,{size:"sm",onClick:()=>{T(!1),a(0)},children:"Reset"}),t.jsx(h,{size:"sm",onClick:()=>{T(!0),a(0)},children:"Start"})]})]})},args:{currentTime:0,transcript:e}},c={args:{transcript:f,currentTime:1.8}},p={args:{transcript:S,currentTime:0}},m={args:{transcript:e,currentTime:1}},l={args:{transcript:e,currentTime:12.5}},d={args:{transcript:e,currentTime:36}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [currentTime, setCurrentTime] = useState(args.currentTime || 0);
    const [started, setStarted] = useState(false);
    // Simulate playing through the transcript automatically
    useEffect(() => {
      let intervalId: number;
      if (started && currentTime < longTranscript[longTranscript.length - 1].end + 2) {
        // Play slightly past end
        intervalId = setInterval(() => {
          setCurrentTime(prevTime => prevTime + 0.1);
        }, 100); // Update every 100ms
      }
      return () => clearInterval(intervalId);
    }, [currentTime, started]);
    return <>
        <Transcript {...args} transcript={longTranscript} currentTime={currentTime} />
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing.md
      }}>
          <Slider min={0} max={longTranscript[longTranscript.length - 1].end + 5} // Slider max slightly beyond end
        step={0.1} value={currentTime} onValueChange={value => setCurrentTime(value)} style={{
          flexGrow: 1
        }} />
          <span style={{
          minWidth: '40px',
          textAlign: 'right',
          ...theme.typography.bodySmall
        }}>
            {currentTime.toFixed(1)}s
          </span>
          <Button size="sm" onClick={() => {
          setStarted(false);
          setCurrentTime(0);
        }}>Reset</Button>
          <Button size="sm" onClick={() => {
          setStarted(true);
          setCurrentTime(0);
        }}>Start</Button>
        </div>
      </>;
  },
  args: {
    currentTime: 0,
    transcript: longTranscript // Provide the long transcript for this story
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    transcript: shortTranscript,
    currentTime: 1.8 // Highlight the second sentence
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    transcript: emptyTranscript,
    currentTime: 0
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    transcript: longTranscript,
    currentTime: 1.0
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    transcript: longTranscript,
    currentTime: 12.5
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    transcript: longTranscript,
    currentTime: 36.0
  }
}`,...d.parameters?.docs?.source}}};const $=["InteractiveTranscript","ShortTranscript","EmptyTranscript","FirstSentenceActive","MiddleSentenceActive","LastSentenceActive"];export{p as EmptyTranscript,m as FirstSentenceActive,o as InteractiveTranscript,d as LastSentenceActive,l as MiddleSentenceActive,c as ShortTranscript,$ as __namedExportsOrder,Z as default};
