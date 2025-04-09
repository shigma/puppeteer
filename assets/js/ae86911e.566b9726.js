/*! For license information please see ae86911e.566b9726.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51039],{28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>c});var t=r(96540);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}},29698:(e,n)=>{var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function o(e,n,t){var o=null;if(void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),"key"in n)for(var s in t={},n)"key"!==s&&(t[s]=n[s]);else t=n;return n=t.ref,{$$typeof:r,type:e,key:o,ref:void 0!==n?n:null,props:t}}n.Fragment=t,n.jsx=o,n.jsxs=o},74848:(e,n,r)=>{e.exports=r(29698)},90616:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"guides/browser-management","title":"Browser management","description":"Usually, you start working with Puppeteer by either launching launching or connecting to a browser.","source":"@site/versioned_docs/version-24.6.0/guides/browser-management.md","sourceDirName":"guides","slug":"/guides/browser-management","permalink":"/guides/browser-management","draft":false,"unlisted":false,"tags":[],"version":"24.6.0","frontMatter":{},"sidebar":"docs","previous":{"title":"Core concepts","permalink":"/category/core-concepts"},"next":{"title":"Page interactions","permalink":"/guides/page-interactions"}}');var o=r(74848),s=r(28453);const a={},c="Browser management",i={},p=[{value:"Launching a browser",id:"launching-a-browser",level:2},{value:"Closing a browser",id:"closing-a-browser",level:2},{value:"Browser contexts",id:"browser-contexts",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Connecting to a running browser",id:"connecting-to-a-running-browser",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"browser-management",children:"Browser management"})}),"\n",(0,o.jsxs)(n.p,{children:["Usually, you start working with Puppeteer by either launching ",(0,o.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.puppeteernode.launch",children:"launching"})," or ",(0,o.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.puppeteernode.connect",children:"connecting"})," to a browser."]}),"\n",(0,o.jsx)(n.h2,{id:"launching-a-browser",children:"Launching a browser"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch();\n\nconst page = await browser.newPage();\n\n// ...\n"})}),"\n",(0,o.jsx)(n.h2,{id:"closing-a-browser",children:"Closing a browser"}),"\n",(0,o.jsxs)(n.p,{children:["To gracefully close the browser, you use the ",(0,o.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.browser.close",children:(0,o.jsx)(n.code,{children:"browser.close()"})})," method:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch();\n\nconst page = await browser.newPage();\n\nawait browser.close();\n"})}),"\n",(0,o.jsx)(n.h2,{id:"browser-contexts",children:"Browser contexts"}),"\n",(0,o.jsxs)(n.p,{children:["If you need to isolate your automation tasks, use ",(0,o.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.browser.createbrowsercontext/",children:"BrowserContexts"}),". Cookies and local storage are not shared between browser contexts. Also, you can close all pages in the context by closing the context."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch();\n\nconst context = await browser.createBrowserContext();\n\nconst page1 = await context.newPage();\nconst page2 = await context.newPage();\n\nawait context.close();\n"})}),"\n",(0,o.jsx)(n.h2,{id:"permissions",children:"Permissions"}),"\n",(0,o.jsx)(n.p,{children:"You can also configure permissions for a browser context:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch();\nconst context = browser.defaultBrowserContext();\n\nawait context.overridePermissions('https://html5demos.com', ['geolocation']);\n"})}),"\n",(0,o.jsx)(n.h2,{id:"connecting-to-a-running-browser",children:"Connecting to a running browser"}),"\n",(0,o.jsxs)(n.p,{children:["If you launched a browser outside of Puppeteer, you can connect to it using ",(0,o.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.puppeteernode.connect/",children:(0,o.jsx)(n.code,{children:"connect"})})," method. Usually, you can grab a WebSocket endpoint URL from the browser output:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const browser = await puppeteer.connect({\n  browserWSEndpoint: 'ws://127.0.0.1:9222/...',\n});\n\nconst page = await browser.newPage();\n\nbrowser.disconnect();\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Unlike ",(0,o.jsx)(n.code,{children:"browser.close()"}),", ",(0,o.jsx)(n.code,{children:"browser.disconnect()"})," does not shut down the browser or close any pages."]})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}}}]);