/*! For license information please see bdddd5cd.d061add4.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3589],{31762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"api/puppeteer.page.authenticate","title":"Page.authenticate() method","description":"Provide credentials for HTTP authentication.","source":"@site/versioned_docs/version-23.11.0/api/puppeteer.page.authenticate.md","sourceDirName":"api","slug":"/api/puppeteer.page.authenticate","permalink":"/api/puppeteer.page.authenticate","draft":false,"unlisted":false,"tags":[],"version":"23.11.0","frontMatter":{"sidebar_label":"Page.authenticate"},"sidebar":"api","previous":{"title":"Page.addStyleTag","permalink":"/api/puppeteer.page.addstyletag"},"next":{"title":"Page.bringToFront","permalink":"/api/puppeteer.page.bringtofront"}}');var a=n(74848),i=n(28453);const s={sidebar_label:"Page.authenticate"},o="Page.authenticate() method",c={},d=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"pageauthenticate-method",children:"Page.authenticate() method"})}),"\n",(0,a.jsxs)(t.p,{children:["Provide credentials for ",(0,a.jsx)(t.code,{children:"HTTP authentication"}),"."]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"Request interception will be turned on behind the scenes to implement authentication. This might affect performance."})}),"\n",(0,a.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract authenticate(credentials: Credentials | null): Promise<void>;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:(0,a.jsx)(t.p,{children:"Parameter"})}),(0,a.jsx)("th",{children:(0,a.jsx)(t.p,{children:"Type"})}),(0,a.jsx)("th",{children:(0,a.jsx)(t.p,{children:"Description"})})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(t.p,{children:"credentials"})}),(0,a.jsx)("td",{children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/puppeteer.credentials",children:"Credentials"})," | null"]})}),(0,a.jsx)("td",{})]})})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,a.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,a.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,a.jsxs)(t.p,{children:["To disable authentication, pass ",(0,a.jsx)(t.code,{children:"null"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},21020:(e,t,n)=>{var r=n(96540),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,i={},d=null,l=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:d,ref:l,props:i,_owner:o.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);