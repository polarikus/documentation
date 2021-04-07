(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),o=(n(0),n(173)),s={title:"Tasks Queuing"},i={unversionedId:"miscellaneous/tasks-queuing",id:"miscellaneous/tasks-queuing",isDocsHomePage:!1,title:"Tasks Queuing",description:"Tasks Queuing:",source:"@site/docs/miscellaneous/tasks-queuing.md",slug:"/miscellaneous/tasks-queuing",permalink:"/documentation/docs/miscellaneous/tasks-queuing",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/miscellaneous/tasks-queuing.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1617810386,formattedLastUpdatedAt:"4/7/2021",sidebar:"docs",previous:{title:"Tasks Scheduling",permalink:"/documentation/docs/miscellaneous/tasks-scheduling"},next:{title:"Containers Installer",permalink:"/documentation/docs/miscellaneous/container-installer"}},u=[{value:"Beanstalkd",id:"beanstalkd",children:[]}],c={toc:u};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Tasks Queuing: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Queues System, which executes the Jobs classes one by one once he receives it or once it's scheduled (after being\nserialized and stored in a string somewhere). "),Object(o.b)("li",{parentName:"ul"},"to be able to queue the Jobs you need a Queuing System such as Beanstalkd, Redis, Amazon SQS or simply the DB."),Object(o.b)("li",{parentName:"ul"},'Laravel has a "queue worker" that will process new Jobs as they are pushed onto the queue system, ("queue:work" and\n"queue:listen"). It\'s job is to push the jobs to the queue system in order to be executed.'),Object(o.b)("li",{parentName:"ul"},'to keep the "queue worker "queue:work" artisan command, running permanently in the background, you should use a\nprocess monitor such as "Supervisor" to ensure that the queue worker does not stop running. It will simply make sure\nto execute the "php artisan queue:work" command.'),Object(o.b)("li",{parentName:"ul"},"so its role is to schedule the execution of Artisan Command, Jobs, Event Listeners, and some other classes, at\nspecific intervals or dates using the third party Queueing System.\n")),Object(o.b)("p",null,"More info here (",Object(o.b)("a",{parentName:"p",href:"https://laravel.com/docs/queues"},"docs"),")."),Object(o.b)("p",null,"The only addition to the Laravel's queues in Apiato, is that by default, apiato detects which queue driver you are\nplanning to use (based on the configs), to create the migration files required, in case type ",Object(o.b)("inlineCode",{parentName:"p"},"database")," is used."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"if (Config::get('queue.default') == 'database')\n{\n   // do something\n}\n")),Object(o.b)("p",null,"(refer to ",Object(o.b)("inlineCode",{parentName:"p"},"app/Ship/Migrations/")," folder for more details)."),Object(o.b)("h2",{id:"beanstalkd"},"Beanstalkd"),Object(o.b)("p",null,"In order to use Beanstalkd as your queue driver, you need to require the ",Object(o.b)("inlineCode",{parentName:"p"},'"pda/pheanstalk": "^3.1"')," package first. You\ncan include this in any ",Object(o.b)("inlineCode",{parentName:"p"},"composer.json")," file you want."))}l.isMDXComponent=!0},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.a.createElement(b,i(i({ref:t},c),{},{components:n})):a.a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);