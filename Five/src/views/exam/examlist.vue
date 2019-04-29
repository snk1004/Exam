<template>
  <div class="examlist">
    <h3>
      试卷列表
    </h3>
    <div class="ant-layout-top">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="考试类型">
          <el-select v-model="type" placeholder="请选择" @change="healeType">
            <el-option
              v-for="item in examTypes"
              :key="item.exam_name"
              :label="item.exam_name"
              :value="item.exam_name"
/>
          </el-select>
        </el-form-item>
        <el-form-item label="课程">
          <el-select v-model="course" placeholder="请选择" @change="healeCourses">
            <el-option
              v-for="item in courses"
              :key="item.subject_text"
              :label="item.subject_text"
              :value="item.subject_text"
/>
          </el-select>
        </el-form-item>
        <el-form-item size="medium">
          <el-button type="primary" size="medium" @click="onSubmit">查询</el-button>
          <el-button type="primary" size="medium" @click="ExportExcel">导出表格</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="ant-layout-content">
      <div class="style_container__2hI6B">
        <div class="style_tool__31xLZ">
          <h4>试卷列表</h4>
          <div>
            <span
              v-for="(item,index) in timer"
              :key="item.id"
              :class="TimerIndex==index?'active':null"
              @click="headleTimer(index)"
            >{{ item.title }}</span>
          </div>
        </div>
      </div>
      <div class="ant-table-body">
        <el-table
          :data="list"
          style="width: 100%"
        >
          <el-table-column
            label="试卷信息"
            style="width: 2.0em"
          >
            <template slot-scope="scope">
              <p class="examName">
                <span style="margin-left: 10px">{{ scope.row.title }}</span>
              </p>
              <p class="examMass">
                <span>考试时间:{{ scope.row.number }}</span>
                <span>{{ scope.row.number }}道题</span>
                <span>作弊{{ scope.row.status }}</span>
              </p>
            </template>
          </el-table-column>
          <el-table-column label="班级" style="width:3em">
            <template slot-scope="scope">
              <div slot="reference" class="name-wrapper">
                <p>考试班级</p>
                <p>
                  <span v-for=" (item,index) in scope.row.grade_name" :key="index">{{ item }}</span>
                </p>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="创始人" style="width: 1.5em">
            <template slot-scope="scope">
              <p>
                {{ scope.row.user_name }}
              </p>
            </template>
          </el-table-column>
          <el-table-column label="开始时间">
            <template slot-scope="scope">
              <span> {{ scope.row.start_time }}</span>
            </template>
          </el-table-column>
          <el-table-column label="结束时间">
            <template slot-scope="scope">
              <span> {{ scope.row.end_time }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row.exam_exam_id)"
              >详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="pagetion">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="listMist.length"
          :page-size="limit"
          :current-page.sync="dftPage"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import moment from 'moment'
