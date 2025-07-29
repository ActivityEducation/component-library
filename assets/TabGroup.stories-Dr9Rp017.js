import{j as e,t as s,r as p}from"./iframe-RAegngwO.js";import{T as u,a}from"./index-CG6TXRuF.js";import{C as t}from"./index-DWXvOp7D.js";import"./emotion-styled-base.browser.esm-DWA-sfXA.js";const T={title:"Components/TabGroup",component:u,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{defaultValue:{control:"text",description:"The value of the tab that should be active by default (uncontrolled)."},value:{control:"text",description:"The value of the currently active tab (controlled)."},onValueChange:{action:"tabChanged",description:"Callback function when the active tab changes."},children:{control:!1}},decorators:[r=>e.jsx("div",{style:{padding:s.spacing.xl,backgroundColor:s.colors.neutral[95],width:"100%"},children:e.jsx(r,{})})]},o={args:{defaultValue:"overview",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"overview",children:"Overview"}),e.jsx(a,{value:"modules",children:"Modules"}),e.jsx(a,{value:"assignments",children:"Assignments"}),e.jsx(a,{value:"discussions",children:"Discussions"})]})}},l={args:{defaultValue:"assignments",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"overview",children:"Overview"}),e.jsx(a,{value:"modules",children:"Modules"}),e.jsx(a,{value:"assignments",children:"Assignments"}),e.jsx(a,{value:"discussions",children:"Discussions"})]})}},i={args:{defaultValue:"overview",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"overview",children:"Overview"}),e.jsx(a,{value:"modules",children:"Modules"}),e.jsx(a,{value:"assignments",disabled:!0,children:"Assignments"})," ",e.jsx(a,{value:"discussions",children:"Discussions"})]})}},n={render:r=>{const[d,h]=p.useState(r.defaultValue||"overview"),g=c=>{h(c),r.onValueChange?.(c)},m=()=>{switch(d){case"overview":return e.jsxs(t,{style:{marginTop:s.spacing.lg},children:[e.jsx("h3",{style:{...s.typography.h4,margin:0,color:s.colors.text.default},children:"Course Overview"}),e.jsx("p",{style:{...s.typography.body,margin:0,color:s.colors.text.default},children:"This section provides a general introduction to the course, learning objectives, and prerequisites."})]});case"modules":return e.jsxs(t,{style:{marginTop:s.spacing.lg},children:[e.jsx("h3",{style:{...s.typography.h4,margin:0,color:s.colors.text.default},children:"Course Modules"}),e.jsx("p",{style:{...s.typography.body,margin:0,color:s.colors.text.default},children:"Explore the structured modules, each containing lessons and quizzes."}),e.jsxs("ul",{style:{margin:0,paddingLeft:s.spacing.lg,...s.typography.bodySmall},children:[e.jsx("li",{children:"Module 1: Foundations"}),e.jsx("li",{children:"Module 2: Advanced Topics"}),e.jsx("li",{children:"Module 3: Project Work"})]})]});case"assignments":return e.jsxs(t,{style:{marginTop:s.spacing.lg},children:[e.jsx("h3",{style:{...s.typography.h4,margin:0,color:s.colors.text.default},children:"Assignments"}),e.jsx("p",{style:{...s.typography.body,margin:0,color:s.colors.text.default},children:"View and submit your assignments here. Keep track of deadlines."})]});case"discussions":return e.jsxs(t,{style:{marginTop:s.spacing.lg},children:[e.jsx("h3",{style:{...s.typography.h4,margin:0,color:s.colors.text.default},children:"Discussions"}),e.jsx("p",{style:{...s.typography.body,margin:0,color:s.colors.text.default},children:"Engage with peers and instructors in course-related discussions."})]});default:return null}};return e.jsxs("div",{style:{width:"100%",maxWidth:"700px"},children:[e.jsxs(u,{value:d,onValueChange:g,children:[e.jsx(a,{value:"overview",children:"Overview"}),e.jsx(a,{value:"modules",children:"Modules"}),e.jsx(a,{value:"assignments",children:"Assignments"}),e.jsx(a,{value:"discussions",children:"Discussions"})]}),m()]})},args:{defaultValue:"overview"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'overview',
    children: <>
        <Tab value="overview">Overview</Tab>
        <Tab value="modules">Modules</Tab>
        <Tab value="assignments">Assignments</Tab>
        <Tab value="discussions">Discussions</Tab>
      </>
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'assignments',
    children: <>
        <Tab value="overview">Overview</Tab>
        <Tab value="modules">Modules</Tab>
        <Tab value="assignments">Assignments</Tab>
        <Tab value="discussions">Discussions</Tab>
      </>
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'overview',
    children: <>
        <Tab value="overview">Overview</Tab>
        <Tab value="modules">Modules</Tab>
        <Tab value="assignments" disabled>Assignments</Tab> {/* Disabled tab */}
        <Tab value="discussions">Discussions</Tab>
      </>
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [activeTab, setActiveTab] = useState(args.defaultValue || 'overview');
    const handleTabChange = (value: string) => {
      setActiveTab(value);
      args.onValueChange?.(value); // Call the Storybook action logger
    };
    const renderContent = () => {
      switch (activeTab) {
        case 'overview':
          return <Card style={{
            marginTop: theme.spacing.lg
          }}>
              <h3 style={{
              ...theme.typography.h4,
              margin: 0,
              color: theme.colors.text.default
            }}>Course Overview</h3>
              <p style={{
              ...theme.typography.body,
              margin: 0,
              color: theme.colors.text.default
            }}>
                This section provides a general introduction to the course, learning objectives, and prerequisites.
              </p>
            </Card>;
        case 'modules':
          return <Card style={{
            marginTop: theme.spacing.lg
          }}>
              <h3 style={{
              ...theme.typography.h4,
              margin: 0,
              color: theme.colors.text.default
            }}>Course Modules</h3>
              <p style={{
              ...theme.typography.body,
              margin: 0,
              color: theme.colors.text.default
            }}>
                Explore the structured modules, each containing lessons and quizzes.
              </p>
              <ul style={{
              margin: 0,
              paddingLeft: theme.spacing.lg,
              ...theme.typography.bodySmall
            }}>
                <li>Module 1: Foundations</li>
                <li>Module 2: Advanced Topics</li>
                <li>Module 3: Project Work</li>
              </ul>
            </Card>;
        case 'assignments':
          return <Card style={{
            marginTop: theme.spacing.lg
          }}>
              <h3 style={{
              ...theme.typography.h4,
              margin: 0,
              color: theme.colors.text.default
            }}>Assignments</h3>
              <p style={{
              ...theme.typography.body,
              margin: 0,
              color: theme.colors.text.default
            }}>
                View and submit your assignments here. Keep track of deadlines.
              </p>
            </Card>;
        case 'discussions':
          return <Card style={{
            marginTop: theme.spacing.lg
          }}>
              <h3 style={{
              ...theme.typography.h4,
              margin: 0,
              color: theme.colors.text.default
            }}>Discussions</h3>
              <p style={{
              ...theme.typography.body,
              margin: 0,
              color: theme.colors.text.default
            }}>
                Engage with peers and instructors in course-related discussions.
              </p>
            </Card>;
        default:
          return null;
      }
    };
    return <div style={{
      width: '100%',
      maxWidth: '700px'
    }}>
        <TabGroup value={activeTab} onValueChange={handleTabChange}>
          <Tab value="overview">Overview</Tab>
          <Tab value="modules">Modules</Tab>
          <Tab value="assignments">Assignments</Tab>
          <Tab value="discussions">Discussions</Tab>
        </TabGroup>
        {renderContent()}
      </div>;
  },
  args: {
    defaultValue: 'overview'
  }
}`,...n.parameters?.docs?.source}}};const j=["Default","InitialActiveTab","WithDisabledTabs","InteractiveTabsWithContent"];export{o as Default,l as InitialActiveTab,n as InteractiveTabsWithContent,i as WithDisabledTabs,j as __namedExportsOrder,T as default};
