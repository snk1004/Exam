<template>
  <div class="classroom-container">
    <h2>教室管理</h2>
    <div class="classroom-content">
      <div class="classroom-btn-box">
        <el-button class="classroom-btn" type="primary" @click="dialogFormVisible = true">
          <i class="el-icon-plus" /> 添加教室
        </el-button>
      </div>
      <el-dialog title="添加教室" :visible.sync="dialogFormVisible">
        <el-form ref="ruleForm" :model="ruleForm" :rules="rules" class="demo-ruleForm">
          <el-form-item label="教室号:" prop="name">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item>
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addConfirm">确 定</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <div class="classroom-body">
        <table>
          <colgroup>
            <col>
            <col>
          </colgroup>
          <thead>
            <tr>
              <th>
                <div>教室号</div>
              </th>
              <th>
                <div>操作</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in dataList" :key="item.room_id">
              <td>
                <span>{{ item.room_text }}</span>
              </td>
              <td>
                <span class="btn-take" @click="DeleteRoom">删除</span>
                <el-dialog
                  title="提示"
                  :visible.sync="dialogVisible"
                  width="30%"
                  :before-close="handleClose"
                >
                  <span>确定要删除此教室吗？</span>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                  </span>
                </el-dialog>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      dataList: [],
      // form表单 弹框
      dialogFormVisible: false,
      // 删除弹框
      dialogVisible: false,
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
          { required: true, message: '请输入教室号', trigger: 'blur' },
          { min: 5, max: 5, message: '长度在必须是 5 个字符', trigger: 'blur' }
        ]
        // region: [
        //   { required: true, message: '请选择活动区域', trigger: 'change' }
        // ]
      }
    }
  },
  computed: {
    ...mapState({})
  },

  mounted() {
    this.getAllRoom().then(res => {
      if (res.code === 1) {
        this.dataList = res.data
      }
    })
  },
  methods: {
    ...mapActions({
      getAllRoom: 'class/getAllRoom'
    }),
    addConfirm() {
      console.log(this.ruleForm.name)
    },
    DeleteRoom() {
      this.dialogVisible = true
    },
    // 删除弹框
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>

<style lang='scss'>
.btn-take {
  cursor: pointer;
}
.app-main {
  background: #f0f2f5;
}
.classroom-container {
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
  .classroom-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    background: #fff;
    padding: 24px;
    .classroom-btn-box {
      width: 100%;
      display: flex;
      margin-bottom: 25px;
      .classroom-btn {
        width: 158px;
        height: 40px;
        background: linear-gradient(-90deg, #4e75ff, #0139fd) !important;
      }
    }
    .classroom-body {
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
          color: rgba(0, 0, 0, 0.65);
          border-bottom: 1px solid #e8e8e8;
          span {
            text-align: left;
            color: rgba(0, 0, 0, 0.85);
            font-weight: 500;
          }
        }
      }
    }
  }
}
</style>

