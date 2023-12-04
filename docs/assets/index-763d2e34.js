import{d as ce,l as B,h as W,p as he,r as D,o as m,b as M,w as u,i as s,m as O,C as me,c as U,a as ne,F as J,g as k,f as G,q as Te,M as Ue,_ as Le,N as ge,L as ye,G as Ae,H as ze,t as ie,n as ee,O as ve,P as Ve,s as be,v as Ee,z as re,Q as De,R as ke,S as Me,U as Oe,A as Be,k as qe,u as Pe,V as Fe,B as je,W as Ke,D as _e,X as Ge,Y as Ne,Z as xe,x as We,$ as we,a0 as Ce,E as Ie}from"./index-62047d8c.js";import{_ as Xe}from"./aceDrawer.vue_vue_type_script_setup_true_lang-0c160b12.js";import{_ as Ye,a as He}from"./headTools.vue_vue_type_script_setup_true_lang-bce72e3a.js";import{_ as Je,a as Re,c as Se,b as Qe,r as V,g as Ze}from"./getData-ce0d89eb.js";import"./echartsInt.vue_vue_type_script_setup_true_lang-1fc3a30f.js";const et=["bg.jpg","bg2.jpg","bg3.jpg","head_bg.png"],fe={bg:et},tt={class:"img-list"},lt=["onClick"],ot=["src"],nt={key:0},st=ce({__name:"upload",emits:["click"],setup(te,{expose:R,emit:S}){const h=B(!1),c=B(),_=B("bg"),l=W(()=>{if(!fe)return[];const b=[];for(const v in fe)b.push(v);return b}),w=W(()=>_.value.name==="upload"?[]:fe?fe[_.value]:[]),X=W(()=>`./static/screen/${_.value}/`),y=b=>{h.value=!1,S("click",X.value+b,c.value)},Q=b=>{_.value="upload",Te(()=>{w.value.unshift(b.path)})};return R({open:(b,v)=>{h.value=!0,c.value=v,b?_.value=b:_.value=l.value[0]}}),he(()=>{}),(b,v)=>{const L=D("el-button"),x=D("el-upload"),T=D("el-tab-pane"),Y=D("el-tabs"),z=D("el-dialog");return m(),M(z,{modelValue:h.value,"onUpdate:modelValue":v[1]||(v[1]=K=>h.value=K),width:"800px",title:"选择上传图片"},{default:u(()=>{var K;return[s(x,{action:me(Ue),"on-success":Q,"show-file-list":!1},{default:u(()=>[s(L,{type:"primary"},{default:u(()=>[O("上传")]),_:1})]),_:1},8,["action"]),s(Y,{modelValue:_.value,"onUpdate:modelValue":v[0]||(v[0]=j=>_.value=j)},{default:u(()=>[(m(!0),U(J,null,ne(l.value,j=>(m(),M(T,{label:j,name:j,key:j},null,8,["label","name"]))),128)),s(T,{label:"上传",name:"upload"})]),_:1},8,["modelValue"]),k("div",tt,[k("ul",null,[(m(!0),U(J,null,ne(w.value,j=>(m(),U("li",{key:j,onClick:se=>y(j)},[k("img",{src:X.value+j,alt:""},null,8,ot)],8,lt))),128))]),(K=w.value)!=null&&K.length?G("",!0):(m(),U("p",nt,"暂无相关素材资源"))])]}),_:1},8,["modelValue"])}}});const at=Le(st,[["__scopeId","data-v-631dd2e4"]]),it={key:0},ct=k("h3",null,"数据",-1),rt=k("h3",null,"接口数据处理事件",-1),ut=k("h3",null,"全局数据",-1),pt=k("h3",null,"接口数据处理事件",-1),dt=ce({__name:"configControl",props:{config:{}},emits:["update:config","openDrawer","update"],setup(te,{emit:R}){const S=te,h=ge(),c=W(()=>h.screenControlAttr),_=W(()=>{var p,n,I,a;return((n=(p=c.value)==null?void 0:p.config)==null?void 0:n.lock)||((a=(I=c.value)==null?void 0:I.position)==null?void 0:a.display)}),l=B(),w=W(()=>c.value.type),X=p=>{R("update:config",Object.assign({},S.config,p))},y=ye({bgColor:"",bgLinear:"",bgAngle:0,bgUpload:"",bgSelect:""}),Q=Ae(()=>S.config,p=>{if(!Object.keys(c.value).length){const n=p.background||"";if(n.indexOf("url")!==-1){const I=new RegExp("(?<=url\\()(.*?)(?=\\))","g"),a=n.match(I);Object.assign(y,{bgUpload:a,bgSelect:3})}else if(n.indexOf("linear")!==-1){const a=n.substring(n.indexOf("(")+1,n.lastIndexOf(")")).split(/,(?![^(]*\))(?![^"']*["'](?:[^"']*["'][^"']*["'])*[^"']*$)/);Object.assign(y,{bgColor:a[1].trim(),bgLinear:a[2].trim(),bgAngle:Number(a[0].replace("deg","")),bgSelect:2})}else Object.assign(y,{bgColor:n,bgSelect:1})}},{immediate:!0}),f=()=>{let p="";switch(y.bgSelect){case 1:p=y.bgColor;break;case 2:p=`linear-gradient(${y.bgAngle}deg, ${y.bgColor}, ${y.bgLinear})`;break;case 3:p=`url(${y.bgUpload})`;break}b("background",p)},b=(p,n)=>{X({[p]:n})},v=W(()=>{var p,n,I,a;if(Object.keys(c.value).length){const{config:e={},position:t,type:o}=c.value;return[{type:"group",title:"位置信息"},{label:"width",value:t.width,placeholder:"请输入宽度",key:"width",path:"position"},{label:"height",value:t.height,placeholder:"请输入高度",key:"height",path:"position"},{label:"left",value:t.left,placeholder:"图层位置",key:"left",path:"position"},{label:"top",value:t.top,key:"top",path:"position"},{label:"right",value:t.right,placeholder:"设置后left为auto",key:"right",path:"position"},{label:"bottom",value:t.bottom,placeholder:"设置后top为auto",key:"bottom",path:"position"},{type:"number",label:"zIndex",value:t.zIndex,placeholder:"请输入层级",key:"zIndex",path:"position"},{type:"group",title:"属性信息"},{type:"switch",label:"锁定",value:e.lock,key:"lock"},{type:"switch",label:"隐藏",value:t.display,key:"display",path:"position"},{label:"样式类名",placeholder:"方便引用个性化样式",value:e.class,key:"class"},{label:"文本内容",placeholder:"请输入文本内容",value:e.text,key:"text",vShow:["text"]},{type:"select",label:"滚动方向",placeholder:"请选择滚动方向",value:e.direction,key:"direction",vShow:["sText"],options:{left:"从左到右",right:"从右到左",top:"从上到下",bottom:"从下到上"}},{type:"number",label:"滚动速度",placeholder:"滚动速度，数字越大速度越慢",value:e.speed,key:"speed",vShow:["sText"]},{type:"number",label:"滚动步长",placeholder:"每单位时间滚动的距离，默认1",value:e.step,key:"step",vShow:["sText"]},{type:"textarea",label:"文本内容",placeholder:"请输入文本内容，支持html",value:e.text,key:"text",vShow:["sText"]},{label:"字体大小",placeholder:"文本字体大小,如14px",value:(p=e.style)==null?void 0:p.fontSize,key:"fontSize",path:"style",vShow:["text","clock"]},{label:"边框",placeholder:"如1px solid #000",value:(n=e.style)==null?void 0:n.border,key:"border",path:"style",vShow:["border"]},{type:"color",label:"背景颜色",value:(I=e.style)==null?void 0:I.background,key:"background",path:"style",vShow:["border"]},{type:"color",label:"字体颜色",value:(a=e.style)==null?void 0:a.color,key:"color",path:"style",vShow:["text","clock"]},{type:"select",label:"时间格式",value:e.dateTime,key:"dateTime",allowCreate:!0,filterable:!0,placeholder:"选择或创建时间格式",vShow:["clock"],options:{"{y}-{m}-{d}":"{y}-{m}-{d}","{h}:{i}:{s}":"{h}:{i}:{s}","{y}-{m}-{d} {h}:{i}:{s}":"{y}-{m}-{d} {h}:{i}:{s}","{y}年{m}月{d}日 {h}:{i}:{s} 星期{w}":"{y}年{m}月{d}日 {h}:{i}:{s} 星期{w}"}},{label:"组件名称",value:e.component,placeholder:"全局注册的组件名称",key:"component",vShow:["component"]},{type:"switch",label:"是否轮播",value:e.carousel,key:"carousel",vShow:["table"]},{type:"number",label:"滚动速度",placeholder:"开启轮播有效",value:e.speed,key:"speed",vShow:["table"]}].filter(d=>{let i=!0;return d.vShow&&(i=d.vShow.includes(o)),d.vHide&&(i=!d.vHide.includes(o)),i})}return[]}),L=(p,n)=>{var I;p.path==="position"?c.value.position[p.key]=n:p.path==="style"?((I=c.value.config)!=null&&I.style||(c.value.config.style={}),c.value.config.style[p.key]=n):c.value.config[p.key]=n,["zIndex","display","lock"].includes(p.key)&&R("update")},x=(p,n)=>{l.value.open(p,n)},T=(p,n)=>{switch(n){case"screenBg":y.bgUpload=p,f();break;case"src":c.value.config.src=p;break}},Y=()=>{R("openDrawer",{codeType:"css",type:"css",title:"当前应用页的样式，类似于.vue文件中的style scoped中的样式"})},z=()=>{R("openDrawer",{content:c.value.option,title:"可参考echarts相关例子编辑",callback:p=>{c.value.option=p}})},K=()=>{var p;R("openDrawer",{codeType:"json",content:((p=c.value.config)==null?void 0:p.style)||{},title:"可输入更多的css样式，须为json格式",callback:n=>{c.value.config.style=n}})},j=()=>{var p;R("openDrawer",{codeType:"json",content:((p=c.value.config)==null?void 0:p.props)||{},title:"支持所有表格props属性，可参考el-table。json格式",callback:n=>{c.value.config.props=n}})},se=()=>{let p=c.value.columns;(!p||!p.length)&&(p=[{prop:"",label:""}]),R("openDrawer",{codeType:"json",content:p,title:"表格列设置，可参考table-column属性",callback:n=>{c.value.columns=n}})},Z=(p,n)=>{let I;n==="global"?I=S.config&&S.config[p]:I=c.value.events&&c.value.events[p],I||(p==="beforeRequest"?I=a=>(console.log("beforeRequest",a),a):n==="global"?I=a=>(console.log("afterResponse",a),a):I=(a,e,t)=>(console.log("afterResponse",a,e,t),e)),R("openDrawer",{content:I,title:p==="beforeRequest"?"这里可处理请求前的参数，返回相应参数给接口":"接口数据处理。也可为字符串，如opt=formatTest",callback:a=>{n==="global"?S.config[p]=a:(c.value.events||(c.value.events={}),c.value.events[p]=a)}})},ue=()=>{var a,e;let p,n;const I=c.value.config.optionsType;I===2?(n="从大屏配置的全局数据里获取指定数据",p=(a=c.value.events)==null?void 0:a.getGlobal,p||(p=(t,o)=>(console.log("getGlobalData",t,o),t))):(n="图表数据，替换相关数据返回即可",["text","sText"].includes(w.value)?(p=(e=c.value.config)==null?void 0:e.text,n="编辑文本内容数据"):p=c.value.option,w.value==="table"&&(n="表格列表数据。根据设定的table-column列数据设置对应的数据")),R("openDrawer",{content:p,title:n,callback:t=>{I===2?(c.value.events||(c.value.events={}),c.value.events.getGlobal=t):["text","sText"].includes(w.value)?c.value.config.text=t:c.value.option=t}})};return ze(()=>{Q()}),(p,n)=>{const I=D("el-switch"),a=D("el-color-picker"),e=D("el-input"),t=D("el-option"),o=D("el-select"),d=D("el-input-number"),i=D("el-form-item"),g=D("el-button"),$=D("el-form"),E=D("el-radio"),q=D("el-radio-group"),F=D("el-tab-pane"),H=D("el-slider"),le=D("el-tabs");return m(),U("div",{class:ee(["main-right",{lock:_.value}])},[s(le,{class:"tabs","model-value":"position"},{default:u(()=>[s(F,{label:"位置属性",name:"position"},{default:u(()=>[s($,{size:"small"},{default:u(()=>[(m(!0),U(J,null,ne(v.value,(r,pe)=>(m(),M(i,{label:r.label,key:pe},{default:u(()=>[r.type==="group"?(m(),U("h3",it,ie(r.title),1)):r.type==="switch"?(m(),M(I,{key:1,"model-value":r.value,onChange:P=>L(r,P),class:ee([r.key])},null,8,["model-value","onChange","class"])):r.type==="color"?(m(),M(a,{key:2,"show-alpha":"",onChange:P=>L(r,P),"model-value":r.value},null,8,["onChange","model-value"])):r.type==="textarea"?(m(),M(e,{key:3,type:"textarea",placeholder:r.placeholder,onChange:P=>L(r,P),"model-value":r.value},null,8,["placeholder","onChange","model-value"])):r.type==="select"?(m(),M(o,{key:4,allowCreate:r.allowCreate,filterable:r.filterable,placeholder:r.placeholder,onChange:P=>L(r,P),"model-value":r.value},{default:u(()=>[(m(!0),U(J,null,ne(r.options,(P,ae)=>(m(),M(t,{key:P,label:P,value:ae},null,8,["label","value"]))),128))]),_:2},1032,["allowCreate","filterable","placeholder","onChange","model-value"])):r.type==="number"?(m(),M(d,{key:5,"controls-position":"right",placeholder:r.placeholder,"model-value":r.value,onInput:P=>L(r,P)},null,8,["placeholder","model-value","onInput"])):(m(),M(e,{key:6,placeholder:r.placeholder,"model-value":r.value,onInput:P=>L(r,P)},null,8,["placeholder","model-value","onInput"]))]),_:2},1032,["label"]))),128)),["image","background"].includes(w.value)?(m(),M(i,{key:0,class:"upload-image"},{default:u(()=>[s(e,{placeholder:"请输入图片地址",modelValue:c.value.config.src,"onUpdate:modelValue":n[0]||(n[0]=r=>c.value.config.src=r)},null,8,["modelValue"]),s(g,{type:"primary",onClick:n[1]||(n[1]=r=>x(w.value==="image"?"img":"bg","src"))},{default:u(()=>[O("选择图片")]),_:1})]),_:1})):G("",!0),["line","bar","pie","echarts"].includes(w.value)?(m(),M(i,{key:1},{default:u(()=>[s(g,{type:"primary",onClick:z},{default:u(()=>[O("图表编辑")]),_:1})]),_:1})):G("",!0),["text","sText","image","background","border","clock"].includes(w.value)?(m(),M(i,{key:2},{default:u(()=>[s(g,{type:"primary",onClick:K},{default:u(()=>[O("编辑更多内联样式")]),_:1})]),_:1})):G("",!0),["table"].includes(w.value)?(m(),M(i,{key:3},{default:u(()=>[s(g,{type:"primary",onClick:j},{default:u(()=>[O("表格属性")]),_:1}),s(g,{type:"primary",onClick:se},{default:u(()=>[O("Table-column")]),_:1})]),_:1})):G("",!0)]),_:1}),["line","bar","pie","echarts","text","sText","table"].includes(w.value)?(m(),M($,{key:0,size:"small"},{default:u(()=>[s(i,null,{default:u(()=>[ct]),_:1}),s(i,{label:"数据类型"},{default:u(()=>[s(q,{modelValue:c.value.config.optionsType,"onUpdate:modelValue":n[2]||(n[2]=r=>c.value.config.optionsType=r)},{default:u(()=>[s(E,{label:0,style:{"margin-right":"4px"}},{default:u(()=>[O("静态")]),_:1}),s(E,{label:2,style:{"margin-right":"4px"}},{default:u(()=>[O("全局")]),_:1}),s(E,{label:1},{default:u(()=>[O("动态")]),_:1})]),_:1},8,["modelValue"])]),_:1}),c.value.config.optionsType!==1?(m(),M(i,{key:0},{default:u(()=>[s(g,{type:"primary",onClick:ue},{default:u(()=>[O("编辑数据")]),_:1})]),_:1})):G("",!0),c.value.config.optionsType===1?(m(),U(J,{key:1},[s(i,null,{default:u(()=>[s(e,{modelValue:c.value.config.requestUrl,"onUpdate:modelValue":n[4]||(n[4]=r=>c.value.config.requestUrl=r),placeholder:"接口URL或api中的key"},{prepend:u(()=>[s(o,{modelValue:c.value.config.method,"onUpdate:modelValue":n[3]||(n[3]=r=>c.value.config.method=r),style:{width:"60px"}},{default:u(()=>[s(t,{label:"get",value:"get"}),s(t,{label:"post",value:"post"}),s(t,{label:"ws",value:"ws",disabled:""})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),_:1}),s(i,{label:"刷新时间"},{default:u(()=>[s(d,{modelValue:c.value.config.loopTime,"onUpdate:modelValue":n[5]||(n[5]=r=>c.value.config.loopTime=r),disabled:""},null,8,["modelValue"])]),_:1}),s(i,null,{default:u(()=>[rt]),_:1}),s(i,null,{default:u(()=>[s(g,{onClick:n[6]||(n[6]=r=>Z("beforeRequest"))},{default:u(()=>[O("beforeRequest")]),_:1})]),_:1}),s(i,null,{default:u(()=>[s(g,{onClick:n[7]||(n[7]=r=>Z("afterResponse"))},{default:u(()=>[O("afterResponse")]),_:1})]),_:1})],64)):G("",!0)]),_:1})):G("",!0)]),_:1}),s(F,{label:"大屏配置",name:"screen"},{default:u(()=>[s($,{size:"small"},{default:u(()=>[s(i,{label:"大屏宽度"},{default:u(()=>[s(e,{placeholder:"请输入大屏宽度","model-value":p.config.width,onInput:n[8]||(n[8]=r=>b("width",r))},null,8,["model-value"])]),_:1}),s(i,{label:"大屏高度"},{default:u(()=>[s(e,{placeholder:"请输入大屏高度","model-value":p.config.height,onInput:n[9]||(n[9]=r=>b("height",r))},null,8,["model-value"])]),_:1}),s(i,{class:"color-picker",label:"主色"},{default:u(()=>[s(a,{"show-alpha":"",onChange:n[10]||(n[10]=r=>b("primary",r)),"model-value":p.config.primary},null,8,["model-value"])]),_:1}),s(i,{label:"背景"},{default:u(()=>[s(o,{modelValue:y.bgSelect,"onUpdate:modelValue":n[11]||(n[11]=r=>y.bgSelect=r),onChange:f},{default:u(()=>[s(t,{value:1,label:"背景色"}),s(t,{value:2,label:"渐变色"}),s(t,{value:3,label:"背景图"})]),_:1},8,["modelValue"])]),_:1}),y.bgSelect!==3?(m(),M(i,{key:0,class:"color-picker"},{default:u(()=>[s(a,{"show-alpha":"",modelValue:y.bgColor,"onUpdate:modelValue":n[12]||(n[12]=r=>y.bgColor=r),onChange:f},null,8,["modelValue"])]),_:1})):G("",!0),y.bgSelect===2?(m(),U(J,{key:1},[s(i,{class:"color-picker"},{default:u(()=>[s(a,{"show-alpha":"",modelValue:y.bgLinear,"onUpdate:modelValue":n[13]||(n[13]=r=>y.bgLinear=r),onChange:f},null,8,["modelValue"])]),_:1}),s(i,{label:"渐变角度"},{default:u(()=>[s(H,{modelValue:y.bgAngle,"onUpdate:modelValue":n[14]||(n[14]=r=>y.bgAngle=r),max:360,onChange:f},null,8,["modelValue"])]),_:1})],64)):G("",!0),y.bgSelect===3?(m(),M(i,{key:2,class:"upload-image"},{default:u(()=>[s(e,{placeholder:"请输入图片地址",modelValue:y.bgUpload,"onUpdate:modelValue":n[15]||(n[15]=r=>y.bgUpload=r),onChange:f},null,8,["modelValue"]),s(g,{type:"primary",onClick:n[16]||(n[16]=r=>x("bg","screenBg"))},{default:u(()=>[O("上传")]),_:1})]),_:1})):G("",!0),s(i,null,{default:u(()=>[s(g,{onClick:Y},{default:u(()=>[O("编辑样式")]),_:1})]),_:1}),s(i,null,{default:u(()=>[ut]),_:1}),s(i,null,{default:u(()=>[s(e,{"model-value":p.config.requestUrl,placeholder:"接口URL或api中的key",onInput:n[18]||(n[18]=r=>b("requestUrl",r))},{prepend:u(()=>[s(o,{"model-value":p.config.method,style:{width:"60px"},onChange:n[17]||(n[17]=r=>b("method",r))},{default:u(()=>[s(t,{label:"get",value:"get"}),s(t,{label:"post",value:"post"}),s(t,{label:"ws",value:"ws",disabled:""})]),_:1},8,["model-value"])]),_:1},8,["model-value"])]),_:1}),s(i,{label:"刷新时间"},{default:u(()=>[s(d,{disabled:"","model-value":p.config.loopTime,onInput:n[19]||(n[19]=r=>b("loopTime",r))},null,8,["model-value"])]),_:1}),s(i,null,{default:u(()=>[pt]),_:1}),s(i,null,{default:u(()=>[s(g,{onClick:n[20]||(n[20]=r=>Z("beforeRequest","global"))},{default:u(()=>[O("beforeRequest")]),_:1})]),_:1}),s(i,null,{default:u(()=>[s(g,{onClick:n[21]||(n[21]=r=>Z("afterResponse","global"))},{default:u(()=>[O("afterResponse")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(at,{ref_key:"uploadImageEl",ref:l,onClick:T},null,512)],2)}}}),ft={class:"main-left"},gt={class:"components-list scroll"},vt={class:"title"},ht=["title"],mt={class:"scroll layer-list"},yt=["onClick"],bt=["onClick"],kt=["onClick"],_t=k("i",{class:"icon-del"},null,-1),xt=ce({__name:"controlLeft",emits:["update","update:active"],setup(te,{expose:R,emit:S}){const h={line:["折线图","line"],bar:["柱状图","bar"],pie:["饼图","pie"],echarts:["通用图表",""],table:["表格","table"],text:["文本","text2"],sText:["滚动文本","stext"],image:["图片","image"],background:["背景","image"],border:["边框","border"],clock:["当前时间","time"],component:["自定义","component"]},c=ge(),_=W(()=>c.activeIndex),l=B([]),w=B([{label:"图表",children:[{type:"line",label:h.line[0],icon:h.line[1],position:{width:400,height:300},option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},grid:{left:0,top:0,right:0,bottom:30},series:[{data:[150,230,224,218,135,147,260],type:"line"}]}},{type:"bar",label:h.bar[0],icon:h.bar[1],position:{width:400,height:300},option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},grid:{left:0,top:0,right:0,bottom:30},series:[{data:[120,200,150,80,70,110,130],type:"bar"}]}},{type:"pie",label:h.pie[0],icon:h.pie[1],position:{width:300,height:300},option:{grid:{left:0,top:0,right:0,bottom:0},series:[{type:"pie",radius:"50%",data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}]}]}},{type:"echarts",label:h.echarts[0],icon:h.echarts[1],position:{width:400,height:300},option:{grid:{left:0,top:0,right:0,bottom:0}}}]},{label:"表格",children:[{type:"table",label:h.table[0],icon:h.table[1],position:{width:500,height:300},option:[],columns:[]}]},{label:"辅助",children:[{type:"text",label:h.text[0],icon:h.text[1],position:{width:100,height:30},config:{text:"文本内容"}},{type:"sText",label:h.sText[0],icon:h.sText[1],position:{width:100,height:30},config:{text:"滚动文本内容"}},{type:"image",label:h.image[0],icon:h.image[1],position:{width:100,height:50},config:{src:""}},{type:"background",label:h.background[0],icon:h.background[1],position:{width:100,height:50},config:{src:""}},{type:"border",label:h.border[0],icon:h.border[1],position:{width:100,height:100},config:{style:{border:"1px solid #fff"}}}]},{label:"其他",children:[{type:"clock",label:h.clock[0],icon:h.clock[1],position:{width:150,height:30}}]},{label:"自定义组件",children:[{type:"component",label:h.component[0],icon:h.component[1],position:{width:200,height:200},config:{}}]}]),X=f=>ve(f),y=(f,b)=>{let v=!1;switch(b){case"display":v=!f.display,f.display=v;break;case"lock":v=!f.lock,f.lock=v;break;case"active":c.setActiveIndex([f.index]);break}S("update",b,f.index,v)};return R({setLayer:f=>{const b=[];f.forEach((v,L)=>{v.type==="group"?b.push({label:"合并组",zIndex:v.position.zIndex||0,display:v.position.display,lock:v.config.lock,index:L,icon:"",groupId:v.id,type:"group"}):v.type!=="tempRect"&&b.push({label:h[v.type][0],icon:h[v.type][1],zIndex:v.position.zIndex||0,display:v.position.display,lock:v.config.lock,index:L,groupId:v.groupId})}),l.value=b.sort(function(v,L){return v.groupId<L.groupId?-1:v.groupId>L.groupId?1:v.icon.localeCompare(L.icon)})}}),(f,b)=>{const v=D("el-tab-pane"),L=D("el-popconfirm"),x=D("el-tabs");return m(),U("div",ft,[s(x,{"model-value":"component",class:"tabs"},{default:u(()=>[s(v,{label:"组件",name:"component"},{default:u(()=>[k("div",gt,[(m(!0),U(J,null,ne(w.value,(T,Y)=>(m(),U("div",{key:Y},[k("div",vt,ie(T.label),1),s(me(Ve),{itemKey:"label",tag:"ul",modelValue:T.children,"onUpdate:modelValue":z=>T.children=z,group:{name:"form",pull:"clone",put:!1},"ghost-class":"ghost",sort:!1,clone:X},{item:u(({element:z})=>[k("li",{class:ee([z.type])},[k("i",{class:ee(`icon-${z.icon}`)},null,2),k("span",{title:z.label},ie(z.label),9,ht)],2)]),_:2},1032,["modelValue","onUpdate:modelValue"])]))),128))])]),_:1}),s(v,{label:"图层",name:"layer"},{default:u(()=>[k("div",mt,[k("ul",null,[(m(!0),U(J,null,ne(l.value,(T,Y)=>(m(),U("li",{key:Y,class:ee({active:_.value.includes(T.index),lock:T.lock,display:T.display,isGroup:T.groupId&&!T.type})},[k("span",{onClick:z=>y(T,"active")},[k("i",{class:ee(`icon-${T.icon}`)},null,2),O(" "+ie(T.label),1)],8,yt),k("i",{onClick:z=>y(T,"display"),class:ee(["icon",[T.display?"icon-eye-close":"icon-eye"]])},null,10,bt),k("i",{onClick:z=>y(T,"lock"),class:ee(["icon",[T.lock?"icon-lock":"icon-lock-open"]])},null,10,kt),s(L,{title:"确认删除",onConfirm:z=>y({index:T.index},"del")},{reference:u(()=>[_t]),_:2},1032,["onConfirm"])],2))),128))])])]),_:1})]),_:1})])}}}),wt={class:"ruler-box"},$e=ce({__name:"ruler",props:{direction:{default:"h"},scale:{},showRuler:{type:Boolean},size:{},scroll:{}},setup(te){const R=te,S=W(()=>{let _={};return R.direction==="v"&&R.scroll[0]>0&&(_={left:R.scroll[0]+20+"px"}),{width:R.size,..._}}),h=W(()=>{const _=R.direction==="h"?1920:1080,l=[];for(let w=0;w<_;w=w+100)l.push(w);return l}),c=_=>parseInt(`${_/R.scale*100}`);return(_,l)=>be((m(),U("div",{class:ee(["screen-ruler",`ruler-${_.direction}`]),style:re(S.value)},[k("div",wt,[(m(!0),U(J,null,ne(h.value,w=>(m(),U("span",{key:w},ie(c(w)),1))),128))])],6)),[[Ee,_.showRuler]])}});const Ct=["onMousedown"],It={key:0,class:"no-date"},Rt={class:"design-footer"},St={class:"control-tip"},$t={class:"center"},Tt={class:"item"},Vt=k("label",{class:"label"},"标尺",-1),Et={class:"item slider"},Dt=k("label",{class:"label"},"缩放比例",-1),Ut={class:"item"},Lt=ce({__name:"design",props:{preview:{type:Boolean},data:{default:()=>({})},updatePosition:{},screenContextmenu:{}},emits:["draggableAdd"],setup(te,{emit:R}){const S=te,h=ge(),c=B(),_=B(""),l=ye({scale:100,autoScale:100,activeTool:"mouse",activeIndex:-1,scroll:[0,0],ruler:!0,offset:[0,0],rect:{left:"0px",top:"0px",width:"0px",height:"0px",display:"none"},tempRectIndex:[],ctrlPress:!1}),w=W(()=>{const{width:e,height:t,background:o,primary:d}=S.data.config,i=l.scale/100;return{width:e,height:t,background:o,transform:`scale(${i})`,color:d,cursor:l.activeTool==="mouse"?"default":"pointer"}}),X=()=>{const e=c.value.scrollTop,t=c.value.scrollLeft;l.scroll=[t,e]},y=e=>e.type==="tempRect"?!!l.tempRectIndex.length:!0,Q=e=>{const t=e.newIndex,o=S.data.list[t];delete o.label,delete o.icon;const{pageX:d,pageY:i}=e.originalEvent;o.position||(o.position={}),o.config||(o.config={}),o.position.left=Re(d-l.offset[0]+l.scroll[0]),o.position.top=Re(i-l.offset[1]+l.scroll[1]),l.activeIndex=t,K(o),R("draggableAdd")},f=e=>{const t=S.data.list;let o=-1;t.forEach((d,i)=>{d.type==="tempRect"&&(o=i,d.position=e,l.activeIndex=i)}),o===-1&&(t.push({type:"tempRect",position:e}),l.activeIndex=t.length-1)},b=()=>{const e={left:0,top:0,ex:0,ey:0};for(let o=0;o<l.tempRectIndex.length;o++){const d=S.data.list[l.tempRectIndex[o]],{left:i,top:g,width:$,height:E}=d.position,q=parseInt(i),F=parseInt(g),H=parseInt($),le=parseInt(E);e.left=t(e.left,q),e.top=t(e.top,F),e.ex=Math.max(e.ex,H+q),e.ey=Math.max(e.ey,le+F)}return{left:e.left,top:e.top,width:Math.abs(e.ex-e.left),height:Math.abs(e.ey-e.top)};function t(o,d){return o===0?d:Math.min(o,d)}},v=()=>{if(S.data.list.forEach((t,o)=>{!Se(t.position)&&e(t.position)&&Qe(t)&&(l.tempRectIndex.includes(o)||l.tempRectIndex.push(o))}),l.tempRectIndex.length>1){_.value=`当前选区选中 ${l.tempRectIndex.length} 个组件目标，可使用键盘方向键调整位置`;const{left:t,top:o,width:d,height:i}=b();return l.rect={left:t+"px",top:o+"px",width:d+"px",height:i+"px",display:"none"},!0}else return l.rect.display="none",!1;function e(t){const o=V(t.left),d=V(t.top),i=o+V(t.width),g=d+V(t.height),$=V(l.rect.left),E=V(l.rect.top),q=$+V(l.rect.width),F=E+V(l.rect.height),H=o<q&&$<i,le=d<F&&E<g;return H&&le}},L=e=>{x(),l.moveFlag=!0;const t=c.value.scrollTop,o=c.value.scrollLeft,d=e.pageX+o,i=e.pageY+t,g=(e.pageX-l.offset[0]-20+l.scroll[0])/(l.scale/100),$=(e.pageY-l.offset[1]-20+l.scroll[1])/(l.scale/100);l.activeTool==="mouse"&&(l.rect={left:g+"px",top:$+"px",width:"0px",height:"0px",display:""}),document.onmousemove=E=>{if(l.moveFlag)if(l.activeTool==="mouse"){const q=(E.pageX-l.offset[0]-20+l.scroll[0])/(l.scale/100),F=(E.pageY-l.offset[1]-20+l.scroll[1])/(l.scale/100),H=g>q?q:g,le=$>F?F:$;l.rect={left:H+"px",top:le+"px",width:Math.abs(g-q)+"px",height:Math.abs($-F)+"px",display:""}}else{const q=d-E.pageX,F=i-E.pageY;c.value.scrollTo(q,F)}},document.onmouseup=function(){if(!l.moveFlag)return;const{width:E,height:q}=l.rect;if(l.rect.display="none",parseInt(E)>10&&parseInt(q)>10&&v()){const H=Object.assign({},l.rect,{display:!1});f(H)}l.moveFlag=!1,document.onmousemove=null}},x=()=>{l.tempRectIndex=[],l.activeIndex=-1,K({});const e=["可按住Alt拖动设计区域","可按住Ctrl键选中多个"],t=Oe(0,1);_.value=e[t]},T=e=>{e.preventDefault()},Y=(e,t)=>{if(l.ctrlPress){if(l.tempRectIndex.push(t),l.activeIndex=t,_.value="可按住Ctrl键选中多个",l.tempRectIndex.length>1){const o=b();f(o)}}else e.type!=="tempRect"&&(l.tempRectIndex=[],l.activeIndex=t,K(e)),_.value="可使用键盘方向键调整位置"},z=(e,t,o)=>{t.type==="moveTip"&&(_.value=`当前位置：${t.left}:${t.top}`),S.updatePosition(e,t,o)},K=e=>{h.setScreenControlAttr(e)},j=B({100:{style:{}}}),se=e=>{const t=h.getDataScreen(e)||!1;setTimeout(()=>{a()},500),h.setDataScreen(e,!t)},Z=e=>{c.value.scrollTo(0,0),e==="auto"?l.scale=l.autoScale:l.scale=100,h.setDataScreen("scale",l.scale)},ue=e=>{h.setDataScreen("scale",e)},p=e=>{e.key==="Control"&&(l.ctrlPress||(l.tempRectIndex=[]),l.ctrlPress=!0),e.key==="Alt"&&(l.activeTool="process");const t=["ArrowRight","ArrowLeft","ArrowDown","ArrowUp"];if(l.activeIndex!==-1&&t.includes(e.key)){const o=S.data.list[l.activeIndex],d=Se(o==null?void 0:o.position,!0),i={type:"keydown",eventKey:e.key};d||S.updatePosition(l.activeIndex,i,l.tempRectIndex),e.preventDefault()}},n=()=>{l.activeTool!=="mouse"&&(l.activeTool="mouse"),l.ctrlPress=!1},I=e=>{const t=Object.assign({},e,{activeIndex:l.activeIndex,tempRectIndex:l.tempRectIndex,callback:(o,d)=>{switch(o){case"canvasClick":x();break;case"merge":x(),l.activeIndex=d==null?void 0:d.index,K(S.data.list[d.index]);break}}});S.screenContextmenu(t)},a=()=>{Te(()=>{var d;const e=c.value.offsetWidth,t=parseInt((d=S.data.config)==null?void 0:d.width);if(e&&t){const i=parseInt(`${e/t*100}`),g=h.getDataScreen("scale");l.autoScale=i,l.scale=parseInt(g)||i}const o=c.value.getBoundingClientRect();l.offset[1]=o.top+document.documentElement.scrollTop-(document.documentElement.clientTop||0),l.offset[0]=o.left+document.documentElement.scrollLeft-(document.documentElement.clientLeft||0)})};return he(()=>{a(),document.addEventListener("keydown",p),document.addEventListener("keyup",n)}),De(()=>{document.removeEventListener("keydown",p),document.removeEventListener("keyup",n)}),(e,t)=>{const o=D("el-switch"),d=D("el-slider"),i=D("el-button");return m(),U(J,null,[k("div",{ref_key:"designBoxEl",ref:c,class:"design-box",onScroll:X},[s($e,{scale:l.scale,scroll:l.scroll,"show-ruler":l.ruler,size:"1920px"},null,8,["scale","scroll","show-ruler"]),s($e,{scale:l.scale,scroll:l.scroll,"show-ruler":l.ruler,direction:"v",size:"1080px"},null,8,["scale","scroll","show-ruler"]),k("div",{class:ee([{preview:e.preview},"design-canvas"]),style:re(w.value),onContextmenu:T,onMousedown:ke(L,["left"])},[s(me(Ve),Me({group:"form",animation:200,handle:".none"},{list:e.data.list,class:"drag",itemKey:"id",name:"fade",onAdd:Q}),{item:u(({element:g,index:$})=>[y(g)?(m(),M(Je,{key:0,current:l.activeIndex===$,data:g,scale:l.scale,type:0,onContextmenu:I,onChangeEvent:E=>z($,E,l.tempRectIndex),onClick:ke(E=>Y(g,$),["stop"])},null,8,["current","data","scale","onChangeEvent","onClick"])):G("",!0)]),_:1},16,["list"]),k("div",{style:re(l.rect),class:"draw-react"},null,4)],46,Ct),e.data.list.length?G("",!0):(m(),U("div",It," 请从左则组件栏拖动组件到设计区域 "))],544),k("div",Rt,[k("i",{class:"icon-menu icon",onClick:t[0]||(t[0]=g=>se("left"))}),k("div",St,ie(_.value),1),k("div",$t,[k("div",Tt,[Vt,s(o,{modelValue:l.ruler,"onUpdate:modelValue":t[1]||(t[1]=g=>l.ruler=g),size:"small"},null,8,["modelValue"])]),k("div",Et,[Dt,s(d,{modelValue:l.scale,"onUpdate:modelValue":t[2]||(t[2]=g=>l.scale=g),marks:j.value,max:200,min:l.autoScale-30,"show-stops":"",size:"small",onChange:ue},null,8,["modelValue","marks","min"])]),k("div",Ut,[s(i,{link:"",type:"primary",onClick:t[3]||(t[3]=g=>Z("auto"))},{default:u(()=>[O("自适应 ")]),_:1}),s(i,{link:"",type:"primary",onClick:t[4]||(t[4]=g=>Z("100"))},{default:u(()=>[O("100% ")]),_:1})])]),k("i",{class:"icon-menu icon",onClick:t[5]||(t[5]=g=>se("right"))})])],64)}}}),At=["onClick"],zt=ce({__name:"rightMenu",emits:["click"],setup(te,{expose:R,emit:S}){const h=B({}),c=B(!1),_=W(()=>{let f=h.value.type;["tempRect","group"].includes(f)||(f="single");const b={tempRect:["merge","left","right","top","bottom","horizontally","verticalCenter","del","lock","display"],group:["copy","split","del","lock","display"],single:["copy","del","lock","display"]};return[{key:"merge",label:"组合"},{key:"split",label:"拆分"},{key:"left",label:"左对齐"},{key:"right",label:"右对齐"},{key:"top",label:"顶部对齐"},{key:"bottom",label:"底部对齐"},{key:"horizontally",label:"水平居中"},{key:"verticalCenter",label:"垂直居中"},{key:"copy",label:"复制"},{key:"del",label:"删除"},{key:"lock",label:"锁定"},{key:"display",label:"隐藏"}].filter(v=>b[f].includes(v.key))}),l=W(()=>({left:`${h.value.x+10}px`,top:`${h.value.y+10}px`})),w=()=>{setTimeout(()=>{y()},1e3)},X=f=>{S("click",f,h.value),y()},y=()=>{c.value=!1};return R({open:f=>{h.value=f,c.value=!0},close:y}),(f,b)=>be((m(),U("div",{class:"screen-right-menu",style:re(l.value),onMouseleave:w},[k("ul",null,[(m(!0),U(J,null,ne(_.value,v=>(m(),U("li",{key:v.key,onClick:L=>X(v.key)},ie(v.label),9,At))),128))])],36)),[[Ee,c.value]])}}),Mt={class:"container-screen"},Ot={class:"main-box"},Bt=ce({__name:"index",setup(te){const R=Be(),S=qe(),h=Pe(),c=ge();h.changeBreadcrumb([{label:"系统工具"},{label:"可视化大屏设计"}]),h.setCollapseMenu(!0);const _=a=>!c.getDataScreen(a),l=B(!1),w=B(!1),X=B(),y=B(),Q=B(),f=B({list:[],config:{width:"1920px",height:"1080px",background:"#000",style:"",primary:"#409eff"}}),b=B({});Fe("globalScreen",b);const v=()=>{y.value.setLayer(f.value.list)},L=a=>{switch(c.setScreenControlAttr({}),a){case"del":f.value.list=[],v();break;case"eye":w.value=!0;break;case"json":z({type:"json",content:f.value,title:"可编辑修改或将已生成的脚本粘贴进来"});break;case"vue":Q.value.openScreen(f.value);break;case"save":n();break}},x=ye({visible:!1,title:"",direction:"ltr",content:"",codeType:"",callback:""}),T=()=>{K()},Y=a=>{try{if(typeof x.callback=="function"){const e=x.codeType==="json"?Ke(a):_e(a);x.callback(e)}else switch(x.type){case"css":f.value.config.style=a,Ge("screenStyle",a,!0);break;case"json":f.value=_e(a),v();break}K()}catch{}},z=a=>{const{type:e,direction:t,codeType:o,title:d,callback:i,content:g}=a;x.direction=t||"ltr",x.type=e,x.codeType=o||"",x.title=d?`提示：${d}`:"",x.visible=!0,x.callback=i;let $=o==="json"?Ne(g,!0):xe(g,!0);switch(e){case"css":$=f.value.config.style||"";break}x.content=$},K=()=>{x.visible=!1,x.type="",x.title="",x.codeType="",x.callback="",x.content=""},j=(a,e,t)=>{if(e.type==="move"){const d=f.value.list[a];d.position.left=e.left,d.position.top=e.top,d.type==="tempRect"&&t.forEach(i=>{const g=f.value.list[i];g.position.left=parseInt(g.position.left)+e.moveX,g.position.top=parseInt(g.position.top)+e.moveY})}if(e.type==="resize"){const d=f.value.list[a];d.position.left=e.left,d.position.top=e.top,d.position.width=e.width,d.position.height=e.height}if(e.type==="keydown"){const{type:d}=f.value.list[a];o(a,e.eventKey),d==="tempRect"&&(t!=null&&t.length)&&t.forEach(i=>{o(i,e.eventKey)})}function o(d,i){const{position:g}=f.value.list[d],$=V(g.left),E=V(g.top);switch(i){case"ArrowRight":g.left=$+1;break;case"ArrowLeft":g.left=$-1;break;case"ArrowDown":g.top=E+1;break;case"ArrowUp":g.top=E-1;break}}},se=(a,e,t)=>{const o=f.value.list,d=o[e],i=d.id;["display","lock"].includes(a)&&(a==="display"?o[e].position[a]=t:o[e].config[a]=t,i&&d.type==="group"&&o.forEach(g=>{g.groupId===i&&(a==="display"?g.position.display=t:g.config.lock=t)})),a==="active"&&c.setScreenControlAttr(o[e]),a==="del"&&(f.value.list.splice(e,1),i&&d.type==="group"&&(f.value.list=o.filter(g=>g.groupId!==i))),v()},Z=B(),ue=a=>{Z.value.open(a)},p=(a,e)=>{console.log(a,e);const t=f.value.list,o=t[e.activeIndex],d=o.id,i=o.type,{left:g,top:$,width:E,height:q}=o.position;switch(a){case"copy":const F=ve(o);if(d){const C=Ce(8);F.id=C,t.forEach(A=>{if(A.groupId===d){const oe=ve(A);oe.groupId=C,f.value.list.push(oe)}})}f.value.list.push(F);break;case"del":if(f.value.list.splice(e.activeIndex,1),d&&o.type==="group"&&(f.value.list=t.filter(C=>C.groupId!==d)),i==="tempRect")for(let C=e.tempRectIndex.length-1;C>=0;C--)f.value.list.splice(e.tempRectIndex[C],1);e.callback("canvasClick");break;case"lock":case"display":if(i!=="tempRect"&&(a==="display"?o.position[a]=!0:o.config[a]=!0),d&&t.forEach(C=>{C.groupId===d&&(a==="display"?C.position.display=!0:C.config.lock=!0)}),i==="tempRect"){for(let C=0;C<e.tempRectIndex.length;C++)a==="display"?t[e.tempRectIndex[C]].position.display=!0:t[e.tempRectIndex[C]].config.lock=!0;o.position.display=!0}break;case"merge":const H=Ce(8);f.value.list.push({type:"group",position:{left:g,top:$,width:E,height:q,zIndex:110},config:{},id:H});const le=f.value.list.length-1;e.callback("merge",{index:le}),v();break;case"split":t.forEach(C=>{C.groupId===d&&delete C.groupId}),f.value.list.splice(e.activeIndex,1),e.callback("canvasClick"),v();break;case"left":case"top":const r=a==="left"?"width":"height";if(i==="tempRect"){const C=V(o.position[a]);let A=0;for(const oe in e.tempRectIndex){const N=t[e.tempRectIndex[oe]];N.position[a]=C,N.position[r]>A&&(A=V(N.position[r]))}o.position[r]=A+"px"}break;case"right":if(i==="tempRect"){const C=V(E)+V(g);let A=0;for(const oe in e.tempRectIndex){const N=t[e.tempRectIndex[oe]];N.position.left=C-V(N.position.width),N.position.width>A&&(A=V(N.position.width))}o.position.width=A+"px",o.position.left=`${C-A}px`}break;case"bottom":if(i==="tempRect"){const C=V(q)+V($);let A=0;for(const oe in e.tempRectIndex){const N=t[e.tempRectIndex[oe]];N.position.top=C-V(N.position.height),N.position.height>A&&(A=V(N.position.height))}o.position.height=A+"px",o.position.top=`${C-A}px`}break;case"horizontally":case"verticalCenter":let pe=V($)+V(q)/2,P="top",ae="height";a==="verticalCenter"&&(pe=V(g)+V(E)/2,P="left",ae="width");let de=0;for(const C in e.tempRectIndex){const A=t[e.tempRectIndex[C]];A.position[P]=pe-V(A.position[ae])/2,A.position[ae]>de&&(de=V(A.position[ae]))}o.position[ae]=de+"px",o.position[P]=pe-de/2;break}},n=()=>{const a={data:xe(f.value),name:"未命名可视化大屏",type:4};let e="designSave";const t=R.query.id;t&&(Object.assign(a,{id:t}),delete a.name,e="designEdit"),l.value=!0,We(e,a).then(o=>{we({message:o.message||"保存成功！",type:"success"}),t||S.push({path:"/design/screen/list"}),l.value=!1}).catch(o=>{we.error(o.message||"保存异常"),l.value=!1})},I=()=>{l.value=!0,Ze(R.query.id).then(a=>{l.value=!1,f.value=a.screenData,b.value=a.globalData,v()}).catch(()=>{l.value=!1})};return he(()=>{I()}),De(()=>{}),(a,e)=>{const t=je("loading");return be((m(),U("div",Mt,[w.value?(m(),U("i",{key:0,class:"icon-close close-preview",onClick:e[0]||(e[0]=o=>w.value=!1)})):G("",!0),s(xt,{ref_key:"controlLeftEl",ref:y,style:re({width:_("left")?"":"0px"}),onUpdate:se},null,8,["style"]),k("div",Ot,[s(Ye,{onClick:L}),s(Lt,{preview:w.value,data:f.value,"update-position":j,screenContextmenu:ue,onDraggableAdd:v},null,8,["preview","data"])]),s(dt,{ref_key:"configEl",ref:X,config:f.value.config,"onUpdate:config":e[1]||(e[1]=o=>f.value.config=o),style:re({width:_("right")?"":"0px"}),onUpdate:v,onOpenDrawer:z},null,8,["config","style"]),s(Xe,{modelValue:x.visible,"onUpdate:modelValue":e[2]||(e[2]=o=>x.visible=o),"code-type":x.codeType,content:x.content,direction:x.direction,title:x.title,onConfirm:Y,onBeforeClose:T},null,8,["modelValue","code-type","content","direction","title"]),s(He,{ref_key:"vueFileEl",ref:Q},null,512),s(zt,{ref_key:"rightMenuEl",ref:Z,onClick:p},null,512)])),[[t,l.value]])}}});typeof Ie=="function"&&Ie(Bt);export{Bt as default};
