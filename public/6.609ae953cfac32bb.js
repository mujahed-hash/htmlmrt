"use strict";(self.webpackChunkhmfront=self.webpackChunkhmfront||[]).push([[6],{6:(_,c,o)=>{o.r(c),o.d(c,{SharedModule:()=>A});var d=o(6814),s=o(3403),t=o(5879),u=o(9862),p=o(5349);let a=(()=>{class r{constructor(n){this.http=n,this.baseUrl=p.N.baseUrl}getOrderAS(n,e){const Z={headers:new u.WM({Authorization:`Bearer ${e}`})};return this.http.get(`${this.baseUrl}/order/${n}`,Z)}static#t=this.\u0275fac=function(e){return new(e||r)(t.LFG(u.eN))};static#n=this.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function g(r,l){if(1&r&&(t.TgZ(0,"div",12)(1,"p")(2,"strong"),t._uU(3,"Product Name:"),t.qZA(),t._uU(4),t.qZA(),t.TgZ(5,"p")(6,"strong"),t._uU(7,"Price:"),t.qZA(),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.TgZ(10,"p")(11,"strong"),t._uU(12,"Quantity:"),t.qZA(),t._uU(13),t.qZA(),t.TgZ(14,"p")(15,"strong"),t._uU(16,"Size:"),t.qZA(),t._uU(17),t.qZA()()),2&r){const n=l.$implicit;t.xp6(4),t.hij(" ",null==n||null==n.product?null:n.product.prodName,""),t.xp6(4),t.hij(" ",t.xi3(9,4,null==n||null==n.product?null:n.product.prodPrice,"INR"),""),t.xp6(5),t.hij(" ",null==n?null:n.quantity,""),t.xp6(4),t.hij(" ",null==n?null:n.prodSize,"")}}function m(r,l){if(1&r){const n=t.EpF();t.TgZ(0,"div",3)(1,"h2"),t._uU(2,"Order Details"),t.qZA(),t.TgZ(3,"div",4)(4,"div",5)(5,"p")(6,"strong"),t._uU(7,"Order ID:"),t.qZA(),t._uU(8),t.qZA(),t.TgZ(9,"p")(10,"strong"),t._uU(11,"Order Date:"),t.qZA(),t._uU(12),t.ALo(13,"date"),t.qZA(),t.TgZ(14,"p")(15,"strong"),t._uU(16,"Status:"),t.qZA(),t._uU(17),t.qZA()(),t.TgZ(18,"div",6)(19,"h3"),t._uU(20,"Buyer Information"),t.qZA(),t.TgZ(21,"p")(22,"strong"),t._uU(23,"Name:"),t.qZA(),t._uU(24),t.qZA(),t.TgZ(25,"p")(26,"strong"),t._uU(27,"Email:"),t.qZA(),t._uU(28),t.qZA()()(),t.TgZ(29,"div",7)(30,"h3"),t._uU(31,"Shipping Address"),t.qZA(),t.TgZ(32,"p")(33,"strong"),t._uU(34,"Street:"),t.qZA(),t._uU(35),t.qZA(),t.TgZ(36,"p")(37,"strong"),t._uU(38,"City:"),t.qZA(),t._uU(39),t.qZA(),t.TgZ(40,"p")(41,"strong"),t._uU(42,"Postal Code:"),t.qZA(),t._uU(43),t.qZA()(),t.TgZ(44,"div",8)(45,"h3"),t._uU(46,"Order Items"),t.qZA(),t.YNc(47,g,18,7,"div",9),t.qZA(),t.TgZ(48,"div",10)(49,"p")(50,"strong"),t._uU(51,"Total Price:"),t.qZA(),t._uU(52),t.ALo(53,"currency"),t.qZA()(),t.TgZ(54,"button",11),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.printOrder())}),t._uU(55,"Print Order"),t.qZA()()}if(2&r){const n=t.oxw();t.xp6(8),t.hij(" ",n.order.customIdentifer,""),t.xp6(4),t.hij(" ",t.xi3(13,10,n.order.date,"medium"),""),t.xp6(5),t.hij(" ",n.order.status,""),t.xp6(7),t.hij(" ",null==n.order||null==n.order.user?null:n.order.user.name,""),t.xp6(4),t.hij(" ",null==n.order||null==n.order.user?null:n.order.user.email,""),t.xp6(7),t.hij(" ",null==n.order||null==n.order.shippingAddress?null:n.order.shippingAddress.street,""),t.xp6(4),t.hij(" ",null==n.order||null==n.order.shippingAddress?null:n.order.shippingAddress.city,""),t.xp6(4),t.hij(" ",null==n.order||null==n.order.shippingAddress?null:n.order.shippingAddress.postalCode,""),t.xp6(4),t.Q6J("ngForOf",n.order.orderItems),t.xp6(5),t.hij(" ",t.xi3(53,13,n.order.totalPrice,"INR"),"")}}const h=[{path:"view-order/:customIdentifier",component:(()=>{class r{constructor(n,e){this.sharedService=n,this.actRoute=e,this.order={}}ngOnInit(){this.token=localStorage.getItem("token"),this.getOrder()}getOrder(){this.actRoute.params.subscribe(n=>{this.sharedService.getOrderAS(n.customIdentifier,this.token).subscribe(e=>{this.order=e,console.log(e)})})}printOrder(){const n=document.querySelector(".order-details-container")?.innerHTML,e=document.body.innerHTML;n?(document.body.innerHTML=n,window.print(),document.body.innerHTML=e,window.location.reload()):console.error("Order details not found for printing.")}static#t=this.\u0275fac=function(e){return new(e||r)(t.Y36(a),t.Y36(s.gz))};static#n=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-vieworder-as"]],decls:3,vars:1,consts:[[1,"order-main"],[1,"order-sub"],["class","order-details-container",4,"ngIf"],[1,"order-details-container"],[1,"order-summary"],[1,"order-info"],[1,"user-info"],[1,"shipping-info"],[1,"order-items"],["class","item",4,"ngFor","ngForOf"],[1,"total-price"],[1,"print-button",3,"click"],[1,"item"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,m,56,16,"div",2),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("ngIf",i.order))},dependencies:[d.sg,d.O5,d.H9,d.uU],styles:[".order-main[_ngcontent-%COMP%]{width:100%;display:grid;justify-items:center;height:100%;margin-left:-10rem;padding-left:0}.order-sub[_ngcontent-%COMP%]{width:max-content;height:max-content}.order-details-container[_ngcontent-%COMP%]{margin:20px auto;padding:20px;border:1px solid #ddd;border-radius:8px;background-color:#f9f9f9}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{color:#333;margin-bottom:10px}.order-summary[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:20px}.order-info[_ngcontent-%COMP%], .user-info[_ngcontent-%COMP%], .shipping-info[_ngcontent-%COMP%]{width:48%}p[_ngcontent-%COMP%]{margin:5px 0;color:#555}.order-items[_ngcontent-%COMP%]{margin-top:20px}.item[_ngcontent-%COMP%]{margin-bottom:10px;padding:10px;border:1px solid #ddd;border-radius:5px;background-color:#fff}.total-price[_ngcontent-%COMP%]{margin-top:20px;text-align:right;font-size:1.2em;color:#2657c1;font-weight:700}.print-button[_ngcontent-%COMP%]{margin-top:20px;padding:10px 20px;background-color:#2657c1;color:#fff;border:none;border-radius:5px;cursor:pointer}.print-button[_ngcontent-%COMP%]:hover{background-color:#1d4b8b}@media print{*[_ngcontent-%COMP%]{margin:0;padding:0;border:none;box-shadow:none;overflow:hidden}body[_ngcontent-%COMP%]{margin:0;padding:0}.print-button[_ngcontent-%COMP%]{display:none}}@media screen and (max-width: 1000px){.order-main[_ngcontent-%COMP%]{margin-left:0}}@media screen and (orientation: portrait){.order-main[_ngcontent-%COMP%]{margin-left:0}.order-sub[_ngcontent-%COMP%]{width:90%;font-size:small}}"]})}return r})()},{path:"signup/secretly",component:(()=>{class r{static#t=this.\u0275fac=function(e){return new(e||r)};static#n=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-siup"]],decls:2,vars:0,template:function(e,i){1&e&&(t.TgZ(0,"p"),t._uU(1,"siup works!"),t.qZA())}})}return r})()}];let f=(()=>{class r{static#t=this.\u0275fac=function(e){return new(e||r)};static#n=this.\u0275mod=t.oAB({type:r});static#r=this.\u0275inj=t.cJS({imports:[s.Bz.forChild(h),s.Bz]})}return r})(),A=(()=>{class r{static#t=this.\u0275fac=function(e){return new(e||r)};static#n=this.\u0275mod=t.oAB({type:r});static#r=this.\u0275inj=t.cJS({imports:[d.ez,f]})}return r})()}}]);