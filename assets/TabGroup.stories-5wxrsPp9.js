import{r as d,j as t,t as a}from"./iframe-qfGYkdpq.js";import{s as f}from"./emotion-styled.browser.esm-Dr63JBGY.js";import{C as u}from"./index-RmxIL0IR.js";const x=f.button`
  // Base styles for all tabs
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${e=>e.theme.spacing.md} ${e=>e.theme.spacing.lg};
  border: none;
  background-color: transparent; // Default transparent background
  cursor: pointer;
  font-family: ${e=>e.theme.typography.fontFamily};
  font-size: ${e=>e.theme.typography.body.fontSize};
  font-weight: ${e=>e.theme.typography.body.fontWeight};
  color: ${e=>e.theme.colors.text.default}; // Default text color
  transition: ${e=>e.theme.transitions.default}; // Smooth transitions
  position: relative; // For the active indicator line

  // Hover state for inactive tabs
  &:hover:not(:disabled) {
    color: ${e=>e.theme.colors.primary[40]}; // Primary color on hover
    background-color: ${e=>e.theme.colors.neutral[95]}; // Light background on hover
  }

  // Active state styling
  ${e=>e.isActive&&`
    color: ${e.theme.colors.primary[40]}; // Active tab text color
    font-weight: ${e.theme.typography.button.fontWeight}; // Bolder for active tab
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px; // Thickness of the active indicator line
      background-color: ${e.theme.colors.primary[40]}; // Primary color for indicator
      border-radius: ${e.theme.borderRadius.sm} ${e.theme.borderRadius.sm} 0 0; // Rounded top corners
    }
  `}

  // Disabled state styling
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    color: ${e=>e.theme.colors.neutral[50]};
  }
`,s=({children:e,value:n,isActive:o=!1,onTabSelect:l,onClick:c,...i})=>{const v=b=>{l?.(n),c?.(b)};return t.jsx(x,{isActive:o,onClick:v,...i,children:e})},w=f.div`
  // Base styles for the tab group container
  display: flex;
  border-bottom: 1px solid ${e=>e.theme.colors.border.default}; // Separator line below tabs
  background-color: ${e=>e.theme.colors.background.surface}; // Background for the tab bar
  border-radius: ${e=>e.theme.borderRadius.md} ${e=>e.theme.borderRadius.md} 0 0; // Rounded top corners
  overflow-x: auto; // Allow horizontal scrolling if tabs exceed width
  -webkit-overflow-scrolling: touch; // Smooth scrolling on iOS
  white-space: nowrap; // Prevent tabs from wrapping
  box-shadow: ${e=>e.theme.shadows.sm}; // Subtle shadow for depth
`,y=({children:e,defaultValue:n,value:o,onValueChange:l,...c})=>{const[i,v]=d.useState(o!==void 0?o:n),b=o!==void 0?o:i,T=r=>{o===void 0&&v(r),l?.(r)};return t.jsx(w,{role:"tablist",...c,children:d.Children.map(e,r=>d.isValidElement(r)&&r.type===s?d.cloneElement(r,{isActive:r.props.value===b,onTabSelect:T}):(console.warn("TabGroup expects only Tab components as children."),r))})};s.__docgenInfo={description:`A single Tab component for use within a TabGroup in the AscendUCore Design System.
Represents a clickable section with an active state indicator.`,methods:[],displayName:"Tab",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be rendered inside the tab (e.g., text, icon)."},value:{required:!0,tsType:{name:"string"},description:"A unique value associated with this tab, used by TabGroup to identify the active tab."},isActive:{required:!1,tsType:{name:"boolean"},description:"Indicates if this tab is currently active. Managed by the parent TabGroup.",defaultValue:{value:"false",computed:!1}},onTabSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback function when the tab is clicked. Managed by the parent TabGroup.\nThis prop is renamed from `onSelect` to `onTabSelect` to avoid type conflicts with\n`React.ButtonHTMLAttributes`.\n@param value The value of the clicked tab."},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};y.__docgenInfo={description:"A container component for managing a group of `Tab` components in the AscendUCore Design System.\nIt handles the active state of tabs, ensures consistent styling, and provides\na mechanism for changing the active tab. Can be used as a controlled or uncontrolled component.",methods:[],displayName:"TabGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The Tab components to be rendered within the group.\nOnly `Tab` children are expected."},defaultValue:{required:!1,tsType:{name:"string"},description:"The value of the tab that should be active by default.\nMust match the `value` prop of one of the `Tab` children."},value:{required:!1,tsType:{name:"string"},description:"The value of the currently active tab (controlled component).\nIf provided, `onValueChange` must also be provided."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback function that is called when the active tab changes.\nProvides the `value` of the newly active tab."},css:{required:!1,tsType:{name:"SerializedStyles"},description:"Optional Emotion `css` prop for additional custom styles."}}};const S={title:"Components/TabGroup",component:y,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{defaultValue:{control:"text",description:"The value of the tab that should be active by default (uncontrolled)."},value:{control:"text",description:"The value of the currently active tab (controlled)."},onValueChange:{action:"tabChanged",description:"Callback function when the active tab changes."},children:{control:!1}},decorators:[e=>t.jsx("div",{style:{padding:a.spacing.xl,backgroundColor:a.colors.neutral[95],width:"100%"},children:t.jsx(e,{})})]},h={args:{defaultValue:"overview",children:t.jsxs(t.Fragment,{children:[t.jsx(s,{value:"overview",children:"Overview"}),t.jsx(s,{value:"modules",children:"Modules"}),t.jsx(s,{value:"assignments",children:"Assignments"}),t.jsx(s,{value:"discussions",children:"Discussions"})]})}},p={args:{defaultValue:"assignments",children:t.jsxs(t.Fragment,{children:[t.jsx(s,{value:"overview",children:"Overview"}),t.jsx(s,{value:"modules",children:"Modules"}),t.jsx(s,{value:"assignments",children:"Assignments"}),t.jsx(s,{value:"discussions",children:"Discussions"})]})}},m={args:{defaultValue:"overview",children:t.jsxs(t.Fragment,{children:[t.jsx(s,{value:"overview",children:"Overview"}),t.jsx(s,{value:"modules",children:"Modules"}),t.jsx(s,{value:"assignments",disabled:!0,children:"Assignments"})," ",t.jsx(s,{value:"discussions",children:"Discussions"})]})}},g={render:e=>{const[n,o]=d.useState(e.defaultValue||"overview"),l=i=>{o(i),e.onValueChange?.(i)},c=()=>{switch(n){case"overview":return t.jsxs(u,{style:{marginTop:a.spacing.lg},children:[t.jsx("h3",{style:{...a.typography.h4,margin:0,color:a.colors.text.default},children:"Course Overview"}),t.jsx("p",{style:{...a.typography.body,margin:0,color:a.colors.text.default},children:"This section provides a general introduction to the course, learning objectives, and prerequisites."})]});case"modules":return t.jsxs(u,{style:{marginTop:a.spacing.lg},children:[t.jsx("h3",{style:{...a.typography.h4,margin:0,color:a.colors.text.default},children:"Course Modules"}),t.jsx("p",{style:{...a.typography.body,margin:0,color:a.colors.text.default},children:"Explore the structured modules, each containing lessons and quizzes."}),t.jsxs("ul",{style:{margin:0,paddingLeft:a.spacing.lg,...a.typography.bodySmall},children:[t.jsx("li",{children:"Module 1: Foundations"}),t.jsx("li",{children:"Module 2: Advanced Topics"}),t.jsx("li",{children:"Module 3: Project Work"})]})]});case"assignments":return t.jsxs(u,{style:{marginTop:a.spacing.lg},children:[t.jsx("h3",{style:{...a.typography.h4,margin:0,color:a.colors.text.default},children:"Assignments"}),t.jsx("p",{style:{...a.typography.body,margin:0,color:a.colors.text.default},children:"View and submit your assignments here. Keep track of deadlines."})]});case"discussions":return t.jsxs(u,{style:{marginTop:a.spacing.lg},children:[t.jsx("h3",{style:{...a.typography.h4,margin:0,color:a.colors.text.default},children:"Discussions"}),t.jsx("p",{style:{...a.typography.body,margin:0,color:a.colors.text.default},children:"Engage with peers and instructors in course-related discussions."})]});default:return null}};return t.jsxs("div",{style:{width:"100%",maxWidth:"700px"},children:[t.jsxs(y,{value:n,onValueChange:l,children:[t.jsx(s,{value:"overview",children:"Overview"}),t.jsx(s,{value:"modules",children:"Modules"}),t.jsx(s,{value:"assignments",children:"Assignments"}),t.jsx(s,{value:"discussions",children:"Discussions"})]}),c()]})},args:{defaultValue:"overview"}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'overview',
    children: <>
        <Tab value="overview">Overview</Tab>
        <Tab value="modules">Modules</Tab>
        <Tab value="assignments">Assignments</Tab>
        <Tab value="discussions">Discussions</Tab>
      </>
  }
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'assignments',
    children: <>
        <Tab value="overview">Overview</Tab>
        <Tab value="modules">Modules</Tab>
        <Tab value="assignments">Assignments</Tab>
        <Tab value="discussions">Discussions</Tab>
      </>
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'overview',
    children: <>
        <Tab value="overview">Overview</Tab>
        <Tab value="modules">Modules</Tab>
        <Tab value="assignments" disabled>Assignments</Tab> {/* Disabled tab */}
        <Tab value="discussions">Discussions</Tab>
      </>
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const k=["Default","InitialActiveTab","WithDisabledTabs","InteractiveTabsWithContent"];export{h as Default,p as InitialActiveTab,g as InteractiveTabsWithContent,m as WithDisabledTabs,k as __namedExportsOrder,S as default};
