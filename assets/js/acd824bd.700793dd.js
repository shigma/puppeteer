/*! For license information please see acd824bd.700793dd.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45003],{28453:(e,r,s)=>{s.d(r,{R:()=>d,x:()=>i});var n=s(96540);const t={},a=n.createContext(t);function d(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(a.Provider,{value:r},e.children)}},29698:(e,r)=>{var s=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function t(e,r,n){var t=null;if(void 0!==n&&(t=""+n),void 0!==r.key&&(t=""+r.key),"key"in r)for(var a in n={},r)"key"!==a&&(n[a]=r[a]);else n=r;return r=n.ref,{$$typeof:s,type:e,key:t,ref:void 0!==r?r:null,props:n}}r.Fragment=n,r.jsx=t,r.jsxs=t},71915:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>d,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"api/puppeteer.jshandle","title":"JSHandle class","description":"Represents a reference to a JavaScript object. Instances can be created using Page.evaluateHandle().","source":"@site/versioned_docs/version-24.6.0/api/puppeteer.jshandle.md","sourceDirName":"api","slug":"/api/puppeteer.jshandle","permalink":"/api/puppeteer.jshandle","draft":false,"unlisted":false,"tags":[],"version":"24.6.0","frontMatter":{"sidebar_label":"JSHandle"},"sidebar":"api","previous":{"title":"Frame.waitForSelector","permalink":"/api/puppeteer.frame.waitforselector"},"next":{"title":"JSHandle.asElement","permalink":"/api/puppeteer.jshandle.aselement"}}');var t=s(74848),a=s(28453);const d={sidebar_label:"JSHandle"},i="JSHandle class",l={},c=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"jshandle-class",children:"JSHandle class"})}),"\n",(0,t.jsxs)(r.p,{children:["Represents a reference to a JavaScript object. Instances can be created using ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page.evaluatehandle",children:"Page.evaluateHandle()"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["Handles prevent the referenced JavaScript object from being garbage-collected unless the handle is purposely ",(0,t.jsx)(r.a,{href:"/api/puppeteer.jshandle.dispose",children:"disposed"}),". JSHandles are auto-disposed when their associated frame is navigated away or the parent context gets destroyed."]}),"\n",(0,t.jsxs)(r.p,{children:["Handles can be used as arguments for any evaluation function such as ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page._eval",children:"Page.$eval()"}),", ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page.evaluate",children:"Page.evaluate()"}),", and ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page.evaluatehandle",children:"Page.evaluateHandle()"}),". They are resolved to their referenced object."]}),"\n",(0,t.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export declare abstract class JSHandle<T = unknown>\n"})}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,t.jsx)(r.code,{children:"JSHandle"})," class."]}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"const windowHandle = await page.evaluateHandle(() => window);\n"})}),"\n",(0,t.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Property"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"_",children:"_"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"T"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Used for nominally typing ",(0,t.jsx)(r.a,{href:"/api/puppeteer.jshandle",children:"JSHandle"}),"."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"move",children:"move"})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"() => this"})}),(0,t.jsx)("td",{})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Method"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"aselement",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.jshandle.aselement",children:"asElement()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Either ",(0,t.jsx)(r.code,{children:"null"})," or the handle itself if the handle is an instance of ",(0,t.jsx)(r.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"dispose",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.jshandle.dispose",children:"dispose()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"Releases the object referenced by the handle for garbage collection."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"evaluate",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.jshandle.evaluate",children:"evaluate(pageFunction, args)"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"Evaluates the given function with the current handle as its first argument."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"evaluatehandle",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.jshandle.evaluatehandle",children:"evaluateHandle(pageFunction, args)"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"Evaluates the given function with the current handle as its first argument."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"getproperties",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.jshandle.getproperties",children:"getProperties()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"Gets a map of handles representing the properties of the current handle."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"getproperty",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.jshandle.getproperty",children:"getProperty(propertyName)"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"Fetches a single property from the referenced object."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"getproperty",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.jshandle.getproperty",children:"getProperty(propertyName)"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"jsonvalue",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.jshandle.jsonvalue",children:"jsonValue()"})})}),(0,t.jsx)("td",{}),(0,t.jsxs)("td",{children:[(0,t.jsx)(r.p,{children:"A vanilla object representing the serializable portions of the referenced object."}),(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Remarks:"})}),(0,t.jsxs)(r.p,{children:["If the object has a ",(0,t.jsx)(r.code,{children:"toJSON"})," function, it ",(0,t.jsx)(r.strong,{children:"will not"})," be called."]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"remoteobject",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.jshandle.remoteobject",children:"remoteObject()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Provides access to the ",(0,t.jsx)(r.a,{href:"https://chromedevtools.github.io/devtools-protocol/tot/Runtime/#type-RemoteObject",children:"Protocol.Runtime.RemoteObject"})," backing this handle."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"tostring",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.jshandle.tostring",children:"toString()"})})}),(0,t.jsx)("td",{}),(0,t.jsxs)("td",{children:[(0,t.jsx)(r.p,{children:"Returns a string representation of the JSHandle."}),(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Remarks:"})}),(0,t.jsx)(r.p,{children:"Useful during debugging."})]})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},74848:(e,r,s)=>{e.exports=s(29698)}}]);