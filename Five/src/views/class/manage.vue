/* eslint-disable no-mixed-spaces-and-tabs */
<template>
  <div class="class-container">
    <h2>班级管理</h2>
    <div class="class-content">
      <div class="class-btn-box">
        <!-- 添加班级 -->
        <el-button class="class-btn" type="primary" @click="dialogFormVisible = true">
          <i class="el-icon-plus" /> 添加班级
        </el-button>
        <!-- 添加班级弹窗 -->
        <el-dialog title="添加班级" :visible.sync="dialogFormVisible">
          <el-form ref="ruleForm" :model="ruleForm" class="demo-ruleForm">
            <el-form-item label="班级名:" prop="name">
              <el-input v-model="ruleForm.name" />
            </el-form-item>
            <el-form-item label="教室号:" prop="region">
              <el-select v-model="ruleForm.roomRegion" placeholder="请选择教室号" style="width:100%">
                <el-option
                  v-for="(item,index) in roomList"
                  :key="index"
                  :label="item.room_text"
                  :value="item.room_id"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="课程名:" prop="region">
              <el-select v-model="ruleForm.proRegion" placeholder="课程名" style="width:100%">
                <el-option
                  v-for="(item,index) in proList"
                  :key="index"
                  :label="item.subject_text"
                  :value="item.subject_id"
                />
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="addRoomConfirm">确 定</el-button>
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
            <tr v-for="(item,index) in dataList" :key="index">
              <td>
                <span>{{ item.grade_name }}</span>
              </td>
              <td>
                <span>{{ item.subject_text }}</span>
              </td>
              <td>
                <span>{{ item.room_text }}</span>
              </td>
              <td>
                <span>
                  <li class="btn-take" tyle="padding-right:2px" @click="Reset(item.grade_id,item.room_text,item.subject_text)">修改 </li> <b class="stri">|</b>
                  <li class="btn-take" tyle="padding-left:2px" @click="Delete(item.grade_id)"> 删除</li>
                </span>
                <!-- 修改班级弹窗 -->
                <el-dialog title="修改班级" :visible.sync="dialogFormReset">
                  <el-form ref="ruleForm" :model="ruleForm" class="demo-ruleForm">
                    <el-form-item label="班级名:" prop="name">
                      <el-input v-model="ruleForm.name" label="班级名" :disabled="true" :placeholder="ruleForm.name" />
                    </el-form-item>
                    <el-form-item label="教室号:" prop="region">
                      <el-select v-model="ruleForm.roomRegion" placeholder="请选择教室号" style="width:100%">
                        <el-option
                          v-for="(it,ind) in roomList"
                          :key="ind"
                          :label="it.room_text"
                          :value="it.room_id"
                        />
                      </el-select>
                    </el-form-item>
                    <el-form-item label="课程名:" prop="region">
                      <el-select v-model="ruleForm.proRegion" placeholder="课程名" style="width:100%">
                        <el-option
                          v-for="(it,ind) in proList"
                          :key="ind"
                          :label="it.subject_text"
                          :value="it.subject_id"
                        />
                      </el-select>
                    </el-form-item>
                    <el-form-item>
                      <el-button @click="dialogFormVisible = false">取 消</el-button>
                      <el-button type="primary" @click="resetRoomConfirm">确 定</el-button>
                    </el-form-item>
                  </el-form>
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
import { mapState, mapMutations, mapActions } from 'vuex'
// import { log } from 'util'

export default {
  data() {
    return {
      // 表格数据
      dataList: [],
      // 教室
      roomList: [],
      // 课程
      proList: [],
      // 提交信息 开关
      mesFlag: false,
      // 班级id
      gradeID: '',
      // 删除id
      delInd: '',
      // form表单 弹框
      // <<-------
      dialogFormVisible: false,
      dialogFormReset: false,
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
        roomRegion: '',
        proRegion: '',
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
      // ------->>
    }
  },
  computed: {
    ...mapState({})
  },
  created() {

  },
  mounted() {
    this.getData()
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      getgrade: 'class/getgrade',
      getroom: 'class/getroom',
      getpro: 'class/getsubject',
      addroom: 'class/addroom',
      // 更新信息
      gradeUpdata: 'class/gradeUpdata',
      // 删除教室
      gradeDelete: 'class/gradeDelete'
    }),
    // 添加班级
    addRoomConfirm() {
      this.dataList.forEach(item => {
        // console.log(this.ruleForm.roomRegion, this.ruleForm.proRegion, this.ruleForm.name)
        if (this.ruleForm.roomRegion === '' || this.ruleForm.proRegion === '' || this.ruleForm.name === '') {
          this.$message.error('请输入信息')
        } else if (this.ruleForm.name === item.grade_name) {
          this.$message.error('已有此班级,请重新输入')
        } else {
          this.mesFlag = true
        }
      })
      if (this.mesFlag) {
        this.addroom({
          'grade_name': this.ruleForm.name,
          'room_id': this.ruleForm.roomRegion,
          'subject_id': this.ruleForm.proRegion
        })
        this.getgrade().then(res => {
          if (res.code === 1) {
            this.dataList = res.data
          }
        })
        this.getgrade().then(res => {
          if (res.code === 1) {
            this.dataList = res.data
          }
        })
        this.ruleForm.roomRegion = ''
        this.ruleForm.proRegion = ''
        this.ruleForm.name = ''
        this.dialogFormVisible = false
      }
    },
    // 修改
    Reset(gradeId, room, sub) {
      this.ruleForm.roomRegion = room
      this.ruleForm.proRegion = sub
      this.gradeID = gradeId
      this.dialogFormReset = true
      this.dataList.forEach(item => {
        if (item.grade_id === this.gradeID) {
          this.ruleForm.name = item.grade_name
        }
      })
    },
    // 更新
    resetRoomConfirm() {
      this.dataList.forEach(item => {
        if (this.ruleForm.roomRegion === '' || this.ruleForm.proRegion === '') {
          this.$message.error('请输入信息')
        } else {
          this.mesFlag = true
        }
      })
      if (this.mesFlag) {
        this.gradeUpdata({
          'grade_id': this.gradeID,
          'grade_name': this.ruleForm.name,
          'subject_id': this.ruleForm.proRegion,
          'room_id': this.ruleForm.roomRegion
        })
        this.getgrade().then(res => {
          if (res.code === 1) {
            this.dataList = res.data
          }
        })
        this.ruleForm.roomRegion = ''
        this.ruleForm.proRegion = ''
        this.ruleForm.name = ''
        this.dialogFormVisible = false
      }
      this.dialogFormReset = false
    },
    // 删除
    Delete(ind) {
      this.delInd = ind
      this.gradeDelete({
        'grade_id': this.delInd
      })
      this.getgrade().then(res => {
        if (res.code === 1) {
          this.dataList = res.data
        }
      })
    },
    getData() {
      this.getgrade().then(res => {
        if (res.code === 1) {
          this.dataList = res.data
        }
      })
      this.getroom().then(res => {
        if (res.code === 1) {
          this.roomList = res.data
        }
      })
      this.getpro().then(res => {
        if (res.code === 1) {
          this.proList = res.data
        }
      })
    }
  }
}
</script>

<style lang='scss'>
.app-main {
  background: #f0f2f5;
}
.btn-take{
  cursor: pointer;
}
.stri{
  font-weight: normal;
  margin: 0 2px;
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
            font-weight: 500;
            display: flex;
            list-style: none;
            color: rgba(0, 0, 0, 0.65);
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

