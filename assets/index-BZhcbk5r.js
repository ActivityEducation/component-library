import{j as t,t as a}from"./iframe-RAegngwO.js";import{c as r}from"./emotion-styled-base.browser.esm-DWA-sfXA.js";const s=r("table",{target:"e17eec290"})("width:100%;border-collapse:collapse;font-family:",e=>e.theme.typography.fontFamily,";font-size:",e=>e.theme.typography.bodySmall.fontSize,";line-height:",e=>e.theme.typography.bodySmall.lineHeight,";color:",e=>e.theme.colors.text.default,";background-color:",e=>e.theme.colors.background.surface,";thead{th{text-align:left;padding:",e=>e.theme.spacing.md,";background-color:",e=>e.theme.colors.neutral[90],";color:",e=>e.theme.colors.text.default,";font-weight:",e=>e.theme.typography.button.fontWeight,";border-bottom:1px solid ",e=>e.theme.colors.border.strong,";}}tbody{tr{border-bottom:1px solid ",e=>e.theme.colors.border.default,";&:last-child{border-bottom:none;}}td{padding:",e=>e.theme.spacing.md,";}}",e=>e.striped&&`
    tbody tr:nth-of-type(odd) {
      background-color: ${e.theme.colors.neutral[95]}; // Lighter background for odd rows
    }
  `,e=>e.bordered&&`
    th, td {
      border: 1px solid ${e.theme.colors.border.default}; // All cells have borders
    }
    thead th {
      border-top: 1px solid ${e.theme.colors.border.default};
    }
  `,";"),n=({children:e,striped:o=!1,bordered:d=!1,...l})=>t.jsx("div",{style:{overflowX:"auto",borderRadius:a.borderRadius.md,boxShadow:a.shadows.sm},children:t.jsx(s,{striped:o,bordered:d,...l,children:e})}),i=({children:e,...o})=>t.jsx("thead",{...o,children:e}),c=({children:e,...o})=>t.jsx("tbody",{...o,children:e}),b=({children:e,...o})=>t.jsx("tr",{...o,children:e}),p=({children:e,...o})=>t.jsx("th",{...o,children:e}),m=({children:e,...o})=>t.jsx("td",{...o,children:e});n.__docgenInfo={description:`A component for displaying tabular data in the AscendUCore Design System.
It provides consistent styling for tables, including optional striped rows and cell borders.
It's recommended to wrap the Table in a container with \`overflow-x: auto\` for responsiveness
on smaller screens if the content is wide.`,methods:[],displayName:"Table",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be rendered inside the table. Typically `<thead>` and `<tbody>` elements."},striped:{required:!1,tsType:{name:"boolean"},description:`If true, applies alternating background colors to table rows for better readability.
@default false`,defaultValue:{value:"false",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:`If true, applies borders to all cells.
@default false`,defaultValue:{value:"false",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};i.__docgenInfo={description:"",methods:[],displayName:"TableHead"};c.__docgenInfo={description:"",methods:[],displayName:"TableBody"};b.__docgenInfo={description:"",methods:[],displayName:"TableRow"};p.__docgenInfo={description:"",methods:[],displayName:"TableHeaderCell"};m.__docgenInfo={description:"",methods:[],displayName:"TableCell"};export{n as T,i as a,b,p as c,c as d,m as e};
