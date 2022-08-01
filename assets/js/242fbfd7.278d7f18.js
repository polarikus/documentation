"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5623],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2506:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Validation"},l=void 0,u={unversionedId:"core-features/validation",id:"core-features/validation",isDocsHomePage:!1,title:"Validation",description:"Apiato uses the powerful Laravel validation system.",source:"@site/docs/core-features/validation.md",sourceDirName:"core-features",slug:"/core-features/validation",permalink:"/docs/next/core-features/validation",editUrl:"https://github.com/apiato/documentation/tree/master/docs/core-features/validation.md",tags:[],version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1618578346,formattedLastUpdatedAt:"4/16/2021",frontMatter:{title:"Validation"},sidebar:"docs",previous:{title:"API Versioning",permalink:"/docs/next/core-features/api-versioning"},next:{title:"ETag",permalink:"/docs/next/core-features/etag"}},p=[{value:"Responses",id:"responses",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apiato uses the powerful ",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/docs/validation"},"Laravel validation")," system."),(0,o.kt)("p",null,"In Apiato, validation must be defined in ",(0,o.kt)("a",{parentName:"p",href:"../main-components/requests"},"Request")," component, since every request might have different rules."),(0,o.kt)("p",null,"Validation rules are automatically applied, once injecting the Request in the Controller."),(0,o.kt)("p",null,"Requests help validating User data, accessibility, ownership and more."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Request with Validation rules:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Containers\\AppSection\\User\\UI\\API\\Requests;\n\nuse App\\Ship\\Parents\\Requests\\Request;\n\nclass RegisterUserRequest extends Request\n{\n    /**\n     * @return  array\n     */\n    public function rules()\n    {\n        return [\n            'email'    => 'required|email|max:200|unique:users,email',\n            'password' => 'required|min:20|max:300',\n            'name'     => 'required|min:2|max:400',\n        ];\n    }\n\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage from Controller Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"    public function registerUser(RegisterUserRequest $request)\n    {\n        $user = app(RegisterUserAction::class)->run($request);\n        return $this->transform($user, UserTransformer::class);\n    }\n")),(0,o.kt)("h2",{id:"responses"},"Responses"),(0,o.kt)("p",null,"Validation Error response format:"),(0,o.kt)("p",null,"Single Field:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "The given data was invalid.",\n  "errors": {\n    "email": [\n      "The email has already been taken."\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"Multiple Fields:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "The given data was invalid.",\n  "errors": {\n    "email": [\n      "The email has already been taken."\n    ],\n    "password": [\n      "The password field is required."\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"More details about requests in the ",(0,o.kt)("a",{parentName:"p",href:"../main-components/requests"},"Requests")," Page."))}d.isMDXComponent=!0}}]);