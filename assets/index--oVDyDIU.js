import{r,j as a}from"./iframe-BMJQTajd.js";import{s as d}from"./emotion-styled.browser.esm-CqS4Vnc4.js";import{c as o}from"./emotion-react.browser.esm-DDmkCpzG.js";const y=d.div`
  display: flex;
  flex-direction: row; // Sidenav and content side-by-side
  height: 100%; // Take full height of parent
  width: 100%; // Take full width of parent
  overflow: hidden; // Hide content that overflows during Sidenav transition
  position: relative; // For positioning the overlay
`,w=({children:e,...t})=>a.jsx(y,{...t,children:e}),S=d.div`
  position: absolute; /* Default for 'over' mode */
  top: 0;
  bottom: 0;
  width: ${e=>e.width};
  background-color: ${e=>e.theme.colors.background.surface};
  box-shadow: ${e=>e.theme.shadows.lg};
  z-index: 100; /* Ensure it's above main content */
  transition: transform 0.3s ease-in-out;
  overflow-y: auto; /* Allow scrolling for sidenav content */
  flex-shrink: 0; /* Prevent shrinking in flex container */

  // Position based on 'position' prop
  ${e=>e.position==="start"?o`
          left: 0;
          transform: translateX(${e.isOpen?"0":"-100%"});
        `:o`
          right: 0;
          transform: translateX(${e.isOpen?"0":"100%"});
        `}

  // Adjust for 'side' mode (not absolute, part of flex flow)
  ${e=>e.mode==="side"&&o`
      position: relative;
      transform: none; /* Reset transform as it's part of flow */
      margin-left: ${e.position==="start"&&!e.isOpen?`-${e.width}`:"0"};
      margin-right: ${e.position==="end"&&!e.isOpen?`-${e.width}`:"0"};
      /* Transition margin for 'side' mode */
      transition: margin-left 0.3s ease-in-out, margin-right 0.3s ease-in-out;
    `}
`,T=d.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99; /* Below sidenav, above main content */
  opacity: ${e=>e.isOpen?1:0};
  transition: opacity 0.3s ease-in-out;
  pointer-events: ${e=>e.isOpen?"auto":"none"}; /* Only interactive when open */
`,b=({children:e,open:t,onOpenChange:i,position:l="start",mode:n="side",width:c="280px",...m})=>{const[v,p]=r.useState(!1),s=t!==void 0?t:v,u=r.useRef(null);r.useEffect(()=>{const f=g=>{n==="over"&&u.current&&!u.current.contains(g.target)&&(t===void 0&&p(!1),i?.(!1))};return s?document.addEventListener("mousedown",f):document.removeEventListener("mousedown",f),()=>{document.removeEventListener("mousedown",f)}},[s,n,t,i]);const h=r.useCallback(()=>{n==="over"&&(t===void 0&&p(!1),i?.(!1))},[n,t,i]);return a.jsxs(a.Fragment,{children:[n==="over"&&a.jsx(T,{isOpen:s,onClick:h}),a.jsx(S,{ref:u,isOpen:s,position:l,mode:n,width:c,...m,children:e})]})},x=d.div`
  flex-grow: 1; // Take up remaining space in the SidenavContainer
  overflow-y: auto; // Allow scrolling for main content
  transition: margin-left 0.3s ease-in-out, margin-right 0.3s ease-in-out;
  padding: ${e=>e.theme.spacing.lg}; // Default padding for content

  ${e=>e.sidenavMode==="side"&&e.isSidenavOpen&&e.sidenavPosition==="start"&&o`
      
    `}

  ${e=>e.sidenavMode==="side"&&e.isSidenavOpen&&e.sidenavPosition==="end"&&o`
      
    `}
`,R=({children:e,sidenavWidth:t="280px",sidenavPosition:i="start",sidenavMode:l="side",isSidenavOpen:n=!1,...c})=>a.jsx(x,{sidenavWidth:t,sidenavPosition:i,sidenavMode:l,isSidenavOpen:n,...c,children:e});w.__docgenInfo={description:"A container component for `Sidenav` and its associated main content.\nIt sets up the layout for a side navigation pattern.",methods:[],displayName:"SidenavContainer",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the Sidenav container. Typically includes the Sidenav and the main content."},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};b.__docgenInfo={description:`A Sidenav component for the AscendUCore Design System.
It provides a side navigation panel that can be opened and closed,
supporting 'over' (overlaying content) and 'side' (pushing content) modes,
and 'start' (left) or 'end' (right) positions.
Must be rendered within a \`SidenavContainer\`.`,methods:[],displayName:"Sidenav",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be rendered inside the Sidenav."},open:{required:!1,tsType:{name:"boolean"},description:"Controls whether the sidenav is open or closed (controlled component)."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:`Callback function that is called when the sidenav's open state changes.
Provides the new open state (true for open, false for closed).`},position:{required:!1,tsType:{name:"union",raw:"'start' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:`The position of the sidenav ('start' for left, 'end' for right).
@default 'start'`,defaultValue:{value:"'start'",computed:!1}},mode:{required:!1,tsType:{name:"union",raw:"'over' | 'side'",elements:[{name:"literal",value:"'over'"},{name:"literal",value:"'side'"}]},description:`The mode of the sidenav ('over' to overlay content, 'side' to push content).
@default 'side'`,defaultValue:{value:"'side'",computed:!1}},width:{required:!1,tsType:{name:"string"},description:`The width of the sidenav when open.
@default '280px'`,defaultValue:{value:"'280px'",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles for the sidenav panel."}}};R.__docgenInfo={description:"A component to wrap the main content area when using a `Sidenav`.\nIt handles adjusting its position based on the `Sidenav`'s mode and open state.\nMust be rendered within a `SidenavContainer`.",methods:[],displayName:"SidenavContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main content of the application."},sidenavWidth:{required:!1,tsType:{name:"string"},description:`The width of the Sidenav. This is crucial for 'side' mode to correctly
calculate the content's offset.`,defaultValue:{value:"'280px'",computed:!1}},sidenavPosition:{required:!1,tsType:{name:"union",raw:"'start' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:"The position of the Sidenav.",defaultValue:{value:"'start'",computed:!1}},sidenavMode:{required:!1,tsType:{name:"union",raw:"'over' | 'side'",elements:[{name:"literal",value:"'over'"},{name:"literal",value:"'side'"}]},description:"The mode of the Sidenav.",defaultValue:{value:"'side'",computed:!1}},isSidenavOpen:{required:!1,tsType:{name:"boolean"},description:"Whether the Sidenav is open.",defaultValue:{value:"false",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};export{b as S,w as a,R as b};
