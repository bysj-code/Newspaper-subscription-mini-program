(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"0eed":function(e,t,n){"use strict";n.r(t);var r=n("8ff4"),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=o.a},2851:function(e,t,n){},"30cb":function(e,t,n){"use strict";n.r(t);var r=n("cb03"),o=n("0eed");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("8460"),n("e9c6");var i,u=n("f0c5"),s=Object(u["a"])(o["default"],r["b"],r["c"],!1,null,"c08f81ae",null,!1,r["a"],i);t["default"]=s.exports},8460:function(e,t,n){"use strict";var r=n("2851"),o=n.n(r);o.a},"8ff4":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("a34a")),o=a(n("5945"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,r,o,a,i){try{var u=e[a](i),s=u.value}catch(c){return void n(c)}u.done?t(s):Promise.resolve(s).then(r,o)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function u(e){i(a,r,o,u,s,"next",e)}function s(e){i(a,r,o,u,s,"throw",e)}u(void 0)}))}}var s={data:function(){return{username:"",password:"",codes:[{num:1,color:"#000",rotate:"10deg",size:"16px"},{num:2,color:"#000",rotate:"10deg",size:"16px"},{num:3,color:"#000",rotate:"10deg",size:"16px"},{num:4,color:"#000",rotate:"10deg",size:"16px"}],options:["请选择登录用户类型"],optionsValues:["","yonghu"],index:0,roleNum:0}},onLoad:function(){var e=["请选择登录用户类型"],t=o.default.list();this.menuList=t;for(var n=0;n<this.menuList.length;n++)"是"==this.menuList[n].hasFrontLogin&&(e.push(this.menuList[n].roleName),this.roleNum++);1==this.roleNum&&(this.index=1),this.options=e,this.styleChange()},methods:{styleChange:function(){this.$nextTick((function(){}))},onRegisterTap:function(t){e.setStorageSync("loginTable",t),this.$utils.jump("../register/register")},onForgetTap:function(){this.$utils.jump("../forget/forget")},onLoginTap:function(){var t=this;return u(r.default.mark((function n(){var o;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.username){n.next=3;break}return t.$utils.msg("请输入用户名"),n.abrupt("return");case 3:if(t.password){n.next=6;break}return t.$utils.msg("请输入用户密码"),n.abrupt("return");case 6:if(t.optionsValues[t.index]){n.next=9;break}return t.$utils.msg("请选择登陆用户类型"),n.abrupt("return");case 9:return n.next=11,t.$api.login("".concat(t.optionsValues[t.index]),{username:t.username,password:t.password});case 11:return o=n.sent,e.removeStorageSync("useridTag"),e.setStorageSync("token",o.token),e.setStorageSync("nickname",t.username),e.setStorageSync("nowTable","".concat(t.optionsValues[t.index])),n.next=18,t.$api.session("".concat(t.optionsValues[t.index]));case 18:o=n.sent,e.setStorageSync("userid",o.data.id),o.data.vip&&e.setStorageSync("vip",o.data.vip),e.setStorageSync("role","".concat(t.options[t.index])),t.$utils.tab("../index/index");case 23:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value}}};t.default=s}).call(this,n("543d")["default"])},a2f8:function(e,t,n){},b9c6:function(e,t,n){"use strict";(function(e){n("c56d");r(n("66fd"));var t=r(n("30cb"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},cb03:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var o=function(){var e=this,t=e.$createElement;e._self._c},a=[]},e9c6:function(e,t,n){"use strict";var r=n("a2f8"),o=n.n(r);o.a}},[["b9c6","common/runtime","common/vendor"]]]);