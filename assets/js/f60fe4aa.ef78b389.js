"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5417],{9613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),f=i,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3271:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(4250),i=(t(9496),t(9613));const o={},a="Points",l={unversionedId:"ox_lib/Points/JavaScript/Client",id:"ox_lib/Points/JavaScript/Client",title:"Points",description:"Simple and centralised distance checking, supporting callbacks when entering, leaving, and standing in-range of set coordinates.",source:"@site/docs/ox_lib/Points/JavaScript/Client.md",sourceDirName:"ox_lib/Points/JavaScript",slug:"/ox_lib/Points/JavaScript/Client",permalink:"/docs/ox_lib/Points/JavaScript/Client",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Points/JavaScript/Client.md",tags:[],version:"current",lastUpdatedAt:1679089741,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{},sidebar:"ox_lib",previous:{title:"Server",permalink:"/docs/ox_lib/Logger/Server"},next:{title:"Points",permalink:"/docs/ox_lib/Points/Lua/Client"}},c={},s=[],p={toc:s};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"points"},"Points"),(0,i.kt)("p",null,"Simple and centralised distance checking, supporting callbacks when entering, leaving, and standing in-range of set coordinates."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"Point<T>({coords, distance, onEnter, onExit, nearby, args})\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"coords: ",(0,i.kt)("inlineCode",{parentName:"li"},"number[]")),(0,i.kt)("li",{parentName:"ul"},"distance: ",(0,i.kt)("inlineCode",{parentName:"li"},"number")),(0,i.kt)("li",{parentName:"ul"},"onEnter?: ",(0,i.kt)("inlineCode",{parentName:"li"},"function")),(0,i.kt)("li",{parentName:"ul"},"onExit?: ",(0,i.kt)("inlineCode",{parentName:"li"},"function")),(0,i.kt)("li",{parentName:"ul"},"nearby?: ",(0,i.kt)("inlineCode",{parentName:"li"},"function")),(0,i.kt)("li",{parentName:"ul"},"args?: ",(0,i.kt)("inlineCode",{parentName:"li"},"T"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Point, cache } from '@overextended/ox_lib/client'\n\nfunction nearby(this: Point<{dunak: string}>) {\n  // @ts-ignore\n  DrawMarker(2, this.coords.x, this.coords.y, this.coords.z, 0, 0, 0, 0, 180, 0, 1, 1, 1, 200, 20, 20, 50, false, true, 2, null, null, false, false)\n\n  if (this.currentDistance && this.currentDistance < 1 && IsControlJustReleased(0, 38)) {\n    console.log('Inside marker', this.id)\n    console.log(this.args?.dunak)\n  }\n}\n\nconst point = new Point({\n  coords: GetEntityCoords(cache.ped, false),\n  distance: 5,\n  nearby: nearby,\n  args: {\n    dunak: 'nerd'\n  }\n})\n\npoint.onEnter = () => {\n  console.log('Entered range of point', point.id)\n}\n\npoint.onExit = () => {\n  console.log('Left range of point', point.id)\n}\n")))}d.isMDXComponent=!0}}]);