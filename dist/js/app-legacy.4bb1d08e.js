(function(){var t={5062:function(t,e,n){var i,a,s;n(7964)["default"];n(7042),
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.12
 *
 * Requires: jQuery 1.2.2+
 */
function(l){a=[n(9755)],i=l,s="function"===typeof i?i.apply(e,a):i,void 0===s||(t.exports=s)}((function(t){var e,n,i=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],a="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],s=Array.prototype.slice;if(t.event.fixHooks)for(var l=i.length;l;)t.event.fixHooks[i[--l]]=t.event.mouseHooks;var o=t.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var e=a.length;e;)this.addEventListener(a[--e],r,!1);else this.onmousewheel=r;t.data(this,"mousewheel-line-height",o.getLineHeight(this)),t.data(this,"mousewheel-page-height",o.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=a.length;e;)this.removeEventListener(a[--e],r,!1);else this.onmousewheel=null;t.removeData(this,"mousewheel-line-height"),t.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var n=t(e),i=n["offsetParent"in t.fn?"offsetParent":"parent"]();return i.length||(i=t("body")),parseInt(i.css("fontSize"),10)||parseInt(n.css("fontSize"),10)||16},getPageHeight:function(e){return t(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};function r(i){var a=i||window.event,l=s.call(arguments,1),r=0,d=0,p=0,m=0,f=0,v=0;if(i=t.event.fix(a),i.type="mousewheel","detail"in a&&(p=-1*a.detail),"wheelDelta"in a&&(p=a.wheelDelta),"wheelDeltaY"in a&&(p=a.wheelDeltaY),"wheelDeltaX"in a&&(d=-1*a.wheelDeltaX),"axis"in a&&a.axis===a.HORIZONTAL_AXIS&&(d=-1*p,p=0),r=0===p?d:p,"deltaY"in a&&(p=-1*a.deltaY,r=p),"deltaX"in a&&(d=a.deltaX,0===p&&(r=-1*d)),0!==p||0!==d){if(1===a.deltaMode){var h=t.data(this,"mousewheel-line-height");r*=h,p*=h,d*=h}else if(2===a.deltaMode){var g=t.data(this,"mousewheel-page-height");r*=g,p*=g,d*=g}if(m=Math.max(Math.abs(p),Math.abs(d)),(!n||m<n)&&(n=m,u(a,m)&&(n/=40)),u(a,m)&&(r/=40,d/=40,p/=40),r=Math[r>=1?"floor":"ceil"](r/n),d=Math[d>=1?"floor":"ceil"](d/n),p=Math[p>=1?"floor":"ceil"](p/n),o.settings.normalizeOffset&&this.getBoundingClientRect){var _=this.getBoundingClientRect();f=i.clientX-_.left,v=i.clientY-_.top}return i.deltaX=d,i.deltaY=p,i.deltaFactor=n,i.offsetX=f,i.offsetY=v,i.deltaMode=0,l.unshift(i,r,d,p),e&&clearTimeout(e),e=setTimeout(c,200),(t.event.dispatch||t.event.handle).apply(this,l)}}function c(){n=null}function u(t,e){return o.settings.adjustOldDeltas&&"mousewheel"===t.type&&e%120===0}t.fn.extend({mousewheel:function(t){return t?this.bind("mousewheel",t):this.trigger("mousewheel")},unmousewheel:function(t){return this.unbind("mousewheel",t)}})}))},5168:function(t,e,n){"use strict";n(6992),n(8674),n(9601),n(7727);var i=n(144),a=n(8345),s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-container"},[n("div",{staticClass:"header"},[n("span",[t._v("交友圈")]),n("div",{staticClass:"post"},[n("a",[t._v("发布")])])]),n("div",{staticClass:"publish-container"},[n("div",{staticClass:"publish"},[n("input",{attrs:{type:"button",value:"发布"}}),n("textarea",{attrs:{placeholder:"发布点什么...",rows:"5",maxlength:"200","οnchange":"this.value=this.value.substring(0, 200)","οnkeydοwn":"this.value=this.value.substring(0, 200)","οnkeyup":"this.value=this.value.substring(0, 200)"}})])]),n("div",{staticClass:"content"},[n("div",{staticClass:"msg"},[n("div",{staticClass:"user"},[n("span",[t._v("用户名")])]),n("div",{staticClass:"content"},[t._v(" 动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区 ")]),n("div",{staticClass:"time"},[n("span",[t._v("时间戳转时间")])]),n("div",{staticClass:"comment-list"},[n("div",{staticClass:"post-comm"},[n("input",{staticClass:"input_txt",attrs:{type:"text",placeholder:"评论点什么吧..."}}),n("input",{staticClass:"input_sub",attrs:{type:"button",value:"发 送"}})]),n("div",{staticClass:"comment"},[n("span",[t._v("用户名")]),n("span",[t._v(":")]),n("span",[t._v("评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容")])]),n("div",{staticClass:"comment"},[n("span",[t._v("用户名")]),n("span",[t._v(":")]),n("span",[t._v("评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容")])])])]),n("div",{staticClass:"msg"},[n("div",{staticClass:"user"},[n("span",[t._v("用户名")])]),n("div",{staticClass:"content"},[t._v(" 动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区动态内容区 ")]),n("div",{staticClass:"time"},[n("span",[t._v("时间戳转时间")])]),n("div",{staticClass:"comment-list"},[n("div",{staticClass:"post-comm"},[n("input",{staticClass:"input_txt",attrs:{type:"text",placeholder:"评论点什么吧..."}}),n("input",{staticClass:"input_sub",attrs:{type:"button",value:"发 送"}})]),n("div",{staticClass:"comment"},[n("span",[t._v("用户名")]),n("span",[t._v(":")]),n("span",[t._v("评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容")])]),n("div",{staticClass:"comment"},[n("span",[t._v("用户名")]),n("span",[t._v(":")]),n("span",[t._v("评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容")])])])])])])}],o={name:"FriendDynamic"},r=o,c=n(1001),u=(0,c.Z)(r,s,l,!1,null,"bc43083a",null),d=u.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-tree",{attrs:{data:t.data,"node-key":"id",draggable:"","allow-drop":t.allowDrop,"allow-drag":t.allowDrag}})},m=[],f={name:"FriendList",data:function(){return{data:[{id:1,label:"特别关心",children:[{id:7,label:"小明"},{id:8,label:"小红"}]},{id:2,label:"我的好友",children:[{id:9,label:"小明"},{id:10,label:"小红"}]},{id:3,label:"朋友",children:[{id:11,label:"小明"},{id:12,label:"小红"}]},{id:4,label:"家人",children:[{id:13,label:"小明"},{id:14,label:"小红"}]},{id:5,label:"同学",children:[{id:15,label:"小明"},{id:16,label:"小红"}]},{id:6,label:"其他",children:[{id:17,label:"小明"},{id:18,label:"小红"}]}],defaultProps:{children:"children",label:"label"}}},methods:{allowDrop:function(t,e,n){return!(e.data.id<7)},allowDrag:function(t){return!0}}},v=f,h=(0,c.Z)(v,p,m,!1,null,null,null),g=h.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("div",{staticClass:"header"},[n("h3",[t._v("对方名字啥的")]),n("img",{attrs:{src:"img/person01.png",alt:"icon"}})]),n("div",{staticClass:"main"},[n("ul",{staticClass:"talk_list",staticStyle:{top:"0"},attrs:{id:"talk_list"}},[n("li",{staticClass:"left_word"},[n("img",{attrs:{src:"img/person01.png"}}),t._v(" "),n("span",[t._v("对方发的信息")])]),n("li",{staticClass:"right_word"},[n("img",{attrs:{src:"img/person02.png"}}),t._v(" "),n("span",[t._v("自己发的信息")])])]),n("div",{staticClass:"drag_bar",staticStyle:{display:"none"}},[n("div",{staticClass:"drager ui-draggable ui-draggable-handle",staticStyle:{display:"none",height:"412.628px"}})])]),n("div",{staticClass:"footer"},[n("img",{attrs:{src:"img/person02.png",alt:"icon"}}),n("input",{staticClass:"input_txt",attrs:{type:"text",placeholder:"说点什么吧...",id:"ipt"}}),n("input",{staticClass:"input_sub",attrs:{type:"button",value:"发 送",id:"btnSend"}})])])}],C={name:"FriendMessage"},x=C,w=(0,c.Z)(x,_,b,!1,null,"e2792566",null),y=w.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[t._v("hh,personHome")])},O=[],M={name:"PersonHome"},E=M,S=(0,c.Z)(E,k,O,!1,null,null,null),H=S.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-descriptions",{staticClass:"margin-top",attrs:{title:"带边框列表",column:3,size:t.size,border:""}},[n("template",{slot:"extra"},[n("el-button",{attrs:{type:"primary",size:"small"}},[t._v("操作")])],1),n("el-descriptions-item",[n("template",{slot:"label"},[n("i",{staticClass:"el-icon-user"}),t._v(" 用户名 ")]),t._v(" kooriookami ")],2),n("el-descriptions-item",[n("template",{slot:"label"},[n("i",{staticClass:"el-icon-place"}),t._v(" 年龄 ")]),t._v(" 20 ")],2),n("el-descriptions-item",[n("template",{slot:"label"},[n("i",{staticClass:"el-icon-eleme"}),t._v(" 生日 ")]),t._v(" 2020104111 ")],2),n("el-descriptions-item",[n("template",{slot:"label"},[n("i",{staticClass:"el-icon-mobile-phone"}),t._v(" 手机号 ")]),t._v(" 18100000000 ")],2),n("el-descriptions-item",[n("template",{slot:"label"},[n("i",{staticClass:"el-icon-location-outline"}),t._v(" 居住地 ")]),t._v(" 苏州市 ")],2),n("el-descriptions-item",[n("template",{slot:"label"},[n("i",{staticClass:"el-icon-tickets"}),t._v(" 备注 ")]),n("el-tag",{attrs:{size:"small"}},[t._v("学校")])],2),n("el-descriptions-item",[n("template",{slot:"label"},[n("i",{staticClass:"el-icon-office-building"}),t._v(" 联系地址 ")]),t._v(" xkk ")],2),n("el-descriptions-item",[n("template",{slot:"label"},[n("i",{staticClass:"el-icon-sunny"}),t._v(" 兴趣爱好 ")]),t._v(" 打游戏 ")],2),n("el-descriptions-item",[n("template",{slot:"label"},[n("i",{staticClass:"el-icon-chat-line-round"}),t._v(" 交友想法 ")]),t._v(" 找个好朋友 ")],2)],2)},$=[],D={name:"PersonInfor"},P=D,j=(0,c.Z)(P,Z,$,!1,null,null,null),z=j.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Right-band-top",{staticStyle:{margin:"0 50px 0 50px"}}),n("Right-band-mid",{staticStyle:{margin:"0 50px 0 50px"}}),n("Right-band-bot",{staticStyle:{margin:"0 50px 0 50px"}}),[n("el-backtop",{attrs:{target:".page-component__scroll .el-scrollbar__wrap"}})]],2)},T=[],L=(n(5062),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-carousel",{attrs:{interval:4e3,type:"card"}},t._l(6,(function(e){return n("el-carousel-item",{key:e},[n("el-image",{attrs:{src:t.imgShow[e-1]}})],1)})),1)],1)}),B=[],I={name:"rightBandTop",data:function(){return{imgShow:[n(6900),n(1693),n(5446),n(689),n(9907),n(6111)]}}},X=I,A=(0,c.Z)(X,L,B,!1,null,"709dc60d",null),F=A.exports,Y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("hhsxaaaaaaaaa")])])}],G={name:"RightBandMid"},N=G,q=(0,c.Z)(N,Y,W,!1,null,"5472bfff",null),J=q.exports,K=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("This is MID PAGE!LOOOOOONG")]),n("span",[t._v("Almost every child will complain about their parents sometimes. It is natural, because when people stay together for a long time.")])])}],U={name:"RightBandMid"},V=U,tt=(0,c.Z)(V,K,Q,!1,null,"7136788d",null),et=tt.exports,nt={name:"webHome",data:function(){return{}},components:{RightBandTop:F,RightBandMid:et,RightBandBot:J}},it=nt,at=(0,c.Z)(it,R,T,!1,null,null,null),st=at.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",[n("el-col",{attrs:{span:10}},[n("el-input",{attrs:{placeholder:"请输入好友用户名或邮箱",clearable:""},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),n("el-col",{attrs:{span:4}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){return t.Search(t.input)}}},[t._v("搜索")])],1)],1)],1)},ot=[],rt={name:"FriendAdd",data:function(){return{input:""}},methods:{Search:function(){console.log("xkk")}}},ct=rt,ut=(0,c.Z)(ct,lt,ot,!1,null,"26a96724",null),dt=ut.exports;i["default"].use(a.Z);var pt=[{path:"/webHome",name:"zhuye",component:st},{path:"/friendDynamic",name:"fdongtai",component:d},{path:"/friendLists",name:"fliebiao",component:g},{path:"/friendMessages",name:"fxiaoxi",component:y},{path:"/addFriend",name:"fadd",component:dt},{path:"/personHome",name:"phome",component:H},{path:"/personInfor",name:"pinfro",component:z}],mt=new a.Z({routes:pt}),ft=mt,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Home")],1)},ht=[],gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",[n("HomeHeader")],1),n("el-row",[n("WebMain")],1)],1)},_t=[],bt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ct=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Header"},[i("img",{staticStyle:{width:"70%"},attrs:{src:n(63)}}),i("img",{staticClass:"touxiang_img",attrs:{src:n(8418),alt:"头像"}})])}],xt={name:"HomeHeader",data:function(){return{}}},wt=xt,yt=(0,c.Z)(wt,bt,Ct,!1,null,"338a0094",null),kt=yt.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{staticClass:"tac"},[n("el-col",{attrs:{span:4}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2","text-color":"rgb(120, 100, 307)"},on:{open:t.handleOpen,close:t.handleClose}},[n("el-menu-item",{attrs:{index:"1"}},[n("i",{staticClass:"el-icon-s-platform"}),n("span",{attrs:{slot:"title"},slot:"title"},[n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:{name:"zhuye"}}},[t._v(" 网站主页 ")])],1)]),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-s-custom"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("好 友")])]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"2-1"}},[n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:{name:"fxiaoxi"}}},[n("i",{staticClass:"el-icon-chat-dot-round"}),t._v("好友消息 ")])],1),n("el-menu-item",{attrs:{index:"2-2"}},[n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:{name:"fdongtai"}}},[n("i",{staticClass:"el-icon-star-off"}),t._v("好友动态 ")])],1),n("el-menu-item",{attrs:{index:"2-3"}},[n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:{name:"fliebiao"}}},[n("i",{staticClass:"el-icon-s-order"}),t._v("好友列表 ")])],1),n("el-menu-item",{attrs:{index:"2-4"}},[n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:{name:"fadd"}}},[n("i",{staticClass:"el-icon-zoom-in"}),t._v("添加好友 ")])],1)],1)],2),n("el-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-user-solid"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("个 人")])]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"3-1"}},[n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:{name:"phome"}}},[n("i",{staticClass:"el-icon-s-home"}),t._v("我的主页 ")])],1),n("el-menu-item",{attrs:{index:"3-2"}},[n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:{name:"pinfro"}}},[n("i",{staticClass:"el-icon-document-copy"}),t._v("个人信息 ")])],1)],1)],2)],1)],1),n("el-col",{attrs:{span:20}},[n("router-view")],1)],1),n("el-col")],1)},Mt=[],Et=n(3019),St=n(629),Ht={name:"WebDirection",methods:(0,Et.Z)({handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}},(0,St.OI)({transform:"change"}))},Zt=Ht,$t=(0,c.Z)(Zt,Ot,Mt,!1,null,null,null),Dt=$t.exports,Pt={name:"Home",data:function(){return{}},components:{HomeHeader:kt,WebMain:Dt}},jt=Pt,zt=(0,c.Z)(jt,gt,_t,!1,null,"0218e9f8",null),Rt=zt.exports,Tt={name:"App",components:{Home:Rt}},Lt=Tt,Bt=(0,c.Z)(Lt,vt,ht,!1,null,null,null),It=Bt.exports,Xt=n(4720),At=n.n(Xt),Ft=n(4104);i["default"].use(St.ZP);var Yt={},Wt={change:function(t,e){console.log(t,e),t.option=e}},Gt={option:1},Nt=new St.ZP.Store({actions:Yt,mutations:Wt,state:Gt});n(9755);i["default"].use(Ft.ZP),i["default"].use(At()),i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(It)},router:ft,store:Nt,beforeCreate:function(){i["default"].prototype.$bus=this}}).$mount("#app")},8418:function(t,e,n){"use strict";t.exports=n.p+"img/headerbg.f8f7a7be.jpg"},63:function(t,e,n){"use strict";t.exports=n.p+"img/headertext.5e374b2f.png"},6900:function(t,e,n){"use strict";t.exports=n.p+"img/friend1.f00a94c4.png"},1693:function(t,e,n){"use strict";t.exports=n.p+"img/friend2.fcf2f58b.jpg"},5446:function(t,e,n){"use strict";t.exports=n.p+"img/friend3.45b31d6f.jpg"},689:function(t,e,n){"use strict";t.exports=n.p+"img/friend4.0a1972d6.jpg"},9907:function(t,e,n){"use strict";t.exports=n.p+"img/friend5.8ae053a2.jpg"},6111:function(t,e,n){"use strict";t.exports=n.p+"img/friend6.3c91d556.jpg"},6608:function(){}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var s=e[i]={exports:{}};return t[i].call(s.exports,s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,i,a,s){if(!i){var l=1/0;for(u=0;u<t.length;u++){i=t[u][0],a=t[u][1],s=t[u][2];for(var o=!0,r=0;r<i.length;r++)(!1&s||l>=s)&&Object.keys(n.O).every((function(t){return n.O[t](i[r])}))?i.splice(r--,1):(o=!1,s<l&&(l=s));if(o){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[i,a,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,s,l=i[0],o=i[1],r=i[2],c=0;if(l.some((function(e){return 0!==t[e]}))){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(r)var u=r(n)}for(e&&e(i);c<l.length;c++)s=l[c],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},i=self["webpackChunkmfriends"]=self["webpackChunkmfriends"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(5168)}));i=n.O(i)})();
//# sourceMappingURL=app-legacy.4bb1d08e.js.map