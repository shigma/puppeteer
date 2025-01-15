/*! For license information please see f1801e75.cef53b4d.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68154],{32638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"guides/ng-schematics","title":"Puppeteer Angular Schematic","description":"Adds Puppeteer-based e2e tests to your Angular project.","source":"@site/versioned_docs/version-24.1.0/guides/ng-schematics.md","sourceDirName":"guides","slug":"/guides/ng-schematics","permalink":"/guides/ng-schematics","draft":false,"unlisted":false,"tags":[],"version":"24.1.0","frontMatter":{},"sidebar":"docs","previous":{"title":"Integrations","permalink":"/category/integrations"},"next":{"title":"Docker","permalink":"/guides/docker"}}');var s=n(74848),o=n(28453),l=n(53981),a=n(31751);const i={},c="Puppeteer Angular Schematic",d={},u=[{value:"Getting started",id:"getting-started",level:2},{value:"Options",id:"options",level:3},{value:"Creating a single test file",id:"creating-a-single-test-file",level:2},{value:"Running test server and dev server at the same time",id:"running-test-server-and-dev-server-at-the-same-time",level:3},{value:"Contributing",id:"contributing",level:2},{value:"Sandbox smoke tests",id:"sandbox-smoke-tests",level:3},{value:"Unit Testing",id:"unit-testing",level:3},{value:"Migrating from Protractor",id:"migrating-from-protractor",level:2},{value:"Entry point",id:"entry-point",level:3},{value:"Getting element properties",id:"getting-element-properties",level:3},{value:"Query Selectors",id:"query-selectors",level:3},{value:"Actions Selectors",id:"actions-selectors",level:3},{value:"Example",id:"example",level:3}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"puppeteer-angular-schematic",children:"Puppeteer Angular Schematic"})}),"\n",(0,s.jsx)(t.p,{children:"Adds Puppeteer-based e2e tests to your Angular project."}),"\n",(0,s.jsx)(t.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,s.jsx)(t.p,{children:"Run the command below in an Angular CLI app directory and follow the prompts."}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Note this will add the schematic as a dependency to your project."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"ng add @puppeteer/ng-schematics\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Or you can use the same command followed by the ",(0,s.jsx)(t.a,{href:"#options",children:"options"})," below."]}),"\n",(0,s.jsx)(t.p,{children:"Currently, this schematic supports the following test runners:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://jasmine.github.io/",children:(0,s.jsx)(t.strong,{children:"Jasmine"})})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://jestjs.io/",children:(0,s.jsx)(t.strong,{children:"Jest"})})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://mochajs.org/",children:(0,s.jsx)(t.strong,{children:"Mocha"})})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://nodejs.org/api/test.html",children:(0,s.jsx)(t.strong,{children:"Node Test Runner"})})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"With the schematics installed you can run E2E tests:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"ng e2e\n"})}),"\n",(0,s.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,s.jsx)(t.p,{children:"When adding schematics to your project you can to provide following options:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Option"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Value"}),(0,s.jsx)(t.th,{children:"Required"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"--test-runner"})}),(0,s.jsx)(t.td,{children:"The testing framework to install along side Puppeteer."}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:'"jasmine"'}),", ",(0,s.jsx)(t.code,{children:'"jest"'}),", ",(0,s.jsx)(t.code,{children:'"mocha"'}),", ",(0,s.jsx)(t.code,{children:'"node"'})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"true"})})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"creating-a-single-test-file",children:"Creating a single test file"}),"\n",(0,s.jsx)(t.p,{children:"Puppeteer Angular Schematic exposes a method to create a single test file."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'ng generate @puppeteer/ng-schematics:e2e "<TestName>"\n'})}),"\n",(0,s.jsx)(t.h3,{id:"running-test-server-and-dev-server-at-the-same-time",children:"Running test server and dev server at the same time"}),"\n",(0,s.jsxs)(t.p,{children:["By default the E2E test will run the app on the same port as ",(0,s.jsx)(t.code,{children:"ng start"}),".\nTo avoid this you can specify the port in the ",(0,s.jsx)(t.code,{children:"angular.json"}),"\nUpdate either ",(0,s.jsx)(t.code,{children:"e2e"})," or ",(0,s.jsx)(t.code,{children:"puppeteer"})," (depending on the initial setup) to:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "e2e": {\n    "builder": "@puppeteer/ng-schematics:puppeteer",\n    "options": {\n      "commands": [...],\n      "devServerTarget": "sandbox:serve",\n      "testRunner": "<TestRunner>",\n      "port": 8080\n    },\n    ...\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Now update the E2E test file ",(0,s.jsx)(t.code,{children:"utils.ts"})," baseUrl to:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const baseUrl = 'http://localhost:8080';\n"})}),"\n",(0,s.jsx)(t.h2,{id:"contributing",children:"Contributing"}),"\n",(0,s.jsxs)(t.p,{children:["Check out our ",(0,s.jsx)(t.a,{href:"https://pptr.dev/contributing",children:"contributing guide"})," to get an overview of what you need to develop in the Puppeteer repo."]}),"\n",(0,s.jsx)(t.h3,{id:"sandbox-smoke-tests",children:"Sandbox smoke tests"}),"\n",(0,s.jsx)(t.p,{children:"To make integration easier smoke test can be run with a single command, that will create a fresh install of Angular (single application and a multi application projects). Then it will install the schematics inside them and run the initial e2e tests:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"node tools/smoke.mjs\n"})}),"\n",(0,s.jsx)(t.h3,{id:"unit-testing",children:"Unit Testing"}),"\n",(0,s.jsxs)(t.p,{children:["The schematics utilize ",(0,s.jsx)(t.code,{children:"@angular-devkit/schematics/testing"})," for verifying correct file creation and ",(0,s.jsx)(t.code,{children:"package.json"})," updates. To execute the test suit:"]}),"\n",(0,s.jsxs)(l.A,{groupId:"npm2yarn",children:[(0,s.jsx)(a.A,{value:"npm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm run test\n"})})}),(0,s.jsx)(a.A,{value:"yarn",label:"Yarn",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"yarn run test\n"})})}),(0,s.jsx)(a.A,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pnpm run test\n"})})})]}),"\n",(0,s.jsx)(t.h2,{id:"migrating-from-protractor",children:"Migrating from Protractor"}),"\n",(0,s.jsx)(t.h3,{id:"entry-point",children:"Entry point"}),"\n",(0,s.jsxs)(t.p,{children:["Puppeteer has its own ",(0,s.jsx)(t.a,{href:"https://pptr.dev/api/puppeteer.browser",children:(0,s.jsx)(t.code,{children:"browser"})})," that exposes the browser process.\nA more close comparison for Protractor's ",(0,s.jsx)(t.code,{children:"browser"})," would be Puppeteer's ",(0,s.jsx)(t.a,{href:"https://pptr.dev/api/puppeteer.page",children:(0,s.jsx)(t.code,{children:"page"})}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"// Testing framework specific imports\n\nimport {setupBrowserHooks, getBrowserState} from './utils';\n\ndescribe('<Test Name>', function () {\n  setupBrowserHooks();\n  it('is running', async function () {\n    const {page} = getBrowserState();\n    // Query elements\n    await page\n      .locator('my-component')\n      // Click on the element once found\n      .click();\n  });\n});\n"})}),"\n",(0,s.jsx)(t.h3,{id:"getting-element-properties",children:"Getting element properties"}),"\n",(0,s.jsx)(t.p,{children:"You can easily get any property of the element."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"// Testing framework specific imports\n\nimport {setupBrowserHooks, getBrowserState} from './utils';\n\ndescribe('<Test Name>', function () {\n  setupBrowserHooks();\n  it('is running', async function () {\n    const {page} = getBrowserState();\n    // Query elements\n    const elementText = await page\n      .locator('.my-component')\n      .map(button => button.innerText)\n      // Wait for element to show up\n      .wait();\n\n    // Assert via assertion library\n  });\n});\n"})}),"\n",(0,s.jsx)(t.h3,{id:"query-selectors",children:"Query Selectors"}),"\n",(0,s.jsxs)(t.p,{children:["Puppeteer supports multiple types of selectors, namely, the CSS, ARIA, text, XPath and pierce selectors.\nThe following table shows Puppeteer's equivalents to ",(0,s.jsx)(t.a,{href:"https://www.protractortest.org/#/api?view=ProtractorBy",children:"Protractor By"}),"."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["For improved reliability and reduced flakiness try our\n",(0,s.jsx)(t.strong,{children:"Experimental"})," ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#locators",children:"Locators API"})]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"By"}),(0,s.jsx)(t.th,{children:"Protractor code"}),(0,s.jsx)(t.th,{children:"Puppeteer querySelector"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"CSS (Single)"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$(by.css('<CSS>'))"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"page.$('<CSS>')"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"CSS (Multiple)"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$$(by.css('<CSS>'))"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"page.$$('<CSS>')"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Id"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$(by.id('<ID>'))"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"page.$('#<ID>')"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"CssContainingText"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$(by.cssContainingText('<CSS>', '<TEXT>'))"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"page.$('<CSS> ::-p-text(<TEXT>)')"})," `"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DeepCss"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$(by.deepCss('<CSS>'))"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"page.$(':scope >>> <CSS>')"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"XPath"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$(by.xpath('<XPATH>'))"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"page.$('::-p-xpath(<XPATH>)')"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"JS"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$(by.js('document.querySelector(\"<CSS>\")'))"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"page.evaluateHandle(() => document.querySelector('<CSS>'))"})})]})]})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["For advanced use cases such as Protractor's ",(0,s.jsx)(t.code,{children:"by.addLocator"})," you can check Puppeteer's ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/query-selectors#custom-selectors",children:"Custom selectors"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"actions-selectors",children:"Actions Selectors"}),"\n",(0,s.jsx)(t.p,{children:"Puppeteer allows you to all necessary actions to allow test your application."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"// Click on the element.\nelement(locator).click();\n// Puppeteer equivalent\nawait page.locator(locator).click();\n\n// Send keys to the element (usually an input).\nelement(locator).sendKeys('my text');\n// Puppeteer equivalent\nawait page.locator(locator).fill('my text');\n\n// Clear the text in an element (usually an input).\nelement(locator).clear();\n// Puppeteer equivalent\nawait page.locator(locator).fill('');\n\n// Get the value of an attribute, for example, get the value of an input.\nelement(locator).getAttribute('value');\n// Puppeteer equivalent\nconst element = await page.locator(locator).waitHandle();\nconst value = await element.getProperty('value');\n"})}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"Sample Protractor test:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"describe('Protractor Demo', function () {\n  it('should add one and two', function () {\n    browser.get('http://juliemr.github.io/protractor-demo/');\n    element(by.model('first')).sendKeys(1);\n    element(by.model('second')).sendKeys(2);\n\n    element(by.id('gobutton')).click();\n\n    expect(element(by.binding('latest')).getText()).toEqual('3');\n  });\n});\n"})}),"\n",(0,s.jsx)(t.p,{children:"Sample Puppeteer migration:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import {setupBrowserHooks, getBrowserState} from './utils';\n\ndescribe('Puppeteer Demo', function () {\n  setupBrowserHooks();\n  it('should add one and two', function () {\n    const {page} = getBrowserState();\n    await page.goto('http://juliemr.github.io/protractor-demo/');\n\n    await page.locator('.form-inline > input:nth-child(1)').fill('1');\n    await page.locator('.form-inline > input:nth-child(2)').fill('2');\n    await page.locator('#gobutton').fill('2');\n\n    const result = await page\n      .locator('.table tbody td:last-of-type')\n      .map(header => header.innerText)\n      .wait();\n\n    expect(result).toEqual('3');\n  });\n});\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},21020:(e,t,n)=>{var r=n(96540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,r)&&!i.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:s,type:e,key:c,ref:d,props:o,_owner:a.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},31751:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(96540),s=n(34164);const o={tabItem:"tabItem__kUE"};function l({children:e,hidden:t,className:n}){return r.createElement("div",{role:"tabpanel",className:(0,s.A)(o.tabItem,n),hidden:t},e)}},53981:(e,t,n)=>{n.d(t,{A:()=>O});var r=n(96540),s=n(34164),o=n(52204),l=n(56347),a=n(13321),i=n(57641),c=n(73094),d=n(57237);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function h(e){var t,n;return null!==(n=null===(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return h(e).map((({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r})))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g({value:e,tabValues:t}){return t.some((t=>t.value===e))}function j({queryString:e=!1,groupId:t}){const n=(0,l.W6)(),s=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),o=(0,i.aZ)(s),a=(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace(p(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}({},n.location),{search:t.toString()}))}),[s,n]);return[o,a]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,o=m(e),[l,i]=(0,r.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const r=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,u]=j({queryString:n,groupId:s}),[p,h]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,s]=(0,d.Dv)(t);return[n,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:s}),x=(()=>{const e=null!=c?c:p;return g({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{x&&i(x)}),[x]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var f=n(12075);const b={tabList:"tabList_fbd4",tabItem:"tabItem_v5XY"};function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){y(e,t,n[t])}))}return e}function w(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function S({className:e,block:t,selectedValue:n,selectValue:l,tabValues:a}){const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const t=e.currentTarget,r=i.indexOf(t),s=a[r].value;s!==n&&(c(t),l(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;var n;t=null!==(n=i[r])&&void 0!==n?n:i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;var r;t=null!==(r=i[n])&&void 0!==r?r:i[i.length-1];break}}null==t||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},e)},a.map((({value:e,label:t,attributes:o})=>r.createElement("li",w(v({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>i.push(e),onKeyDown:u,onClick:d},o),{className:(0,s.A)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function P({lazy:e,children:t,selectedValue:n}){const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=x(e);return r.createElement("div",{className:(0,s.A)("tabs-container",b.tabList)},r.createElement(S,v({},t,e)),r.createElement(P,v({},t,e)))}function O(e){const t=(0,f.A)();return r.createElement(k,v({key:String(t)},e),h(e.children))}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var r=n(96540);const s={},o=r.createContext(s);function l(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);