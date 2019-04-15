<template>
  <div class="examlist">
      <h3>
        试题列表
      </h3>
      <div class="ant-layout-top">
          <div class="ant-layout-from">
              <div class="ant-layout-input">
                <span>考试类型:</span>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div class="ant-layout-input">
                <span>课程:</span>
      
                <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              </div> 
             <el-button type="primary">查询</el-button>
          </div>
          
      </div>
      <div class="ant-layout-content">
        <div class="style_container__2hI6B">
          <div class="style_tool__31xLZ">
            <h4>试卷列表</h4>
              <div class="ant-radio-group ant-radio-group-outline">
                <span>全部</span><span>进行中</span><span>已结束</span>
              </div>
          </div>
        </div>
        <div class="ant-table-body">
          <table>
              <thead>
                <tr>
                  <th>
                    试卷信息
                  </th>
                   <th>
                    班级
                  </th>
                   <th>
                    创建人
                  </th>
                   <th>
                    开始时间
                  </th>
                   <th>
                    结束时间
                  </th>
                   <th>
                   操作
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
          </table>
        </div>
      </div> 
  </div>
</template>
<script>
let options= [{
          value: '选项1',
          label: 'vues'
        }]
export default {
  data(){
    return {
      options,
      value:''
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
      .ant-layout-from{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        
        .ant-layout-input{
          width: 35%;
          height: 40px;
          display: flex;
          align-items: center;
          select{
            flex:1;
            height: 30px;
            outline: none;
            margin: 5px;
          }
        }
        .ant-layout-btn{
            outline: none;
            width: 15%;
            height: 30px;
            background: #0027d6;
            border:0;
            color: #fff;
            margin-left: 15px;
            border-radius: 3px;
        }
      }
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
          .ant-radio-group{
            display: flex;
            span{
              display: inline-block;
              padding: 5px 8px;
              border:1px solid #ccc;
              color: #1890ff;
            }
          }
        }
      }
      .ant-table-body{
        width: 100%;
        flex: 1;
        table{
          width: 100%;
          height: 100%;
        }
      }
    }
}

</style>


