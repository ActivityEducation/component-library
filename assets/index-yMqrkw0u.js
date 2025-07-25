import{r as a,j as t,t as z}from"./iframe-CUhOUwcP.js";import{s as S}from"./emotion-styled.browser.esm-DVCxs-Ot.js";import{a as k,T as A}from"./index-CXDLutqo.js";import{B as l}from"./index-DWmN52dn.js";import{I as W}from"./index-Cy3HKWZA.js";import{S as V,O as f}from"./index-7OPGXIgg.js";import{I as s}from"./index-DmB4jJR3.js";import{M as G,a as w}from"./index-cc4YgYVq.js";const m=e=>{if(typeof window>"u"||!window.getSelection)return!1;try{return document.queryCommandState(e)}catch{return!1}},P=e=>{if(typeof window>"u"||!window.getSelection||!e)return"p";const u=window.getSelection();if(!u||u.rangeCount===0)return"p";let h=u.getRangeAt(0).commonAncestorContainer;for(;h&&h!==e;){if(h.nodeType===Node.ELEMENT_NODE){const n=h.tagName.toLowerCase();if(["p","h1","h2","h3","h4","h5","h6","ul","ol","li","div","pre"].includes(n))return n}h=h.parentNode}return"p"},Y=S.div`
  border: 1px solid ${e=>e.theme.colors.border.default};
  border-radius: ${e=>e.theme.borderRadius.md};
  overflow: hidden; /* Ensures dropdowns/toolbars are contained */
  background-color: ${e=>e.theme.colors.background.surface};
  font-family: ${e=>e.theme.typography.fontFamily};
  color: ${e=>e.theme.colors.text.default};
  display: flex;
  flex-direction: column;
`,_=S(A)`
  border-bottom: 1px solid ${e=>e.theme.colors.border.default};
  border-bottom-left-radius: ${e=>e.theme.borderRadius.none};
  border-bottom-right-radius: ${e=>e.theme.borderRadius.none};
  padding: ${e=>e.theme.spacing.sm};
  flex-wrap: wrap; /* Allow toolbar items to wrap */
`,D=S.div`
  min-height: 200px;
  padding: ${e=>e.theme.spacing.lg};
  outline: none;
  overflow-y: auto;
  line-height: ${e=>e.theme.typography.body.lineHeight};
  font-size: ${e=>e.theme.typography.body.fontSize};
  color: ${e=>e.theme.colors.text.default};
  background-color: ${e=>e.theme.colors.background.default};

  /* Default paragraph styling for direct text input */
  p {
    margin-bottom: ${e=>e.theme.spacing.sm};
    &:last-child {
      margin-bottom: 0;
    }
  }

  /* Apply theme typography for headings */
  h1 {
    ${e=>e.theme.typography.h1};
    margin-bottom: ${e=>e.theme.spacing.md};
    margin-top: ${e=>e.theme.spacing.lg};
  }
  h2 {
    ${e=>e.theme.typography.h2};
    margin-bottom: ${e=>e.theme.spacing.md};
    margin-top: ${e=>e.theme.spacing.lg};
  }
  h3 {
    ${e=>e.theme.typography.h3};
    margin-bottom: ${e=>e.theme.spacing.sm};
    margin-top: ${e=>e.theme.spacing.md};
  }
  h4 {
    ${e=>e.theme.typography.h4};
    margin-bottom: ${e=>e.theme.spacing.sm};
    margin-top: ${e=>e.theme.spacing.md};
  }
  h5 {
    ${e=>e.theme.typography.h5};
    margin-bottom: ${e=>e.theme.spacing.xs};
    margin-top: ${e=>e.theme.spacing.sm};
  }
  h6 {
    ${e=>e.theme.typography.h6};
    margin-bottom: ${e=>e.theme.spacing.xs};
    margin-top: ${e=>e.theme.spacing.sm};
  }

  /* List styling */
  ul, ol {
    padding-left: ${e=>e.theme.spacing.xl};
    margin-bottom: ${e=>e.theme.spacing.sm};
  }
  li {
    margin-bottom: ${e=>e.theme.spacing.xs};
  }

  /* Placeholder styling for empty contenteditable */
  &:empty:not(:focus)::before {
    content: attr(data-placeholder);
    color: ${e=>e.theme.colors.neutral[60]};
    pointer-events: none;
    display: block; /* Required for :empty pseudo-element */
  }

  /* Text decoration for strikethrough */
  strike {
    text-decoration: line-through;
  }

  /* Styling for preformatted text */
  pre {
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
    font-size: 0.9em;
    background-color: ${e=>e.theme.colors.neutral[95]};
    border: 1px solid ${e=>e.theme.colors.neutral[80]};
    border-radius: ${e=>e.theme.borderRadius.sm};
    padding: ${e=>e.theme.spacing.sm};
    margin-bottom: ${e=>e.theme.spacing.sm};
    overflow-x: auto; /* Allow horizontal scrolling for long lines */
    white-space: pre-wrap; /* Ensure text wraps within pre blocks */
    word-break: break-all; /* Break long words */
  }
`,J=({placeholder:e="Start typing...",initialContent:u="",...h})=>{const n=a.useRef(null),[o,E]=a.useState({bold:!1,italic:!1,underline:!1,strikeThrough:!1,link:!1,alignLeft:!1,alignCenter:!1,alignRight:!1,justify:!1,blockquote:!1,bulletList:!1,orderedList:!1}),[M,N]=a.useState("p"),[L,b]=a.useState(!1),[y,x]=a.useState(""),$=a.useRef(null),j=a.useCallback(()=>{window.getSelection&&(window.getSelection()?.rangeCount??0)>0&&($.current=window.getSelection()?.getRangeAt(0)??null)},[]),C=a.useCallback(()=>{if($.current&&n.current){const i=window.getSelection();i&&(i.removeAllRanges(),i.addRange($.current),n.current.focus())}},[]),g=a.useCallback(()=>{if(typeof window>"u"||!window.getSelection)return;const i=window.getSelection();if(!i||i.rangeCount===0)return;const c={bold:m("bold"),italic:m("italic"),underline:m("underline"),strikeThrough:m("strikeThrough"),link:m("createLink"),alignLeft:m("justifyLeft"),alignCenter:m("justifyCenter"),alignRight:m("justifyRight"),justify:m("justifyFull"),blockquote:m("blockquote"),bulletList:m("insertUnorderedList"),orderedList:m("insertOrderedList")};E(c),N(P(n.current))},[]),r=a.useCallback((i,c=void 0)=>{if(C(),document.queryCommandSupported(i)){if(i==="formatBlock"&&n.current){const d=window.getSelection();if(d&&d.rangeCount>0){const O=d.getRangeAt(0);let R=null,p=O.commonAncestorContainer;for(;p&&p!==n.current;){if(p.nodeType===Node.ELEMENT_NODE){const v=p.tagName.toLowerCase();if(["p","h1","h2","h3","h4","h5","h6","ul","ol","li","div","pre"].includes(v)){R=p;break}}p=p.parentNode}if(R){const v=document.createRange();v.selectNodeContents(R),d.removeAllRanges(),d.addRange(v)}else d.isCollapsed&&n.current.innerText.trim()===""&&n.current.focus()}}document.execCommand(i,!1,c),setTimeout(()=>{g()},0)}},[C,g]),H=a.useCallback(()=>{if(n.current){if(n.current.innerHTML.trim()===""&&!L){if(n.current.innerHTML===""){n.current.innerHTML="<br>";const i=document.createRange(),c=window.getSelection();n.current.firstChild&&(i.selectNodeContents(n.current.firstChild),i.collapse(!0),c?.removeAllRanges(),c?.addRange(i))}}else if(n.current.innerHTML==="<br>"&&n.current.innerText.trim()!=="")n.current.innerHTML=n.current.innerText;else if(n.current.innerHTML.trim()!==""&&n.current.querySelector("p, h1, h2, h3, h4, h5, h6, ul, ol, pre")===null){const i=n.current.innerText.trim();if(i!==""){n.current.innerHTML=`<p>${i}</p>`;const c=document.createRange();c.selectNodeContents(n.current.firstChild),c.collapse(!1);const d=window.getSelection();d?.removeAllRanges(),d?.addRange(c)}}}g()},[g,L]),T=a.useCallback(()=>{j(),g()},[j,g]),I=a.useCallback(()=>{j(),n.current&&n.current.innerHTML.trim()==="<br>"&&(n.current.innerHTML="")},[j]);a.useEffect(()=>{if(n.current){if(u){n.current.innerHTML=u;const i=document.createRange(),c=window.getSelection();i.selectNodeContents(n.current),i.collapse(!1),c?.removeAllRanges(),c?.addRange(i)}else n.current.innerHTML="";g()}},[u,g]);const q=a.useCallback(()=>{if(o.link)b(!1),x(""),r("unlink");else{C(),b(!0);const i=window.getSelection();if(i&&i.rangeCount>0){const d=i.getRangeAt(0).startContainer.parentElement?.closest("a");d&&x(d.href)}}},[o.link,r,C]),B=a.useCallback(()=>{y.trim()&&(r("createLink",y),b(!1),x(""))},[y,r]),F=a.useCallback(()=>{b(!1),x("")},[]),U=a.useCallback(()=>{r("unlink"),b(!1),x("")},[r]);return t.jsxs(Y,{style:h.style,children:[t.jsxs(_,{children:[t.jsxs(V,{value:M,onValueChange:i=>r("formatBlock",i),placeholder:"Format",style:{minWidth:"150px",marginRight:z.spacing.md},children:[t.jsx(f,{value:"p",children:"Paragraph"}),t.jsx(f,{value:"h1",children:"Heading 1"}),t.jsx(f,{value:"h2",children:"Heading 2"}),t.jsx(f,{value:"h3",children:"Heading 3"}),t.jsx(f,{value:"h4",children:"Heading 4"}),t.jsx(f,{value:"h5",children:"Heading 5"}),t.jsx(f,{value:"h6",children:"Heading 6"}),t.jsx(f,{value:"pre",children:"Preformatted"})]}),t.jsxs(k,{children:[t.jsx(l,{variant:"icon",size:"sm",onClick:()=>r("bold"),active:o.bold,title:"Bold",children:t.jsx(s,{name:"fa-solid fa-bold",size:"sm"})}),t.jsx(l,{variant:"icon",size:"sm",onClick:()=>r("italic"),active:o.italic,title:"Italic",children:t.jsx(s,{name:"fa-solid fa-italic",size:"sm"})}),t.jsx(l,{variant:"icon",size:"sm",onClick:()=>r("underline"),active:o.underline,title:"Underline",children:t.jsx(s,{name:"fa-solid fa-underline",size:"sm"})}),t.jsx(l,{variant:"icon",size:"sm",onClick:()=>r("strikeThrough"),active:o.strikeThrough,title:"Strikethrough",children:t.jsx(s,{name:"fa-solid fa-strikethrough",size:"sm"})}),t.jsx(l,{variant:"icon",size:"sm",onClick:()=>r("removeFormat"),title:"Clear Formatting",children:t.jsx(s,{name:"fa-solid fa-eraser",size:"sm"})})]}),t.jsx(k,{children:t.jsxs(G,{trigger:t.jsxs(l,{variant:"icon",size:"sm",active:o.alignLeft||o.alignCenter||o.alignRight||o.justify,title:"Alignment",children:[o.alignLeft&&t.jsx(s,{name:"fa-solid fa-align-left",size:"sm"}),o.alignCenter&&t.jsx(s,{name:"fa-solid fa-align-center",size:"sm"}),o.alignRight&&t.jsx(s,{name:"fa-solid fa-align-right",size:"sm"}),o.justify&&t.jsx(s,{name:"fa-solid fa-align-justify",size:"sm"}),!(o.alignLeft||o.alignCenter||o.alignRight||o.justify)&&t.jsx(s,{name:"fa-solid fa-align-left",size:"sm"})]}),children:[t.jsxs(w,{onClick:()=>r("justifyLeft"),children:[t.jsx(s,{name:"fa-solid fa-align-left",size:"sm"})," Align Left"]}),t.jsxs(w,{onClick:()=>r("justifyCenter"),children:[t.jsx(s,{name:"fa-solid fa-align-center",size:"sm"})," Align Center"]}),t.jsxs(w,{onClick:()=>r("justifyRight"),children:[t.jsx(s,{name:"fa-solid fa-align-right",size:"sm"})," Align Right"]}),t.jsxs(w,{onClick:()=>r("justifyFull"),children:[t.jsx(s,{name:"fa-solid fa-align-justify",size:"sm"})," Justify"]})]})}),t.jsxs(k,{children:[t.jsx(l,{variant:"icon",size:"sm",onClick:()=>r("insertUnorderedList"),active:o.bulletList,title:"Bullet List",children:t.jsx(s,{name:"fa-solid fa-list-ul",size:"sm"})}),t.jsx(l,{variant:"icon",size:"sm",onClick:()=>r("insertOrderedList"),active:o.orderedList,title:"Numbered List",children:t.jsx(s,{name:"fa-solid fa-list-ol",size:"sm"})}),t.jsx(l,{variant:"icon",size:"sm",onClick:()=>r("blockquote"),active:o.blockquote,title:"Blockquote",children:t.jsx(s,{name:"fa-solid fa-quote-right",size:"sm"})})]}),t.jsxs(k,{children:[t.jsx(l,{variant:"icon",size:"sm",onClick:()=>r("undo"),title:"Undo",children:t.jsx(s,{name:"fa-solid fa-undo",size:"sm"})}),t.jsx(l,{variant:"icon",size:"sm",onClick:()=>r("redo"),title:"Redo",children:t.jsx(s,{name:"fa-solid fa-redo",size:"sm"})})]}),t.jsxs(k,{children:[t.jsx(l,{variant:"icon",size:"sm",onClick:q,active:o.link,title:"Insert Link",children:t.jsx(s,{name:"fa-solid fa-link",size:"sm"})}),o.link&&t.jsx(l,{variant:"icon",size:"sm",onClick:U,title:"Remove Link",children:t.jsx(s,{name:"fa-solid fa-unlink",size:"sm"})})]})]}),L&&t.jsxs(A,{style:{padding:z.spacing.sm,borderBottom:`1px solid ${z.colors.border.default}`},children:[t.jsx(W,{value:y,onChange:i=>x(i.target.value),placeholder:"Enter URL",style:{flexGrow:1}}),t.jsx(l,{onClick:B,size:"sm",variant:"primary",children:"Insert"}),t.jsx(l,{onClick:F,size:"sm",variant:"ghost",children:"Cancel"})]}),t.jsx(D,{ref:n,contentEditable:!0,onInput:H,onBlur:I,onKeyUp:T,onMouseUp:T,"data-placeholder":e,suppressContentEditableWarning:!0})]})};J.__docgenInfo={description:"",methods:[],displayName:"WYSIWYGEditor",props:{placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text for the editor when it's empty.",defaultValue:{value:"'Start typing...'",computed:!1}},initialContent:{required:!1,tsType:{name:"string"},description:"Optional initial HTML content to load into the editor.",defaultValue:{value:"''",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles for the outer container."}}};export{J as W};
