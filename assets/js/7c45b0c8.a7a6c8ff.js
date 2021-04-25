(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(218)),o={title:"Settings"},s={unversionedId:"additional-features/apiato-containers/settings",id:"additional-features/apiato-containers/settings",isDocsHomePage:!1,title:"Settings",description:"- Installation",source:"@site/docs/additional-features/apiato-containers/settings.md",sourceDirName:"additional-features/apiato-containers",slug:"/additional-features/apiato-containers/settings",permalink:"/docs/next/additional-features/apiato-containers/settings",editUrl:"https://github.com/apiato/documentation/tree/master/docs/additional-features/apiato-containers/settings.md",version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1619365690,formattedLastUpdatedAt:"4/25/2021",frontMatter:{title:"Settings"},sidebar:"docs",previous:{title:"Payments",permalink:"/docs/next/additional-features/apiato-containers/payments"},next:{title:"Overview",permalink:"/docs/next/additional-features/community-containers/overview"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Seed the default settings",id:"seed-the-default-settings",children:[]},{value:"Read settings",id:"read-settings",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#installation"},"Installation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#seed-the-default-settings"},"Seed the default settings")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#read-settings"},"Read settings"))),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"composer require apiato/settings-container\n")),Object(i.b)("p",null,"Now run ",Object(i.b)("inlineCode",{parentName:"p"},"php artisan migrate")),Object(i.b)("h2",{id:"seed-the-default-settings"},"Seed the default settings"),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Instructions")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This container works out of the box perfectly but if you want to change its configs or modify the codes you MUST follow these steps:"),Object(i.b)("p",{parentName:"div"},"1- Copy the container from ",Object(i.b)("inlineCode",{parentName:"p"},"Vendor")," to ",Object(i.b)("inlineCode",{parentName:"p"},"AppSection")," (or any of your custom sections) of your project",Object(i.b)("br",{parentName:"p"}),"\n","2- Fix the namespaces",Object(i.b)("br",{parentName:"p"}),"\n","3- Remove ",Object(i.b)("inlineCode",{parentName:"p"},"apiato/settings-container")," dependency from project root composer.json"))),Object(i.b)("p",null,"Seed default settings in ",Object(i.b)("inlineCode",{parentName:"p"},"app/Containers/YourSection/Settings/Database/Seeders/DefaultSystemSettingsSeeder.php")),Object(i.b)("h2",{id:"read-settings"},"Read settings"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"$value = $this->findSettingsByKeyTask->run('whateverSettingsName');\n")),Object(i.b)("p",null,"You can search for settings by Key as in the example above, or create a class for each setting as follows:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"$value = $this->findWhateverSettingsTask->run();\n")))}p.isMDXComponent=!0},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);