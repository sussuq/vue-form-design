import{d as k,H as v,r as l,o as V,c as w,p as u,w as n,y as C,t as p,q as a,C as x,B as L}from"./index.dccdc87d.js";const q=k({__name:"list",setup(N){const i=x(),t=v({visible:!1,row:{}}),d=l(),s=l(),m=l({columns:[{label:"\u52FE\u9009",type:"selection"},{prop:"id",label:"ID",width:"60px"},{prop:"name",label:"\u540D\u79F0",width:"150px"},{prop:"sourceName",label:"\u8868\u5355\u540D\u79F0/ID",width:150},{prop:"category",label:"\u5206\u7C7B",config:{dictKey:"list"}},{prop:"status",label:"\u72B6\u6001",config:{dictKey:"status",tagList:{0:"info",1:"success"}}},{prop:"creatName",label:"\u521B\u5EFA\u4EBA"},{prop:"creatDate",label:"\u521B\u5EFA\u65F6\u95F4",width:200,config:{formatter:"{y}-{m}-{d} {h}:{i}:{s}"}},{label:"\u64CD\u4F5C",prop:"__control",width:"110px",fixed:"right"}],controlBtn:[{label:"\u65B0\u589E\u5217\u8868",icon:"plus",type:"primary",size:"small",click:()=>{r({})}},{label:"\u5220\u9664",key:"del",size:"small",type:"danger",icon:"delete"}],operateBtn:[{label:"\u7F16\u8F91",click:e=>{r(e)}},{label:"\u8BBE\u7F6E",click:e=>{t.visible=!0,L(()=>{t.row=e})}},{label:"\u641C\u7D22\u8BBE\u7F6E",click:e=>{i.push({path:"/design/form",query:{type:"search",id:e.id,redirect:"/design/dataList/list"}})}},{label:"\u67E5\u770B",click:e=>{i.push({path:"/design/dataList/content",query:{id:e.id}})}},{label:"\u5220\u9664",key:"del"}],config:{operateDropdown:!0}}),r=e=>{i.push({path:"/design/dataList",query:{id:e.id}})},b=l({list:[{type:"input",control:{modelValue:"",placeholder:"\u8BF7\u8F93\u5165\u5217\u8868\u540D\u79F0"},config:{},name:"name",item:{label:"\u540D\u79F0"}},{type:"input",control:{modelValue:"",placeholder:"\u8BF7\u8F93\u5165\u8868\u5355\u540D\u79F0"},config:{},name:"sourceName",item:{label:"\u8868\u5355\u540D\u79F0"}},{type:"button",control:{icon:"search",label:"\u67E5\u8BE2",key:"submit",type:"primary"}},{type:"button",control:{label:"\u91CD\u7F6E",key:"reset"}}],form:{labelWidth:"",class:"",size:"default"}}),f=l({list:[{type:"input",control:{modelValue:""},config:{},name:"name",item:{label:"\u540D\u79F0"}},{type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{optionsType:2,optionsFun:"list"},name:"category",item:{label:"\u5206\u7C7B"}},{type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{optionsType:1,optionsFun:"roleList",method:"post",label:"name",value:"id",help:"\u54EA\u4E9B\u89D2\u8272\u53EF\u4EE5\u67E5\u770B"},name:"roleId",item:{label:"\u6743\u9650\u89D2\u8272"}},{type:"component",control:{modelValue:""},config:{componentName:"DiyIconfont"},name:"icon",item:{label:"icon\u56FE\u6807"}},{type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{optionsType:2,optionsFun:"status"},name:"status",item:{label:"\u542F\u7528\u72B6\u6001"}},{type:"switch",control:{modelValue:1,activeValue:1,inactiveValue:0},config:{},name:"showMenu",item:{label:"\u662F\u5426\u5728\u83DC\u5355\u4E2D\u663E\u793A"}},{type:"div",control:{},config:{textAlign:"center"},list:[{type:"button",control:{label:"\u4FEE\u6539",type:"primary",key:"submit"},config:{span:0}},{type:"button",control:{label:"\u53D6\u6D88",key:"reset"},config:{span:0}}]}],form:{labelWidth:"140px",class:"",size:"default",name:"formDialog"},config:{source:""}}),y=e=>{e==="success"&&(t.visible=!1,t.row={},s.value.getListData())},g=e=>(e.id=t.row.id,e),D=e=>{e==="reset"&&(t.visible=!1)},F=e=>(e.type=2,e);return(e,c)=>{const E=a("router-link"),B=a("ak-list"),h=a("ak-form"),_=a("el-dialog");return V(),w("div",null,[u(B,{ref_key:"tableListEl",ref:s,requestUrl:"designList",deleteUrl:"designDelete",searchData:b.value,tableData:m.value,beforeRequest:F},{sourceName:n(({row:o})=>[u(E,{to:`/design/form?id=${o.source}`},{default:n(()=>[C(p(o.sourceName)+"/"+p(o.source),1)]),_:2},1032,["to"])]),_:1},8,["searchData","tableData"]),u(_,{modelValue:t.visible,"onUpdate:modelValue":c[0]||(c[0]=o=>t.visible=o),title:"\u8BBE\u7F6E",width:"480px","destroy-on-close":""},{default:n(()=>[u(h,{ref_key:"formEl",ref:d,formData:f.value,type:2,value:t.row,editUrl:"designChange",afterSubmit:y,beforeSubmit:g,onBtnClick:D},null,8,["formData","value"])]),_:1},8,["modelValue"])])}}});export{q as default};
