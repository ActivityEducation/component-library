import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./iframe-C3uWE8cP.js";import{P as h}from"./index-C1K_DMPJ.js";import{B as y}from"./index-DgNSwxsC.js";import{T as L,t as s}from"./index-0UhJA7dS.js";import"./index-CPXLxjDA.js";const w={title:"Components/ProgressBar",component:h,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"The current value of the progress bar (0-100).",defaultValue:50},max:{control:{type:"number",min:1,step:1},description:"The maximum value of the progress bar.",defaultValue:100}},decorators:[r=>e.jsx(L,{theme:s,children:e.jsx("div",{style:{padding:s.spacing.xl,backgroundColor:s.colors.background.default,width:"100%",maxWidth:"600px"},children:e.jsx(r,{})})})]},l={args:{value:0}},c={args:{value:25}},d={args:{value:50}},m={args:{value:75}},g={args:{value:100}},p={args:{value:75,max:200}},u={render:r=>{const[a,t]=x.useState(r.value||0),i=()=>{t(o=>Math.min(o+10,r.max||100))},f=()=>{t(o=>Math.max(o-10,0))},n=()=>{t(0)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:s.spacing.md,width:"100%"},children:[e.jsx(h,{value:a,max:r.max}),e.jsxs("p",{style:{...s.typography.bodySmall,textAlign:"center",color:s.colors.neutral[50]},children:["Current Progress: ",a," / ",r.max]}),e.jsxs("div",{style:{display:"flex",gap:s.spacing.sm,justifyContent:"center"},children:[e.jsx(y,{size:"sm",onClick:f,disabled:a===0,children:"Decrease"}),e.jsx(y,{size:"sm",onClick:i,disabled:a===(r.max||100),children:"Increase"}),e.jsx(y,{size:"sm",variant:"ghost",onClick:n,children:"Reset"})]})]})},args:{value:30,max:100}},v={render:()=>{const[r,a]=x.useState(0),[t,i]=x.useState(!1);x.useEffect(()=>{let n;return t&&r<100?n=setInterval(()=>{a(o=>{const P=o+Math.floor(Math.random()*10)+1;return P>=100?(clearInterval(n),i(!1),100):P})},300):!t&&r===100&&setTimeout(()=>a(0),1e3),()=>clearInterval(n)},[t,r]);const f=()=>{i(!0),a(0)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:s.spacing.md,width:"100%"},children:[e.jsx(h,{value:r,max:100}),e.jsx("p",{style:{...s.typography.bodySmall,textAlign:"center",color:s.colors.neutral[50]},children:t?`Loading... ${r}%`:r===100?"Complete!":"Ready to Load"}),e.jsx("div",{style:{display:"flex",gap:s.spacing.sm,justifyContent:"center"},children:e.jsx(y,{onClick:f,disabled:t,children:t?"Loading...":"Start Loading"})})]})},args:{value:0,max:100}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: 25
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    value: 75
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: 75,
    max: 200 // Example: 75 out of 200
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [progress, setProgress] = useState(args.value || 0);
    const increment = () => {
      setProgress(prev => Math.min(prev + 10, args.max || 100));
    };
    const decrement = () => {
      setProgress(prev => Math.max(prev - 10, 0));
    };
    const reset = () => {
      setProgress(0);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing.md,
      width: '100%'
    }}>
        <ProgressBar value={progress} max={args.max} />
        <p style={{
        ...theme.typography.bodySmall,
        textAlign: 'center',
        color: theme.colors.neutral['50']
      }}>
          Current Progress: {progress} / {args.max}
        </p>
        <div style={{
        display: 'flex',
        gap: theme.spacing.sm,
        justifyContent: 'center'
      }}>
          <Button size="sm" onClick={decrement} disabled={progress === 0}>
            Decrease
          </Button>
          <Button size="sm" onClick={increment} disabled={progress === (args.max || 100)}>
            Increase
          </Button>
          <Button size="sm" variant="ghost" onClick={reset}>
            Reset
          </Button>
        </div>
      </div>;
  },
  args: {
    value: 30,
    max: 100
  }
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      let interval: number;
      if (isLoading && progress < 100) {
        interval = setInterval(() => {
          setProgress(prev => {
            const newProgress = prev + Math.floor(Math.random() * 10) + 1; // Random increment
            if (newProgress >= 100) {
              clearInterval(interval);
              setIsLoading(false);
              return 100;
            }
            return newProgress;
          });
        }, 300); // Update every 300ms
      } else if (!isLoading && progress === 100) {
        // Reset after a short delay if fully loaded
        setTimeout(() => setProgress(0), 1000);
      }
      return () => clearInterval(interval);
    }, [isLoading, progress]);
    const startLoading = () => {
      setIsLoading(true);
      setProgress(0); // Reset progress when starting
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing.md,
      width: '100%'
    }}>
        <ProgressBar value={progress} max={100} />
        <p style={{
        ...theme.typography.bodySmall,
        textAlign: 'center',
        color: theme.colors.neutral['50']
      }}>
          {isLoading ? \`Loading... \${progress}%\` : progress === 100 ? 'Complete!' : 'Ready to Load'}
        </p>
        <div style={{
        display: 'flex',
        gap: theme.spacing.sm,
        justifyContent: 'center'
      }}>
          <Button onClick={startLoading} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Start Loading'}
          </Button>
        </div>
      </div>;
  },
  args: {
    value: 0,
    max: 100
  }
}`,...v.parameters?.docs?.source}}};const k=["ZeroProgress","TwentyFivePercent","FiftyPercent","SeventyFivePercent","FullProgress","CustomMax","Interactive","AnimatedLoading"];export{v as AnimatedLoading,p as CustomMax,d as FiftyPercent,g as FullProgress,u as Interactive,m as SeventyFivePercent,c as TwentyFivePercent,l as ZeroProgress,k as __namedExportsOrder,w as default};
