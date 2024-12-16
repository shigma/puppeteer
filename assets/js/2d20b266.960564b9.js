/*! For license information please see 2d20b266.960564b9.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[38419],{82416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"api/puppeteer.eventemitter.off","title":"EventEmitter.off() method","description":"Remove an event listener from firing.","source":"@site/versioned_docs/version-23.10.4/api/puppeteer.eventemitter.off.md","sourceDirName":"api","slug":"/api/puppeteer.eventemitter.off","permalink":"/api/puppeteer.eventemitter.off","draft":false,"unlisted":false,"tags":[],"version":"23.10.4","frontMatter":{"sidebar_label":"EventEmitter.off"},"sidebar":"api","previous":{"title":"EventEmitter.listenerCount","permalink":"/api/puppeteer.eventemitter.listenercount"},"next":{"title":"EventEmitter.on","permalink":"/api/puppeteer.eventemitter.on"}}');var i=n(74848),s=n(28453);const o={sidebar_label:"EventEmitter.off"},d="EventEmitter.off() method",l={},a=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"eventemitteroff-method",children:"EventEmitter.off() method"})}),"\n",(0,i.jsx)(t.p,{children:"Remove an event listener from firing."}),"\n",(0,i.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"class EventEmitter {\n  off<Key extends keyof EventsWithWildcard<Events>>(\n    type: Key,\n    handler?: Handler<EventsWithWildcard<Events>[Key]>,\n  ): this;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Parameter"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Type"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Description"})})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"type"})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"Key"})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"the event type you'd like to stop listening to."})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"handler"})}),(0,i.jsx)("td",{children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/api/puppeteer.handler",children:"Handler"}),"<",(0,i.jsx)(t.a,{href:"/api/puppeteer.eventswithwildcard",children:"EventsWithWildcard"}),"<Events>[Key]>"]})}),(0,i.jsx)("td",{children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"(Optional)"})," the function that should be removed."]})})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,i.jsx)(t.p,{children:"this"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"this"})," to enable you to chain method calls."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},21020:(e,t,n)=>{var r=n(96540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,s={},a=null,c=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,r)&&!l.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:a,ref:c,props:s,_owner:d.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var r=n(96540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);