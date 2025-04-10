/*! For license information please see 8becc2a0.df0c2a26.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[34585],{28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>p});var n=r(96540);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}},29698:(e,t)=>{var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(e,t,n){var a=null;if(void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),"key"in t)for(var s in n={},t)"key"!==s&&(n[s]=t[s]);else n=t;return t=n.ref,{$$typeof:r,type:e,key:a,ref:void 0!==t?t:null,props:n}}t.Fragment=n,t.jsx=a,t.jsxs=a},74848:(e,t,r)=>{e.exports=r(29698)},96242:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"api/puppeteer.target.opener","title":"Target.opener() method","description":"Get the target that opened this target. Top-level targets return null.","source":"@site/versioned_docs/version-24.6.1/api/puppeteer.target.opener.md","sourceDirName":"api","slug":"/api/puppeteer.target.opener","permalink":"/api/puppeteer.target.opener","draft":false,"unlisted":false,"tags":[],"version":"24.6.1","frontMatter":{"sidebar_label":"Target.opener"},"sidebar":"api","previous":{"title":"Target.createCDPSession","permalink":"/api/puppeteer.target.createcdpsession"},"next":{"title":"Target.page","permalink":"/api/puppeteer.target.page"}}');var a=r(74848),s=r(28453);const o={sidebar_label:"Target.opener"},p="Target.opener() method",i={},l=[{value:"Signature",id:"signature",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"targetopener-method",children:"Target.opener() method"})}),"\n",(0,a.jsxs)(t.p,{children:["Get the target that opened this target. Top-level targets return ",(0,a.jsx)(t.code,{children:"null"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"class Target {\n  abstract opener(): Target | undefined;\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/puppeteer.target",children:"Target"})," | undefined"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}}}]);