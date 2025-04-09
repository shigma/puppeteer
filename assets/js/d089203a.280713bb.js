/*! For license information please see d089203a.280713bb.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95884],{28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>i});var n=t(96540);const o={},s=n.createContext(o);function a(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:r},e.children)}},29698:(e,r)=>{var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function o(e,r,n){var o=null;if(void 0!==n&&(o=""+n),void 0!==r.key&&(o=""+r.key),"key"in r)for(var s in n={},r)"key"!==s&&(n[s]=r[s]);else n=r;return r=n.ref,{$$typeof:t,type:e,key:o,ref:void 0!==r?r:null,props:n}}r.Fragment=n,r.jsx=o,r.jsxs=o},74848:(e,r,t)=>{e.exports=t(29698)},85847:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"api/puppeteer.browsercontext.newpage","title":"BrowserContext.newPage() method","description":"Creates a new page in this browser context.","source":"@site/versioned_docs/version-24.6.0/api/puppeteer.browsercontext.newpage.md","sourceDirName":"api","slug":"/api/puppeteer.browsercontext.newpage","permalink":"/api/puppeteer.browsercontext.newpage","draft":false,"unlisted":false,"tags":[],"version":"24.6.0","frontMatter":{"sidebar_label":"BrowserContext.newPage"},"sidebar":"api","previous":{"title":"BrowserContext.deleteCookie","permalink":"/api/puppeteer.browsercontext.deletecookie"},"next":{"title":"BrowserContext.overridePermissions","permalink":"/api/puppeteer.browsercontext.overridepermissions"}}');var o=t(74848),s=t(28453);const a={sidebar_label:"BrowserContext.newPage"},i="BrowserContext.newPage() method",p={},c=[{value:"Signature",id:"signature",level:3}];function l(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"browsercontextnewpage-method",children:"BrowserContext.newPage() method"})}),"\n",(0,o.jsxs)(r.p,{children:["Creates a new ",(0,o.jsx)(r.a,{href:"/api/puppeteer.page",children:"page"})," in this ",(0,o.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"}),"."]}),"\n",(0,o.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"class BrowserContext {\n  abstract newPage(): Promise<Page>;\n}\n"})}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,o.jsxs)(r.p,{children:["Promise<",(0,o.jsx)(r.a,{href:"/api/puppeteer.page",children:"Page"}),">"]})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}}}]);