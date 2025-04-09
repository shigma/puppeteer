/*! For license information please see 99485b3a.f383b70e.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40968],{28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>d});var r=n(96540);const i={},s=r.createContext(i);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}},29698:(e,t)=>{var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function i(e,t,r){var i=null;if(void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),"key"in t)for(var s in r={},t)"key"!==s&&(r[s]=t[s]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:i,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=i,t.jsxs=i},61706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"api/puppeteer.eventemitter.once","title":"EventEmitter.once() method","description":"Like on but the listener will only be fired once and then it will be removed.","source":"@site/versioned_docs/version-24.6.0/api/puppeteer.eventemitter.once.md","sourceDirName":"api","slug":"/api/puppeteer.eventemitter.once","permalink":"/api/puppeteer.eventemitter.once","draft":false,"unlisted":false,"tags":[],"version":"24.6.0","frontMatter":{"sidebar_label":"EventEmitter.once"},"sidebar":"api","previous":{"title":"EventEmitter.on","permalink":"/api/puppeteer.eventemitter.on"},"next":{"title":"EventEmitter.removeAllListeners","permalink":"/api/puppeteer.eventemitter.removealllisteners"}}');var i=n(74848),s=n(28453);const l={sidebar_label:"EventEmitter.once"},d="EventEmitter.once() method",c={},o=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"eventemitteronce-method",children:"EventEmitter.once() method"})}),"\n",(0,i.jsxs)(t.p,{children:["Like ",(0,i.jsx)(t.code,{children:"on"})," but the listener will only be fired once and then it will be removed."]}),"\n",(0,i.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"class EventEmitter {\n  once<Key extends keyof EventsWithWildcard<Events>>(\n    type: Key,\n    handler: Handler<EventsWithWildcard<Events>[Key]>,\n  ): this;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Parameter"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Type"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Description"})})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"type"})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"Key"})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"the event you'd like to listen to"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"handler"})}),(0,i.jsx)("td",{children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/api/puppeteer.handler",children:"Handler"}),"<",(0,i.jsx)(t.a,{href:"/api/puppeteer.eventswithwildcard",children:"EventsWithWildcard"}),"<Events>[Key]>"]})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"the handler function to run when the event occurs"})})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,i.jsx)(t.p,{children:"this"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"this"})," to enable you to chain method calls."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},74848:(e,t,n)=>{e.exports=n(29698)}}]);