(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ba78914"],{"106e":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:t.id}})},s=[],a=i("cebc"),o=i("5176"),r=i.n(o),u=(i("a7be"),i("44f8"),i("a6e0"),i("547e")),d=i.n(u),c={minHeight:"200px",previewStyle:"vertical",useCommandShortcut:!1,useDefaultHTMLSanitizer:!1,usageStatistics:!0,hideModeSwitch:!0,toolbarItems:[]},l={name:"MarddownEditor",props:{value:{type:String,default:""},id:{type:String,required:!1,default:function(){return"markdown-editor-"+ +new Date+(1e3*Math.random()).toFixed(0)}},options:{type:Object,default:function(){return c}},mode:{type:String,default:"wysiwyg"},height:{type:String,required:!1},language:{type:String,required:!1,default:"en_US"}},data:function(){return{editor:null}},computed:{editorOptions:function(){var t=r()({},c,this.options);return t.initialEditType=this.mode,t.height=this.height,t.language=this.language,t}},watch:{value:function(t,e){t!==e&&t!==this.editor.getValue()&&this.editor.setValue(t)},language:function(t){this.destroyEditor(),this.initEditor()},height:function(t){this.editor.height(t)},mode:function(t){this.editor.changeMode(t)}},mounted:function(){this.initEditor()},destroyed:function(){this.destroyEditor()},methods:{initEditor:function(){var t=this;this.editor=new d.a(Object(a["a"])({el:document.getElementById(this.id)},this.editorOptions)),this.value&&this.editor.setValue(this.value),this.editor.on("change",function(){t.$emit("input",t.editor.getValue())})},destroyEditor:function(){this.editor&&(this.editor.off("change"),this.editor.remove())},setValue:function(t){this.editor.setValue(t)},getValue:function(){return this.editor.getValue()},setHtml:function(t){this.editor.setHtml(t)},getHtml:function(){return this.editor.getHtml()}}},h=l,v=(i("e368"),i("2877")),f=Object(v["a"])(h,n,s,!1,null,null,null);e["a"]=f.exports},1909:function(t,e,i){},4584:function(t,e,i){"use strict";var n=i("a854"),s=i.n(n);s.a},"90d4d":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[i("p",[t._v("阅卷")]),t._v(" "),i("div",{staticClass:"content"},[t.answerlist.length?i("div",{staticClass:"leftbox"},t._l(t.answerlist,function(e,n){return i("div",{key:n},[i("p",[i("span",[t._v(t._s(n+1)+"."+t._s(e.title))]),i("span",[t._v(t._s(e.questions_type_text))])]),t._v(" "),i("markdown-editor",{model:{value:e.questions_stem,callback:function(i){t.$set(e,"questions_stem",i)},expression:"item.questions_stem"}}),t._v(" "),i("div",{staticClass:"contentTopbox"},[t._m(0,!0),t._v(" "),i("div",[i("p",[t._v("标准答案")]),t._v(" "),i("markdown-editor",{model:{value:e.questions_answer,callback:function(i){t.$set(e,"questions_answer",i)},expression:"item.questions_answer"}})],1)])],1)}),0):t._e(),t._v(" "),i("div",{staticClass:"rightbox"},[i("p",[t._v(t._s(t.data.student_name))]),t._v(" "),i("h4",[t._v("得分："),i("span",{staticClass:"score"},[t._v(t._s(t.score))])]),t._v(" "),i("div",{staticClass:"block"},[i("el-slider",{model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1),t._v(" "),i("button",{on:{click:function(e){return t.sure()}}},[t._v("确定")])])])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("p",[t._v("学生答案")]),t._v(" "),i("span",[t._v("请输入您的答案")])])}],a=i("cebc"),o=i("2f62"),r=i("106e"),u={components:{MarkdownEditor:r["a"]},data:function(){return{value1:0,score:0,data:[],answerlist:[]}},watch:{value1:function(t,e){this.score=t}},mounted:function(){this.getdata()},methods:Object(a["a"])({sure:function(){alert("您的成绩是"+this.score+"分")}},Object(o["b"])({studentDetail:"swaitingClass/studentDetail",volumeDetail:"swaitingClass/volumeDetail"}),{getdata:function(){var t=this;this.volumeDetail({id:this.$route.query.id}).then(function(e){1===e.code&&(t.data=e.data,t.answerlist=e.data.questions)})}})},d=u,c=(i("4584"),i("2877")),l=Object(c["a"])(d,n,s,!1,null,"cca9db40",null);e["default"]=l.exports},a854:function(t,e,i){},e368:function(t,e,i){"use strict";var n=i("1909"),s=i.n(n);s.a}}]);