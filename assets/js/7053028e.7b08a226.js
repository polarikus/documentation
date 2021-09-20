(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),i=(n(0),n(281)),o={title:"Routes"},c={unversionedId:"main-components/routes",id:"main-components/routes",isDocsHomePage:!1,title:"Routes",description:"- Definition & Principles",source:"@site/docs/main-components/routes.md",sourceDirName:"main-components",slug:"/main-components/routes",permalink:"/docs/next/main-components/routes",editUrl:"https://github.com/apiato/documentation/tree/master/docs/main-components/routes.md",version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1618664328,formattedLastUpdatedAt:"4/17/2021",frontMatter:{title:"Routes"},sidebar:"docs",previous:{title:"Payments",permalink:"/docs/next/additional-features/payments"},next:{title:"Controllers",permalink:"/docs/next/main-components/controllers"}},l=[{value:"Definition &amp; Principles",id:"definition-principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Sample",id:"code-sample",children:[]},{value:"Protect your Endpoints:",id:"protect-your-endpoints",children:[]},{value:"Difference between Public &amp; Private routes files",id:"difference-between-public-private-route-files",children:[]}],p={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#definition-principles"},"Definition & Principles")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#code-sample"},"Code Sample")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#protect-your-endpoints"},"Protect your Endpoints")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#difference-between-public-private-route-files"},"Difference between Public & Private routes files"))),Object(i.b)("h3",{id:"definition-principles"},"Definition & Principles"),Object(i.b)("p",null,"Read ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#Routes"},Object(i.b)("strong",{parentName:"a"},"Porto SAP Documentation (#Routes)")),"."),Object(i.b)("h3",{id:"rules"},"Rules"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"API Route files MUST be named according to their API's version, exposure and functionality. e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"CreateOrder.v1.public.php"),", ",Object(i.b)("inlineCode",{parentName:"p"},"FulfillOrder.v2.public.php"),", ",Object(i.b)("inlineCode",{parentName:"p"},"CancelOrder.v1.private.php"),"...")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Web Route files are pretty similar to API web files, but they can be named anything."))),Object(i.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"}," - app\n    - Containers\n        - {section-name}\n            - {container-name}\n                - UI\n                    - API\n                       - Routes\n                          - CreateItem.v1.public.php\n                          - DeleteItem.v1.public.php\n                          - CreateItem.v2.public.php\n                          - DeleteItem.v1.private.php\n                          - ApproveItem.v1.private.php\n                          - ...\n                    - WEB\n                       - Routes\n                          - main.php\n                          - ...\n")),Object(i.b)("h3",{id:"code-sample"},"Code Sample"),Object(i.b)("h4",{id:"web--api-route"},"Web & API route"),Object(i.b)("p",null,"Routes are defined exactly like the way you defined them in Laravel."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"Route::post('hello', [Controller::class, 'sayHello']);\n")),Object(i.b)("h4",{id:"protected-route-api"},"Protected Route (API)"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"Route::get('users', [Controller::class, 'listAllUsers'])\n    ->middleware(['auth:api']);\n")),Object(i.b)("h2",{id:"protect-your-endpoints"},"Protect your Endpoints:"),Object(i.b)("p",null,"Checkout the ",Object(i.b)("a",{parentName:"p",href:"../core-features/authorization"},"Authorization")," Page."),Object(i.b)("h2",{id:"difference-between-public-private-route-files"},"Difference between Public & Private routes files"),Object(i.b)("p",null,"Apiato has 2 types of endpoint, Public (External) mainly for third parties clients, and Private (Internal) for your own Apps. This will help to generate separate documentations for each and keep your internal API private."))}u.isMDXComponent=!0},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||i;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);