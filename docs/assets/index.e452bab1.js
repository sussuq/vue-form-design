import{i as E,b as n,c as o,d as k,f as K,F as w,k as a,w as e,x as A,y as h,z as V,e as i,t as x,g as t,r as F,o as T,m as H,A as P,B as U,j as I,h as D,u as N,C as z,D as Q,G as W,K as X,H as Y}from"./index.58206b0d.js";const Z=""+new URL("logo.03d6d6da.png",import.meta.url).href,ee=E({__name:"menuItem",props:{data:{default:()=>[]}},setup(C){return(m,s)=>{const u=n("el-icon"),v=n("menu-item",!0),c=n("el-sub-menu"),f=n("el-menu-item");return o(!0),k(w,null,K(C.data,(l,p)=>(o(),k(w,{key:p},[l.children?(o(),a(c,{key:0,index:l.path||l.name},{title:e(()=>[l.elIcon?(o(),a(u,{key:0},{default:e(()=>[(o(),a(A(l.elIcon)))]),_:2},1024)):h("",!0),l.icon?(o(),k("i",{key:1,class:V(`icon ${l.icon}`)},null,2)):h("",!0),i("span",null,x(l.name),1)]),default:e(()=>[t(v,{data:l.children},null,8,["data"])]),_:2},1032,["index"])):(o(),a(f,{key:1,index:l.path||l.name},{default:e(()=>[l.elIcon?(o(),a(u,{key:0},{default:e(()=>[(o(),a(A(l.elIcon)))]),_:2},1024)):h("",!0),l.icon?(o(),k("i",{key:1,class:V(`icon ${l.icon}`)},null,2)):h("",!0),i("span",null,x(l.name),1)]),_:2},1032,["index"]))],64))),128)}}}),te=E({__name:"menu",props:{collapse:{type:Boolean}},emits:["getMenuList"],setup(C,{emit:m}){const s=F([]),u=()=>{const c=window.sessionStorage.getItem("formMenuList");if(c){s.value=JSON.parse(c);return}H("menuList",{status:1}).then(f=>{s.value=P(f.data,"transformDataToChild"),window.sessionStorage.setItem("formMenuList",JSON.stringify(s.value))})},v=()=>{};return T(()=>{m("getMenuList",s.value),u()}),(c,f)=>{const l=n("el-menu");return o(),a(l,{collapse:C.collapse,"active-text-color":"#ffd04b","background-color":"rgb(48 65 86)","text-color":"#fff",onSelect:v,router:""},{default:e(()=>[t(ee,{data:s.value},null,8,["data"])]),_:1},8,["collapse"])}}}),ne=D("\u9996\u9875"),oe={class:"comm-header-tool"},le={class:"header-right"},ae={class:"header-avatar",style:{cursor:"pointer"}},se={class:"name"},ce=i("span",{class:"title"},"\u4E2A\u4EBA\u4E2D\u5FC3",-1),ue=i("span",{class:"title"},"\u8BBE\u7F6E",-1),re=i("span",{class:"title"},"\u9000\u51FA\u767B\u5F55",-1),_e=E({__name:"header",props:{collapse:{type:Boolean}},emits:["click"],setup(C,{emit:m}){const s=U(),u=I(()=>s==null?void 0:s.breadcrumb),v=F({name:"admin",avatar:""}),c=l=>{m("click",l)},f=()=>{console.log("logout")};return(l,p)=>{const r=n("Fold"),_=n("Expand"),d=n("el-icon"),y=n("el-breadcrumb-item"),L=n("el-breadcrumb"),B=n("RefreshRight"),S=n("FullScreen"),$=n("el-avatar"),M=n("arrow-down"),b=n("User"),R=n("el-menu-item"),q=n("Setting"),G=n("CircleClose"),J=n("el-menu"),O=n("el-dropdown");return o(),k(w,null,[t(d,{onClick:p[0]||(p[0]=g=>c("collapse")),class:"collapse-icon"},{default:e(()=>[C.collapse?(o(),a(_,{key:1})):(o(),a(r,{key:0}))]),_:1}),t(L,{separator:"/",class:"breadcrumb"},{default:e(()=>[t(y,{to:{path:"/"}},{default:e(()=>[ne]),_:1}),(o(!0),k(w,null,K(N(u),(g,j)=>(o(),k(w,{key:j},[g.path?(o(),a(y,{key:0,to:{path:g.path}},{default:e(()=>[D(x(g.label),1)]),_:2},1032,["to"])):(o(),a(y,{key:1},{default:e(()=>[D(x(g.label),1)]),_:2},1024))],64))),128))]),_:1}),i("div",oe,[t(d,{onClick:p[1]||(p[1]=g=>c("refresh")),title:"\u5237\u65B0\u9875\u9762"},{default:e(()=>[t(B)]),_:1}),t(d,{title:"\u5168\u5C4F"},{default:e(()=>[t(S,{onClick:p[2]||(p[2]=g=>c("fullScreen"))})]),_:1})]),i("div",le,[t(O,null,{dropdown:e(()=>[t(J,{class:"avatar-menu"},{default:e(()=>[t(R,null,{default:e(()=>[t(d,null,{default:e(()=>[t(b)]),_:1}),ce]),_:1}),t(R,null,{default:e(()=>[t(d,null,{default:e(()=>[t(q)]),_:1}),ue]),_:1}),t(R,{onClick:f},{default:e(()=>[t(d,null,{default:e(()=>[t(G)]),_:1}),re]),_:1})]),_:1})]),default:e(()=>[i("div",ae,[t($,{class:"avatar",size:"small",shape:"circle",src:v.value.avatar},null,8,["src"]),i("span",se,x(v.value.name),1),t(d,{class:"el-icon--right"},{default:e(()=>[t(M)]),_:1})])]),_:1})])],64)}}});const ie=i("img",{src:Z,alt:""},null,-1),me=E({__name:"index",setup(C){const m=U(),s=F(z("collapseMenu")==="true"),u=F(!1),v=F([]),c=I({get:()=>m.reloadFlag,set:()=>{m.setReloadRouter()}}),f=r=>{if(r==="collapse"){const _=!s.value;s.value=_,z("collapseMenu",_.toString())}r==="fullScreen"&&(u.value=!u.value),r==="refresh"&&(c.value=!1,Y(()=>{c.value=!0}))},l=r=>{v.value=r},p=I(()=>{const r=m==null?void 0:m.tabs;if(r){const _=[];return r.forEach(d=>{_.push(d.name)}),_}return[]});return T(()=>{}),(r,_)=>{const d=n("el-aside"),y=n("el-header"),L=n("router-view"),B=n("el-main"),S=n("el-container"),$=n("Close"),M=n("el-icon");return o(),a(S,{class:"common-layout"},{default:e(()=>[u.value?h("",!0):(o(),a(d,{key:0,width:s.value?"44px":"180px",class:"common-sidebar"},{default:e(()=>[i("div",{class:"logo",onClick:_[0]||(_[0]=b=>r.$router.push({path:"/"}))},[ie,Q(i("span",null,"AK\u4F4E\u4EE3\u7801\u5FEB\u901F\u5F00\u53D1\u5E73\u53F0",512),[[W,!s.value]])]),t(te,{collapse:s.value,onGetMenuList:l},null,8,["collapse"])]),_:1},8,["width"])),t(S,{class:"overflow-scroll"},{default:e(()=>[u.value?h("",!0):(o(),a(y,{key:0,class:"common-header"},{default:e(()=>[t(_e,{onClick:f,collapse:s.value},null,8,["collapse"])]),_:1})),t(B,{class:"common-main"},{default:e(()=>[N(c)?(o(),a(L,{key:0},{default:e(({Component:b})=>[(o(),a(X,{include:N(p)},[(o(),a(A(b)))],1032,["include"]))]),_:1})):h("",!0)]),_:1})]),_:1}),u.value?(o(),a(M,{key:1,class:"quit-full",onClick:_[1]||(_[1]=b=>f("fullScreen")),title:"\u9000\u51FA\u5168\u5C4F"},{default:e(()=>[t($)]),_:1})):h("",!0)]),_:1})}}});export{me as default};
