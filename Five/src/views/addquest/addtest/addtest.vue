<template>
  <div class="tinymce-container editor-container">
    <p class="addtest">{{ title }}</p>
    <div class="contentbox">
      <p class="testmesg">题目信息</p>
      <p>题干</p>
      <input v-model="queststem" type="text" placeholder="请输入题目要求，不超过20个字" class="topic">
      <p>题目主题</p>
      <markdown-editor v-model="themes" />
      <div class="testtype_select">
        <p>请选择考试类型:</p>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in testtype"
            :key="item.exam_id"
            :label="item.exam_name"
            :value="item.exam_id"
          />
        </el-select>
        <p>请选择课程类型:</p>
        <el-select v-model="value2" placeholder="请选择">
          <el-option
            v-for="item in subjecttype"
            :key="item.subject_id"
            :label="item.subject_text"
            :value="item.subject_id"
          />
        </el-select>
        <p>请选择题目类型:</p>
        <el-select v-model="value3" placeholder="请选择">
          <el-option
            v-for="item in questionTypes"
            :key="item.questions_type_id"
            :label="item.questions_type_text"
            :value="item.questions_type_id"
          />
        </el-select>
        <p>答案信息</p>
        <markdown-editor v-model="answer" />
        <p class="class-btn-box"><button class="class-btn" type="text" @click="open">提交</button> </p>
      </div>
    </div>
  </div>
</template>
<script>
import MarkdownEditor from '@/components/MarkdownEditor'

import { mapActions } from 'vuex'
export default {
  components: { MarkdownEditor },
  data() {
    return {
      title: '添加试题',
      value: '',
      value2: '',
      value3: '',
      queststem: '', // 获取题干
      themes: '', // 题目主题
      answer: '', // 答案
      testtype: [], // 考试类型-周考-月考
      subjecttype: [], // 考试课程
      questionTypes: [],
      detaildata: [],
      alllist: []
    }
  },
  mounted() {
      	this.gettesttype()
  },
  methods: {
    ...mapActions({
      list: 'questionManagement/examType', // 周考-月考
      subject: 'questionManagement/subject', // js上下
      getQuestionsType: 'questionManagement/getQuestionsType', // 手写代码
      addquestions: 'questionManagement/addquestions', // 添加考试
      alldata: 'questionManagement/condition', // 所有的数据
      updates: 'questionManagement/update'// 更新数据
    }),
    gettesttype() { // 获取对应的数据渲染列表
      this.list().then(res => {
        if (res.code === 1) {
          this.testtype = res.data
        }
        	}),
      this.subject().then(res => {
        if (res.code === 1) {
          this.subjecttype = res.data
        }
      }),
      this.getQuestionsType().then(res => {
        if (res.code === 1) {
          this.questionTypes = res.data
        }
      }),
      this.alldata().then(res => {
        if (res.code === 1) {
          this.alllist = res.data
          if (this.$route.query.id) {
            const obj = this.alllist.filter(item => item.questions_id === this.$route.query.id)[0]
           this.queststem = obj.title
            this.answer = obj.questions_answer
            this.themes = obj.questions_stem
            this.value = obj.exam_name
            this.value2 = obj.subject_text
            this.value3 = obj.questions_type_text
            this.title = '编辑试题'
          }
        }
      })
    },

    open() {
      if (this.queststem !== '' && this.answer !== '' && this.theme !== '' && this.value !== '' && this.value2 !== '' && this.value3 !== '' && this.$route.query.id === undefined) {
        this.$confirm('真的要添加吗?', '你确定要添加这道试题吗？', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.addquestions({
            'questions_type_id': this.value3,
            'questions_stem': this.queststem,
            'subject_id': this.value2,
            'exam_id': this.value,
            'user_id': 'w6l6n-cbvl6s',
            'questions_answer': this.answer,
            'title': this.queststem
          }).then(res => {
            if (res.code === 1) {
              this.$message({
                type: 'success',
                message: '添加成功!'
              })
              this.value = ''
              this.value2 = ''
              this.value3 = ''
              this.queststem = ''// 获取题干
              this.themes = '' // 题目主题
              this.answer = '' // 答案
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消添加'
          })
        })
      } else if (this.$route.query.id && this.queststem !== '' && this.answer !== '' && this.theme !== '' && this.value !== '' && this.value2 !== '' && this.value3 !== '') {
        this.$confirm('真的要更改吗?', '你确定要更改这道试题吗？', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.updates({
            'questions_id': this.$route.query.id,
            'questions_type_id': this.value3,
            'questions_stem': this.queststem,
            'subject_id': this.value2,
            'exam_id': this.value,
            'questions_answer': this.answer,
            'title': '编辑试题'
          })
          this.$message({
            type: 'success',
            message: '更改成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消更改'
          })
        })
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.tinymce-container {
  position: relative;
  line-height: normal;
}
.tinymce-container>.mce-fullscreen {
  z-index: 10000;
}
.tinymce-textarea {
  visibility: hidden;
  margin: 0 20px;
  z-index: -1;
}
#areaOne{
	position: absolute;
	width: 96%;
	left: 22px;
    top: 330px;
	border: 0;
	outline: none;
	resize:none;
}
#areaTwo{
    position: absolute;
	width: 96%;
	left: 22px;
    top: 1225px;
	border: 0;
	outline: none;
	resize:none;
}
.editor-custom-btn-container {
  position: absolute;
  right: 4px;
  top: 4px;
  /*z-index: 2005;*/
}
.fullscreen .editor-custom-btn-container {
  z-index: 10000;
  position: fixed;
}
.editor-upload-btn {
  display: inline-block;
}
.editor-container{
  width: 100%;
}
.addtest{
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  margin: 0;
  padding:0 20px;
}
.topic{
  width:300px;
  padding: 10px;
  outline: none;
  margin: 10px 0;
}
.contentbox{
  background: #fff;
  padding: 20px;
  border-radius: 20px;
  margin: 0 20px;
  position: relative;
}
.testtype_select{
  >p{
    height: 40px;
    line-height:40px;
  }
  >select{
    width:180px;
    padding: 3px 8px;
  }
}
.class-btn-box{
  width: 100%;
  display: flex;
  margin-bottom: 25px;
  .class-btn{
    padding: 10px 30px;
    display: block;
    background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
    border: none;
    color: #fff;
    border-radius: 5px;
  }
}
</style>
