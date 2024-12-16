/*! For license information please see 0b6015b3.3a1a2a62.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3020],{83630:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"api/puppeteer.page.queryobjects","title":"Page.queryObjects() method","description":"This method iterates the JavaScript heap and finds all objects with the given prototype.","source":"@site/../docs/api/puppeteer.page.queryobjects.md","sourceDirName":"api","slug":"/api/puppeteer.page.queryobjects","permalink":"/next/api/puppeteer.page.queryobjects","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Page.queryObjects"},"sidebar":"api","previous":{"title":"Page.pdf","permalink":"/next/api/puppeteer.page.pdf"},"next":{"title":"Page.reload","permalink":"/next/api/puppeteer.page.reload"}}');var n=r(74848),s=r(28453);const p={sidebar_label:"Page.queryObjects"},o="Page.queryObjects() method",i={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"pagequeryobjects-method",children:"Page.queryObjects() method"})}),"\n",(0,n.jsx)(t.p,{children:"This method iterates the JavaScript heap and finds all objects with the given prototype."}),"\n",(0,n.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract queryObjects<Prototype>(\n    prototypeHandle: JSHandle<Prototype>,\n  ): Promise<JSHandle<Prototype[]>>;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Description"})})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"prototypeHandle"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/next/api/puppeteer.jshandle",children:"JSHandle"}),"<Prototype>"]})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"a handle to the object prototype."})})]})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(t.p,{children:["Promise<",(0,n.jsx)(t.a,{href:"/next/api/puppeteer.jshandle",children:"JSHandle"}),"<Prototype[]>>"]}),"\n",(0,n.jsx)(t.p,{children:"Promise which resolves to a handle to an array of objects with this prototype."}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"// Create a Map object\nawait page.evaluate(() => (window.map = new Map()));\n// Get a handle to the Map object prototype\nconst mapPrototype = await page.evaluateHandle(() => Map.prototype);\n// Query all map instances into an array\nconst mapInstances = await page.queryObjects(mapPrototype);\n// Count amount of map objects in heap\nconst count = await page.evaluate(maps => maps.length, mapInstances);\nawait mapInstances.dispose();\nawait mapPrototype.dispose();\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},21020:(e,t,r)=>{var a=r(96540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var a,s={},c=null,l=null;for(a in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)p.call(t,a)&&!i.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:n,type:e,key:c,ref:l,props:s,_owner:o.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>p,x:()=>o});var a=r(96540);const n={},s=a.createContext(n);function p(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:p(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);