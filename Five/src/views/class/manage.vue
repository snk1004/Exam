<template>
  <div class="class-container">
    <h2>班级管理</h2>
    <div class="class-content">
      <div class="class-btn-box">
        <el-button class="class-btn" type="primary" @click="dialogFormVisible = true">
          <i class="el-icon-plus" /> 添加班级
        </el-button>
        <el-dialog title="添加班级" :visible.sync="dialogFormVisible">
          <el-form ref="ruleForm" :model="ruleForm" :rules="rules" class="demo-ruleForm">
            <el-form-item label="班级名:" prop="name">
              <el-input v-model="ruleForm.name" />
            </el-form-item>
            <el-form-item label="教室号:" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择活动区域" style="width:100%">
                <el-option label="区域一" value="shanghai" />
                <el-option label="区域二" value="beijing" />
              </el-select>
            </el-form-item>
            <el-form-item label="课程名:" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择活动区域" style="width:100%">
                <el-option label="区域一" value="shanghai" />
                <el-option label="区域二" value="beijing" />
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
        <div style="margin: 20px;" />
      </div>
      <div class="class-body">
        <table>
          <colgroup>
            <col>
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
                <div>教室号</div>
              </th>
              <th>
                <div>操作</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in list" :key="index">
              <td>
                <span>1701B</span>
              </td>
              <td>
                <span>node基础</span>
              </td>
              <td>
                <span>34303</span>
              </td>
              <td>
                <span>
                  <li style="padding-right:2px" @click="Reset">修改</li>|
                  <li style="padding-left:2px" @click="Delete">删除</li>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {
      dataList: [],
      list: [0, 0, 0, 0, 0, 0, 0],
      // form表单 弹框
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: true,
        type: [],
        resource: '',
        desc: ''
      },
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ]
      }
    }
  },
  computed: {
    ...mapState({
      // gradeList: state => state.class.gradeList
    })
  },
  created() {
    // console.log(this.getgrade())
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      // getgrade: 'class/getgrade'
    }),
    // 添加班级
    addClass() {

    },
    // 修改
    Reset() {
      this.$prompt('班级名', '教室号', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
        // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        // inputErrorMessage: '邮箱格式不正确'
      })
        .then(({ value }) => {
          this.$message({
            type: 'success',
            message: '添加班级成功'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
    },
    // 删除
    Delete() {}
  }
}
</script>

<style lang='scss'>
.app-main {
  background: #f0f2f5;
}
.class-container {
  width: 100%;
  height: 100%;
  padding: 0px 24px 24px;
  box-sizing: border-box;
  h2 {
    padding: 20px 0px;
    margin-top: 10px;
    font-weight: normal;
    font-size: 1.5em;
  }
  .class-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    background: #fff;
    padding: 24px;
    .class-btn-box {
      width: 100%;
      display: flex;
      margin-bottom: 25px;
      .class-btn {
        width: 158px;
        height: 40px;
        background: linear-gradient(-90deg, #4e75ff, #0139fd) !important;
      }
    }
    .class-body {
      width: 100%;
      height: 100%;
      display: flex;
      font-size: 14px;
      table {
        width: 100%;
      }
      thead {
        width: 100%;
        background: #f4f7f9;
      }
      thead tr {
        transition: all 0.3s, height 0s;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        th {
          height: 52px;
          line-height: 26px;
          padding: 16px 16px;
          flex: 1;
          border-bottom: 1px solid #e8e8e8;
          div {
            text-align: left;
            color: rgba(0, 0, 0, 0.85);
            font-weight: 500;
          }
        }
      }
      tbody tr {
        transition: all 0.3s, height 0s;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        td {
          height: 52px;
          line-height: 26px;
          padding: 16px 16px;
          flex: 1;
          border-bottom: 1px solid #e8e8e8;
          span {
            text-align: left;
            color: rgba(0, 0, 0, 0.85);
            font-weight: 500;
            display: flex;
            list-style: none;
            color: #000;
            li {
              color: #0139fd;
            }
          }
        }
      }
    }
  }
}
</style>

