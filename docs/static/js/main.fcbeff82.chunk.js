(this["webpackJsonponline-kakebo.front"]=this["webpackJsonponline-kakebo.front"]||[]).push([[0],{26:function(t,n,e){},34:function(t,n,e){"use strict";e.r(n);var r,i=e(0),u=e.n(i),c=e(17),a=e.n(c),o=(e(26),e(8)),s=e(14),f=e(4),h=e(11),l=e.n(h),d=e(18),j=e(21),v=e(6),b=e(7),O=function(){function t(n){Object(v.a)(this,t),this.script=void 0,this.data=void 0,Object.assign(this,n)}return Object(b.a)(t,[{key:"aggregation",value:function(){return this.url("aggregation")}},{key:"url",value:function(t){return"https://script.google.com/macros/s/".concat(this.script,"/exec?resource=").concat(t,"&id=").concat(this.data)}}]),t}(),g=function(){function t(n){Object(v.a)(this,t),this.value=void 0,this.value=n}return Object(b.a)(t,[{key:"\u53ce\u5165",value:function(){return this.value.filter\u53ce\u5165().totalAmount()}},{key:"\u652f\u51fa",value:function(){return this.value.filter\u652f\u51fa().totalAmount()}},{key:"\u7279\u5225\u8cbb",value:function(){return this.value.filter\u7279\u5225\u8cbb().totalAmount()}},{key:"\u7279\u5225\u8cbb\u3092\u9664\u3044\u305f\u652f\u51fa",value:function(){return this.\u652f\u51fa()-this.\u7279\u5225\u8cbb()}},{key:"\u7279\u5225\u8cbb\u3092\u542b\u3081\u306a\u3044\u5dee\u5f15",value:function(){return this.\u53ce\u5165()-this.\u7279\u5225\u8cbb\u3092\u9664\u3044\u305f\u652f\u51fa()}},{key:"\u7279\u5225\u8cbb\u3092\u542b\u3081\u305f\u5dee\u5f15",value:function(){return this.\u53ce\u5165()-this.\u652f\u51fa()}}],[{key:"of",value:function(n){return new t(n)}}]),t}(),m=function(){function t(n){var e;Object(v.a)(this,t),this.values=void 0,Object.assign(this,{values:null===(e=n.values)||void 0===e?void 0:e.map((function(t){return new y(t)}))})}return Object(b.a)(t,[{key:"isEmpty",value:function(){return 0==this.values.length}},{key:"currentMonthSummary",value:function(){var t=this.values.slice(-1)[0];return g.of(t)}}]),t}(),y=function(){function t(n){var e;Object(v.a)(this,t),this.month=void 0,this.data=void 0,Object.assign(this,Object(o.a)(Object(o.a)({},n),{},{data:null===(e=n.data)||void 0===e?void 0:e.map((function(t){return new k(t)}))}))}return Object(b.a)(t,[{key:"totalAmount",value:function(){return this.data.map((function(t){return t.amount})).reduce((function(t,n){return t+n}))}},{key:"filter\u53ce\u5165",value:function(){return new t({month:this.month,data:this.data.filter((function(t){return t.is\u53ce\u5165()}))})}},{key:"filter\u652f\u51fa",value:function(){return new t({month:this.month,data:this.data.filter((function(t){return!t.is\u53ce\u5165()}))})}},{key:"filter\u7279\u5225\u8cbb",value:function(){return new t({month:this.month,data:this.data.filter((function(t){return t.is\u7279\u5225\u8cbb()}))})}}]),t}(),k=function(){function t(n){Object(v.a)(this,t),this.accountItem=void 0,this.amount=void 0,Object.assign(this,n)}return Object(b.a)(t,[{key:"is\u53ce\u5165",value:function(){return x(this.accountItem).is\u53ce\u5165()}},{key:"is\u7279\u5225\u8cbb",value:function(){return x(this.accountItem).is\u7279\u5225\u8cbb()}},{key:"category",value:function(){return x(this.accountItem).category()}}]),t}();function x(t){switch(t){case r.\u98df\u8cbb:case r.\u98df\u8cbb_\u500b\u5225:return{"is\u53ce\u5165":function(){return!1},"is\u7279\u5225\u8cbb":function(){return!1},category:function(){return r.\u98df\u8cbb}};case r.\u65e5\u7528\u54c1\u8cbb:return{"is\u53ce\u5165":function(){return!1},"is\u7279\u5225\u8cbb":function(){return!1},category:function(){return r.\u65e5\u7528\u54c1\u8cbb}};case r.\u5a2f\u697d\u8cbb:return{"is\u53ce\u5165":function(){return!1},"is\u7279\u5225\u8cbb":function(){return!1},category:function(){return r.\u5a2f\u697d\u8cbb}};case r.\u533b\u7642\u8cbb:return{"is\u53ce\u5165":function(){return!1},"is\u7279\u5225\u8cbb":function(){return!1},category:function(){return r.\u533b\u7642\u8cbb}};case r.\u6c34\u9053\u5149\u71b1\u8cbb:return{"is\u53ce\u5165":function(){return!1},"is\u7279\u5225\u8cbb":function(){return!1},category:function(){return r.\u6c34\u9053\u5149\u71b1\u8cbb}};case r.\u901a\u4fe1\u8cbb:return{"is\u53ce\u5165":function(){return!1},"is\u7279\u5225\u8cbb":function(){return!1},category:function(){return r.\u901a\u4fe1\u8cbb}};case r.\u4f4f\u5c45\u8cbb:return{"is\u53ce\u5165":function(){return!1},"is\u7279\u5225\u8cbb":function(){return!1},category:function(){return r.\u4f4f\u5c45\u8cbb}};case r.\u7279\u5225\u8cbb:return{"is\u53ce\u5165":function(){return!1},"is\u7279\u5225\u8cbb":function(){return!0},category:function(){return r.\u7279\u5225\u8cbb}};case r.\u5143\u5165\u91d1:return{"is\u53ce\u5165":function(){return!0},"is\u7279\u5225\u8cbb":function(){return!1},category:function(){return r.\u5143\u5165\u91d1}}}}!function(t){t["\u98df\u8cbb"]="\u98df\u8cbb",t["\u98df\u8cbb_\u500b\u5225"]="\u98df\u8cbb(\u500b\u5225)",t["\u65e5\u7528\u54c1\u8cbb"]="\u65e5\u7528\u54c1\u8cbb",t["\u5a2f\u697d\u8cbb"]="\u5a2f\u697d\u8cbb",t["\u533b\u7642\u8cbb"]="\u533b\u7642\u8cbb",t["\u6c34\u9053\u5149\u71b1\u8cbb"]="\u6c34\u9053\u5149\u71b1\u8cbb",t["\u901a\u4fe1\u8cbb"]="\u901a\u4fe1\u8cbb",t["\u4f4f\u5c45\u8cbb"]="\u4f4f\u5c45\u8cbb",t["\u7279\u5225\u8cbb"]="\u7279\u5225\u8cbb",t["\u5143\u5165\u91d1"]="\u5143\u5165\u91d1"}(r||(r={}));var p=new m({values:[]});var w=function(t){var n=t.aggregation(),e=Object(i.useState)(p),r=Object(j.a)(e,2),u=r[0],c=r[1];return Object(i.useEffect)((function(){Object(d.a)(l.a.mark((function t(){var e,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n);case 2:if(!(e=t.sent).ok){t.next=13;break}return t.t0=m,t.next=7,e.json();case 7:t.t1=t.sent,t.t2={values:t.t1},r=new t.t0(t.t2),c(r),t.next=14;break;case 13:c(p);case 14:case"end":return t.stop()}}),t)})))()}),[n]),u},S=e(1);var L=function(t){var n=function(t){var n=new URLSearchParams(t),e=n.get("script"),r=n.get("data");return new O({script:e,data:r})}(t.location.search),e=w(n);if(e.isEmpty())return Object(S.jsx)(i.Fragment,{});var r=e.currentMonthSummary();return Object(S.jsxs)(i.Fragment,{children:[Object(S.jsx)("header",{children:Object(S.jsx)("h1",{children:"Online KAKEBO"})}),Object(S.jsxs)("div",{children:[Object(S.jsx)("h2",{children:"\u4eca\u6708"}),Object(S.jsxs)("dl",{className:"current-month-summary",children:[Object(S.jsx)("dt",{children:"\u53ce\u5165"}),Object(S.jsx)("dd",{children:r.\u53ce\u5165().toLocaleString()}),Object(S.jsx)("dt",{children:"\u652f\u51fa"}),Object(S.jsx)("dd",{children:r.\u7279\u5225\u8cbb\u3092\u9664\u3044\u305f\u652f\u51fa().toLocaleString()}),Object(S.jsxs)("dd",{children:["(+ \u7279\u5225\u8cbb: ",r.\u7279\u5225\u8cbb().toLocaleString(),")"]}),Object(S.jsx)("dt",{children:"\u5dee\u5f15"}),Object(S.jsx)("dd",{children:r.\u7279\u5225\u8cbb\u3092\u542b\u3081\u305f\u5dee\u5f15().toLocaleString()}),Object(S.jsxs)("dd",{children:["(\u7279\u5225\u8cbb\u8fbc: ",r.\u7279\u5225\u8cbb\u3092\u542b\u3081\u305f\u5dee\u5f15().toLocaleString(),")"]})]})]})]})},F=Object(f.a)();function I(t){return Object(S.jsx)(L,Object(o.a)({},t))}var A=function(){return Object(S.jsx)(s.b,{history:F,children:Object(S.jsx)(s.a,{path:"/",render:I})})},E=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,35)).then((function(n){var e=n.getCLS,r=n.getFID,i=n.getFCP,u=n.getLCP,c=n.getTTFB;e(t),r(t),i(t),u(t),c(t)}))};a.a.render(Object(S.jsx)(u.a.StrictMode,{children:Object(S.jsx)(A,{})}),document.getElementById("root")),E()}},[[34,1,2]]]);
//# sourceMappingURL=main.fcbeff82.chunk.js.map