<template>
  <div class="bigbox">
    <p class="Awaitingclass">待批班级</p>
    <div class="tablebox">
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
              <div>课程名称</div>
            </th>
            <th>
              <div>阅卷状态</div>
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
          <tr v-for="item in alldata" :key="item.grade_id">
            <td>
              <span>{{ item.grade_name }}</span>
            </td>
            <td>
              <span>{{ item.subject_text }}</span>
            </td>
            <td>
              <span>未阅</span>
            </td>
            <td>
              <span>{{ item.room_text }}</span>
            </td>
            <td>
              <span @click="change($event,item.grade_id,item.grade_name)">{{ item.operation }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="pages">
      <el-pagination
        background
        layout="total, sizes, prev, pager, next"
        :current-page.sync="currentPage3"
        :total="len"
        :page-sizes="[5, 8, 9, 10]"
        :page-size="6"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      alldata: [],
      len: 0,
      limit: 5,
      currentPage3: 1
    }
  },
  mounted() {
    this.getDate(this.limit, 1)
  },
  methods: {
    ...mapActions({
      list: 'swaitingClass/paperDetails',
      studentDetail: 'swaitingClass/studentDetail'
    }),
    getDate(limit, page) {
      this.list().then(res => {
        if (res.code === 1) {
          this.alldata = res.data.slice((page - 1) * limit, limit * page)
          this.len = res.data.length
          for (let i = 0; i < this.alldata.length; i++) {
            this.alldata[i].operation = '批卷'
          }
        }
      })
    },
    change(e, gradeid, gradename) {
      if (e.target.innerHTML === '批卷') {
        this.studentDetail({
          gradeid: gradeid
        }).then(res => {
          if (res.code === 1) {
            this.$router.push(`/markingmanagement/awaitinglist?grade_id=${gradeid}&grad=${gradename}`)
          }
        })
      }
    },
    handleCurrentChange(val) {
      this.getDate(this.limit, val)
    },
    handleSizeChange(val) {
      this.limit = val
      this.getDate(val, 1)
      this.currentPage3 = 1
    }
  }

}
</script>

<style lang="scss" scoped>
    .bigbox{
      width: 100%;
      padding: 0 30px;
    }
    .Awaitingclass{
      margin-bottom: 0.5em;
      color: rgba(0, 0, 0, 0.85);
      font-size: 20px;
      padding: 10px 0;
    }
    .tablebox{
      width:100%;
      background: #fff;
      padding:30px 30px;
      border-radius: 20px;
    }
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
          flex: 1;
          border-bottom: 1px solid #e8e8e8;
          div{
            text-align: left;
            color: rgba(0, 0, 0, 0.85);
            font-weight: 500;
          }
        }
      }
      tbody>tr{
        transition: all 0.3s, height 0s;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        td{
          height: 52px;
          line-height: 26px;
          padding: 16px 16px;
          flex: 1;
          border-bottom: 1px solid #e8e8e8;
          span{
            text-align: left;
            color: #666;
            font-size: 14px;
            display: inline-block;
          }
        }
        td:last-child>span{
          color: blue;
        }
      }
tr:hover{
      background: #f7f9ff;
  }
  .pages{
    float: right;
    margin-top: 20px;
  }
</style>

