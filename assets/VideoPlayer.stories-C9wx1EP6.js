import{j as t,t as e}from"./iframe-XJf-RO9W.js";import{V as c}from"./index-Dq57-o_O.js";import"./emotion-styled.browser.esm-Zt9Xnlbb.js";import"./index-ByguWD-9.js";import"./emotion-react.browser.esm-DE_3pz7Q.js";import"./index-guuBgZ9n.js";import"./index-BeI4ymMm.js";import"./index-CD-Z_Pzg.js";import"./index-BmzST_Tt.js";const f={title:"Components/VideoPlayer",component:c,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{src:{control:"text",description:"The URL of the video source.",defaultValue:"https://www.w3schools.com/html/mov_bbb.mp4"},title:{control:"text",description:"The title of the video, used for accessibility.",defaultValue:"Big Buck Bunny Sample"},autoPlay:{control:"boolean",description:"If true, the video will start playing automatically.",defaultValue:!1},loop:{control:"boolean",description:"If true, the video will loop after ending.",defaultValue:!1},muted:{control:"boolean",description:"If true, the video will be muted by default.",defaultValue:!1},interrupts:{control:"object",description:"An array of interactive interrupt elements to display at specific timestamps."}},decorators:[i=>t.jsx("div",{style:{padding:e.spacing.xl,backgroundColor:e.colors.neutral[95],display:"flex",justifyContent:"center"},children:t.jsx(i,{})})]},o={args:{src:"https://www.w3schools.com/html/mov_bbb.mp4",title:"Big Buck Bunny Sample"}},r={args:{src:"https://www.w3schools.com/html/mov_bbb.mp4",title:"Autoplay Video",autoPlay:!0,muted:!0}},s={args:{src:"https://www.w3schools.com/html/mov_bbb.mp4",title:"Looping Video",loop:!0,autoPlay:!0,muted:!0}},a={args:{src:"https://www.w3schools.com/html/mov_bbb.mp4",title:"Muted Autoplay Video",autoPlay:!0,muted:!0}},n={args:{src:"https://www.w3schools.com/html/movie.mp4",title:"The Bear Sample"}},l={args:{src:"https://www.w3schools.com/html/mov_bbb.mp4",title:"Video with Interrupts",autoPlay:!1,muted:!1,interrupts:[{id:"intro-question",timestampSeconds:3,content:t.jsxs(t.Fragment,{children:[t.jsx("h3",{style:{...e.typography.h4,margin:0,color:e.colors.text.default},children:"Quick Question!"}),t.jsx("p",{style:{...e.typography.bodySmall,margin:0,color:e.colors.text.default},children:"What is the main character of this video?"})]})},{id:"mid-video-info",timestampSeconds:7,content:t.jsxs(t.Fragment,{children:[t.jsx("h3",{style:{...e.typography.h4,margin:0,color:e.colors.text.default},children:"Did You Know?"}),t.jsx("p",{style:{...e.typography.bodySmall,margin:0,color:e.colors.text.default},children:"This video is a popular open-source animation."})]})}]}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Big Buck Bunny Sample'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Autoplay Video',
    autoPlay: true,
    muted: true // Autoplay often requires muted to work in browsers
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Looping Video',
    loop: true,
    autoPlay: true,
    muted: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Muted Autoplay Video',
    autoPlay: true,
    muted: true
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://www.w3schools.com/html/movie.mp4',
    // Another sample video
    title: 'The Bear Sample'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    // Big Buck Bunny is 10 seconds long
    title: 'Video with Interrupts',
    autoPlay: false,
    muted: false,
    interrupts: [{
      id: 'intro-question',
      timestampSeconds: 3,
      // Interrupt at 3 seconds
      content: <>
            <h3 style={{
          ...theme.typography.h4,
          margin: 0,
          color: theme.colors.text.default
        }}>
              Quick Question!
            </h3>
            <p style={{
          ...theme.typography.bodySmall,
          margin: 0,
          color: theme.colors.text.default
        }}>
              What is the main character of this video?
            </p>
          </>
    }, {
      id: 'mid-video-info',
      timestampSeconds: 7,
      // Interrupt at 7 seconds
      content: <>
            <h3 style={{
          ...theme.typography.h4,
          margin: 0,
          color: theme.colors.text.default
        }}>
              Did You Know?
            </h3>
            <p style={{
          ...theme.typography.bodySmall,
          margin: 0,
          color: theme.colors.text.default
        }}>
              This video is a popular open-source animation.
            </p>
          </>
    }]
  }
}`,...l.parameters?.docs?.source}}};const v=["Default","Autoplay","Loop","MutedAutoplay","AnotherVideo","WithInterrupts"];export{n as AnotherVideo,r as Autoplay,o as Default,s as Loop,a as MutedAutoplay,l as WithInterrupts,v as __namedExportsOrder,f as default};
