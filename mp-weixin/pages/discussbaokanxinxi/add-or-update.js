(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/discussbaokanxinxi/add-or-update"],{"2a50":function(e,t,r){"use strict";var n;r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement;e._self._c},u=[]},"30de":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t,r,n,a,u,i){try{var o=e[u](i),c=o.value}catch(s){return void r(s)}o.done?t(c):Promise.resolve(c).then(n,a)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){u(i,n,a,o,c,"next",e)}function c(e){u(i,n,a,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("2cc9"))}.bind(null,r)).catch(r.oe)},c={data:function(){return{cross:"",ruleForm:{refid:"",userid:"",nickname:"",content:"",reply:""},user:{},ro:{refid:!1,userid:!1,nickname:!1,content:!1,reply:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(t){var r=this;return i(n.default.mark((function a(){var u,i,o,c;return n.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return u=e.getStorageSync("nowTable"),a.next=3,r.$api.session(u);case 3:if(i=a.sent,r.user=i.data,r.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(r.ruleForm.refid=t.refid,r.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){a.next=13;break}return r.ruleForm.id=t.id,a.next=11,r.$api.info("discussbaokanxinxi",r.ruleForm.id);case 11:i=a.sent,r.ruleForm=i.data;case 13:if(r.cross=t.cross,!t.cross){a.next=41;break}o=e.getStorageSync("crossObj"),a.t0=n.default.keys(o);case 17:if((a.t1=a.t0()).done){a.next=41;break}if(c=a.t1.value,"refid"!=c){a.next=23;break}return r.ruleForm.refid=o[c],r.ro.refid=!0,a.abrupt("continue",17);case 23:if("userid"!=c){a.next=27;break}return r.ruleForm.userid=o[c],r.ro.userid=!0,a.abrupt("continue",17);case 27:if("nickname"!=c){a.next=31;break}return r.ruleForm.nickname=o[c],r.ro.nickname=!0,a.abrupt("continue",17);case 31:if("content"!=c){a.next=35;break}return r.ruleForm.content=o[c],r.ro.content=!0,a.abrupt("continue",17);case 35:if("reply"!=c){a.next=39;break}return r.ruleForm.reply=o[c],r.ro.reply=!0,a.abrupt("continue",17);case 39:a.next=17;break;case 41:r.styleChange();case 42:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=this;return i(n.default.mark((function r(){var a,u,i,o,c,s,d,l,f,b,m,p,x,g;return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:for(a="",u=[],a&&(u=a.split(",")),i=0;i<u.length;i++)o=new RegExp(u[i],"g"),t.ruleForm.content.indexOf(u[i])>-1&&(t.ruleForm.content=t.ruleForm.content.replace(o,"**"));if(t.ruleForm.refid){r.next=7;break}return t.$utils.msg("关联表id不能为空"),r.abrupt("return");case 7:if(t.ruleForm.userid){r.next=10;break}return t.$utils.msg("用户id不能为空"),r.abrupt("return");case 10:if(t.ruleForm.content){r.next=13;break}return t.$utils.msg("评论内容不能为空"),r.abrupt("return");case 13:if(!t.cross){r.next=29;break}if(l=e.getStorageSync("statusColumnName"),f=e.getStorageSync("statusColumnValue"),""==l){r.next=29;break}if(b=e.getStorageSync("crossObj"),l.startsWith("[")){r.next=25;break}for(m in b)m==l&&(b[m]=f);return p=e.getStorageSync("crossTable"),r.next=23,t.$api.update("".concat(p),b);case 23:r.next=29;break;case 25:c=Number(e.getStorageSync("userid")),s=b["id"],d=e.getStorageSync("statusColumnName"),d=d.replace(/\[/,"").replace(/\]/,"");case 29:if(!s||!c){r.next=52;break}return t.ruleForm.crossuserid=c,t.ruleForm.crossrefid=s,x={page:1,limit:10,crossuserid:c,crossrefid:s},r.next=35,t.$api.list("discussbaokanxinxi",x);case 35:if(g=r.sent,!(g.data.total>=d)){r.next=41;break}return t.$utils.msg(e.getStorageSync("tips")),r.abrupt("return",!1);case 41:if(!t.ruleForm.id){r.next=46;break}return r.next=44,t.$api.update("discussbaokanxinxi",t.ruleForm);case 44:r.next=48;break;case 46:return r.next=48,t.$api.add("discussbaokanxinxi",t.ruleForm);case 48:e.setStorageSync("discussbaokanxinxiCleanType",!0),t.$utils.msgBack("提交成功");case 50:r.next=61;break;case 52:if(!t.ruleForm.id){r.next=57;break}return r.next=55,t.$api.update("discussbaokanxinxi",t.ruleForm);case 55:r.next=59;break;case 57:return r.next=59,t.$api.add("discussbaokanxinxi",t.ruleForm);case 59:e.setStorageSync("discussbaokanxinxiCleanType",!0),t.$utils.msgBack("提交成功");case 61:case"end":return r.stop()}}),r)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),n=t.getMonth()+1,a=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),n=n>9?n:"0"+n,a=a>9?a:"0"+a,"".concat(r,"-").concat(n,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=c}).call(this,r("543d")["default"])},5581:function(e,t,r){"use strict";r.r(t);var n=r("30de"),a=r.n(n);for(var u in n)"default"!==u&&function(e){r.d(t,e,(function(){return n[e]}))}(u);t["default"]=a.a},"861c":function(e,t,r){"use strict";var n=r("d9f4"),a=r.n(n);a.a},"9f0d":function(e,t,r){"use strict";r.r(t);var n=r("2a50"),a=r("5581");for(var u in a)"default"!==u&&function(e){r.d(t,e,(function(){return a[e]}))}(u);r("861c");var i,o=r("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"b6e70706",null,!1,n["a"],i);t["default"]=c.exports},b68b:function(e,t,r){"use strict";(function(e){r("c56d");n(r("66fd"));var t=n(r("9f0d"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("543d")["createPage"])},d9f4:function(e,t,r){}},[["b68b","common/runtime","common/vendor"]]]);