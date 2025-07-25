import{r as a,j as t,t as b,T as D}from"./iframe-C9qpv1Bz.js";import{s as H}from"./emotion-styled.browser.esm-Car2homq.js";import{a as k,T as M}from"./index-7Gnbtw8s.js";import{B as l}from"./index-BM5aybXr.js";import{I as V}from"./index-Cw45dz9f.js";import{S as J,O as p}from"./index-hgF3WJnx.js";import{I as s}from"./index-8ndG3XIt.js";import{M as K,a as S}from"./index-Jgu98Y54.js";import"./emotion-react.browser.esm-Dy7Q9i4V.js";const u=e=>{if(typeof window>"u"||!window.getSelection)return!1;try{return document.queryCommandState(e)}catch{return!1}},Q=e=>{if(typeof window>"u"||!window.getSelection||!e)return"p";const m=window.getSelection();if(!m||m.rangeCount===0)return"p";let h=m.getRangeAt(0).commonAncestorContainer;for(;h&&h!==e;){if(h.nodeType===Node.ELEMENT_NODE){const n=h.tagName.toLowerCase();if(["p","h1","h2","h3","h4","h5","h6","ul","ol","li","div","pre"].includes(n))return n}h=h.parentNode}return"p"},X=H.div`
  border: 1px solid ${e=>e.theme.colors.border.default};
  border-radius: ${e=>e.theme.borderRadius.md};
  overflow: hidden; /* Ensures dropdowns/toolbars are contained */
  background-color: ${e=>e.theme.colors.background.surface};
  font-family: ${e=>e.theme.typography.fontFamily};
  color: ${e=>e.theme.colors.text.default};
  display: flex;
  flex-direction: column;
`,Z=H(M)`
  border-bottom: 1px solid ${e=>e.theme.colors.border.default};
  border-bottom-left-radius: ${e=>e.theme.borderRadius.none};
  border-bottom-right-radius: ${e=>e.theme.borderRadius.none};
  padding: ${e=>e.theme.spacing.sm};
  flex-wrap: wrap; /* Allow toolbar items to wrap */
`,ee=H.div`
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
`,I=({placeholder:e="Start typing...",initialContent:m="",...h})=>{const n=a.useRef(null),[r,q]=a.useState({bold:!1,italic:!1,underline:!1,strikeThrough:!1,link:!1,alignLeft:!1,alignCenter:!1,alignRight:!1,justify:!1,blockquote:!1,bulletList:!1,orderedList:!1}),[W,B]=a.useState("p"),[R,y]=a.useState(!1),[C,x]=a.useState(""),E=a.useRef(null),j=a.useCallback(()=>{window.getSelection&&(window.getSelection()?.rangeCount??0)>0&&(E.current=window.getSelection()?.getRangeAt(0)??null)},[]),w=a.useCallback(()=>{if(E.current&&n.current){const i=window.getSelection();i&&(i.removeAllRanges(),i.addRange(E.current),n.current.focus())}},[]),g=a.useCallback(()=>{if(typeof window>"u"||!window.getSelection)return;const i=window.getSelection();if(!i||i.rangeCount===0)return;const c={bold:u("bold"),italic:u("italic"),underline:u("underline"),strikeThrough:u("strikeThrough"),link:u("createLink"),alignLeft:u("justifyLeft"),alignCenter:u("justifyCenter"),alignRight:u("justifyRight"),justify:u("justifyFull"),blockquote:u("blockquote"),bulletList:u("insertUnorderedList"),orderedList:u("insertOrderedList")};q(c),B(Q(n.current))},[]),o=a.useCallback((i,c=void 0)=>{if(w(),document.queryCommandSupported(i)){if(i==="formatBlock"&&n.current){const d=window.getSelection();if(d&&d.rangeCount>0){const _=d.getRangeAt(0);let A=null,f=_.commonAncestorContainer;for(;f&&f!==n.current;){if(f.nodeType===Node.ELEMENT_NODE){const v=f.tagName.toLowerCase();if(["p","h1","h2","h3","h4","h5","h6","ul","ol","li","div","pre"].includes(v)){A=f;break}}f=f.parentNode}if(A){const v=document.createRange();v.selectNodeContents(A),d.removeAllRanges(),d.addRange(v)}else d.isCollapsed&&n.current.innerText.trim()===""&&n.current.focus()}}document.execCommand(i,!1,c),setTimeout(()=>{g()},0)}},[w,g]),Y=a.useCallback(()=>{if(n.current){if(n.current.innerHTML.trim()===""&&!R){if(n.current.innerHTML===""){n.current.innerHTML="<br>";const i=document.createRange(),c=window.getSelection();n.current.firstChild&&(i.selectNodeContents(n.current.firstChild),i.collapse(!0),c?.removeAllRanges(),c?.addRange(i))}}else if(n.current.innerHTML==="<br>"&&n.current.innerText.trim()!=="")n.current.innerHTML=n.current.innerText;else if(n.current.innerHTML.trim()!==""&&n.current.querySelector("p, h1, h2, h3, h4, h5, h6, ul, ol, pre")===null){const i=n.current.innerText.trim();if(i!==""){n.current.innerHTML=`<p>${i}</p>`;const c=document.createRange();c.selectNodeContents(n.current.firstChild),c.collapse(!1);const d=window.getSelection();d?.removeAllRanges(),d?.addRange(c)}}}g()},[g,R]),N=a.useCallback(()=>{j(),g()},[j,g]),F=a.useCallback(()=>{j(),n.current&&n.current.innerHTML.trim()==="<br>"&&(n.current.innerHTML="")},[j]);a.useEffect(()=>{if(n.current){if(m){n.current.innerHTML=m;const i=document.createRange(),c=window.getSelection();i.selectNodeContents(n.current),i.collapse(!1),c?.removeAllRanges(),c?.addRange(i)}else n.current.innerHTML="";g()}},[m,g]);const O=a.useCallback(()=>{if(r.link)y(!1),x(""),o("unlink");else{w(),y(!0);const i=window.getSelection();if(i&&i.rangeCount>0){const d=i.getRangeAt(0).startContainer.parentElement?.closest("a");d&&x(d.href)}}},[r.link,o,w]),U=a.useCallback(()=>{C.trim()&&(o("createLink",C),y(!1),x(""))},[C,o]),G=a.useCallback(()=>{y(!1),x("")},[]),P=a.useCallback(()=>{o("unlink"),y(!1),x("")},[o]);return t.jsxs(X,{style:h.style,children:[t.jsxs(Z,{children:[t.jsxs(J,{value:W,onValueChange:i=>o("formatBlock",i),placeholder:"Format",style:{minWidth:"150px",marginRight:b.spacing.md},children:[t.jsx(p,{value:"p",children:"Paragraph"}),t.jsx(p,{value:"h1",children:"Heading 1"}),t.jsx(p,{value:"h2",children:"Heading 2"}),t.jsx(p,{value:"h3",children:"Heading 3"}),t.jsx(p,{value:"h4",children:"Heading 4"}),t.jsx(p,{value:"h5",children:"Heading 5"}),t.jsx(p,{value:"h6",children:"Heading 6"}),t.jsx(p,{value:"pre",children:"Preformatted"})]}),t.jsxs(k,{children:[t.jsx(l,{variant:"icon",size:"sm",onClick:()=>o("bold"),active:r.bold,title:"Bold",children:t.jsx(s,{name:"fa-solid fa-bold",size:"sm"})}),t.jsx(l,{variant:"icon",size:"sm",onClick:()=>o("italic"),active:r.italic,title:"Italic",children:t.jsx(s,{name:"fa-solid fa-italic",size:"sm"})}),t.jsx(l,{variant:"icon",size:"sm",onClick:()=>o("underline"),active:r.underline,title:"Underline",children:t.jsx(s,{name:"fa-solid fa-underline",size:"sm"})}),t.jsx(l,{variant:"icon",size:"sm",onClick:()=>o("strikeThrough"),active:r.strikeThrough,title:"Strikethrough",children:t.jsx(s,{name:"fa-solid fa-strikethrough",size:"sm"})}),t.jsx(l,{variant:"icon",size:"sm",onClick:()=>o("removeFormat"),title:"Clear Formatting",children:t.jsx(s,{name:"fa-solid fa-eraser",size:"sm"})})]}),t.jsx(k,{children:t.jsxs(K,{trigger:t.jsxs(l,{variant:"icon",size:"sm",active:r.alignLeft||r.alignCenter||r.alignRight||r.justify,title:"Alignment",children:[r.alignLeft&&t.jsx(s,{name:"fa-solid fa-align-left",size:"sm"}),r.alignCenter&&t.jsx(s,{name:"fa-solid fa-align-center",size:"sm"}),r.alignRight&&t.jsx(s,{name:"fa-solid fa-align-right",size:"sm"}),r.justify&&t.jsx(s,{name:"fa-solid fa-align-justify",size:"sm"}),!(r.alignLeft||r.alignCenter||r.alignRight||r.justify)&&t.jsx(s,{name:"fa-solid fa-align-left",size:"sm"})]}),children:[t.jsxs(S,{onClick:()=>o("justifyLeft"),children:[t.jsx(s,{name:"fa-solid fa-align-left",size:"sm"})," Align Left"]}),t.jsxs(S,{onClick:()=>o("justifyCenter"),children:[t.jsx(s,{name:"fa-solid fa-align-center",size:"sm"})," Align Center"]}),t.jsxs(S,{onClick:()=>o("justifyRight"),children:[t.jsx(s,{name:"fa-solid fa-align-right",size:"sm"})," Align Right"]}),t.jsxs(S,{onClick:()=>o("justifyFull"),children:[t.jsx(s,{name:"fa-solid fa-align-justify",size:"sm"})," Justify"]})]})}),t.jsxs(k,{children:[t.jsx(l,{variant:"icon",size:"sm",onClick:()=>o("insertUnorderedList"),active:r.bulletList,title:"Bullet List",children:t.jsx(s,{name:"fa-solid fa-list-ul",size:"sm"})}),t.jsx(l,{variant:"icon",size:"sm",onClick:()=>o("insertOrderedList"),active:r.orderedList,title:"Numbered List",children:t.jsx(s,{name:"fa-solid fa-list-ol",size:"sm"})}),t.jsx(l,{variant:"icon",size:"sm",onClick:()=>o("blockquote"),active:r.blockquote,title:"Blockquote",children:t.jsx(s,{name:"fa-solid fa-quote-right",size:"sm"})})]}),t.jsxs(k,{children:[t.jsx(l,{variant:"icon",size:"sm",onClick:()=>o("undo"),title:"Undo",children:t.jsx(s,{name:"fa-solid fa-undo",size:"sm"})}),t.jsx(l,{variant:"icon",size:"sm",onClick:()=>o("redo"),title:"Redo",children:t.jsx(s,{name:"fa-solid fa-redo",size:"sm"})})]}),t.jsxs(k,{children:[t.jsx(l,{variant:"icon",size:"sm",onClick:O,active:r.link,title:"Insert Link",children:t.jsx(s,{name:"fa-solid fa-link",size:"sm"})}),r.link&&t.jsx(l,{variant:"icon",size:"sm",onClick:P,title:"Remove Link",children:t.jsx(s,{name:"fa-solid fa-unlink",size:"sm"})})]})]}),R&&t.jsxs(M,{style:{padding:b.spacing.sm,borderBottom:`1px solid ${b.colors.border.default}`},children:[t.jsx(V,{value:C,onChange:i=>x(i.target.value),placeholder:"Enter URL",style:{flexGrow:1}}),t.jsx(l,{onClick:U,size:"sm",variant:"primary",children:"Insert"}),t.jsx(l,{onClick:G,size:"sm",variant:"ghost",children:"Cancel"})]}),t.jsx(ee,{ref:n,contentEditable:!0,onInput:Y,onBlur:F,onKeyUp:N,onMouseUp:N,"data-placeholder":e,suppressContentEditableWarning:!0})]})};I.__docgenInfo={description:"",methods:[],displayName:"WYSIWYGEditor",props:{placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text for the editor when it's empty.",defaultValue:{value:"'Start typing...'",computed:!1}},initialContent:{required:!1,tsType:{name:"string"},description:"Optional initial HTML content to load into the editor.",defaultValue:{value:"''",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles for the outer container."}}};const de={title:"Components/WYSIWYGEditor",component:I,tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text for the editor when it is empty."},initialContent:{control:"text",description:"Optional initial HTML content to load into the editor."}},decorators:[e=>t.jsx(D,{theme:b,children:t.jsx("div",{style:{padding:b.spacing.xl,backgroundColor:b.colors.background.default},children:t.jsx(e,{})})})]},L={args:{placeholder:"Start writing your story here..."}},T={args:{placeholder:"Start writing your story here...",initialContent:`
          <h1>Welcome to Your Story</h1>
          <p>This is a paragraph with <strong>bold</strong>, <em>italic</em>, and <u>underlined</u> text.</p>
          <h2>A Subheading</h2>
          <p>Here's another paragraph. You can try changing its format using the dropdown.</p>
          <ul>
            <li>Bullet list item 1</li>
            <li>Bullet list item 2</li>
          </ul>
          <ol>
            <li>Numbered list item 1</li>
            <li>Numbered list item 2</li>
          </ol>
          <blockquote>This is a blockquote. It's often used for citations or emphasized text.</blockquote>
          <p>You can also insert <a href="https://example.com" target="_blank" rel="noopener noreferrer">links</a>.</p>
          <p style="text-align: center;">This line is centered.</p>
          <p style="text-align: right;">This line is right-aligned.</p>
          <pre><code>function greet() {
  console.log('Hello, WYSIWYG!');
}</code></pre>
        `}},$={args:{placeholder:"Enter your assignment details..."}},z={args:{placeholder:"Editor is disabled."},render:e=>t.jsx(I,{...e,style:{opacity:.7,pointerEvents:"none"}})};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Start writing your story here...'
  }
}`,...L.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Start writing your story here...',
    initialContent: \`
          <h1>Welcome to Your Story</h1>
          <p>This is a paragraph with <strong>bold</strong>, <em>italic</em>, and <u>underlined</u> text.</p>
          <h2>A Subheading</h2>
          <p>Here's another paragraph. You can try changing its format using the dropdown.</p>
          <ul>
            <li>Bullet list item 1</li>
            <li>Bullet list item 2</li>
          </ul>
          <ol>
            <li>Numbered list item 1</li>
            <li>Numbered list item 2</li>
          </ol>
          <blockquote>This is a blockquote. It's often used for citations or emphasized text.</blockquote>
          <p>You can also insert <a href="https://example.com" target="_blank" rel="noopener noreferrer">links</a>.</p>
          <p style="text-align: center;">This line is centered.</p>
          <p style="text-align: right;">This line is right-aligned.</p>
          <pre><code>function greet() {
  console.log('Hello, WYSIWYG!');
}</code></pre>
        \`
  }
}`,...T.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your assignment details...'
  }
}`,...$.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Editor is disabled.'
  },
  render: args => {
    return <WYSIWYGEditor {...args}
    // To truly disable, you'd make contentEditable false and disable all buttons
    // For demonstration, we'll just show the placeholder with a hint.
    style={{
      opacity: 0.7,
      pointerEvents: 'none'
    }} />;
  }
}`,...z.parameters?.docs?.source}}};const ue=["Default","WithInitialContent","WithCustomPlaceholder","Disabled"];export{L as Default,z as Disabled,$ as WithCustomPlaceholder,T as WithInitialContent,ue as __namedExportsOrder,de as default};
