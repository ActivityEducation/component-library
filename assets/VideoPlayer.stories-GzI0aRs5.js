import{r as o,j as s,t as l}from"./iframe-CI6SfAYv.js";import{s as c}from"./emotion-styled.browser.esm-BNvuT_w2.js";import{B as b}from"./index-35YDmkMi.js";import{S as le}from"./index-IJnIdwUS.js";import{P as ce}from"./index-DGoRBcrt.js";import{C as de}from"./index-CoRRqWvt.js";import"./emotion-react.browser.esm-C8KZ_cib.js";import"./index-17Ykmepx.js";const q=t=>{const f=Math.floor(t/60),g=Math.floor(t%60),y=String(f).padStart(2,"0"),u=String(g).padStart(2,"0");return`${y}:${u}`},ue=c.div`
  position: relative;
  width: 100%;
  max-width: 800px; // Max width for the player, adjust as needed
  background-color: #000; // Black background for video area
  border-radius: ${t=>t.theme.borderRadius.md};
  overflow: hidden; // Ensures video and controls stay within rounded corners
  box-shadow: ${t=>t.theme.shadows.lg};
  aspect-ratio: 16 / 9; // Maintain 16:9 aspect ratio
  display: flex;
  justify-content: center;
  align-items: center;

  // When controls are visible, ensure they are on top
  &:hover .controls-overlay {
    opacity: 1;
  }
`,pe=c.video`
  width: 100%;
  height: 100%;
  display: block; // Remove extra space below video
  object-fit: contain; // Ensure video fits within bounds without cropping
  background-color: black; // Fallback background if video doesn't load
`,me=c.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; // Cover the entire player area
  z-index: 1; // Below controls, above video when video is paused/not playing
`,he=c.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%; // Take full height to capture mouse events
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
  opacity: ${t=>t.show?1:0};
  transition: opacity 0.3s ease-in-out;
  pointer-events: ${t=>t.show?"auto":"none"}; // Allow interaction only when visible
  z-index: 2; // Above video and placeholder image
`,fe=c.div`
  display: flex;
  align-items: center;
  padding: ${t=>t.theme.spacing.sm} ${t=>t.theme.spacing.lg};
  gap: ${t=>t.theme.spacing.md};
  color: #fff; // White text for controls
  flex-wrap: wrap; // Allow controls to wrap on small screens
`,ge=c.span`
  font-family: ${t=>t.theme.typography.fontFamily};
  font-size: ${t=>t.theme.typography.bodySmall.fontSize};
  color: #fff;
  white-space: nowrap; // Prevent time from wrapping
`,ye=c.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.spacing.sm};
  width: 100px; // Fixed width for volume slider
  flex-shrink: 0; // Prevent shrinking
