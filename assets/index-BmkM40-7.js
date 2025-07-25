import{r,j as s,t as ee}from"./iframe-BMJQTajd.js";import{s as l}from"./emotion-styled.browser.esm-CqS4Vnc4.js";import{B as b}from"./index-BegQLpbm.js";import{S as te}from"./index-DlanzCkq.js";import{P as re}from"./index-NFGYUkN2.js";import{C as oe}from"./index-Bjg7ymKC.js";const V=t=>{const m=Math.floor(t/60),h=Math.floor(t%60),v=String(m).padStart(2,"0"),d=String(h).padStart(2,"0");return`${v}:${d}`},ne=l.div`
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
`,se=l.video`
  width: 100%;
  height: 100%;
  display: block; // Remove extra space below video
  object-fit: contain; // Ensure video fits within bounds without cropping
  background-color: black; // Fallback background if video doesn't load
`,ae=l.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; // Cover the entire player area
  z-index: 1; // Below controls, above video when video is paused/not playing
`,ie=l.div`
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
`,le=l.div`
  display: flex;
  align-items: center;
  padding: ${t=>t.theme.spacing.sm} ${t=>t.theme.spacing.lg};
  gap: ${t=>t.theme.spacing.md};
  color: #fff; // White text for controls
  flex-wrap: wrap; // Allow controls to wrap on small screens
`,ce=l.span`
  font-family: ${t=>t.theme.typography.fontFamily};
  font-size: ${t=>t.theme.typography.bodySmall.fontSize};
  color: #fff;
  white-space: nowrap; // Prevent time from wrapping
