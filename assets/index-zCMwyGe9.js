import{j as a,t as o}from"./iframe-DGiRyBXK.js";import{c as n}from"./emotion-styled-base.browser.esm-DOJJeMjc.js";const s=n("table",{target:"e17eec290"})("width:100%;border-collapse:collapse;font-family:",e=>e.theme.typography.fontFamily,";font-size:",e=>e.theme.typography.bodySmall.fontSize,";line-height:",e=>e.theme.typography.bodySmall.lineHeight,";color:",e=>e.theme.colors.text.default,";background-color:",e=>e.theme.colors.background.surface,";thead{th{text-align:left;padding:",e=>e.theme.spacing.md,";background-color:",e=>e.theme.colors.neutral[90],";color:",e=>e.theme.colors.text.default,";font-weight:",e=>e.theme.typography.button.fontWeight,";border-bottom:1px solid ",e=>e.theme.colors.border.strong,";}}tbody{tr{border-bottom:1px solid ",e=>e.theme.colors.border.default,";&:last-child{border-bottom:none;}}td{padding:",e=>e.theme.spacing.md,";}}",e=>e.striped&&`
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
  `,";"),d=({children:e,striped:t=!1,bordered:r=!1,...l})=>a.jsx("div",{style:{overflowX:"auto",borderRadius:o.borderRadius.md,boxShadow:o.shadows.sm},children:a.jsx(s,{striped:t,bordered:r,...l,children:e})}),i=({children:e,...t})=>a.jsx("thead",{...t,children:e}),c=({children:e,...t})=>a.jsx("tbody",{...t,children:e}),b=({children:e,...t})=>a.jsx("tr",{...t,children:e}),p=({children:e,...t})=>a.jsx("th",{...t,children:e}),h=({children:e,...t})=>a.jsx("td",{...t,children:e});d.__docgenInfo={description:`The **Table** component provides a structured and visually consistent way to display
tabular data within the AscendUCore Design System. It offers clear presentation of
rows and columns, with options for visual enhancements like striped rows and cell borders.
This component is built to ensure readability and maintain a cohesive design language
across all data-driven interfaces.

\`\`\`typescript
import { Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell } from "@activityeducation/component-library";
\`\`\`

## Justification
Tables are fundamental for organizing and presenting complex datasets in a digestible
format. A dedicated \`Table\` component ensures that all tabular data adheres to the
platform's design guidelines, providing a uniform user experience. It abstracts away
repetitive styling, allowing developers to focus on data logic rather than presentation.
The inclusion of \`striped\` and \`bordered\` variants offers flexibility to adapt the
table's visual density to different contexts, improving readability for various data types.
Wrapping the table in a responsive container also ensures usability across devices.

## Acceptance Criteria
- **GIVEN** the \`Table\` component is rendered, **THEN** its content should be
displayed in a standard tabular format with clear rows and columns.
- **GIVEN** the \`striped\` prop is true, **THEN** alternating rows should have
a distinct background color for improved readability.
- **GIVEN** the \`bordered\` prop is true, **THEN** all cells (\`<th>\` and \`<td>\`)
should have visible borders.
- **GIVEN** a long table content, **THEN** the table should be horizontally scrollable
within its container to prevent overflow on smaller screens.
- **GIVEN** the table has a header, **THEN** header cells should be clearly
distinguishable (e.g., with a different background and bold text).

## Example & Props`,methods:[],displayName:"Table",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be rendered inside the table. Typically `<thead>` and `<tbody>` elements."},striped:{required:!1,tsType:{name:"boolean"},description:`If true, applies alternating background colors to table rows for better readability.
@default false`,defaultValue:{value:"false",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:`If true, applies borders to all cells.
@default false`,defaultValue:{value:"false",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};i.__docgenInfo={description:"",methods:[],displayName:"TableHead"};c.__docgenInfo={description:"",methods:[],displayName:"TableBody"};b.__docgenInfo={description:"",methods:[],displayName:"TableRow"};p.__docgenInfo={description:"",methods:[],displayName:"TableHeaderCell"};h.__docgenInfo={description:"",methods:[],displayName:"TableCell"};export{d as T,i as a,b,p as c,c as d,h as e};
