<template>
  <div class="chart-container">
    <p class="looktest">
      查看试题
    </p>
    <div class="contentbox_looktest">
      <div class="testtype_top">
        <span>课程类型:</span>
        <ul class="testtype_ullist">
          <li :class="allflag?'active':''" @click="all">All</li>
          <li v-for="(item,index) in list" :key="item.subject_id" :class="listindex===index?'active':''" :style="listflag?'background:blue;color:#fff':''" @click="selechecklist(index,item.subject_id)">{{ item.subject_text }}</li>
        </ul>
      </div>
      <div class="testtype_select">
        <span>考试类型:</span>
        <el-select v-model="value" placeholder="">
          <el-option
            v-for="item in testtypes"
            :key="item.exam_id"
            :label="item.exam_name"
            :value="item.exam_name"
          />
        </el-select>
        <span>题目类型:</span>
        <el-select v-model="value2" placeholder="">
          <el-option
            v-for="item in titletypes"
            :key="item.questions_type_id"
            :label="item.questions_type_text"
            :value="item.questions_type_text"
          />
        </el-select>
        <button @click="search">查询</button>
      </div>
    </div>
    <div class="content_box">
      <ul>
        <li v-for="(item,index) in contentdata" :key="index" @click="detail($event,item.questions_id)">
          <p>{{ item.title }}</p>
          <div>
            <p class="minlist">
              <span>{{ item.questions_type_text }}</span>
              <span>{{ item.subject_text }}</span>
              <span>{{ item.exam_name }}</span>
            </p>
            <span>编辑</span>
          </div>
          <p>{{ item.user_name }}发布</p>
        </li>
      </ul>
    </div>
    <div class="block">
      <el-pagination
        :current-page.sync="currentPage1"
        layout="prev, pager, next, jumper"
        :total="60"
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
      currentPage1: 1,
      value: '',
      value2: '',
      list: [],
      testtypes: [],
      titletypes: [],
      contentdata: [],
      alldata: [],
      allflag: false,
      listflag: false,
      listindex: -1,
      newlist: [],
      limit: 6
    }
  },
  mounted() {
    this.getlist()
  },
  methods: {
    ...mapActions({
      subject: 'questionManagement/subject', // js上下
      testtype: 'questionManagement/examType', // 周考月考
      titletype: 'questionManagement/getQuestionsType', // 题的类型---简单题
      condition: 'questionManagement/condition'// 所有的数据
    }),
    handleCurrentChange(val) {
      this.contentdata = this.alldata.slice(
        this.limit * (val - 1),
        this.limit * val
      )
    },
    getlist() { // 渲染对应列表数据
      this.subject().then(res => { // js上下
        if (res.code === 1) {
          this.list = res.data
        }
      })
      this.testtype().then(res => { // 周考月考
        if (res.code === 1) {
          this.testtypes = res.data
        }
      })
      this.titletype().then(res => { // 题的类型---简单题
        if (res.code === 1) {
          this.titletypes = res.data
        }
      })
      this.condition().then(res => { // 所有的数据
        if (res.code === 1) {
          this.alldata = res.data
          this.contentdata = res.data
          this.contentdata = this.alldata.slice(0, this.limit)
        }
      })
    },
    all() { // 全选所有的课程
      this.allflag = !this.allflag
      if (this.allflag) {
        this.listflag = true
      } else {
        this.listflag = false
      }
    },
    selechecklist(index, id) { // 单选筛选对应数据
      this.listindex = index
      this.newlist = this.contentdata.filter(item => item.subject_id === id)// 通过对应的课程类型筛选对应的课程类型
      if (this.listflag) {
        this.listflag = !this.listflag
      }
      if (!this.listflag) {
        this.allflag = false
      }
    },
    search() { // 查询的时候渲染对应的列表
      if (this.allflag) { // 如果全选状态---渲染所有的数据
        this.getlist()
      }
      if (this.value) {
        this.contentdata = this.alldata.filter(item => item.exam_name === this.value)
      }
      if (this.listindex !== -1) {
        this.contentdata = this.alldata.filter(item => item.subject_text === this.list[this.listindex].subject_text)
      }
      if (this.value2) {
        this.contentdata = this.alldata.filter(item => item.questions_type_text === this.value2)
      }
      if (this.listindex !== -1 && this.value) { // 判断---周考-月考 +  js上下
        const datas = this.contentdata.filter(item => item.subject_text === this.list[this.listindex].subject_text)
        this.contentdata = datas.filter(item => item.exam_name === this.value)
      }
      if (this.listindex !== -1 && this.value2) {
        this.contentdata = this.contentdata.filter(item => item.subject_text === this.list[this.listindex].subject_text)
      }
      if (this.listindex !== -1 && this.value && this.value2) {
        this.contentdata = this.contentdata.filter(item => item.subject_text === this.list[this.listindex].subject_text)
      }
      if (this.contentdata.length > 10) {
        this.contentdata = this.contentdata.slice(0, this.limit)
      }
      if (this.newlist.length) { // 点击全部--搜索渲染所有数据
        if (this.newlist.length > 10) {
          this.contentdata = this.newlist.slice(0, this.limit)
        } else {
          this.contentdata = this.newlist
        }
      }
    },
    detail(e, id) {
      if (e.target.innerHTML !== '编辑') {
        this.$router.push(`/exam/detail?id=${id}`)
      } else {
        this.$router.push(`/exam/addquest?id=${id}`)
      }
    }
  }
}

