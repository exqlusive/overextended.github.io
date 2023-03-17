"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6124],{9613:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(9496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=m(a),c=l,k=d["".concat(p,".").concat(c)]||d[c]||s[c]||i;return a?n.createElement(k,r(r({ref:t},u),{},{components:a})):n.createElement(k,r({ref:t},u))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var m=2;m<i;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6489:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(9496),l=a(5924);const i="tabItem_De_A";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,r),hidden:a},t)}},3408:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(4250),l=a(9496),i=a(5924),r=a(6704),o=a(8876),p=a(4138),m=a(2509);const u="tabList_V3hT",s="tabItem_B35_";function d(e){var t;const{lazy:a,block:r,defaultValue:d,values:c,groupId:k,className:N}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=c??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,o.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const C=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==C&&!f.some((e=>e.value===C)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${C}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,p.U)(),[h,x]=(0,l.useState)(C),T=[],{blockElementScrollPositionUntilNextRender:w}=(0,m.o5)();if(null!=k){const e=y[k];null!=e&&e!==h&&f.some((t=>t.value===e))&&x(e)}const _=e=>{const t=e.currentTarget,a=T.indexOf(t),n=f[a].value;n!==h&&(w(t),x(n),null!=k&&v(k,String(n)))},D=e=>{var t;let a=null;switch(e.key){case"Enter":_(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},N)},f.map((e=>{let{value:t,label:a,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,key:t,ref:e=>T.push(e),onKeyDown:D,onClick:_},r,{className:(0,i.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":h===t})}),a??t)}))),a?(0,l.cloneElement)(b.filter((e=>e.props.value===h))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}function c(e){const t=(0,r.Z)();return l.createElement(d,(0,n.Z)({key:String(t)},e))}},6017:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>s});var n=a(4250),l=(a(9496),a(9613)),i=a(3408),r=a(6489);const o={title:"Progress"},p=void 0,m={unversionedId:"ox_lib/Interface/Client/progress",id:"ox_lib/Interface/Client/progress",title:"Progress",description:"lib.progressBar",source:"@site/docs/ox_lib/Interface/Client/progress.md",sourceDirName:"ox_lib/Interface/Client",slug:"/ox_lib/Interface/Client/progress",permalink:"/docs/ox_lib/Interface/Client/progress",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Interface/Client/progress.md",tags:[],version:"current",lastUpdatedAt:1679089741,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{title:"Progress"},sidebar:"ox_lib",previous:{title:"Notifications",permalink:"/docs/ox_lib/Interface/Client/notify"},next:{title:"Radial Menu",permalink:"/docs/ox_lib/Interface/Client/radial"}},u={},s=[{value:"lib.progressBar",id:"libprogressbar",level:2},{value:"Usage Example",id:"usage-example",level:3},{value:"lib.progressCircle",id:"libprogresscircle",level:2},{value:"Usage Example",id:"usage-example-1",level:3},{value:"lib.progressActive",id:"libprogressactive",level:2},{value:"lib.cancelProgress",id:"libcancelprogress",level:2}],d={toc:s};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"libprogressbar"},"lib.progressBar"),(0,l.kt)("p",null,"Displays a running progress bar."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.progressBar(data)\n"))),(0,l.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.progressBar(data)\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"duration: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")),(0,l.kt)("li",{parentName:"ul"},"label: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"useWhileDead?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"allowRagdoll?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"allowCuffed?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"allowFalling?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"canCancel?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"anim?: ",(0,l.kt)("inlineCode",{parentName:"li"},"table")," (",(0,l.kt)("inlineCode",{parentName:"li"},"object"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"dict?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Must specify either scenario or dict"))),(0,l.kt)("li",{parentName:"ul"},"clip: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"flag?: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"49")))),(0,l.kt)("li",{parentName:"ul"},"blendIn?: ",(0,l.kt)("inlineCode",{parentName:"li"},"float"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"3.0")))),(0,l.kt)("li",{parentName:"ul"},"blendOut?: ",(0,l.kt)("inlineCode",{parentName:"li"},"float"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"1.0")))),(0,l.kt)("li",{parentName:"ul"},"duration?: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"li"},"-1")),(0,l.kt)("li",{parentName:"ul"},"playbackRate?: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"li"},"0")),(0,l.kt)("li",{parentName:"ul"},"lockX?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"lockY?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"lockZ?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"scenario?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Must specify either scenario or dict"))),(0,l.kt)("li",{parentName:"ul"},"playEnter?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true")))))),(0,l.kt)("li",{parentName:"ul"},"prop?: ",(0,l.kt)("inlineCode",{parentName:"li"},"table")," (",(0,l.kt)("inlineCode",{parentName:"li"},"object")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"[ If you want to define multiple props, you can pass them as individual tables (array of objects) ]"),(0,l.kt)("li",{parentName:"ul"},"model: ",(0,l.kt)("inlineCode",{parentName:"li"},"hash")),(0,l.kt)("li",{parentName:"ul"},"bone?: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"60309")))),(0,l.kt)("li",{parentName:"ul"},"pos: ",(0,l.kt)("inlineCode",{parentName:"li"},"table"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"x: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")),(0,l.kt)("li",{parentName:"ul"},"y: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")),(0,l.kt)("li",{parentName:"ul"},"z: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")))),(0,l.kt)("li",{parentName:"ul"},"rot: ",(0,l.kt)("inlineCode",{parentName:"li"},"table")," (",(0,l.kt)("inlineCode",{parentName:"li"},"object"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"x: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")),(0,l.kt)("li",{parentName:"ul"},"y: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")),(0,l.kt)("li",{parentName:"ul"},"z: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")))))),(0,l.kt)("li",{parentName:"ul"},"disable?: ",(0,l.kt)("inlineCode",{parentName:"li"},"table")," (",(0,l.kt)("inlineCode",{parentName:"li"},"object"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"move?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"car?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"combat?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"mouse?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"))))),(0,l.kt)("h3",{id:"usage-example"},"Usage Example"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"if lib.progressBar({\n    duration = 2000,\n    label = 'Drinking water',\n    useWhileDead = false,\n    canCancel = true,\n    disable = {\n        car = true,\n    },\n    anim = {\n        dict = 'mp_player_intdrink',\n        clip = 'loop_bottle'\n    },\n    prop = {\n        model = `prop_ld_flow_bottle`,\n        pos = vec3(0.03, 0.03, 0.02),\n        rot = vec3(0.0, 0.0, -1.5)\n    },\n}) then print('Do stuff when complete') else print('Do stuff when cancelled') end\n"))),(0,l.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This function is ",(0,l.kt)("strong",{parentName:"p"},"asynchronous")," requiring you to do a ",(0,l.kt)("inlineCode",{parentName:"p"},".then")," callback on the promise or make your function ",(0,l.kt)("inlineCode",{parentName:"p"},"async"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nif (await lib.progressBar({\n  duration: 2000,\n  label: 'Drinking water',\n  useWhileDead: false,\n  canCancel: true,\n  disable: {\n    car: true,\n  },\n  anim: {\n    dict: 'mp_player_intdrink',\n    clip: 'loop_bottle'\n  },\n  prop: {\n    model: `prop_ld_flow_bottle`,\n    pos: {x: 0.03, y: 0.03, z: 0.02},\n    rot: {x: 0.0, y: 0.0, z: -1.5}\n  },\n})) console.log('Do stuff when complete');\nelse console.log('Do stuff when cancelled')\n")))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/7ZJgLjl.png",alt:"progress_bar"})),(0,l.kt)("h2",{id:"libprogresscircle"},"lib.progressCircle"),(0,l.kt)("p",null,"Similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"lib.progressBar")," except it displays a circle and you can define a position."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.progressCircle(data)\n"))),(0,l.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.progressCircle(data)\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"duration: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")),(0,l.kt)("li",{parentName:"ul"},"label?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"position?: ",(0,l.kt)("inlineCode",{parentName:"li"},"'middle'")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"'bottom'"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'middle'")))),(0,l.kt)("li",{parentName:"ul"},"useWhileDead?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"allowRagdoll?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"allowCuffed?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"allowFalling?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"canCancel?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"anim?: ",(0,l.kt)("inlineCode",{parentName:"li"},"table")," (",(0,l.kt)("inlineCode",{parentName:"li"},"object"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"dict?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Must specify either scenario or dict"))),(0,l.kt)("li",{parentName:"ul"},"clip: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"flag?: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"49")))),(0,l.kt)("li",{parentName:"ul"},"blendIn?: ",(0,l.kt)("inlineCode",{parentName:"li"},"float"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"3.0")))),(0,l.kt)("li",{parentName:"ul"},"blendOut?: ",(0,l.kt)("inlineCode",{parentName:"li"},"float"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"1.0")))),(0,l.kt)("li",{parentName:"ul"},"duration?: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"li"},"-1")),(0,l.kt)("li",{parentName:"ul"},"playbackRate?: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"li"},"0")),(0,l.kt)("li",{parentName:"ul"},"lockX?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"lockY?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"lockZ?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"scenario?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Must specify either scenario or dict"))),(0,l.kt)("li",{parentName:"ul"},"playEnter?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true")))))),(0,l.kt)("li",{parentName:"ul"},"prop?: ",(0,l.kt)("inlineCode",{parentName:"li"},"table")," (",(0,l.kt)("inlineCode",{parentName:"li"},"object")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"[ If you want to define multiple props, you can pass them as individual tables (array of objects) ]"),(0,l.kt)("li",{parentName:"ul"},"model: ",(0,l.kt)("inlineCode",{parentName:"li"},"hash")),(0,l.kt)("li",{parentName:"ul"},"bone?: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"60309")))),(0,l.kt)("li",{parentName:"ul"},"pos: ",(0,l.kt)("inlineCode",{parentName:"li"},"table"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"x: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")),(0,l.kt)("li",{parentName:"ul"},"y: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")),(0,l.kt)("li",{parentName:"ul"},"z: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")))),(0,l.kt)("li",{parentName:"ul"},"rot: ",(0,l.kt)("inlineCode",{parentName:"li"},"table")," (",(0,l.kt)("inlineCode",{parentName:"li"},"object"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"x: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")),(0,l.kt)("li",{parentName:"ul"},"y: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")),(0,l.kt)("li",{parentName:"ul"},"z: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")))))),(0,l.kt)("li",{parentName:"ul"},"disable?: ",(0,l.kt)("inlineCode",{parentName:"li"},"table")," (",(0,l.kt)("inlineCode",{parentName:"li"},"object"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"move?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"car?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"combat?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"mouse?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"))))),(0,l.kt)("h3",{id:"usage-example-1"},"Usage Example"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"if lib.progressCircle({\n    duration = 2000,\n    position = 'bottom',\n    useWhileDead = false,\n    canCancel = true,\n    disable = {\n        car = true,\n    },\n    anim = {\n        dict = 'mp_player_intdrink',\n        clip = 'loop_bottle'\n    },\n    prop = {\n        model = `prop_ld_flow_bottle`,\n        pos = vec3(0.03, 0.03, 0.02),\n        rot = vec3(0.0, 0.0, -1.5)\n    },\n}) then print('Do stuff when complete') else print('Do stuff when cancelled') end\n"))),(0,l.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This function is ",(0,l.kt)("strong",{parentName:"p"},"asynchronous")," requiring you to do a ",(0,l.kt)("inlineCode",{parentName:"p"},".then")," callback on the promise or make your function ",(0,l.kt)("inlineCode",{parentName:"p"},"async"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nif (await lib.progressCircle({\n  duration: 2000,\n  position: 'bottom',\n  useWhileDead: false,\n  canCancel: true,\n  disable: {\n    car: true,\n  },\n  anim: {\n    dict: 'mp_player_intdrink',\n    clip: 'loop_bottle'\n  },\n  prop: {\n    model: `prop_ld_flow_bottle`,\n    pos: {x: 0.03, y: 0.03, z: 0.02},\n    rot: {x: 0.0, y: 0.0, z: -1.5}\n  },\n})) console.log('Do stuff when complete')\nelse console.log('Do stuff when cancelled')\n")))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/2tLbgrW.png",alt:"progress_circle"})),(0,l.kt)("h2",{id:"libprogressactive"},"lib.progressActive"),(0,l.kt)("p",null,"Returns true if a progress bar is currently active."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.progressActive()\n"))),(0,l.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.progressActive()\n")))),(0,l.kt)("h2",{id:"libcancelprogress"},"lib.cancelProgress"),(0,l.kt)("p",null,"If there is a progress bar active and the\nprogress bar can be cancelled then it cancels it."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.cancelProgress()\n"))),(0,l.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.cancelProgress()\n")))))}c.isMDXComponent=!0}}]);