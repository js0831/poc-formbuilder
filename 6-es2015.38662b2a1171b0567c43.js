(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{GwjG:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class u{}var i=t("YImT"),o=t("YxIH"),s=t("pMnS"),r=t("SVse"),c=t("mrSG");class a{constructor(l,n,t){this.router=l,this.appService=n,this.jkwait=t,this.list=[]}ngOnInit(){return c.a(this,void 0,void 0,(function*(){this.jkwait.start();const l=yield this.appService.getProductSpecList().toPromise();this.list=l.data,this.jkwait.end()}))}create(){this.router.navigate(["spec","form"])}edit(l){this.router.navigate(["spec","form",l])}}var d=t("iInd"),p=t("F5nt"),b=t("tTnG"),m=e.qb({encapsulation:0,styles:[["h1[_ngcontent-%COMP%]{margin:0;padding:3px;width:100%;font-weight:300}.header[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{white-space:nowrap}.actions[_ngcontent-%COMP%]{text-align:right}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:5px}.list[_ngcontent-%COMP%]{padding:10px 0;height:calc(100vh - 70px);box-sizing:border-box;overflow-y:auto;overflow-x:hidden}"]],data:{}});function f(l){return e.Mb(0,[(l()(),e.sb(0,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),e.sb(1,0,null,null,1,"th",[["scope","row"]],null,null,null,null,null)),(l()(),e.Kb(2,null,["",""])),(l()(),e.sb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Kb(4,null,["",""])),(l()(),e.sb(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Kb(6,null,["",""])),(l()(),e.sb(7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Kb(8,null,["",""])),(l()(),e.sb(9,0,null,null,2,"td",[["class","actions"]],null,null,null,null,null)),(l()(),e.sb(10,0,null,null,1,"button",[["class","btn btn-sm btn-warning"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.edit(l.context.$implicit._id)&&e),e}),null,null)),(l()(),e.Kb(-1,null,["Edit"]))],null,(function(l,n){l(n,2,0,n.context.index+1),l(n,4,0,"FORM"===n.context.$implicit.details.specType?"Form":"Product Type"),l(n,6,0,n.context.$implicit.details.name),l(n,8,0,n.context.$implicit.details.description)}))}function h(l){return e.Mb(0,[(l()(),e.sb(0,0,null,null,5,"div",[["class","header"]],null,null,null,null,null)),(l()(),e.sb(1,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Product Specifications"])),(l()(),e.sb(3,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.sb(4,0,null,null,1,"button",[["class","btn btn-primary"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.create()&&e),e}),null,null)),(l()(),e.Kb(-1,null,["Add New"])),(l()(),e.sb(6,0,null,null,15,"div",[["class","list"]],null,null,null,null,null)),(l()(),e.sb(7,0,null,null,14,"table",[["class","table table-sm table-striped"]],null,null,null,null,null)),(l()(),e.sb(8,0,null,null,10,"thead",[["class","thead-dark"]],null,null,null,null,null)),(l()(),e.sb(9,0,null,null,9,"tr",[],null,null,null,null,null)),(l()(),e.sb(10,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["#"])),(l()(),e.sb(12,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Type"])),(l()(),e.sb(14,0,null,null,1,"th",[["scope","col"],["style","width: 300px;"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Name"])),(l()(),e.sb(16,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Description"])),(l()(),e.sb(18,0,null,null,0,"th",[["scope","col"]],null,null,null,null,null)),(l()(),e.sb(19,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),e.hb(16777216,null,null,1,null,f)),e.rb(21,278528,null,0,r.j,[e.N,e.K,e.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,21,0,n.component.list)}),null)}function g(l){return e.Mb(0,[(l()(),e.sb(0,0,null,null,1,"app-product-spec-page",[],null,null,null,h,m)),e.rb(1,114688,null,0,a,[d.k,p.a,b.c],null,null)],(function(l,n){l(n,1,0)}),null)}var C=e.ob("app-product-spec-page",a,g,{},{},[]),v=t("TZ93"),k=t("IheW"),x=t("s7LF"),w=t("lJxs");class S{constructor(l,n,t,e,u){this.router=l,this.http=n,this.activatedRoute=t,this.appService=e,this.jkwait=u,this.formsSelectionsOptions=[],this.formBuilderConfig={model:{},form:new x.k({}),fields:[],options:{}},this.specFormBuilderConfig={model:{},form:new x.k({}),fields:[],options:{}},this.reload=!1,this.formBuilderMode="edit"}ngOnInit(){return c.a(this,void 0,void 0,(function*(){this.jkwait.start(),this.id=this.activatedRoute.snapshot.paramMap.get("id");const l=yield this.getForm().toPromise();this.formsSelectionsOptions=yield this.getFormOptionSelections(),this.formBuilderConfig.fields=l,this.id&&this.getProductSpec(this.id),this.reload=!0,this.jkwait.end()}))}getFormOptionSelections(){return this.appService.getProductSpecList("FORM").pipe(Object(w.a)(l=>l.data.map(l=>({id:l._id,name:l.details.name})))).toPromise()}getProductSpec(l){return c.a(this,void 0,void 0,(function*(){try{this.jkwait.start();const n=yield this.appService.getProductSpec(l).toPromise(),t=n.data.details;this.name=t.name;const e=n.data.spec.json;this.currentSpecId=n.data.spec._id,this.formBuilderConfig.form.patchValue({details:t}),this.reloadSpecForm(e),this.jkwait.end()}catch(n){alert("Document do not Exist!"),this.cancel(),this.jkwait.end()}}))}onSave(l){console.log(JSON.stringify(l.data))}cancel(){this.router.navigate(["spec","list"])}getForm(){return this.http.get("/assets/json/product-spec-form.json")}save(){if(this.formBuilderConfig.form.invalid)return void this.formBuilderConfig.form.markAllAsTouched();if(this.id)return void this.update();this.jkwait.start();const l=this.formBuilderConfig.form.value,n=JSON.parse(JSON.stringify(this.specFormBuilderConfig.fields)),t=Object.assign({},l,{spec:n});this.appService.createProductSpec(t).subscribe(l=>{this.jkwait.end(),this.formBuilderConfig.form.reset(),this.reloadSpecForm([]),alert("Success")})}update(){this.jkwait.start();const l=this.formBuilderConfig.form.value,n=JSON.parse(JSON.stringify(this.specFormBuilderConfig.fields)),t=Object.assign({_id:this.id},l,{spec:n,previousSpec:[this.currentSpecId]});this.appService.updateProductSpec(t).subscribe(l=>{this.jkwait.end(),this.name=l.data.details.name,alert("Update Successful")})}reloadSpecForm(l){this.reload=!1,this.specFormBuilderConfig.fields=l,setTimeout(l=>{this.reload=!0},250)}formBuilderEvent(l){"MODE_CHANGE"===l.name&&(this.formBuilderMode=l.data)}}var O=e.qb({encapsulation:0,styles:[["h1[_ngcontent-%COMP%]{margin:0;padding:3px;width:100%;font-weight:300}h4[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:end;align-items:flex-end;-webkit-box-pack:justify;justify-content:space-between;border-bottom:1px solid #eee;padding-bottom:10px}h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:15px;font-weight:500;color:#28a745;text-transform:capitalize}.header[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;border-bottom:1px solid #eee}.header[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:-webkit-box;display:flex}.header[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-left:5px}.form[_ngcontent-%COMP%]{padding:10px 0;height:calc(100vh - 70px);box-sizing:border-box;overflow-y:auto;overflow-x:hidden}"]],data:{}});function M(l){return e.Mb(0,[(l()(),e.sb(0,0,null,null,1,"button",[["class","btn btn-primary"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.save()&&e),e}),null,null)),(l()(),e.Kb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.component.id?"Update":"Save")}))}function y(l){return e.Mb(0,[(l()(),e.sb(0,0,null,null,2,"ng-jk-form-builder",[],null,null,null,o.b,o.a)),e.Hb(512,null,v.c,v.c,[k.c,v.d]),e.rb(2,245760,null,0,v.a,[v.c],{editable:[0,"editable"],config:[1,"config"]},null)],(function(l,n){l(n,2,0,!1,n.component.formBuilderConfig)}),null)}function j(l){return e.Mb(0,[(l()(),e.sb(0,0,null,null,2,"ng-jk-form-builder",[],null,[[null,"event"]],(function(l,n,t){var e=!0,u=l.component;return"event"===n&&(e=!1!==u.formBuilderEvent(t)&&e),"event"===n&&(e=!1!==u.onSave(t)&&e),e}),o.b,o.a)),e.Hb(512,null,v.c,v.c,[k.c,v.d]),e.rb(2,245760,null,0,v.a,[v.c],{enableSaveReset:[0,"enableSaveReset"],config:[1,"config"],forms:[2,"forms"]},{event:"event"})],(function(l,n){var t=n.component;l(n,2,0,!1,t.specFormBuilderConfig,t.formsSelectionsOptions)}),null)}function P(l){return e.Mb(0,[(l()(),e.sb(0,0,null,null,7,"div",[["class","header"]],null,null,null,null,null)),(l()(),e.sb(1,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e.Kb(2,null,["",""])),(l()(),e.sb(3,0,null,null,4,"div",[["class","buttons"]],null,null,null,null,null)),(l()(),e.sb(4,0,null,null,1,"button",[["class","btn btn-secondary"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.cancel()&&e),e}),null,null)),(l()(),e.Kb(-1,null,["Cancel"])),(l()(),e.hb(16777216,null,null,1,null,M)),e.rb(7,16384,null,0,r.k,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.sb(8,0,null,null,8,"div",[["class","form"]],null,null,null,null,null)),(l()(),e.hb(16777216,null,null,1,null,y)),e.rb(10,16384,null,0,r.k,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.sb(11,0,null,null,3,"h4",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Specification "])),(l()(),e.sb(13,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Kb(14,null,["Mode: ",""])),(l()(),e.hb(16777216,null,null,1,null,j)),e.rb(16,16384,null,0,r.k,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,7,0,"edit"===t.formBuilderMode),l(n,10,0,t.formBuilderConfig.fields.length>0),l(n,16,0,t.reload)}),(function(l,n){var t=n.component;l(n,2,0,t.id?t.name:"New Product Specifications"),l(n,14,0,t.formBuilderMode)}))}function _(l){return e.Mb(0,[(l()(),e.sb(0,0,null,null,1,"app-product-spec-form",[],null,null,null,P,O)),e.rb(1,114688,null,0,S,[d.k,k.c,d.a,p.a,b.c],null,null)],(function(l,n){l(n,1,0)}),null)}var B=e.ob("app-product-spec-form",S,_,{},{},[]),F=t("0fkH");class K{}t.d(n,"ProductSpecModuleNgFactory",(function(){return N}));var N=e.pb(u,[],(function(l){return e.Bb([e.Cb(512,e.j,e.ab,[[8,[i.e,i.f,o.f,o.g,o.h,o.i,o.l,o.j,o.k,o.m,o.n,o.c,o.d,o.e,s.a,C,B]],[3,e.j],e.w]),e.Cb(4608,r.m,r.l,[e.t,[2,r.A]]),e.Cb(4608,x.A,x.A,[]),e.Cb(4608,x.g,x.g,[]),e.Cb(4608,k.h,k.n,[r.d,e.A,k.l]),e.Cb(4608,k.o,k.o,[k.h,k.m]),e.Cb(5120,k.a,(function(l){return[l]}),[k.o]),e.Cb(4608,k.k,k.k,[]),e.Cb(6144,k.i,null,[k.k]),e.Cb(4608,k.g,k.g,[k.i]),e.Cb(6144,k.b,null,[k.g]),e.Cb(4608,k.f,k.j,[k.b,e.q]),e.Cb(4608,k.c,k.c,[k.f]),e.Cb(4608,F.h,F.h,[F.e,e.j,e.q]),e.Cb(4608,v.c,v.c,[k.c,v.d]),e.Cb(1073742336,r.c,r.c,[]),e.Cb(1073742336,x.z,x.z,[]),e.Cb(1073742336,x.m,x.m,[]),e.Cb(1073742336,x.v,x.v,[]),e.Cb(512,F.e,F.e,[]),e.Cb(1024,F.a,(function(l){return[F.j(l),{types:[{name:"input",component:v.v},{name:"textarea",component:v.w},{name:"select",component:v.x},{name:"select_multiple",component:v.y},{name:"radio",component:v.B},{name:"checkbox",component:v.z},{name:"checkboxes",component:v.A},{name:"blank",component:v.C},{name:"form",component:v.D},{name:"text_paragraph",component:v.e},{name:"text_header",component:v.f}],wrappers:[{name:"form-group",component:v.g}],validationMessages:[{name:"required",message:"This field is required"},{name:"minlength",message:v.o},{name:"maxlength",message:v.p},{name:"min",message:v.q},{name:"max",message:v.r},{name:"pattern",message:v.s}]}]}),[F.e]),e.Cb(1073742336,F.i,F.i,[F.e,[2,F.a]]),e.Cb(1073742336,k.e,k.e,[]),e.Cb(1073742336,k.d,k.d,[]),e.Cb(1073742336,v.t,v.t,[]),e.Cb(1073742336,v.b,v.b,[]),e.Cb(1073742336,d.l,d.l,[[2,d.q],[2,d.k]]),e.Cb(1073742336,K,K,[]),e.Cb(1073742336,u,u,[]),e.Cb(256,k.l,"XSRF-TOKEN",[]),e.Cb(256,k.m,"X-XSRF-TOKEN",[]),e.Cb(1024,d.i,(function(){return[[{path:"list",component:a},{path:"form",component:S},{path:"form/:id",component:S},{path:"",redirectTo:"list",pathMatch:"full"}]]}),[]),e.Cb(256,v.d,{apiURL:"https://app-form-builder-poc-api.herokuapp.com/product/spec/json/"},[])])}))}}]);