<template>
  <div class="chart-container">
    <p class="looktest">
      查看试题 
    </p>
    <div class="contentbox_looktest">
      <div class="testtype_top">
        <span>课程类型:</span> 
        <ul class="testtype_ullist">
          <li>all</li>
          <li v-for="item in list" :key="item.subject_id">{{item.subject_text}}</li>
        </ul>
      </div>
      <div class="testtype_select">
        <span>考试类型:</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in testtypes"
            :key="item.exam_id"
            :label="item.exam_name"
            :value="item.exam_id">
          </el-option>
        </el-select>
        <span>题目类型:</span>
        <el-select v-model="value2" placeholder="请选择">
          <el-option
            v-for="item in titletypes"
            :key="item.questions_type_id"
            :label="item.questions_type_text"
            :value="item.questions_type_id">
          </el-option>
        </el-select>
        <button>查询</button>
      </div>
    </div>
    <div class="content_box">
        <ul>
          <li v-for="(item,index) in contentdata" :key="index">
            <p>{{item.title}}</p>
            <div>
              <p>
                <span>{{item.questions_type_text}}</span>
                <span>{{item.subject_text}}</span>
                <span>{{item.exam_name}}</span>
              </p>
              <span>编辑</span>
            </div> 
            <p>{{item.user_name}}发布</p>
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
import {mapActions} from "vuex";
export default {
  data() {
      return {
        value: '',
        value2:'',
        list:[],
        testtypes:[],
        titletypes:[],
        contentdata:[]
      }
    },
    mounted() {
      this.getlist()
    },
    methods: {
    ...mapActions({
      subject:"questionManagement/subject",//js上下
      testtype:"questionManagement/examType",//周考月考
      titletype:"questionManagement/getQuestionsType",//题的类型---简单题
      condition:"questionManagement/condition"
    }),
    getlist(){
      this.subject().then(res=>{
        if(res.code===1){
          this.list=res.data
        }
      }),
      this.testtype().then(res=>{
        if(res.code===1){
          this.testtypes=res.data
        }
      }),
      this.titletype().then(res=>{
        if(res.code===1){
          this.titletypes=res.data 
        }
      }),
      this.condition().then(res=>{
        if(res.code===1){
          this.contentdata=res.data
        }
      })
    }
  }
  };
  
</script>

<style scoped lang='scss'>
.looktest{
  font-size: 20px;
}
.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
  padding: 10px 20px;
  overflow: auto;
}
.testtype_top{
  display: flex;
  >span{
    width:80px;
    padding: 30px 0px;
  }
}
.contentbox_looktest{
  background: #fff;
  padding: 30px 20px 50px 20px;
  border-radius: 10px;
}
.testtype_ullist{
  flex:1;
  display: flex;
  font-size: 12px;
  height: 50px;
  align-items: center; 
  >li{
    padding: 20px 10px;
    list-style:none;
  }
  >li:nth-child(1){
    font-weight: bold;
  }
}
.testtype_select{
  padding: 15px 0;
  >select{
    width: 150px;
    height: 35px;
    margin-right: 20px;
  }
 >button{
  display: inline-block;
  padding: 8px 30px;
  background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
  border: none;
  color: #fff;
  margin-left: 80px;
  border-radius: 5px;
}
}
.content_box{
  width: 100%;
  background: #fff;
  border-radius: 10px;
  margin: 0;
  margin-top: 20px;
  ul{
      margin: 0;
  li{
    width: 100%;
    list-style: none;
    padding:10px 0;
    border-bottom: 1px solid #ccc;
    >p:nth-child(1){ 
      padding: 10px 0;
      font-size: 14px;
      line-height: 25px;
      margin: 0;
    }
    >p:nth-child(3){
      padding: 10px 0;
      color: #0139fd;
      margin: 0;
    }
    >div{
      height: 50px;
      line-height: 50px;
      >p{
        display: inline-block; 
        margin: 0;
        height: 16px;
        line-height: 16px;
        >span{
          display: inline-block;
          border:1px solid #ccc;
          background: pink;
          font-size: 12px;
          padding: 3px 6px;
          margin-right:5px; 
        }
      }
      >span{
        float: right;
        margin-right: 30px;
        color: #0139fd;
        font-size: 14px;
      }
    }
  }
  }
}
</style>

