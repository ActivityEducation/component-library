import{r as l,j as i,t as e}from"./iframe-CkUD85aG.js";import{s as a}from"./emotion-styled.browser.esm-YHkEzSHc.js";import{C as h}from"./index-DhuTWZIB.js";import{L as p,a as m}from"./index-AYkoUy90.js";import{I as d}from"./index-BvK6iIix.js";const g=a.div`
  max-height: 400px; /* Limit height to enable scrolling */
  overflow-y: auto;  /* Enable vertical scrolling */
  position: relative; /* For internal positioning if needed */
  background-color: ${e.colors.background.surface};
  border-radius: ${e.borderRadius.md};
  box-shadow: ${e.shadows.sm};
  width: 100%; /* Ensure it takes full width of its parent */
  /* Removed max-width to allow the component to fill its parent's width */
  box-sizing: border-box;

  /* Hide scrollbar for Chrome, Safari, and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for Firefox */
  scrollbar-width: none;
  /* Hide scrollbar for IE and Edge */
  -ms-overflow-style: none;
`,u=a(m)`
  cursor: default; /* Not directly clickable to view details, but for highlighting */
  padding: ${e.spacing.sm} ${e.spacing.md}; /* Smaller padding for transcript lines */
  font-size: ${e.typography.bodySmall.fontSize};
  line-height: ${e.typography.bodySmall.lineHeight};
  color: ${e.colors.text.default};
  width: 100%;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  border-bottom: 1px solid ${e.colors.neutral[90]}; /* Lighter separator */

  &:last-child {
    border-bottom: none;
  }

  ${t=>t.isActive&&`
    background-color: ${t.theme.colors.primary[95]}; /* Light primary background for active */
    color: ${t.theme.colors.primary[10]};            /* Dark text on active highlight */
    font-weight: ${t.theme.typography.body.fontWeight}; /* Slightly bolder */
  `}
`,f=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${e.spacing.lg};
  text-align: center;
  width: 100%;
  color: ${e.colors.neutral[60]};
  ${e.typography.bodySmall};
  min-height: 150px; /* Ensure empty state has some height */
`,b=({transcript:t,currentTime:s,...c})=>{const n=l.useRef(null),o=t.find(r=>s>=r.start&&s<r.end);return l.useEffect(()=>{n.current&&n.current.scrollIntoView({behavior:"smooth",block:"center"})},[o]),i.jsx(g,{...c,children:i.jsx(h,{title:"Transcript",header:i.jsx(d,{name:"fa-solid fa-closed-captioning",size:"lg",color:e.colors.primary[50]}),style:{boxShadow:"none",borderRadius:"0",border:"none",padding:0},children:t.length>0?i.jsx(p,{style:{boxShadow:"none",borderRadius:"0"},children:t.map(r=>i.jsx(u,{ref:o&&o.id===r.id?n:null,isActive:o?.id===r.id,children:r.text},r.id))}):i.jsxs(f,{children:[i.jsx(d,{name:"fa-solid fa-file-alt",size:"xl"}),i.jsx("p",{children:"No transcript available."})]})})})};b.__docgenInfo={description:"The Transcript component displays a video transcript, highlighting the sentence\nthat is currently being spoken based on the provided `currentTime`.\nIt automatically scrolls the active sentence into view.",methods:[],displayName:"Transcript",props:{transcript:{required:!0,tsType:{name:"Array",elements:[{name:"TranscriptSegment"}],raw:"TranscriptSegment[]"},description:"An array of transcript segments to display.\nEach segment should have a unique `id`, `text`, `start`, and `end` timestamp."},currentTime:{required:!0,tsType:{name:"number"},description:`The current playback time of the video in seconds.
This is used to determine which segment to highlight.`},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles for the outer container."}}};export{b as T};
