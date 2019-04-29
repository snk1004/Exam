<template>
  <div class="bigbox">
    <div class="testtype_select">
      <div>
      <span class="status">状态:</span>
      <el-select v-model="value" placeholder="">
        <el-option
          v-for="item in statuslist"
          :key="item.exam_id"
          :label="item.exam_name"
          :value="item.exam_id"
        />
      </el-select>
      </div>
      <div>
        <span class="status">班级:</span>
      <el-select v-model="value2" placeholder="">
        <el-option
          v-for="item in classlist"
          :key="item.questions_type_id"
          :label="item.grade_name"
          :value="item.grade_name"
        />
      </el-select>
      </div>
      <p>
      <button @click="searchs()">查询</button>

      </p>
    </div>
    <div class="tablebox">
      <table>
        <colgroup>
          <col>
          <col>
          <col>
        </colgroup>
        <thead>
          <tr>
            <th v-for="item in titlelists" :key="item.id">
              <div>{{item.title}}</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in list" :key="index">
            <td>
              <span>{{ title }}</span>
            </td>
            <td>
              <span>{{ item.student_name }}</span>
            </td>
            <td>
              <span>{{ item.status===0?'未阅':'已阅' }}</span>
            </td>
            <td>
              <span>{{ item.start_time}}</span>
            </td>
            <td>
              <span>{{ item.end_time}}</span>
            </td>
            <td>
              <span>成材率</span>
            </td>
            <td>
              <span @click="pijuan(item.exam_student_id)">批卷</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import moment from "moment"
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      list: [],
      title: '',
      value: '',
      value2: '',
      classlist: [],
      statuslist: [],
      titlelists:[{
        title:'班级',
        id:10
      },{
        title:'姓名',
        id:11
      },{
        title:'阅卷状态',
        id:12
      },{
        title:'开始时间',
        id:13
      },{
        title:'结束时间',
        id:14
      },{
        title:'成材率',
        id:15
      },{
        title:'操作',
        id:16
      }]
    }
  },
  mounted() {
    if (this.$route.query.grad) { // 把传过来的班级名赋值渲染
      this.title = this.$route.query.grad
    }
    this.getdata()// 调用回去数据
  },
  methods: {
    ...mapActions({
      studentDetail: 'swaitingClass/studentDetail',
      datas: 'swaitingClass/paperDetails'
    }),
    getdata() {
      this.studentDetail({
        gradeid: this.$route.query.grade_id
      }).then(res => {
        if (res.code === 1) {
          res.exam.map(item=>{
            item.start_time=moment(item.start_time*1).format('YYYY-MM-DD HH:MM:SS')
            item.end_time=moment(item.end_time*1).format('YYYY-MM-DD HH:MM:SS')
          })
          this.list = res.exam
        }
      })
      this.datas().then(res => {
        if (res.code === 1) {
          this.classlist = res.data
        }
      })
    },
    searchs() {
      console.log(this.value2)
    },
    pijuan(studid) {
      this.$router.push(`/markingmanagement/volume?id=${studid}`)
    }
  }
}
</script>
<style lang="scss" scoped>
.bigbox{
  padding: 0 30px;
}
.tablebox{
      width:100%;
      background: #fff;
      padding:30px 30px;
      border-radius: 20px;
      margin-top: 20px;
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
         th:nth-child(4){
          flex: 2;
        }
        th:nth-child(5){
          flex: 2;
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
        td:nth-child(4){
          flex: 2;
        }
        td:nth-child(5){
          flex: 2;
        }
        td:last-child>span{
          color: blue;
        }
      }
  tr:hover{
    background: #f7f9ff;
  }
  .testtype_select{
    padding: 30px 0;
    background: #fff;
    border-radius: 20px;
    display: flex;
    >div{
      flex: 5;
      display: flex;
      align-items: center;
      justify-content: center;
      >span{
        margin-right: 10px;
      }
      >select{
      height: 35px;
      margin-right: 20px;
    }
    }
    p{
      flex: 6;
        >button{
        flex:6;
        display: inline-block;
        padding: 8px 35px;
        background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
        border: none;
        color: #fff; 
        border-radius: 5px;
        margin-left: 20px;
      }
    }
}
</style>
