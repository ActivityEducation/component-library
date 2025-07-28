import{j as e,t}from"./iframe-XJf-RO9W.js";import{c as h}from"./emotion-react.browser.esm-DE_3pz7Q.js";import{C as g}from"./index-BmzST_Tt.js";import{B as r}from"./index-ByguWD-9.js";import{I as m}from"./index-guuBgZ9n.js";import"./emotion-styled.browser.esm-Zt9Xnlbb.js";const C={title:"Components/Card",component:g,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{header:{control:"object",description:"Content for the card's header section."},title:{control:"text",description:"The main title of the card.",defaultValue:"Card Title"},subtitle:{control:"text",description:"A subtitle for the card, typically smaller than the title.",defaultValue:"Card Subtitle"},children:{control:"text",description:"The main content of the card.",defaultValue:"This is the main content area of the card. It can hold paragraphs, lists, or any other React nodes."},actions:{control:"object",description:"Content for the card's actions section, typically buttons."},footer:{control:"text",description:"Content for the card's footer section."}},decorators:[p=>e.jsx("div",{style:{padding:t.spacing.xl,backgroundColor:t.colors.neutral[95],display:"flex",justifyContent:"center",alignItems:"flex-start",minHeight:"400px"},children:e.jsx(p,{})})]},o={args:{children:"This is a default card with some basic text content."}},s={args:{title:"Course Introduction",children:"This card introduces a new course. It contains a title and a brief description of the course content."}},a={args:{title:"Module 1: ActivityPub Basics",subtitle:"Understanding Decentralized Social Networks",children:"This module covers the fundamental concepts of ActivityPub, including actors, objects, and activities. Prepare to dive deep into the fediverse!"}},n={args:{children:"You have new assignments due soon. Please check your dashboard for details.",actions:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"ghost",size:"sm",children:"Dismiss"}),e.jsx(r,{variant:"primary",size:"sm",children:"View Assignments"})]})}},i={args:{header:e.jsx(m,{name:"fa-solid fa-book",size:"lg",color:t.colors.primary[40]}),title:"Upcoming Webinar: Advanced Federation",subtitle:"Presented by Dr. Alice Wonderland",children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Join our expert-led webinar on advanced topics in federated learning and ActivityPub implementation."}),e.jsx("p",{style:{...t.typography.caption,color:t.colors.neutral[60]},children:"Date: August 15, 2024 | Time: 10:00 AM EST"})]}),actions:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"secondary",size:"sm",children:"Add to Calendar"}),e.jsx(r,{variant:"primary",size:"sm",children:"Register Now"})]})}},c={args:{header:e.jsx(m,{name:"fa-solid fa-user-circle",size:"xl",color:t.colors.neutral[50]}),title:"John Doe",subtitle:"Student ID: 12345",children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Currently enrolled in: Introduction to ActivityPub, Decentralized Identity."}),e.jsx("p",{children:"Progress: 75% overall completion."})]})}},d={args:{title:"Privacy Policy Update",children:"Our privacy policy has been updated. Please review the changes at your earliest convenience.",footer:"Last updated: July 23, 2024"}},l={args:{header:e.jsx(m,{name:"fa-solid fa-bell",size:"lg",color:t.colors.tertiary[40]}),title:"New Notification",subtitle:"From System Administrator",children:"You have received a new message regarding your course enrollment. Please check your inbox.",actions:e.jsx(r,{variant:"primary",size:"sm",children:"View Message"}),footer:"Received 5 minutes ago"}},u={args:{title:"Custom Card",children:"This card has custom background and border styles applied via the `css` prop.",css:h`
      background-color: ${t.colors.secondary[95]};
      border-color: ${t.colors.secondary[60]};
      border-width: 2px;
      box-shadow: ${t.shadows.lg};
    `}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'This is a default card with some basic text content.'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Course Introduction',
    children: 'This card introduces a new course. It contains a title and a brief description of the course content.'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Module 1: ActivityPub Basics',
    subtitle: 'Understanding Decentralized Social Networks',
    children: 'This module covers the fundamental concepts of ActivityPub, including actors, objects, and activities. Prepare to dive deep into the fediverse!'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'You have new assignments due soon. Please check your dashboard for details.',
    actions: <>
        <Button variant="ghost" size="sm">Dismiss</Button>
        <Button variant="primary" size="sm">View Assignments</Button>
      </>
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    header: <Icon name="fa-solid fa-book" size="lg" color={theme.colors.primary['40']} />,
    title: 'Upcoming Webinar: Advanced Federation',
    subtitle: 'Presented by Dr. Alice Wonderland',
    children: <>
        <p>Join our expert-led webinar on advanced topics in federated learning and ActivityPub implementation.</p>
        <p style={{
        ...theme.typography.caption,
        color: theme.colors.neutral['60']
      }}>Date: August 15, 2024 | Time: 10:00 AM EST</p>
      </>,
    actions: <>
        <Button variant="secondary" size="sm">Add to Calendar</Button>
        <Button variant="primary" size="sm">Register Now</Button>
      </>
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    header: <Icon name="fa-solid fa-user-circle" size="xl" color={theme.colors.neutral['50']} />,
    title: 'John Doe',
    subtitle: 'Student ID: 12345',
    children: <>
        <p>Currently enrolled in: Introduction to ActivityPub, Decentralized Identity.</p>
        <p>Progress: 75% overall completion.</p>
      </>
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Privacy Policy Update',
    children: 'Our privacy policy has been updated. Please review the changes at your earliest convenience.',
    footer: 'Last updated: July 23, 2024'
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    header: <Icon name="fa-solid fa-bell" size="lg" color={theme.colors.tertiary['40']} />,
    title: 'New Notification',
    subtitle: 'From System Administrator',
    children: 'You have received a new message regarding your course enrollment. Please check your inbox.',
    actions: <Button variant="primary" size="sm">View Message</Button>,
    footer: 'Received 5 minutes ago'
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Custom Card',
    children: 'This card has custom background and border styles applied via the \`css\` prop.',
    css: css\`
      background-color: \${theme.colors.secondary['95']};
      border-color: \${theme.colors.secondary['60']};
      border-width: 2px;
      box-shadow: \${theme.shadows.lg};
    \`
  }
}`,...u.parameters?.docs?.source}}};const w=["Default","WithTitleAndContent","WithTitleSubtitleAndContent","WithContentAndActions","FullFeaturedCard","WithHeaderAndContent","WithFooter","AllSlots","CustomStyledCard"];export{l as AllSlots,u as CustomStyledCard,o as Default,i as FullFeaturedCard,n as WithContentAndActions,d as WithFooter,c as WithHeaderAndContent,s as WithTitleAndContent,a as WithTitleSubtitleAndContent,w as __namedExportsOrder,C as default};
