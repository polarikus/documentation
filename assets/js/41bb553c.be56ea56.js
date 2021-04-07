(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{173:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),b=a,m=u["".concat(i,".").concat(b)]||u[b]||f[b]||o;return t?r.a.createElement(m,c(c({ref:n},p),{},{components:t})):r.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},98:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var a=t(3),r=t(8),o=(t(0),t(173)),i={title:"Configs",category:"Optional Components",order:31},c={unversionedId:"optional-components/configs",id:"optional-components/configs",isDocsHomePage:!1,title:"Configs",description:"* Definition",source:"@site/docs/optional-components/configs.md",slug:"/optional-components/configs",permalink:"/documentation/docs/optional-components/configs",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/optional-components/configs.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1617626615,formattedLastUpdatedAt:"4/5/2021",sidebar:"docs",previous:{title:"Middlewares",permalink:"/documentation/docs/optional-components/middlewares"},next:{title:"Commands",permalink:"/documentation/docs/optional-components/commands"}},l=[],p={toc:l};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#definition"},"Definition")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#principles"},"Principles")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#code-samples"},"Code Samples"))),Object(o.b)("a",{name:"definition"}),"### Definition",Object(o.b)("p",null,"Configs are files that container configurations. For more details about them check this ",Object(o.b)("a",{parentName:"p",href:"https://laravel.com/docs/master/configuration"},"doc"),"."),Object(o.b)("p",null,"In each Apiato container, there are two types of config files:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"the container specific config file (a config file that contains the container specific configurations)."),Object(o.b)("li",{parentName:"ul"},"the container third party packages config files (a config file that belongs to a third party package, required by the composer file of the container).")),Object(o.b)("a",{name:"principles"}),"## Principles",Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Your custom config files and the third party packages config files, should be placed in the Container, unless it's too generic then it can be placed on the Ship Layer."),Object(o.b)("li",{parentName:"ul"},"Container can have as many config files as it needs.")),Object(o.b)("a",{name:"rules"}),"### Rules",Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"When publishing a third party package config file move it manually to its container or to the Ship Features Config folder in case it is generic."),Object(o.b)("li",{parentName:"ul"},"Framework config files (provided by laravel) lives at the default config directory on the root of the project."),Object(o.b)("li",{parentName:"ul"},"You SHOULD NOT add any config file to the ",Object(o.b)("inlineCode",{parentName:"li"},"config")," directory."),Object(o.b)("li",{parentName:"ul"},"The container specific config file, MUST have the same name of the container in lower letters and post-fixed with ",Object(o.b)("inlineCode",{parentName:"li"},"-container"),", to prevent conflicts between third party packages and container specific packages.")),Object(o.b)("a",{name:"folder-structure"}),"### Folder Structure",Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"- app\n    - Containers\n        - {container-name}\n            - Configs\n                - {container-name}-container.php\n                - package-config-file1.php\n                - ...\n    - Ship\n        - Configs\n            - apiato.php\n            - ...\n- config\n    - app.php\n    - ...\n")),Object(o.b)("a",{name:"code-samples"}),"### Code Samples",Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example simple Config file")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"<?php\n// app/Containers/{ContainerName}/Configs/{container-name}-container.php\nreturn [\n\n    /*\n    |--------------------------------------------------------------------------\n    | Default Namespace\n    |--------------------------------------------------------------------------\n    */\n    'namespace'       => 'App',\n\n    // some other config params here...\n")),Object(o.b)("p",null,"You can access the respective configuration key like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"$value = Config::get('{container-name}-container.namespace');     // returns 'App'\n$value = config('{container-name}-container.namespace');          // same, but using a function\n\n$defaultValue = Config::get('{container-name}-container.unknown.key', 'defaultvalue');   // returns 'defaultvalue' as this key is not set!\n")))}s.isMDXComponent=!0}}]);