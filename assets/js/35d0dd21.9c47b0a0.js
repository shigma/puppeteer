/*! For license information please see 35d0dd21.9c47b0a0.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[56352],{28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var n=r(96540);const a={},s=n.createContext(a);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}},29698:(e,t)=>{var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(e,t,n){var a=null;if(void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),"key"in t)for(var s in n={},t)"key"!==s&&(n[s]=t[s]);else n=t;return t=n.ref,{$$typeof:r,type:e,key:a,ref:void 0!==t?t:null,props:n}}t.Fragment=n,t.jsx=a,t.jsxs=a},74848:(e,t,r)=>{e.exports=r(29698)},76095:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"api/puppeteer.browsercontext.waitfortarget","title":"BrowserContext.waitForTarget() method","description":"Waits until a target matching the given predicate appears and returns it.","source":"@site/versioned_docs/version-24.6.0/api/puppeteer.browsercontext.waitfortarget.md","sourceDirName":"api","slug":"/api/puppeteer.browsercontext.waitfortarget","permalink":"/api/puppeteer.browsercontext.waitfortarget","draft":false,"unlisted":false,"tags":[],"version":"24.6.0","frontMatter":{"sidebar_label":"BrowserContext.waitForTarget"},"sidebar":"api","previous":{"title":"BrowserContext.targets","permalink":"/api/puppeteer.browsercontext.targets"},"next":{"title":"Page","permalink":"/api/puppeteer.page"}}');var a=r(74848),s=r(28453);const i={sidebar_label:"BrowserContext.waitForTarget"},o="BrowserContext.waitForTarget() method",p={},l=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"browsercontextwaitfortarget-method",children:"BrowserContext.waitForTarget() method"})}),"\n",(0,a.jsxs)(t.p,{children:["Waits until a ",(0,a.jsx)(t.a,{href:"/api/puppeteer.target",children:"target"})," matching the given ",(0,a.jsx)(t.code,{children:"predicate"})," appears and returns it."]}),"\n",(0,a.jsxs)(t.p,{children:["This will look all open ",(0,a.jsx)(t.a,{href:"/api/puppeteer.browsercontext",children:"browser contexts"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"class BrowserContext {\n  waitForTarget(\n    predicate: (x: Target) => boolean | Promise<boolean>,\n    options?: WaitForTargetOptions,\n  ): Promise<Target>;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:(0,a.jsx)(t.p,{children:"Parameter"})}),(0,a.jsx)("th",{children:(0,a.jsx)(t.p,{children:"Type"})}),(0,a.jsx)("th",{children:(0,a.jsx)(t.p,{children:"Description"})})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(t.p,{children:"predicate"})}),(0,a.jsx)("td",{children:(0,a.jsxs)(t.p,{children:["(x: ",(0,a.jsx)(t.a,{href:"/api/puppeteer.target",children:"Target"}),") => boolean | Promise<boolean>"]})}),(0,a.jsx)("td",{})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(t.p,{children:"options"})}),(0,a.jsx)("td",{children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"/api/puppeteer.waitfortargetoptions",children:"WaitForTargetOptions"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"(Optional)"})})})]})]})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,a.jsxs)(t.p,{children:["Promise<",(0,a.jsx)(t.a,{href:"/api/puppeteer.target",children:"Target"}),">"]}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(t.p,{children:["Finding a target for a page opened via ",(0,a.jsx)(t.code,{children:"window.open"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"await page.evaluate(() => window.open('https://www.example.com/'));\nconst newWindowTarget = await browserContext.waitForTarget(\n  target => target.url() === 'https://www.example.com/',\n);\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}}}]);