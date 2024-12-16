/*! For license information please see 9f79d59d.f791eae4.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[75292],{90319:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"api/puppeteer.elementhandle.toelement","title":"ElementHandle.toElement() method","description":"Converts the current handle to the given element type.","source":"@site/../docs/api/puppeteer.elementhandle.toelement.md","sourceDirName":"api","slug":"/api/puppeteer.elementhandle.toelement","permalink":"/next/api/puppeteer.elementhandle.toelement","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"ElementHandle.toElement"},"sidebar":"api","previous":{"title":"ElementHandle.tap","permalink":"/next/api/puppeteer.elementhandle.tap"},"next":{"title":"ElementHandle.touchEnd","permalink":"/next/api/puppeteer.elementhandle.touchend"}}');var l=t(74848),a=t(28453);const s={sidebar_label:"ElementHandle.toElement"},o="ElementHandle.toElement() method",i={},d=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Exceptions",id:"exceptions",level:2},{value:"Example",id:"example",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"elementhandletoelement-method",children:"ElementHandle.toElement() method"})}),"\n",(0,l.jsx)(n.p,{children:"Converts the current handle to the given element type."}),"\n",(0,l.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"class ElementHandle {\n  toElement<K extends keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap>(\n    tagName: K,\n  ): Promise<HandleFor<ElementFor<K>>>;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)("table",{children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:(0,l.jsx)(n.p,{children:"Parameter"})}),(0,l.jsx)("th",{children:(0,l.jsx)(n.p,{children:"Type"})}),(0,l.jsx)("th",{children:(0,l.jsx)(n.p,{children:"Description"})})]})}),(0,l.jsx)("tbody",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(n.p,{children:"tagName"})}),(0,l.jsx)("td",{children:(0,l.jsx)(n.p,{children:"K"})}),(0,l.jsx)("td",{children:(0,l.jsx)(n.p,{children:"The tag name of the desired element type."})})]})})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,l.jsxs)(n.p,{children:["Promise<",(0,l.jsx)(n.a,{href:"/next/api/puppeteer.handlefor",children:"HandleFor"}),"<",(0,l.jsx)(n.a,{href:"/next/api/puppeteer.elementfor",children:"ElementFor"}),"<K>>>"]}),"\n",(0,l.jsx)(n.h2,{id:"exceptions",children:"Exceptions"}),"\n",(0,l.jsxs)(n.p,{children:["An error if the handle does not match. ",(0,l.jsx)(n.strong,{children:"The handle will not be automatically disposed."})]}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"const element: ElementHandle<Element> = await page.$('.class-name-of-anchor');\n// DO NOT DISPOSE `element`, this will be always be the same handle.\nconst anchor: ElementHandle<HTMLAnchorElement> = await element.toElement('a');\n"})})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},21020:(e,n,t)=>{var r=t(96540),l=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,a={},d=null,p=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(p=n.ref),n)s.call(n,r)&&!i.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:l,type:e,key:d,ref:p,props:a,_owner:o.current}}n.Fragment=a,n.jsx=d,n.jsxs=d},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(96540);const l={},a=r.createContext(l);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);