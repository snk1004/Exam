(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33403a48"],{"16d8":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:t.id}})},s=[],a=i("cebc"),o=i("5176"),r=i.n(o),u=(i("a7be"),i("44f8"),i("a6e0"),i("547e")),c=i.n(u),d={minHeight:"200px",previewStyle:"vertical",useCommandShortcut:!1,useDefaultHTMLSanitizer:!1,usageStatistics:!0,hideModeSwitch:!0,toolbarItems:[]},l={name:"MarddownEditor",props:{value:{type:String,default:""},id:{type:String,required:!1,default:function(){return"markdown-editor-"+ +new Date+(1e3*Math.random()).toFixed(0)}},options:{type:Object,default:function(){return d}},mode:{type:String,default:"wysiwyg"},language:{type:String,required:!1,default:"en_US"}},data:function(){return{editor:null}},computed:{editorOptions:function(){var t=r()({},d,this.options);return t.initialEditType=this.mode,t.height=this.height,t.language=this.language,t}},watch:{value:function(t,e){t!==e&&t!==this.editor.getValue()&&this.editor.setValue(t)},language:function(t){this.destroyEditor(),this.initEditor()},height:function(t){this.editor.height(t)},mode:function(t){this.editor.changeMode(t)}},mounted:function(){this.initEditor()},destroyed:function(){this.destroyEditor()},methods:{initEditor:function(){var t=this;this.editor=new c.a(Object(a["a"])({el:document.getElementById(this.id)},this.editorOptions)),this.value&&this.editor.setValue(this.value),this.editor.on("change",function(){t.$emit("input",t.editor.getValue())})},destroyEditor:function(){this.editor&&(this.editor.off("change"),this.editor.remove())},setValue:function(t){this.editor.setValue(t)},getValue:function(){return this.editor.getValue()},setHtml:function(t){this.editor.setHtml(t)},getHtml:function(){return this.editor.getHtml()}}},h=l,f=i("2877"),m=Object(f["a"])(h,n,s,!1,null,null,null);e["a"]=m.exports},"90f7":function(t,e,i){},b411:function(t,e,i){"use strict";var n=i("90f7"),s=i.n(n);s.a},c0b2:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"add-layout"},[i("h2",[t._v("创建试卷")]),t._v(" "),i("div",{staticClass:"add-layout-content"},[i("el-button",{attrs:{plain:""},on:{click:t.showDialog}},[t._v("添加新题")]),t._v(" "),i("div",{staticClass:"content-list"},[i("div",{staticClass:"top-title"},[i("h3",[t._v(t._s(t.title))]),t._v(" "),i("p",[t._v("考试时间：1小时30分钟 监考人：刘于 开始考试时间：2018.9.10 10:00 阅卷人：刘于")])]),t._v(" "),i("div",{staticClass:"list"},t._l(t.questionList,function(e,n){return i("div",{key:n,staticClass:"style_questionitem__3ETlC"},[i("h4",[t._v(t._s(e.title)+" "),i("el-button",{staticStyle:{float:"right"},attrs:{type:"text"},on:{click:function(e){return t.delmask(n)}}},[i("a",{attrs:{href:"javascript:;"}},[t._v("删除")])])],1),t._v(" "),i("div",{staticClass:"markdown"},[i("markdown-editor",{model:{value:e.questions_stem,callback:function(i){t.$set(e,"questions_stem",i)},expression:"item.questions_stem"}})],1)])}),0)]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.hendleCreate}},[t._v("创建试卷")])],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.flag,expression:"flag"}],staticClass:"add-drawer"},[i("div",{staticClass:"mask",on:{click:t.hisdDialog}}),t._v(" "),i("div",{staticClass:"add-drawer-right"},[i("p",[t._v("所有试题")]),t._v(" "),i("ul",t._l(t.NewQuestion,function(e,n){return i("li",{key:n,on:{click:function(i){return t.headleAdd(e.questions_id,n)}}},[t._v("\n          "+t._s(e.title)+"\n        ")])}),0)])])])},s=[],a=i("f499"),o=i.n(a),r=(i("96cf"),i("3b8d")),u=i("cebc"),c=i("2f62"),d=i("16d8"),l={components:{MarkdownEditor:d["a"]},data:function(){return{title:"",flag:!1,questionList:[],src:"",NewQuestion:[],items:{}}},created:function(){var t=JSON.parse(window.localStorage.getItem("exam"));this.src=t.exam_exam_id,this.title=t.title,this.questionList=t.questions},methods:Object(u["a"])({},Object(c["b"])({PutCreate:"examList/PutCreate",Questions:"examList/Questions"}),{showDialog:function(){this.flag=!this.flag,this.gitQuestion()},gitQuestion:function(){var t=this;this.Questions().then(function(e){1==e.code&&(t.NewQuestion=e.data)})},headleAdd:function(t,e){var i=this;this.NewQuestion.map(function(e){e.questions_id===t&&(i.items=e)}),console.log(this.items),this.questionList.push(this.items)},hisdDialog:function(){this.flag=!this.flag},hendleCreate:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.questionList.map(function(t){return t.questions_id}),i={src:this.src,question_ids:o()(e)},t.next=4,this.PutCreate(i);case 4:t.sent,this.$router.push({path:"/examination/examinationlist"});case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),delmask:function(t){var e=this;this.$confirm("是否要删除该题目?","确认提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(function(){e.questionList.splice(t,1),e.$message({type:"success",message:"删除成功!"})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})}})},h=l,f=(i("b411"),i("2877")),m=Object(f["a"])(h,n,s,!1,null,"29a38b1a",null);e["default"]=m.exports}}]);