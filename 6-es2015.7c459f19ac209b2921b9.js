(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{GwjG:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class u{}var o=e("YImT"),i=e("YxIH"),s=e("pMnS"),c=e("SVse"),r=e("mrSG");class a{constructor(l,n){this.router=l,this.appService=n,this.list=[]}ngOnInit(){return r.a(this,void 0,void 0,(function*(){const l=yield this.appService.getProductSpecList().toPromise();this.list=l.data,console.log(this.list)}))}create(){this.router.navigate(["spec","form"])}edit(l){this.router.navigate(["spec","form",l])}}var d=e("iInd"),p=e("F5nt"),b=t.qb({encapsulation:0,styles:[["h1[_ngcontent-%COMP%]{margin:0;padding:3px;width:100%;font-weight:300}.header[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{white-space:nowrap}.actions[_ngcontent-%COMP%]{text-align:right}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:5px}.list[_ngcontent-%COMP%]{padding:10px 0;height:calc(100vh - 70px);box-sizing:border-box;overflow-y:auto;overflow-x:hidden}"]],data:{}});function m(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"th",[["scope","row"]],null,null,null,null,null)),(l()(),t.Kb(2,null,["",""])),(l()(),t.sb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Kb(4,null,["",""])),(l()(),t.sb(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Kb(6,null,["",""])),(l()(),t.sb(7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Kb(8,null,["",""])),(l()(),t.sb(9,0,null,null,2,"td",[["class","actions"]],null,null,null,null,null)),(l()(),t.sb(10,0,null,null,1,"button",[["class","btn btn-sm btn-warning"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.edit(l.context.$implicit._id)&&t),t}),null,null)),(l()(),t.Kb(-1,null,["Edit"]))],null,(function(l,n){l(n,2,0,n.context.index+1),l(n,4,0,"FORM"===n.context.$implicit.details.specType?"Form":"Product Type"),l(n,6,0,n.context.$implicit.details.name),l(n,8,0,n.context.$implicit.details.description)}))}function f(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,5,"div",[["class","header"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Product Specifications"])),(l()(),t.sb(3,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.sb(4,0,null,null,1,"button",[["class","btn btn-primary"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.create()&&t),t}),null,null)),(l()(),t.Kb(-1,null,["Add New"])),(l()(),t.sb(6,0,null,null,15,"div",[["class","list"]],null,null,null,null,null)),(l()(),t.sb(7,0,null,null,14,"table",[["class","table table-sm table-striped"]],null,null,null,null,null)),(l()(),t.sb(8,0,null,null,10,"thead",[["class","thead-dark"]],null,null,null,null,null)),(l()(),t.sb(9,0,null,null,9,"tr",[],null,null,null,null,null)),(l()(),t.sb(10,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["#"])),(l()(),t.sb(12,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Type"])),(l()(),t.sb(14,0,null,null,1,"th",[["scope","col"],["style","width: 300px;"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Name"])),(l()(),t.sb(16,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Description"])),(l()(),t.sb(18,0,null,null,0,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.sb(19,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,m)),t.rb(21,278528,null,0,c.j,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,21,0,n.component.list)}),null)}function h(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,1,"app-product-spec-page",[],null,null,null,f,b)),t.rb(1,114688,null,0,a,[d.k,p.a],null,null)],(function(l,n){l(n,1,0)}),null)}var g=t.ob("app-product-spec-page",a,h,{},{},[]),C=e("TZ93"),v=e("IheW"),x=e("s7LF"),S=e("lJxs");class k{constructor(l,n,e,t){this.router=l,this.http=n,this.activatedRoute=e,this.appService=t,this.formsSelectionsOptions=[],this.formBuilderConfig={model:{},form:new x.k({}),fields:[],options:{}},this.specFormBuilderConfig={model:{},form:new x.k({}),fields:[],options:{}},this.reload=!1,this.formBuilderMode="edit"}ngOnInit(){return r.a(this,void 0,void 0,(function*(){this.id=this.activatedRoute.snapshot.paramMap.get("id");const l=yield this.getForm().toPromise();this.formsSelectionsOptions=yield this.getFormOptionSelections(),this.formBuilderConfig.fields=l,this.id&&this.getProductSpec(this.id),this.reload=!0}))}getFormOptionSelections(){return this.appService.getProductSpecList("FORM").pipe(Object(S.a)(l=>l.data.map(l=>({id:l._id,name:l.details.name})))).toPromise()}getProductSpec(l){return r.a(this,void 0,void 0,(function*(){try{const n=yield this.appService.getProductSpec(l).toPromise(),e=n.data.details;this.name=e.name;const t=n.data.spec.json;this.currentSpecId=n.data.spec._id,this.formBuilderConfig.form.patchValue({details:e}),this.reloadSpecForm(t)}catch(n){alert("Document do not Exist!"),this.cancel()}}))}onSave(l){console.log(JSON.stringify(l.data))}cancel(){this.router.navigate(["spec","list"])}getForm(){return this.http.get("/assets/json/product-spec-form.json")}save(){if(this.formBuilderConfig.form.invalid)return void this.formBuilderConfig.form.markAllAsTouched();if(this.id)return void this.update();const l=this.formBuilderConfig.form.value,n=JSON.parse(JSON.stringify(this.specFormBuilderConfig.fields)),e=Object.assign({},l,{spec:n});this.appService.createProductSpec(e).subscribe(l=>{this.formBuilderConfig.form.reset(),this.reloadSpecForm([]),alert("Success")})}update(){const l=this.formBuilderConfig.form.value,n=JSON.parse(JSON.stringify(this.specFormBuilderConfig.fields)),e=Object.assign({_id:this.id},l,{spec:n,previousSpec:[this.currentSpecId]});this.appService.updateProductSpec(e).subscribe(l=>{this.name=l.data.details.name,alert("Update Successful")})}reloadSpecForm(l){this.reload=!1,this.specFormBuilderConfig.fields=l,setTimeout(l=>{this.reload=!0},250)}formBuilderEvent(l){"MODE_CHANGE"===l.name&&(this.formBuilderMode=l.data)}}var O=t.qb({encapsulation:0,styles:[["h1[_ngcontent-%COMP%]{margin:0;padding:3px;width:100%;font-weight:300}h4[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:end;align-items:flex-end;-webkit-box-pack:justify;justify-content:space-between;border-bottom:1px solid #eee;padding-bottom:10px}h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:15px;font-weight:500;color:#28a745;text-transform:capitalize}.header[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;border-bottom:1px solid #eee}.header[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:-webkit-box;display:flex}.header[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-left:5px}.form[_ngcontent-%COMP%]{padding:10px 0;height:calc(100vh - 70px);box-sizing:border-box;overflow-y:auto;overflow-x:hidden}"]],data:{}});function M(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,1,"button",[["class","btn btn-primary"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.save()&&t),t}),null,null)),(l()(),t.Kb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.component.id?"Update":"Save")}))}function w(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,2,"ng-jk-form-builder",[],null,null,null,i.b,i.a)),t.Hb(512,null,C.c,C.c,[v.c,C.d]),t.rb(2,245760,null,0,C.a,[C.c],{editable:[0,"editable"],config:[1,"config"]},null)],(function(l,n){l(n,2,0,!1,n.component.formBuilderConfig)}),null)}function y(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,2,"ng-jk-form-builder",[],null,[[null,"event"]],(function(l,n,e){var t=!0,u=l.component;return"event"===n&&(t=!1!==u.formBuilderEvent(e)&&t),"event"===n&&(t=!1!==u.onSave(e)&&t),t}),i.b,i.a)),t.Hb(512,null,C.c,C.c,[v.c,C.d]),t.rb(2,245760,null,0,C.a,[C.c],{enableSaveReset:[0,"enableSaveReset"],config:[1,"config"],forms:[2,"forms"]},{event:"event"})],(function(l,n){var e=n.component;l(n,2,0,!1,e.specFormBuilderConfig,e.formsSelectionsOptions)}),null)}function P(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,7,"div",[["class","header"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Kb(2,null,["",""])),(l()(),t.sb(3,0,null,null,4,"div",[["class","buttons"]],null,null,null,null,null)),(l()(),t.sb(4,0,null,null,1,"button",[["class","btn btn-secondary"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.cancel()&&t),t}),null,null)),(l()(),t.Kb(-1,null,["Cancel"])),(l()(),t.hb(16777216,null,null,1,null,M)),t.rb(7,16384,null,0,c.k,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(8,0,null,null,8,"div",[["class","form"]],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,w)),t.rb(10,16384,null,0,c.k,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(11,0,null,null,3,"h4",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Specification "])),(l()(),t.sb(13,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Kb(14,null,["Mode: ",""])),(l()(),t.hb(16777216,null,null,1,null,y)),t.rb(16,16384,null,0,c.k,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,7,0,"edit"===e.formBuilderMode),l(n,10,0,e.formBuilderConfig.fields.length>0),l(n,16,0,e.reload)}),(function(l,n){var e=n.component;l(n,2,0,e.id?e.name:"New Product Specifications"),l(n,14,0,e.formBuilderMode)}))}function _(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,1,"app-product-spec-form",[],null,null,null,P,O)),t.rb(1,114688,null,0,k,[d.k,v.c,d.a,p.a],null,null)],(function(l,n){l(n,1,0)}),null)}var B=t.ob("app-product-spec-form",k,_,{},{},[]),F=e("0fkH");class K{}e.d(n,"ProductSpecModuleNgFactory",(function(){return j}));var j=t.pb(u,[],(function(l){return t.Bb([t.Cb(512,t.j,t.ab,[[8,[o.e,o.f,i.f,i.g,i.h,i.i,i.l,i.j,i.k,i.m,i.n,i.c,i.d,i.e,s.a,g,B]],[3,t.j],t.w]),t.Cb(4608,c.m,c.l,[t.t,[2,c.x]]),t.Cb(4608,x.A,x.A,[]),t.Cb(4608,x.g,x.g,[]),t.Cb(4608,v.h,v.n,[c.d,t.A,v.l]),t.Cb(4608,v.o,v.o,[v.h,v.m]),t.Cb(5120,v.a,(function(l){return[l]}),[v.o]),t.Cb(4608,v.k,v.k,[]),t.Cb(6144,v.i,null,[v.k]),t.Cb(4608,v.g,v.g,[v.i]),t.Cb(6144,v.b,null,[v.g]),t.Cb(4608,v.f,v.j,[v.b,t.q]),t.Cb(4608,v.c,v.c,[v.f]),t.Cb(4608,F.h,F.h,[F.e,t.j,t.q]),t.Cb(4608,C.c,C.c,[v.c,C.d]),t.Cb(1073742336,c.c,c.c,[]),t.Cb(1073742336,x.z,x.z,[]),t.Cb(1073742336,x.m,x.m,[]),t.Cb(1073742336,x.v,x.v,[]),t.Cb(512,F.e,F.e,[]),t.Cb(1024,F.a,(function(l){return[F.j(l),{types:[{name:"input",component:C.v},{name:"textarea",component:C.w},{name:"select",component:C.x},{name:"select_multiple",component:C.y},{name:"radio",component:C.B},{name:"checkbox",component:C.z},{name:"checkboxes",component:C.A},{name:"blank",component:C.C},{name:"form",component:C.D},{name:"text_paragraph",component:C.e},{name:"text_header",component:C.f}],wrappers:[{name:"form-group",component:C.g}],validationMessages:[{name:"required",message:"This field is required"},{name:"minlength",message:C.o},{name:"maxlength",message:C.p},{name:"min",message:C.q},{name:"max",message:C.r},{name:"pattern",message:C.s}]}]}),[F.e]),t.Cb(1073742336,F.i,F.i,[F.e,[2,F.a]]),t.Cb(1073742336,v.e,v.e,[]),t.Cb(1073742336,v.d,v.d,[]),t.Cb(1073742336,C.t,C.t,[]),t.Cb(1073742336,C.b,C.b,[]),t.Cb(1073742336,d.l,d.l,[[2,d.q],[2,d.k]]),t.Cb(1073742336,K,K,[]),t.Cb(1073742336,u,u,[]),t.Cb(256,v.l,"XSRF-TOKEN",[]),t.Cb(256,v.m,"X-XSRF-TOKEN",[]),t.Cb(1024,d.i,(function(){return[[{path:"list",component:a},{path:"form",component:k},{path:"form/:id",component:k},{path:"",redirectTo:"list",pathMatch:"full"}]]}),[]),t.Cb(256,C.d,{apiURL:"https://app-form-builder-poc-api.herokuapp.com/product/spec/json/"},[])])}))}}]);