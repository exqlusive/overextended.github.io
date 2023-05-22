"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[764],{9613:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>m});var r=l(9496);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var l=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(l),d=a,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||n;return l?r.createElement(m,i(i({ref:t},p),{},{components:l})):r.createElement(m,i({ref:t},p))}));function m(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=l.length,i=new Array(n);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<n;s++)i[s]=l[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,l)}d.displayName="MDXCreateElement"},2165:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var r=l(2564),a=(l(9496),l(9613));const n={},i=void 0,o={unversionedId:"ox_lib/Modules/Callback/JavaScript/Server",id:"ox_lib/Modules/Callback/JavaScript/Server",title:"Server",description:"Trigger Client Callback",source:"@site/docs/ox_lib/Modules/Callback/JavaScript/Server.md",sourceDirName:"ox_lib/Modules/Callback/JavaScript",slug:"/ox_lib/Modules/Callback/JavaScript/Server",permalink:"/docs/ox_lib/Modules/Callback/JavaScript/Server",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Modules/Callback/JavaScript/Server.md",tags:[],version:"current",lastUpdatedAt:1684744261,formattedLastUpdatedAt:"May 22, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Client",permalink:"/docs/ox_lib/Modules/Callback/JavaScript/Client"},next:{title:"Client",permalink:"/docs/ox_lib/Modules/Callback/Lua/Client"}},c={},s=[{value:"Trigger Client Callback",id:"trigger-client-callback",level:2},{value:"triggerClientCallback",id:"triggerclientcallback",level:3},{value:"Register Client Callback",id:"register-client-callback",level:2},{value:"onClientCallback",id:"onclientcallback",level:3},{value:"Usage Example",id:"usage-example",level:2}],p={toc:s},u="wrapper";function b(e){let{components:t,...l}=e;return(0,a.kt)(u,(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"trigger-client-callback"},"Trigger Client Callback"),(0,a.kt)("h3",{id:"triggerclientcallback"},"triggerClientCallback"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"triggerClientCallback(eventName, playerId, ...args)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"eventName: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"playerId: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"...args: ",(0,a.kt)("inlineCode",{parentName:"li"},"any"))),(0,a.kt)("h2",{id:"register-client-callback"},"Register Client Callback"),(0,a.kt)("h3",{id:"onclientcallback"},"onClientCallback"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"onClientCallback(eventName, cb)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"eventName: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"cb: ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),"(playerId: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),", ...args: ",(0,a.kt)("inlineCode",{parentName:"li"},"any"),")")),(0,a.kt)("h2",{id:"usage-example"},"Usage Example"),(0,a.kt)("p",null,"For this example to fully make sense take a look at the example on the ",(0,a.kt)("a",{parentName:"p",href:"./Client#usage-example"},"client")," page for the callbacks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { onClientCallback, triggerClientCallback } from '@overextended/ox_lib/server';\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"onClientCallback('test:server', (playerId, ...args: [number, null, number, null, null, number]) => {\n  console.log('onClientCallback', playerId, ...args);\n  return {\n    serverValue: 3000,\n  };\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"setTimeout(async () => {\n  const response = await triggerClientCallback<{ clientValue: string }>('test:client', 1, [1, null, 3, null, null, 6])\n  if (!response) return;\n  console.log(response.clientValue);\n  console.log('Response from client', response);\n}, 100);\n")))}b.isMDXComponent=!0}}]);