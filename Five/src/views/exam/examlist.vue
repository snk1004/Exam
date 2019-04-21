<template>
  <div class="examlist">
      <h3>
        试卷列表
      </h3>
      <div class="ant-layout-top">
          <el-form :inline="true"  class="demo-form-inline">
          <el-form-item label="考试类型">
             <el-select v-model="type" placeholder="请选择">
                    <el-option
                    v-for="item in examTypes"
                    :key="item.exam_name"
                    :label="item.exam_name"
                    :value="item.exam_name">
                    </el-option>
                </el-select>
          </el-form-item>
          <el-form-item label="课程">
            <el-select v-model="course"  placeholder="请选择">
                    <el-option
                    v-for="item in courses"
                    :key="item.subject_text"
                    :label="item.subject_text"
                    :value="item.subject_text">
                    </el-option>
                </el-select>
          </el-form-item>
          <el-form-item size='medium' >
            <el-button type="primary" size="medium" @click="onSubmit">查询</el-button>
        </el-form-item>
        </el-form>
      </div>
      <div class="ant-layout-content">
        <div class="style_container__2hI6B">
          <div class="style_tool__31xLZ">
            <h4>试卷列表</h4>
              <div>
                <el-radio-group v-model="radio4" >
                <el-radio-button label="全部" ></el-radio-button>
                <el-radio-button label="进行中"></el-radio-button>
                <el-radio-button label="已完成"></el-radio-button>
              </el-radio-group>
             </div>
          </div>
        </div>
        <div class="ant-table-body">    
       <el-table
          :data="examLists"
          style="width: 100%">
          <el-table-column
            label="试卷信息"
            style="width: 2.0em"
            
            >
            <template slot-scope="scope">
              <p class="examName"> 
                  <span style="margin-left: 10px">{{scope.row.title}}</span>
              </p>
              <p class="examMass">
                <span>考试时间:{{scope.row.number}}</span>
                <span>{{scope.row.number}}道题</span>
                <span>作弊{{scope.row.status}}</span>
              </p>
            </template>
          </el-table-column>
          <el-table-column
            label="班级"
           style="width:3em"
            >
            <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                  <p>考试班级</p>
                <p>
                  <span v-for=" (item,index) in scope.row.grade_name" :key="index">{{ item }}</span>
                </p>
                </div>
            
            </template>
          </el-table-column>
          <el-table-column label="创始人"
          style="width: 1.5em"
          >
            <template slot-scope="scope">
              <p>
               {{scope.row.user_name}}
              </p>
            </template>
          </el-table-column>
          <el-table-column label="开始时间">
            <template slot-scope="scope">
                <span> {{scope.row.start_time}}</span>
            </template>
          </el-table-column>
          <el-table-column label="结束时间">
            <template slot-scope="scope">
              <span> {{scope.row.start_time}}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row.exam_exam_id)">详情</el-button>
            </template>
          </el-table-column>
        </el-table>  
        </div>
      </div> 
  </div>
</template>
<script>
  import {mapActions} from 'vuex';
  import moment from 'moment'
export default {
  data(){
    return {
        courses:[],
        course:'',
        examTypes:[],
        examLists:[],
        type:"",
        radio4:'',
        start_time:[]
    }
  },
  created(){
  },
  mounted(){
      this.getList();
  },
  methods:{
    ...mapActions({
      subject:"examList/subject",
      examType:"examList/examType",
      examList:"examList/examList",
      detailExam:'examList/detailExam'
    }),
    getList(){
      //考试类型
      this.examType().then(res=>{
          if(res.code==1){        
              this.examTypes=res.data;
          }
      })
      //考试科目
      this.subject().then(res=>{
          if(res.code==1){
              this.courses=res.data;
          }
      })
      //获取的列表
      this.examList().then(res=>{
          if(res.code==1){  
            res.exam.map(item=>{
              item.start_time=moment(item.start_time*1).format('YYYY-MM-DD HH:MM:SS')
              item.end_time=moment(item.end_time*1).format('YYYY-MM-DD HH:MM:SS')
            })
              this.examLists=res.exam;
          }
      })
    },
    onSubmit() {
      console.log('submit!');
    },
    handleEdit(index,id) {
         this.$router.push({ path: "/examination/detail",query:{id:id} })
      }
  }
}
</script>
<style scoped lang="scss">
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
  }
  .examlist{
    width: 95%;
    margin:0 2.5%;
    flex: 1;
    display: flex;
    flex-direction: column;
    h3{
        width: 100%;
        padding: 20px 0px;
        margin-top: 10px;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 500;
        font-size: 1.5em;
        display: flex;
      }
      .ant-layout-top{
        width: 100%;
        height:10em;
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


