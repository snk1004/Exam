(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6880085c"],{"8a85":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"addexam"},[r("h3",[e._v("添加考试")]),e._v(" "),r("div",{staticClass:"ant"},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{prop:"name"}},[r("span",{staticClass:"demonstration"},[r("b",[e._v("*")]),e._v(" 试卷名称：\n        ")]),e._v(" "),r("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"TypeExamId"}},[r("span",{staticClass:"demonstration"},[r("b",[e._v("*")]),e._v(" 考试类型:\n        ")]),e._v(" "),r("el-select",{model:{value:e.ruleForm.TypeExamId,callback:function(t){e.$set(e.ruleForm,"TypeExamId",t)},expression:"ruleForm.TypeExamId"}},e._l(e.examTypes,function(e){return r("el-option",{key:e.exam_id,attrs:{label:e.exam_name,value:e.exam_id}})}),1)],1),e._v(" "),r("el-form-item",{attrs:{prop:"courseExamId"}},[r("span",{staticClass:"demonstration"},[r("b",[e._v("*")]),e._v(" 试卷名称：\n        ")]),e._v(" "),r("el-select",{model:{value:e.ruleForm.courseExamId,callback:function(t){e.$set(e.ruleForm,"courseExamId",t)},expression:"ruleForm.courseExamId"}},e._l(e.course,function(e){return r("el-option",{key:e.subject_id,attrs:{label:e.subject_text,value:e.subject_id}})}),1)],1),e._v(" "),r("el-form-item",{attrs:{prop:"courseExam"}},[r("span",{staticClass:"demonstration"},[r("b",[e._v("*")]),e._v("数量:\n        ")]),e._v(" "),r("el-input-number",{attrs:{"controls-position":"right",min:3,max:100},model:{value:e.ruleForm.num,callback:function(t){e.$set(e.ruleForm,"num",t)},expression:"ruleForm.num"}})],1),e._v(" "),r("el-form-item",{attrs:{required:""}},[r("span",{staticClass:"demonstration"},[r("b",[e._v("*")]),e._v(" 考试时间：\n        ")]),e._v(" "),r("el-col",{attrs:{span:11}},[r("el-form-item",{attrs:{prop:"date1"}},[r("div",{staticClass:"block"},[r("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:e.ruleForm.date1,callback:function(t){e.$set(e.ruleForm,"date1",t)},expression:"ruleForm.date1"}})],1)])],1),e._v(" "),r("el-col",{attrs:{span:11}},[r("el-form-item",{attrs:{prop:"date2"}},[r("div",{staticClass:"block"},[r("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:e.ruleForm.date2,callback:function(t){e.$set(e.ruleForm,"date2",t)},expression:"ruleForm.date2"}})],1)])],1)],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("立即创建")])],1)],1)],1)])},s=[],n=(r("4453"),r("ee95")),o=r("3f47"),u=r("52c1"),m=r("6bf2"),l=r.n(m),i={data:function(){return{examTypes:[],course:[],ruleForm:{name:"",TypeExamId:"",courseExamId:"",num:1,date1:"",date2:""},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"}],courseExamId:[{required:!0,message:"请选择考试类型",trigger:"change"}],TypeExamId:[{required:!0,message:"请选择考试科目",trigger:"change"}],num:[{required:!0,message:"请选择数量",trigger:"change"}],date1:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],date2:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}]}}},mounted:function(){this.getList()},methods:Object(o["a"])({},Object(u["b"])({subject:"examList/subject",examType:"examList/examType",createExam:"examList/createExam"}),{submitForm:function(e){var t=this;this.$refs.ruleForm.validate(function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(r){var a,s,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=10;break}return a=1e3*l()(t.ruleForm.date1).unix(),s=1e3*l()(t.ruleForm.date2).unix(),n=Object(o["a"])({},t.ruleForm,{date1:a,date2:s}),e.next=6,t.createExam(n);case 6:e.sent,t.$router.push({path:"/examination/add"}),e.next=11;break;case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},resetForm:function(e){this.$refs[e].resetFields()},getList:function(){var e=this;this.examType().then(function(t){1===t.code&&(e.examTypes=t.data)}),this.subject().then(function(t){1===t.code&&(e.course=t.data)})}})},c=i,d=(r("af1f1"),r("17cc")),p=Object(d["a"])(c,a,s,!1,null,"47dcc5ce",null);t["default"]=p.exports},aeb0:function(e,t,r){},af1f1:function(e,t,r){"use strict";var a=r("aeb0"),s=r.n(a);s.a}}]);