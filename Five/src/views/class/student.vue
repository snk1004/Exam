<template>
  <div class="student-container">
    <h2>学生管理</h2>
    <div class="student-content">
      <div class="student-btn-box">
        <div class="form-item-children">
          <el-input v-model="input" placeholder="输入学生姓名" />
        </div>
        <div class="form-item-room select-box">
          <!-- <span>请选择教室号</span> -->
          <el-select v-model="roomValue" placeholder="请选择教室号">
            <el-option
              v-for="(item,index) in room"
              :key="index"
              :label="item.room_text"
              :value="item.room_id"
            />
          </el-select>
        </div>
        <div class="form-item-class select-box">
          <!-- <span>班级名</span> -->
          <el-select v-model="classValue" placeholder="班级名">
            <el-option
              v-for="item in classname"
              :key="item.grade_id"
              :label="item.grade_name"
              :value="item.grade_id"
            />
          </el-select>
        </div>
        <div class="form-item-search">
          <el-button class="student-btn" type="primary" @click="Search">搜索</el-button>
        </div>
        <div class="form-item-reset">
          <el-button class="student-btn" type="primary" @click="Reset">重置</el-button>
        </div>
      </div>
      <div class="student-body">
        <table>
          <colgroup>
            <col>
            <col>
            <col>
            <col>
            <col>
            <col>
          </colgroup>
          <thead>
            <tr>
              <th>
                <div>姓名</div>
              </th>
              <th>
                <div>学号</div>
              </th>
              <th>
                <div>班级</div>
              </th>
              <th>
                <div>教室</div>
              </th>
              <th>
                <div>密码</div>
              </th>
              <th>
                <div>操作</div>
              </th>
            </tr>
          </thead>
          <div v-if="!dataList.length" class="noData">
            <span>暂无数据</span>
          </div>
          <tbody>
            <tr v-for="(item,index) in dataList.slice((currpage - 1) * pagesize, currpage * pagesize)" :key="index">
              <td>
                <span>{{ item.student_name }}</span>
              </td>
              <td>
                <span>{{ item.subject_text }}</span>
              </td>
              <td>
                <span>{{ item.grade_name }}</span>
              </td>
              <td>
                <span>{{ item.room_text }}</span>
              </td>
              <td>
                <span>{{ item.student_pwd }}</span>
              </td>
              <td>
                <span>
                  <li class="btn-take" @click="DeleteStu(item)">删除</li>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="student-pagination">
          <el-pagination
            background
            :total="dataList.length"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
          />
          <!--:page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400"> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      dataList: [],
      total: 24,
      pagesize: 10,
      currpage: 1,
      // input
      input: '',
      // 所有教室
      room: [],
      roomValue: '',
      classValue: '',
      // 所有班级
      classname: [],
      // 存放筛选数据
      newList: [],
      // 新的数据
      newData: '',
      // 显示隐藏 暂无数据
      showNodata: ''
    }
  },
  mounted() {
    this.getAlldata().then(res => {
      if (res.code === 1) {
        this.dataList = res.data
        this.newData = res.data
        const num = this.dataList.length / this.pagesize
        this.total = Math.ceil(num)
      }
    })
    this.getAllRoom().then(res => {
      if (res.code === 1) {
        this.room = res.data
      }
    })
    this.getgrade().then(res => {
      if (res.code === 1) {
        this.classname = res.data
      }
    })
  },
  methods: {
    ...mapActions({
      getAlldata: 'class/getAllstudent',
      getAllRoom: 'class/getAllRoom',
      getgrade: 'class/getgrade',
      // 更新学生信息
      resetStudent: 'class/resetStudent',
      // 删除学生
      deleteStudent: 'class/deleteStudent'
    }),
    // 获取 渲染数据
    getRender() {
      this.getAlldata().then(res => {
        if (res.code === 1) {
          this.dataList = res.data
        }
      })
    },
    getList() {
      // 获取数据
      this.getAlldata().then(res => {
        if (res.code === 1) {
          this.room = res.data
        }
      })
    },
    // 删除学生
    DeleteStu(data) {
      this.deleteStudent({
        id: data.student_id
      })
      this.getAlldata().then(res => {
        if (res.code === 1) {
          this.dataList = res.data
        }
      })
    },
    // 筛选
    Search() {
      const nameList = [] // 姓名暂存数组
      const roomList = [] // 教室号暂存数组
      const classList = [] // 班级暂存数组
      this.newData.forEach(item => {
        // 对空判断
        if (this.input === '' && this.roomValue === '' && this.classValue === '') {
          this.newList = this.newData
        } else {
          // 筛选 姓名
          if (item.student_name === this.input) {
            nameList.push(item)
            this.newList = nameList
          }
          // 筛选 教室号
          if (this.roomValue === item.room_id) {
            roomList.push(item)
            if (this.input !== '' && roomList.length > 0) {
              roomList.forEach(it => {
                if (it.student_name === this.input) {
                  roomList.push(it)
                  this.newList = []
                  this.newList.push(it)
                }
              })
            }
            this.newList = roomList
          }
          // 筛选 班级
          if (this.classValue === item.grade_id) {
            classList.push(item)
            this.newList = classList
          }
        }
      })
      this.dataList = this.newList
      this.newList = []
    },
    // 重置
    Reset() {
      this.input = ''
      this.roomValue = ''
      this.classValue = ''
    },
    handleCurrentChange(cpage) {
      this.currpage = cpage
    },
    handleSizeChange(psize) {
      this.pagesize = psize
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
//暂无数据
.noData {
  width: 100%;
  height: 150px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.student-container {
  width: 100%;
  height: 100%;
  padding: 0px 24px 24px;
  box-sizing: border-box;
  h2 {
    padding: 20px 0px;
    margin-top: 10px;
    font-weight: normal;
  }
  .student-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    background: #fff;
    padding: 24px;
    .student-btn-box {
      width: 100%;
      display: flex;
      align-items: center;
      margin-bottom: 25px;
      .form-item-children {
        input {
          margin-right: 16px;
          width: 180px;
          height: 32px;
          padding: 4px 11px;
          box-sizing: border-box;
          border: 1px solid #d9d9d9;
        }
      }
      .select-box {
        font-size: 14px;
        margin-right: 16px;
      }
      .student-btn {
        width: 110px;
        background: linear-gradient(-90deg, #4e75ff, #0139fd) !important;
        margin-right: 16px;
      }
    }
    .student-body {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      font-size: 14px;
      table {
        width: 100%;
      }
      .student-pagination {
        display: flex;
        width: 100%;
        height: 50px;
        margin: 16px 10px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style: none;
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
      tbody tr:hover {
        background: #e6efff !important;
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
          color: rgba(0, 0, 0, 0.65);
          span {
            text-align: left;
            font-weight: 500;
            display: flex;
            list-style: none;
            color: rgba(0, 0, 0, 0.65);
          }
        }
      }
    }
  }
}
</style>

