(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2ee5"],{CJ5O:function(e,t,a){"use strict";var n=a("14Xm"),i=a.n(n),r=a("D3Ub"),o=a.n(r),s=a("sm2R"),l={name:"GetDictionary",props:{dictKey:String,updataDict:String,value:String},data:function(){return{dictionary:"",dictionaryOptions:[]}},watch:{dictKey:{immediate:!0,handler:function(){this.getSystem()}},value:{handler:function(e){this.dictionary=e},deep:!0}},created:function(){this.getSystem()},mounted:function(){this.dictionary=this.value},methods:{getSystem:function(){var e=this;return o()(i.a.mark(function t(){var a,n,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)(e.dictKey);case 2:if(a=t.sent,n=a.code,r=a.data,"200"==n){t.next=7;break}return t.abrupt("return");case 7:e.dictionaryOptions=r;case 8:case"end":return t.stop()}},t,e)}))()},selectChange:function(e){this.$emit("input",e),this.$emit("change",e)}}},c=(a("hMdP"),a("KHd+")),u=Object(c.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-select",{attrs:{placeholder:"请选择",clearable:"",size:"mini"},on:{change:e.selectChange},model:{value:e.dictionary,callback:function(t){e.dictionary=t},expression:"dictionary"}},e._l(e.dictionaryOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.text,value:e.id}})}),1)},[],!1,null,"20b33c8e",null);u.options.__file="index.vue";t.a=u.exports},Gxhb:function(e,t,a){},HDHf:function(e,t,a){"use strict";a.d(t,"c",function(){return i}),a.d(t,"a",function(){return r}),a.d(t,"d",function(){return o}),a.d(t,"f",function(){return s}),a.d(t,"i",function(){return l}),a.d(t,"h",function(){return c}),a.d(t,"g",function(){return u}),a.d(t,"b",function(){return d}),a.d(t,"e",function(){return m});var n=a("t3Un");function i(e){return Object(n.a)({url:"/dataSet/detailBysetId/"+e.id,method:"get"})}function r(e){return Object(n.a)({url:"/dataSet",method:"post",data:e})}function o(e){return Object(n.a)({url:"/dataSet",method:"put",data:e})}function s(e){return Object(n.a)({url:"/dataSource/queryAllDataSource",method:"get",data:e})}function l(e){return Object(n.a)({url:"/dataSetParam/verification",method:"post",data:e})}function c(e){return Object(n.a)({url:"/dataSet/testTransform",method:"post",data:e})}function u(e){return Object(n.a)({url:"/report/pageList",method:"get",params:e})}function d(e){return Object(n.a)({url:"/reportExcel",method:"post",data:e})}function m(e){return Object(n.a)({url:"/reportExcel",method:"put",data:e})}},HGDv:function(e,t,a){"use strict";var n=a("Gxhb");a.n(n).a},Yfch:function(e,t,a){"use strict";function n(e,t,a){""==t||void 0==t||null==t?a():/^[_a-zA-Z0-9]+$/.test(t)?a():a(new Error("英文字母、数字或下划线"))}a.d(t,"a",function(){return n})},Zzv2:function(e,t,a){"use strict";a.r(t);var n=a("t3Un");function i(e){return Object(n.a)({url:"dataSet/pageList",method:"GET",params:e})}function r(e){return Object(n.a)({url:"dataSet",method:"post",data:e})}function o(e){return Object(n.a)({url:"dataSet/delete/batch",method:"post",data:e})}function s(e){return Object(n.a)({url:"dataSet",method:"put",data:e})}function l(e){return Object(n.a)({url:"dataSet/"+e.id,method:"get",params:{accessKey:e.accessKey}})}var c=a("YEIV"),u=a.n(c),d=a("P2sY"),m=a.n(d),p=a("gDS+"),f=a.n(p),g=a("14Xm"),b=a.n(g),h=a("D3Ub"),v=a.n(h),y=a("HDHf"),D=a("CJ5O"),S=a("j5TT"),x=(a("/9rB"),a("+dQi"),a("p77/"),a("qNmG"),a("RaMD")),C=a("jqkw"),T=a("m1cH"),w=a.n(T),k=a("jWXv"),_=a.n(k),R=a("rfXi"),E=a.n(R),F=["SELECT","INSERT","DELETE","UPDATE","CREATE TABLE","DROP TABLE","ALTER TABLE","CREATE VIEW","DROP VIEW","CREATE INDEX","DROP INDEX","CREATE PROCEDURE","DROP PROCEDURE","CREATE TRIGGER","DROP TRIGGER","CREATE SCHEMA","DROP SCHEMA","CREATE DOMAIN","ALTER DOMAIN","DROP DOMAIN","GRANT","DENY","REVOKE","COMMIT","ROLLBACK","SET TRANSACTION","DECLARE","EXPLAN","OPEN","FETCH","CLOSE","PREPARE","EXECUTE","DESCRIBE","FROM","ORDER BY"];var O=function(e){return{provideCompletionItems:function(t,a){return{suggestions:function(t,a){var n=t.getValue(),i=(a=a.replace(/[\*\[\]@\$\(\)]/g,"").replace(/(\s+|\.)/g," ")).split(/[\s;]/),r=i[i.length-1],o=r.length,s=new RegExp("([^\\w]|^)"+r+"\\w*","gim"),l=n.match(s),c=l?l.map(function(e){var t=new RegExp(r,"gim"),a=e.search(t);return e.substr(a)}):[];return E()(new _.a([].concat(F,w()(c),w()(e(t))))).sort().filter(function(e){var t=new RegExp(e.substr(0,o),"gim");return!(l&&1===l.length&&e===r||1===e.length)&&r.match(t)}).map(function(e){return{label:e,kind:F.indexOf(e)>-1?C.languages.CompletionItemKind.Keyword:C.languages.CompletionItemKind.Text,documentation:e,insertText:e}})}(t,t.getValueInRange({startLineNumber:a.lineNumber,startColumn:1,endLineNumber:a.lineNumber,endColumn:a.column}))}}}};var $=function(e){return{provideCompletionItems:function(t,a){return{suggestions:function(t,a){var n=t.getValue(),i=(a=a.replace(/[\*\[\]@\$\(\)]/g,"").replace(/(\s+|\.)/g," ")).split(/[\s;]/),r=i[i.length-1],o=r.length,s=new RegExp("([^\\w]|^)"+r+"\\w*","gim"),l=n.match(s);return E()(new _.a([].concat(w()(e(t))))).sort().filter(function(e){var t=new RegExp(e.substr(0,o),"gim");return!(l&&1===l.length&&e===r||1===e.length)&&r.match(t)}).map(function(e){return{label:e,kind:C.languages.CompletionItemKind.Text,documentation:e,insertText:e}})}(t,t.getValueInRange({startLineNumber:a.lineNumber,startColumn:1,endLineNumber:a.lineNumber,endColumn:a.column}))}}}};var N=function(e){e.languages.register({id:"log"}),e.languages.setMonarchTokensProvider("log",{tokenizer:{root:[[/(^[=a-zA-Z].*|\d\s.*)/,"log-normal"],[/\sERROR\s.*/,"log-error"],[/\sWARN\s.*/,"log-warn"],[/\sINFO\s.*/,"log-info"],[/^([0-9]{4}||[0-9]{2})-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}(.[0-9]{3})?/,"log-date"],[/^[0-9]{2}\/[0-9]{2}\/[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}(.[0-9]{3})?/,"log-date"],[/(^\*\*Waiting queue:.*)/,"log-info"],[/(^\*\*result tips:.*)/,"log-info"]]}}),e.editor.defineTheme("log",{base:"vs",inherit:!0,rules:[{token:"log-info",foreground:"4b71ca"},{token:"log-error",foreground:"ff0000",fontStyle:"bold"},{token:"log-warn",foreground:"FFA500"},{token:"log-date",foreground:"008800"},{token:"log-normal",foreground:"808080"}],colors:{"editor.lineHighlightBackground":"#ffffff","editorGutter.background":"#f7f7f7"}})},j={},L=function(e){var t=e.id.substring(6);return j[t]&&j[t].hints||[]};C.languages.registerCompletionItemProvider("sql",O(L)),C.languages.registerCompletionItemProvider("javascript",$(L)),N(C);var V={props:{options:{type:Object,default:function(){return{}}},value:{type:String,required:!1},language:{type:String},hints:{type:Array,default:function(){return[]}}},name:"MonacoEditor",data:function(){return{editorInstance:null,defaultOptions:{theme:"vs-dark",fontSize:14}}},watch:{value:function(){this.value!==this.editorInstance.getValue()&&this.editorInstance.setValue(this.value)}},mounted:function(){this.initEditor(),j[this.editorInstance._id]=this,window.addEventListener("resize",this.layout)},destroyed:function(){this.editorInstance.dispose(),j[this.editorInstance._id]=null,window.removeEventListener("resize",this.layout)},methods:{layout:function(){this.editorInstance.layout()},undo:function(){this.editorInstance.trigger("anyString","undo"),this.onValueChange()},redo:function(){this.editorInstance.trigger("anyString","redo"),this.onValueChange()},getOptions:function(){var e={value:this.value};return void 0!==this.language&&(e.language=this.language),m()({},this.defaultOptions,this.options,e)},onValueChange:function(){this.$emit("input",this.editorInstance.getValue()),this.$emit("change",this.editorInstance.getValue())},initEditor:function(){var e=this;this.MonacoEnvironment={getWorkerUrl:function(){return"./editor.worker.bundle.js"}},this.editorInstance=C.editor.create(this.$refs.editor,this.getOptions()),this.editorInstance.onContextMenu(function(t){e.$emit("contextmenu",t)}),this.editorInstance.onDidChangeModelContent(function(){e.onValueChange()}),this.editorInstance.addCommand(C.KeyMod.CtrlCmd|C.KeyCode.KEY_S,function(){e.$emit("save",e.editorInstance.getValue())})}}},I=(a("z5hZ"),a("KHd+")),P=Object(I.a)(V,function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"editor",staticClass:"main"})},[],!1,null,"6f01286f",null);P.options.__file="MonacoEditor.vue";var A=P.exports,q=a("Yfch"),M={name:"Support",components:{Dictionary:D.a,codemirror:S.codemirror,vueJsonEditor:x.a,MonacoEditor:A},props:{visib:{required:!0,type:Boolean,default:!1},dataSet:{required:!1,type:Object,default:function(){return""}}},data:function(){return{data:[],listLoading:!0,permission:{add:["admin","alipayConfig:add"],edit:["admin","alipayConfig:edit"],del:["admin","datasource:del"]},code:"",optionsSql:{mode:"text/x-sql",tabSize:2,lineNumbers:!0,line:!0,styleActiveLine:!0,hintOptions:{completeSingle:!0}},optionsJavascript:{mode:"text/javascript",tabSize:2,lineNumbers:!0,line:!0,styleActiveLine:!0,hintOptions:{completeSingle:!0}},selectedList:[],clickType:"",formData:{},dialogFormVisible:!1,dialogFormVisibleTitle:"",dialogPermissionVisible:!1,dialogSwitchVisible:!1,jsScriptVisible:!1,permissionTextarea:"",isItemFilterType:"",itemFilterList:[{transformType:"js",transformScript:""}],transformScript:"function dataTransform(data){\n\t//自定义脚本内容\n\treturn data;\n}",itemFilterScriptId:"",title:"自定义高级规则",totalCount:0,totalPage:0,params:{pageNumber:1,pageSize:10,helpTitle:"",enabled:null,helpCategory:"",order:"DESC",sort:"update_time"},formRules:{setName:[{required:!0,message:"数据集名称必填",trigger:"blur"}],setCode:[{required:!0,message:"数据集编码必填",trigger:"blur"},{validator:q.a,trigger:"blur"}],sourceCode:[{required:!0,message:"数据源必选",trigger:"change"}]},sourceList:[],validationRules:"",tabsActiveName:"first",cols:[],tableData:[{paramName:"",paramDesc:"",paramType:"",sampleItem:"",mandatory:!0,requiredFlag:1,validationRules:'function verification(data){\n\t//自定义脚本内容\n\t//可返回true/false单纯校验键入的data正确性\n\t//可返回文本，实时替换,比如当前时间等\n\t//return "2099-01-01 00:00:00";\n\treturn true;\n}'}],isRowData:{},tableData2:[],dialogTitle:"脚本填写",isShowPagination:!1,updataDisabled:!1,dialogCaseResult:!1,caseResultTitle:"",caseResultContent:null,testMassageCode:null,query:{setName:"",setCode:""},setType:"",httpForm:{apiUrl:"",method:"GET",header:'{"Content-Type":"application/json;charset=UTF-8"}',body:""},dictionaryOptions:[],list:null,basicDialog:!1,dialogForm:{sourceName:"",sourceCode:"",sourceType:"",sourceDesc:"",sourceConfig:""},dataLink:[],rules:{sourceType:[{required:!0,message:"数据集名称必选",trigger:"change"}],sourceCode:[{required:!0,message:"数据集编码必填",trigger:"blur"}],sourceName:[{required:!0,message:"数据源名称必选",trigger:"blur"}]},value:"",testReplyCode:null}},methods:{addOrEditDataSet:function(e,t){var a=this;return v()(b.a.mark(function n(){var i,r,o;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a.setType=t,"http"==t&&e.dynSentence&&(a.httpForm=JSON.parse(e.dynSentence)),n.next=4,Object(y.f)();case 4:if(i=n.sent,r=i.code,o=i.data,"200"==r){n.next=9;break}return n.abrupt("return");case 9:a.sourceList=o,a.dialogFormVisible=!0,a.tabsActiveName="first",a.testMassageCode=null,e.id?(a.updataDisabled=!0,a.dialogFormVisibleTitle="编辑数据集",Object(y.c)(e).then(function(e){if(a.formData=e.data,null!=e.data.dataSetParamDtoList||e.data.dataSetParamDtoList.length>0){a.tableData=e.data.dataSetParamDtoList;var t=0;a.tableData.find(function(e,n){"pageNumber"!==e.paramName&&"pageSize"!==e.paramName||t++,1==e.requiredFlag?a.tableData[n].mandatory=!0:a.tableData[n].mandatory=!1}),a.isShowPagination=2===t}else a.tableData=[],a.isShowPagination=!1;null!==e.data.dataSetTransformDtoList?a.itemFilterList=e.data.dataSetTransformDtoList:a.itemFilterList=[],a.itemFilterList.forEach(function(e,t){if("dict"==e.transformType){var n=JSON.parse(e.transformScript),i=[];for(var r in n){var o=[];for(var s in n[r])o.push({name:s,value:n[r][s]});i.push({name:r,children:o})}a.tableData2=i}})})):(a.dialogFormVisibleTitle="新增数据集",a.updataDisabled=!1,a.formData={setName:"",setCode:"",setDesc:"",sourceCode:"",dynSentence:""},a.tableData=[],a.itemFilterList=[],a.isShowPagination=!1);case 14:case"end":return n.stop()}},n,a)}))()},changeForm:function(e){e||(this.dialogSwitchVisible=!1,this.jsScriptVisible=!1)},closeDialog:function(){this.$emit("handleClose")},onJsonChange:function(e){},onJsonSave:function(e){},handleClose:function(e){this.dialogFormVisible=!1},isShowCaseResult:function(e){this.dialogCaseResult=!0,this.caseResultTitle=e.setName,this.caseResultContent=JSON.parse(e.caseResult)},handleClickTabs:function(e,t){var a=this;return v()(b.a.mark(function t(){var n,i,r,o;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("http"==a.setType&&(console.log("http数据集"+a.httpForm),a.formData.dynSentence=f()(a.httpForm)),"third"!=e.paneName){t.next=12;break}return n={sourceCode:a.formData.sourceCode,dynSentence:a.formData.dynSentence,dataSetParamDtoList:a.tableData,dataSetTransformDtoList:a.itemFilterList,setType:a.setType},t.next=5,Object(y.h)(n);case 5:if(i=t.sent,r=i.code,o=i.data,"200"==r){t.next=10;break}return t.abrupt("return");case 10:a.cols=o.data,a.testMassageCode=r;case 12:case"end":return t.stop()}},t,a)}))()},Mandatory:function(e){this.tableData[e].mandatory?this.tableData[e].requiredFlag=1:this.tableData[e].requiredFlag=0},changePagination:function(){var e=this;this.isShowPagination?this.tableData.push({paramName:"pageNumber",paramDesc:"当前页",paramType:"int",sampleItem:"1",mandatory:!0,requiredFlag:1,validationRules:"function verification(data){\n\t//自定义脚本内容\n\treturn true;\n}"},{paramName:"pageSize",paramDesc:"条数",paramType:"int",sampleItem:"10",mandatory:!0,requiredFlag:1,validationRules:"function verification(data){\n\t//自定义脚本内容\n\treturn true;\n}"}):this.tableData.forEach(function(t,a){"pageSize"!=t.paramName&&"pageNumber"!=t.paramName||e.tableData.splice(a,2)})},filterScriptBtn:function(e){var t=this;return v()(b.a.mark(function a(){var n,i;return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:console.log(e),t.isItemFilterType=e,t.dialogSwitchVisible=!0,t.jsScriptVisible=!0,"js"==e.transformType?(t.itemFilterScriptId=e.itemFilterSort,n="function dataTransform(data){\n\t//自定义脚本内容\n\treturn data;\n}",t.transformScript=e.transformScript?e.transformScript:n):"dict"==e.transformType||"javaBean"==e.transformType&&(t.itemFilterScriptId=e.itemFilterSort,i="package com;\n\nimport com.alibaba.fastjson.JSONObject;\nimport com.anjiplus.template.gaea.business.modules.datasettransform.service.IGroovyHandler;\n\nimport java.util.List;\n\n/**\n * 建议在idea写好复制整个类到此处，位置report-core/src/test/java/com/DemoGroovyHandler.java\n */\npublic class DemoGroovyHandler implements IGroovyHandler {\n\n    @Override\n    public List<JSONObject> transform(List<JSONObject> data) {\n\n        return data;\n    }\n}",t.transformScript=e.transformScript?e.transformScript:i);case 5:case"end":return a.stop()}},a,t)}))()},filterScriptConfirm:function(){var e=this,t=this.toObject(this.tableData2);this.itemFilterList.forEach(function(a,n){"dict"==a.transformType?a.transformScript=f()(t):a.transformScript=e.transformScript}),this.dialogSwitchVisible=!1},addFilter:function(){var e={};this.tableData2=[],e=0==this.itemFilterList.length?{transformType:"",transformScript:"",itemFilterSort:1}:{transformType:"",transformScript:"",itemFilterSort:this.itemFilterList.length+1},this.itemFilterList.push(e)},reduceFilter:function(e){if(this.itemFilterList.length>0){var t=this.itemFilterList.indexOf(e);t>-1&&this.itemFilterList.splice(t,1)}},permissionClick:function(e,t){if(this.title="自定义高级规则",""!=this.isRowData.sampleItem){this.isRowData=e;this.validationRules=e.validationRules?e.validationRules:'function verification(data){\n\t//自定义脚本内容\n\t//可返回true/false单纯校验键入的data正确性\n\t//可返回文本，实时替换,比如当前时间等\n\t//return "2099-01-01 00:00:00";\n\treturn true;\n}'}this.dialogPermissionVisible=!0},dialogValidationRules:function(){this.isRowData.validationRules=this.validationRules,this.dialogPermissionVisible=!1},addAllDict:function(){this.tableData2.push({name:"",children:[{name:"",value:""}]})},addDict:function(e,t){t.push({name:"",value:""})},delAllDict:function(e,t){t.splice(e,1)},delDict:function(e,t){0!=e?t.splice(e,1):this.$message.error("至少保留一条")},changeSource:function(){},testResultset:function(){var e=this;return v()(b.a.mark(function t(){var a,n,i,r;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.isRowData.validationRules=e.validationRules,console.log(e.isRowData,"12345678"),t.next=4,Object(y.i)(e.isRowData);case 4:a=t.sent,n=a.code,i=a.message,r=a.data,"200"==n?r?e.$message.success("返回结果："+r):e.$message.warning("当前示例值校验不通过"):e.$message.error(i);case 9:case"end":return t.stop()}},t,e)}))()},cutOutRow:function(e,t){t.splice(e,1)},addRow:function(e,t){this.tableData.push({paramName:"",paramDesc:"",paramType:"",sampleItem:"",mandatory:!0,requiredFlag:1,validationRules:'function verification(data){\n\t//自定义脚本内容\n\t//可返回true/false单纯校验键入的data正确性\n\t//可返回文本，实时替换,比如当前时间等\n\t//return "2099-01-01 00:00:00";\n\treturn true;\n}'})},submit:function(e){var t=this;return v()(b.a.mark(function a(){return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:"http"==t.setType&&(console.log("http数据集"+t.httpForm),t.formData.dynSentence=f()(t.httpForm)),t.formData.setType=t.setType,t.$refs[e].validate(function(){var e=v()(b.a.mark(function e(a,n){var i,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=30;break}if(200!=t.testMassageCode){e.next=26;break}if(t.formData.dataSetParamDtoList=t.tableData,t.formData.dataSetTransformDtoList=t.itemFilterList,t.formData.caseResult=f()(t.cols),"新增数据集"!==t.dialogFormVisibleTitle){e.next=16;break}return e.next=8,Object(y.a)(t.formData);case 8:if(i=e.sent,"200"==i.code){e.next=12;break}return e.abrupt("return");case 12:t.$emit("refreshList"),t.closeDialog(),e.next=24;break;case 16:return e.next=18,Object(y.d)(t.formData);case 18:if(r=e.sent,"200"==r.code){e.next=22;break}return e.abrupt("return");case 22:t.$emit("refreshList"),t.closeDialog();case 24:e.next=28;break;case 26:return t.$message.error("请先测试预览，操作成功后便可保存！"),e.abrupt("return");case 28:e.next=31;break;case 30:return e.abrupt("return");case 31:case"end":return e.stop()}},e,t)}));return function(t,a){return e.apply(this,arguments)}}());case 3:case"end":return a.stop()}},a,t)}))()},toObject:function(e){var t={},a={};e.forEach(function(e){e.name&&(t[e.name]=e.children)});var n=function(e){var n={};t[e].map(function(e){m()(n,u()({},e.name,e.value))}),a[e]=n};for(var i in t)n(i);return a}}},z=(a("tFU6"),Object(I.a)(M,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{title:e.dialogFormVisibleTitle,visible:e.visib,"close-on-click-modal":!1,"before-close":e.closeDialog,width:"65%"},on:{"update:visible":function(t){e.visib=t}}},[a("el-form",{ref:"form",attrs:{model:e.formData,rules:e.formRules,size:"small","label-width":"130px"}},[a("el-row",{attrs:{gutter:10}},["sql"==this.setType?a("el-col",{attrs:{xs:24,sm:20,md:8,lg:8,xl:8}},[a("el-form-item",{attrs:{label:"数据源",prop:"sourceCode"}},[a("el-select",{staticClass:"organisation",attrs:{size:"mini"},on:{change:e.changeSource},model:{value:e.formData.sourceCode,callback:function(t){e.$set(e.formData,"sourceCode","string"==typeof t?t.trim():t)},expression:"formData.sourceCode"}},e._l(e.sourceList,function(e){return a("el-option",{key:e.sourceName,attrs:{label:e.sourceName,value:e.sourceCode}})}),1)],1)],1):e._e(),e._v(" "),a("el-col",{attrs:{xs:24,sm:20,md:7,lg:7,xl:7}},[a("el-form-item",{attrs:{label:"数据集编码",prop:"setCode"}},[a("el-input",{attrs:{disabled:e.updataDisabled,placeholder:"唯一标识",size:"mini"},model:{value:e.formData.setCode,callback:function(t){e.$set(e.formData,"setCode","string"==typeof t?t.trim():t)},expression:"formData.setCode"}})],1)],1),e._v(" "),a("el-col",{attrs:{xs:24,sm:20,md:7,lg:7,xl:7}},[a("el-form-item",{attrs:{label:"数据集名称",prop:"setName"}},[a("el-input",{attrs:{size:"mini"},model:{value:e.formData.setName,callback:function(t){e.$set(e.formData,"setName","string"==typeof t?t.trim():t)},expression:"formData.setName"}})],1)],1),e._v(" "),a("el-col",{attrs:{xs:24,sm:20,md:22,lg:22,xl:22}},[a("el-form-item",{attrs:{label:"数据集描述"}},[a("el-input",{attrs:{size:"mini"},model:{value:e.formData.setDesc,callback:function(t){e.$set(e.formData,"setDesc","string"==typeof t?t.trim():t)},expression:"formData.setDesc"}})],1)],1)],1),e._v(" "),"sql"==this.setType?a("el-row",{attrs:{gutter:10}},[a("el-col",{staticClass:"code-mirror-form",attrs:{xs:24,sm:20,md:22,lg:22,xl:22}},[a("el-form-item",{attrs:{label:"查询SQL"}},[a("div",{staticClass:"codemirror"},[a("monaco-editor",{staticStyle:{height:"500px"},attrs:{language:"sql"},model:{value:e.formData.dynSentence,callback:function(t){e.$set(e.formData,"dynSentence","string"==typeof t?t.trim():t)},expression:"formData.dynSentence"}})],1)])],1)],1):e._e(),e._v(" "),"http"==this.setType?a("el-row",[a("el-form-item",{attrs:{label:"请求路径"}},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入请求路径..."},model:{value:e.httpForm.apiUrl,callback:function(t){e.$set(e.httpForm,"apiUrl",t)},expression:"httpForm.apiUrl"}},[a("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:e.httpForm.method,callback:function(t){e.$set(e.httpForm,"method",t)},expression:"httpForm.method"}},[a("el-option",{attrs:{label:"GET",value:"GET"}}),e._v(" "),a("el-option",{attrs:{label:"POST",value:"POST"}}),e._v(" "),a("el-option",{attrs:{label:"PUT",value:"PUT"}}),e._v(" "),a("el-option",{attrs:{label:"DELETE",value:"DELETE"}})],1)],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"请求头"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入请求头..."},model:{value:e.httpForm.header,callback:function(t){e.$set(e.httpForm,"header","string"==typeof t?t.trim():t)},expression:"httpForm.header"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"请求体"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入请求体..."},model:{value:e.httpForm.body,callback:function(t){e.$set(e.httpForm,"body","string"==typeof t?t.trim():t)},expression:"httpForm.body"}})],1)],1):e._e(),e._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:24,sm:20,md:22,lg:22,xl:22}},[a("el-form",{staticClass:"demo-ruleForm",attrs:{"label-width":"100px"}},[a("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handleClickTabs},model:{value:e.tabsActiveName,callback:function(t){e.tabsActiveName="string"==typeof t?t.trim():t},expression:"tabsActiveName"}},[a("el-tab-pane",{attrs:{label:"查询参数",name:"first"}},[0==e.tableData.length?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.addRow()}}},[e._v("添加\n                ")]):e._e(),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{align:"center",label:"序号",type:"index","min-width":"80"}}),e._v(" "),a("el-table-column",{attrs:{label:"参数名",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{disabled:"pageSize"==e.tableData[t.$index].paramName||"pageNumber"==e.tableData[t.$index].paramName},model:{value:e.tableData[t.$index].paramName,callback:function(a){e.$set(e.tableData[t.$index],"paramName","string"==typeof a?a.trim():a)},expression:"tableData[scope.$index].paramName"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"描述",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{model:{value:e.tableData[t.$index].paramDesc,callback:function(a){e.$set(e.tableData[t.$index],"paramDesc","string"==typeof a?a.trim():a)},expression:"tableData[scope.$index].paramDesc"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"数据类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{model:{value:e.tableData[t.$index].paramType,callback:function(a){e.$set(e.tableData[t.$index],"paramType","string"==typeof a?a.trim():a)},expression:"tableData[scope.$index].paramType"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"示例值",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{model:{value:e.tableData[t.$index].sampleItem,callback:function(a){e.$set(e.tableData[t.$index],"sampleItem","string"==typeof a?a.trim():a)},expression:"tableData[scope.$index].sampleItem"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"校验",width:"220",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-checkbox",{on:{change:function(a){return e.Mandatory(t.$index)}},model:{value:e.tableData[t.$index].mandatory,callback:function(a){e.$set(e.tableData[t.$index],"mandatory",a)},expression:"tableData[scope.$index].mandatory"}},[e._v("必选\n                      ")]),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(a){return e.permissionClick(t.row,t.$index)}}},[e._v("\n                        高级规则\n                      ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){return a.preventDefault(),e.cutOutRow(t.$index,e.tableData)}}},[e._v("删除\n                      ")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.addRow(t.row)}}},[e._v("追加\n                      ")])]}}])})],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"数据转换",name:"second"}},[[a("div",{staticClass:"filterWrapper"},[a("div",{staticClass:"filterTable"},[e._l(e.itemFilterList,function(t,n){return a("div",{key:n,staticClass:"filterBox"},[a("div",{staticClass:"box"},[a("Dictionary",{attrs:{"updata-dict":t.transformType,"dict-key":"TRANSFORM_TYPE"},on:{change:e.changeForm},model:{value:t.transformType,callback:function(a){e.$set(t,"transformType",a)},expression:"item.transformType"}}),e._v(" "),a("el-button",{staticClass:"reduceFilter",attrs:{type:"text",icon:"el-icon-close"},on:{click:function(a){return e.reduceFilter(t)}}}),e._v(" "),"js"==t.transformType||"dict"==t.transformType||"javaBean"==t.transformType?a("el-button",{staticClass:"editor",attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.filterScriptBtn(t)}}}):e._e()],1),e._v(" "),a("el-button",{staticClass:"font-icon-right",attrs:{type:"text",icon:"el-icon-right"}})],1)}),e._v(" "),a("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogSwitchVisible,"close-on-click-modal":!1,width:"60%","min-height":"400px","append-to-body":""},on:{"update:visible":function(t){e.dialogSwitchVisible=t}}},["js"==e.isItemFilterType.transformType||"javaBean"==e.isItemFilterType.transformType?a("div",[a("div",{staticClass:"codemirror"},[e.jsScriptVisible?a("monaco-editor",{staticStyle:{height:"500px"},attrs:{language:"javascript"},model:{value:e.transformScript,callback:function(t){e.transformScript="string"==typeof t?t.trim():t},expression:"transformScript"}}):e._e()],1)]):a("div",[e._l(e.tableData2,function(t,n){return a("div",{key:n},[a("label",[e._v("字典项名称：")]),e._v(" "),a("el-input",{staticStyle:{width:"25%"},attrs:{size:"small"},model:{value:t.name,callback:function(a){e.$set(t,"name","string"==typeof a?a.trim():a)},expression:"item.name"}}),e._v(" "),a("el-button",{attrs:{type:"danger",size:"small",plain:"",icon:"el-icon-delete"},on:{click:function(t){return e.delAllDict(n,e.tableData2)}}}),e._v(" "),a("el-table",{staticStyle:{width:"80%"},attrs:{data:t.children,border:""}},[a("el-table-column",{attrs:{label:"key",width:"180"},scopedSlots:e._u([{key:"default",fn:function(n){return[a("el-input",{model:{value:t.children[n.$index].name,callback:function(a){e.$set(t.children[n.$index],"name","string"==typeof a?a.trim():a)},expression:"\n                                      item.children[scope.$index].name\n                                    "}})]}}],null,!0)}),e._v(" "),a("el-table-column",{attrs:{label:"值"},scopedSlots:e._u([{key:"default",fn:function(n){return[a("el-input",{model:{value:t.children[n.$index].value,callback:function(a){e.$set(t.children[n.$index],"value","string"==typeof a?a.trim():a)},expression:"\n                                      item.children[scope.$index].value\n                                    "}})]}}],null,!0)}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"150px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(n){return[a("el-button",{attrs:{type:"success",circle:"",plain:"",icon:"el-icon-plus"},on:{click:function(a){return e.addDict(n.$index,t.children)}}}),e._v(" "),a("el-button",{attrs:{type:"danger",circle:"",plain:"",icon:"el-icon-delete"},on:{click:function(a){return e.delDict(n.$index,t.children)}}})]}}],null,!0)})],1)],1)}),e._v(" "),a("el-button",{attrs:{type:"success"},on:{click:function(t){return e.addAllDict()}}},[e._v("新增\n                          ")])],2),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogSwitchVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.filterScriptConfirm}},[e._v("保存")])],1)]),e._v(" "),a("div",{staticClass:"addFilter",attrs:{disabled:"true"},on:{click:e.addFilter}},[a("i",{staticClass:"el-icon-plus"}),a("span",[e._v("新增")])])],2)])]],2),e._v(" "),a("el-tab-pane",{attrs:{label:"测试预览",name:"third"}},[a("div",{staticStyle:{"max-height":"400px",overflow:"auto"}},[a("vue-json-editor",{attrs:{"show-btns":!1,mode:"code",lang:"zh"},on:{"json-change":e.onJsonChange,"json-save":e.onJsonSave},model:{value:e.cols,callback:function(t){e.cols=t},expression:"cols"}})],1)])],1)],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.closeDialog}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submit("form")}}},[e._v("保存")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:e.title,visible:e.dialogPermissionVisible,"close-on-click-modal":!1,width:"60%"},on:{"update:visible":function(t){e.dialogPermissionVisible=t}}},[a("div",{staticClass:"codemirror"},[a("monaco-editor",{staticStyle:{height:"500px"},attrs:{language:"javascript"},model:{value:e.validationRules,callback:function(t){e.validationRules="string"==typeof t?t.trim():t},expression:"validationRules"}})],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"warning"},on:{click:e.testResultset}},[e._v("测试")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.dialogValidationRules}},[e._v("保存")]),e._v(" "),a("el-button",{on:{click:function(t){e.dialogPermissionVisible=!1}}},[e._v("关闭")])],1)])],1)},[],!1,null,"073e74a0",null));z.options.__file="EditDataSet.vue";var B=z.exports,H={name:"Support",components:{vueJsonEditor:x.a},props:{visib:{required:!0,type:Boolean,default:!1}},data:function(){return{dialogCaseResult:!1,caseResultTitle:"",caseResultContent:null}},methods:{dataViewPreview:function(e,t){this.caseResultTitle=e,this.caseResultContent=t},closeDialog:function(){this.$emit("handleClose")},onJsonChange:function(e){},onJsonSave:function(e){}}},J=Object(I.a)(H,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.caseResultTitle,"close-on-click-modal":!1,visible:e.visib,width:"70%","before-close":e.closeDialog},on:{"update:visible":function(t){e.visib=t}}},[a("vue-json-editor",{staticClass:"my-editor",attrs:{"show-btns":!1,mode:"code",lang:"zh"},on:{"json-change":e.onJsonChange,"json-save":e.onJsonSave},model:{value:e.caseResultContent,callback:function(t){e.caseResultContent=t},expression:"caseResultContent"}}),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.closeDialog}},[e._v("关闭")])],1)],1)},[],!1,null,null,null);J.options.__file="DataView.vue";var G={name:"ReportDataSet",components:{EditDataSet:B,DataView:J.exports},data:function(){var e=this;return{dialogVisibleSetDataSet:!1,dataSet:{},dialogCaseResult:!1,crudOption:{title:"数据集",labelWidth:"120px",queryFormFields:[{inputType:"input",label:"数据集编码",field:"setCode"},{inputType:"input",label:"数据集名称",field:"setName"},{inputType:"anji-select",anjiSelectOption:{url:"/dataSource/queryAllDataSource",label:"sourceName",option:"sourceCode",mergeLabel:!0},label:"数据源",field:"sourceCode"},{inputType:"anji-select",anjiSelectOption:{dictCode:"SET_TYPE"},label:"数据集类型",field:"setType"}],tableButtons:[{label:"删除",type:"danger",permission:"resultsetManage:delete",icon:"el-icon-delete",plain:!1,click:function(){return e.$refs.listPage.handleDeleteBatch()}}],rowButtons:[{label:"编辑",permission:"resultsetManage:update",click:function(t){return e.operateDataset("edit",t)}},{label:"数据预览",permission:"resultsetManage:query",click:this.dataView},{label:"删除",permission:"resultsetManage:delete",click:function(t){return e.$refs.listPage.handleDeleteBatch(t)}}],buttons:{rowButtonsWidth:180,query:{api:i,permission:"resultsetManage:query",sort:"update_time",order:"DESC"},queryByPrimarykey:{api:l,permission:"resultsetManage:detail"},add:{api:r,permission:"resultsetManage:insert",isShow:!1},delete:{api:o,permission:"resultsetManage:delete"},edit:{api:s,permission:"resultsetManage:update",isShow:!1}},columns:[{label:"",field:"id",primaryKey:!0,tableHide:!0,editHide:!0},{label:"数据集编码",placeholder:"",field:"setCode",editField:"setCode",inputType:"input",rules:[{min:1,max:50,message:"不超过50个字符",trigger:"blur"}],disabled:!1},{label:"数据集名称",placeholder:"",field:"setName",editField:"setName",inputType:"input",rules:[{min:1,max:100,message:"不超过100个字符",trigger:"blur"}],disabled:!1},{label:"描述",placeholder:"",field:"setDesc",editField:"setDesc",inputType:"input",rules:[{min:1,max:255,message:"不超过255个字符",trigger:"blur"}],disabled:!1},{label:"数据源编码",placeholder:"",field:"sourceCode",editField:"sourceCode",inputType:"input",rules:[{min:1,max:50,message:"不超过50个字符",trigger:"blur"}],disabled:!1},{label:"数据集类型",placeholder:"",field:"setType",editField:"setType",inputType:"input",rules:[{min:1,max:50,message:"不超过50个字符",trigger:"blur"}],disabled:!1},{label:"动态查询sql或者接口中的请求体",placeholder:"",field:"dynSentence",editField:"dynSentence",tableHide:!0,inputType:"input",rules:[{min:1,max:2048,message:"不超过2048个字符",trigger:"blur"}],disabled:!1},{label:"结果案例",placeholder:"",field:"caseResult",tableHide:!0,editField:"caseResult",inputType:"input",rules:[{min:1,max:65535,message:"不超过65535个字符",trigger:"blur"}],disabled:!1},{label:"状态",placeholder:"",field:"enableFlag",fieldTableRowRenderer:function(t){return e.getDictLabelByCode("ENABLE_FLAG",t.enableFlag)},colorStyle:{0:"table-danger",1:"table-success"},editField:"enableFlag",inputType:"input",rules:[],disabled:!1},{label:"删除标记",placeholder:"",field:"deleteFlag",editField:"deleteFlag",tableHide:!0,inputType:"input",rules:[],disabled:!1}]}}},methods:{operateDataset:function(e,t){this.dialogVisibleSetDataSet=!0,t&&t.setType?(this.dataSet=t,e=t.setType):this.dataSet={},this.$refs.EditDataSet.addOrEditDataSet(this.dataSet,e)},refreshList:function(){this.$refs.listPage.handleQueryForm("query")},dataView:function(e){this.dialogCaseResult=!0,this.$refs.DataView.dataViewPreview(e.setName,JSON.parse(e.caseResult))}}},U=(a("HGDv"),Object(I.a)(G,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("anji-crud",{ref:"listPage",attrs:{option:e.crudOption},scopedSlots:e._u([{key:"tableButtons",fn:function(){return[a("el-dropdown",{attrs:{placement:"bottom"},on:{command:e.operateDataset}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"}},[e._v("\n        新增\n        "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"sql"}},[e._v("SQL")]),e._v(" "),a("el-dropdown-item",{attrs:{command:"http"}},[e._v("HTTP")])],1)],1)]},proxy:!0},{key:"pageSection",fn:function(){return[a("EditDataSet",{ref:"EditDataSet",attrs:{dataSet:e.dataSet,visib:e.dialogVisibleSetDataSet},on:{handleClose:function(t){e.dialogVisibleSetDataSet=!1},refreshList:e.refreshList}}),e._v(" "),a("DataView",{ref:"DataView",attrs:{visib:e.dialogCaseResult},on:{handleClose:function(t){e.dialogCaseResult=!1}}})]},proxy:!0}])})},[],!1,null,"ac905c28",null));U.options.__file="index.vue";t.default=U.exports},hMdP:function(e,t,a){"use strict";var n=a("w3V2");a.n(n).a},qDgB:function(e,t,a){},tFU6:function(e,t,a){"use strict";var n=a("qDgB");a.n(n).a},w3V2:function(e,t,a){},y8mT:function(e,t,a){},z5hZ:function(e,t,a){"use strict";var n=a("y8mT");a.n(n).a}}]);