</script>

<style scoped lang='scss'>
.minlist{
  >span:nth-child(1){
    color: #1890ff;
    background: #e6f7ff;
    border-color: #91d5ff;
  }
  >span:nth-child(2){
    color: #2f54eb;
    background: #f0f5ff;
    border-color: #adc6ff;
  }
  >span:nth-child(3){
    color: #fa8c16;
    background: #fff7e6;
    border-color: #ffd591;
  }
}
li.active{
	background: #0139FD;
	color: #fff!important;
}
.looktest{
  font-size: 20px;
}
.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
  padding: 10px 20px;
  overflow: auto;
}
.testtype_top{
  display: flex;
  >span{
    width:80px;
    padding: 30px 0px;
  }
}
.contentbox_looktest{
  background: #fff;
  padding: 30px 20px 50px 20px;
  border-radius: 10px;
}
.testtype_ullist{
  flex:1;
  display: flex;
  font-size: 12px;
  align-items: center;
  padding: 0 5px;
  >li{
    padding:5px 8px;
    list-style:none;
    font-weight: normal;
    color: #333;
	margin: 0 3px;
  }
  >li:nth-child(1){
    font-weight: bold;
  }
}
.testtype_select{
  padding: 15px 0;
  >select{
    width: 150px;
    height: 35px;
    margin-right: 20px;
  }
 >button{
  display: inline-block;
  padding: 8px 30px;
  background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
  border: none;
  color: #fff;
  margin-left: 80px;
  border-radius: 5px;
}
}
.content_box{
	width: 100%;
	background: #fff;
	border-radius: 10px;
	margin: 0;
	margin-top: 20px;
	>ul{
		margin: 0 30px 0 0;
	>li{
		width: 100%;
		list-style: none;
		padding:10px 0;
		border-bottom: 1px solid #ccc;
    >p:nth-child(1){
      padding: 10px 0;
      font-size: 14px;
      line-height: 25px;
      margin: 0;
    }
    >p:nth-child(3){
      padding: 10px 0;
      color: #0139fd;
      margin: 0;
    }
    >div{
      height: 50px;
      line-height: 50px;
      >p{
        display: inline-block;
        margin: 0;
        height: 16px;
        line-height: 16px;
        >span{
          display: inline-block;
          border:1px solid #ccc;
          background: pink;
          font-size: 12px;
          padding: 3px 6px;
          margin-right:5px;
        }
      }
      >span{
        float: right;
        margin-right: 30px;
        color: #0139fd;
        font-size: 14px;
      }
    }
  }
	>li:hover{
		background: #f7f9ff;
	}
  }
}
.el-pagination {
    white-space: nowrap;
    padding: 2px 5px;
    color: #303133;
    font-weight: 700;
    margin-left: 200px;
    margin-top: 5px;
}
</style>

