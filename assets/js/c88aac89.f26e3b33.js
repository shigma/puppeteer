/*! For license information please see c88aac89.f26e3b33.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46274],{40255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"api/puppeteer.elementhandle._","title":"ElementHandle.$() method","description":"Queries the current element for an element matching the given selector.","source":"@site/../docs/api/puppeteer.elementhandle._.md","sourceDirName":"api","slug":"/api/puppeteer.elementhandle._","permalink":"/next/api/puppeteer.elementhandle._","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"ElementHandle.$"},"sidebar":"api","previous":{"title":"ElementHandle","permalink":"/next/api/puppeteer.elementhandle"},"next":{"title":"ElementHandle.$$","permalink":"/next/api/puppeteer.elementhandle.__"}}');var s=n(74848),l=n(28453);const a={sidebar_label:"ElementHandle.$"},i="ElementHandle.$() method",d={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"elementhandle-method",children:"ElementHandle.$() method"})}),"\n",(0,s.jsx)(t.p,{children:"Queries the current element for an element matching the given selector."}),"\n",(0,s.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"class ElementHandle {\n  $<Selector extends string>(\n    selector: Selector,\n  ): Promise<ElementHandle<NodeFor<Selector>> | null>;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Description"})})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"selector"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Selector"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#selectors",children:"selector"})," to query the page for. ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",children:"CSS selectors"})," can be passed as-is and a ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#non-css-selectors",children:"Puppeteer-specific selector syntax"})," allows quering by ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#text-selectors--p-text",children:"text"}),", ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#aria-selectors--p-aria",children:"a11y role and name"}),", and ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath",children:"xpath"})," and ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom",children:"combining these queries across shadow roots"}),". Alternatively, you can specify the selector type using a ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#prefixed-selector-syntax",children:"prefix"}),"."]})})]})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(t.p,{children:["Promise<",(0,s.jsx)(t.a,{href:"/next/api/puppeteer.elementhandle",children:"ElementHandle"}),"<",(0,s.jsx)(t.a,{href:"/next/api/puppeteer.nodefor",children:"NodeFor"}),"<Selector>> | null>"]}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.a,{href:"/next/api/puppeteer.elementhandle",children:"element handle"})," to the first element matching the given selector. Otherwise, ",(0,s.jsx)(t.code,{children:"null"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},21020:(e,t,n)=>{var r=n(96540),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,n){var r,l={},p=null,o=null;for(r in void 0!==n&&(p=""+n),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(o=t.ref),t)a.call(t,r)&&!d.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:s,type:e,key:p,ref:o,props:l,_owner:i.current}}t.Fragment=l,t.jsx=p,t.jsxs=p},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(96540);const s={},l=r.createContext(s);function a(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);