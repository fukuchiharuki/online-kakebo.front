(this["webpackJsonponline-kakebo.front"]=this["webpackJsonponline-kakebo.front"]||[]).push([[0],{26:function(t,e,n){},28:function(t,e,n){},30:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),i=n(18),u=n.n(i),a=(n(26),n(7)),s=n(2),o=n(3),h=function(){function t(e){Object(s.a)(this,t),this.script=void 0,this.data=void 0,Object.assign(this,e)}return Object(o.a)(t,[{key:"aggregation",value:function(){return this.url("aggregation")}},{key:"url",value:function(t){return"https://script.google.com/macros/s/".concat(this.script,"/exec?resource=").concat(t,"&id=").concat(this.data)}}]),t}(),l=function(){function t(e){Object(s.a)(this,t),this.search=void 0,this.search=e}return Object(o.a)(t,[{key:"validate",value:function(){var t=new URLSearchParams(this.search);return!![t.get("script"),t.get("data")].reduce((function(t,e){return t&&e}))}},{key:"dataSource",value:function(){var t=new URLSearchParams(this.search),e=t.get("script"),n=t.get("data");return new h({script:e,data:n})}}]),t}(),f=n(11),j=n(13),d=n.n(j),v=n(19);var b,O=n(4),g=function(){function t(e){Object(s.a)(this,t),this.length=void 0,this.length=e}return Object(o.a)(t,[{key:"hasNext",value:function(t){return this.isInRange(t+1)}},{key:"hasPrev",value:function(t){return this.isInRange(t-1)}},{key:"isInRange",value:function(t){return-this.length<t&&t<=0}}]),t}();!function(t){t["\u98df\u8cbb"]="\u98df\u8cbb",t["\u98df\u8cbb_\u500b\u5225"]="\u98df\u8cbb(\u500b\u5225)",t["\u65e5\u7528\u54c1\u8cbb"]="\u65e5\u7528\u54c1\u8cbb",t["\u5a2f\u697d\u8cbb"]="\u5a2f\u697d\u8cbb",t["\u533b\u7642\u8cbb"]="\u533b\u7642\u8cbb",t["\u6c34\u9053\u5149\u71b1\u8cbb"]="\u6c34\u9053\u5149\u71b1\u8cbb",t["\u901a\u4fe1\u8cbb"]="\u901a\u4fe1\u8cbb",t["\u4f4f\u5c45\u8cbb"]="\u4f4f\u5c45\u8cbb",t["\u7279\u5225\u8cbb"]="\u7279\u5225\u8cbb",t["\u5143\u5165\u91d1"]="\u5143\u5165\u91d1"}(b||(b={}));function m(t){switch(t){case b.\u98df\u8cbb:case b.\u98df\u8cbb_\u500b\u5225:return{"is\u53ce\u5165":function(){return!1},"is\u7279\u5225\u8cbb":function(){return!1},category:function(){return b.\u98df\u8cbb}};case b.\u65e5\u7528\u54c1\u8cbb:return{"is\u53ce\u5165":function(){return!1},"is\u7279\u5225\u8cbb":function(){return!1},category:function(){return b.\u65e5\u7528\u54c1\u8cbb}};case b.\u5a2f\u697d\u8cbb:return{"is\u53ce\u5165":function(){return!1},"is\u7279\u5225\u8cbb":function(){return!1},category:function(){return b.\u5a2f\u697d\u8cbb}};case b.\u533b\u7642\u8cbb:return{"is\u53ce\u5165":function(){return!1},"is\u7279\u5225\u8cbb":function(){return!1},category:function(){return b.\u533b\u7642\u8cbb}};case b.\u6c34\u9053\u5149\u71b1\u8cbb:return{"is\u53ce\u5165":function(){return!1},"is\u7279\u5225\u8cbb":function(){return!1},category:function(){return b.\u6c34\u9053\u5149\u71b1\u8cbb}};case b.\u901a\u4fe1\u8cbb:return{"is\u53ce\u5165":function(){return!1},"is\u7279\u5225\u8cbb":function(){return!1},category:function(){return b.\u901a\u4fe1\u8cbb}};case b.\u4f4f\u5c45\u8cbb:return{"is\u53ce\u5165":function(){return!1},"is\u7279\u5225\u8cbb":function(){return!1},category:function(){return b.\u4f4f\u5c45\u8cbb}};case b.\u7279\u5225\u8cbb:return{"is\u53ce\u5165":function(){return!1},"is\u7279\u5225\u8cbb":function(){return!0},category:function(){return b.\u7279\u5225\u8cbb}};case b.\u5143\u5165\u91d1:return{"is\u53ce\u5165":function(){return!0},"is\u7279\u5225\u8cbb":function(){return!1},category:function(){return b.\u5143\u5165\u91d1}}}}var y,x=function(){function t(e){Object(s.a)(this,t),this.accountItem=void 0,this.amount=void 0,Object.assign(this,e)}return Object(o.a)(t,[{key:"category",value:function(){return m(this.accountItem).category()}},{key:"categoryIs",value:function(t){return this.category()===t}},{key:"is",value:function(t){return this.accountItem===t}},{key:"is\u53ce\u5165",value:function(){return m(this.accountItem).is\u53ce\u5165()}},{key:"is\u7279\u5225\u8cbb",value:function(){return m(this.accountItem).is\u7279\u5225\u8cbb()}}]),t}(),k=function(){function t(e){Object(s.a)(this,t),this.value=void 0,this.value=e}return Object(o.a)(t,[{key:"\u53ce\u5165",value:function(){return this.value.filter\u53ce\u5165().totalAmount()}},{key:"\u652f\u51fa",value:function(){return this.value.filter\u652f\u51fa().totalAmount()}},{key:"\u7279\u5225\u8cbb",value:function(){return this.value.filter\u7279\u5225\u8cbb().totalAmount()}},{key:"\u7279\u5225\u8cbb\u3092\u9664\u3044\u305f\u652f\u51fa",value:function(){return this.\u652f\u51fa()-this.\u7279\u5225\u8cbb()}},{key:"\u7279\u5225\u8cbb\u3092\u542b\u3081\u306a\u3044\u5dee\u5f15",value:function(){return this.\u53ce\u5165()-this.\u7279\u5225\u8cbb\u3092\u9664\u3044\u305f\u652f\u51fa()}},{key:"\u7279\u5225\u8cbb\u3092\u542b\u3081\u305f\u5dee\u5f15",value:function(){return this.\u53ce\u5165()-this.\u652f\u51fa()}}],[{key:"of",value:function(e){return new t(e)}}]),t}(),p=function(){function t(e){var n;Object(s.a)(this,t),this.month=void 0,this.data=void 0,Object.assign(this,Object(O.a)(Object(O.a)({},e),{},{data:null===(n=e.data)||void 0===n?void 0:n.map((function(t){return new x(t)}))}))}return Object(o.a)(t,[{key:"asSummary",value:function(){return k.of(this)}},{key:"totalAmount",value:function(){return this.data.map((function(t){return t.amount})).reduce((function(t,e){return t+e}),0)}},{key:"categories",value:function(){return this.data.map((function(t){return t.category()})).reduce((function(t,e){return t.includes(e)?t:t.concat(e)}),[])}},{key:"filterByCategory",value:function(e){return new t({month:this.month,data:this.data.filter((function(t){return t.categoryIs(e)}))})}},{key:"filterByAccountItemType",value:function(e){return new t({month:this.month,data:this.data.filter((function(t){return t.is(e)}))})}},{key:"filter\u53ce\u5165",value:function(){return new t({month:this.month,data:this.data.filter((function(t){return t.is\u53ce\u5165()}))})}},{key:"filter\u652f\u51fa",value:function(){return new t({month:this.month,data:this.data.filter((function(t){return!t.is\u53ce\u5165()}))})}},{key:"filter\u7279\u5225\u8cbb",value:function(){return new t({month:this.month,data:this.data.filter((function(t){return t.is\u7279\u5225\u8cbb()}))})}}]),t}(),C=function(){function t(e){var n;Object(s.a)(this,t),this.values=void 0,Object.assign(this,{values:null===(n=e.values)||void 0===n?void 0:n.map((function(t){return new p(t)}))})}return Object(o.a)(t,[{key:"isEmpty",value:function(){return 0===this.values.length}},{key:"cursorRange",value:function(){return new g(this.values.length)}},{key:"cursorMonth",value:function(t){return this.values.slice(t-1)[0]}},{key:"currentMonth",value:function(){return this.cursorMonth(0)}}],[{key:"empty",value:function(){return new t({values:[]})}}]),t}();!function(t){t[t.FETCH=0]="FETCH",t[t.FETCHED=1]="FETCHED"}(y||(y={}));var w={isLoading:!1,data:C.empty()};function S(t,e){switch(e.type){case y.FETCH:return Object(O.a)(Object(O.a)({},t),{},{isLoading:!0});case y.FETCHED:var n=new C({values:e.payload.json});return Object(O.a)(Object(O.a)({},t),{},{data:n,isLoading:!1})}}var P=function(t){var e=t.aggregation(),n=Object(r.useReducer)(S,w),c=Object(f.a)(n,2),i=c[0],u=c[1];return function(t,e){var n=e.preProcess,c=e.postProcess,i=e.errorHandler;Object(r.useEffect)((function(){Object(v.a)(d.a.mark((function e(){var r,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n&&n(),console.log("get ".concat(t)),e.next=4,fetch(t);case 4:if(!(r=e.sent).ok){e.next=13;break}return e.next=8,r.json();case 8:u=e.sent,c&&c(u),console.log("ok"),e.next=15;break;case 13:i&&i(),console.log("error");case 15:case"end":return e.stop()}}),e)})))()}),[t,n,c,i])}(e,{preProcess:Object(r.useCallback)((function(){return u({type:y.FETCH})}),[u]),postProcess:Object(r.useCallback)((function(t){return u(function(t){return{type:y.FETCHED,payload:{json:t}}}(t))}),[u])}),i},F=n(9),N=(n(28),n(0));function E(t){return Object(N.jsx)("div",Object(O.a)({className:"fade-in"},t))}n(30);function M(){return Object(N.jsx)("div",{children:Object(N.jsx)("div",{className:"loader",children:"Loading..."})})}var I=function(t){if(t.if)return Object(N.jsx)(M,{});var e="function"===typeof t.children?t.children():t.children;return Object(N.jsx)(E,{children:e})},T=function(){function t(){Object(s.a)(this,t),this.value=void 0,this.value=new Date}return Object(o.a)(t,[{key:"restOfCurrentMonth",value:function(){var t=new Date(this.value.getFullYear(),this.value.getMonth()+1,0);return Math.ceil((t.getTime()-this.value.getTime())/864e5)}},{key:"cursorMonth",value:function(t){for(var e=new Date(this.value.getTime()),n=0;n>t;n--)e.setDate(0);return[e.getFullYear(),e.getMonth()+1]}}]),t}();var R=function(t){var e=t.cursorParams,n=t.cursorRange,r=t.onPrevClick,c=t.onNextClick,i=(e.hasPrev(n)?["flip"]:["flip","flip--disabled"]).join(" ");return Object(N.jsxs)("div",{className:"month-cursor",children:[Object(N.jsx)("div",{className:i,onClick:r,children:"\u25c0"}),Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{children:"\u4eca\u6708"}),Object(N.jsxs)("p",{children:["(\u6b8b\u308a ",(new T).restOfCurrentMonth()," \u65e5)"]})]}),Object(N.jsx)("div",{className:"flip flip--disabled",onClick:c,children:"\u25b6"})]})},L=function(){function t(e){Object(s.a)(this,t),this.search=void 0,this.search=e}return Object(o.a)(t,[{key:"isCurrentMonth",value:function(){return 0===this.cursor()}},{key:"cursor",value:function(){var t=new URLSearchParams(this.search);return parseInt(t.get("cursor"))||0}},{key:"hasNext",value:function(t){return t.hasNext(this.cursor())}},{key:"hasPrev",value:function(t){return t.hasPrev(this.cursor())}},{key:"nextSearch",value:function(){return this.offsetSearch(1)}},{key:"prevSearch",value:function(){return this.offsetSearch(-1)}},{key:"offsetSearch",value:function(t){var e=new URLSearchParams(this.search);return e.set("cursor",(this.cursor()+t).toString()),e.toString()}}]),t}();var A=function(t){return Object(N.jsx)(r.Fragment,{children:t.children.toLocaleString()})};var D=function(t){if(!t.if)return null;var e="function"===typeof t.children?t.children():t.children;return Object(N.jsx)(r.Fragment,{children:e})};var H=function(t){return Object(N.jsx)(r.Fragment,{children:t.in.map(t.children).map((function(t,e){return Object(N.jsx)(r.Fragment,{children:t},e)}))})};var B=function(t){var e=t.children;return Object(N.jsx)("dl",{className:"monthly-details",children:Object(N.jsx)(H,{in:e.categories(),children:function(t){var n=e.filterByCategory(t).totalAmount(),c=e.filterByAccountItemType(t).totalAmount(),i=n!==c;return Object(N.jsxs)(r.Fragment,{children:[Object(N.jsxs)("dt",{children:[t,Object(N.jsx)(D,{if:i,children:"*"})]}),Object(N.jsx)("dd",{children:Object(N.jsx)(A,{children:n})}),Object(N.jsx)(D,{if:i,children:Object(N.jsxs)("dd",{children:["(*\u5185 \u7d14\u7c8b\u306a",t,": ",Object(N.jsx)(A,{children:c}),")"]})})]})}})})};var U=function(t){var e=t.children;return Object(N.jsxs)("dl",{className:"monthly-summary",children:[Object(N.jsx)("dt",{children:"\u53ce\u5165"}),Object(N.jsx)("dd",{children:Object(N.jsx)(A,{children:e.\u53ce\u5165()})}),Object(N.jsx)("dt",{children:"\u652f\u51fa"}),Object(N.jsx)("dd",{children:Object(N.jsx)(A,{children:e.\u7279\u5225\u8cbb\u3092\u9664\u3044\u305f\u652f\u51fa()})}),Object(N.jsx)(D,{if:e.\u7279\u5225\u8cbb(),children:Object(N.jsxs)("dd",{children:["(+ \u7279\u5225\u8cbb: ",Object(N.jsx)(A,{children:e.\u7279\u5225\u8cbb()}),")"]})}),Object(N.jsx)("dt",{children:"\u5dee\u5f15"}),Object(N.jsx)("dd",{children:Object(N.jsx)(A,{children:e.\u7279\u5225\u8cbb\u3092\u542b\u3081\u305f\u5dee\u5f15()})}),Object(N.jsx)(D,{if:e.\u7279\u5225\u8cbb(),children:Object(N.jsxs)("dd",{children:["(\u7279\u5225\u8cbb\u8fbc: ",Object(N.jsx)(A,{children:e.\u7279\u5225\u8cbb\u3092\u542b\u3081\u305f\u5dee\u5f15()}),")"]})})]})};var J=function(t){var e=t.monthCursor,n=t.monthlyAggregation;return Object(N.jsxs)("div",{children:[e,Object(N.jsx)(U,{children:n.asSummary()}),Object(N.jsx)("h3",{children:"\u5185\u8a33"}),Object(N.jsx)(B,{children:n})]})};var K=function(t){var e=t.cursorParams,n=t.cursorRange,r=t.onPrevClick,c=t.onNextClick,i=(e.hasPrev(n)?["flip"]:["flip","flip--disabled"]).join(" "),u=(e.hasNext(n)?["flip"]:["flip","flip--disabled"]).join(" "),a=(new T).cursorMonth(e.cursor()),s=Object(f.a)(a,2),o=s[0],h=s[1];return Object(N.jsxs)("div",{className:"month-cursor",children:[Object(N.jsx)("div",{className:i,onClick:r,children:"\u25c0"}),Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{children:-1===e.cursor()?"\u5148\u6708":-2===e.cursor()?"\u5148\u3005\u6708":"".concat(-e.cursor()," \u30f6\u6708\u524d")}),Object(N.jsxs)("p",{children:["(",o," \u5e74 ",h," \u6708)"]})]}),Object(N.jsx)("div",{className:u,onClick:c,children:"\u25b6"})]})};var Y=function(t){var e=t.state,n=e.isLoading,r=e.data,c=Object(F.c)(),i=Object(F.d)(),u=new L(i.search);return Object(N.jsx)(I,{if:n||r.isEmpty(),children:function(){var t=r.cursorRange(),e={cursorParams:u,cursorRange:t,onPrevClick:function(){return c.push({pathname:"/",search:u.prevSearch()})},onNextClick:function(){return c.push({pathname:"/",search:u.nextSearch()})}},n={monthCursor:u.isCurrentMonth()?Object(N.jsx)(R,Object(O.a)({},e)):Object(N.jsx)(K,Object(O.a)({},e)),monthlyAggregation:u.isCurrentMonth()?r.currentMonth():r.cursorMonth(u.cursor())};return Object(N.jsx)(J,Object(O.a)({},n))}})};n(36);function _(t){return Object(N.jsx)("div",Object(O.a)({className:"center"},t))}var q=Object(a.a)();function z(){return console.error("invalid parameters."),Object(N.jsx)(_,{children:"\u0e50\xb7\xb0(\u09f9\u02c3\u15dd\u02c2\u09f9)\xb0\xb7\u0e50"})}function G(t){var e=t.dataSource,n=P(e);return Object(N.jsxs)(r.Fragment,{children:[Object(N.jsx)("header",{children:Object(N.jsx)("h1",{children:"Online KAKEBO"})}),Object(N.jsx)("hr",{}),Object(N.jsx)(F.b,{history:q,children:Object(N.jsx)(F.a,{path:"/",render:Q(n)})})]})}function Q(t){return function(){return Object(N.jsx)(Y,{state:t})}}var V=function(){var t=new l(q.location.search);if(!t.validate())return Object(N.jsx)(z,{});var e=t.dataSource();return Object(N.jsx)(G,{dataSource:e})},W=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,u=e.getTTFB;n(t),r(t),c(t),i(t),u(t)}))};u.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(V,{})}),document.getElementById("root")),W()}},[[37,1,2]]]);
//# sourceMappingURL=main.935404e9.chunk.js.map