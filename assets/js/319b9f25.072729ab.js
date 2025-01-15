/*! For license information please see 319b9f25.072729ab.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45260],{2911:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>i});const a=JSON.parse('{"id":"api/puppeteer.locator.race","title":"Locator.race() method","description":"Creates a race between multiple locators trying to locate elements in parallel but ensures that only a single element receives the action.","source":"@site/versioned_docs/version-24.1.0/api/puppeteer.locator.race.md","sourceDirName":"api","slug":"/api/puppeteer.locator.race","permalink":"/api/puppeteer.locator.race","draft":false,"unlisted":false,"tags":[],"version":"24.1.0","frontMatter":{"sidebar_label":"Locator.race"},"sidebar":"api","previous":{"title":"Locator.map","permalink":"/api/puppeteer.locator.map"},"next":{"title":"Locator.scroll","permalink":"/api/puppeteer.locator.scroll"}}');var n=t(74848),o=t(28453);const s={sidebar_label:"Locator.race"},c="Locator.race() method",l={},i=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"locatorrace-method",children:"Locator.race() method"})}),"\n",(0,n.jsx)(r.p,{children:"Creates a race between multiple locators trying to locate elements in parallel but ensures that only a single element receives the action."}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Locator {\n  static race<Locators extends readonly unknown[] | []>(\n    locators: Locators,\n  ): Locator<AwaitedLocator<Locators[number]>>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"locators"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Locators"})}),(0,n.jsx)("td",{})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/puppeteer.locator",children:"Locator"}),"<",(0,n.jsx)(r.a,{href:"/api/puppeteer.awaitedlocator",children:"AwaitedLocator"}),"<Locators[number]>>"]})]})}function d(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},21020:(e,r,t)=>{var a=t(96540),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var a,o={},i=null,p=null;for(a in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(p=r.ref),r)s.call(r,a)&&!l.hasOwnProperty(a)&&(o[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps)void 0===o[a]&&(o[a]=r[a]);return{$$typeof:n,type:e,key:i,ref:p,props:o,_owner:c.current}}r.Fragment=o,r.jsx=i,r.jsxs=i},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>c});var a=t(96540);const n={},o=a.createContext(n);function s(e){const r=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(o.Provider,{value:r},e.children)}}}]);