import{j as r,T as l,t as i}from"./iframe-DGiRyBXK.js";import{a as n}from"./index-CRhs7CeE.js";import"./emotion-styled-base.browser.esm-DOJJeMjc.js";import"./index-BpikmOZ9.js";import"./index-CAB9-Wky.js";import"./emotion-react.browser.esm-CRTluIfQ.js";import"./index-Cln6lCsR.js";import"./index-yh91TgFT.js";import"./index-BlA4Rr_0.js";import"./index-HX1_eyUT.js";import"./index-0By1pHRY.js";import"./index-BTINV_SO.js";import"./index-D7KQwtYm.js";import"./index-C-mCeCnK.js";import"./index-BIXc_CGl.js";import"./index-CUVKRhQC.js";import"./index-CdcOTgf7.js";import"./index-CPWD-0I-.js";import"./index-VFDZBhwq.js";import"./index-BCgh6xOq.js";import"./index-gsnUIZpb.js";import"./index-zCMwyGe9.js";import"./index-BBibW3za.js";import"./index-Cyd7v3sM.js";import"./index-D5b8DDDm.js";import"./index-DgveVWDN.js";import"./index-BGyOAjEa.js";import"./index-Dyr7C3xX.js";import"./ObjectiveProgress-BhJ5qdat.js";import"./UpcomingDeadlines-DMSv60oA.js";const B={title:"Components/FlashcardModelEditor",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{initialModelData:{control:"object",description:"An existing edu:FlashcardModel object to pre-populate the editor."},onSave:{action:"saved",description:"Callback triggered when the save button is clicked."},readOnly:{control:"boolean",description:"Puts the editor in a read-only state."}},decorators:[e=>r.jsx(l,{theme:i,children:r.jsx("div",{style:{padding:i.spacing.xl,backgroundColor:i.colors.background.default},children:r.jsx(e,{})})})]},d={id:"model_1678886400000",name:"German Vocabulary Card",summary:"A simple card for learning German nouns with their articles.","edu:fields":[{id:"field_1",name:"German Term",type:"text"},{id:"field_2",name:"English Translation",type:"text"},{id:"field_3",name:"Example Image",type:"image"}],"edu:cardTemplates":[{id:"front",name:"Front",layout:[{fieldId:"field_1",x:50,y:150,width:200,height:60},{fieldId:"field_3",x:300,y:100,width:250,height:150}]},{id:"back",name:"Back",layout:[{fieldId:"field_2",x:50,y:150,width:200,height:60}]}]},o={args:{onSave:e=>console.log("Saved Model:",e)}},a={args:{initialModelData:d,onSave:e=>console.log("Saved Model:",e)}},t={args:{initialModelData:d,readOnly:!0,onSave:e=>console.log("Saved Model:",e)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
