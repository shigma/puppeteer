/*! For license information please see dc9d61cb.0a99f5e2.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36675],{7959:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"api/puppeteer.puppeteernode.trimcache","title":"PuppeteerNode.trimCache() method","description":"Removes all non-current Firefox and Chrome binaries in the cache directory identified by the provided Puppeteer configuration. The current browser version is determined by resolving PUPPETEER_REVISIONS from Puppeteer unless configuration.browserRevision is provided.","source":"@site/../docs/api/puppeteer.puppeteernode.trimcache.md","sourceDirName":"api","slug":"/api/puppeteer.puppeteernode.trimcache","permalink":"/next/api/puppeteer.puppeteernode.trimcache","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"PuppeteerNode.trimCache"},"sidebar":"api","previous":{"title":"PuppeteerNode.launch","permalink":"/next/api/puppeteer.puppeteernode.launch"},"next":{"title":"Puppeteer.clearCustomQueryHandlers","permalink":"/next/api/puppeteer.puppeteer.clearcustomqueryhandlers"}}');var o=t(74848),i=t(28453);const s={sidebar_label:"PuppeteerNode.trimCache"},p="PuppeteerNode.trimCache() method",a={},c=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2}];function d(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"puppeteernodetrimcache-method",children:"PuppeteerNode.trimCache() method"})}),"\n",(0,o.jsxs)(r.p,{children:["Removes all non-current Firefox and Chrome binaries in the cache directory identified by the provided Puppeteer configuration. The current browser version is determined by resolving PUPPETEER_REVISIONS from Puppeteer unless ",(0,o.jsx)(r.code,{children:"configuration.browserRevision"})," is provided."]}),"\n",(0,o.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"class PuppeteerNode {\n  trimCache(): Promise<void>;\n}\n"})}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,o.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,o.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,o.jsx)(r.p,{children:"Note that the method does not check if any other Puppeteer versions installed on the host that use the same cache directory require the non-current binaries."})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},21020:(e,r,t)=>{var n=t(96540),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,p=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,i={},c=null,d=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(d=r.ref),r)s.call(r,n)&&!a.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:o,type:e,key:c,ref:d,props:i,_owner:p.current}}r.Fragment=i,r.jsx=c,r.jsxs=c},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>p});var n=t(96540);const o={},i=n.createContext(o);function s(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function p(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);