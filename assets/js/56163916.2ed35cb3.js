"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6995],{9613:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var a=t(9496);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=a.createContext({}),c=function(e){var r=a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return a.createElement(o.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),f=n,d=m["".concat(o,".").concat(f)]||m[f]||u[f]||l;return t?a.createElement(d,s(s({ref:r},p),{},{components:t})):a.createElement(d,s({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,s=new Array(l);s[0]=m;var i={};for(var o in r)hasOwnProperty.call(r,o)&&(i[o]=r[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<l;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4514:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=t(6600),n=(t(9496),t(9613));const l={},s="Scalar",i={unversionedId:"oxmysql/Usage/scalar",id:"oxmysql/Usage/scalar",title:"Scalar",description:"Returns the first column for a single row.",source:"@site/docs/oxmysql/Usage/scalar.md",sourceDirName:"oxmysql/Usage",slug:"/oxmysql/Usage/scalar",permalink:"/docs/oxmysql/Usage/scalar",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/oxmysql/Usage/scalar.md",tags:[],version:"current",lastUpdatedAt:1669275639,formattedLastUpdatedAt:"Nov 24, 2022",frontMatter:{},sidebar:"oxmysql",previous:{title:"Query",permalink:"/docs/oxmysql/Usage/query"},next:{title:"Single",permalink:"/docs/oxmysql/Usage/single"}},o={},c=[{value:"Lua",id:"lua",level:2},{value:"Callback",id:"callback",level:3},{value:"Promise",id:"promise",level:3},{value:"JavaScript",id:"javascript",level:2},{value:"Callback",id:"callback-1",level:3},{value:"Promise",id:"promise-1",level:3}],p={toc:c};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"scalar"},"Scalar"),(0,n.kt)("p",null,"Returns the first column for a single row."),(0,n.kt)("h2",{id:"lua"},"Lua"),(0,n.kt)("h3",{id:"callback"},"Callback"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"-- alias: exports.oxmysql:scalar\n-- alias: MySQL.Async.fetchScalar\n\nMySQL.scalar('SELECT firstname FROM users WHERE identifier = ?', {playerIdentifier}, function(firstname)\n    print(firstname)\nend)\n")),(0,n.kt)("h3",{id:"promise"},"Promise"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"-- alias: exports.oxmysql:scalar_async\n-- alias: MySQL.Sync.fetchScalar\n\nlocal firstname = MySQL.scalar.await('SELECT firstname FROM users WHERE identifier = ?', {playerIdentifier})\nprint(firstname)\n")),(0,n.kt)("h2",{id:"javascript"},"JavaScript"),(0,n.kt)("h3",{id:"callback-1"},"Callback"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// alias: exports.oxmysql.scalar\n\nMySQL.scalar('SELECT firstname FROM users WHERE identifier = ?', [playerIdentifier], (firstname) => {\n  console.log(firstname)\n})\n")),(0,n.kt)("h3",{id:"promise-1"},"Promise"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// alias: exports.oxmysql.scalar_async\n\nconst firstname = await MySQL.scalar('SELECT firstname FROM users WHERE identifier = ?', [playerIdentifier])\nconsole.log(firstname)\n")))}u.isMDXComponent=!0}}]);