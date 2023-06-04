(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1181],{470:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ox_inventory/Events/Client",function(){return r(5335)}])},5335:function(e,n,r){"use strict";r.r(n);var t=r(1527),s=r(6510),i=r(6736);function o(e){let n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",span:"span",br:"br",ul:"ul",li:"li",em:"em"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:"Client events"}),"\n",(0,t.jsx)(n.p,{children:"This is not a comprehensive list of events and is missing events intended for internal use only."}),"\n",(0,t.jsx)(n.h2,{id:"triggers",children:"Triggers"}),"\n",(0,t.jsx)(n.p,{children:"These events are safe to trigger and handle in other scripts."}),"\n",(0,t.jsx)(n.h3,{id:"ox_inventorydisarm",children:"ox_inventory:disarm"}),"\n",(0,t.jsx)(n.p,{children:"Can be triggered to force the player to disarm."}),"\n",(0,t.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"TriggerClientEvent"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ox_inventory:disarm'"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", playerId, noAnim)"})]})})}),"\n",(0,t.jsx)(n.h2,{id:"handlers",children:"Handlers"}),"\n",(0,t.jsx)(n.p,{children:"These events shouldn't be triggered by any other scripts."}),"\n",(0,t.jsx)(n.h3,{id:"ox_inventoryupdateinventory",children:"ox_inventory:updateInventory"}),"\n",(0,t.jsxs)(n.p,{children:["Triggered after inventory slots have been updated, included on load.",(0,t.jsx)(n.br,{}),"\n",'Changes is a table containing all updated slot data indexed by slotId. Empty slots are "false".']}),"\n",(0,t.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"AddEventHandler"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ox_inventory:updateInventory'"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"changes"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["changes: ",(0,t.jsx)(n.code,{children:"table<number, table | false>"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"ox_inventorycurrentweapon",children:"ox_inventory:currentWeapon"}),"\n",(0,t.jsx)(n.p,{children:"Triggered when a weapon is equipped or its metadata is altered."}),"\n",(0,t.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"AddEventHandler"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ox_inventory:currentWeapon'"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"weapon"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["weapon?: ",(0,t.jsx)(n.code,{children:"table"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"ox_inventoryitemcount",children:"ox_inventory:itemCount"}),"\n",(0,t.jsxs)(n.p,{children:["Triggered when the amount of an item in the player's inventory is changed.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Note: Not available for ESX, use esx:addInventoryItem or esx:removeInventoryItem."})]}),"\n",(0,t.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"AddEventHandler"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ox_inventory:itemCount'"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"itemName"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"totalCount"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})})]})}r(5941),n.default=(0,s.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)},pageOpts:{filePath:"pages/ox_inventory/Events/Client.mdx",route:"/ox_inventory/Events/Client",headings:[{depth:1,value:"Client events",id:"client-events"},{depth:2,value:"Triggers",id:"triggers"},{depth:3,value:"ox_inventory:disarm",id:"ox_inventorydisarm"},{depth:2,value:"Handlers",id:"handlers"},{depth:3,value:"ox_inventory:updateInventory",id:"ox_inventoryupdateinventory"},{depth:3,value:"ox_inventory:currentWeapon",id:"ox_inventorycurrentweapon"},{depth:3,value:"ox_inventory:itemCount",id:"ox_inventoryitemcount"}],title:"Client events"},pageNextRoute:"/ox_inventory/Events/Client"})}},function(e){e.O(0,[6510,9774,2888,179],function(){return e(e.s=470)}),_N_E=e.O()}]);