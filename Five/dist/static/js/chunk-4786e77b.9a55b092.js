(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4786e77b"],{"16d8":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:t.id}})},n=[],a=s("3f47"),u=s("208e"),o=s.n(u),l=(s("e5d4"),s("550e"),s("233f"),s("d341")),r=s.n(l),c={minHeight:"200px",previewStyle:"vertical",useCommandShortcut:!1,useDefaultHTMLSanitizer:!1,usageStatistics:!0,hideModeSwitch:!0,toolbarItems:[]},d={name:"MarddownEditor",props:{value:{type:String,default:""},id:{type:String,required:!1,default:function(){return"markdown-editor-"+ +new Date+(1e3*Math.random()).toFixed(0)}},options:{type:Object,default:function(){return c}},mode:{type:String,default:"wysiwyg"},language:{type:String,required:!1,default:"en_US"}},data:function(){return{editor:null}},computed:{editorOptions:function(){var t=o()({},c,this.options);return t.initialEditType=this.mode,t.height=this.height,t.language=this.language,t}},watch:{value:function(t,e){t!==e&&t!==this.editor.getValue()&&this.editor.setValue(t)},language:function(t){this.destroyEditor(),this.initEditor()},height:function(t){this.editor.height(t)},mode:function(t){this.editor.changeMode(t)}},mounted:function(){this.initEditor()},destroyed:function(){this.destroyEditor()},methods:{initEditor:function(){var t=this;this.editor=new r.a(Object(a["a"])({el:document.getElementById(this.id)},this.editorOptions)),this.value&&this.editor.setValue(this.value),this.editor.on("change",function(){t.$emit("input",t.editor.getValue())})},destroyEditor:function(){this.editor&&(this.editor.off("change"),this.editor.remove())},setValue:function(t){this.editor.setValue(t)},getValue:function(){return this.editor.getValue()},setHtml:function(t){this.editor.setHtml(t)},getHtml:function(){return this.editor.getHtml()}}},h=d,m=s("17cc"),p=Object(m["a"])(h,i,n,!1,null,null,null);e["a"]=p.exports},"756d":function(t,e,s){"use strict";var i=s("dbb8"),n=s.n(i);n.a},a19e:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tinymce-container editor-container"},[s("p",{staticClass:"addtest"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"contentbox"},[s("p",{staticClass:"testmesg"},[t._v("题目信息")]),t._v(" "),s("p",[t._v("题干")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.queststem,expression:"queststem"}],staticClass:"topic",attrs:{type:"text",placeholder:"请输入题目要求，不超过20个字"},domProps:{value:t.queststem},on:{input:function(e){e.target.composing||(t.queststem=e.target.value)}}}),t._v(" "),s("p",[t._v("题目主题")]),t._v(" "),s("markdown-editor",{model:{value:t.themes,callback:function(e){t.themes=e},expression:"themes"}}),t._v(" "),s("div",{staticClass:"testtype_select"},[s("p",[t._v("请选择考试类型:")]),t._v(" "),s("el-select",{attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.testtype,function(t){return s("el-option",{key:t.exam_id,attrs:{label:t.exam_name,value:t.exam_id}})}),1),t._v(" "),s("p",[t._v("请选择课程类型:")]),t._v(" "),s("el-select",{attrs:{placeholder:"请选择"},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}},t._l(t.subjecttype,function(t){return s("el-option",{key:t.subject_id,attrs:{label:t.subject_text,value:t.subject_id}})}),1),t._v(" "),s("p",[t._v("请选择题目类型:")]),t._v(" "),s("el-select",{attrs:{placeholder:"请选择"},model:{value:t.value3,callback:function(e){t.value3=e},expression:"value3"}},t._l(t.questionTypes,function(t){return s("el-option",{key:t.questions_type_id,attrs:{label:t.questions_type_text,value:t.questions_type_id}})}),1),t._v(" "),s("p",[t._v("答案信息")]),t._v(" "),s("markdown-editor",{model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}}),t._v(" "),s("p",{staticClass:"class-btn-box"},[s("button",{staticClass:"class-btn",attrs:{type:"text"},on:{click:t.open}},[t._v("提交")])])],1)],1)])},n=[],a=s("3f47"),u=s("16d8"),o=s("52c1"),l={components:{MarkdownEditor:u["a"]},data:function(){return{title:"添加试题",value:"",value2:"",value3:"",queststem:"",themes:"",answer:"",testtype:[],subjecttype:[],questionTypes:[],detaildata:[],alllist:[]}},mounted:function(){this.gettesttype()},methods:Object(a["a"])({},Object(o["b"])({list:"questionManagement/examType",subject:"questionManagement/subject",getQuestionsType:"questionManagement/getQuestionsType",addquestions:"questionManagement/addquestions",alldata:"questionManagement/condition",updates:"questionManagement/update"}),{gettesttype:function(){var t=this;this.list().then(function(e){1===e.code&&(t.testtype=e.data)}),this.subject().then(function(e){1===e.code&&(t.subjecttype=e.data)}),this.getQuestionsType().then(function(e){1===e.code&&(t.questionTypes=e.data)}),this.alldata().then(function(e){if(1===e.code&&(t.alllist=e.data,t.$route.query.id)){var s=t.alllist.filter(function(e){return e.questions_id===t.$route.query.id})[0];console.log(s.questions_stem,"lalalallal"),t.queststem=s.title,t.answer=s.questions_answer,t.themes=s.questions_stem,t.value=s.exam_name,t.value2=s.subject_text,t.value3=s.questions_type_text,t.title="编辑试题"}})},open:function(){var t=this;""!==this.queststem&&""!==this.answer&&""!==this.theme&&""!==this.value&&""!==this.value2&&""!==this.value3&&void 0===this.$route.query.id?this.$confirm("真的要添加吗?","你确定要添加这道试题吗？",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(function(){console.log(t.queststem,"题干"),t.addquestions({questions_type_id:t.value3,questions_stem:t.queststem,subject_id:t.value2,exam_id:t.value,user_id:"w6l6n-cbvl6s",questions_answer:t.answer,title:t.queststem}),t.$message({type:"success",message:"添加成功!"})}).catch(function(){t.$message({type:"info",message:"已取消添加"})}):this.$route.query.id&&""!==this.queststem&&""!==this.answer&&""!==this.theme&&""!==this.value&&""!==this.value2&&""!==this.value3&&this.$confirm("真的要更改吗?","你确定要更改这道试题吗？",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(function(){t.updates({questions_id:t.$route.query.id,questions_type_id:t.value3,questions_stem:t.queststem,subject_id:t.value2,exam_id:t.value,questions_answer:t.answer,title:"编辑试题"}),t.$message({type:"success",message:"更改成功!"})}).catch(function(){t.$message({type:"info",message:"已取消更改"})})}})},r=l,c=(s("756d"),s("17cc")),d=Object(c["a"])(r,i,n,!1,null,"2772a266",null);e["default"]=d.exports},dbb8:function(t,e,s){}}]);