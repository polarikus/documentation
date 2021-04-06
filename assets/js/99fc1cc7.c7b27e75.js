(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{130:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(8),i=(t(0),t(173)),o={title:"Events",category:"Optional Components",order:35},l={unversionedId:"optional-components/events",id:"optional-components/events",isDocsHomePage:!1,title:"Events",description:"- Definition",source:"@site/docs/optional-components/events.md",slug:"/optional-components/events",permalink:"/docs/docs/optional-components/events",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/optional-components/events.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1617626615,formattedLastUpdatedAt:"4/5/2021",sidebar:"docs",previous:{title:"Languages",permalink:"/docs/docs/optional-components/languages"},next:{title:"Mails",permalink:"/docs/docs/optional-components/mails"}},s=[{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Dispatch Events",id:"dispatch-events",children:[]},{value:"Handling an Event",id:"handling-an-event",children:[]}],c={toc:s};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#definition"},"Definition")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#principles"},"Principles")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#rules"},"Rules"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#enabling-events"},"Enabling Events")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#usage"},"Usage")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#dispatch-events"},"Dispatch Events")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#Queueing"},"Queueing")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#Broadcasting"},"Broadcasting"))),Object(i.b)("a",{name:"definition"}),"### Definition",Object(i.b)("p",null,"Events: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Events provides a simple observer implementation, allowing you to subscribe and listen for various events that occur in your application."),Object(i.b)("li",{parentName:"ul"},"Events are classes that can be fired from anywhere in your application."),Object(i.b)("li",{parentName:"ul"},"an event class will usually be bound to one or many Events Listeners Classes or has those Listeners registered to listen to it."),Object(i.b)("li",{parentName:"ul"},'"fire" is the term that is usually used to call an Event.')),Object(i.b)("p",null,"More details ",Object(i.b)("a",{parentName:"p",href:"https://laravel.com/docs/events"},"here"),"."),Object(i.b)("a",{name:"principles"}),"## Principles",Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Events can be fired from Actions and or Tasks. It's preferable to choose one place only. (Tasks are recommended)."),Object(i.b)("li",{parentName:"ul"},"Events SHOULD be created inside the Containers. However, general Events CAN be created in the Port layer.")),Object(i.b)("a",{name:"rules"}),"### Rules",Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Events classes CAN be placed inside the Containers in Events folders or on the Ship for the general Events."),Object(i.b)("li",{parentName:"ul"},"All Events MUST extend from ",Object(i.b)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Events\\Event"),".")),Object(i.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"}," - App\n    - Containers\n        - {container-name}\n            - Events\n                - SomethingHappenedEvent.php\n                - ...\n            - Listeners\n                - ListenToMusicListener.php\n                - ...\n\n    - Ship\n        - Events\n            - GlobalStateChanged.php\n            - SomethingBiiigHappenedEvent.php\n            - ...\n")),Object(i.b)("a",{name:"enabling-events"}),"### Enabling Events",Object(i.b)("p",null,"Before you can use events you need to add the ",Object(i.b)("inlineCode",{parentName:"p"},"EventServiceProvider")," to the ",Object(i.b)("inlineCode",{parentName:"p"},"MainServiceProvider")," of the Ship (if this has not been registered so far). See example below."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"<?php\n\nnamespace App\\Containers\\Car\\Providers;\n\nclass MainServiceProvider extends MainProvider\n{\n\n    /**\n     * Container Service Providers.\n     *\n     * @var array\n     */\n    public $serviceProviders = [\n        EventServiceProvider::class,\n    ];\n\n    // ...\n}\n\n")),Object(i.b)("a",{name:"usage"}),"### Usage",Object(i.b)("p",null,"In Laravel you can create and register events in multiple way. Below is an example of an Event that handles itself. "),Object(i.b)("p",null,"Event Class Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\User\\Events;\n\nuse App\\Containers\\User\\Models\\User;\nuse App\\Ship\\Parents\\Events\\Event;\nuse Illuminate\\Broadcasting\\PrivateChannel;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Support\\Facades\\Log;\n\nclass UserRegisteredEvent extends Event implements ShouldQueue\n{\n    protected $user;\n\n    public function __construct(User $user)\n    {\n        $this->user = $user;\n    }\n\n    public function handle()\n    {\n        Log::info('New User registration. ID = ' . $this->user->getHashedKey() . ' | Email = ' . $this->user->email . '.');\n\n        // ...\n    }\n\n    public function broadcastOn()\n    {\n        return new PrivateChannel('channel-name');\n    }\n}\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: You will get more benefits creating Events Listeners for each Event.")),Object(i.b)("p",null,"To do this you will need to create a custom ",Object(i.b)("inlineCode",{parentName:"p"},"EventServiceProvider")," in your container extending ",Object(i.b)("inlineCode",{parentName:"p"},"App\\Ship\\Parents\\Providers\\EventsProvider"),"."),Object(i.b)("p",null,"Your custom ",Object(i.b)("inlineCode",{parentName:"p"},"EventServiceProvider")," needs to be registered in the containers ",Object(i.b)("inlineCode",{parentName:"p"},"MainServiceProvider")," as well."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"<?php\n\nnamespace App\\Containers\\Car\\Providers;\n\nuse App\\Ship\\Parents\\Providers\\MainProvider;\n\n/**\n * Class MainServiceProvider.\n *\n * The Main Service Provider of this container, it will be automatically registered in the framework.\n */\nclass MainServiceProvider extends MainProvider\n{\n\n    /**\n     * Container Service Providers.\n     *\n     * @var array\n     */\n    public $serviceProviders = [\n        EventServiceProvider::class,\n    ];\n")),Object(i.b)("a",{name:"dispatch-events"}),Object(i.b)("h3",{id:"dispatch-events"},"Dispatch Events"),Object(i.b)("p",null,"You can dispatch an Event from anywhere you want (ideally from Actions and Tasks)."),Object(i.b)("p",null,"Example: Dispatching the Event class from the example above"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\n// using helper function\nevent(New UserEmailChangedEvent($user));\n\n// manually\n\\App::make(\\Illuminate\\Contracts\\Bus\\Dispatcher\\Dispatcher::class)->dispatch(New UserEmailChangedEvent($user));\n")),Object(i.b)("a",{name:"Queueing"}),"## Queueing an Event",Object(i.b)("p",null,"Events can implement ",Object(i.b)("inlineCode",{parentName:"p"},"Illuminate\\Contracts\\Queue\\ShouldQueue")," to be queued."),Object(i.b)("h2",{id:"handling-an-event"},"Handling an Event"),Object(i.b)("p",null,"You can handle jobs on dispatching an event."),Object(i.b)("p",null,"To do so you need to implement one of the following interfaces:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Apiato\\Core\\Abstracts\\Events\\Interfaces\\ShouldHandleNow")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Apiato\\Core\\Abstracts\\Events\\Interfaces\\ShouldHandle")),Object(i.b)("p",null,"This will force you to implement the ",Object(i.b)("inlineCode",{parentName:"p"},"handle")," method and will make apiato execute the method upon dispatching the event."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"ShouldHandleNow")," Interface will make the event execute the handle method as soon as the event gets dispatched.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"ShouldHandle")," Interface will create an eventjob and execute the handle method async (through laravel jobs)."))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},'namespace App\\Containers\\Example\\Events;\n\n\nuse Apiato\\Core\\Abstracts\\Events\\Interfaces\\ShouldHandle;\nuse App\\Ship\\Parents\\Events\\Event;\n\nclass ExampleEvent extends Event implements ShouldHandle\n{\n    /**\n     * If ShouldHandle interface is implemented this variable\n     * sets the time (in seconds or timestamp) to wait before a job is executed\n     *\n     * @var \\DateTimeInterface|\\DateInterval|int|null $jobDelay\n     */\n    public $jobDelay = 60;\n\n    /**\n     * If ShouldHandle interface is implemented this variable\n     * sets the name of the queue to push the job on\n     *\n     * @var string $jobQueue\n     */\n    public $jobQueue = "example_queue";\n\n    public function handle()\n    {\n        // Do some handling here\n    }\n    \n}\n')),Object(i.b)("a",{name:"Broadcasting"}),"## Broadcasting",Object(i.b)("p",null,"Note: to define Broadcasting route go to ",Object(i.b)("inlineCode",{parentName:"p"},"app/Ship/Boardcasts/Routes.php"),"."))}p.isMDXComponent=!0},173:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return t?r.a.createElement(m,l(l({ref:n},c),{},{components:t})):r.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);