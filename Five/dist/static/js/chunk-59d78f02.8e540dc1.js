(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59d78f02"],{"1e92":function(e,t,i){"use strict";var s=i("6122"),n=i.n(s);n.a},3292:function(e,t,i){"use strict";var s=i("a269"),n=i.n(s);n.a},"32b7":function(e,t,i){"use strict";var s=i("b09f"),n=i.n(s);n.a},"41de":function(e,t,i){"use strict";var s=i("ee8f"),n=i.n(s);n.a},4980:function(e,t,i){"use strict";var s=i("db6d"),n=i.n(s);n.a},5929:function(e,t,i){},6122:function(e,t,i){},"6bd6":function(e,t,i){},7415:function(e,t,i){"use strict";var s=i("2d2c"),n=i("ea02")(5),a="find",r=!0;a in[]&&Array(1)[a](function(){r=!1}),s(s.P+s.F*r,"Array",{find:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),i("68fb")(a)},9890:function(e,t,i){"use strict";var s=i("6bd6"),n=i.n(s);n.a},a269:function(e,t,i){},b09f:function(e,t,i){},db6d:function(e,t,i){},ecaa:function(e,t,i){"use strict";var s=i("5929"),n=i.n(s);n.a},ee8f:function(e,t,i){},fc9b:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"chart-container"},[e._m(0),e._v(" "),e.options.length?i("div",{staticClass:"addUser_grid"},[i("addUserDel",{attrs:{options:e.options,list:e.list},on:{finish:e.handleFinish}}),e._v(" "),i("addIdentity",{on:{finish:e.handleFinish}}),e._v(" "),i("addApi",{on:{finish:e.handleFinish}}),e._v(" "),i("setApiEnter"),e._v(" "),i("addIdentityApi",{attrs:{options:e.options,api:e.api}}),e._v(" "),i("setIdentityView",{attrs:{options:e.options}})],1):e._e()])},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"lay-out"},[i("h2",[e._v("添加用户")])])}],a=i("3f47"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"addUser_wrapper"},[i("div",{staticClass:"btn"},e._l(e.userState,function(t,s){return i("button",{key:t.id,class:e.stateInd==s?"active":"",on:{click:function(t){return e.handleState(s)}}},[e._v(e._s(t.states))])}),0),e._v(" "),e.stateInd?i("el-select",{attrs:{placeholder:"请选择身份id"},model:{value:e.values,callback:function(t){e.values=t},expression:"values"}},e._l(e.list,function(e){return i("el-option",{key:e.user_name,attrs:{value:e.user_name}})}),1):e._e(),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.user_name,expression:"user_name"}],attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:e.user_name},on:{input:function(t){t.target.composing||(e.user_name=t.target.value)}}}),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.user_pwd,expression:"user_pwd"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:e.user_pwd},on:{input:function(t){t.target.composing||(e.user_pwd=t.target.value)}}}),e._v(" "),i("el-select",{attrs:{placeholder:"请选择身份id"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,function(e){return i("el-option",{key:e.identity_text,attrs:{value:e.identity_text}})}),1),e._v(" "),i("div",{staticClass:"btnFotter"},[i("el-button",{attrs:{plain:!0},on:{click:e.handleSubmit}},[e._v("确认")]),e._v(" "),i("button",{staticClass:"resets",on:{click:e.resets}},[e._v("重置")])],1)],1)},u=[],o=(i("612f"),i("7415"),i("52c1")),c={props:["options","list"],data:function(){return{userState:[{id:"1",states:"添加用户"},{id:"2",states:"更新用户"}],value:"",user_name:"",user_pwd:"",stateInd:0,values:""}},methods:Object(a["a"])({},Object(o["b"])({addSubmit:"usershow/adduser",getreneval:"usershow/getReneval",getid:"usershow/getIdentity"}),{handleState:function(e){this.stateInd=e},handleSubmit:function(){var e=this;if(0===this.stateInd)if(this.user_pwd&&this.user_name&&this.value){var t=this.options.find(function(t){return t.identity_text===e.value});this.addSubmit({user_name:this.user_name,user_pwd:this.user_pwd,identity_id:t.identity_id}).then(function(t){e.$message({message:t.msg,type:"success"}),1===t.code&&e.$emit("finish","wancheng")})}else this.user_pwd&&this.user_name&&!this.value?this.addSubmit({user_name:this.user_name,user_pwd:this.user_pwd}).then(function(t){e.$message({message:t.msg,type:"success"}),1===t.code&&e.$emit("finish","wancheng")}):this.$message.error("参数有误");else 1===this.stateInd&&this.list.find(function(t){if(t.user_name===e.values)if(e.value||e.user_name||e.user_pwd)if(e.value){var i=e.options.find(function(t){return t.identity_text===e.value});e.getreneval({user_id:t.user_id,user_name:""===e.user_name?t.user_name:e.user_name,user_pwd:""===e.user_pwd?t.user_pwd:e.user_pwd,identity_id:e.value?i.identity_id:""}).then(function(t){e.$message({message:t.msg,type:"success"})})}else e.getreneval({user_id:t.user_id,user_name:""===e.user_name?t.user_name:e.user_name,user_pwd:""===e.user_pwd?t.user_pwd:e.user_pwd}).then(function(t){e.$message({message:t.msg,type:"success"})});else e.$message.error("参数有误")})},resets:function(){this.value="",this.user_name="",this.user_pwd="",this.values=""}})},l=c,d=(i("41de"),i("17cc")),p=Object(d["a"])(l,r,u,!1,null,"ec8b0ec2",null),v=p.exports,h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"addUser_wrapper"},[e._m(0),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{type:"text",placeholder:"请输入身份名称"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),e._v(" "),i("div",{staticClass:"btnFotter"},[i("el-button",{attrs:{plain:!0},on:{click:e.handleSubmit}},[e._v("确认")]),e._v(" "),i("button",{staticClass:"resets",on:{click:e.resets}},[e._v("重置")])],1)])},_=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"btn"},[i("button",[e._v("添加身份")])])}],m={data:function(){return{value:""}},methods:Object(a["a"])({},Object(o["b"])({addidentity:"usershow/setIdentity"}),{handleSubmit:function(){var e=this;this.value?this.addidentity({identity_text:this.value}).then(function(t){e.$message({message:t.msg,type:"success"}),1===t.code&&e.$emit("finish","wancheng")}):this.$message.error("参数有误")},resets:function(){this.value=""}})},f=m,w=(i("ecaa"),Object(d["a"])(f,h,_,!1,null,"5ab715fc",null)),b=w.exports,g=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"addUser_wrapper"},[e._m(0),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.apinames,expression:"apinames"}],attrs:{type:"text",placeholder:"请输入api接口权限名称"},domProps:{value:e.apinames},on:{input:function(t){t.target.composing||(e.apinames=t.target.value)}}}),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.apiurl,expression:"apiurl"}],attrs:{type:"text",placeholder:"请输入api接口权限url"},domProps:{value:e.apiurl},on:{input:function(t){t.target.composing||(e.apiurl=t.target.value)}}}),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.apimethods,expression:"apimethods"}],attrs:{type:"text",placeholder:"请输入api接口权限方法"},domProps:{value:e.apimethods},on:{input:function(t){t.target.composing||(e.apimethods=t.target.value)}}}),e._v(" "),i("div",{staticClass:"btnFotter"},[i("el-button",{attrs:{plain:!0},on:{click:e.handleSubmit}},[e._v("确认")]),e._v(" "),i("button",{staticClass:"resets",on:{click:e.resets}},[e._v("重置")])],1)])},y=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"btn"},[i("button",[e._v("添加api接口权限")])])}],x={data:function(){return{apinames:"",apiurl:"",apimethods:""}},methods:Object(a["a"])({},Object(o["b"])({addapi:"usershow/addApi"}),{handleSubmit:function(){var e=this;this.apinames&&this.apiurl&&this.apimethods?this.addapi({api_authority_text:this.apinames,api_authority_url:this.apiurl,api_authority_method:this.apimethods}).then(function(t){e.$message({message:t.msg,type:"success"}),1===t.code&&e.$emit("finish","wancheng")}):this.$message.error("参数有误")},resets:function(){this.apinames="",this.apiurl="",this.apimethods=""}})},k=x,$=(i("32b7"),Object(d["a"])(k,g,y,!1,null,"29f691ac",null)),j=$.exports,O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"addUser_wrapper"},[e._m(0),e._v(" "),i("el-select",{attrs:{placeholder:"请选择已有视图"},model:{value:e.viewvalue,callback:function(t){e.viewvalue=t},expression:"viewvalue"}},e._l(e.list,function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.view_authority_text}})}),1),e._v(" "),i("div",{staticClass:"btnFotter"},[i("el-button",{attrs:{plain:!0},on:{click:e.handleSubmit}},[e._v("确认")]),e._v(" "),i("button",{staticClass:"resets",on:{click:e.resets}},[e._v("重置")])],1)],1)},C=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"btn"},[i("button",[e._v("添加视图接口权限")])])}],S=(i("4453"),i("ee95")),I={data:function(){return{list:[],viewvalue:""}},methods:Object(a["a"])({},Object(o["b"])({setapi:"usershow/setApiEnter",addviewapi:"usershow/addViewApi"}),{handleSubmit:function(){var e=Object(S["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.viewvalue){e.next=6;break}return e.next=3,this.addviewapi({view_authority_text:this.viewvalue,view_id:this.viewvalue});case 3:1==this.code?this.$message({message:this.msg,type:"success"}):this.$message.error(this.msg),e.next=7;break;case 6:this.$message.error("参数有误");case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),resets:function(){this.viewvalue=""}}),created:function(){var e=this;this.setapi().then(function(t){1==t.code&&(e.list=t.data)})},computed:Object(a["a"])({},Object(o["e"])({code:function(e){return e.usershow.code},msg:function(e){return e.usershow.msg}}))},E=I,A=(i("4980"),Object(d["a"])(E,O,C,!1,null,"5e4c923b",null)),V=A.exports,F=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"addUser_wrapper"},[e._m(0),e._v(" "),i("el-select",{attrs:{placeholder:"请选择身份id"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,function(e){return i("el-option",{key:e.identity_text,attrs:{value:e.identity_text}})}),1),e._v(" "),i("el-select",{attrs:{placeholder:"请选择api接口权限"},model:{value:e.apiView,callback:function(t){e.apiView=t},expression:"apiView"}},e._l(e.api,function(e){return i("el-option",{key:e.api_authority_text,attrs:{value:e.api_authority_text}})}),1),e._v(" "),i("div",{staticClass:"btnFotter"},[i("el-button",{attrs:{plain:!0},on:{click:e.handleSubmit}},[e._v("确认")]),e._v(" "),i("button",{staticClass:"resets",on:{click:e.resets}},[e._v("重置")])],1)],1)},U=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"btn"},[i("button",[e._v("给身份设置pi接口权限")])])}],P={props:{options:Array,api:Array},data:function(){return{value:"",apiView:"",identity_id:"",api_id:""}},computed:Object(a["a"])({},Object(o["e"])({code:function(e){return e.usershow.code},msg:function(e){return e.usershow.msg}})),methods:Object(a["a"])({},Object(o["b"])({setapiidentity:"usershow/setIdentityApi"}),{handleSubmit:function(){var e=Object(S["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(""===this.value||""===this.apiView){e.next=8;break}return this.identity_id=this.options.find(function(e){return e.identity_text==t.value}),this.api_id=this.api.find(function(e){return e.api_authority_text==t.apiView}),e.next=5,this.setapiidentity({identity_id:this.identity_id.identity_id,api_authority_id:this.api_id.api_authority_id});case 5:1===this.code?this.$message({message:this.msg,type:"success"}):this.$message.error(this.msg),e.next=9;break;case 8:this.$message.error("参数错误");case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),resets:function(){this.value="",this.apiView=""}})},R=P,N=(i("1e92"),Object(d["a"])(R,F,U,!1,null,"4dac9444",null)),D=N.exports,J=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"addUser_wrapper"},[e._m(0),e._v(" "),i("el-select",{attrs:{placeholder:"请选择身份id"},model:{value:e.idvalue,callback:function(t){e.idvalue=t},expression:"idvalue"}},e._l(e.options,function(e){return i("el-option",{key:e.identity_text,attrs:{value:e.identity_text}})}),1),e._v(" "),i("el-select",{attrs:{placeholder:"请选择视图权限id"},model:{value:e.viewvalue,callback:function(t){e.viewvalue=t},expression:"viewvalue"}},e._l(e.list,function(e){return i("el-option",{key:e.view_authority_text,attrs:{value:e.view_authority_text}})}),1),e._v(" "),i("div",{staticClass:"btnFotter"},[i("el-button",{attrs:{plain:!0},on:{click:e.handleSubmit}},[e._v("确认")]),e._v(" "),i("button",{staticClass:"resets",on:{click:e.resets}},[e._v("重置")])],1)],1)},L=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"btn"},[i("button",[e._v("给身份设置视图权限")])])}],q={props:["options"],data:function(){return{viewvalue:"",idvalue:"",list:[]}},methods:Object(a["a"])({},Object(o["b"])({setview:"usershow/getView",setidentityview:"usershow/setIdentityView"}),{handleSubmit:function(){var e=Object(S["a"])(regeneratorRuntime.mark(function e(){var t,i,s=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.idvalue||!this.viewvalue){e.next=9;break}return t=this.options.find(function(e){return e.identity_text==s.idvalue}),i=this.list.find(function(e){return e.view_authority_text==s.viewvalue}),console.log(t,i),e.next=6,this.setidentityview({identity_id:t.identity_id,view_authority_id:i.view_authority_id});case 6:1==this.code?this.$message({message:this.msg,type:"success"}):this.$message.error(this.msg),e.next=10;break;case 9:this.$message.error("参数错误");case 10:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),resets:function(){this.idvalue="",this.viewvalue=""}}),created:function(){var e=this;this.setview().then(function(t){e.list=t.data})},computed:Object(a["a"])({},Object(o["e"])({code:function(e){return e.usershow.code},msg:function(e){return e.usershow.msg}}))},z=q,B=(i("3292"),Object(d["a"])(z,J,L,!1,null,"289fac6c",null)),G=B.exports,H={components:{addUserDel:v,addIdentity:b,addApi:j,setApiEnter:V,addIdentityApi:D,setIdentityView:G},data:function(){return{options:[],list:[],api:[]}},created:function(){this.getData()},methods:Object(a["a"])({},Object(o["b"])({getid:"usershow/getIdentity",getList:"usershow/show",getapi:"usershow/getApi"}),{getData:function(){var e=this;this.getid().then(function(t){e.options=t.data}),this.getList().then(function(t){e.list=t.data}),this.getapi().then(function(t){e.api=t.data})},handleFinish:function(e){"wancheng"===e&&this.getData()}})},K=H,M=(i("9890"),Object(d["a"])(K,s,n,!1,null,"454283b7",null));t["default"]=M.exports}}]);