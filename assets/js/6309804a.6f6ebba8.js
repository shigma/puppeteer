/*! For license information please see 6309804a.6f6ebba8.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63401],{28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>i});var n=t(96540);const o={},s=n.createContext(o);function a(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:r},e.children)}},29698:(e,r)=>{var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function o(e,r,n){var o=null;if(void 0!==n&&(o=""+n),void 0!==r.key&&(o=""+r.key),"key"in r)for(var s in n={},r)"key"!==s&&(n[s]=r[s]);else n=r;return r=n.ref,{$$typeof:t,type:e,key:o,ref:void 0!==r?r:null,props:n}}r.Fragment=n,r.jsx=o,r.jsxs=o},74848:(e,r,t)=>{e.exports=t(29698)},82247:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"api/puppeteer.target.worker","title":"Target.worker() method","description":"If the target is not of type \\"serviceworker\\" or \\"sharedworker\\", returns null.","source":"@site/../docs/api/puppeteer.target.worker.md","sourceDirName":"api","slug":"/api/puppeteer.target.worker","permalink":"/next/api/puppeteer.target.worker","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Target.worker"},"sidebar":"api","previous":{"title":"Target.url","permalink":"/next/api/puppeteer.target.url"},"next":{"title":"CDPSession","permalink":"/next/api/puppeteer.cdpsession"}}');var o=t(74848),s=t(28453);const a={sidebar_label:"Target.worker"},i="Target.worker() method",p={},l=[{value:"Signature",id:"signature",level:3}];function c(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"targetworker-method",children:"Target.worker() method"})}),"\n",(0,o.jsxs)(r.p,{children:["If the target is not of type ",(0,o.jsx)(r.code,{children:'"service_worker"'})," or ",(0,o.jsx)(r.code,{children:'"shared_worker"'}),", returns ",(0,o.jsx)(r.code,{children:"null"}),"."]}),"\n",(0,o.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"class Target {\n  worker(): Promise<WebWorker | null>;\n}\n"})}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,o.jsxs)(r.p,{children:["Promise<",(0,o.jsx)(r.a,{href:"/next/api/puppeteer.webworker",children:"WebWorker"})," | null>"]})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}}}]);