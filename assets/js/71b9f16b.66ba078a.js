/*! For license information please see 71b9f16b.66ba078a.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95187],{28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var t=n(96540);const s={},d=t.createContext(s);function i(e){const r=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:r},e.children)}},29698:(e,r)=>{var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function s(e,r,t){var s=null;if(void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),"key"in r)for(var d in t={},r)"key"!==d&&(t[d]=r[d]);else t=r;return r=t.ref,{$$typeof:n,type:e,key:s,ref:void 0!==r?r:null,props:t}}r.Fragment=t,r.jsx=s,r.jsxs=s},51998:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"api/puppeteer.mouse.draganddrop","title":"Mouse.dragAndDrop() method","description":"Performs a drag, dragenter, dragover, and drop in sequence.","source":"@site/../docs/api/puppeteer.mouse.draganddrop.md","sourceDirName":"api","slug":"/api/puppeteer.mouse.draganddrop","permalink":"/next/api/puppeteer.mouse.draganddrop","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Mouse.dragAndDrop"},"sidebar":"api","previous":{"title":"Mouse.drag","permalink":"/next/api/puppeteer.mouse.drag"},"next":{"title":"Mouse.dragEnter","permalink":"/next/api/puppeteer.mouse.dragenter"}}');var s=n(74848),d=n(28453);const i={sidebar_label:"Mouse.dragAndDrop"},o="Mouse.dragAndDrop() method",a={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function c(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"mousedraganddrop-method",children:"Mouse.dragAndDrop() method"})}),"\n",(0,s.jsx)(r.p,{children:"Performs a drag, dragenter, dragover, and drop in sequence."}),"\n",(0,s.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class Mouse {\n  abstract dragAndDrop(\n    start: Point,\n    target: Point,\n    options?: {\n      delay?: number;\n    },\n  ): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"start"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/next/api/puppeteer.point",children:"Point"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"point to drag from"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"target"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/next/api/puppeteer.point",children:"Point"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"point to drop on"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"options"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"{ delay?: number; }"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"(Optional)"})," An object of options. Accepts delay which, if specified, is the time to wait between ",(0,s.jsx)(r.code,{children:"dragover"})," and ",(0,s.jsx)(r.code,{children:"drop"})," in milliseconds. Defaults to 0."]})})]})]})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(r.p,{children:"Promise<void>"})]})}function l(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},74848:(e,r,n)=>{e.exports=n(29698)}}]);