(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-31d7"],{"3Xui":function(e,t,i){"use strict";i.r(t);var s=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"left"},[t("div",{staticClass:"box"},[t("img",{attrs:{src:i("Pw89"),alt:""}})]),this._v(" "),t("div",{staticClass:"name"},[this._v("AJ-Report")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"item"},[t("a",{attrs:{href:"https://ajreport.beliefteam.cn/report-doc/",target:"blank"}},[this._v("文档")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"item"},[t("a",{attrs:{href:"https://gitee.com/anji-plus/report",target:"blank"}},[this._v("社区")])])}],o=i("GQeE"),r=i.n(o),n=i("14Xm"),a=i.n(n),c=i("D3Ub"),h=i.n(c),l=i("gDS+"),p=i.n(l),d=i("NFKh"),u=i.n(d);function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"XwKsGlMcdPMEhR1B",i=u.a.enc.Utf8.parse(t),s=u.a.enc.Utf8.parse(e);return u.a.AES.encrypt(s,i,{mode:u.a.mode.ECB,padding:u.a.pad.Pkcs7}).toString()}function m(e){var t=e.$el.parentNode.offsetWidth||window.offsetWidth,i=e.$el.parentNode.offsetHeight||window.offsetHeight;return{imgWidth:-1!=e.imgSize.width.indexOf("%")?parseInt(this.imgSize.width)/100*t+"px":this.imgSize.width,imgHeight:-1!=e.imgSize.height.indexOf("%")?parseInt(this.imgSize.height)/100*i+"px":this.imgSize.height,barWidth:-1!=e.barSize.width.indexOf("%")?parseInt(this.barSize.width)/100*t+"px":this.barSize.width,barHeight:-1!=e.barSize.height.indexOf("%")?parseInt(this.barSize.height)/100*i+"px":this.barSize.height}}var g=i("4d7F"),v=i.n(g),y=i("vDqi"),b=i.n(y),w=i("XJYT");b.a.defaults.baseURL="./";var k=b.a.create({withCredentials:!1,timeout:6e4,headers:{"Content-Type":"application/json"}});k.interceptors.request.use(function(e){return e},function(e){v.a.reject(e)}),k.interceptors.response.use(function(e){var t=e.data;return 200==t.code?t:"50014"!=t.code?"3100"==t.code||"3101"==t.code?t:(Object(w.Message)({message:t.repMsg||t.message,type:"error",duration:3e3}),t):void Object(w.MessageBox)({message:"当前登录已失效或异地登录，请重新登录",type:"error",duration:3e3}).then(function(){sessionStorage.clear(),localStorage.clear(),window.location.href="/"}).catch(function(e){})},function(e){var t=e.response.code,i=e.response.data,s="";s=200!=t?"服务器内部错误，请联系管理员":"失败原因："+i.code+"--"+i.repMsg,Object(w.Message)({message:s,type:"error",duration:5e3})});var x=k;function S(e){return x({url:"auth-service/user/captcha/get",method:"post",data:e})}function _(e){return x({url:"auth-service/user/captcha/check",method:"post",data:e})}var C={name:"VerifySlide",props:{captchaType:{type:String},type:{type:String,default:"1"},mode:{type:String,default:"fixed"},vSpace:{type:Number,default:5},explain:{type:String,default:"向右滑动完成验证"},imgSize:{type:Object,default:function(){return{width:"310px",height:"155px"}}},blockSize:{type:Object,default:function(){return{width:"50px",height:"50px"}}},barSize:{type:Object,default:function(){return{width:"310px",height:"40px"}}}},data:function(){return{secretKey:"",passFlag:"",backImgBase:"",blockBackImgBase:"",backToken:"",startMoveTime:"",endMovetime:"",tipsBackColor:"",tipWords:"",text:"",finishText:"",setSize:{imgHeight:0,imgWidth:0,barHeight:0,barWidth:0},top:0,left:0,moveBlockLeft:void 0,leftBarWidth:void 0,moveBlockBackgroundColor:void 0,leftBarBorderColor:"#ddd",iconColor:void 0,iconClass:"icon-right",status:!1,isEnd:!1,showRefresh:!0,transitionLeft:"",transitionWidth:""}},computed:{barArea:function(){return this.$el.querySelector(".verify-bar-area")},resetSize:function(){return m}},methods:{init:function(){var e=this;this.text=this.explain,this.getPictrue(),this.$nextTick(function(){var t=e.resetSize(e);for(var i in t)e.$set(e.setSize,i,t[i]);e.$parent.$emit("ready",e)});var t=this;window.removeEventListener("touchmove",function(e){t.move(e)}),window.removeEventListener("mousemove",function(e){t.move(e)}),window.removeEventListener("touchend",function(){t.end()}),window.removeEventListener("mouseup",function(){t.end()}),window.addEventListener("touchmove",function(e){t.move(e)}),window.addEventListener("mousemove",function(e){t.move(e)}),window.addEventListener("touchend",function(){t.end()}),window.addEventListener("mouseup",function(){t.end()})},start:function(e){if((e=e||window.event).touches)t=e.touches[0].pageX;else var t=e.clientX;this.startLeft=Math.floor(t-this.barArea.getBoundingClientRect().left),this.startMoveTime=+new Date,0==this.isEnd&&(this.text="",this.moveBlockBackgroundColor="#337ab7",this.leftBarBorderColor="#337AB7",this.iconColor="#fff",e.stopPropagation(),this.status=!0)},move:function(e){if(e=e||window.event,this.status&&0==this.isEnd){if(e.touches)t=e.touches[0].pageX;else var t=e.clientX;var i=t-this.barArea.getBoundingClientRect().left;i>=this.barArea.offsetWidth-parseInt(parseInt(this.blockSize.width)/2)-2&&(i=this.barArea.offsetWidth-parseInt(parseInt(this.blockSize.width)/2)-2),i<=0&&(i=parseInt(parseInt(this.blockSize.width)/2)),this.moveBlockLeft=i-this.startLeft+"px",this.leftBarWidth=i-this.startLeft+"px"}},end:function(){var e=this;this.endMovetime=+new Date;var t=this;if(this.status&&0==this.isEnd){var i=parseInt((this.moveBlockLeft||"").replace("px",""));i=310*i/parseInt(this.setSize.imgWidth),_({captchaType:this.captchaType,pointJson:this.secretKey?f(p()({x:i,y:5}),this.secretKey):p()({x:i,y:5}),token:this.backToken}).then(function(s){if("0000"==s.repCode){e.moveBlockBackgroundColor="#5cb85c",e.leftBarBorderColor="#5cb85c",e.iconColor="#fff",e.iconClass="icon-check",e.showRefresh=!1,e.isEnd=!0,"pop"==e.mode&&setTimeout(function(){e.$parent.clickShow=!1,e.refresh()},1500),e.passFlag=!0,e.tipWords=((e.endMovetime-e.startMoveTime)/1e3).toFixed(2)+"s验证成功";var o=e.secretKey?f(e.backToken+"---"+p()({x:i,y:5}),e.secretKey):e.backToken+"---"+p()({x:i,y:5});e.$parent.$emit("success",{captchaVerification:o}),setTimeout(function(){e.tipWords="",e.$parent.closeBox()},1e3)}else e.moveBlockBackgroundColor="#d9534f",e.leftBarBorderColor="#d9534f",e.iconColor="#fff",e.iconClass="icon-close",e.passFlag=!1,setTimeout(function(){t.refresh()},1e3),e.$parent.$emit("error",e),e.tipWords="验证失败",setTimeout(function(){e.tipWords=""},1e3)}),this.status=!1}},refresh:function(){var e=this;this.showRefresh=!0,this.finishText="",this.transitionLeft="left .3s",this.moveBlockLeft=0,this.leftBarWidth=void 0,this.transitionWidth="width .3s",this.leftBarBorderColor="#ddd",this.moveBlockBackgroundColor="#fff",this.iconColor="#000",this.iconClass="icon-right",this.isEnd=!1,this.getPictrue(),setTimeout(function(){e.transitionWidth="",e.transitionLeft="",e.text=e.explain},300)},getPictrue:function(){var e=this;S({captchaType:this.captchaType}).then(function(t){"0000"==t.repCode?(e.backImgBase=t.repData.originalImageBase64,e.blockBackImgBase=t.repData.jigsawImageBase64,e.backToken=t.repData.token,e.secretKey=t.repData.secretKey):e.tipWords=t.repMsg})}},watch:{type:{immediate:!0,handler:function(){this.init()}}},mounted:function(){this.$el.onselectstart=function(){return!1}}},T=i("KHd+"),z=Object(T.a)(C,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{position:"relative"}},["2"===e.type?i("div",{staticClass:"verify-img-out",style:{height:parseInt(e.setSize.imgHeight)+e.vSpace+"px"}},[i("div",{staticClass:"verify-img-panel",style:{width:e.setSize.imgWidth,height:e.setSize.imgHeight}},[i("img",{staticStyle:{width:"100%",height:"100%",display:"block"},attrs:{src:"data:image/png;base64,"+e.backImgBase,alt:""}}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.showRefresh,expression:"showRefresh"}],staticClass:"verify-refresh",on:{click:e.refresh}},[i("i",{staticClass:"iconfont icon-refresh"})]),e._v(" "),i("transition",{attrs:{name:"tips"}},[e.tipWords?i("span",{staticClass:"verify-tips",class:e.passFlag?"suc-bg":"err-bg"},[e._v(e._s(e.tipWords))]):e._e()])],1)]):e._e(),e._v(" "),i("div",{staticClass:"verify-bar-area",style:{width:e.setSize.imgWidth,height:e.barSize.height,"line-height":e.barSize.height}},[i("span",{staticClass:"verify-msg",domProps:{textContent:e._s(e.text)}}),e._v(" "),i("div",{staticClass:"verify-left-bar",style:{width:void 0!==e.leftBarWidth?e.leftBarWidth:e.barSize.height,height:e.barSize.height,"border-color":e.leftBarBorderColor,transaction:e.transitionWidth}},[i("span",{staticClass:"verify-msg",domProps:{textContent:e._s(e.finishText)}}),e._v(" "),i("div",{staticClass:"verify-move-block",style:{width:e.barSize.height,height:e.barSize.height,"background-color":e.moveBlockBackgroundColor,left:e.moveBlockLeft,transition:e.transitionLeft},on:{touchstart:e.start,mousedown:e.start}},[i("i",{class:["verify-icon iconfont",e.iconClass],style:{color:e.iconColor}}),e._v(" "),"2"===e.type?i("div",{staticClass:"verify-sub-block",style:{width:Math.floor(47*parseInt(e.setSize.imgWidth)/310)+"px",height:e.setSize.imgHeight,top:"-"+(parseInt(e.setSize.imgHeight)+e.vSpace)+"px","background-size":e.setSize.imgWidth+" "+e.setSize.imgHeight}},[i("img",{staticStyle:{width:"100%",height:"100%",display:"block"},attrs:{src:"data:image/png;base64,"+e.blockBackImgBase,alt:""}})]):e._e()])])])])},[],!1,null,null,null);z.options.__file="VerifySlide.vue";var B=z.exports,P=i("P2sY"),$=i.n(P),A={name:"VerifyPoints",props:{mode:{type:String,default:"fixed"},captchaType:{type:String},vSpace:{type:Number,default:5},imgSize:{type:Object,default:function(){return{width:"310px",height:"155px"}}},barSize:{type:Object,default:function(){return{width:"310px",height:"40px"}}}},data:function(){return{secretKey:"",checkNum:3,fontPos:[],checkPosArr:[],num:1,pointBackImgBase:"",poinTextList:[],backToken:"",setSize:{imgHeight:0,imgWidth:0,barHeight:0,barWidth:0},tempPoints:[],text:"",barAreaColor:void 0,barAreaBorderColor:void 0,showRefresh:!0,bindingClick:!0}},computed:{resetSize:function(){return m}},methods:{init:function(){var e=this;this.fontPos.splice(0,this.fontPos.length),this.checkPosArr.splice(0,this.checkPosArr.length),this.num=1,this.getPictrue(),this.$nextTick(function(){e.setSize=e.resetSize(e),e.$parent.$emit("ready",e)})},canvasClick:function(e){var t=this;this.checkPosArr.push(this.getMousePos(this.$refs.canvas,e)),this.num==this.checkNum&&(this.num=this.createPoint(this.getMousePos(this.$refs.canvas,e)),this.checkPosArr=this.pointTransfrom(this.checkPosArr,this.setSize),setTimeout(function(){var e=t.secretKey?f(t.backToken+"---"+p()(t.checkPosArr),t.secretKey):t.backToken+"---"+p()(t.checkPosArr);_({captchaType:t.captchaType,pointJson:t.secretKey?f(p()(t.checkPosArr),t.secretKey):p()(t.checkPosArr),token:t.backToken}).then(function(i){"0000"==i.repCode?(t.barAreaColor="#4cae4c",t.barAreaBorderColor="#5cb85c",t.text="验证成功",t.bindingClick=!1,"pop"==t.mode&&setTimeout(function(){t.$parent.clickShow=!1,t.refresh()},1500),t.$parent.$emit("success",{captchaVerification:e})):(t.$parent.$emit("error",t),t.barAreaColor="#d9534f",t.barAreaBorderColor="#d9534f",t.text="验证失败",setTimeout(function(){t.refresh()},700))})},400)),this.num<this.checkNum&&(this.num=this.createPoint(this.getMousePos(this.$refs.canvas,e)))},getMousePos:function(e,t){return{x:t.offsetX,y:t.offsetY}},createPoint:function(e){return this.tempPoints.push($()({},e)),++this.num},refresh:function(){this.tempPoints.splice(0,this.tempPoints.length),this.barAreaColor="#000",this.barAreaBorderColor="#ddd",this.bindingClick=!0,this.fontPos.splice(0,this.fontPos.length),this.checkPosArr.splice(0,this.checkPosArr.length),this.num=1,this.getPictrue(),this.text="验证失败",this.showRefresh=!0},getPictrue:function(){var e=this;S({captchaType:this.captchaType}).then(function(t){"0000"==t.repCode?(e.pointBackImgBase=t.repData.originalImageBase64,e.backToken=t.repData.token,e.secretKey=t.repData.secretKey,e.poinTextList=t.repData.wordList,e.text="请依次点击【"+e.poinTextList.join(",")+"】"):e.text=t.repMsg})},pointTransfrom:function(e,t){return e.map(function(e){return{x:Math.round(310*e.x/parseInt(t.imgWidth)),y:Math.round(155*e.y/parseInt(t.imgHeight))}})}},watch:{type:{immediate:!0,handler:function(){this.init()}}},mounted:function(){this.$el.onselectstart=function(){return!1}}},W=Object(T.a)(A,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{position:"relative"}},[i("div",{staticClass:"verify-img-out"},[i("div",{staticClass:"verify-img-panel",style:{width:e.setSize.imgWidth,height:e.setSize.imgHeight,"background-size":e.setSize.imgWidth+" "+e.setSize.imgHeight,"margin-bottom":e.vSpace+"px"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.showRefresh,expression:"showRefresh"}],staticClass:"verify-refresh",staticStyle:{"z-index":"3"},on:{click:e.refresh}},[i("i",{staticClass:"iconfont icon-refresh"})]),e._v(" "),i("img",{ref:"canvas",staticStyle:{width:"100%",height:"100%",display:"block"},attrs:{src:"data:image/png;base64,"+e.pointBackImgBase,alt:""},on:{click:function(t){e.bindingClick&&e.canvasClick(t)}}}),e._v(" "),e._l(e.tempPoints,function(t,s){return i("div",{key:s,staticClass:"point-area",style:{"background-color":"#1abd6c",color:"#fff","z-index":9999,width:"20px",height:"20px","text-align":"center","line-height":"20px","border-radius":"50%",position:"absolute",top:parseInt(t.y-10)+"px",left:parseInt(t.x-10)+"px"}},[e._v("\n                "+e._s(s+1)+"\n            ")])})],2)]),e._v(" "),i("div",{staticClass:"verify-bar-area",style:{width:e.setSize.imgWidth,color:this.barAreaColor,"border-color":this.barAreaBorderColor,"line-height":this.barSize.height}},[i("span",{staticClass:"verify-msg"},[e._v(e._s(e.text))])])])},[],!1,null,null,null);W.options.__file="VerifyPoints.vue";var L=W.exports,I={name:"Vue2Verify",props:{locale:{require:!1,type:String,default:function(){if(navigator.language)var e=navigator.language;else e=navigator.browserLanguage;return e}},captchaType:{type:String,required:!0},figure:{type:Number},arith:{type:Number},mode:{type:String,default:"pop"},vSpace:{type:Number},explain:{type:String},imgSize:{type:Object,default:function(){return{width:"310px",height:"155px"}}},blockSize:{type:Object},barSize:{type:Object}},data:function(){return{clickShow:!1,verifyType:void 0,componentType:void 0}},methods:{i18n:function(e){if(this.$t)return this.$t(e);var t=this.$options.i18n.messages[this.locale]||this.$options.i18n.messages["en-US"];return t[e]},refresh:function(){this.instance.refresh&&this.instance.refresh()},closeBox:function(){this.clickShow=!1,this.refresh()},show:function(){"pop"==this.mode&&(this.clickShow=!0)}},computed:{instance:function(){return this.$refs.instance||{}},showBox:function(){return"pop"!=this.mode||this.clickShow}},watch:{captchaType:{immediate:!0,handler:function(e){switch(e.toString()){case"blockPuzzle":this.verifyType="2",this.componentType="VerifySlide";break;case"clickWord":this.verifyType="",this.componentType="VerifyPoints"}}}},components:{VerifySlide:B,VerifyPoints:L}},O=(i("q8np"),Object(T.a)(I,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:e.showBox,expression:"showBox"}],class:"pop"==e.mode?"mask":""},[i("div",{class:"pop"==e.mode?"verifybox":"",style:{"max-width":parseInt(e.imgSize.width)+30+"px"}},["pop"==e.mode?i("div",{staticClass:"verifybox-top"},[e._v("\n            请完成安全验证\n            "),i("span",{staticClass:"verifybox-close",on:{click:e.closeBox}},[i("i",{staticClass:"iconfont icon-close"})])]):e._e(),e._v(" "),i("div",{staticClass:"verifybox-bottom",style:{padding:"pop"==e.mode?"15px":"0"}},[e.componentType?i(e.componentType,{ref:"instance",tag:"components",attrs:{captchaType:e.captchaType,type:e.verifyType,figure:e.figure,arith:e.arith,mode:e.mode,vSpace:e.vSpace,explain:e.explain,imgSize:e.imgSize,blockSize:e.blockSize,barSize:e.barSize}}):e._e()],1)])])},[],!1,null,null,null));O.options.__file="Verify.vue";var j=O.exports,F=i("p46w"),N=i.n(F),E=i("7Qib"),V=i("dVUk"),M=i("sxct"),D=i("X4fA"),R={name:"Login",components:{Verify:j},data:function(){return{activeTop:"-50%",rememberPsw:!1,loginForm:{loginName:"",password:"",verifyCode:""},loginRules:{loginName:[{required:!0,message:"用户名必填",trigger:"blur"}],password:[{required:!0,message:"用户密码必填",trigger:"blur"}]},passwordType:"password",capsTooltip:!1,loading:!1,redirect:void 0,otherQuery:{},needCaptcha:!1,centerDialogVisible:!1}},watch:{$route:{handler:function(e){var t=e.query;t&&(this.redirect=t.redirect,this.otherQuery=this.getOtherQuery(t))},immediate:!0}},mounted:function(){this.handleLoginFocus()},methods:{handleLoginFocus:function(){""===this.loginForm.loginName?this.$refs.loginName.focus():""===this.loginForm.password&&this.$refs.password.focus()},getPsw:function(){var e=N.a.get("u_"+this.loginForm.loginName);this.loginForm.password=e&&Object(E.a)(e)},setTop:function(e){this.activeTop=e},checkCapslock:function(e){var t=e.key;this.capsTooltip=t&&1===t.length&&t>="A"&&t<="Z"},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick(function(){e.$refs.password.focus()})},useVerify:function(){var e=this;this.$refs.loginForm.validate(function(t){if(!t)return!1;e.$refs.verify.show()})},verifylogin:function(e){this.loginForm.verifyCode=e.captchaVerification,this.loginForm.verifyCode&&this.loginApi()},handleLogin:function(){var e=this;this.$refs.loginForm.validate(function(t){if(!t)return!1;e.loading=!0,e.needCaptcha?e.useVerify():e.loginApi()})},loginApi:function(){var e=this;return h()(a.a.mark(function t(){var i,s,o,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i={loginName:e.loginForm.loginName,password:Object(M.a)(e.loginForm.password),verifyCode:""},t.next=3,Object(V.a)(i);case 3:if(s=t.sent,o=s.code,r=s.data,e.loading=!1,"200"==o){t.next=9;break}return t.abrupt("return");case 9:Object(D.j)(r.token),Object(D.h)(r),e.rememberPsw&&N.a.set("u_"+e.loginForm.loginName,Object(E.b)(e.loginForm.password),{expires:15}),r&&r.captcha?e.needCaptcha=!0:(e.needCaptcha=!1,e.$router.push({path:e.redirect||"/index",query:e.otherQuery}));case 13:case"end":return t.stop()}},t,e)}))()},getOtherQuery:function(e){return r()(e).reduce(function(t,i){return"redirect"!==i&&(t[i]=e[i]),t},{})}}},H=(i("Ruor"),Object(T.a)(R,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login_container"},[s("div",{staticClass:"login_title"},[e._m(0),e._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"item",on:{click:function(t){e.centerDialogVisible=!0}}},[e._v("说明")]),e._v(" "),e._m(1),e._v(" "),e._m(2)])]),e._v(" "),s("div",{staticClass:"login_contant"},[s("img",{staticClass:"login_img",attrs:{src:i("VfwX"),alt:"image"}}),e._v(" "),s("el-form",{ref:"loginForm",staticClass:"login_form",attrs:{model:e.loginForm,rules:e.loginRules,autocomplete:"on","label-position":"left"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}}},[s("div",{staticClass:"title_container"},[s("h3",{staticClass:"title"},[e._v("\n          HELLO,\n          "),s("br"),e._v(" "),s("p",{staticClass:"title_name"},[e._v("在线大屏")])])]),e._v(" "),s("div",{staticClass:"form_fields"},[s("i",{style:{top:e.activeTop+"%"}}),e._v(" "),s("b"),e._v(" "),s("div",[s("p",[e._v("用户名")]),e._v(" "),s("el-form-item",{attrs:{prop:"loginName"}},[s("el-input",{ref:"loginName",attrs:{placeholder:"用户名",name:"loginName",type:"text",tabindex:"1",autocomplete:"on"},on:{focus:function(t){return e.setTop("0")},change:e.getPsw},model:{value:e.loginForm.loginName,callback:function(t){e.$set(e.loginForm,"loginName",t)},expression:"loginForm.loginName"}})],1)],1),e._v(" "),s("div",[s("p",[e._v("密码")]),e._v(" "),s("input",{staticClass:"take",attrs:{name:"password",type:"password",autocomplete:"off"}}),e._v(" "),s("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(t){e.capsTooltip=t},expression:"capsTooltip"}},[s("el-form-item",{attrs:{prop:"password"}},[s("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"用户密码",name:"password",tabindex:"2",autocomplete:"on"},on:{blur:function(t){e.capsTooltip=!1},focus:function(t){return e.setTop("50")}},nativeOn:{keyup:function(t){return e.checkCapslock(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),e._v(" "),s("span",{staticClass:"show_pwd",on:{click:e.showPwd}},[s("i",{staticClass:"el-icon-view"})])],1)],1)],1)]),e._v(" "),s("div",{staticClass:"control"},[s("div",{staticClass:"remember"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.rememberPsw,expression:"rememberPsw"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.rememberPsw)?e._i(e.rememberPsw,null)>-1:e.rememberPsw},on:{change:function(t){var i=e.rememberPsw,s=t.target,o=!!s.checked;if(Array.isArray(i)){var r=e._i(i,null);s.checked?r<0&&(e.rememberPsw=i.concat([null])):r>-1&&(e.rememberPsw=i.slice(0,r).concat(i.slice(r+1)))}else e.rememberPsw=o}}}),e._v(" "),s("p",[e._v("记住密码")])])]),e._v(" "),s("el-button",{staticClass:"login_btn",attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("登录")])],1)],1),e._v(" "),e.needCaptcha?s("Verify",{ref:"verify",attrs:{"captcha-type":"blockPuzzle","img-size":{width:"400px",height:"200px"}},on:{success:e.verifylogin}}):e._e(),e._v(" "),s("el-dialog",{attrs:{title:"说明",visible:e.centerDialogVisible,width:"34%",center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[s("div",{staticStyle:{"font-size":"30px","line-height":"50px","margin-bottom":"50px"}},[e._v("\n      AJ-Report由"),s("a",{staticStyle:{"text-decoration":"underline"},attrs:{href:"http://www.anji-plus.com/",target:"_blank"}},[s("b",[e._v("安吉加加信息技术有限公司")])]),e._v("遵循 "),s("a",{staticStyle:{"word-wrap":"break-word"},attrs:{href:"http://www.apache.org/licenses/LICENSE-2.0.html",target:"_blank"}},[s("strong",{staticStyle:{color:"orangered"}},[e._v("Apache2.0开源协议")])]),e._v("在"),s("a",{staticStyle:{"text-decoration":"underline","word-wrap":"break-word"},attrs:{href:"https://gitee.com/explore",target:"_blank"}},[s("b",[e._v("Gitee平台")])]),e._v("进行开源。\n    ")]),e._v(" "),s("div",{staticStyle:{"font-size":"30px","line-height":"50px"}},[s("strong",{staticStyle:{color:"orangered"}},[e._v("个人/商业使用须遵循Apache2.0开源协议。")]),e._v(" "),s("strong",{staticStyle:{color:"orangered"}},[e._v("禁止将AJ-Report产品用于违法违规业务。")])]),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.centerDialogVisible=!1}}},[e._v("确 定")])],1)])],1)},s,!1,null,null,null));H.options.__file="login.vue";t.default=H.exports},"7U/o":function(e,t,i){},MXwD:function(e,t,i){},Ruor:function(e,t,i){"use strict";var s=i("7U/o");i.n(s).a},VfwX:function(e,t,i){e.exports=i.p+"static/img/login.561e089.jpg"},q8np:function(e,t,i){"use strict";var s=i("MXwD");i.n(s).a}}]);