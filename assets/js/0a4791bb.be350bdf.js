/*! For license information please see 0a4791bb.be350bdf.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[18883],{28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>c});var i=r(96540);const s={},n=i.createContext(s);function l(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(n.Provider,{value:t},e.children)}},29698:(e,t)=>{var r=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function s(e,t,i){var s=null;if(void 0!==i&&(s=""+i),void 0!==t.key&&(s=""+t.key),"key"in t)for(var n in i={},t)"key"!==n&&(i[n]=t[n]);else i=t;return t=i.ref,{$$typeof:r,type:e,key:s,ref:void 0!==t?t:null,props:i}}t.Fragment=i,t.jsx=s,t.jsxs=s},50104:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"api/puppeteer.locator","title":"Locator class","description":"Locators describe a strategy of locating objects and performing an action on them. If the action fails because the object is not ready for the action, the whole operation is retried. Various preconditions for a successful action are checked automatically.","source":"@site/versioned_docs/version-24.6.0/api/puppeteer.locator.md","sourceDirName":"api","slug":"/api/puppeteer.locator","permalink":"/api/puppeteer.locator","draft":false,"unlisted":false,"tags":[],"version":"24.6.0","frontMatter":{"sidebar_label":"Locator"},"sidebar":"api","previous":{"title":"Page.workers","permalink":"/api/puppeteer.page.workers"},"next":{"title":"Locator.click","permalink":"/api/puppeteer.locator.click"}}');var s=r(74848),n=r(28453);const l={sidebar_label:"Locator"},c="Locator class",o={},a=[{value:"Signature",id:"signature",level:3},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"locator-class",children:"Locator class"})}),"\n",(0,s.jsx)(t.p,{children:"Locators describe a strategy of locating objects and performing an action on them. If the action fails because the object is not ready for the action, the whole operation is retried. Various preconditions for a successful action are checked automatically."}),"\n",(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#locators",children:"https://pptr.dev/guides/page-interactions#locators"})," for details."]}),"\n",(0,s.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"export declare abstract class Locator<T> extends EventEmitter<LocatorEvents>\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Extends:"})," ",(0,s.jsx)(t.a,{href:"/api/puppeteer.eventemitter",children:"EventEmitter"}),"<",(0,s.jsx)(t.a,{href:"/api/puppeteer.locatorevents",children:"LocatorEvents"}),">"]}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Property"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Modifiers"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"_",children:"_"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"T"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:["Used for nominally typing ",(0,s.jsx)(t.a,{href:"/api/puppeteer.locator",children:"Locator"}),"."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"timeout",children:"timeout"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"readonly"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"number"})}),(0,s.jsx)("td",{})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Method"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Modifiers"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"click",children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.click",children:"click(this, options)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Clicks the located element."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"clone",children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.clone",children:"clone()"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Clones the locator."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"fill",children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.fill",children:"fill(this, value, options)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:["Fills out the input identified by the locator using the provided value. The type of the input is determined at runtime and the appropriate fill-out method is chosen based on the type. ",(0,s.jsx)(t.code,{children:"contenteditable"}),", select, textarea and input elements are supported."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"filter",children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.filter",children:"filter(predicate)"})})}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.p,{children:"Creates an expectation that is evaluated against located values."}),(0,s.jsx)(t.p,{children:"If the expectations do not match, then the locator will retry."})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"hover",children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.hover",children:"hover(this, options)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Hovers over the located element."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"map",children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.map",children:"map(mapper)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Maps the locator using the provided mapper."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"race",children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.race",children:"race(locators)"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"static"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Creates a race between multiple locators trying to locate elements in parallel but ensures that only a single element receives the action."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"scroll",children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.scroll",children:"scroll(this, options)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Scrolls the located element."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"setensureelementisintheviewport",children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.setensureelementisintheviewport",children:"setEnsureElementIsInTheViewport(this, value)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Creates a new locator instance by cloning the current locator and specifying whether the locator should scroll the element into viewport if it is not in the viewport already."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"settimeout",children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.settimeout",children:"setTimeout(timeout)"})})}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.p,{children:"Creates a new locator instance by cloning the current locator and setting the total timeout for the locator actions."}),(0,s.jsxs)(t.p,{children:["Pass ",(0,s.jsx)(t.code,{children:"0"})," to disable timeout."]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"setvisibility",children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.setvisibility",children:"setVisibility(this, visibility)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Creates a new locator instance by cloning the current locator with the visibility property changed to the specified value."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"setwaitforenabled",children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.setwaitforenabled",children:"setWaitForEnabled(this, value)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:["Creates a new locator instance by cloning the current locator and specifying whether to wait for input elements to become enabled before the action. Applicable to ",(0,s.jsx)(t.code,{children:"click"})," and ",(0,s.jsx)(t.code,{children:"fill"})," actions."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"setwaitforstableboundingbox",children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.setwaitforstableboundingbox",children:"setWaitForStableBoundingBox(this, value)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Creates a new locator instance by cloning the current locator and specifying whether the locator has to wait for the element's bounding box to be same between two consecutive animation frames."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"wait",children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.wait",children:"wait(options)"})})}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.p,{children:"Waits for the locator to get the serialized value from the page."}),(0,s.jsx)(t.p,{children:"Note this requires the value to be JSON-serializable."})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"waithandle",children:(0,s.jsx)(t.a,{href:"/api/puppeteer.locator.waithandle",children:"waitHandle(options)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Waits for the locator to get a handle from the page."})})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},74848:(e,t,r)=>{e.exports=r(29698)}}]);