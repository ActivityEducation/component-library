import{j as e,t}from"./iframe-C9qpv1Bz.js";import{s as x}from"./emotion-styled.browser.esm-Car2homq.js";const g=x.table`
  // Base styles for the table
  width: 100%;
  border-collapse: collapse; // Collapse borders for a clean look
  font-family: ${l=>l.theme.typography.fontFamily};
  font-size: ${l=>l.theme.typography.bodySmall.fontSize};
  line-height: ${l=>l.theme.typography.bodySmall.lineHeight};
  color: ${l=>l.theme.colors.text.default};
  background-color: ${l=>l.theme.colors.background.surface}; // Table background

  // Header row styling
  thead {
    th {
      text-align: left;
      padding: ${l=>l.theme.spacing.md};
      background-color: ${l=>l.theme.colors.neutral[90]}; // Header background color
      color: ${l=>l.theme.colors.text.light}; // Light text on dark header
      font-weight: ${l=>l.theme.typography.button.fontWeight}; // Bolder font for headers
      border-bottom: 1px solid ${l=>l.theme.colors.border.strong};
    }
  }

  // Body row and cell styling
  tbody {
    tr {
      border-bottom: 1px solid ${l=>l.theme.colors.border.default}; // Separator between rows
      &:last-child {
        border-bottom: none; // No border after the last row
      }
    }

    td {
      padding: ${l=>l.theme.spacing.md};
    }
  }

  // Striped rows variant
  ${l=>l.striped&&`
    tbody tr:nth-of-type(odd) {
      background-color: ${l.theme.colors.neutral[95]}; // Lighter background for odd rows
    }
  `}

  // Bordered cells variant
  ${l=>l.bordered&&`
    th, td {
      border: 1px solid ${l.theme.colors.border.default}; // All cells have borders
    }
    thead th {
      border-top: 1px solid ${l.theme.colors.border.default};
    }
  `}
`,p=({children:l,striped:s=!1,bordered:C=!1,...m})=>e.jsx("div",{style:{overflowX:"auto",borderRadius:t.borderRadius.md,boxShadow:t.shadows.sm},children:e.jsx(g,{striped:s,bordered:C,...m,children:l})}),n=({children:l,...s})=>e.jsx("thead",{...s,children:l}),d=({children:l,...s})=>e.jsx("tbody",{...s,children:l}),o=({children:l,...s})=>e.jsx("tr",{...s,children:l}),r=({children:l,...s})=>e.jsx("th",{...s,children:l}),a=({children:l,...s})=>e.jsx("td",{...s,children:l});p.__docgenInfo={description:`A component for displaying tabular data in the AscendUCore Design System.
It provides consistent styling for tables, including optional striped rows and cell borders.
It's recommended to wrap the Table in a container with \`overflow-x: auto\` for responsiveness
on smaller screens if the content is wide.`,methods:[],displayName:"Table",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be rendered inside the table. Typically `<thead>` and `<tbody>` elements."},striped:{required:!1,tsType:{name:"boolean"},description:`If true, applies alternating background colors to table rows for better readability.
@default false`,defaultValue:{value:"false",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:`If true, applies borders to all cells.
@default false`,defaultValue:{value:"false",computed:!1}},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};n.__docgenInfo={description:"",methods:[],displayName:"TableHead"};d.__docgenInfo={description:"",methods:[],displayName:"TableBody"};o.__docgenInfo={description:"",methods:[],displayName:"TableRow"};r.__docgenInfo={description:"",methods:[],displayName:"TableHeaderCell"};a.__docgenInfo={description:"",methods:[],displayName:"TableCell"};const u=[{id:1,course:"ActivityPub Basics",instructor:"Alice Smith",progress:"75%",status:"In Progress"},{id:2,course:"Decentralized Identity",instructor:"Bob Johnson",progress:"100%",status:"Completed"},{id:3,course:"Federated Learning",instructor:"Charlie Brown",progress:"20%",status:"Not Started"},{id:4,course:"Web3 & Education",instructor:"Diana Prince",progress:"50%",status:"In Progress"}],f={title:"Components/Table",component:p,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{children:{control:!1},striped:{control:"boolean",description:"If true, applies alternating background colors to table rows.",defaultValue:!1},bordered:{control:"boolean",description:"If true, applies borders to all cells.",defaultValue:!1}},decorators:[l=>e.jsx("div",{style:{padding:t.spacing.xl,backgroundColor:t.colors.neutral[95],width:"100%"},children:e.jsx(l,{})})]},i={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsxs(o,{children:[e.jsx(r,{children:"ID"}),e.jsx(r,{children:"Course Title"}),e.jsx(r,{children:"Instructor"}),e.jsx(r,{children:"Progress"}),e.jsx(r,{children:"Status"})]})}),e.jsx(d,{children:u.map(l=>e.jsxs(o,{children:[e.jsx(a,{children:l.id}),e.jsx(a,{children:l.course}),e.jsx(a,{children:l.instructor}),e.jsx(a,{children:l.progress}),e.jsx(a,{children:l.status})]},l.id))})]})}},c={args:{striped:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsxs(o,{children:[e.jsx(r,{children:"ID"}),e.jsx(r,{children:"Course Title"}),e.jsx(r,{children:"Instructor"}),e.jsx(r,{children:"Progress"}),e.jsx(r,{children:"Status"})]})}),e.jsx(d,{children:u.map(l=>e.jsxs(o,{children:[e.jsx(a,{children:l.id}),e.jsx(a,{children:l.course}),e.jsx(a,{children:l.instructor}),e.jsx(a,{children:l.progress}),e.jsx(a,{children:l.status})]},l.id))})]})}},b={args:{bordered:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsxs(o,{children:[e.jsx(r,{children:"ID"}),e.jsx(r,{children:"Course Title"}),e.jsx(r,{children:"Instructor"}),e.jsx(r,{children:"Progress"}),e.jsx(r,{children:"Status"})]})}),e.jsx(d,{children:u.map(l=>e.jsxs(o,{children:[e.jsx(a,{children:l.id}),e.jsx(a,{children:l.course}),e.jsx(a,{children:l.instructor}),e.jsx(a,{children:l.progress}),e.jsx(a,{children:l.status})]},l.id))})]})}},T={args:{striped:!0,bordered:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsxs(o,{children:[e.jsx(r,{children:"ID"}),e.jsx(r,{children:"Course Title"}),e.jsx(r,{children:"Instructor"}),e.jsx(r,{children:"Progress"}),e.jsx(r,{children:"Status"})]})}),e.jsx(d,{children:u.map(l=>e.jsxs(o,{children:[e.jsx(a,{children:l.id}),e.jsx(a,{children:l.course}),e.jsx(a,{children:l.instructor}),e.jsx(a,{children:l.progress}),e.jsx(a,{children:l.status})]},l.id))})]})}},h={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsxs(o,{children:[e.jsx(r,{children:"ID"}),e.jsx(r,{children:"Course Title"}),e.jsx(r,{children:"Instructor"})]})}),e.jsx(d,{children:e.jsx(o,{children:e.jsx(a,{colSpan:3,style:{textAlign:"center",padding:t.spacing.xl,color:t.colors.neutral[60]},children:"No data available."})})})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <TableHead>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Course Title</TableHeaderCell>
            <TableHeaderCell>Instructor</TableHeaderCell>
            <TableHeaderCell>Progress</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sampleData.map(row => <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.course}</TableCell>
              <TableCell>{row.instructor}</TableCell>
              <TableCell>{row.progress}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>)}
        </TableBody>
      </>
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    striped: true,
    children: <>
        <TableHead>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Course Title</TableHeaderCell>
            <TableHeaderCell>Instructor</TableHeaderCell>
            <TableHeaderCell>Progress</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sampleData.map(row => <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.course}</TableCell>
              <TableCell>{row.instructor}</TableCell>
              <TableCell>{row.progress}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>)}
        </TableBody>
      </>
  }
}`,...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: true,
    children: <>
        <TableHead>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Course Title</TableHeaderCell>
            <TableHeaderCell>Instructor</TableHeaderCell>
            <TableHeaderCell>Progress</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sampleData.map(row => <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.course}</TableCell>
              <TableCell>{row.instructor}</TableCell>
              <TableCell>{row.progress}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>)}
        </TableBody>
      </>
  }
}`,...b.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    striped: true,
    bordered: true,
    children: <>
        <TableHead>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Course Title</TableHeaderCell>
            <TableHeaderCell>Instructor</TableHeaderCell>
            <TableHeaderCell>Progress</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sampleData.map(row => <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.course}</TableCell>
              <TableCell>{row.instructor}</TableCell>
              <TableCell>{row.progress}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>)}
        </TableBody>
      </>
  }
}`,...T.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <TableHead>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Course Title</TableHeaderCell>
            <TableHeaderCell>Instructor</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell colSpan={3} style={{
            textAlign: 'center',
            padding: theme.spacing.xl,
            color: theme.colors.neutral['60']
          }}>
              No data available.
            </TableCell>
          </TableRow>
        </TableBody>
      </>
  }
}`,...h.parameters?.docs?.source}}};const H=["Default","Striped","Bordered","StripedAndBordered","EmptyState"];export{b as Bordered,i as Default,h as EmptyState,c as Striped,T as StripedAndBordered,H as __namedExportsOrder,f as default};
