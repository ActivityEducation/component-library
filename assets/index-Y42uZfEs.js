import{e as m,j as o}from"./iframe-RAegngwO.js";import{c as r}from"./emotion-styled-base.browser.esm-DWA-sfXA.js";const h=r("label",{target:"e1s1cj312"})("display:inline-flex;align-items:center;cursor:pointer;user-select:none;font-family:",e=>e.theme.typography.fontFamily,";font-size:",e=>e.theme.typography.body.fontSize,";color:",e=>e.theme.colors.text.default,";&:hover .radio-indicator{border-color:",e=>e.theme.colors.primary[50],";}&:focus-within .radio-indicator{outline:2px solid ",e=>e.theme.colors.primary[60],";outline-offset:2px;}&.disabled{cursor:not-allowed;opacity:0.6;color:",e=>e.theme.colors.neutral[50],";}"),u=r("input",{target:"e1s1cj311"})({name:"2cco40",styles:"position:absolute;opacity:0;width:0;height:0;pointer-events:none"}),p=r("div",{target:"e1s1cj310"})("width:20px;height:20px;border:2px solid ",e=>e.theme.colors.border.default,";border-radius:",e=>e.theme.borderRadius.full,";display:flex;align-items:center;justify-content:center;margin-right:",e=>e.theme.spacing.sm,";transition:",e=>e.theme.transitions.fast,";flex-shrink:0;background-color:",e=>e.theme.colors.background.surface,";",e=>e.checked&&`
      background-color: ${e.theme.colors.primary[40]};
      border-color: ${e.theme.colors.primary[40]};
      // Inner circle indicator
      &::after {
        content: '';
        width: 10px;
        height: 10px;
        border-radius: ${e.theme.borderRadius.full};
        background-color: ${e.theme.colors.text.onPrimary}; // White dot
        transition: ${e.theme.transitions.fast};
      }
    `,e=>e.disabled&&`
      background-color: ${e.theme.colors.neutral[90]};
      border-color: ${e.theme.colors.neutral[70]};
      cursor: not-allowed;
      &::after {
        background-color: ${e.theme.colors.neutral[50]}; // Dim inner dot
      }
    `,";"),f=({label:e,checked:i,disabled:t,onChange:s,id:n,name:c,value:d,...l})=>{const a=n||m.useId();return o.jsxs(h,{className:t?"disabled":"",htmlFor:a,children:[o.jsx(u,{type:"radio",id:a,name:c,value:d,checked:i,disabled:t,onChange:s,...l}),o.jsx(p,{checked:i,disabled:t,className:"radio-indicator"}),e&&o.jsx("span",{children:e})]})};f.__docgenInfo={description:"A Radio component for the AscendUCore Design System.\nAllows users to select a single option from a set. Supports checked and disabled states.\nIt should typically be used within a `RadioGroup` for proper functionality and accessibility.",methods:[],displayName:"Radio",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The label associated with the radio button."},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};export{f as R};
