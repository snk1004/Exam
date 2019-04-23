<template>
  <div class="box">
    <p>阅卷</p>
    <div class="content">
      <div v-if="answerlist.length" class="leftbox">
        <div>
          <span>1.{{ answerlist[0].title }}</span>
          <span>{{ answerlist[0].questions_type_text }}</span>
          <p>{{ answerlist[0].questions_stem.split("!")[0].split("#")[1] }}</p>
          <img class="imgs" :src="imgs" alt="">
          <p>{{ answerlist[0].questions_stem.split(")")[1] }}</p>
          <div class="contentTopbox">
            <div>
              <p>学生答案</p>
              <span>请输入您的答案</span>
            </div>
            <div>
              <p>标准答案</p>
              <span>{{ answerlist[0].questions_answer.split(/[0-9]/).join("").split(',.').join("").split(".").join('') }}</span>
            </div>
          </div>
        </div>
        <div>
          <span>2.{{ answerlist[1].title }}</span>
          <span>{{ answerlist[1].questions_type_text }}</span>
          <p>{{ answerlist[1].questions_stem.split("!")[0].split("#")[1] }}</p>
          <p class="questtitle">{{ answerlist[1].questions_stem }}</p>
          <div class="contentTopbox">
            <div>
              <p>学生答案</p>
              <span>请输入您的答案</span>
            </div>
            <div>
              <p>标准答案</p>
              <markdown-editor v-model="aswertwo" />
            </div>
          </div>
        </div>
        <div>
          <span>3.{{ answerlist[2].title }}</span>
          <span>{{ answerlist[2].questions_type_text }}</span>
          <p>{{ answerlist[2].questions_stem.split("!")[0].split("#")[1] }}</p>
          <h3>{{ answerlist[2].questions_stem.split("##")[1] }}</h3>
          <div class="contentTopbox">
            <div>
              <p>学生答案</p>
              <span>请输入您的答案</span>
            </div>
            <div>
              <p>标准答案</p>
              <span>{{ answerlist[2].questions_answer.split(/[0-9]/).join("").split(',.').join("").split(".").join('') }}</span>
            </div>
          </div>
        </div>
        <div>
          <span>4.{{ answerlist[3].title }}</span>
          <span>{{ answerlist[3].questions_type_text }}</span>
          <p>{{ answerlist[3].questions_stem.split("!")[0].split("#")[1] }}</p>
          <h3>{{ answerlist[3].questions_stem.split("```js")[0].split("##")[1] }}</h3>
          <markdown-editor v-model="content" />
          <div class="contentTopbox">
            <div>
              <p>学生答案</p>
              <span>请输入您的答案</span>
            </div>
            <div>
              <p>标准答案</p>
              <markdown-editor v-model="aswerfore" />
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
      answerlist: [],
      content: '',
      aswerfore: '',
      aswertwo: ''
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
      alert('您的成绩是' + this.score + '分')
    },
    ...mapActions({
      studentDetail: 'swaitingClass/studentDetail',
      volumeDetail: 'swaitingClass/volumeDetail'
    }),
    getdata() {
      this.volumeDetail({
        id: this.$route.query.id
      }).then(res => {
        if (res.code === 1) {
          this.data = res.data
          this.answerlist = res.data.questions
          this.imgs = this.answerlist[0].questions_stem.split('(')[1].split(')')[0]
          this.content = this.answerlist[3].questions_stem.split('promise')[1]
          this.aswerfore = this.answerlist[3].questions_answer
          this.aswertwo = this.answerlist[1].questions_answer
        }
      })
    }
  }

}
</script>
<style lang="scss">
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
          >span:nth-child(2){
            background: #87ceeb9c;
            padding: 3px 5px;
            color: #2196f3;
            border:1px solid #ccc;
            font-size: 14px;
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
.imgs{
  width: 100%;
  height: 400px;
}
.questtitle{
  color:#999;
}
</style>
