/*! For license information please see a3ad79a6.4a364c60.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86689],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(96540);const r={},l=o.createContext(r);function s(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(l.Provider,{value:n},e.children)}},29698:(e,n)=>{var t=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function r(e,n,o){var r=null;if(void 0!==o&&(r=""+o),void 0!==n.key&&(r=""+n.key),"key"in n)for(var l in o={},n)"key"!==l&&(o[l]=n[l]);else o=n;return n=o.ref,{$$typeof:t,type:e,key:r,ref:void 0!==n?n:null,props:o}}n.Fragment=o,n.jsx=r,n.jsxs=r},74848:(e,n,t)=>{e.exports=t(29698)},90193:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"api/puppeteer.elementhandle.boxmodel","title":"ElementHandle.boxModel() method","description":"This method returns boxes of the element, or null if the element is not part of the layout (example none).","source":"@site/versioned_docs/version-24.6.1/api/puppeteer.elementhandle.boxmodel.md","sourceDirName":"api","slug":"/api/puppeteer.elementhandle.boxmodel","permalink":"/api/puppeteer.elementhandle.boxmodel","draft":false,"unlisted":false,"tags":[],"version":"24.6.1","frontMatter":{"sidebar_label":"ElementHandle.boxModel"},"sidebar":"api","previous":{"title":"ElementHandle.boundingBox","permalink":"/api/puppeteer.elementhandle.boundingbox"},"next":{"title":"ElementHandle.click","permalink":"/api/puppeteer.elementhandle.click"}}');var r=t(74848),l=t(28453);const s={sidebar_label:"ElementHandle.boxModel"},a="ElementHandle.boxModel() method",i={},d=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"elementhandleboxmodel-method",children:"ElementHandle.boxModel() method"})}),"\n",(0,r.jsxs)(n.p,{children:["This method returns boxes of the element, or ",(0,r.jsx)(n.code,{children:"null"})," if the element is ",(0,r.jsx)(n.a,{href:"https://drafts.csswg.org/css-display-4/#box-generation",children:"not part of the layout"})," (example: ",(0,r.jsx)(n.code,{children:"display: none"}),")."]}),"\n",(0,r.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class ElementHandle {\n  boxModel(): Promise<BoxModel | null>;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.p,{children:["Promise<",(0,r.jsx)(n.a,{href:"/api/puppeteer.boxmodel",children:"BoxModel"})," | null>"]}),"\n",(0,r.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(n.p,{children:["Boxes are represented as an array of points; Each Point is an object ",(0,r.jsx)(n.code,{children:"{x, y}"}),". Box points are sorted clock-wise."]})]})}function c(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}}}]);