(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{173:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,d=u["".concat(l,".").concat(m)]||u[m]||b[m]||i;return t?r.a.createElement(d,o(o({ref:n},s),{},{components:t})):r.a.createElement(d,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},98:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(8),i=(t(0),t(173)),l={title:"Mails",category:"Optional Components",order:36},o={unversionedId:"optional-components/mails",id:"optional-components/mails",isDocsHomePage:!1,title:"Mails",description:"* Definition",source:"@site/docs/optional-components/mails.md",slug:"/optional-components/mails",permalink:"/docs/docs/optional-components/mails",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/optional-components/mails.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1617626615,formattedLastUpdatedAt:"4/5/2021",sidebar:"docs",previous:{title:"Events",permalink:"/docs/docs/optional-components/events"},next:{title:"Notifications",permalink:"/docs/docs/optional-components/notifications"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Principles",id:"principles",children:[{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Samples",id:"code-samples",children:[]}]}],s={toc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#definition"},"Definition")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#principles"},"Principles")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#Templates"},"Email Templates")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#config"},"Configure Emails")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#Queueing"},"Queueing"))),Object(i.b)("a",{name:"definition"}),Object(i.b)("h3",{id:"definition"},"Definition"),Object(i.b)("p",null,"The Mail component allows you to describe an email and send it whenever needed. "),Object(i.b)("p",null,"For more details refer to this ",Object(i.b)("a",{parentName:"p",href:"https://laravel.com/docs/mail"},"link"),"."),Object(i.b)("a",{name:"principles"}),Object(i.b)("h2",{id:"principles"},"Principles"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Containers MAY or MAY NOT have one or more Mail.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Ship may contain general Mails."))),Object(i.b)("a",{name:"rules"}),Object(i.b)("h3",{id:"rules"},"Rules"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"All Notifications MUST extend from ",Object(i.b)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Mails\\Mail"),"."),Object(i.b)("li",{parentName:"ul"},"Email Templates must be placed inside the Mail directory in a Templates directory ",Object(i.b)("inlineCode",{parentName:"li"},"app/Containers/{container}/Mails/Templates"),".")),Object(i.b)("a",{name:"folder-structure"}),Object(i.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n            - Mails\n                - UserRegisteredMail.php\n                - ...\n                - Templates\n                    - user-registered.blade.php\n                    - ...\n    - Ship\n        - Mails\n            - SomeMail.php\n            - ...\n            - Templates\n                - some-template.blade.php\n                - ...\n")),Object(i.b)("a",{name:"code-samples"}),Object(i.b)("h3",{id:"code-samples"},"Code Samples"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example: a simple Mail")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\User\\Mails;\n\nuse App\\Containers\\User\\Models\\User;\nuse Illuminate\\Bus\\Queueable;\nuse App\\Ship\\Parents\\Mails\\Mail;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\n\nclass UserRegisteredMail extends Mail implements ShouldQueue\n{\n    use Queueable;\n\n    protected $user;\n\n    public function __construct(User $user)\n    {\n        $this->user = $user;\n    }\n\n    public function build()\n    {\n        return $this->view('user::user-registered')\n            ->to($this->user->email, $this->user->name)\n            ->with([\n                'name' => $this->user->name,\n            ]);\n    }\n}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Usage from an Action:")),Object(i.b)("p",null,"Notifications can be sent from Actions or Tasks using the ",Object(i.b)("inlineCode",{parentName:"p"},"Mail")," Facade."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"Mail::send(new UserRegisteredMail($user));\n")),Object(i.b)("a",{name:"Templates"}),"## Email Templates",Object(i.b)("p",null,"Templates should be placed inside a folder ",Object(i.b)("inlineCode",{parentName:"p"},"Templates")," inside the ",Object(i.b)("inlineCode",{parentName:"p"},"Mail")," folder."),Object(i.b)("p",null,"To access a Mail template ",Object(i.b)("em",{parentName:"p"},"(same like accessing a web view)")," you must call the container name then the view name.   "),Object(i.b)("p",null,"In the example below we're using the ",Object(i.b)("inlineCode",{parentName:"p"},"user-registered.blade.php")," template in the ",Object(i.b)("strong",{parentName:"p"},"User")," Container."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"$this->view('user::user-registered')\n")),Object(i.b)("a",{name:"config"}),"## Configure Emails",Object(i.b)("p",null,"Open the ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file and set the From mail and address, this will be used globally whenever the ",Object(i.b)("inlineCode",{parentName:"p"},"from")," function is not called in the Mail. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-markdown"},'MAIL_FROM_ADDRESS=test@test.test\nMAIL_FROM_NAME="apiato"\n')),Object(i.b)("p",null,"To use different email address in some classes add ",Object(i.b)("inlineCode",{parentName:"p"},"->to($this->email, $this->name)")," to the ",Object(i.b)("inlineCode",{parentName:"p"},"build")," function in your Mail class. "),Object(i.b)("p",null,"By default Apiato is configured to use Log Driver ",Object(i.b)("inlineCode",{parentName:"p"},"MAIL_DRIVER=log"),", you can change that from the ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file."),Object(i.b)("a",{name:"Queueing"}),"## Queueing A Notification",Object(i.b)("p",null,"To queue a notification you should use ",Object(i.b)("inlineCode",{parentName:"p"},"Illuminate\\Bus\\Queueable")," and implement ",Object(i.b)("inlineCode",{parentName:"p"},"Illuminate\\Contracts\\Queue\\ShouldQueue"),"."))}p.isMDXComponent=!0}}]);