`,ve=c.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8); // Dark overlay
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10; // Above video and controls
  padding: ${t=>t.theme.spacing.xl};

  // Ensure card inside interrupt overlay is responsive
  & > div {
    max-width: 90%; // Limit card width
    max-height: 90%; // Limit card height
    overflow-y: auto; // Allow scrolling if content is too large
  }
`,we=c.div`
  position: relative;
  width: calc(100% - 20px);
  margin-inline: auto;
  height: ${t=>t.theme.spacing.sm}; /* Same height as progress bar */
  cursor: pointer;
`,be=c.div`
  position: absolute;
  top: 50%;
  left: ${t=>t.position}%;
  transform: translate(-50%, -50%);
  width: 8px; // Size of the marker dot
  height: 8px;
  background-color: ${t=>t.theme.colors.secondary[40]}; // Accent color for markers
  border-radius: ${t=>t.theme.borderRadius.full};
  z-index: 5; // Above the progress bar fill, below the thumb if any
  pointer-events: none; // Do not interfere with progress bar clicks
`,X=({src:t,title:f="Video Player",autoPlay:g=!1,loop:y=!1,muted:u=!1,interrupts:T=[],placeholderImage:F,...G})=>{const r=o.useRef(null),v=o.useRef(null),[i,V]=o.useState(g),[z,D]=o.useState(0),[m,H]=o.useState(0),[I,W]=o.useState(u?0:1),[h,E]=o.useState(u),[d,Y]=o.useState(!1),[J,w]=o.useState(!0),[Z,U]=o.useState(!1),[N,O]=o.useState(null),[a,Q]=o.useState(!1),A=o.useRef(new Set),p=o.useRef(null),L=o.useCallback(()=>{V(!0),U(!0)},[]),B=o.useCallback(()=>V(!1),[]),$=o.useCallback(()=>{if(r.current){const e=r.current.currentTime;if(D(e),!a){for(const n of T)if(e>=n.timestampSeconds&&e<n.timestampSeconds+.5&&!A.current.has(n.id)){r.current.pause(),O(n),Q(!0),A.current.add(n.id);break}}}},[T,a]),M=o.useCallback(()=>{r.current&&(H(r.current.duration),r.current.volume=u?0:1,r.current.muted=u)},[u]),R=o.useCallback(()=>{r.current&&(W(r.current.volume),E(r.current.muted))},[]),_=o.useCallback(()=>{V(!1),r.current&&!y&&(r.current.currentTime=0),A.current.clear(),U(!1)},[y]);o.useEffect(()=>{const e=r.current;return e&&(e.addEventListener("play",L),e.addEventListener("pause",B),e.addEventListener("timeupdate",$),e.addEventListener("loadedmetadata",M),e.addEventListener("volumechange",R),e.addEventListener("ended",_),g?e.play().catch(n=>console.error("Autoplay failed:",n)):e.pause()),()=>{e&&(e.removeEventListener("play",L),e.removeEventListener("pause",B),e.removeEventListener("timeupdate",$),e.removeEventListener("loadedmetadata",M),e.removeEventListener("volumechange",R),e.removeEventListener("ended",_))}},[g,L,B,$,M,R,_]),o.useEffect(()=>{const e=()=>{Y(document.fullscreenElement===v.current)};return document.addEventListener("fullscreenchange",e),()=>document.removeEventListener("fullscreenchange",e)},[]);const K=o.useCallback(()=>{a||r.current&&(i?r.current.pause():r.current.play().catch(e=>console.error("Play failed:",e)))},[i,a]),ee=o.useCallback(e=>{if(r.current){const n=e/100*m;r.current.currentTime=n,D(n)}},[m]),te=o.useCallback(e=>{if(r.current){const n=e/100;r.current.volume=n,E(n===0)}},[]),oe=o.useCallback(()=>{r.current&&(r.current.muted=!h,E(!h),h&&r.current.volume===0&&(r.current.volume=.5,W(.5)))},[h]),re=o.useCallback(()=>{v.current&&(document.fullscreenElement?document.exitFullscreen():v.current.requestFullscreen().catch(e=>{console.error(`Error attempting to enable full-screen mode: ${e.message} (${e.name})`)}))},[]),se=o.useCallback(()=>{w(!0),p.current&&clearTimeout(p.current),p.current=setTimeout(()=>{i&&!d&&!a&&w(!1)},3e3)},[i,d,a]),ne=o.useCallback(()=>{i&&!d&&!a&&w(!1),p.current&&clearTimeout(p.current)},[i,d,a]);o.useEffect(()=>{(!i||d||a)&&(w(!0),p.current&&clearTimeout(p.current))},[i,d,a]);const ae=o.useCallback(()=>{Q(!1),O(null),r.current&&r.current.play().catch(e=>console.error("Resume play failed:",e))},[]);return s.jsxs(ue,{ref:v,onMouseMove:se,onMouseLeave:ne,onClick:K,title:f,...G,children:[F&&(!Z||!i)&&s.jsx(me,{src:F,alt:`${f} placeholder`}),s.jsx(pe,{ref:r,src:t,loop:y,preload:"metadata",title:f,controls:!1}),a&&N&&s.jsx(ve,{children:s.jsxs(de,{style:{maxWidth:"400px",width:"100%",textAlign:"center"},children:[N.content,s.jsx(b,{variant:"primary",onClick:e=>{e.stopPropagation(),ae()},style:{marginTop:l.spacing.md},children:"Continue"})]})}),s.jsxs(he,{show:J||!i||d,className:"controls-overlay",children:[s.jsxs(we,{onClick:e=>{if(a){e.stopPropagation();return}if(r.current&&e.currentTarget){const n=e.currentTarget.getBoundingClientRect(),ie=(e.clientX-n.left)/n.width*100;ee(ie)}},children:[s.jsx(ce,{value:z/m*100||0,max:100,style:{cursor:"pointer"}}),T.map(e=>{const n=e.timestampSeconds/m*100;return m>0&&!isNaN(n)&&isFinite(n)?s.jsx(be,{position:n,title:`Interrupt at ${q(e.timestampSeconds)}`},e.id):null})]}),s.jsxs(fe,{children:[s.jsx(b,{variant:"icon",size:"sm",onClick:e=>{e.stopPropagation(),K()},style:{color:"#fff"},disabled:a,children:i?"fa-solid fa-pause":"fa-solid fa-play"}),s.jsxs(ye,{children:[s.jsx(b,{variant:"icon",size:"sm",onClick:e=>{e.stopPropagation(),oe()},style:{color:"#fff"},disabled:a,children:h||I===0?"fa-solid fa-volume-mute":I>.5?"fa-solid fa-volume-up":"fa-solid fa-volume-down"}),s.jsx(le,{min:0,max:100,step:1,value:h?0:I*100,onValueChange:te,onClick:e=>e.stopPropagation(),style:{flexGrow:1},disabled:a})]}),s.jsxs(ge,{children:[q(z)," / ",q(m)]}),s.jsx("div",{style:{flexGrow:1}}),s.jsx(b,{variant:"icon",size:"sm",onClick:e=>{e.stopPropagation(),re()},style:{color:"#fff"},disabled:a,children:d?"fa-solid fa-compress-arrows-alt":"fa-solid fa-expand-arrows-alt"})]})]})]})};X.__docgenInfo={description:`A custom VideoPlayer component for the AscendUCore Design System.
Provides a responsive video player with custom controls for playback,
volume, progress, and fullscreen, integrating other UI Kit components.
Now includes support for interactive interrupt elements at specific timestamps,
visually indicated on the progress bar, and a placeholder image.`,methods:[],displayName:"VideoPlayer",props:{src:{required:!0,tsType:{name:"string"},description:"The URL of the video source."},title:{required:!1,tsType:{name:"string"},description:"The title of the video, used for accessibility and display.",defaultValue:{value:"'Video Player'",computed:!1}},autoPlay:{required:!1,tsType:{name:"boolean"},description:`If true, the video will start playing automatically.
@default false`,defaultValue:{value:"false",computed:!1}},muted:{required:!1,tsType:{name:"boolean"},description:`If true, the video will be muted.
@default false`,defaultValue:{value:"false",computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"If true, the video will loop after ending.",defaultValue:{value:"false",computed:!1}},interrupts:{required:!1,tsType:{name:"Array",elements:[{name:"VideoInterrupt"}],raw:"VideoInterrupt[]"},description:"An array of interactive interrupt elements to display at specific timestamps.",defaultValue:{value:"[]",computed:!1}},placeholderImage:{required:!1,tsType:{name:"string"},description:"URL for a placeholder image to display before the video loads or when paused."},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};const Ee={title:"Components/VideoPlayer",component:X,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{src:{control:"text",description:"The URL of the video source.",defaultValue:"https://www.w3schools.com/html/mov_bbb.mp4"},title:{control:"text",description:"The title of the video, used for accessibility.",defaultValue:"Big Buck Bunny Sample"},autoPlay:{control:"boolean",description:"If true, the video will start playing automatically.",defaultValue:!1},loop:{control:"boolean",description:"If true, the video will loop after ending.",defaultValue:!1},muted:{control:"boolean",description:"If true, the video will be muted by default.",defaultValue:!1},interrupts:{control:"object",description:"An array of interactive interrupt elements to display at specific timestamps."}},decorators:[t=>s.jsx("div",{style:{padding:l.spacing.xl,backgroundColor:l.colors.neutral[95],display:"flex",justifyContent:"center"},children:s.jsx(t,{})})]},x={args:{src:"https://www.w3schools.com/html/mov_bbb.mp4",title:"Big Buck Bunny Sample"}},S={args:{src:"https://www.w3schools.com/html/mov_bbb.mp4",title:"Autoplay Video",autoPlay:!0,muted:!0}},k={args:{src:"https://www.w3schools.com/html/mov_bbb.mp4",title:"Looping Video",loop:!0,autoPlay:!0,muted:!0}},C={args:{src:"https://www.w3schools.com/html/mov_bbb.mp4",title:"Muted Autoplay Video",autoPlay:!0,muted:!0}},P={args:{src:"https://www.w3schools.com/html/movie.mp4",title:"The Bear Sample"}},j={args:{src:"https://www.w3schools.com/html/mov_bbb.mp4",title:"Video with Interrupts",autoPlay:!1,muted:!1,interrupts:[{id:"intro-question",timestampSeconds:3,content:s.jsxs(s.Fragment,{children:[s.jsx("h3",{style:{...l.typography.h4,margin:0,color:l.colors.text.default},children:"Quick Question!"}),s.jsx("p",{style:{...l.typography.bodySmall,margin:0,color:l.colors.text.default},children:"What is the main character of this video?"})]})},{id:"mid-video-info",timestampSeconds:7,content:s.jsxs(s.Fragment,{children:[s.jsx("h3",{style:{...l.typography.h4,margin:0,color:l.colors.text.default},children:"Did You Know?"}),s.jsx("p",{style:{...l.typography.bodySmall,margin:0,color:l.colors.text.default},children:"This video is a popular open-source animation."})]})}]}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Big Buck Bunny Sample'
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Autoplay Video',
    autoPlay: true,
    muted: true // Autoplay often requires muted to work in browsers
  }
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Looping Video',
    loop: true,
    autoPlay: true,
    muted: true
  }
}`,...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Muted Autoplay Video',
    autoPlay: true,
    muted: true
  }
}`,...C.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://www.w3schools.com/html/movie.mp4',
    // Another sample video
    title: 'The Bear Sample'
  }
}`,...P.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};const Ae=["Default","Autoplay","Loop","MutedAutoplay","AnotherVideo","WithInterrupts"];export{P as AnotherVideo,S as Autoplay,x as Default,k as Loop,C as MutedAutoplay,j as WithInterrupts,Ae as __namedExportsOrder,Ee as default};
