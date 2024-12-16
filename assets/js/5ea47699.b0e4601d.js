/*! For license information please see 5ea47699.b0e4601d.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[62543],{47368:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"api/puppeteer.webworker.evaluate","title":"WebWorker.evaluate() method","description":"Evaluates a given function in the worker.","source":"@site/versioned_docs/version-23.10.4/api/puppeteer.webworker.evaluate.md","sourceDirName":"api","slug":"/api/puppeteer.webworker.evaluate","permalink":"/api/puppeteer.webworker.evaluate","draft":false,"unlisted":false,"tags":[],"version":"23.10.4","frontMatter":{"sidebar_label":"WebWorker.evaluate"},"sidebar":"api","previous":{"title":"WebWorker.close","permalink":"/api/puppeteer.webworker.close"},"next":{"title":"WebWorker.evaluateHandle","permalink":"/api/puppeteer.webworker.evaluatehandle"}}');var a=t(74848),s=t(28453);const l={sidebar_label:"WebWorker.evaluate"},i="WebWorker.evaluate() method",o={},u=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"webworkerevaluate-method",children:"WebWorker.evaluate() method"})}),"\n",(0,a.jsxs)(r.p,{children:["Evaluates a given function in the ",(0,a.jsx)(r.a,{href:"/api/puppeteer.webworker",children:"worker"}),"."]}),"\n",(0,a.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-typescript",children:"class WebWorker {\n  evaluate<\n    Params extends unknown[],\n    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,\n  >(func: Func | string, ...args: Params): Promise<Awaited<ReturnType<Func>>>;\n}\n"})}),"\n",(0,a.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:(0,a.jsx)(r.p,{children:"Parameter"})}),(0,a.jsx)("th",{children:(0,a.jsx)(r.p,{children:"Type"})}),(0,a.jsx)("th",{children:(0,a.jsx)(r.p,{children:"Description"})})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(r.p,{children:"func"})}),(0,a.jsx)("td",{children:(0,a.jsx)(r.p,{children:"Func | string"})}),(0,a.jsx)("td",{children:(0,a.jsx)(r.p,{children:"Function to be evaluated."})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(r.p,{children:"args"})}),(0,a.jsx)("td",{children:(0,a.jsx)(r.p,{children:"Params"})}),(0,a.jsx)("td",{children:(0,a.jsxs)(r.p,{children:["Arguments to pass into ",(0,a.jsx)(r.code,{children:"func"}),"."]})})]})]})]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,a.jsx)(r.p,{children:"Promise<Awaited<ReturnType<Func>>>"}),"\n",(0,a.jsxs)(r.p,{children:["The result of ",(0,a.jsx)(r.code,{children:"func"}),"."]}),"\n",(0,a.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,a.jsxs)(r.p,{children:["If the given function returns a promise, ",(0,a.jsx)(r.a,{href:"/api/puppeteer.webworker.evaluate",children:"evaluate"})," will wait for the promise to resolve."]}),"\n",(0,a.jsxs)(r.p,{children:["As a rule of thumb, if the return value of the given function is more complicated than a JSON object (e.g. most classes), then ",(0,a.jsx)(r.a,{href:"/api/puppeteer.webworker.evaluate",children:"evaluate"})," will _likely_ return some truncated value (or ",(0,a.jsx)(r.code,{children:"{}"}),"). This is because we are not returning the actual return value, but a deserialized version as a result of transferring the return value through a protocol to Puppeteer."]}),"\n",(0,a.jsxs)(r.p,{children:["In general, you should use ",(0,a.jsx)(r.a,{href:"/api/puppeteer.webworker.evaluatehandle",children:"evaluateHandle"})," if ",(0,a.jsx)(r.a,{href:"/api/puppeteer.webworker.evaluate",children:"evaluate"})," cannot serialize the return value properly or you need a mutable ",(0,a.jsx)(r.a,{href:"/api/puppeteer.jshandle",children:"handle"})," to the return object."]})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},21020:(e,r,t)=>{var n=t(96540),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,t){var n,s={},u=null,c=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(c=r.ref),r)l.call(r,n)&&!o.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:a,type:e,key:u,ref:c,props:s,_owner:i.current}}r.Fragment=s,r.jsx=u,r.jsxs=u},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>l,x:()=>i});var n=t(96540);const a={},s=n.createContext(a);function l(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);