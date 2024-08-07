"use strict";(self.webpackChunkhmfront=self.webpackChunkhmfront||[]).push([[239],{5748:(M,g,r)=>{r.d(g,{U:()=>O});var t=r(5879),m=r(7019),f=r(6814),e=r(6223);function x(d,l){if(1&d&&(t.TgZ(0,"div",16)(1,"div")(2,"div",17)(3,"p",18),t._uU(4,"Order for: "),t.TgZ(5,"strong"),t._uU(6),t.qZA()(),t.TgZ(7,"p",19),t._uU(8,"Order Size type: "),t.TgZ(9,"strong"),t._uU(10),t.qZA()(),t.TgZ(11,"p",19),t._uU(12,"Item quantity : "),t.TgZ(13,"strong"),t._uU(14),t.qZA()()()()()),2&d){const n=l.$implicit;t.xp6(6),t.Oqu(n.product.prodName),t.xp6(4),t.Oqu(n.prodSize),t.xp6(4),t.Oqu(n.quantity)}}function v(d,l){if(1&d){const n=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"p"),t._uU(3,"Orderd by "),t.TgZ(4,"strong"),t._uU(5),t.qZA()(),t.TgZ(6,"p",4),t._uU(7," Status: "),t.TgZ(8,"span",5),t._uU(9),t.qZA()()(),t.TgZ(10,"div",6)(11,"p",7)(12,"strong"),t._uU(13),t.ALo(14,"currency"),t.qZA(),t._uU(15," for "),t.TgZ(16,"span"),t._uU(17),t.qZA(),t._uU(18," item "),t.qZA()(),t.YNc(19,x,15,3,"div",8),t.TgZ(20,"div",9)(21,"select",10),t.NdJ("ngModelChange",function(a){const u=t.CHM(n).$implicit,C=t.oxw();return t.KtG(C.newStatus[u._id]=a)}),t.TgZ(22,"option",11),t._uU(23,"Pending"),t.qZA(),t.TgZ(24,"option",12),t._uU(25,"Approved"),t.qZA(),t.TgZ(26,"option",13),t._uU(27,"Delivered"),t.qZA(),t.TgZ(28,"option",14),t._uU(29,"Cancelled"),t.qZA()(),t.TgZ(30,"button",15),t.NdJ("click",function(){const c=t.CHM(n).$implicit,u=t.oxw();return t.KtG(u.updateStatus(c._id,c.user._id))}),t._uU(31,"Update Status"),t.qZA()()()}if(2&d){const n=l.$implicit,s=t.oxw();t.xp6(5),t.Oqu(null==n||null==n.user?null:n.user.name),t.xp6(4),t.hij("",n.status," "),t.xp6(4),t.hij("",t.xi3(14,6,null==n?null:n.totalPrice,"INR")," "),t.xp6(4),t.Oqu(null==n?null:n.orderItems.length),t.xp6(2),t.Q6J("ngForOf",n.orderItems),t.xp6(2),t.Q6J("ngModel",s.newStatus[n._id])}}let O=(()=>{class d{constructor(n){this.productService=n,this.newStatus={}}ngOnInit(){this.token=localStorage.getItem("token"),this.getPlacedOrders()}getPlacedOrders(){this.productService.getPlacedOrders(this.token).subscribe(n=>{this.orders=n,this.initializeStatus(),console.log(n)})}initializeStatus(){this.orders.forEach(n=>{this.newStatus[n._id]=n.status})}updateStatus(n,s){this.productService.updateOrderStatus(n,s,this.newStatus[n],this.token).subscribe(c=>{console.log("Order status updated successfully",c),this.getPlacedOrders()},c=>{console.error("Error updating order status",c)})}static#t=this.\u0275fac=function(s){return new(s||d)(t.Y36(m.p))};static#e=this.\u0275cmp=t.Xpm({type:d,selectors:[["app-supplier-orders-component"]],decls:2,vars:1,consts:[[1,"order-container"],["class","order-card",4,"ngFor","ngForOf"],[1,"order-card"],[1,"order-head"],[2,"margin-bottom","0.5rem"],[2,"background-color","#D6E4F0","padding","3px 7px","border-radius","5px","color","#2657C1"],[2,"position","relative","width","100%","margin","0","padding","0"],[2,"position","relative","width","max-content","float","right","margin","0","padding","0"],["class","order-item",4,"ngFor","ngForOf"],[1,"order-status"],[1,"status-select","form-select",3,"ngModel","ngModelChange"],["value","Pending"],["value","Approved"],["value","Delivered"],["value","Cancelled"],[1,"update-button",3,"click"],[1,"order-item"],[1,"item"],[1,"product-name"],[1,"order-details","product-info","product-price"]],template:function(s,a){1&s&&(t.TgZ(0,"div",0),t.YNc(1,v,32,9,"div",1),t.qZA()),2&s&&(t.xp6(1),t.Q6J("ngForOf",a.orders))},dependencies:[f.sg,e.YN,e.Kr,e.EJ,e.JJ,e.On,f.H9],styles:[".order-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;padding:1rem;width:80%}.order-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;border:1px solid #ccc;border-radius:8px;padding:.5rem 1rem;background-color:#f9f9f9;height:20rem;overflow:hidden;overflow-y:auto}.order-item[_ngcontent-%COMP%]{justify-content:space-between;padding:.5rem 0;border-bottom:1px solid #eee}.product-name[_ngcontent-%COMP%], .order-details[_ngcontent-%COMP%], .order-status[_ngcontent-%COMP%]{margin:0}.status-select[_ngcontent-%COMP%]{margin-top:.2rem;padding:.5rem;border:1px solid #ccc;border-radius:4px}.update-button[_ngcontent-%COMP%]{margin-top:.5rem;padding:.5rem 1rem;background-color:#007bff;color:#fff;border:none;border-radius:4px;cursor:pointer}.update-button[_ngcontent-%COMP%]:hover{background-color:#0056b3}.item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .order-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:.4rem}.order-head[_ngcontent-%COMP%]{background-color:#ebf4f6;padding:0 8px;border-radius:5px;color:#041562}@media (min-width: 768px){.order-container[_ngcontent-%COMP%]{flex-direction:row;flex-wrap:wrap}.order-card[_ngcontent-%COMP%]{flex:1 1 calc(50% - 2rem);margin:.5rem}}@media (min-width: 1024px){.order-card[_ngcontent-%COMP%]{flex:1 1 calc(33.333% - 2rem)}}@media screen and (orientation: portrait){.order-container[_ngcontent-%COMP%]{flex-direction:row;flex-wrap:wrap;font-size:small;width:100%}.order-head[_ngcontent-%COMP%]{margin:0;margin-bottom:.5rem}.order-card[_ngcontent-%COMP%]{flex:1 1 calc(50% - 1rem);height:17rem}.order-status[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:small}.update-button[_ngcontent-%COMP%]{margin-top:.5rem;padding:.5rem 1rem;background-color:#007bff;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:small}}"]})}return d})()},239:(M,g,r)=>{r.r(g),r.d(g,{SupplierModule:()=>Z});var t=r(6814),m=r(3403),f=r(5748),e=r(5879),x=r(7019);function v(o,_){if(1&o&&(e.TgZ(0,"div")(1,"h2"),e._uU(2,"Order Received"),e.qZA(),e.TgZ(3,"div",6)(4,"h1"),e._uU(5),e.qZA()()()),2&o){const i=e.oxw();e.xp6(5),e.Oqu(i.order.totalOrders)}}function O(o,_){if(1&o&&(e.TgZ(0,"div",7)(1,"div")(2,"h2"),e._uU(3,"Order Delivered"),e.qZA(),e.TgZ(4,"div",6)(5,"h1"),e._uU(6),e.qZA()()()()),2&o){const i=e.oxw();e.xp6(6),e.Oqu(i.order.deliveredOrders)}}function d(o,_){if(1&o&&(e.TgZ(0,"div",8)(1,"div")(2,"h2"),e._uU(3,"Total Sales"),e.qZA(),e.TgZ(4,"div",6)(5,"h1"),e._uU(6),e.qZA()()()()),2&o){const i=e.oxw();e.xp6(6),e.Oqu(i.order.deliveredOrders)}}function l(o,_){if(1&o&&(e.TgZ(0,"div")(1,"h2"),e._uU(2,"Total Items"),e.qZA(),e.TgZ(3,"div",6)(4,"h1"),e._uU(5),e.qZA()()()),2&o){const i=e.oxw();e.xp6(5),e.Oqu(i.products.count)}}let n=(()=>{class o{constructor(i){this.supplyService=i}ngOnInit(){this.token=localStorage.getItem("token"),this.getOrdersCount(),this.getProductsCount()}getOrdersCount(){this.supplyService.getOrdersCount(this.token).subscribe(i=>{console.log(i),this.order=i})}getProductsCount(){this.supplyService.getProductsCount(this.token).subscribe(i=>{console.log(i),this.products=i})}static#t=this.\u0275fac=function(p){return new(p||o)(e.Y36(x.p))};static#e=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-supplier"]],decls:7,vars:4,consts:[[1,"s-dashboard"],[1,"s-d-i","s-r"],[4,"ngIf"],["class","s-d-i s-d",4,"ngIf"],["class","s-d-i s-s",4,"ngIf"],[1,"s-d-i","s-i"],[1,"stat-value"],[1,"s-d-i","s-d"],[1,"s-d-i","s-s"]],template:function(p,h){1&p&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,v,6,1,"div",2),e.qZA(),e.YNc(3,O,7,1,"div",3),e.YNc(4,d,7,1,"div",4),e.TgZ(5,"div",5),e.YNc(6,l,6,1,"div",2),e.qZA()()),2&p&&(e.xp6(2),e.Q6J("ngIf",h.order),e.xp6(1),e.Q6J("ngIf",h.order),e.xp6(1),e.Q6J("ngIf",h.order),e.xp6(2),e.Q6J("ngIf",h.products))},dependencies:[t.O5],styles:[".s-dashboard[_ngcontent-%COMP%]{width:100%;display:flex;flex-wrap:wrap;gap:30px;justify-content:space-around;padding:15px}.s-d-i[_ngcontent-%COMP%]{background-color:#f5f5f5;border-radius:10px;box-shadow:0 4px 8px #0000001a;padding:20px;flex:1 1 calc(25% - 20px);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;min-width:250px;transition:transform .3s ease}.s-d-i[_ngcontent-%COMP%]:hover{transform:translateY(-5px)}.s-d-i[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.2em;margin-bottom:10px;color:#333}.stat-value[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3em;margin:0;color:#00796b}.s-dashboard[_ngcontent-%COMP%]{width:100%;display:inline-block}.s-d-i[_ngcontent-%COMP%]{width:25%;display:inline-block;margin:15px}@media screen and (orientation: portrait){.s-d-i[_ngcontent-%COMP%]{flex:1 1 calc(30% - 10px);margin:10px 4px;min-width:8.5rem;overflow:hidden}}@media screen and (max-width: 500px){.s-d-i[_ngcontent-%COMP%]{flex:1 1 calc(30% - 10px);margin:10px 4px;min-width:9.5rem;overflow:hidden}}@media screen and (max-width: 400px){.s-d-i[_ngcontent-%COMP%]{flex:1 1 calc(30% - 10px);margin:10px 4px;min-width:8.5rem;overflow:hidden}}"]})}return o})();var s=r(1391),a=r(9742);const c=[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",component:n},{path:"orders",component:f.U},{path:"",loadChildren:()=>Promise.all([r.e(4174),r.e(8805)]).then(r.bind(r,8805)).then(o=>o.MoreModule),canActivate:[s.a,a.p],data:{role:"supplier"}}];let u=(()=>{class o{static#t=this.\u0275fac=function(p){return new(p||o)};static#e=this.\u0275mod=e.oAB({type:o});static#n=this.\u0275inj=e.cJS({imports:[m.Bz.forChild(c),m.Bz]})}return o})();var C=r(4240),P=r(6223);let Z=(()=>{class o{static#t=this.\u0275fac=function(p){return new(p||o)};static#e=this.\u0275mod=e.oAB({type:o});static#n=this.\u0275inj=e.cJS({providers:[C.f],imports:[t.ez,u,P.u5]})}return o})()}}]);