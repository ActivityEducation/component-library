import{j as r,T as l,t as i}from"./iframe-RAegngwO.js";import{F as n}from"./index-DApN-VAz.js";import"./emotion-styled-base.browser.esm-DWA-sfXA.js";import"./index-DcOZjY6o.js";import"./index-BnQmYvSi.js";import"./emotion-react.browser.esm-zPk2XnfE.js";import"./index-NNVB_gfa.js";import"./index-DWXvOp7D.js";import"./index-GabRFj8p.js";import"./index-kdhhg-c0.js";import"./index-DuHLCdk5.js";import"./index-CXityV_I.js";import"./index-OwN0jeKn.js";import"./index-CPEYOHTN.js";import"./index-ClUEGz-i.js";import"./index-Y42uZfEs.js";import"./index-vkqWKmtU.js";import"./index-DZA0DCEN.js";import"./index-ChMzI1xi.js";import"./index-DkYDd8W1.js";import"./index-CG6TXRuF.js";import"./index-BZhcbk5r.js";import"./index-MIPEWIuK.js";import"./index-CgcAu24l.js";import"./index-ByT7Ll--.js";import"./index-y_v0PwZF.js";import"./index-D2JPx--b.js";import"./index-B25CsKYc.js";import"./ObjectiveProgress-B--CfOzz.js";import"./UpcomingDeadlines-DNp6DzMP.js";const B={title:"Components/FlashcardModelEditor",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{initialModelData:{control:"object",description:"An existing edu:FlashcardModel object to pre-populate the editor."},onSave:{action:"saved",description:"Callback triggered when the save button is clicked."},readOnly:{control:"boolean",description:"Puts the editor in a read-only state."}},decorators:[e=>r.jsx(l,{theme:i,children:r.jsx("div",{style:{padding:i.spacing.xl,backgroundColor:i.colors.background.default},children:r.jsx(e,{})})})]},d={id:"model_1678886400000",name:"German Vocabulary Card",summary:"A simple card for learning German nouns with their articles.","edu:fields":[{id:"field_1",name:"German Term",type:"text"},{id:"field_2",name:"English Translation",type:"text"},{id:"field_3",name:"Example Image",type:"image"}],"edu:cardTemplates":[{id:"front",name:"Front",layout:[{fieldId:"field_1",x:50,y:150,width:200,height:60},{fieldId:"field_3",x:300,y:100,width:250,height:150}]},{id:"back",name:"Back",layout:[{fieldId:"field_2",x:50,y:150,width:200,height:60}]}]},o={args:{onSave:e=>console.log("Saved Model:",e)}},a={args:{initialModelData:d,onSave:e=>console.log("Saved Model:",e)}},t={args:{initialModelData:d,readOnly:!0,onSave:e=>console.log("Saved Model:",e)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
