(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-478e"],{Dsbe:function(e,t,i){"use strict";var l=i("IGyf");i.n(l).a},IGyf:function(e,t,i){},lAHl:function(e,t,i){"use strict";i.r(t);var l=i("t3Un");function a(e){return Object(l.a)({url:"/file/pageList",method:"GET",params:e})}function n(e){return Object(l.a)({url:"/file",method:"post",data:e})}function r(e){return Object(l.a)({url:"/file/delete/batch",method:"POST",data:e})}function o(e){return Object(l.a)({url:"/file",method:"put",data:e})}function u(e){return Object(l.a)({url:"/file/"+e.id,method:"get",params:e})}var d=i("X4fA"),s={name:"File",components:{anjiCrud:i("sYqA").default},data:function(){var e=this;return{selectedList:[],uploadUrl:".//file/upload",crudOption:{title:"文件管理",labelWidth:"120px",queryFormFields:[{inputType:"input",label:"文件路径",field:"filePath"}],tableButtons:[{label:"删除",type:"danger",permission:"fileManage:delete",icon:"el-icon-delete",plain:!1,click:function(){return e.$refs.listPage.handleDeleteBatch()}}],rowButtons:[{label:"复制url",click:this.copyUrlPath},{label:"下载",click:this.customButtom},{label:"删除",permission:"fileManage:delete",click:function(t){return e.$refs.listPage.handleDeleteBatch(t)}}],buttons:{query:{api:a,permission:"fileManage:query",sort:"create_time",order:"DESC"},queryByPrimarykey:{api:u,permission:"fileManage:query"},add:{api:n,permission:"fileManage:upload",isShow:!1},delete:{api:r,permission:"fileManage:delete"},edit:{api:o,permission:"fileManage:update",isShow:!1},rowButtonsWidth:150},columns:[{label:"",field:"id",primaryKey:!0,tableHide:!0,editHide:!0},{label:"图片缩略图",field:"urlPath",columnType:"imgPreview",editHide:!0,placeholder:"",disabled:!1},{label:"文件标识",placeholder:"",field:"fileId",editField:"fileId",tableHide:!0,inputType:"input",rules:[{min:1,max:64,message:"不超过64个字符",trigger:"blur"}],disabled:!1},{label:"文件类型",placeholder:"",field:"fileType",editField:"fileType",inputType:"input",rules:[{min:1,max:1024,message:"不超过1024个字符",trigger:"blur"}],disabled:!1},{label:"文件路径",placeholder:"",field:"filePath",editField:"filePath",inputType:"input",rules:[{min:1,max:1024,message:"不超过1024个字符",trigger:"blur"}],disabled:!1},{label:"url路径",placeholder:"",field:"urlPath",editField:"urlPath",inputType:"input",rules:[{min:1,max:1024,message:"不超过1024个字符",trigger:"blur"}],disabled:!1},{label:"内容说明",placeholder:"",field:"fileInstruction",editField:"fileInstruction",inputType:"input",rules:[{min:1,max:1024,message:"不超过1024个字符",trigger:"blur"}],disabled:!1},{label:"创建人",field:"createByView",columnType:"expand",inputType:"input",disabled:!0},{label:"创建时间",field:"createTime",columnType:"expand",inputType:"input",disabled:!0}]}}},computed:{headers:function(){return{Authorization:Object(d.f)()}}},methods:{handleUpload:function(e,t,i){this.$refs.listPage.handleQueryForm(),this.$refs.upload.clearFiles()},handleError:function(){this.$message({message:"上传失败！",type:"error"})},downloadFile:function(e){window.open(e.urlPath)},customButtom:function(e){this.downloadFile(e)},copyUrlPath:function(e){this.copyToClip(e.urlPath),this.$message({message:"已将url路径复制至剪切板！",type:"success"})},copyToClip:function(e,t){var i=document.createElement("input");i.setAttribute("value",e),document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i)}}},p=(i("Dsbe"),i("KHd+")),c=Object(p.a)(s,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("anji-crud",{ref:"listPage",attrs:{option:e.crudOption},scopedSlots:e._u([{key:"tableButtons",fn:function(){return[i("el-upload",{ref:"upload",staticClass:"el-upload",attrs:{action:e.uploadUrl,headers:e.headers,"on-success":e.handleUpload,"on-error":e.handleError,"show-file-list":!1,limit:1}},[i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"fileManage:upload",expression:"'fileManage:upload'"}],attrs:{type:"primary",icon:"el-icon"}},[e._v("文件上传")])],1)]},proxy:!0},{key:"edit",fn:function(t){return[i("el-button",{attrs:{type:"text"},on:{click:function(i){return e.copyUrlPath(t)}}},[e._v("复制url")])]}},{key:"rowButton",fn:function(t){return[i("el-button",{attrs:{type:"text"},on:{click:function(i){return e.customButtom(t)}}},[e._v("下载")])]}}])})},[],!1,null,"01a6cf31",null);c.options.__file="index.vue";t.default=c.exports}}]);