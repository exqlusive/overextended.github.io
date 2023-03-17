"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2433],{6489:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(9496),i=n(5924);const a="tabItem_De_A";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(a,o),hidden:n},t)}},3408:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(4250),i=n(9496),a=n(5924),o=n(6704),l=n(8876),s=n(4138),d=n(2509);const u="tabList_V3hT",c="tabItem_B35_";function p(e){var t;const{lazy:n,block:o,defaultValue:p,values:m,groupId:h,className:b}=e,v=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,l.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===p?p:p??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==f&&!y.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:x}=(0,s.U)(),[w,_]=(0,i.useState)(f),N=[],{blockElementScrollPositionUntilNextRender:E}=(0,d.o5)();if(null!=h){const e=k[h];null!=e&&e!==w&&y.some((t=>t.value===e))&&_(e)}const T=e=>{const t=e.currentTarget,n=N.indexOf(t),r=y[n].value;r!==w&&(E(t),_(r),null!=h&&x(h,String(r)))},S=e=>{var t;let n=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,a.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},b)},y.map((e=>{let{value:t,label:n,attributes:o}=e;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:S,onClick:T},o,{className:(0,a.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,i.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return i.createElement(p,(0,r.Z)({key:String(t)},e))}},7672:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(9496);const i=e=>{const t={fontSize:"1.3rem",paddingRight:"left"===e.side&&"0.6rem",paddingLeft:"right"===e.side&&"0.6rem",verticalAlign:"center",display:"flex"};return r.createElement("div",{style:{width:"fit-content",fontWeight:"600",padding:"0.5rem",borderRadius:"0.2rem",verticalAlign:"baseline",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",color:"white",...e.style},className:"icon-button"},"left"===e.side&&r.createElement("div",{style:t},e.icon),r.createElement("div",null,e.children),"right"===e.side&&r.createElement("div",{style:t},e.icon))}},2004:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(9496),i=n(7672),a=n(9337);const o=e=>r.createElement("div",{style:{display:"flex"}},r.createElement("a",{href:e.repo,style:{marginRight:"0.6rem"}},r.createElement(i.Z,{side:"left",icon:r.createElement(a.rFR,null)},"GitHub")),e.docs&&r.createElement("a",{href:e.docs},r.createElement(i.Z,{side:"left",icon:r.createElement(a.DRM,null)},"Documentation")))},3029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(4250),i=(n(9496),n(9613)),a=n(2004);n(3408),n(6489);const o={title:"Getting Started",sidebar_position:1,slug:"./../"},l=void 0,s={unversionedId:"ox_inventory/Getting Started/index",id:"ox_inventory/Getting Started/index",title:"Getting Started",description:"This resource is being designed with the intention of providing advanced functionality while remaining easy to use,",source:"@site/docs/ox_inventory/Getting Started/index.md",sourceDirName:"ox_inventory/Getting Started",slug:"/ox_inventory/",permalink:"/docs/ox_inventory/",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Getting Started/index.md",tags:[],version:"current",lastUpdatedAt:1679089741,formattedLastUpdatedAt:"Mar 17, 2023",sidebarPosition:1,frontMatter:{title:"Getting Started",sidebar_position:1,slug:"./../"},sidebar:"ox_inventory",previous:{title:"Inventory",permalink:"/docs/category/inventory"},next:{title:"Common Issues",permalink:"/docs/ox_inventory/Getting Started/issues"}},d={},u=[{value:"Dependencies",id:"dependencies",level:2},{value:"oxmysql",id:"oxmysql",level:3},{value:"ox_lib",id:"ox_lib",level:3},{value:"Optional Dependencies",id:"optional-dependencies",level:2},{value:"ox_target",id:"ox_target",level:3},{value:"npwd",id:"npwd",level:3},{value:"Installation",id:"installation",level:2},{value:"Production Build",id:"production-build",level:3},{value:"Setup",id:"setup",level:3},{value:"Custom Framework",id:"custom-framework",level:4}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This resource is being designed with the intention of providing advanced functionality while remaining easy to use,\nhowever it is not recommended for beginners. You must possess a basic understanding of coding and the ability to read;\notherwise you ",(0,i.kt)("strong",{parentName:"p"},"should not")," install this resource.")),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("h3",{id:"oxmysql"},"oxmysql"),(0,i.kt)("p",null,"We utilise our own resource to communicate with MySQL databases via the node-mysql2 package.",(0,i.kt)("br",{parentName:"p"}),"\n","The backend is actively maintained and updated unlike the package used by mysql-async, providing improved performance, security, and features.",(0,i.kt)("br",{parentName:"p"}),"\n","We provide full backwards compatibility with mysql-async and build for the current Cfx architecture."),(0,i.kt)(a.Z,{repo:"https://www.github.com/overextended/oxmysql",docs:"../oxmysql",mdxType:"ResourceLinks"}),(0,i.kt)("h3",{id:"ox_lib"},"ox_lib"),(0,i.kt)("p",null,"Provides easily reusable functions that can be imported into your resource or called with exports. Notably used for"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Intervals"),(0,i.kt)("li",{parentName:"ul"},"Event callbacks"),(0,i.kt)("li",{parentName:"ul"},"Streaming"),(0,i.kt)("li",{parentName:"ul"},"Points and markers"),(0,i.kt)("li",{parentName:"ul"},"Notifications and progress bar")),(0,i.kt)(a.Z,{repo:"https://www.github.com/overextended/ox_lib",docs:"../ox_lib",mdxType:"ResourceLinks"}),(0,i.kt)("h2",{id:"optional-dependencies"},"Optional Dependencies"),(0,i.kt)("p",null,"The resources listed under here ",(0,i.kt)("strong",{parentName:"p"},"aren't")," necessary for the inventory to work but still have full support."),(0,i.kt)("h3",{id:"ox_target"},"ox_target"),(0,i.kt)("p",null,'A performant and flexible standalone "third-eye" targeting resource.',(0,i.kt)("br",{parentName:"p"}),"\n","Stashes, shops, and crafting benches will be accessible via zone targets instead of using markers."),(0,i.kt)(a.Z,{repo:"https://www.github.com/overextended/ox_target",docs:"../ox_target",mdxType:"ResourceLinks"}),(0,i.kt)("h3",{id:"npwd"},"npwd"),(0,i.kt)("p",null,"A standalone and feature-rich phone created by Project Error."),(0,i.kt)("p",null,"The inventory will handle disabling the phone when the player has no item, and supports toggling the phone through item use."),(0,i.kt)(a.Z,{repo:"https://github.com/project-error/npwd",docs:"https://projecterror.dev/docs/npwd/start/installation",mdxType:"ResourceLinks"}),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("h3",{id:"production-build"},"Production Build"),(0,i.kt)("p",null,"The user interface included with the source code must be compiled.",(0,i.kt)("br",{parentName:"p"}),"\n","You can compile it yourself by following the ",(0,i.kt)("a",{parentName:"p",href:"./Guides/inventory_ui"},"build guide"),", otherwise download a production build below."),(0,i.kt)(a.Z,{repo:"https://github.com/overextended/ox_inventory/releases/latest",mdxType:"ResourceLinks"}),(0,i.kt)("h3",{id:"setup"},"Setup"),(0,i.kt)("p",null,"If you are using a supported framework, refer to the dedicated guide in the navigation bar."),(0,i.kt)("h4",{id:"custom-framework"},"Custom Framework"),(0,i.kt)("p",null,"Integration between your framework and ox_inventory should be relatively simple if you aren't replacing and attempting to support backwards-compatibility with an existing inventory system."),(0,i.kt)("p",null,"You should first reference the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/blob/main/modules/mysql/server.lua"},"mysql")," module and setup appropriate table and column names."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"elseif shared.framework == 'myframework' then\n    playerTable = 'characters' -- table storing player / character data\n    playerColumn = 'charid'    -- primary key for identifying the character (i.e. identifier, citizenid, id)\n    vehicleTable = 'vehicles'  -- table storing owned vehicle data\n    vehicleColumn = 'id'       -- primary key for identifying the vehicle (i.e. plate, vin, id)\nend\n")),(0,i.kt)("p",null,'You will need events and functions to handle licenses, owned vehicles, and job systems; these should be handled in the "bridge" module.'),(0,i.kt)("p",null,"If your framework doesn't have its own inventory system or you don't care about compatibility, it may be easier to refer to the incredibly barebones ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/tree/main/modules/bridge/ox"},"ox bridge")," (used by ox_core)."),(0,i.kt)("p",null,"Refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/tree/main/modules/bridge/esx"},"esx bridge")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/tree/main/modules/bridge/qb"},"qbcore bridge")," to get an idea of replacing existing inventories."),(0,i.kt)("p",null,"... todo: more information, work on a bridge template"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"You should restart your server after the first startup to ensure everything has been correctly setup")))}p.isMDXComponent=!0}}]);