(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-83622ce8"],{"22fd":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bigbox"},[a("p",{staticClass:"Awaitingclass"},[t._v("待批班级")]),t._v(" "),a("div",{staticClass:"tablebox"},[a("table",[t._m(0),t._v(" "),a("thead",[a("tr",t._l(t.titlelist,function(e){return a("th",{key:e.id},[a("div",[t._v(t._s(e.title))])])}),0)]),t._v(" "),a("tbody",t._l(t.alldata,function(e){return a("tr",{key:e.grade_id},[a("td",[a("span",[t._v(t._s(e.grade_name))])]),t._v(" "),a("td",[a("span",[t._v(t._s(e.subject_text))])]),t._v(" "),t._m(1,!0),t._v(" "),a("td",[a("span",[t._v(t._s(e.room_text))])]),t._v(" "),a("td",[a("span",{on:{click:function(a){return t.change(a,e.grade_id,e.grade_name)}}},[t._v(t._s(e.operation))])])])}),0)])]),t._v(" "),a("div",{staticClass:"pages"},[a("el-pagination",{attrs:{background:"",layout:"total, sizes, prev, pager, next","current-page":t.currentPage3,total:t.len,"page-sizes":[5,8,9,10],"page-size":6},on:{"update:currentPage":function(e){t.currentPage3=e},"update:current-page":function(e){t.currentPage3=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("colgroup",[a("col"),t._v(" "),a("col"),t._v(" "),a("col")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("span",[t._v("未阅")])])}],s=a("3f47"),r=a("52c1"),c={data:function(){return{alldata:[],len:0,limit:5,currentPage3:1,titlelist:[{title:"班级名",id:0},{title:"课程名称",id:1},{title:"阅卷状态",id:2},{title:"教室号",id:3},{title:"操作",id:4}]}},mounted:function(){this.getDate(this.limit,1)},methods:Object(s["a"])({},Object(r["b"])({list:"swaitingClass/paperDetails",studentDetail:"swaitingClass/studentDetail"}),{getDate:function(t,e){var a=this;this.list().then(function(n){if(1===n.code){a.alldata=n.data.slice((e-1)*t,t*e),a.len=n.data.length;for(var i=0;i<a.alldata.length;i++)a.alldata[i].operation="批卷"}})},change:function(t,e,a){var n=this;"批卷"===t.target.innerHTML&&this.studentDetail({gradeid:e}).then(function(t){1===t.code&&n.$router.push("/markingmanagement/awaitinglist?grade_id=".concat(e,"&grad=").concat(a))})},handleCurrentChange:function(t){this.getDate(this.limit,t)},handleSizeChange:function(t){this.limit=t,this.getDate(t,1),this.currentPage3=1}})},l=c,u=(a("7845"),a("17cc")),d=Object(u["a"])(l,n,i,!1,null,"6efdc02b",null);e["default"]=d.exports},7845:function(t,e,a){"use strict";var n=a("808c"),i=a.n(n);i.a},"808c":function(t,e,a){}}]);