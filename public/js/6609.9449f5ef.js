"use strict";(self["webpackChunkweweb_front"]=self["webpackChunkweweb_front"]||[]).push([[6609],{6609:(e,l,a)=>{a.r(l),a.d(l,{default:()=>m});var t=a(641);const o={class:"rest-api-collection-edit"},d={class:"flex items-center"},i={class:"flex items-center"};function u(e,l,a,u,n,p){const r=(0,t.g2)("wwEditorInputTextSelect"),m=(0,t.g2)("wwEditorFormRow"),s=(0,t.g2)("wwEditorInputRow"),c=(0,t.g2)("wwEditorInputRadio"),b=(0,t.g2)("wwEditorInputText"),v=(0,t.g2)("wwEditorInput"),y=(0,t.g2)("wwEditorQuestionMark"),h=(0,t.g2)("wwEditorInputSwitch");return(0,t.uX)(),(0,t.CE)("div",o,[(0,t.bF)(m,{label:"Method",required:""},{default:(0,t.k6)((()=>[(0,t.bF)(r,{options:n.methodOptions,"model-value":p.api.method,placeholder:"Select a method","onUpdate:modelValue":l[0]||(l[0]=e=>p.setProp("method",e))},null,8,["options","model-value"])])),_:1}),(0,t.bF)(s,{label:"URL",required:"",type:"query",name:"url","model-value":p.api.url,placeholder:"https://api-url.com/endpoint",bindable:"dynamic"===a.collection.mode,"onUpdate:modelValue":l[1]||(l[1]=e=>p.setProp("url",e))},null,8,["model-value","bindable"]),p.isFields?((0,t.uX)(),(0,t.CE)(t.FK,{key:0},[(0,t.bF)(m,null,{default:(0,t.k6)((()=>[(0,t.bF)(c,{choices:n.dataChoices,"model-value":p.api.useRawBody,"onUpdate:modelValue":l[2]||(l[2]=e=>p.setProp("useRawBody",e))},null,8,["choices","model-value"])])),_:1}),p.api.useRawBody?((0,t.uX)(),(0,t.Wv)(s,{key:0,type:"query","model-value":p.api.data,label:"Body",bindable:"dynamic"===a.collection.mode,"onUpdate:modelValue":l[3]||(l[3]=e=>p.setProp("data",e))},null,8,["model-value","bindable"])):((0,t.uX)(),(0,t.Wv)(s,{key:1,label:"Fields",type:"array","model-value":p.api.data,bindable:"dynamic"===a.collection.mode,"onUpdate:modelValue":l[4]||(l[4]=e=>p.setProp("data",e)),onAddItem:l[5]||(l[5]=e=>p.setProp("data",[...p.api.data||[],{}]))},{default:(0,t.k6)((({item:e,setItem:l})=>[(0,t.bF)(s,{type:"query","model-value":e.key,label:"Key",placeholder:"Enter a value",small:"",bindable:"dynamic"===a.collection.mode,"onUpdate:modelValue":a=>l({...e,key:a})},null,8,["model-value","bindable","onUpdate:modelValue"]),(0,t.bF)(s,{type:"query","model-value":e.value,label:"Value",placeholder:"Enter a value",small:"",bindable:"dynamic"===a.collection.mode,"onUpdate:modelValue":a=>l({...e,value:a})},null,8,["model-value","bindable","onUpdate:modelValue"])])),_:1},8,["model-value","bindable"]))],64)):(0,t.Q3)("",!0),(0,t.bF)(s,{label:"Headers",type:"array","model-value":p.api.headers,bindable:"dynamic"===a.collection.mode,"onUpdate:modelValue":l[6]||(l[6]=e=>p.setProp("headers",e)),onAddItem:l[7]||(l[7]=e=>p.setProp("headers",[...p.api.headers||[],{}]))},{default:(0,t.k6)((({item:e,setItem:l})=>[(0,t.bF)(s,{type:"query","model-value":e.key,label:"Key",placeholder:"Enter a value",small:"",bindable:"dynamic"===a.collection.mode,"onUpdate:modelValue":a=>l({...e,key:a})},null,8,["model-value","bindable","onUpdate:modelValue"]),(0,t.bF)(s,{type:"query","model-value":e.value,label:"Value",placeholder:"Enter a value",small:"",bindable:"dynamic"===a.collection.mode,"onUpdate:modelValue":a=>l({...e,value:a})},null,8,["model-value","bindable","onUpdate:modelValue"])])),_:1},8,["model-value","bindable"]),(0,t.bF)(s,{label:"Query string",type:"array","model-value":p.api.queries,bindable:"dynamic"===a.collection.mode,"onUpdate:modelValue":l[8]||(l[8]=e=>p.setProp("queries",e)),onAddItem:l[9]||(l[9]=e=>p.setProp("queries",[...p.api.queries||[],{}]))},{default:(0,t.k6)((({item:e,setItem:l})=>[(0,t.bF)(s,{type:"query","model-value":e.key,label:"Key",placeholder:"Enter a value",small:"",bindable:"dynamic"===a.collection.mode,"onUpdate:modelValue":a=>l({...e,key:a})},null,8,["model-value","bindable","onUpdate:modelValue"]),(0,t.bF)(s,{type:"query","model-value":e.value,label:"Value",placeholder:"Enter a value",small:"",bindable:"dynamic"===a.collection.mode,"onUpdate:modelValue":a=>l({...e,value:a})},null,8,["model-value","bindable","onUpdate:modelValue"])])),_:1},8,["model-value","bindable"]),p.isFields?((0,t.uX)(),(0,t.Wv)(m,{key:1,label:"Content type"},{default:(0,t.k6)((()=>[(0,t.bF)(r,{options:n.dataTypeOptions,"model-value":p.api.dataType,small:"","onUpdate:modelValue":l[10]||(l[10]=e=>p.setProp("dataType",e))},null,8,["options","model-value"])])),_:1})):(0,t.Q3)("",!0),(0,t.bF)(m,{label:"Result key"},{default:(0,t.k6)((()=>[(0,t.bF)(b,{type:"text","model-value":p.api.resultKey,placeholder:"result.key",small:"","onUpdate:modelValue":l[11]||(l[11]=e=>p.setProp("resultKey",e))},null,8,["model-value"])])),_:1}),"dynamic"===a.collection.mode?((0,t.uX)(),(0,t.Wv)(m,{key:2,label:"Proxy request server side (bypass CORS)"},{default:(0,t.k6)((()=>[(0,t.Lk)("div",d,[(0,t.bF)(v,{type:"onoff",bindable:"",small:"","model-value":p.api.isThroughServer,"onUpdate:modelValue":l[12]||(l[12]=e=>p.setProp("isThroughServer","multipart/form-data"!==p.api.dataType&&e))},null,8,["model-value"]),"multipart/form-data"===p.api.dataType?((0,t.uX)(),(0,t.Wv)(y,{key:0,"tooltip-position":"top-left","forced-content":"Not allowed with content-type multipart/form-data",class:"ml-2 text-yellow-500"})):((0,t.uX)(),(0,t.Wv)(y,{key:1,"tooltip-position":"top-left","tooltip-name":"rest-api-through-server",class:"ml-2"}))])])),_:1})):(0,t.Q3)("",!0),"dynamic"!==a.collection.mode||p.api.isThroughServer?(0,t.Q3)("",!0):((0,t.uX)(),(0,t.Wv)(m,{key:3},{default:(0,t.k6)((()=>[(0,t.Lk)("div",i,[(0,t.bF)(h,{"model-value":p.api.isWithCredentials,"onUpdate:modelValue":l[13]||(l[13]=e=>p.setProp("isWithCredentials",e))},null,8,["model-value"]),l[14]||(l[14]=(0,t.Lk)("div",{class:"body-2 ml-2"},"Send credentials",-1)),(0,t.bF)(y,{"tooltip-position":"top-left","tooltip-name":"rest-api-credentials",class:"ml-auto"})])])),_:1}))])}const n={props:{collection:{type:Object,required:!0},config:{type:Object,required:!0}},emits:["update:config"],data(){return{dataChoices:[{label:"Parsed fields",value:!1,default:!0},{label:"Raw body",value:!0}],dataTypeOptions:[{label:"Default (application/json)",value:"application/json",default:!0},{label:"application/x-www-form-urlencoded",value:"application/x-www-form-urlencoded"},{label:"application/javascript",value:"application/javascript"},{label:"application/xml",value:"application/xml"},{label:"application/merge-patch+json",value:"application/merge-patch+json"},{label:"multipart/form-data",value:"multipart/form-data"},{label:"text/plain",value:"text/plain"},{label:"text/html",value:"text/html"}],methodOptions:[{value:"GET",label:"GET",default:!0},{value:"POST",label:"POST"},{value:"PUT",label:"PUT"},{value:"PATCH",label:"PATCH"}]}},watch:{"api.dataType"(e){"multipart/form-data"===e&&this.api.isThroughServer&&this.setProp("isThroughServer",!1)}},computed:{api(){return{method:"GET",url:void 0,headers:[],queries:[],data:[],resultKey:"",dataType:void 0,isThroughServer:!1,isWithCredentials:!1,useRawBody:!1,...this.config}},isFields(){return["POST","PUT","PATCH"].includes(this.api.method)}},methods:{setProp(e,l){this.$emit("update:config",{...this.api,[e]:l})}}};var p=a(6262);const r=(0,p.A)(n,[["render",u]]),m=r}}]);