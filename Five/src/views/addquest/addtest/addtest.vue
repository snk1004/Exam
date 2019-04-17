<template>
  <div class="tinymce-container editor-container">
    <p class="addtest">添加试题</p>
    <div class="contentbox">
      <p class="testmesg">题目信息</p>
      <p>题干</p>
      <input type="text" placeholder="请输入题目要求，不超过20个字" class="topic">
      <p>题目主题</p>
      <editorImage color="#1890ff" class="editor-upload-btn"/>
      <div class="testtype_select">
        <p>请选择考试类型:</p>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <p>请选择课程类型:</p>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <p>请选择题目类型:</p>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <p>答案信息</p>
        <editorImage color="#1890ff" class="editor-upload-btn"/>
        <p class="class-btn-box"><button class="class-btn" type="text" @click="open">提交</button> </p>
      </div>
    </div>
  </div>
</template>
<script>
import editorImage from '../../../components/Tinymce'
export default {
  data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
  methods: {
    open() {
      this.$confirm('真的要添加吗?', '你确定要添加这道试题吗？', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.$message({
          type: 'success',
          message: '添加成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消添加'
        });
      });
    }
  },
  components: { editorImage }
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
  background: #eee;
  width: 100%;
}
.addtest{
  height: 60px; 
  line-height: 60px;
  font-size: 20px; 
  margin: 0;
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
