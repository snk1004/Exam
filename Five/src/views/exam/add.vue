<template>
  <div class="add-layout">
    <h2>创建试卷</h2>
    <div class="add-layout-content">
      <el-button plain @click="showDialog">添加新题</el-button>
      <div class="content-list">
        <div class="top-title">
          <h3>{{title}}</h3>
          <p>考试时间：1小时30分钟 监考人：刘于 开始考试时间：2018.9.10 10:00 阅卷人：刘于</p>
        </div>
        <div class="list">
          <div class="style_questionitem__3ETlC" v-for="(item,index) in questionList" :key="index">
            <h4>{{item.title}} <el-button type="text" @click="delmask(index)" style="float: right;"><a href="javascript:;" >删除</a></el-button></h4>
            <div class="markdown">
              <pre>
               {{item.questions_answer}}             
              </pre>
            </div>
          </div>
        </div>
      </div>
      <el-button type="primary" @click="hendleCreate">创建试卷</el-button>
    </div>
    <div v-show="flag" class="add-drawer">
      <div class="mask" @click="hisdDialog"/>
      <div class="add-drawer-right">
        <p>所有试题</p>
        <ul>
          <li v-for="item in NewQuestion">
            {{item.title}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      //标题
      title:'',
      // 遮罩的显示与否
      flag: false,
      //所有要渲染的题
      questionList:[],
      //跳转页面要用的 试题Id
      src:'',
      NewQuestion:[]
    };
  },
  created() {
    
    //从本地存储取出来 渲染页面
    let data = JSON.parse(window.localStorage.getItem("exam"));
    this.src=data.exam_exam_id;
    this.title=data.title;
     this.questionList = data.questions;
   
  },
  methods: {
    ...mapActions({
      //创建试题
      PutCreate:"examList/PutCreate",
      //获取试题列表
      Questions:"examList/Questions"
    }),
   
    //点击弹出试题列表
    showDialog() {
      this.flag = !this.flag;
      //this.gitQuestion()
    },

    //  gitQuestion(){
    //   this.Questions().then(res=>{
    //     if(res.code==1){
    //       this.NewQuestion=res.data
    //     }

    //   })
    // },
     //点击收起试题列表
    hisdDialog(){
        this.flag = !this.flag;
    },
    async hendleCreate(){
     let ids=this.questionList.map(item=>{
       return item.questions_id
     });
     //将获取到题目的id 转换成字符串 数组
     let res={
        src:this.src,
        question_ids:JSON.stringify(ids)
     };
     //将参数传入到仓库
     let resolve=await this.PutCreate(res)
    //跳转考试列表页面
     this.$router.push({ path: "/examination/examinationlist" })
    },
    //点击删除的弹出框
    delmask(index) {
      this.$confirm('是否要删除该题目?', '确认提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
      this.questionList.splice(index,1)
        this.$message({   
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
     
    }
  }
};
</script>

<style lang="scss" scoped>
  *{
    list-style: none;
  }
  .add-drawer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
  }
  .mask {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.65);
    overflow-y: none;
  }
  .add-drawer-right {
    width: 40%;
    height: 100%;
    position: relative;
    float: right;
    background-color: #fff;
    border: 0;
    background-clip: padding-box;
    z-index: 1;
    overflow: hidden;
  }
   .add-drawer-right ul{
     width: 100%;
     overflow-y: none;
   }
  .add-drawer-right li{
    line-height: 35px;
  }
  .add-layout {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex: auto;
    background: #f0f2f5;
    min-height: 0;
    padding: 0px 24px 24px;
    box-sizing: border-box;
  }
  h2 {
    padding: 20px 0px;
    margin-top: 10px;
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 1.5em;
  }
  .add-layout-content {
    width: 100%;
    height: 100%;
    flex: auto;
    min-height: 0;
    background: rgb(255, 255, 255);
    padding: 24px;
    margin: 0px 0px 20px;
    border-radius: 10px;
  }
  h3,
  h4 {
    line-height: 30px;
    font-weight: normal;
    display: block;
    font-size: 1.3em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  h4 {

    font-size: 14px;
    margin: 0;
    padding: 0;
  }
  a {
    color: #0139FD;
    background-color: initial;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    transition: color .3s;
  }
  .content-list {
    width: 100%;
    margin-bottom: 10px;
  }
  .top-title {
    text-align: center;
    p {
      font-size: 14px;
    }
  }
  .style_questionitem__3ETlC {
    text-align: left;
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
  }
  .markdown,pre,code{
    margin: 0;
    padding: 0;
  }
  .markdown pre {
    margin-top: 5px;
    height: auto;
    display: block;
    padding: 1em;
    overflow: auto;
    line-height: 1.3;
    max-height: 35em;
    color: #657b83;
    background:#f6f6f6;
    background-size: 30px 30px;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
    font-size: 1em;
    white-space:normal;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
</style>
