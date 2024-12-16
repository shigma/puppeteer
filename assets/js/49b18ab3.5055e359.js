/*! For license information please see 49b18ab3.5055e359.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[98337],{49392:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"api/puppeteer.page.emulateidlestate","title":"Page.emulateIdleState() method","description":"Emulates the idle state. If no arguments set, clears idle state emulation.","source":"@site/versioned_docs/version-23.10.4/api/puppeteer.page.emulateidlestate.md","sourceDirName":"api","slug":"/api/puppeteer.page.emulateidlestate","permalink":"/api/puppeteer.page.emulateidlestate","draft":false,"unlisted":false,"tags":[],"version":"23.10.4","frontMatter":{"sidebar_label":"Page.emulateIdleState"},"sidebar":"api","previous":{"title":"Page.emulateCPUThrottling","permalink":"/api/puppeteer.page.emulatecputhrottling"},"next":{"title":"Page.emulateMediaFeatures","permalink":"/api/puppeteer.page.emulatemediafeatures"}}');var n=r(74848),s=r(28453);const l={sidebar_label:"Page.emulateIdleState"},i="Page.emulateIdleState() method",d={},o=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"pageemulateidlestate-method",children:"Page.emulateIdleState() method"})}),"\n",(0,n.jsx)(t.p,{children:"Emulates the idle state. If no arguments set, clears idle state emulation."}),"\n",(0,n.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract emulateIdleState(overrides?: {\n    isUserActive: boolean;\n    isScreenUnlocked: boolean;\n  }): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Description"})})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"overrides"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"{ isUserActive: boolean; isScreenUnlocked: boolean; }"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"(Optional)"})," Mock idle state. If not set, clears idle overrides"]})})]})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"// set idle emulation\nawait page.emulateIdleState({isUserActive: true, isScreenUnlocked: false});\n\n// do some checks here\n...\n\n// clear idle emulation\nawait page.emulateIdleState();\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},21020:(e,t,r)=>{var a=r(96540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,r){var a,s={},o=null,c=null;for(a in void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,a)&&!d.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:n,type:e,key:o,ref:c,props:s,_owner:i.current}}t.Fragment=s,t.jsx=o,t.jsxs=o},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>i});var a=r(96540);const n={},s=a.createContext(n);function l(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);