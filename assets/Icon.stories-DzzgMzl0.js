import{j as e,t as o}from"./iframe-BodoAwUW.js";import{I as r}from"./index-D3dK0B9m.js";import"./emotion-styled.browser.esm-DhTfgDDH.js";const h={title:"Components/Icon",component:r,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{name:{control:"text",description:'The Font Awesome icon class name (e.g., "fa-solid fa-star"). Used when `src` or `children` are not provided.',defaultValue:"fa-solid fa-star"},src:{control:"text",description:"The URL of an SVG icon. Takes precedence over `name` and `children`."},children:{control:"object",description:"Inline SVG content or other React nodes to render as the icon. Takes precedence over `name` if `src` is not provided."},size:{control:"select",options:["sm","md","lg","xl"],description:"The size of the icon.",defaultValue:"md"},color:{control:"color",description:"The color of the icon. Applies to Font Awesome icons and inline SVG children via `currentColor`."}},decorators:[m=>e.jsx("div",{style:{padding:o.spacing.xl,backgroundColor:o.colors.background.default,display:"flex",justifyContent:"center",alignItems:"center",minHeight:"150px"},children:e.jsx(m,{})})]},s={args:{name:"fa-solid fa-star"}},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:o.spacing.lg,alignItems:"center"},children:[e.jsx(r,{name:"fa-solid fa-house",size:"sm",title:"Small House Icon"}),e.jsx(r,{name:"fa-solid fa-house",size:"md",title:"Medium House Icon"}),e.jsx(r,{name:"fa-solid fa-house",size:"lg",title:"Large House Icon"}),e.jsx(r,{name:"fa-solid fa-house",size:"xl",title:"Extra Large House Icon"})]}),args:{}},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:o.spacing.lg,alignItems:"center"},children:[e.jsx(r,{name:"fa-solid fa-check-circle",color:o.colors.secondary[60],title:"Success Icon"}),e.jsx(r,{name:"fa-solid fa-info-circle",color:o.colors.tertiary[60],title:"Info Icon"}),e.jsx(r,{name:"fa-solid fa-exclamation-triangle",color:o.colors.error[40],title:"Warning Icon"}),e.jsx(r,{name:"fa-solid fa-user",color:o.colors.primary[40],title:"Primary User Icon"})]}),args:{}},l={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:o.spacing.lg,alignItems:"center",justifyContent:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{name:"fa-solid fa-book",size:"lg",color:o.colors.primary[40]}),e.jsx("p",{style:{...o.typography.caption,margin:0},children:"Book"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{name:"fa-solid fa-graduation-cap",size:"lg",color:o.colors.secondary[40]}),e.jsx("p",{style:{...o.typography.caption,margin:0},children:"Graduation"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{name:"fa-solid fa-chalkboard-teacher",size:"lg",color:o.colors.tertiary[40]}),e.jsx("p",{style:{...o.typography.caption,margin:0},children:"Teacher"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{name:"fa-solid fa-laptop-code",size:"lg"}),e.jsx("p",{style:{...o.typography.caption,margin:0},children:"Coding"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{name:"fa-solid fa-chart-line",size:"lg"}),e.jsx("p",{style:{...o.typography.caption,margin:0},children:"Progress"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{name:"fa-solid fa-comments",size:"lg"}),e.jsx("p",{style:{...o.typography.caption,margin:0},children:"Discussions"})]})]}),args:{},parameters:{layout:"padded"}},n={args:{name:"fa-solid fa-heart",size:"lg",color:o.colors.neutral[50],onClick:()=>alert("Heart clicked!"),style:{cursor:"pointer"}}},i={args:{src:"https://upload.wikimedia.org/wikipedia/commons/4/4a/Adobelogo.svg",size:"xl",title:"Adobe Logo"}},c={args:{children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",fill:"currentColor"})}),size:"lg",color:o.colors.primary[40],title:"Checkmark Circle"}},d={args:{children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",fill:"currentColor"})}),size:"xl",color:"orange",title:"Orange Checkmark Circle"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'fa-solid fa-star'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: theme.spacing.lg,
    alignItems: 'center'
  }}>
      <Icon name="fa-solid fa-house" size="sm" title="Small House Icon" />
      <Icon name="fa-solid fa-house" size="md" title="Medium House Icon" />
      <Icon name="fa-solid fa-house" size="lg" title="Large House Icon" />
      <Icon name="fa-solid fa-house" size="xl" title="Extra Large House Icon" />
    </div>,
  args: {}
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: theme.spacing.lg,
    alignItems: 'center'
  }}>
      <Icon name="fa-solid fa-check-circle" color={theme.colors.secondary['60']} title="Success Icon" />
      <Icon name="fa-solid fa-info-circle" color={theme.colors.tertiary['60']} title="Info Icon" />
      <Icon name="fa-solid fa-exclamation-triangle" color={theme.colors.error['40']} title="Warning Icon" />
      <Icon name="fa-solid fa-user" color={theme.colors.primary['40']} title="Primary User Icon" />
    </div>,
  args: {}
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing.lg,
    alignItems: 'center',
    justifyContent: 'center'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <Icon name="fa-solid fa-book" size="lg" color={theme.colors.primary['40']} />
        <p style={{
        ...theme.typography.caption,
        margin: 0
      }}>Book</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Icon name="fa-solid fa-graduation-cap" size="lg" color={theme.colors.secondary['40']} />
        <p style={{
        ...theme.typography.caption,
        margin: 0
      }}>Graduation</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Icon name="fa-solid fa-chalkboard-teacher" size="lg" color={theme.colors.tertiary['40']} />
        <p style={{
        ...theme.typography.caption,
        margin: 0
      }}>Teacher</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Icon name="fa-solid fa-laptop-code" size="lg" />
        <p style={{
        ...theme.typography.caption,
        margin: 0
      }}>Coding</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Icon name="fa-solid fa-chart-line" size="lg" />
        <p style={{
        ...theme.typography.caption,
        margin: 0
      }}>Progress</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Icon name="fa-solid fa-comments" size="lg" />
        <p style={{
        ...theme.typography.caption,
        margin: 0
      }}>Discussions</p>
      </div>
    </div>,
  args: {},
  parameters: {
    layout: 'padded'
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'fa-solid fa-heart',
    size: 'lg',
    color: theme.colors.neutral['50'],
    onClick: () => alert('Heart clicked!'),
    style: {
      cursor: 'pointer'
    }
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Adobelogo.svg',
    // Example SVG URL
    size: 'xl',
    title: 'Adobe Logo'
    // Note: 'color' prop typically won't work on SVG URLs directly unless the SVG itself uses currentColor
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor" />
      </svg>,
    size: 'lg',
    color: theme.colors.primary['40'],
    // This color will apply to the SVG via fill="currentColor"
    title: 'Checkmark Circle'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor" />
      </svg>,
    size: 'xl',
    color: 'orange',
    // Custom color string
    title: 'Orange Checkmark Circle'
  }
}`,...d.parameters?.docs?.source}}};const u=["DefaultFontAwesome","FontAwesomeSizes","FontAwesomeColors","EducationalFontAwesomeIcons","InteractiveFontAwesome","SvgFromUrl","InlineSvg","InlineSvgCustomColor"];export{s as DefaultFontAwesome,l as EducationalFontAwesomeIcons,t as FontAwesomeColors,a as FontAwesomeSizes,c as InlineSvg,d as InlineSvgCustomColor,n as InteractiveFontAwesome,i as SvgFromUrl,u as __namedExportsOrder,h as default};
