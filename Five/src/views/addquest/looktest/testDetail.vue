<template>
  <div class="box">
    <p class="testtitle">试题详情</p>
    <div class="content">
      <div>
        <p class="testusername">出题人：<span>{{ username }}</span></p>
        <h6 class="title">题目信息</h6>
        <p class="minlist">
          <span>{{questions_type_text}}</span>
          <span>{{subject_text}}</span>
          <span>{{exam_name}}</span>
        </p>
        <p>{{title}}</p>
        <markdown-editor v-model="content" />
      </div>
      <div>
        <p>答案信息</p>
        <markdown-editor v-model="aswer" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import MarkdownEditor from './Markdown'
export default {
  components: { MarkdownEditor },
  data() {
    return {
      datas: [],
      content: '',
      aswer: '',
      username: '',
      questions_type_text:'',
      subject_text:'',
      exam_name:'',
      title:''
    }
  },
  mounted() {
    this.getdatas()
  },
  methods: {
    ...mapActions({
      conditions: 'questionManagement/condition' // 所有的数据
    }),
    getdatas() {
      this.conditions().then(res => {
        if (res.code === 1) {
          this.datas = res.data
          const obj = (this.datas.filter(item => item.questions_id === this.$route.query.id))[0]
          this.content = obj.questions_stem
          this.username = obj.user_name
          this.aswer = obj.questions_answer
          this.questions_type_text=obj.questions_type_text;//代码阅读
          this.subject_text=obj.subject_text;//node基础
          this.exam_name =obj.exam_name;//周考一
          this.title=obj.title
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
    background: #eee;
    padding: 0 20px;
    .testtitle{
        height: 50px;
        font-size: 18px;
        line-height: 50px;
    }
}
.content{
    width: 100%;
    height: 100%;
    display: flex;
    >div{
        flex: 1;
        margin: 0 5px;
        background: #fff;
        border-radius: 20px;
        padding: 15px;
    }
}
.testusername{
    font-size: 14px;
    font-weight: normal;
    margin: 0;
    padding: 10px 0;
}
.title{
    font-size: 16px;
    font-weight: normal;
    margin: 0;
    padding: 10px 0;
}
.minlist{
  font-size: 14px;
  >span{
    padding: 3px 5px;
  }
  >span:nth-child(1){
    color: #1890ff;
    background: #e6f7ff;
    border-color: #91d5ff;
  }
  >span:nth-child(2){
    color: #2f54eb;
    background: #f0f5ff;
    border-color: #2f54eb;
  }
  >span:nth-child(3){
    color: #fa8c16;
    background: #fff7e6;
    border-color: #fa8c16;
  }
}
// .tui-editor-contents pre{
//     white-space: initial!important
// }

</style>
