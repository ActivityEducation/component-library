import{j as r,t as e,T as x}from"./iframe-CGsrx03R.js";import{C as t}from"./index-CXpqd7mF.js";import"./emotion-styled-base.browser.esm-BC397mIf.js";const o=({colors:p,titlePrefix:u})=>r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:e.spacing.md,marginBottom:e.spacing.xl},children:Object.entries(p).map(([h,m])=>r.jsxs(t,{style:{width:"120px",textAlign:"center",padding:e.spacing.sm},children:[r.jsx("div",{style:{backgroundColor:m,width:"100%",height:"60px",borderRadius:e.borderRadius.md,marginBottom:e.spacing.xs,border:`1px solid ${e.colors.neutral[80]}`}}),r.jsxs("div",{style:{fontSize:e.typography.caption.fontSize,color:e.colors.text.default},children:[u," ",h]}),r.jsx("div",{style:{fontSize:e.typography.caption.fontSize,color:e.colors.neutral[60]},children:m})]},h))});o.__docgenInfo={description:"",methods:[],displayName:"ColorPalette",props:{colors:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:""},titlePrefix:{required:!0,tsType:{name:"string"},description:""}}};const b={title:"Design System/Colors",component:o,decorators:[p=>r.jsx(x,{theme:e,children:r.jsx("div",{style:{margin:"3em"},children:r.jsx(p,{})})})],parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},n={render:()=>r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"Primary Colors"}),r.jsx("p",{children:"These colors are used for primary actions, branding elements, and active states."}),r.jsx(o,{colors:e.colors.primary,titlePrefix:"Primary"})]})},s={render:()=>r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"Secondary Colors"}),r.jsx("p",{children:"Used for secondary actions, accents, and success states."}),r.jsx(o,{colors:e.colors.secondary,titlePrefix:"Secondary"})]})},a={render:()=>r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"Tertiary Colors"}),r.jsx("p",{children:"Used for less prominent elements, decorative accents, or states."}),r.jsx(o,{colors:e.colors.tertiary,titlePrefix:"Tertiary"})]})},i={render:()=>r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"Neutral Colors"}),r.jsx("p",{children:"Used for text, backgrounds, borders, and other subtle UI elements."}),r.jsx(o,{colors:e.colors.neutral,titlePrefix:"Neutral"})]})},l={render:()=>r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"Neutral Variant Colors"}),r.jsx("p",{children:"Alternative shades for backgrounds, borders, or text."}),r.jsx(o,{colors:e.colors.neutralVariant,titlePrefix:"Neutral Variant"})]})},d={render:()=>r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"Error Colors"}),r.jsx("p",{children:"Used to indicate errors, warnings, or destructive actions."}),r.jsx(o,{colors:e.colors.error,titlePrefix:"Error"})]})},c={render:()=>r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"Semantic Colors"}),r.jsx("p",{children:"Application-specific color aliases for consistent usage."}),r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:e.spacing.md,marginBottom:e.spacing.xl},children:[r.jsxs(t,{style:{width:"180px",textAlign:"center",padding:e.spacing.sm},children:[r.jsx("div",{style:{backgroundColor:e.colors.text.default,width:"100%",height:"40px",borderRadius:e.borderRadius.default,marginBottom:e.spacing.xs,border:`1px solid ${e.colors.neutral[80]}`}}),r.jsx("div",{style:{fontSize:e.typography.caption.fontSize,color:e.colors.text.default},children:"Text Default"}),r.jsx("div",{style:{fontSize:e.typography.caption.fontSize,color:e.colors.neutral[60]},children:e.colors.text.default})]}),r.jsxs(t,{style:{width:"180px",textAlign:"center",padding:e.spacing.sm,backgroundColor:e.colors.neutral[10]},children:[r.jsx("div",{style:{backgroundColor:e.colors.text.light,width:"100%",height:"40px",borderRadius:e.borderRadius.default,marginBottom:e.spacing.xs,border:`1px solid ${e.colors.neutral[80]}`}}),r.jsx("div",{style:{fontSize:e.typography.caption.fontSize,color:e.colors.text.default},children:"Text Light"}),r.jsx("div",{style:{fontSize:e.typography.caption.fontSize,color:e.colors.neutral[60]},children:e.colors.text.light})]}),r.jsxs(t,{style:{width:"180px",textAlign:"center",padding:e.spacing.sm,backgroundColor:e.colors.primary[40]},children:[r.jsx("div",{style:{backgroundColor:e.colors.text.onPrimary,width:"100%",height:"40px",borderRadius:e.borderRadius.default,marginBottom:e.spacing.xs,border:`1px solid ${e.colors.neutral[80]}`}}),r.jsx("div",{style:{fontSize:e.typography.caption.fontSize,color:e.colors.text.default},children:"Text on Primary"}),r.jsx("div",{style:{fontSize:e.typography.caption.fontSize,color:e.colors.neutral[60]},children:e.colors.text.onPrimary})]}),r.jsxs(t,{style:{width:"180px",textAlign:"center",padding:e.spacing.sm},children:[r.jsx("div",{style:{backgroundColor:e.colors.background.default,width:"100%",height:"40px",borderRadius:e.borderRadius.default,marginBottom:e.spacing.xs,border:`1px solid ${e.colors.neutral[80]}`}}),r.jsx("div",{style:{fontSize:e.typography.caption.fontSize,color:e.colors.text.default},children:"Background Default"}),r.jsx("div",{style:{fontSize:e.typography.caption.fontSize,color:e.colors.neutral[60]},children:e.colors.background.default})]}),r.jsxs(t,{style:{width:"180px",textAlign:"center",padding:e.spacing.sm},children:[r.jsx("div",{style:{backgroundColor:e.colors.background.surface,width:"100%",height:"40px",borderRadius:e.borderRadius.default,marginBottom:e.spacing.xs,border:`1px solid ${e.colors.neutral[80]}`}}),r.jsx("div",{style:{fontSize:e.typography.caption.fontSize,color:e.colors.text.default},children:"Background Surface"}),r.jsx("div",{style:{fontSize:e.typography.caption.fontSize,color:e.colors.neutral[60]},children:e.colors.background.surface})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <h3>Primary Colors</h3>
      <p>These colors are used for primary actions, branding elements, and active states.</p>
      <ColorPalette colors={theme.colors.primary} titlePrefix="Primary" />
    </>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <h3>Secondary Colors</h3>
      <p>Used for secondary actions, accents, and success states.</p>
      <ColorPalette colors={theme.colors.secondary} titlePrefix="Secondary" />
    </>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <h3>Tertiary Colors</h3>
      <p>Used for less prominent elements, decorative accents, or states.</p>
      <ColorPalette colors={theme.colors.tertiary} titlePrefix="Tertiary" />
    </>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <h3>Neutral Colors</h3>
      <p>Used for text, backgrounds, borders, and other subtle UI elements.</p>
      <ColorPalette colors={theme.colors.neutral} titlePrefix="Neutral" />
    </>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <h3>Neutral Variant Colors</h3>
      <p>Alternative shades for backgrounds, borders, or text.</p>
      <ColorPalette colors={theme.colors.neutralVariant} titlePrefix="Neutral Variant" />
    </>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <h3>Error Colors</h3>
      <p>Used to indicate errors, warnings, or destructive actions.</p>
      <ColorPalette colors={theme.colors.error} titlePrefix="Error" />
    </>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <h3>Semantic Colors</h3>
      <p>Application-specific color aliases for consistent usage.</p>
      <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: theme.spacing.md,
      marginBottom: theme.spacing.xl
    }}>
        <Card style={{
        width: '180px',
        textAlign: 'center',
        padding: theme.spacing.sm
      }}>
          <div style={{
          backgroundColor: theme.colors.text.default,
          width: '100%',
          height: '40px',
          borderRadius: theme.borderRadius.default,
          marginBottom: theme.spacing.xs,
          border: \`1px solid \${theme.colors.neutral['80']}\`
        }}></div>
          <div style={{
          fontSize: theme.typography.caption.fontSize,
          color: theme.colors.text.default
        }}>Text Default</div>
          <div style={{
          fontSize: theme.typography.caption.fontSize,
          color: theme.colors.neutral['60']
        }}>{theme.colors.text.default}</div>
        </Card>
        <Card style={{
        width: '180px',
        textAlign: 'center',
        padding: theme.spacing.sm,
        backgroundColor: theme.colors.neutral['10']
      }}>
          <div style={{
          backgroundColor: theme.colors.text.light,
          width: '100%',
          height: '40px',
          borderRadius: theme.borderRadius.default,
          marginBottom: theme.spacing.xs,
          border: \`1px solid \${theme.colors.neutral['80']}\`
        }}></div>
          <div style={{
          fontSize: theme.typography.caption.fontSize,
          color: theme.colors.text.default
        }}>Text Light</div>
          <div style={{
          fontSize: theme.typography.caption.fontSize,
          color: theme.colors.neutral['60']
        }}>{theme.colors.text.light}</div>
        </Card>
        <Card style={{
        width: '180px',
        textAlign: 'center',
        padding: theme.spacing.sm,
        backgroundColor: theme.colors.primary['40']
      }}>
          <div style={{
          backgroundColor: theme.colors.text.onPrimary,
          width: '100%',
          height: '40px',
          borderRadius: theme.borderRadius.default,
          marginBottom: theme.spacing.xs,
          border: \`1px solid \${theme.colors.neutral['80']}\`
        }}></div>
          <div style={{
          fontSize: theme.typography.caption.fontSize,
          color: theme.colors.text.default
        }}>Text on Primary</div>
          <div style={{
          fontSize: theme.typography.caption.fontSize,
          color: theme.colors.neutral['60']
        }}>{theme.colors.text.onPrimary}</div>
        </Card>
        <Card style={{
        width: '180px',
        textAlign: 'center',
        padding: theme.spacing.sm
      }}>
          <div style={{
          backgroundColor: theme.colors.background.default,
          width: '100%',
          height: '40px',
          borderRadius: theme.borderRadius.default,
          marginBottom: theme.spacing.xs,
          border: \`1px solid \${theme.colors.neutral['80']}\`
        }}></div>
          <div style={{
          fontSize: theme.typography.caption.fontSize,
          color: theme.colors.text.default
        }}>Background Default</div>
          <div style={{
          fontSize: theme.typography.caption.fontSize,
          color: theme.colors.neutral['60']
        }}>{theme.colors.background.default}</div>
        </Card>
        <Card style={{
        width: '180px',
        textAlign: 'center',
        padding: theme.spacing.sm
      }}>
          <div style={{
          backgroundColor: theme.colors.background.surface,
          width: '100%',
          height: '40px',
          borderRadius: theme.borderRadius.default,
          marginBottom: theme.spacing.xs,
          border: \`1px solid \${theme.colors.neutral['80']}\`
        }}></div>
          <div style={{
          fontSize: theme.typography.caption.fontSize,
          color: theme.colors.text.default
        }}>Background Surface</div>
          <div style={{
          fontSize: theme.typography.caption.fontSize,
          color: theme.colors.neutral['60']
        }}>{theme.colors.background.surface}</div>
        </Card>
      </div>
    </>
}`,...c.parameters?.docs?.source}}};const C=["PrimaryColors","SecondaryColors","TertiaryColors","NeutralColors","NeutralVariantColors","ErrorColors","SemanticColors"];export{d as ErrorColors,i as NeutralColors,l as NeutralVariantColors,n as PrimaryColors,s as SecondaryColors,c as SemanticColors,a as TertiaryColors,C as __namedExportsOrder,b as default};
