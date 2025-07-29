import{j as r,T as l,t as i}from"./iframe-CGsrx03R.js";import{F as n}from"./index-CBf6p50H.js";import"./emotion-styled-base.browser.esm-BC397mIf.js";import"./index-DGGXf3yE.js";import"./index-BprbcPJ4.js";import"./emotion-react.browser.esm-BJCtjihh.js";import"./index-DkVkd4wc.js";import"./index-CXpqd7mF.js";import"./index-uh6WqY2J.js";import"./index-CSqS4LGU.js";import"./index-CRc0bwpc.js";import"./index-Bzuh_yUB.js";import"./index-BGf0H-iM.js";import"./index-bulm4LNr.js";import"./index-BBXxrp55.js";import"./index-CjRWm0I6.js";import"./index-eRrpSMwI.js";import"./index-C9K3cZrX.js";import"./index-CgyzgMKf.js";import"./index-BSOYCvqO.js";import"./index-DVPYHcdf.js";import"./index-a0LAwP9U.js";import"./index-Vkrdh3Ik.js";import"./index-BUTFQX3f.js";import"./index-DdvfSKGW.js";import"./index-Dvw5kTVG.js";import"./index-BULgzwlN.js";import"./index-S5bWdBRA.js";import"./ObjectiveProgress-Cawm-5jl.js";import"./UpcomingDeadlines-BgQUMTN8.js";const B={title:"Components/FlashcardModelEditor",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{initialModelData:{control:"object",description:"An existing edu:FlashcardModel object to pre-populate the editor."},onSave:{action:"saved",description:"Callback triggered when the save button is clicked."},readOnly:{control:"boolean",description:"Puts the editor in a read-only state."}},decorators:[e=>r.jsx(l,{theme:i,children:r.jsx("div",{style:{padding:i.spacing.xl,backgroundColor:i.colors.background.default},children:r.jsx(e,{})})})]},d={id:"model_1678886400000",name:"German Vocabulary Card",summary:"A simple card for learning German nouns with their articles.","edu:fields":[{id:"field_1",name:"German Term",type:"text"},{id:"field_2",name:"English Translation",type:"text"},{id:"field_3",name:"Example Image",type:"image"}],"edu:cardTemplates":[{id:"front",name:"Front",layout:[{fieldId:"field_1",x:50,y:150,width:200,height:60},{fieldId:"field_3",x:300,y:100,width:250,height:150}]},{id:"back",name:"Back",layout:[{fieldId:"field_2",x:50,y:150,width:200,height:60}]}]},o={args:{onSave:e=>console.log("Saved Model:",e)}},a={args:{initialModelData:d,onSave:e=>console.log("Saved Model:",e)}},t={args:{initialModelData:d,readOnly:!0,onSave:e=>console.log("Saved Model:",e)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
