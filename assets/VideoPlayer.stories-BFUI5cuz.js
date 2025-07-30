import{j as e,t}from"./iframe-DGiRyBXK.js";import{V as u}from"./index-Cyd7v3sM.js";import"./emotion-styled-base.browser.esm-DOJJeMjc.js";import"./index-CAB9-Wky.js";import"./emotion-react.browser.esm-CRTluIfQ.js";import"./index-Cln6lCsR.js";import"./index-VFDZBhwq.js";import"./index-BIXc_CGl.js";import"./index-yh91TgFT.js";const P={title:"Components/VideoPlayer",component:u,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{src:{control:"text",description:"The URL of the video source.",defaultValue:"https://www.w3schools.com/html/mov_bbb.mp4"},title:{control:"text",description:"The title of the video, used for accessibility.",defaultValue:"Big Buck Bunny Sample"},autoPlay:{control:"boolean",description:"If true, the video will start playing automatically.",defaultValue:!1},loop:{control:"boolean",description:"If true, the video will loop after ending.",defaultValue:!1},muted:{control:"boolean",description:"If true, the video will be muted by default.",defaultValue:!1},interrupts:{control:"object",description:"An array of interactive interrupt elements to display at specific timestamps."},placeholderImage:{control:"text",description:"URL for a placeholder image to display before the video loads or when paused."},onPlay:{action:"play"},onPause:{action:"pause"},onPlayerVolumeChange:{action:"volumeChange"},onPlayerTimeUpdate:{action:"timeUpdate"},onFullScreenChange:{action:"fullScreenChange"},onInterruptActive:{action:"interruptActive"},onInterruptDismiss:{action:"interruptDismiss"},onEnded:{action:"ended"}},decorators:[p=>e.jsx("div",{style:{padding:t.spacing.xl,backgroundColor:t.colors.neutral[95],display:"flex",justifyContent:"center"},children:e.jsx(p,{})})]},o={args:{src:"https://www.w3schools.com/html/mov_bbb.mp4",title:"Big Buck Bunny Sample",autoPlay:!1}},r={args:{src:"https://www.w3schools.com/html/mov_bbb.mp4",title:"Autoplay Video",autoPlay:!0,muted:!0}},s={args:{src:"https://www.w3schools.com/html/mov_bbb.mp4",title:"Looping Video",loop:!0,autoPlay:!0,muted:!0}},a={args:{src:"https://www.w3schools.com/html/mov_bbb.mp4",title:"Muted Autoplay Video",autoPlay:!0,muted:!0}},n={args:{src:"https://www.w3schools.com/html/movie.mp4",title:"The Bear Sample"}},l={args:{src:"https://www.w3schools.com/html/mov_bbb.mp4",title:"Video with Interrupts",autoPlay:!1,muted:!0,interrupts:[{id:"intro-question",timestampSeconds:3,content:e.jsxs(e.Fragment,{children:[e.jsx("h3",{style:{...t.typography.h4,margin:0,color:t.colors.text.default},children:"Quick Question!"}),e.jsx("p",{style:{...t.typography.bodySmall,margin:0,color:t.colors.text.default},children:"What is the main character of this video?"})]})},{id:"mid-video-info",timestampSeconds:7,content:e.jsxs(e.Fragment,{children:[e.jsx("h3",{style:{...t.typography.h4,margin:0,color:t.colors.text.default},children:"Did You Know?"}),e.jsx("p",{style:{...t.typography.bodySmall,margin:0,color:t.colors.text.default},children:"This video is a popular open-source animation."})]})}]}},c={args:{src:"https://www.w3schools.com/html/mov_bbb.mp4",title:"Video with Auto-Hiding Controls",autoPlay:!0,muted:!0}},i={args:{src:"https://www.w3schools.com/html/mov_bbb.mp4",title:"Fullscreen Test Video"}},m={args:{src:"https://www.w3schools.com/html/mov_bbb.mp4",title:"Video with Placeholder",autoPlay:!1,placeholderImage:"https://via.placeholder.com/640x360?text=Video+Placeholder"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Big Buck Bunny Sample",
    autoPlay: false
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Autoplay Video",
    autoPlay: true,
    muted: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Looping Video",
    loop: true,
    autoPlay: true,
    muted: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Muted Autoplay Video",
    autoPlay: true,
    muted: true
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://www.w3schools.com/html/movie.mp4",
    // Another sample video
    title: "The Bear Sample"
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    // Big Buck Bunny is 10 seconds long
    title: "Video with Interrupts",
    autoPlay: false,
    muted: true,
    // Mute for consistent test environment
    interrupts: [{
      id: "intro-question",
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
      id: "mid-video-info",
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Video with Auto-Hiding Controls",
    autoPlay: true,
    muted: true
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Fullscreen Test Video"
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Video with Placeholder",
    autoPlay: false,
    placeholderImage: "https://via.placeholder.com/640x360?text=Video+Placeholder"
  }
}`,...m.parameters?.docs?.source}}};const V=["Default","Autoplay","Loop","MutedAutoplay","AnotherVideo","WithInterrupts","ControlsAutoHide","FullscreenToggle","WithPlaceholderImage"];export{n as AnotherVideo,r as Autoplay,c as ControlsAutoHide,o as Default,i as FullscreenToggle,s as Loop,a as MutedAutoplay,l as WithInterrupts,m as WithPlaceholderImage,V as __namedExportsOrder,P as default};