`,de=l.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.spacing.sm};
  width: 100px; // Fixed width for volume slider
  flex-shrink: 0; // Prevent shrinking
`,ue=l.div`
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
`,pe=l.div`
  position: relative;
  width: calc(100% - 20px);
  margin-inline: auto;
  height: ${t=>t.theme.spacing.sm}; /* Same height as progress bar */
  cursor: pointer;
`,fe=l.div`
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
`,me=({src:t,title:m="Video Player",autoPlay:h=!1,loop:v=!1,muted:d=!1,interrupts:x=[],placeholderImage:$,...N})=>{const o=r.useRef(null),g=r.useRef(null),[i,w]=r.useState(h),[M,A]=r.useState(0),[p,U]=r.useState(0),[k,R]=r.useState(d?0:1),[f,C]=r.useState(d),[c,W]=r.useState(!1),[O,y]=r.useState(!0),[X,z]=r.useState(!1),[F,q]=r.useState(null),[a,B]=r.useState(!1),S=r.useRef(new Set),u=r.useRef(null),P=r.useCallback(()=>{w(!0),z(!0)},[]),T=r.useCallback(()=>w(!1),[]),E=r.useCallback(()=>{if(o.current){const e=o.current.currentTime;if(A(e),!a){for(const n of x)if(e>=n.timestampSeconds&&e<n.timestampSeconds+.5&&!S.current.has(n.id)){o.current.pause(),q(n),B(!0),S.current.add(n.id);break}}}},[x,a]),j=r.useCallback(()=>{o.current&&(U(o.current.duration),o.current.volume=d?0:1,o.current.muted=d)},[d]),I=r.useCallback(()=>{o.current&&(R(o.current.volume),C(o.current.muted))},[]),L=r.useCallback(()=>{w(!1),o.current&&!v&&(o.current.currentTime=0),S.current.clear(),z(!1)},[v]);r.useEffect(()=>{const e=o.current;return e&&(e.addEventListener("play",P),e.addEventListener("pause",T),e.addEventListener("timeupdate",E),e.addEventListener("loadedmetadata",j),e.addEventListener("volumechange",I),e.addEventListener("ended",L),h?e.play().catch(n=>console.error("Autoplay failed:",n)):e.pause()),()=>{e&&(e.removeEventListener("play",P),e.removeEventListener("pause",T),e.removeEventListener("timeupdate",E),e.removeEventListener("loadedmetadata",j),e.removeEventListener("volumechange",I),e.removeEventListener("ended",L))}},[h,P,T,E,j,I,L]),r.useEffect(()=>{const e=()=>{W(document.fullscreenElement===g.current)};return document.addEventListener("fullscreenchange",e),()=>document.removeEventListener("fullscreenchange",e)},[]);const D=r.useCallback(()=>{a||o.current&&(i?o.current.pause():o.current.play().catch(e=>console.error("Play failed:",e)))},[i,a]),G=r.useCallback(e=>{if(o.current){const n=e/100*p;o.current.currentTime=n,A(n)}},[p]),H=r.useCallback(e=>{if(o.current){const n=e/100;o.current.volume=n,C(n===0)}},[]),_=r.useCallback(()=>{o.current&&(o.current.muted=!f,C(!f),f&&o.current.volume===0&&(o.current.volume=.5,R(.5)))},[f]),K=r.useCallback(()=>{g.current&&(document.fullscreenElement?document.exitFullscreen():g.current.requestFullscreen().catch(e=>{console.error(`Error attempting to enable full-screen mode: ${e.message} (${e.name})`)}))},[]),J=r.useCallback(()=>{y(!0),u.current&&clearTimeout(u.current),u.current=setTimeout(()=>{i&&!c&&!a&&y(!1)},3e3)},[i,c,a]),Q=r.useCallback(()=>{i&&!c&&!a&&y(!1),u.current&&clearTimeout(u.current)},[i,c,a]);r.useEffect(()=>{(!i||c||a)&&(y(!0),u.current&&clearTimeout(u.current))},[i,c,a]);const Y=r.useCallback(()=>{B(!1),q(null),o.current&&o.current.play().catch(e=>console.error("Resume play failed:",e))},[]);return s.jsxs(ne,{ref:g,onMouseMove:J,onMouseLeave:Q,onClick:D,title:m,...N,children:[$&&(!X||!i)&&s.jsx(ae,{src:$,alt:`${m} placeholder`}),s.jsx(se,{ref:o,src:t,loop:v,preload:"metadata",title:m,controls:!1}),a&&F&&s.jsx(ue,{children:s.jsxs(oe,{style:{maxWidth:"400px",width:"100%",textAlign:"center"},children:[F.content,s.jsx(b,{variant:"primary",onClick:e=>{e.stopPropagation(),Y()},style:{marginTop:ee.spacing.md},children:"Continue"})]})}),s.jsxs(ie,{show:O||!i||c,className:"controls-overlay",children:[s.jsxs(pe,{onClick:e=>{if(a){e.stopPropagation();return}if(o.current&&e.currentTarget){const n=e.currentTarget.getBoundingClientRect(),Z=(e.clientX-n.left)/n.width*100;G(Z)}},children:[s.jsx(re,{value:M/p*100||0,max:100,style:{cursor:"pointer"}}),x.map(e=>{const n=e.timestampSeconds/p*100;return p>0&&!isNaN(n)&&isFinite(n)?s.jsx(fe,{position:n,title:`Interrupt at ${V(e.timestampSeconds)}`},e.id):null})]}),s.jsxs(le,{children:[s.jsx(b,{variant:"icon",size:"sm",onClick:e=>{e.stopPropagation(),D()},style:{color:"#fff"},disabled:a,children:i?"fa-solid fa-pause":"fa-solid fa-play"}),s.jsxs(de,{children:[s.jsx(b,{variant:"icon",size:"sm",onClick:e=>{e.stopPropagation(),_()},style:{color:"#fff"},disabled:a,children:f||k===0?"fa-solid fa-volume-mute":k>.5?"fa-solid fa-volume-up":"fa-solid fa-volume-down"}),s.jsx(te,{min:0,max:100,step:1,value:f?0:k*100,onValueChange:H,onClick:e=>e.stopPropagation(),style:{flexGrow:1},disabled:a})]}),s.jsxs(ce,{children:[V(M)," / ",V(p)]}),s.jsx("div",{style:{flexGrow:1}}),s.jsx(b,{variant:"icon",size:"sm",onClick:e=>{e.stopPropagation(),K()},style:{color:"#fff"},disabled:a,children:c?"fa-solid fa-compress-arrows-alt":"fa-solid fa-expand-arrows-alt"})]})]})]})};me.__docgenInfo={description:`A custom VideoPlayer component for the AscendUCore Design System.
Provides a responsive video player with custom controls for playback,
volume, progress, and fullscreen, integrating other UI Kit components.
Now includes support for interactive interrupt elements at specific timestamps,
visually indicated on the progress bar, and a placeholder image.`,methods:[],displayName:"VideoPlayer",props:{src:{required:!0,tsType:{name:"string"},description:"The URL of the video source."},title:{required:!1,tsType:{name:"string"},description:"The title of the video, used for accessibility and display.",defaultValue:{value:"'Video Player'",computed:!1}},autoPlay:{required:!1,tsType:{name:"boolean"},description:`If true, the video will start playing automatically.
@default false`,defaultValue:{value:"false",computed:!1}},muted:{required:!1,tsType:{name:"boolean"},description:`If true, the video will be muted.
@default false`,defaultValue:{value:"false",computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"If true, the video will loop after ending.",defaultValue:{value:"false",computed:!1}},interrupts:{required:!1,tsType:{name:"Array",elements:[{name:"VideoInterrupt"}],raw:"VideoInterrupt[]"},description:"An array of interactive interrupt elements to display at specific timestamps.",defaultValue:{value:"[]",computed:!1}},placeholderImage:{required:!1,tsType:{name:"string"},description:"URL for a placeholder image to display before the video loads or when paused."},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};export{me as V};
