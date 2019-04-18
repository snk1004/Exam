<template>
    <div class="addexam">
        <h3>添加考试</h3>
        <div class='ant'>
        
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item
                 
                  prop="name">
                   <span class="demonstration">
                    <b>*</b> 试卷名称：
                </span>  
                    <el-input v-model="ruleForm.name" placeholder="请输入内容"></el-input>
                </el-form-item>

                <el-form-item
                  prop="TypeExamId">
                   <span class="demonstration">
                    <b>*</b> 考试类型:
                </span>
                    <el-select v-model="ruleForm.TypeExamId">
                    <el-option
                    v-for="item in examTypes"
                    :key="item.exam_id"
                    :label="item.exam_name"
                    :value="item.exam_id">
                    </el-option>
                    </el-select>
                </el-form-item>
                 <el-form-item
                   prop="courseExamId">
                    <span class="demonstration">
                        <b>*</b> 试卷名称：
                    </span>
                    <el-select v-model="ruleForm.courseExamId">
                    <el-option
                        v-for="item in course"
                        :key="item.subject_id"
                        :label="item.subject_text"
                        :value="item.subject_id">
                    </el-option>
                    </el-select>
                </el-form-item>
                
                <el-form-item
                   prop="courseExam">
                    <span class="demonstration">
                        <b>*</b>数量:
                    </span>
                    <el-input-number v-model="ruleForm.num" controls-position="right"
                        @change="handleChange" 
                        :min="3" :max="100"></el-input-number>
                    </el-form-item>

                <el-form-item
                 required>
                  <span class="demonstration">
                        <b>*</b> 考试时间：
                    </span>
                    <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择开始时间" v-model="ruleForm.date1" style="width: 150px"></el-date-picker>
                    </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择结束时间" v-model="ruleForm.date2" style="width: 150px"></el-date-picker>
                    </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                </el-form-item>
                </el-form>
    </div>  
   </div>    
</template>
<script>
import {mapActions,mapState,mapMutations} from 'vuex';
import moment from 'moment';
export default {
        data(){
            return {
                //考试类型下拉框列表
                examTypes:[], 
                //科目下拉框
                course:[],
                ruleForm: {
                    //名称
                    name: '222',
                    //考试类型
                    TypeExamId: '',
                    //考试课程
                    courseExamId:'',
                    //考试数量
                    num:1,
                    //开始时间
                    date1: '',
                    //结束时间
                    date2: ''
                    },
          
                rules: {
                    //名称的规则
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    //考试类型的规则
                    courseExamId: [
                        { required: true, message: '请选择考试类型', trigger: 'change' }
                    ],
                    //考试课程的规则
                    TypeExamId: [
                        { required: true, message: '请选择考试科目', trigger: 'change' }
                    ],
                    //考试数量的规则
                    num: [
                        { required: true, message: '请选择数量', trigger: 'change' },
                        
                    ],
                    //开始时间
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    //结束时间
                    date2: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                }
            }
        },
        created(){
        },
        mounted(){
            this.getList()
        },
        methods: {
            //获取下拉列表
              ...mapActions({
                    subject:"examList/subject",
                    examType:"examList/examType",
                    createExam:'examList/createExam'
                    }),
            //点击提交
            submitForm(ruleForm) {         
               this.$refs.ruleForm.validate(async valid => {
                if (valid) {
                   let start_time =moment(this.ruleForm.date1).unix();
                   let end_time =moment(this.ruleForm.date2).unix();
                   let ruleForm ={
                      ...this.ruleForm,
                      date1:start_time,
                      date2:end_time
                   }
               let res = await this.createExam(ruleForm)
              this.$router.push({ path: "/examination/edit" })
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },


            
            
            //获取考试数量的value值
            handleChange(value) {
                console.log(value);
            },
            //获取课程和类型列表
            getList(){
                this.examType().then(res=>{
                    if(res.code==1){
                        this.examTypes=res.data;
                    }
                })
                this.subject().then(res=>{
                    if(res.code==1){
                        this.course=res.data;
                    }
                })
            }
           
        }
 
}
</script>

 <style lang="scss" scoped>
    *{
    padding: 0;
    margin: 0;
    list-style: none;
    }
    .addexam{
        width: 95%;
        margin:0 2.5%;
        flex:1;
        padding: 0 0 20px 0;
        display: flex;
        flex-direction: column;
        h3{
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            font-weight:500;
            font-size: 18px;
        }
        .ant{
            width:100%;
            flex: 1;
            border-radius: 10px;
            background: #fff;
            padding: 15px;
            .el-form-item{
                width: 50%;
                height: 100px;
            }
            .demonstration{
                display: flex;
                height: 40px;
                align-items: center;
                b{
                    color: orangered;
                    margin-right: 8px;
                }
            }
            .line{
                text-align: center;
            }
        }
        .el-button{
            width: 80%;
            height: 40px;
        }
        
    }
</style>

