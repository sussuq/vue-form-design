import{d as j,r as n,H as y,a as p,M as R,N as M,b as N,z as S,o as c,c as z,h,k as C,u as H,w as J,p as W,E as _,g as b,s as u,O as I,B as f,q as m,J as A,i as G}from"./index.dccdc87d.js";const Q=j({__name:"content",setup(K){const g=G(),i=n(),D=n(!0),a=y({searchData:[],tableData:[],dict:{},visible:!0,source:""}),v=p(()=>g.query.id),k=()=>{if(!v.value)return _.error("\u975E\u6CD5\u64CD\u4F5C..."),!1;const e={id:v.value};b("designById",e).then(s=>{const o=s.data;o&&Object.keys(o).length&&(a.searchData=u(o.data),a.tableData=u(o.listData),a.dict=I(o.dict),a.source=o.source,f(()=>{i.value.getListData(),D.value=!1}),E())})};R(()=>{B()});const B=M(()=>g.query.id,()=>{k()},{}),l=n(),t=y({visible:!1,title:"",formType:1,formData:{},width:"",dict:{},editId:""}),r=p(()=>{var e;return a.source&&((e=a.tableData.config)==null?void 0:e.openType)==="dialog"}),E=()=>{var e;r.value&&(t.width=(e=a.tableData.config)==null?void 0:e.dialogWidth,b("designById",{id:a.source}).then(s=>{const o=s.data;o&&Object.keys(o).length&&(t.formData=u(o.data),t.dict=I(o.dict))}).catch(s=>{_.error(s.message||"\u975E\u6CD5\u64CD\u4F5C.")}))},F=(e,s)=>{var o;(e.key==="add"||e.key==="edit")&&r.value&&(t.visible=!0,t.title=e.key==="add"?"\u65B0\u589E":"\u7F16\u8F91",t.formType=e.key==="add"?1:2,t.editId=s&&s.id,e.key==="add"&&((o=t.formData.config)==null?void 0:o.addLoad)&&f(()=>{l.value.getData({formId:a.source})}),e.key==="edit"&&f(()=>{l.value.getData({formId:a.source,id:s.id})}))},w=e=>(e.formId=a.source,e.id=t.editId,e),L=e=>{e==="success"&&(d(),i.value.getListData())},q=e=>{(e==="reset"||e==="cancel")&&d()},T=e=>{d(),e&&e()},d=()=>{t.visible=!1,t.editId=""};return N(()=>{k()}),(e,s)=>{const o=m("ak-list"),U=m("ak-form"),x=m("el-dialog"),O=A("loading");return S((c(),z("div",null,[a.visible?(c(),h(o,{key:0,ref_key:"listEl",ref:i,searchData:a.searchData,tableData:a.tableData,dict:a.dict,formId:a.source,requestUrl:"getContentList",deleteUrl:"delFormContent",autoLoad:!1,onBtnClick:F},null,8,["searchData","tableData","dict","formId"])):C("",!0),H(r)?(c(),h(x,{key:1,"destroy-on-close":"",modelValue:t.visible,"onUpdate:modelValue":s[0]||(s[0]=V=>t.visible=V),title:t.title,width:t.width||"600px","before-close":T},{default:J(()=>[W(U,{ref_key:"formEl",ref:l,formData:t.formData,dict:t.dict,type:t.formType,requestUrl:"getFormContent",addUrl:"saveFormContent",editUrl:"editFormContent",beforeSubmit:w,afterSubmit:L,onBtnClick:q},null,8,["formData","dict","type"])]),_:1},8,["modelValue","title","width"])):C("",!0)])),[[O,D.value]])}}});export{Q as default};
