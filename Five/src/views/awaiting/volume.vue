<template>
  <div class="box">
    <p>阅卷</p>
    <div class="content">
      <div v-if="answerlist.length" class="leftbox">
        <div v-for="(item,index) in answerlist" :key="index">
          <p>
            <span>{{ index+1 }}.{{ item.title }}</span><span>{{ item.questions_type_text }}</span>
          </p>
          <markdown-editor v-model="item.questions_stem" />
          <div class="contentTopbox">
            <div>
              <p>学生答案</p>
              <span>请输入您的答案</span>
            </div>
            <div>
              <p>标准答案</p>
              <markdown-editor v-model="item.questions_answer" />
            </div>
          </div>
        </div>
      </div>
      <div class="rightbox">
        <p>{{ data.student_name }}</p>
        <h4>得分：<span class="score">{{ score }}</span></h4>
        <div class="block">
          <el-slider v-model="value1" />
        </div>
        <button @click="sure()">确定</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import MarkdownEditor from '../addquest/looktest/Markdown'
export default {
  components: { MarkdownEditor },
  data() {
    return {
      value1: 0,
      score: 0,
      data: [],
      answerlist: []
    }
  },
  watch: {
    value1(newName, oldName) {
      this.score = newName
    }
  },
  mounted() {
    this.getdata()
  },
  methods: {
    sure() {
        this.$alert('您的成绩是'+this.score+'分',  {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
    },
    ...mapActions({
      studentDetail: 'swaitingClass/studentDetail',
      volumeDetail: 'swaitingClass/volumeDetail'
    }),
    getdata() {
      this.volumeDetail({
        id: this.$route.query.id
      }).then(res => {
        console.log(res,'rsresddd')
        if (res.code === 1) {
          this.data = res.data
          this.answerlist = res.data.questions
        }
      })
    }
  }

}
</script>
<style lang="scss" scoped>
.box{
    width: 100%;
    height: 100%;
    padding: 0 30px;
    >p{
        font-size: 20px;
        padding: 10px 0;
    }
}
.content{
    width: 100%;
    display: flex;
    .leftbox{
        flex: 6;
        background: #fff;
        border-radius: 15px;
        font-size: 20px;
        padding: 20px;
        >div{
          font-size: 16px;
          border-bottom: 1px solid #ccc;
          margin: 20px 0;
          >p:nth-child(1){
            >span:nth-child(2){
            background: #87ceeb9c;
            padding: 3px 5px;
            color: #2196f3;
            border:1px solid #ccc;
            font-size: 14px;
            margin-left: 5px;
            }
          }

          >p:nth-child(3){
            font-size: 24px;
          }
          >p:nth-child(5){
            font-size: 14px;
            color: #999;
          }
        }
    }
      .contentTopbox{
            width: 100%;
            display: flex;
            >div{
              flex: 1;
              padding: 10px;
              >span{
                font-size: 14px;
                color: #999;
              }
            }
          }
    .rightbox{
        flex: 3;
        text-align: center;
        border-radius: 15px;
        background: #fff;
        margin-left: 20px;
        .score{
            font-size: 20px;
            color: blue;
        }
        .block{
            width: 100%;
            padding: 0 20px;
        }
        button{
            padding: 10px 30px;
            background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
            border: none;
            color: #fff;
            border-radius: 5px;
            margin-top: 25px;
        }
    }
}
.questtitle{
  color:#999;
}
</style>
