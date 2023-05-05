import{d as k,r as u,H as y,o as h,c as _,p as a,w as B,q as n,B as r}from"./index.ae153a4c.js";const V=k({__name:"dict",setup(x){const s=u(),c=u(),d=u(),t=y({visible:!1,type:1,editId:"",formData:{list:[{type:"input",control:{modelValue:"",placeholder:"\u8BF7\u8F93\u5165\u5B57\u5178\u540D\u79F0"},config:{},name:"name",item:{label:"\u5B57\u5178\u540D\u79F0"},customRules:[{type:"required",message:"\u8BF7\u8F93\u5165\u5B57\u5178\u540D\u79F0",trigger:"blur"}]},{type:"input",control:{modelValue:"",placeholder:"\u8BF7\u8F93\u5165\u5B57\u5178\u6807\u8BC6"},config:{editDisabled:!0},name:"type",item:{label:"\u5B57\u5178\u6807\u8BC6"},customRules:[{type:"required",message:"\u8BF7\u8F93\u5165\u5B57\u5178\u6807\u8BC6",trigger:"blur"}]},{type:"radio",control:{modelValue:1},options:[{label:"\u6B63\u5E38",value:1},{label:"\u505C\u7528",value:0}],config:{optionsType:0},name:"status",item:{label:"\u72B6\u6001"}},{type:"textarea",control:{modelValue:""},config:{},name:"remark",item:{label:"\u8BF4\u660E\u63CF\u8FF0"}},{type:"button",control:{label:"\u4FDD\u5B58",type:"primary",key:"submit"},config:{span:0}},{type:"button",control:{label:"\u53D6\u6D88",key:"reset"},config:{span:0}}],form:{labelWidth:"",size:"default"},config:{}}}),l=y({visible:!1,editId:"",formData:{list:[{type:"input",control:{modelValue:"",disabled:!0,placeholder:"\u8BF7\u8F93\u5165\u5B57\u5178\u540D\u79F0"},config:{},name:"name",item:{label:"\u5B57\u5178\u540D\u79F0"}},{type:"flex",list:[{type:"input",control:{modelValue:"",placeholder:"\u663E\u793A\u7684\u6807\u7B7E\u540D\u79F0"},config:{},name:"label",item:{label:"\u5B57\u5178\u6807\u7B7E"}},{type:"input",control:{modelValue:""},config:{},name:"value",item:{label:"\u952E\u503C"}}],tableData:[],control:{},config:{addBtnText:"\u6DFB\u52A0\u4E00\u884C",delBtnText:"\u5220\u9664"},name:"children"},{type:"div",control:{},config:{textAlign:"center"},list:[{type:"button",control:{label:"\u4FDD\u5B58",type:"primary",key:"submit"},config:{span:0}},{type:"button",control:{label:"\u53D6\u6D88",key:"reset"},config:{span:0}}]}],form:{labelWidth:"",size:"default"},config:{style:`.flex-item{display:flex}
.flex-item .el-form-item{ margin-right:10px}`}}}),F=u({columns:[{label:"\u591A\u9009",type:"selection"},{label:"\u5E8F\u53F7",type:"index",width:"70px"},{label:"\u5B57\u5178\u540D\u79F0",prop:"name"},{label:"\u5B57\u5178\u6807\u8BC6",prop:"type"},{label:"\u72B6\u6001",prop:"status",config:{tagList:{0:"info",1:"success"},dictKey:"status"}},{label:"\u66F4\u65B0\u65F6\u95F4",prop:"updateTime",width:170,config:{formatter:"{y}-{m}-{d} {h}:{i}:{s}"}},{label:"\u64CD\u4F5C",prop:"__control",width:180}],controlBtn:[{label:"\u65B0\u589E",type:"primary",size:"small",icon:"plus",click:()=>{t.visible=!0,t.type=1,t.editId="",r(()=>{})}},{label:"\u6279\u91CF\u5220\u9664",type:"danger",size:"small",icon:"delete",key:"del"}],operateBtn:[{label:"\u8BBE\u7F6E",click:e=>{l.visible=!0,l.type=1,l.editId=e.id,r(()=>{d.value.setValue({name:e.name,children:e.children?JSON.parse(e.children):[]})})}},{label:"\u7F16\u8F91",icon:"edit",click:e=>{t.visible=!0,t.type=2,t.editId=e.id,r(()=>{c.value.setValue(e)})}},{label:"\u5220\u9664",key:"del",icon:"delete",visible:"$.isSystem!==1"}],config:{expand:!0}}),g=u({list:[{type:"input",control:{modelValue:"",placeholder:"\u8BF7\u8F93\u5165\u5B57\u5178\u540D\u79F0"},config:{},name:"name",item:{label:"\u5B57\u5178\u540D\u79F0"}},{type:"select",control:{modelValue:"",appendToBody:!0},options:[{label:"\u6B63\u5E38",value:"1"},{label:"\u505C\u7528",value:"0"}],config:{optionsType:0},item:{label:"\u72B6\u6001"}},{type:"button",control:{label:"\u67E5\u8BE2",type:"primary",key:"submit",icon:"search"},config:{}},{type:"button",control:{label:"\u6E05\u7A7A",key:"reset"},config:{}}],form:{labelWidth:"",class:"",size:"default"},config:{}}),D=e=>(e.id=t.editId,e),v=e=>(e.id=l.editId,e),p=()=>{t.visible=!1,l.visible=!1,s.value.getListData()},m=e=>{e==="reset"&&(t.visible=!1,l.visible=!1)};return(e,o)=>{const E=n("ak-list"),b=n("ak-form"),f=n("el-dialog");return h(),_("div",null,[a(E,{ref_key:"tableListEl",ref:s,requestUrl:"dictList",deleteUrl:"dictDelete",searchData:g.value,tableData:F.value},null,8,["searchData","tableData"]),a(f,{modelValue:t.visible,"onUpdate:modelValue":o[0]||(o[0]=i=>t.visible=i),title:"\u6DFB\u52A0\u5B57\u5178",width:"400px","destroy-on-close":""},{default:B(()=>[a(b,{ref_key:"formEl",ref:c,formData:t.formData,type:t.type,addUrl:"dictSave",editUrl:"dictEdit",beforeSubmit:D,afterSubmit:p,onBtnClick:m},null,8,["formData","type"])]),_:1},8,["modelValue"]),a(f,{modelValue:l.visible,"onUpdate:modelValue":o[1]||(o[1]=i=>l.visible=i),title:"\u8BBE\u7F6E\u5B57\u5178\u6570\u636E",width:"400px","destroy-on-close":""},{default:B(()=>[a(b,{ref_key:"formEl2",ref:d,formData:l.formData,type:2,editUrl:"dictEdit",beforeSubmit:v,afterSubmit:p,onBtnClick:m},null,8,["formData"])]),_:1},8,["modelValue"])])}}});export{V as default};
