(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(173)),i={title:"Values",category:"Optional Components",order:100},l={unversionedId:"optional-components/values",id:"optional-components/values",isDocsHomePage:!1,title:"Values",description:"- Definition & Principles",source:"@site/docs/optional-components/values.md",slug:"/optional-components/values",permalink:"/docs/docs/optional-components/values",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/optional-components/values.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1617626615,formattedLastUpdatedAt:"4/5/2021",sidebar:"docs",previous:{title:"Notifications",permalink:"/docs/docs/optional-components/notifications"},next:{title:"Magical Call",permalink:"/docs/docs/miscellaneous/magical-call"}},c=[{value:"Code Sample",id:"code-sample",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#definition-principles"},"Definition & Principles")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#code-sample"},"Code Sample"))),Object(o.b)("a",{name:"definition-principles"}),"### Definition & Principles",Object(o.b)("p",null,"Values are short names for the known \"Value Objects\" which are simple Objects, pretty similar to Models in the concept of representing data, but they do not get stored in the DB, thus they don't have ID's.\nThey also do not hold functionality or change any state, they just hold data."),Object(o.b)("p",null,"A Value Object is an immutable object that is defined by its encapsulated attributes.\nWe create Value Object when we need it to represent/serve/manipulate some data (attached as attributes), and w'll kill it later when we finish using it, to recreate it again when needed.  "),Object(o.b)("a",{name:"rules"}),"### Rules",Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"All Models MUST extend from ",Object(o.b)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Values\\Value"),".")),Object(o.b)("a",{name:"folder-structure"}),"### Folder Structure",Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"}," - App\n    - Containers\n        - {container-name}\n            - Values\n                - Output.php\n                - Region.php\n                - ...\n")),Object(o.b)("h3",{id:"code-sample"},"Code Sample"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nuse App\\Ship\\Parents\\Values\\Value;\n\nclass Location extends Value\n{\n    private $x = null;\n    \n    private $y = null;\n\n    protected $resourceKey = 'locales';\n    \n    public function __construct($x, $y)\n    {\n        $this->x = $x;\n        $this->y = $y;\n    }\n\n    public function getCoordinatesAsString()\n    {\n        return $this->x . ' - ' . $this->y;\n    }\n}\n")))}p.isMDXComponent=!0},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);