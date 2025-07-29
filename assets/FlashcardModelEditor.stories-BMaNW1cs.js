import{j as r,T as l,t as i}from"./iframe-Ar-X8pQt.js";import{a as n}from"./index-DG6Loe3D.js";import"./emotion-styled-base.browser.esm-B8HPte8b.js";import"./index-Baa3c0Fm.js";import"./index-BSHTpJs8.js";import"./emotion-react.browser.esm-DbLFH1S2.js";import"./index-BwlLiWkr.js";import"./index-DZdvrq6_.js";import"./index-CvWfj89Q.js";import"./index-DokTa-H9.js";import"./index-DVGkWuR8.js";import"./index-DgZTqrqY.js";import"./index-KQnlWmIa.js";import"./index-KzwPCFbT.js";import"./index-BzI_E8QB.js";import"./index-3mBt0PIo.js";import"./index-Bm8rY8Ou.js";import"./index-BwciHENB.js";import"./index-DWsyDxQ4.js";import"./index-BU6KqAtY.js";import"./index-C4ZGTXxO.js";import"./index-D1xG6tFM.js";import"./index-w15-tIMF.js";import"./index-nkbhxHg5.js";import"./index-CFBQAgRo.js";import"./index-CIaXkleZ.js";import"./index-D6UsnYh7.js";import"./index-DzNu3gTP.js";import"./ObjectiveProgress-s2KhK5il.js";import"./UpcomingDeadlines-BK5OOyH5.js";const B={title:"Components/FlashcardModelEditor",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{initialModelData:{control:"object",description:"An existing edu:FlashcardModel object to pre-populate the editor."},onSave:{action:"saved",description:"Callback triggered when the save button is clicked."},readOnly:{control:"boolean",description:"Puts the editor in a read-only state."}},decorators:[e=>r.jsx(l,{theme:i,children:r.jsx("div",{style:{padding:i.spacing.xl,backgroundColor:i.colors.background.default},children:r.jsx(e,{})})})]},d={id:"model_1678886400000",name:"German Vocabulary Card",summary:"A simple card for learning German nouns with their articles.","edu:fields":[{id:"field_1",name:"German Term",type:"text"},{id:"field_2",name:"English Translation",type:"text"},{id:"field_3",name:"Example Image",type:"image"}],"edu:cardTemplates":[{id:"front",name:"Front",layout:[{fieldId:"field_1",x:50,y:150,width:200,height:60},{fieldId:"field_3",x:300,y:100,width:250,height:150}]},{id:"back",name:"Back",layout:[{fieldId:"field_2",x:50,y:150,width:200,height:60}]}]},o={args:{onSave:e=>console.log("Saved Model:",e)}},a={args:{initialModelData:d,onSave:e=>console.log("Saved Model:",e)}},t={args:{initialModelData:d,readOnly:!0,onSave:e=>console.log("Saved Model:",e)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    onSave: model => console.log('Saved Model:', model)
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    initialModelData: sampleModelData,
    onSave: model => console.log('Saved Model:', model)
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    initialModelData: sampleModelData,
    readOnly: true,
    onSave: model => console.log('Saved Model:', model)
  }
}`,...t.parameters?.docs?.source}}};const V=["Default","WithInitialData","ReadOnly"];export{o as Default,t as ReadOnly,a as WithInitialData,V as __namedExportsOrder,B as default};
