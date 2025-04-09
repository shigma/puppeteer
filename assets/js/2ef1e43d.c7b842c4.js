/*! For license information please see 2ef1e43d.c7b842c4.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61717],{28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>p});var r=t(96540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}},29698:(e,n)=>{var t=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(e,n,r){var a=null;if(void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),"key"in n)for(var s in r={},n)"key"!==s&&(r[s]=n[s]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:a,ref:void 0!==n?n:null,props:r}}n.Fragment=r,n.jsx=a,n.jsxs=a},74848:(e,n,t)=>{e.exports=t(29698)},97325:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"api/puppeteer.innerparams","title":"InnerParams type","description":"Signature","source":"@site/../docs/api/puppeteer.innerparams.md","sourceDirName":"api","slug":"/api/puppeteer.innerparams","permalink":"/next/api/puppeteer.innerparams","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"InnerParams"},"sidebar":"api","previous":{"title":"Handler","permalink":"/next/api/puppeteer.handler"},"next":{"title":"InterceptResolutionAction","permalink":"/next/api/puppeteer.interceptresolutionaction"}}');var a=t(74848),s=t(28453);const i={sidebar_label:"InnerParams"},p="InnerParams type",o={},l=[{value:"Signature",id:"signature",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"innerparams-type",children:"InnerParams type"})}),"\n",(0,a.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"export type InnerParams<T extends unknown[]> = {\n  [K in keyof T]: FlattenHandle<T[K]>;\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"References:"})," ",(0,a.jsx)(n.a,{href:"/next/api/puppeteer.flattenhandle",children:"FlattenHandle"})]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}}}]);