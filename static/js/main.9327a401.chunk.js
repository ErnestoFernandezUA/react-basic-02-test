(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"id":488795,"picture":"1.jpg","discount":14,"action":"\u043d\u0430\u0439\u043a\u0440\u0430\u0449\u0430 \u0446\u0456\u043d\u0430","description":"\u0414\u043b\u044f \u0441\u043f\u0440\u0430\u0432\u0436\u043d\u0456\u0445 \u043f\u043e\u0446\u0456\u043d\u043e\u0432\u0443\u0432\u0430\u0447\u0456\u0432 \u0432\u0438\u043d\u0430...","title":"\u0412\u0438\u043d\u043d\u0430 \u0448\u0430\u0444\u0430 Philco PW18F 65\u0441\u043c/18 \u043f\u043b\u044f\u0448\u043e\u043a","review":[5,5,5,4,5,3,2,5,5,5],"price":4699,"cashback":46,"prevPrice":5699},{"id":488796,"picture":"2.jpg","discount":24,"action":"\u0445\u0456\u0442","description":"some description","title":"\u041f\u0440\u0430\u043b\u044c\u043d\u0430 \u043c\u0430\u0448\u0438\u043d\u0430 Electrolux EW6S4R06W","review":[5,5,5,5,5,5],"price":6868,"cashback":69,"prevPrice":8999},{"id":488797,"picture":"3.jpg","discount":18,"action":"\u0445\u0456\u0442","description":"\u0417\u043d\u0438\u0436\u043a\u0438 \u0434\u043e 26% \u043d\u0430 \u043f\u0438\u043b\u043ec\u043e\u0441\u0438 Thomas + ...","title":"\u041f\u0438\u043b\u043e\u0441\u043e\u0441 \u0446\u0438\u043a\u043b\u043e\u043d\u0438\u0439 THOMAS MULTI CYCLONE PRO 14","review":[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],"price":3239,"cashback":33,"prevPrice":3999}]')},,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var r=c(1),i=c.n(r),s=c(7),a=c.n(s),n=(c(13),c(14),c(2)),o=c(3),p=c(5),d=c(4),u=(c(15),c(0)),l=function(e){Object(p.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(n.a)(this,c);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={hover:!1},e.toSeparatePrice=function(e){for(var t=e.toString().split("").reverse(),c="",r=0;r<t.length;r++)r%3===0&&(c+=" "),c+=t[r];return c.split("").reverse().join("").trim()},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.props,c=t.id,r=t.picture,i=t.discount,s=t.description,a=t.action,n=t.title,o=t.review,p=t.price,d=t.cashback,l=t.prevPrice,j="../data/img/".concat(r),h=Math.floor(o.reduce((function(e,t){return e+t}),0)/o.length);return Object(u.jsxs)("a",{href:"https://www.google.com",className:"ProductItem",onMouseEnter:function(){return e.setState({hover:!0})},onMouseLeave:function(){return e.setState({hover:!1})},children:[this.state.hover?Object(u.jsxs)("p",{className:"ProductItem__id",children:["\u041a\u043e\u0434 \u0442\u043e\u0432\u0430\u0440\u0443: \xa0",c]}):"",Object(u.jsx)("img",{className:"ProductItem__picture",src:"../data/img/1.jpg",alt:j}),Object(u.jsxs)("div",{className:"ProductItem__box-for-discount",children:[Object(u.jsx)("p",{className:"ProductItem__discount",children:"-".concat(i,"%")}),Object(u.jsx)("p",{className:"ProductItem__action",children:a})]}),Object(u.jsx)("p",{className:"ProductItem__description",children:s}),Object(u.jsx)("p",{className:"ProductItem__title",children:n}),Object(u.jsx)("p",{className:"ProductItem__review",children:"".concat(h," \u0432\u0456\u0434\u0433\u0443\u043a\u0456\u0432")}),Object(u.jsx)("p",{className:"ProductItem__price-title",children:"\u0426\u0456\u043d\u0430:"}),Object(u.jsxs)("div",{className:"ProductItem__box-for-price",children:[Object(u.jsx)("p",{className:"ProductItem__price",children:"".concat(this.toSeparatePrice(p)," \u0433\u0440\u043d")}),Object(u.jsx)("p",{className:"ProductItem__cashback",children:"+ ".concat(d," \u0433\u0440\u043d \u043a\u0435\u0448\u0431\u0435\u043a")})]}),Object(u.jsx)("p",{className:"ProductItem__prevPrice",children:"".concat(this.toSeparatePrice(l),"\u0433\u0440\u043d")}),Object(u.jsx)("p",{className:"ProductItem__button-buy",children:"\u041a\u0443\u043f\u0438\u0442\u0438"})]})}}]),c}(i.a.Component),j=(c(17),function(e){Object(p.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(n.a)(this,c);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={products:e.props.products},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.products;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"",children:Object(u.jsx)("ul",{className:"ProductList",children:t.map((function(t,c){var r=e.state.products[c],i=r.id,s=r.picture,a=r.discount,n=r.action,o=r.description,p=r.title,d=r.review,j=r.price,h=r.cashback,m=r.prevPrice;return Object(u.jsx)("li",{children:Object(u.jsx)(l,{id:i,picture:s,discount:a,action:n,description:o,title:p,review:d,price:j,cashback:h,prevPrice:m})},t.id)}))})})})}}]),c}(i.a.Component)),h=c(8),m=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(j,{products:h})})};a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.9327a401.chunk.js.map