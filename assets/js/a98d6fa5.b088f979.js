/*! For license information please see a98d6fa5.b088f979.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23539],{35732:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>d,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"api/puppeteer.elementhandle.drag","title":"ElementHandle.drag() method","description":"Drags an element over the given element or point.","source":"@site/versioned_docs/version-23.11.1/api/puppeteer.elementhandle.drag.md","sourceDirName":"api","slug":"/api/puppeteer.elementhandle.drag","permalink":"/api/puppeteer.elementhandle.drag","draft":false,"unlisted":false,"tags":[],"version":"23.11.1","frontMatter":{"sidebar_label":"ElementHandle.drag"},"sidebar":"api","previous":{"title":"ElementHandle.contentFrame","permalink":"/api/puppeteer.elementhandle.contentframe"},"next":{"title":"ElementHandle.dragAndDrop","permalink":"/api/puppeteer.elementhandle.draganddrop"}}');var a=r(74848),l=r(28453);const d={sidebar_label:"ElementHandle.drag"},s="ElementHandle.drag() method",i={},o=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"elementhandledrag-method",children:"ElementHandle.drag() method"})}),"\n",(0,a.jsx)(n.p,{children:"Drags an element over the given element or point."}),"\n",(0,a.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"class ElementHandle {\n  drag(\n    this: ElementHandle<Element>,\n    target: Point | ElementHandle<Element>,\n  ): Promise<Protocol.Input.DragData | void>;\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:(0,a.jsx)(n.p,{children:"Parameter"})}),(0,a.jsx)("th",{children:(0,a.jsx)(n.p,{children:"Type"})}),(0,a.jsx)("th",{children:(0,a.jsx)(n.p,{children:"Description"})})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(n.p,{children:"this"})}),(0,a.jsx)("td",{children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<Element>"]})}),(0,a.jsx)("td",{})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(n.p,{children:"target"})}),(0,a.jsx)("td",{children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/api/puppeteer.point",children:"Point"})," | ",(0,a.jsx)(n.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<Element>"]})}),(0,a.jsx)("td",{})]})]})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,a.jsx)(n.p,{children:"Promise<Protocol.Input.DragData | void>"}),"\n",(0,a.jsx)(n.p,{children:"DEPRECATED. When drag interception is enabled, the drag payload is returned."})]})}function c(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},21020:(e,n,r)=>{var t=r(96540),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,r){var t,l={},o=null,p=null;for(t in void 0!==r&&(o=""+r),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(p=n.ref),n)d.call(n,t)&&!i.hasOwnProperty(t)&&(l[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===l[t]&&(l[t]=n[t]);return{$$typeof:a,type:e,key:o,ref:p,props:l,_owner:s.current}}n.Fragment=l,n.jsx=o,n.jsxs=o},74848:(e,n,r)=>{e.exports=r(21020)},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>s});var t=r(96540);const a={},l=t.createContext(a);function d(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);