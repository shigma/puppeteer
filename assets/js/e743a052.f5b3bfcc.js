/*! For license information please see e743a052.f5b3bfcc.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73718],{4556:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"api/puppeteer.page.waitforselector","title":"Page.waitForSelector() method","description":"Wait for the selector to appear in page. If at the moment of calling the method the selector already exists, the method will return immediately. If the selector doesn\'t appear after the timeout milliseconds of waiting, the function will throw.","source":"@site/../docs/api/puppeteer.page.waitforselector.md","sourceDirName":"api","slug":"/api/puppeteer.page.waitforselector","permalink":"/next/api/puppeteer.page.waitforselector","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Page.waitForSelector"},"sidebar":"api","previous":{"title":"Page.waitForResponse","permalink":"/next/api/puppeteer.page.waitforresponse"},"next":{"title":"Page.workers","permalink":"/next/api/puppeteer.page.workers"}}');var s=r(74848),i=r(28453);const o={sidebar_label:"Page.waitForSelector"},a="Page.waitForSelector() method",l={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"pagewaitforselector-method",children:"Page.waitForSelector() method"})}),"\n",(0,s.jsxs)(t.p,{children:["Wait for the ",(0,s.jsx)(t.code,{children:"selector"})," to appear in page. If at the moment of calling the method the ",(0,s.jsx)(t.code,{children:"selector"})," already exists, the method will return immediately. If the ",(0,s.jsx)(t.code,{children:"selector"})," doesn't appear after the ",(0,s.jsx)(t.code,{children:"timeout"})," milliseconds of waiting, the function will throw."]}),"\n",(0,s.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  waitForSelector<Selector extends string>(\n    selector: Selector,\n    options?: WaitForSelectorOptions,\n  ): Promise<ElementHandle<NodeFor<Selector>> | null>;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"selector"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Selector"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#selectors",children:"selector"})," to query the page for. ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",children:"CSS selectors"})," can be passed as-is and a ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#non-css-selectors",children:"Puppeteer-specific selector syntax"})," allows quering by ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#text-selectors--p-text",children:"text"}),", ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#aria-selectors--p-aria",children:"a11y role and name"}),", and ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath",children:"xpath"})," and ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom",children:"combining these queries across shadow roots"}),". Alternatively, you can specify the selector type using a ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#prefixed-selector-syntax",children:"prefix"}),"."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"options"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/next/api/puppeteer.waitforselectoroptions",children:"WaitForSelectorOptions"})})}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"(Optional)"})," Optional waiting parameters"]})})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(t.p,{children:["Promise<",(0,s.jsx)(t.a,{href:"/next/api/puppeteer.elementhandle",children:"ElementHandle"}),"<",(0,s.jsx)(t.a,{href:"/next/api/puppeteer.nodefor",children:"NodeFor"}),"<Selector>> | null>"]}),"\n",(0,s.jsxs)(t.p,{children:["Promise which resolves when element specified by selector string is added to DOM. Resolves to ",(0,s.jsx)(t.code,{children:"null"})," if waiting for hidden: ",(0,s.jsx)(t.code,{children:"true"})," and selector is not found in DOM."]}),"\n",(0,s.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(t.p,{children:["The optional Parameter in Arguments ",(0,s.jsx)(t.code,{children:"options"})," are:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"visible"}),": A boolean wait for element to be present in DOM and to be visible, i.e. to not have ",(0,s.jsx)(t.code,{children:"display: none"})," or ",(0,s.jsx)(t.code,{children:"visibility: hidden"})," CSS properties. Defaults to ",(0,s.jsx)(t.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"hidden"}),": Wait for element to not be found in the DOM or to be hidden, i.e. have ",(0,s.jsx)(t.code,{children:"display: none"})," or ",(0,s.jsx)(t.code,{children:"visibility: hidden"})," CSS properties. Defaults to ",(0,s.jsx)(t.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"timeout"}),": maximum time to wait for in milliseconds. Defaults to ",(0,s.jsx)(t.code,{children:"30000"})," (30 seconds). Pass ",(0,s.jsx)(t.code,{children:"0"})," to disable timeout. The default value can be changed by using the ",(0,s.jsx)(t.a,{href:"/next/api/puppeteer.page.setdefaulttimeout",children:"Page.setDefaultTimeout()"})," method."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"This method works across navigations:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  let currentURL;\n  page\n    .waitForSelector('img')\n    .then(() => console.log('First URL with image: ' + currentURL));\n  for (currentURL of [\n    'https://example.com',\n    'https://google.com',\n    'https://bbc.com',\n  ]) {\n    await page.goto(currentURL);\n  }\n  await browser.close();\n})();\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},21020:(e,t,r)=>{var n=r(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,i={},c=null,d=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,n)&&!l.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:s,type:e,key:c,ref:d,props:i,_owner:a.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var n=r(96540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);