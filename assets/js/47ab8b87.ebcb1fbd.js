/*! For license information please see 47ab8b87.ebcb1fbd.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96800],{28453:(e,r,s)=>{s.d(r,{R:()=>p,x:()=>o});var t=s(96540);const n={},i=t.createContext(n);function p(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:p(e.components),t.createElement(i.Provider,{value:r},e.children)}},29698:(e,r)=>{var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(e,r,t){var n=null;if(void 0!==t&&(n=""+t),void 0!==r.key&&(n=""+r.key),"key"in r)for(var i in t={},r)"key"!==i&&(t[i]=r[i]);else t=r;return r=t.ref,{$$typeof:s,type:e,key:n,ref:void 0!==r?r:null,props:t}}r.Fragment=t,r.jsx=n,r.jsxs=n},70285:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"api/puppeteer.httprequest.respond","title":"HTTPRequest.respond() method","description":"Fulfills a request with the given response.","source":"@site/versioned_docs/version-24.6.0/api/puppeteer.httprequest.respond.md","sourceDirName":"api","slug":"/api/puppeteer.httprequest.respond","permalink":"/api/puppeteer.httprequest.respond","draft":false,"unlisted":false,"tags":[],"version":"24.6.0","frontMatter":{"sidebar_label":"HTTPRequest.respond"},"sidebar":"api","previous":{"title":"HTTPRequest.resourceType","permalink":"/api/puppeteer.httprequest.resourcetype"},"next":{"title":"HTTPRequest.response","permalink":"/api/puppeteer.httprequest.response"}}');var n=s(74848),i=s(28453);const p={sidebar_label:"HTTPRequest.respond"},o="HTTPRequest.respond() method",l={},d=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function a(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"httprequestrespond-method",children:"HTTPRequest.respond() method"})}),"\n",(0,n.jsx)(r.p,{children:"Fulfills a request with the given response."}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class HTTPRequest {\n  respond(\n    response: Partial<ResponseForRequest>,\n    priority?: number,\n  ): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"response"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["Partial<",(0,n.jsx)(r.a,{href:"/api/puppeteer.responseforrequest",children:"ResponseForRequest"}),">"]})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"the response to fulfill the request with."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"priority"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"number"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"(Optional)"})," If provided, intercept is resolved using cooperative handling rules. Otherwise, intercept is resolved immediately."]})})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["To use this, request interception should be enabled with ",(0,n.jsx)(r.a,{href:"/api/puppeteer.page.setrequestinterception",children:"Page.setRequestInterception()"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"Exception is immediately thrown if the request interception is not enabled."}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.p,{children:"An example of fulfilling all requests with 404 responses:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"await page.setRequestInterception(true);\npage.on('request', request => {\n  request.respond({\n    status: 404,\n    contentType: 'text/plain',\n    body: 'Not Found!',\n  });\n});\n"})}),"\n",(0,n.jsxs)(r.p,{children:["NOTE: Mocking responses for dataURL requests is not supported. Calling ",(0,n.jsx)(r.code,{children:"request.respond"})," for a dataURL request is a noop."]})]})}function c(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},74848:(e,r,s)=>{e.exports=s(29698)}}]);