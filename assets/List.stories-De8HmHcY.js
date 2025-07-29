import{j as e,t as u,r as w}from"./iframe-RAegngwO.js";import{L as v,a as t}from"./index-OwN0jeKn.js";import{B as C}from"./index-BnQmYvSi.js";import{B as I}from"./index-DcOZjY6o.js";import{C as x}from"./index-GabRFj8p.js";import{I as i}from"./index-NNVB_gfa.js";import"./emotion-styled-base.browser.esm-DWA-sfXA.js";import"./emotion-react.browser.esm-zPk2XnfE.js";const D={title:"Components/List",component:v,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{children:{control:!1}},decorators:[n=>e.jsx("div",{style:{padding:u.spacing.xl,backgroundColor:u.colors.neutral[95],display:"flex",justifyContent:"center"},children:e.jsx(n,{})})]},r={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"Item One"}),e.jsx(t,{children:"Item Two"}),e.jsx(t,{children:"Item Three"})]})}},a={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t,{interactive:!0,onClick:()=>alert("Clicked Course: ActivityPub Basics"),children:"Introduction to ActivityPub"}),e.jsx(t,{interactive:!0,onClick:()=>alert("Clicked Course: Federated Systems"),children:"Advanced Federated Systems"}),e.jsx(t,{interactive:!0,onClick:()=>alert("Clicked Course: Decentralized Identity"),children:"Decentralized Identity"})]})}},o={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t,{leading:e.jsx(i,{name:"fa-solid fa-user"}),children:"My Profile"}),e.jsx(t,{leading:e.jsx(i,{name:"fa-solid fa-book"}),children:"My Courses"}),e.jsx(t,{leading:e.jsx(i,{name:"fa-solid fa-bell"}),children:"Notifications"}),e.jsx(t,{leading:e.jsx(i,{name:"fa-solid fa-cog"}),children:"Settings"})]})}},l={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t,{trailing:e.jsx(I,{variant:"primary",children:"New"}),children:"New Announcements"}),e.jsx(t,{trailing:e.jsx(I,{variant:"success",children:"5"}),children:"Completed Assignments"}),e.jsx(t,{trailing:e.jsx(C,{variant:"ghost",size:"sm",children:"View"}),children:"Course Progress"}),e.jsx(t,{trailing:e.jsx(i,{name:"fa-solid fa-arrow-right",size:"sm"}),children:"Next Step"})]})}},c={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t,{leading:e.jsx(i,{name:"fa-solid fa-book-open"}),trailing:e.jsx(I,{variant:"info",children:"3 Modules"}),interactive:!0,onClick:()=>alert("Go to Module 1"),children:"Module 1: ActivityPub Basics"}),e.jsx(t,{leading:e.jsx(i,{name:"fa-solid fa-arrow-circle-right"}),trailing:e.jsx(i,{name:"fa-solid fa-chevron-right",size:"sm"}),interactive:!0,onClick:()=>alert("Go to Module 2"),children:"Module 2: Advanced Federation"}),e.jsx(t,{leading:e.jsx(i,{name:"fa-solid fa-user-edit"}),trailing:e.jsx(C,{variant:"ghost",size:"sm",children:"Edit"}),interactive:!0,onClick:()=>alert("Edit Profile"),children:"Edit Profile Information"}),e.jsx(t,{leading:e.jsx(i,{name:"fa-solid fa-exclamation-circle"}),trailing:e.jsx(I,{variant:"error",children:"!"}),interactive:!0,onClick:()=>alert("View Notifications"),children:"Unread Notifications"})]})}},d={render:()=>{const[n,j]=w.useState([]),p=(s,L)=>{const{checked:k}=s.target;j(f=>k?[...f,L]:f.filter(b=>b!==L))};return e.jsxs(v,{children:[e.jsx(t,{leading:e.jsx(x,{checked:n.includes("item1"),onChange:s=>p(s,"item1")}),children:"Selectable Item 1"}),e.jsx(t,{leading:e.jsx(x,{checked:n.includes("item2"),onChange:s=>p(s,"item2")}),children:"Selectable Item 2"}),e.jsx(t,{leading:e.jsx(x,{checked:n.includes("item3"),onChange:s=>p(s,"item3")}),disabled:!0,children:"Disabled Selectable Item 3"})]})},args:{},parameters:{layout:"padded"}},m={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"Active Item"}),e.jsx(t,{disabled:!0,children:"Disabled Item"}),e.jsx(t,{interactive:!0,disabled:!0,onClick:()=>alert("This should not fire"),children:"Disabled Interactive Item"})]})}},g={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t,{leading:e.jsx(i,{src:"https://upload.wikimedia.org/wikipedia/commons/4/4a/Adobelogo.svg",size:"md"}),children:"Adobe Product"}),e.jsx(t,{leading:e.jsx(i,{src:"https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",size:"md"}),children:"GitHub Repository"})]})}},h={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t,{leading:e.jsx(i,{size:"md",color:u.colors.primary[40],children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",fill:"currentColor"})})}),children:"Task Completed"}),e.jsx(t,{leading:e.jsx(i,{size:"md",color:u.colors.error[40],children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",fill:"currentColor"})})}),children:"Action Required"})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <ListItem>Item One</ListItem>
        <ListItem>Item Two</ListItem>
        <ListItem>Item Three</ListItem>
      </>
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <ListItem interactive onClick={() => alert('Clicked Course: ActivityPub Basics')}>
          Introduction to ActivityPub
        </ListItem>
        <ListItem interactive onClick={() => alert('Clicked Course: Federated Systems')}>
          Advanced Federated Systems
        </ListItem>
        <ListItem interactive onClick={() => alert('Clicked Course: Decentralized Identity')}>
          Decentralized Identity
        </ListItem>
      </>
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <ListItem leading={<Icon name="fa-solid fa-user" />}>My Profile</ListItem>
        <ListItem leading={<Icon name="fa-solid fa-book" />}>My Courses</ListItem>
        <ListItem leading={<Icon name="fa-solid fa-bell" />}>Notifications</ListItem>
        <ListItem leading={<Icon name="fa-solid fa-cog" />}>Settings</ListItem>
      </>
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <ListItem trailing={<Badge variant="primary">New</Badge>}>
          New Announcements
        </ListItem>
        <ListItem trailing={<Badge variant="success">5</Badge>}>
          Completed Assignments
        </ListItem>
        <ListItem trailing={<Button variant="ghost" size="sm">View</Button>}>
          Course Progress
        </ListItem>
        <ListItem trailing={<Icon name="fa-solid fa-arrow-right" size="sm" />}>
          Next Step
        </ListItem>
      </>
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <ListItem leading={<Icon name="fa-solid fa-book-open" />} trailing={<Badge variant="info">3 Modules</Badge>} interactive onClick={() => alert('Go to Module 1')}>
          Module 1: ActivityPub Basics
        </ListItem>
        <ListItem leading={<Icon name="fa-solid fa-arrow-circle-right" />} trailing={<Icon name="fa-solid fa-chevron-right" size="sm" />} interactive onClick={() => alert('Go to Module 2')}>
          Module 2: Advanced Federation
        </ListItem>
        <ListItem leading={<Icon name="fa-solid fa-user-edit" />} trailing={<Button variant="ghost" size="sm">Edit</Button>} interactive onClick={() => alert('Edit Profile')}>
          Edit Profile Information
        </ListItem>
        <ListItem leading={<Icon name="fa-solid fa-exclamation-circle" />} trailing={<Badge variant="error">!</Badge>} interactive onClick={() => alert('View Notifications')}>
          Unread Notifications
        </ListItem>
      </>
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
      const {
        checked
      } = event.target;
      setSelectedItems((prev: any) => checked ? [...prev, value] : prev.filter((item: any) => item !== value));
    };
    return <List>
        <ListItem leading={<Checkbox checked={selectedItems.includes('item1')} onChange={(e: any) => handleCheckboxChange(e, 'item1')} />}>
          Selectable Item 1
        </ListItem>
        <ListItem leading={<Checkbox checked={selectedItems.includes('item2')} onChange={(e: any) => handleCheckboxChange(e, 'item2')} />}>
          Selectable Item 2
        </ListItem>
        <ListItem leading={<Checkbox checked={selectedItems.includes('item3')} onChange={(e: any) => handleCheckboxChange(e, 'item3')} />} disabled // Example of a disabled selectable item
      >
          Disabled Selectable Item 3
        </ListItem>
      </List>;
  },
  args: {},
  parameters: {
    layout: 'padded'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <ListItem>Active Item</ListItem>
        <ListItem disabled>Disabled Item</ListItem>
        <ListItem interactive disabled onClick={() => alert('This should not fire')}>
          Disabled Interactive Item
        </ListItem>
      </>
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <ListItem leading={<Icon src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Adobelogo.svg" size="md" />}>
          Adobe Product
        </ListItem>
        <ListItem leading={<Icon src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" size="md" />}>
          GitHub Repository
        </ListItem>
      </>
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <ListItem leading={<Icon size="md" color={theme.colors.primary['40']}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor" />
            </svg>
          </Icon>}>
          Task Completed
        </ListItem>
        <ListItem leading={<Icon size="md" color={theme.colors.error['40']}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" fill="currentColor" />
            </svg>
          </Icon>}>
          Action Required
        </ListItem>
      </>
  }
}`,...h.parameters?.docs?.source}}};const E=["DefaultList","InteractiveList","ListWithLeadingIcons","ListWithTrailingContent","FullFeaturedList","ListWithCheckboxes","ListWithDisabledItems","ListWithSvgUrlIcons","ListWithInlineSvgIcons"];export{r as DefaultList,c as FullFeaturedList,a as InteractiveList,d as ListWithCheckboxes,m as ListWithDisabledItems,h as ListWithInlineSvgIcons,o as ListWithLeadingIcons,g as ListWithSvgUrlIcons,l as ListWithTrailingContent,E as __namedExportsOrder,D as default};
