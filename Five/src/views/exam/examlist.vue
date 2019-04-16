<template>
  <div class="examlist">
      <h3>
        试题列表
      </h3>
      <div class="ant-layout-top">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="考试类型">
             <el-select v-model="formInline.region" placeholder="考试类型">
               <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="课程">
            <el-select v-model="formInline.region" placeholder="课程">
               <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
          
      </div>
      <div class="ant-layout-content">
        <div class="style_container__2hI6B">
          <div class="style_tool__31xLZ">
            <h4>试卷列表</h4>
              <!-- <div class="ant-radio-group ant-radio-group-outline">
                <span>全部</span><span>进行中</span><span>已结束</span>
              </div> -->
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
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="papers"
                label="试题试卷"
                width="180">
              </el-table-column>
              <el-table-column
                prop="grade"
                label="班级"
                width="180">
              </el-table-column>
              <el-table-column
                prop="creator"
                label="创建人">
              </el-table-column>
              <el-table-column
                prop="startTime"
                label="开始时间">
              </el-table-column>
              <el-table-column
                prop="endTime"
                label="结束时间">
              </el-table-column>
               <el-table-column
                prop="operation"
                label="操作">
              </el-table-column>
          </el-table>
                  
        </div>
      </div> 
  </div>
</template>
<script>
let options= [{
          value: '选项1',
          label: 'vues'
        }];
let tableData=[{
    papers: 'vue',
    grade: '1610c',
    creator: 'w916peach',
    startTime:"2016-02-05",
    endTime:"2016-08-01",
    operation:"详情"
  }]
export default {
  data(){
    return {
     formInline: {
          user: '',
          region: ''
        },
        options,
        radio4:'',
        tableData
    }
  },
  methods:{
     onSubmit() {
        console.log('submit!');
      }
  }
}
</script>
<style scoped lang="scss">
.examlist{
  width: 100%;
  flex: 1;
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
    .ant-layout-top{
      width: 95%;
      height:100px;
      box-sizing: border-box;
      padding: 20px;
      background: #fff;
      border-radius: 8px;
      margin: 0 2.5%;
    }
    .ant-layout-content{
      width: 95%;
      flex: 1;
      margin:15px 2.5%;
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
    }
}

</style>


