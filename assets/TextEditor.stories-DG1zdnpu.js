import{j as i,T as l,t as s}from"./iframe-DGiRyBXK.js";import{W as n}from"./index-D5b8DDDm.js";import"./emotion-styled-base.browser.esm-DOJJeMjc.js";import"./index-BBibW3za.js";import"./emotion-react.browser.esm-CRTluIfQ.js";import"./index-CAB9-Wky.js";import"./index-Cln6lCsR.js";import"./index-BTINV_SO.js";import"./index-CdcOTgf7.js";import"./index-C-mCeCnK.js";const f={title:"Components/WYSIWYGEditor",component:n,tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text for the editor when it is empty."},initialContent:{control:"text",description:"Optional initial HTML content to load into the editor."}},decorators:[a=>i.jsx(l,{theme:s,children:i.jsx("div",{style:{padding:s.spacing.xl,backgroundColor:s.colors.background.default},children:i.jsx(a,{})})})]},e={args:{placeholder:"Start writing your story here..."}},t={args:{placeholder:"Start writing your story here...",initialContent:`
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
        `}},r={args:{placeholder:"Enter your assignment details..."}},o={args:{placeholder:"Editor is disabled."},render:a=>i.jsx(n,{...a,style:{opacity:.7,pointerEvents:"none"}})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Start writing your story here...'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your assignment details...'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const S=["Default","WithInitialContent","WithCustomPlaceholder","Disabled"];export{e as Default,o as Disabled,r as WithCustomPlaceholder,t as WithInitialContent,S as __namedExportsOrder,f as default};
