(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{dXW6:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),u=function(){return function(){}}(),o=t("pMnS"),i=t("Ip0R"),c=t("mrSG"),r=function(){function n(n,l,t){this.router=n,this.appService=l,this.jkWait=t,this.list=[]}return n.prototype.ngOnInit=function(){return c.b(this,void 0,void 0,(function(){var n;return c.e(this,(function(l){switch(l.label){case 0:return this.jkWait.start(),[4,this.appService.getProductList().toPromise()];case 1:return n=l.sent(),this.list=n.data,this.jkWait.end(),[2]}}))}))},n.prototype.create=function(){this.router.navigate(["product","form"])},n.prototype.edit=function(n){this.router.navigate(["product","form",n])},n}(),s=t("ZYCi"),a=t("F5nt"),p=t("6XEn"),d=e.sb({encapsulation:0,styles:[["h1[_ngcontent-%COMP%]{margin:0;padding:3px;width:100%;font-weight:300}.header[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{white-space:nowrap}.list[_ngcontent-%COMP%]{padding:10px 0;height:calc(100vh - 70px);box-sizing:border-box;overflow-y:auto;overflow-x:hidden}.actions[_ngcontent-%COMP%]{text-align:right}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:5px}"]],data:{}});function b(n){return e.Ob(0,[(n()(),e.ub(0,0,null,null,13,"tr",[],null,null,null,null,null)),(n()(),e.ub(1,0,null,null,1,"th",[["scope","row"]],null,null,null,null,null)),(n()(),e.Mb(2,null,["",""])),(n()(),e.ub(3,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),e.Mb(4,null,["",""])),(n()(),e.ub(5,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),e.Mb(6,null,["",""])),(n()(),e.ub(7,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),e.Mb(8,null,["",""])),(n()(),e.ub(9,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),e.Mb(10,null,["",""])),(n()(),e.ub(11,0,null,null,2,"td",[["class","actions"]],null,null,null,null,null)),(n()(),e.ub(12,0,null,null,1,"button",[["class","btn btn-sm btn-warning"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.edit(n.context.$implicit._id)&&e),e}),null,null)),(n()(),e.Mb(-1,null,["Edit"]))],null,(function(n,l){n(l,2,0,l.context.index+1),n(l,4,0,l.context.$implicit.information.productType.details.name),n(l,6,0,l.context.$implicit.information.code),n(l,8,0,l.context.$implicit.information.name),n(l,10,0,l.context.$implicit.information.description)}))}function m(n){return e.Ob(0,[(n()(),e.ub(0,0,null,null,5,"div",[["class","header"]],null,null,null,null,null)),(n()(),e.ub(1,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),e.Mb(-1,null,["Products"])),(n()(),e.ub(3,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),e.ub(4,0,null,null,1,"button",[["class","btn btn-primary"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.create()&&e),e}),null,null)),(n()(),e.Mb(-1,null,["Add New"])),(n()(),e.ub(6,0,null,null,17,"div",[["class","list"]],null,null,null,null,null)),(n()(),e.ub(7,0,null,null,16,"table",[["class","table table-sm table-striped"]],null,null,null,null,null)),(n()(),e.ub(8,0,null,null,12,"thead",[["class","thead-dark"]],null,null,null,null,null)),(n()(),e.ub(9,0,null,null,11,"tr",[],null,null,null,null,null)),(n()(),e.ub(10,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(n()(),e.Mb(-1,null,["#"])),(n()(),e.ub(12,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(n()(),e.Mb(-1,null,["Product Type"])),(n()(),e.ub(14,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(n()(),e.Mb(-1,null,["Code"])),(n()(),e.ub(16,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(n()(),e.Mb(-1,null,["Name"])),(n()(),e.ub(18,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(n()(),e.Mb(-1,null,["Description"])),(n()(),e.ub(20,0,null,null,0,"th",[["scope","col"]],null,null,null,null,null)),(n()(),e.ub(21,0,null,null,2,"tbody",[],null,null,null,null,null)),(n()(),e.jb(16777216,null,null,1,null,b)),e.tb(23,278528,null,0,i.j,[e.P,e.M,e.t],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,23,0,l.component.list)}),null)}function h(n){return e.Ob(0,[(n()(),e.ub(0,0,null,null,1,"app-product-catalog-page",[],null,null,null,m,d)),e.tb(1,114688,null,0,r,[s.k,a.a,p.c],null,null)],(function(n,l){n(l,1,0)}),null)}var f=e.qb("app-product-catalog-page",r,h,{},{},[]),g=t("YxIH"),v=t("Nsd2"),k=t("t/Na"),y=t("gIcY"),P=t("67Y/"),x=t("AytR"),E=function(){function n(n,l,t,e,u){this.router=n,this.appService=l,this.http=t,this.activatedRoute=e,this.jkWait=u,this.reloadCommon=!1,this.reloadSpec=!1,this.subs=[],this.commonFields={model:{},form:new y.k({}),fields:[],options:{}},this.productSpecFields={model:{},form:new y.k({}),fields:[],options:{}}}return n.prototype.ngOnInit=function(){return c.b(this,void 0,void 0,(function(){var n,l,t=this;return c.e(this,(function(e){switch(e.label){case 0:return this.jkWait.start(),this.id=this.activatedRoute.snapshot.paramMap.get("id"),[4,this.getAllProductSpecs()];case 1:return n=e.sent(),[4,this.getCommonFormFields().toPromise()];case 2:return l=e.sent(),this.setProductTypeOptions(l,n),this.reloadCommonForm(l),this.jkWait.end(),this.id?this.id&&setTimeout((function(n){t.getProduct(t.id)}),300):this.watchProductTypeOnChange(),[2]}}))}))},n.prototype.getProduct=function(n){return c.b(this,void 0,void 0,(function(){var l,t;return c.e(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),this.jkWait.start(),l=this,[4,this.appService.getProduct(n).toPromise()];case 1:return l.product=e.sent().data,this.commonFields.form.patchValue({information:this.product.information}),[4,this.appService.getSpec(this.product.specsForm._id).toPromise()];case 2:return t=e.sent(),this.spec=t.data,this.reloadSpecForm(this.spec.json),this.jkWait.end(),[3,4];case 3:return e.sent(),this.jkWait.end(),alert("Product do not Exist"),this.cancel(),[3,4];case 4:return[2]}}))}))},n.prototype.watchProductTypeOnChange=function(){var n=this;setTimeout((function(){n.subs.push(n.commonFields.form.get("information").get("productType").valueChanges.subscribe((function(l){l&&n.getProductSpecFields(l)})))}),300)},n.prototype.setProductTypeOptions=function(n,l){var t=n[0].fieldGroup[0].fieldGroup[0].fieldGroup[0].templateOptions;t.options=l,t.disabled=!!this.id},n.prototype.getAllProductSpecs=function(){return this.appService.getProductSpecList("PRODUCT_TYPE").pipe(Object(P.a)((function(n){return n.data.map((function(n){return{label:n.details.name,id:n._id}}))}))).toPromise()},n.prototype.getCommonFormFields=function(){return this.http.get("/assets/json/product-common-fields.json")},n.prototype.getProductSpecFields=function(n){return c.b(this,void 0,void 0,(function(){var l;return c.e(this,(function(t){switch(t.label){case 0:return this.jkWait.start(),[4,this.appService.getProductSpec(n).toPromise()];case 1:return l=t.sent(),this.spec=l.data.spec,this.reloadSpecForm(this.spec.json),this.jkWait.end(),[2]}}))}))},n.prototype.reloadCommonForm=function(n){var l=this;this.reloadCommon=!1,this.commonFields.fields=n,setTimeout((function(n){l.reloadCommon=!0}),250)},n.prototype.reloadSpecForm=function(n){var l=this;this.reloadSpec=!1,this.productSpecFields.fields=n,setTimeout((function(n){l.reloadSpec=!0}),250)},n.prototype.cancel=function(){this.router.navigate(["product","list"])},n.prototype.save=function(){var n=this;if(this.commonFields.form.invalid||this.productSpecFields.form.invalid)return this.productSpecFields.form.markAllAsTouched(),void this.commonFields.form.markAllAsTouched();this.jkWait.start();var l=c.a({},this.commonFields.form.value,{specs:this.productSpecFields.form.value,specsForm:this.spec._id});this.id?this.updateProduct(l):this.http.post(x.a.apiURL+"product",l).subscribe((function(l){n.jkWait.end(),n.commonFields.form.reset(),n.productSpecFields.form.reset(),alert("Success")}))},n.prototype.updateProduct=function(n){var l=this,t=c.a({},n,{information:c.a({},n.information,{productType:this.product.information.productType})});this.http.put(x.a.apiURL+"product/update/"+this.id,t).subscribe((function(n){l.product.information.name=n.data.information.name,l.jkWait.end(),alert("Update successful")}))},n.prototype.formEvents=function(n){var l=this;"FORM_LOADED"===n.name&&setTimeout((function(n){l.productSpecFields.form.patchValue(l.product.specs),l.jkWait.end()}),300)},n.prototype.ngOnDestroy=function(){this.subs.forEach((function(n){return n.unsubscribe()}))},n}(),M=e.sb({encapsulation:0,styles:[["h1[_ngcontent-%COMP%]{margin:0;padding:3px;width:100%;font-weight:300}.header[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;border-bottom:1px solid #eee}.header[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:-webkit-box;display:flex}.header[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-left:5px}.form[_ngcontent-%COMP%]{padding:10px 0;height:calc(100vh - 70px);box-sizing:border-box;overflow-y:auto;overflow-x:hidden}"]],data:{}});function O(n){return e.Ob(0,[(n()(),e.ub(0,0,null,null,2,"ng-jk-form-builder",[],null,null,null,g.b,g.a)),e.Jb(512,null,v.c,v.c,[k.c,v.d]),e.tb(2,245760,null,0,v.a,[v.c],{editable:[0,"editable"],config:[1,"config"]},null)],(function(n,l){n(l,2,0,!1,l.component.commonFields)}),null)}function w(n){return e.Ob(0,[(n()(),e.ub(0,0,null,null,2,"ng-jk-form-builder",[],null,[[null,"event"]],(function(n,l,t){var e=!0;return"event"===l&&(e=!1!==n.component.formEvents(t)&&e),e}),g.b,g.a)),e.Jb(512,null,v.c,v.c,[k.c,v.d]),e.tb(2,245760,null,0,v.a,[v.c],{editable:[0,"editable"],config:[1,"config"]},{event:"event"})],(function(n,l){n(l,2,0,!1,l.component.productSpecFields)}),null)}function F(n){return e.Ob(0,[(n()(),e.ub(0,0,null,null,7,"div",[["class","header"]],null,null,null,null,null)),(n()(),e.ub(1,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),e.Mb(2,null,["",""])),(n()(),e.ub(3,0,null,null,4,"div",[["class","buttons"]],null,null,null,null,null)),(n()(),e.ub(4,0,null,null,1,"button",[["class","btn btn-secondary"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.cancel()&&e),e}),null,null)),(n()(),e.Mb(-1,null,["Cancel"])),(n()(),e.ub(6,0,null,null,1,"button",[["class","btn btn-primary"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.save()&&e),e}),null,null)),(n()(),e.Mb(7,null,["",""])),(n()(),e.ub(8,0,null,null,4,"div",[["class","form"]],null,null,null,null,null)),(n()(),e.jb(16777216,null,null,1,null,O)),e.tb(10,16384,null,0,i.k,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.jb(16777216,null,null,1,null,w)),e.tb(12,16384,null,0,i.k,[e.P,e.M],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,10,0,t.reloadCommon),n(l,12,0,t.reloadSpec)}),(function(n,l){var t=l.component;n(l,2,0,t.id?null==t.product?null:t.product.information.name:"New Product"),n(l,7,0,t.id?"Update":"Save")}))}function j(n){return e.Ob(0,[(n()(),e.ub(0,0,null,null,1,"app-product-catalog-form",[],null,null,null,F,M)),e.tb(1,245760,null,0,E,[s.k,a.a,k.c,s.a,p.c],null,null)],(function(n,l){n(l,1,0)}),null)}var C=e.qb("app-product-catalog-form",E,j,{},{},[]),S=t("YImT"),_=t("vZwA"),T=function(){return function(){}}();t.d(l,"ProductCatalogModuleNgFactory",(function(){return W}));var W=e.rb(u,[],(function(n){return e.Db([e.Eb(512,e.j,e.cb,[[8,[o.a,f,C,S.e,S.f,g.f,g.g,g.h,g.i,g.l,g.j,g.k,g.m,g.n,g.c,g.d,g.e]],[3,e.j],e.y]),e.Eb(4608,i.m,i.l,[e.v,[2,i.A]]),e.Eb(4608,y.A,y.A,[]),e.Eb(4608,y.g,y.g,[]),e.Eb(4608,k.h,k.n,[i.d,e.C,k.l]),e.Eb(4608,k.o,k.o,[k.h,k.m]),e.Eb(5120,k.a,(function(n){return[n]}),[k.o]),e.Eb(4608,k.k,k.k,[]),e.Eb(6144,k.i,null,[k.k]),e.Eb(4608,k.g,k.g,[k.i]),e.Eb(6144,k.b,null,[k.g]),e.Eb(4608,k.f,k.j,[k.b,e.r]),e.Eb(4608,k.c,k.c,[k.f]),e.Eb(4608,_.h,_.h,[_.e,e.j,e.r]),e.Eb(4608,v.c,v.c,[k.c,v.d]),e.Eb(1073742336,i.c,i.c,[]),e.Eb(1073742336,s.l,s.l,[[2,s.q],[2,s.k]]),e.Eb(1073742336,T,T,[]),e.Eb(1073742336,y.z,y.z,[]),e.Eb(1073742336,y.m,y.m,[]),e.Eb(1073742336,y.v,y.v,[]),e.Eb(512,_.e,_.e,[]),e.Eb(1024,_.a,(function(n){return[_.j(n),{types:[{name:"input",component:v.v},{name:"textarea",component:v.w},{name:"select",component:v.x},{name:"select_multiple",component:v.y},{name:"radio",component:v.B},{name:"checkbox",component:v.z},{name:"checkboxes",component:v.A},{name:"blank",component:v.C},{name:"form",component:v.D},{name:"text_paragraph",component:v.e},{name:"text_header",component:v.f}],wrappers:[{name:"form-group",component:v.g}],validationMessages:[{name:"required",message:"This field is required"},{name:"minlength",message:v.o},{name:"maxlength",message:v.p},{name:"min",message:v.q},{name:"max",message:v.r},{name:"pattern",message:v.s}]}]}),[_.e]),e.Eb(1073742336,_.i,_.i,[_.e,[2,_.a]]),e.Eb(1073742336,k.e,k.e,[]),e.Eb(1073742336,k.d,k.d,[]),e.Eb(1073742336,v.t,v.t,[]),e.Eb(1073742336,v.b,v.b,[]),e.Eb(1073742336,u,u,[]),e.Eb(1024,s.i,(function(){return[[{path:"list",component:r},{path:"form",component:E},{path:"form/:id",component:E},{path:"",redirectTo:"list",pathMatch:"full"}]]}),[]),e.Eb(256,k.l,"XSRF-TOKEN",[]),e.Eb(256,k.m,"X-XSRF-TOKEN",[]),e.Eb(256,v.d,{apiURL:"https://app-form-builder-poc-api.herokuapp.com/product/spec/json/"},[])])}))}}]);