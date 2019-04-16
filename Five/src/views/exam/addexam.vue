<template>
    <div class="addexam">
        <h3>添加考试</h3>
        <div class='ant'>
            <div class="examName">
                <span class="demonstration">
                    <b>*</b> 试卷名称：
                </span>
              <el-input v-model="input" placeholder="请输入内容"></el-input>
                
            </div>
             <div class="examType">
                  <span class="demonstration">
                    <b>*</b> 选择考试类型:
                </span>
               <el-select v-model="value5" multiple placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div> 
              <div class="examTopic">
                <span class="demonstration">
                    <b>*</b> 选择课程:
                </span>
               <el-select v-model="value6" multiple placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div>
                 <span class="demonstration">
                    <b>*</b> 考试数量:
                </span>
                <el-input-number v-model="num8" controls-position="right"
                 @change="handleChange" 
                 :min="1" :max="10"></el-input-number>
            </div>
            <div>
                <span class="demonstration"> <b>*</b>考试时间:</span>
                <div class="block examTime">
                
                <el-date-picker
                v-model="value1"
                type="date"
                placeholder="开始时间">
                </el-date-picker>
                <el-col class="line" :span="2">-</el-col>
                <el-date-picker
                v-model="value2"
                type="date"
                placeholder="结束时间">
                </el-date-picker>
            </div>  
            </div>
              
             <div  class="btn">
                <el-button type="primary" size="medium">创建</el-button>
            </div>  
            
         </div>
        
    </div>  
   </div>    
</template>
<script>
import axios from 'axios'
let options= [{
          value: '选项1',
          label: 'vues'
        }]
export default {
        data(){
            return { 
                //时间插件    
                 pickerOptions1: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    },
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                        picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                        }
                    }]
                },
                //下拉框列表
                options,
                //开始时间
                value1: '',
                //结束时间
                value2: '',
                value: '',
                //考试数量 默认的是 1
                num8: 1,
                //考试类型的value
                value5:'',
                //选择课程的value
                value6:'',
                //是输入框的值
                input:''

                
            }
        },
        created(){
            console.log(11)
            // axios.post('/exam/exam').then(res=>{
            //     console.l0g(res)
            // })
        },
        methods: {
            //获取考试数量的value值
            handleChange(value) {
                console.log(value);
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
    width: 100%;
    flex:1;
     padding: 0 0 20px 0;
     display: flex;
     flex-direction: column;
    h3{
        width: 90%;
        margin:0 5%;
        height: 50px;
        display: flex;
        align-items: center;
        font-weight:500;
        font-size: 18px;
    }
    .ant{
        width:95%;
        flex: 1;
        margin:0 2.5%;
        border-radius: 10px;
        background: #fff;
        padding: 15px;
        >div{
            width:45%;
            height: 80px;
            margin:8px 0;
            .line{
                height: 100%;
                line-height:35px;
                text-align: center;
            }
            }
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
    .block{
        display: flex;
    }
    .btn{
        width: 100%;
        height: 40px;
        .el-button{
            width: 60%;
            height:40%;
            span{
                width: 100%;
                height: 100%;
            }
        }
    }
    
}
</style>

