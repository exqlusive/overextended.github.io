"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7330],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),v=o,d=m["".concat(u,".").concat(v)]||m[v]||p[v]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(6600),o=(n(9496),n(9613));const a={},i=void 0,c={unversionedId:"ox_inventory/Functions/Server/Inventory/GetItem",id:"ox_inventory/Functions/Server/Inventory/GetItem",title:"GetItem",description:"Returns the item from the specified inventory.",source:"@site/docs/ox_inventory/Functions/Server/Inventory/GetItem.md",sourceDirName:"ox_inventory/Functions/Server/Inventory",slug:"/ox_inventory/Functions/Server/Inventory/GetItem",permalink:"/docs/ox_inventory/Functions/Server/Inventory/GetItem",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Server/Inventory/GetItem.md",tags:[],version:"current",lastUpdatedAt:1668115226,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{},sidebar:"ox_inventory",previous:{title:"GetCurrentWeapon",permalink:"/docs/ox_inventory/Functions/Server/Inventory/GetCurrentWeapon"},next:{title:"GetItemSlots",permalink:"/docs/ox_inventory/Functions/Server/Inventory/GetItemSlots"}},u={},l=[],s={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Returns the item from the specified inventory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"-- inv: string or number\n-- item: table or string\n-- metadata: any (optional)\n-- returnsCount: boolean (optional)\nexports.ox_inventory:GetItem(inv, item, metadata, returnsCount)\n")),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"returnsCount")," is set to true, the returned value will be the ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," based on\nhow many times the item was found."),(0,o.kt)("p",null,"Otherwise returns the data related to the item ",(0,o.kt)("em",{parentName:"p"},"and")," it's total count found in the inventory."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local item = ox_inventory:GetItem(source, \'water\', nil, false)\n\nprint(json.encode(item, {indent=true}))\n--[[\n    {\n        "consume": 1,\n        "count": 15,\n        "stack": true,\n        "name": "water",\n        "weight": 500,\n        "label": "Water",\n        "close": true\n    }\n]]\n')))}p.isMDXComponent=!0}}]);