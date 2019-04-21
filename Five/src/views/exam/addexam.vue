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
                        :min="3" :max="100"></el-input-number>
                    </el-form-item>

                <el-form-item
                 required>
                  <span class="demonstration">
                        <b>*</b> 考试时间：
                    </span>
                    <el-col :span="11">
                    <el-form-item prop="date1">
                        <div class="block">
                            <el-date-picker
                             size='small'
                            v-model="ruleForm.date1"
                            type="datetime"
                            placeholder="选择日期时间">
                            </el-date-picker>
                        </div>
                    </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                    <el-form-item prop="date2">
                        <div class="block">
                            <el-date-picker
                           
                            v-model="ruleForm.date2"
                            type="datetime"
                            placeholder="选择日期时间">
                            </el-date-picker>
                        </div>
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
                name: '',
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
        //调用获取课程和类型列表函数
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
                //将时间对象转为时间戳
                let start_time =moment(this.ruleForm.date1).unix()*1000;
                console.log(start_time)
            //    let start=moment(start_time*1).format('YYYY-MM-DD HH:MM:SS')
            //     console.log(start)
                let end_time =moment(this.ruleForm.date2).unix()*1000;
                //将时间戳放入ruleForm数组
                let ruleForm ={
                    ...this.ruleForm,
                    date1:start_time,
                    date2:end_time
                }
                //将ruleForm传入
            let res = await this.createExam(ruleForm);
            //跳转页面
            this.$router.push({ path: "/examination/add" })
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        //条件不成立弹出提示
        resetForm(formName) {
            this.$refs[formName].resetFields();
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
        box-sizing: border-box;
    }
    .addexam{
        width: 95%;
        margin:0 2.5%;
        flex:1;
        padding: 0 0 20px 0;
        display: flex;
        flex-direction: column;
        h3{
            padding: 20px 0px;
            margin-top: 10px;
            margin-bottom: 0.5em;
            color: rgba(0, 0, 0, 0.85);
            font-weight: 500;
            font-size: 1.5em;
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
            .line/deep/.el-form-item__content{
                width: 100%;
            }
        }
        .el-button{
            width: 80%;
            height: 40px;
        }

       
    }
</style>