const timer = [{ title: '全部', id: 1 }, { title: '进行中', id: 2 }, { title: '已完成', id: 3 }]
export default {
  data() {
    return {
      timer,
      // 考试科目
      courses: [],
      // 考试科目select
      course: '',
      // 考试类型列表
      examTypes: [],
      // 所有列表
      examLists: [],
      // 考试类型select中的值
      type: '',
      // 切换的下标
      TimerIndex: 0,
      // 考试类型select中值的Id
      typeId: '',
      // 考试 科目select中值的Id
      coursesId: '',
      // 定义一个要渲染的数组
      list: [],
      // 当前页数
      dftPage: 1,
      // 一页几条
      limit: 10,
      // 定义一个可以slice的数组
      listMist: [],
      now:'',
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    ...mapActions({
      subject: 'examList/subject',
      examType: 'examList/examType',
      examList: 'examList/examList',
      detailExam: 'examList/detailExam'
    }),
    // 获取考试类型的值
    healeType(e) {
      const name = e
      this.examTypes.map(item => {
        if (item.exam_name === name) {
          this.typeId = item.exam_id
        }
      })
    },
    // 获取考试科目的值
    healeCourses(e) {
      const name = e
      this.courses.map(item => {
        if (item.subject_text === name) {
          this.coursesId = item.subject_id
        }
      })
    },
    // 点击搜索 调用按需加载
    onSubmit() {
      if (this.type !== '' && this.course !== '') {
        this.listMist = this.examLists.filter((item) => {
          if (item.exam_id === this.typeId && item.subject_id === this.coursesId) {
            return item
          }
        })
        this.list = this.listMist.slice(0, this.limit)
      }
      return

    },
    // 导出表格
    ExportExcel() {
      const navList = this.list.map(item => {
        return {
          '考试信息': item.title,
          '考试名称': item.exam_name,
          '出题人': item.user_name,
          '考试科目': item.subject_text,
          '开始时间': item.start_time,
          '结束时间': item.end_time
        }
      })
        let excelList = navList.map(item => {
        const arr = Object.values(item)
          return arr.map(item => JSON.stringify(item))
      })
      const header = Object.keys(navList[0])
        import('@/vendor/Export2Excel').then(excel => {
          excel.export_json_to_excel({
            header: header,
            data: excelList,
            filename: '考试列表',
            bookType: 'xlsx'
          })
        })
    },
    // 点击 时间类型
    headleTimer(index) {
      this.TimerIndex = index
      this.now = moment().unix()*1000;
      let nom=moment(this.now).format('YYYY-MM-DD HH:MM:SS')
        //判断结束时间是否大于现在本地时间
      if (this.TimerIndex === 2) {
        this.listMist = this.examLists.filter(item => {
          const end_time = moment(item.end_time).unix() * 1000;
          if (end_time < this.now) {
            return item
          }
        })
        this.list = this.listMist.slice(0, this.limit)
        // 判断本地时间在不在开始时间和结束时间之间
      } else if (this.TimerIndex === 1) {
        this.listMist = this.examLists.filter(item => {
          const end_time = moment(item.end_time).unix() * 1000;
          const start_time = moment(item.start_time).unix() * 1000;
          if (start_time <= this.now && end_time >= this.now  ) {
            return item
          }
        })
        this.list = this.listMist.slice(0, this.limit) 
      } else {
        this.listMist = this.examLists
        this.list = this.listMist.slice(0, this.limit)
      }
    },
    // 分页器
    handleCurrentChange(val) {
      this.list = this.listMist.slice(
        this.limit * (val - 1),
        this.limit * val
      )
    },
    getList() {
      // 考试类型
      this.examType().then(res => {
        if (res.code === 1) {
          this.examTypes = res.data
        }
      })
      // 考试科目
      this.subject().then(res => {
        if (res.code === 1) {
          this.courses = res.data
        }
      })
      // 获取的列表
      this.examList().then(res => {
        if (res.code === 1) {
          res.exam.map(item => {
            item.start_time = moment(item.start_time * 1).format('YYYY-MM-DD HH:MM:SS')
            item.end_time = moment(+ item.end_time).format('YYYY-MM-DD HH:MM:SS')
          })
          this.examLists = res.exam
          this.listMist = res.exam
          this.list = this.listMist.slice(0, this.limit)
        }
      })
    },

    handleEdit(index, id) {
      this.$router.push({ path: '/examination/detail', query: { id: id }})
    }
  }
}
</script>
<style scoped lang="scss">
  .examlist{
    width: 95%;
    margin:0 2.5%;
    flex: 1;
    display: flex;
    flex-direction: column;
    h3{
        width: 100%;
        padding: 10px 0px;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 500;
        font-size: 1.5em;
        display: flex;
      }
      .ant-layout-top{
        width: 100%;
        height:80px;
        box-sizing: border-box;
        padding: 20px;
        background: #fff;
        border-radius: 8px;
      }
      .ant-layout-content{
        width: 100%;
        flex: 1;
        margin:15px 0;
        background: #fff;
        border-radius: 8px;
        padding:15px;
        .style_container__2hI6B{
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          flex: 1;
          .style_tool__31xLZ{
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            >div{
              span{
                display: inline-block;
                padding: 5px 10px;
                border:1px solid #ccc;
                font-size: 14px;
                :nth-child(2){
                  border-left:0 ;
                  border-right: 0;

                }
              }
              span.active{
                background: #409EFF;
                color: #fff;
                border:1px solid #409EFF;
              }
            }
          }
        }
      .name-wrapper{
        font-size: 14px;
        p{
          width: 100%;
          text-align: center;
        }
        span{
          display: inline-block;
          padding: 3px 5px;
          font-size: 12px;

        }

      }
    }
    .el-button  {
      width: 100px;
      height: 30px;
      text-align: center;
    }

  }

</style>

