"use strict";(self["webpackChunkweweb_front"]=self["webpackChunkweweb_front"]||[]).push([[8694],{326:(e,l,a)=>{a.r(l);var t=a(6220),n=a(7613),i=a(2256),r=a(9227),u=a(2706),d=a(7330),o=a(1236),s=a(4913);t.A.component("wwobject-3a7d6379-12d3-4387-98ff-b332bb492a63",n.A),t.A.component("wwobject-83d890fb-84f9-4386-b459-fb4be89a8e15",i.A),t.A.component("wwobject-b0945cf7-b4fa-4ff7-b2f9-a4ed7bf17a7d",r.A),t.A.component("wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1",u.A),t.A.component("wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad",d.A),t.A.component("section-99586bd3-2b15-4d6b-a025-6a50d07ca845",o.A),t.A.component("section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d",s.A)},9227:(e,l,a)=>{a.d(l,{A:()=>X});var t=a(641),n=a(3751),i=a(33);const r={class:"dynamic-form-container"},u=["disabled"];function d(e,l,a,d,o,s){const c=(0,t.g2)("DynamicField");return(0,t.uX)(),(0,t.CE)("div",r,[(0,t.Lk)("form",{onSubmit:l[0]||(l[0]=(0,n.D$)(((...e)=>d.handleSubmit&&d.handleSubmit(...e)),["prevent"]))},[(0,t.Lk)("div",{class:"fields-container",style:(0,i.Tr)(d.containerStyle)},[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(d.formFields,(e=>((0,t.uX)(),(0,t.Wv)(c,{key:e.name,modelValue:d.formValues[e.name],"onUpdate:modelValue":[l=>d.formValues[e.name]=l,l=>d.handleFieldChange(e.name,l)],field:e,"show-label":d.showLabels,error:d.errors[e.name],onFileUpload:d.handleFileUpload},null,8,["modelValue","onUpdate:modelValue","field","show-label","error","onFileUpload"])))),128))],4),(0,t.Lk)("button",{type:"submit",class:"submit-button",disabled:d.isSubmitting},(0,i.v_)(d.submitButtonText),9,u)],32)])}var o=a(953);const s={key:0},c=["value","placeholder","required"],f=["value","min","max","step","required"],m=["value","required"],p={value:"",disabled:"",selected:""},v=["value"],b=["value","placeholder","required","rows"],y={key:5,class:"file-input-container"},h=["accept","required"],w={key:0,class:"file-preview"},g={class:"file-info"},V={key:6,class:"error-message"};function F(e,l,a,n,r,u){return(0,t.uX)(),(0,t.CE)("div",{class:(0,i.C4)(["dynamic-field",{"has-error":a.error}])},[a.showLabel&&a.field.label?((0,t.uX)(),(0,t.CE)("label",s,(0,i.v_)(a.field.label),1)):(0,t.Q3)("",!0),"text"===a.field.type?((0,t.uX)(),(0,t.CE)("input",{key:1,type:"text",value:a.modelValue,onInput:l[0]||(l[0]=e=>n.updateValue(e.target.value)),placeholder:a.field.placeholder,required:a.field.required},null,40,c)):"number"===a.field.type?((0,t.uX)(),(0,t.CE)("input",{key:2,type:"number",value:a.modelValue,onInput:l[1]||(l[1]=e=>n.updateValue(e.target.value)),min:a.field.min,max:a.field.max,step:a.field.step,required:a.field.required},null,40,f)):"select"===a.field.type?((0,t.uX)(),(0,t.CE)("select",{key:3,value:a.modelValue,onChange:l[2]||(l[2]=e=>n.updateValue(e.target.value)),required:a.field.required},[(0,t.Lk)("option",p,(0,i.v_)(a.field.placeholder||"Select an option"),1),((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(a.field.options,(e=>((0,t.uX)(),(0,t.CE)("option",{key:e.value,value:e.value},(0,i.v_)(e.label),9,v)))),128))],40,m)):"textarea"===a.field.type?((0,t.uX)(),(0,t.CE)("textarea",{key:4,value:a.modelValue,onInput:l[3]||(l[3]=e=>n.updateValue(e.target.value)),placeholder:a.field.placeholder,required:a.field.required,rows:a.field.rows||3},null,40,b)):"file"===a.field.type?((0,t.uX)(),(0,t.CE)("div",y,[(0,t.Lk)("input",{type:"file",onChange:l[4]||(l[4]=(...e)=>n.handleFileChange&&n.handleFileChange(...e)),accept:a.field.accept,required:a.field.required,class:"file-input"},null,40,h),n.filePreview?((0,t.uX)(),(0,t.CE)("div",w,[(0,t.Lk)("div",g,[(0,t.Lk)("span",null,(0,i.v_)(n.filePreview.name),1),(0,t.Lk)("button",{type:"button",onClick:l[5]||(l[5]=(...e)=>n.clearFile&&n.clearFile(...e)),class:"clear-file"},"×")])])):(0,t.Q3)("",!0)])):(0,t.Q3)("",!0),a.error?((0,t.uX)(),(0,t.CE)("div",V,(0,i.v_)(a.error),1)):(0,t.Q3)("",!0)],2)}const C={name:"DynamicField",props:{field:{type:Object,required:!0},modelValue:{type:[String,Number,Boolean,File],default:""},showLabel:{type:Boolean,default:!0},error:{type:String,default:""}},emits:["update:modelValue","file-upload"],setup(e,{emit:l}){const a=(0,o.KR)(null),t=a=>{"number"===e.field.type&&(a=""===a?"":Number(a)),l("update:modelValue",a)},n=t=>{const n=t.target.files[0];n&&(a.value=n,l("update:modelValue",n),l("file-upload",{field:e.field.name,file:n}))},i=()=>{a.value=null,l("update:modelValue",null)};return{filePreview:a,updateValue:t,handleFileChange:n,clearFile:i}}};var k=a(6262);const q=(0,k.A)(C,[["render",F],["__scopeId","data-v-62529ec7"]]),E=q,A={name:"DynamicFormContainer",components:{DynamicField:E},props:{content:{type:Object,required:!0},uid:{type:String,required:!0}},emits:["trigger-event"],setup(e,{emit:l}){const{value:a,setValue:n}=wwLib.wwVariable.useComponentVariable({uid:e.uid,name:"formValues",type:"object",defaultValue:{}}),i=(0,o.KR)({}),r=(0,o.KR)(!1);(0,t.wB)((()=>e.content?.formFields),(e=>{if(Array.isArray(e)){const l={};e.forEach((e=>{l[e.name]=void 0!==a.value[e.name]?a.value[e.name]:e.defaultValue||""})),n(l),i.value={}}}),{immediate:!0});const u=(0,t.EW)((()=>e.content?.formFields||[])),d=(0,t.EW)((()=>!1!==e.content?.showLabels)),s=(0,t.EW)((()=>e.content?.submitButtonText||"Submit")),c=(0,t.EW)((()=>({gap:e.content?.spacing||"16px"}))),f=(e,l)=>{if(e.required){if(!l)return`${e.label||e.name} is required`;if("file"===e.type&&!(l instanceof File))return`${e.label||e.name} must be a file`}if(e.validation&&l)try{const a=new Function("value",`return ${e.validation}`)(l);if(!a)return e.errorMessage||"Invalid value"}catch(a){return console.error("Validation error:",a),"Invalid validation rule"}return""},m=()=>{const e={};let l=!0;return u.value.forEach((t=>{const n=f(t,a.value[t.name]);n&&(e[t.name]=n,l=!1)})),i.value=e,l},p=(e,t)=>{n({...a.value,[e]:t}),i.value[e]&&(i.value[e]=""),l("trigger-event",{name:"change",event:{field:e,value:t}})},v=({field:e,file:a})=>{l("trigger-event",{name:"fileUpload",event:{field:e,file:a}})},b=async()=>{r.value||(r.value=!0,m()?l("trigger-event",{name:"submit",event:{values:{...a.value}}}):l("trigger-event",{name:"error",event:{errors:{...i.value}}}),r.value=!1)},y=()=>{const e={};u.value.forEach((l=>{e[l.name]=l.defaultValue||""})),n(e),i.value={}},h=({field:e,value:l})=>{e in a.value&&p(e,l)};return{formValues:a,errors:i,isSubmitting:r,formFields:u,showLabels:d,submitButtonText:s,containerStyle:c,handleFieldChange:p,handleFileUpload:v,handleSubmit:b,resetForm:y,setFieldValue:h,validateForm:m}}},L=(0,k.A)(A,[["render",d],["__scopeId","data-v-2531678d"]]),X=L}}]);