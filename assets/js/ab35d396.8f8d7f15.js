/*! For license information please see ab35d396.8f8d7f15.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83584],{61245:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"api/puppeteer.browserevent","title":"BrowserEvent enum","description":"All the events a browser instance may emit.","source":"@site/versioned_docs/version-23.10.4/api/puppeteer.browserevent.md","sourceDirName":"api","slug":"/api/puppeteer.browserevent","permalink":"/api/puppeteer.browserevent","draft":false,"unlisted":false,"tags":[],"version":"23.10.4","frontMatter":{"sidebar_label":"BrowserEvent"},"sidebar":"api","previous":{"title":"BrowserContextOptions","permalink":"/api/puppeteer.browsercontextoptions"},"next":{"title":"BrowserEvents","permalink":"/api/puppeteer.browserevents"}}');var s=n(74848),i=n(28453);const c={sidebar_label:"BrowserEvent"},a="BrowserEvent enum",d={},o=[{value:"Signature",id:"signature",level:3},{value:"Enumeration Members",id:"enumeration-members",level:2}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"browserevent-enum",children:"BrowserEvent enum"})}),"\n",(0,s.jsxs)(r.p,{children:["All the events a ",(0,s.jsx)(r.a,{href:"/api/puppeteer.browser",children:"browser instance"})," may emit."]}),"\n",(0,s.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"export declare const enum BrowserEvent\n"})}),"\n",(0,s.jsx)(r.h2,{id:"enumeration-members",children:"Enumeration Members"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Member"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Value"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Disconnected"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:'"disconnected"'})})}),(0,s.jsxs)("td",{children:[(0,s.jsx)(r.p,{children:"Emitted when Puppeteer gets disconnected from the browser instance. This might happen because either:"}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["The browser closes/crashes or - ",(0,s.jsx)(r.a,{href:"/api/puppeteer.browser.disconnect",children:"Browser.disconnect()"})," was called."]}),"\n"]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"TargetChanged"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:'"targetchanged"'})})}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(r.p,{children:["Emitted when the URL of a target changes. Contains a ",(0,s.jsx)(r.a,{href:"/api/puppeteer.target",children:"Target"})," instance."]}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Remarks:"})}),(0,s.jsx)(r.p,{children:"Note that this includes target changes in all browser contexts."})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"TargetCreated"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:'"targetcreated"'})})}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(r.p,{children:["Emitted when a target is created, for example when a new page is opened by ",(0,s.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/open",children:"window.open"})," or by ",(0,s.jsx)(r.a,{href:"/api/puppeteer.browser.newpage",children:"browser.newPage"})]}),(0,s.jsxs)(r.p,{children:["Contains a ",(0,s.jsx)(r.a,{href:"/api/puppeteer.target",children:"Target"})," instance."]}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Remarks:"})}),(0,s.jsx)(r.p,{children:"Note that this includes target creations in all browser contexts."})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"TargetDestroyed"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:'"targetdestroyed"'})})}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(r.p,{children:["Emitted when a target is destroyed, for example when a page is closed. Contains a ",(0,s.jsx)(r.a,{href:"/api/puppeteer.target",children:"Target"})," instance."]}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Remarks:"})}),(0,s.jsx)(r.p,{children:"Note that this includes target destructions in all browser contexts."})]})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},21020:(e,r,n)=>{var t=n(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,n){var t,i={},o=null,l=null;for(t in void 0!==n&&(o=""+n),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,t)&&!d.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:s,type:e,key:o,ref:l,props:i,_owner:a.current}}r.Fragment=i,r.jsx=o,r.jsxs=o},74848:(e,r,n)=>{e.exports=n(21020)},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>a});var t=n(96540);const s={},i=t.createContext(s);function c(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);