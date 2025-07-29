import{j as e,t as T}from"./iframe-Ar-X8pQt.js";import{T as C,a as n,b as s,c as r,d,e as a}from"./index-D1xG6tFM.js";import"./emotion-styled-base.browser.esm-B8HPte8b.js";const u=[{id:1,course:"ActivityPub Basics",instructor:"Alice Smith",progress:"75%",status:"In Progress"},{id:2,course:"Decentralized Identity",instructor:"Bob Johnson",progress:"100%",status:"Completed"},{id:3,course:"Federated Learning",instructor:"Charlie Brown",progress:"20%",status:"Not Started"},{id:4,course:"Web3 & Education",instructor:"Diana Prince",progress:"50%",status:"In Progress"}],j={title:"Components/Table",component:C,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{children:{control:!1},striped:{control:"boolean",description:"If true, applies alternating background colors to table rows.",defaultValue:!1},bordered:{control:"boolean",description:"If true, applies borders to all cells.",defaultValue:!1}},decorators:[l=>e.jsx("div",{style:{padding:T.spacing.xl,backgroundColor:T.colors.neutral[95],width:"100%"},children:e.jsx(l,{})})]},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsxs(s,{children:[e.jsx(r,{children:"ID"}),e.jsx(r,{children:"Course Title"}),e.jsx(r,{children:"Instructor"}),e.jsx(r,{children:"Progress"}),e.jsx(r,{children:"Status"})]})}),e.jsx(d,{children:u.map(l=>e.jsxs(s,{children:[e.jsx(a,{children:l.id}),e.jsx(a,{children:l.course}),e.jsx(a,{children:l.instructor}),e.jsx(a,{children:l.progress}),e.jsx(a,{children:l.status})]},l.id))})]})}},o={args:{striped:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsxs(s,{children:[e.jsx(r,{children:"ID"}),e.jsx(r,{children:"Course Title"}),e.jsx(r,{children:"Instructor"}),e.jsx(r,{children:"Progress"}),e.jsx(r,{children:"Status"})]})}),e.jsx(d,{children:u.map(l=>e.jsxs(s,{children:[e.jsx(a,{children:l.id}),e.jsx(a,{children:l.course}),e.jsx(a,{children:l.instructor}),e.jsx(a,{children:l.progress}),e.jsx(a,{children:l.status})]},l.id))})]})}},c={args:{bordered:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsxs(s,{children:[e.jsx(r,{children:"ID"}),e.jsx(r,{children:"Course Title"}),e.jsx(r,{children:"Instructor"}),e.jsx(r,{children:"Progress"}),e.jsx(r,{children:"Status"})]})}),e.jsx(d,{children:u.map(l=>e.jsxs(s,{children:[e.jsx(a,{children:l.id}),e.jsx(a,{children:l.course}),e.jsx(a,{children:l.instructor}),e.jsx(a,{children:l.progress}),e.jsx(a,{children:l.status})]},l.id))})]})}},i={args:{striped:!0,bordered:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsxs(s,{children:[e.jsx(r,{children:"ID"}),e.jsx(r,{children:"Course Title"}),e.jsx(r,{children:"Instructor"}),e.jsx(r,{children:"Progress"}),e.jsx(r,{children:"Status"})]})}),e.jsx(d,{children:u.map(l=>e.jsxs(s,{children:[e.jsx(a,{children:l.id}),e.jsx(a,{children:l.course}),e.jsx(a,{children:l.instructor}),e.jsx(a,{children:l.progress}),e.jsx(a,{children:l.status})]},l.id))})]})}},b={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsxs(s,{children:[e.jsx(r,{children:"ID"}),e.jsx(r,{children:"Course Title"}),e.jsx(r,{children:"Instructor"})]})}),e.jsx(d,{children:e.jsx(s,{children:e.jsx(a,{colSpan:3,style:{textAlign:"center",padding:T.spacing.xl,color:T.colors.neutral[60]},children:"No data available."})})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const H=["Default","Striped","Bordered","StripedAndBordered","EmptyState"];export{c as Bordered,t as Default,b as EmptyState,o as Striped,i as StripedAndBordered,H as __namedExportsOrder,j as default};
