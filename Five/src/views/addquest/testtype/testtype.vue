<template>
  <div class="class-container">
    <p class="testtype">试题分类</p>
    <div class="class-content">
      <div class="class-btn-box">
        <el-button class="class-btn" type="text" @click="open">添加类型</el-button>
      </div>
      <div class="class-body">
        <table>
          <colgroup>
            <col>
            <col>
            <col>
          </colgroup>
          <thead>
            <tr>
              <th>
                <div>班级名</div>
              </th>
              <th>
                <div>课程名</div>
              </th>
              <th>
                <div>操作</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in list" :key="item.questions_type_id">
              <td>
                <span>{{ item.questions_type_id }}</span>
              </td>
              <td>
                <span>{{ item.questions_type_text }}</span>
              </td>
              <td>
                <span @click="del(item.questions_type_id)">删除</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.getlist()
  },
  methods: {
    ...mapActions({
      getQuestionsType: 'questionManagement/getQuestionsType',
      insertQuestionsType: 'questionManagement/insertQuestionsType',
      deltype: 'questionManagement/deltype'
    }),
    getlist() {
      this.getQuestionsType().then(res => {
        if (res.code === 1) {
          this.list = res.data
        }
      })
    },
    open() {
      this.$prompt('', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPlaceholder: '请输入类型名称',
        title: '创建新类型',
        center: true
      }).then(({ value }) => {
        if (value) {
          this.insertQuestionsType({
            text: value,
            sort: this.list.length + 1
          }).then(res => {
            this.getlist()
            this.$message({
              type: 'success',
              message: '你的类型是: ' + value
            })
          })
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    },
    del(id) {
      this.$confirm('此操作将永久删除该类型, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deltype({
          'id': id
        }).then(res => {
          if (res.code === 1) {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            this.getlist()
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style lang='scss'>
.testtype{
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  margin: 0;
  padding:0 20px;
}
.app-main{
  background: #f0f2f5;
}
.class-container{
  width: 100%;
  height: 100%;
  padding: 0px 24px 24px;
  box-sizing: border-box;
  h2{
    padding: 20px 0px;
    margin-top: 10px;
    font-weight: normal;
    font-size: 1.5em;
  }
  .class-content{
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    background: #fff;
    padding: 24px;
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
    .class-body{
      width: 100%;
      height: 100%;
      display: flex;
      font-size: 14px;
      table{
        width: 100%;
      }
      thead{
        width: 100%;
        background: #f4f7f9;
      }
      thead tr{
        transition: all 0.3s, height 0s;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        th{
          height: 52px;
          line-height: 26px;
          padding: 16px 16px;
          flex: 7;
          border-bottom: 1px solid #e8e8e8;
          div{
            text-align: left;
            color: rgba(0, 0, 0, 0.85);
            font-weight: 500;
          }
        }
        th:nth-child(1){
          flex: 3;
        }
        th:nth-child(3){
          flex: 1;
        }
      }
      tbody>tr{
        transition: all 0.3s, height 0s;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #ccc;
        td{
          height: 52px;
          line-height: 26px;
          padding: 16px 16px;
          flex: 7;
          border-bottom: 1px solid #e8e8e8;
          span{
            text-align: left;
            color: rgba(0, 0, 0, 0.85);
            font-weight: 500;
          }
        }
        td:nth-child(1){
          flex: 3;
        }
        td:nth-child(3){
          flex: 1;
        }
        td:last-child{
          span{
            color: #0139fd;
          }
        }
      }
    }
  }
}
tr:hover{
      background: #f7f9ff;
  }
</style>
