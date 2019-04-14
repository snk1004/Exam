<template>
  <div class="chart-container">
    <div class="lay-out">
      <h2>添加用户</h2>
    </div>
    <div class="addUser_grid">
      <div class="addUser_wrapper">
        <div class="btn">
          <button>添加用户</button>
          <button>更新用户</button>
        </div>
        <input type="text" placeholder="请输入用户名">
        <input type="password" placeholder="请输入密码">
         <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        <div class="btnFotter">
          <button class="sure">确认</button>
          <button class="resets">重置</button>
        </div>

      </div>
      <div class="addUser_wrapper">
        <div class="btn">
          <button>添加身份</button>
        </div>
        <input type="text" placeholder="请输入身份名称">
        <div class="btnFotter">
          <button class="sure">确认</button>
          <button class="resets">重置</button>
        </div>
      </div>
      <div class="addUser_wrapper">
        <div class="btn">
          <button>添加api接口权限</button>
        </div>
        <input type="text" placeholder="请输入api接口权限名称">
        <input type="text" placeholder="请输入api接口权限url">
        <input type="text" placeholder="请输入api接口权限方法">
        <div class="btnFotter">
          <button class="sure">确认</button>
          <button class="resets">重置</button>
        </div>
      </div>
      <div class="addUser_wrapper">
        <div class="btn">
          <button>添加视图接口权限</button>
        </div>
         <el-select v-model="viewvalue" placeholder="请选择">
            <el-option
              v-for="item in view"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        <div class="btnFotter">
          <button class="sure">确认</button>
          <button class="resets">重置</button>
        </div>
      </div>
      <div class="addUser_wrapper">
        <div class="btn">
          <button>给身份设置pi接口权限</button>
        </div>
         <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
         <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        <div class="btnFotter">
          <button class="sure">确认</button>
          <button class="resets">重置</button>
        </div>
      </div>
      <div class="addUser_wrapper">
        <div class="btn">
          <button>给身份设置视图权限</button>
        </div>
        <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        <div class="btnFotter">
          <button class="sure">确认</button>
          <button class="resets">重置</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    data(){
      return {
         options: [{
          value: '选项1',
          label: '管理者'
        }, {
          value: '选项2',
          label: '出题者'
        }, {
          value: '选项3',
          label: '浏览者'
        }],
        value:"请输入身份id",
        view:[
          {
          value: '选项1',
          label: '登录'
        },{
          value: '选项2',
          label: '主界面'
        },{
          value: '选项3',
          label: '添加试题'
        },{
          value: '选项4',
          label: '试题分类'
        },{
          value: '选项5',
          label: '查看试题'
        },{
          value: '选项6',
          label: '编辑试题'
        },{
          value: '选项7',
          label: '试题详情'
        },{
          value: '选项19',
          label: '试题详情'
        },{
          value: '选项17',
          label: '试题详情'
        },{
          value: '选项8',
          label: '添加用户'
        },{
          value: '选项9',
          label: '试题详情'
        },{
          value: '选项10',
          label: '角色管理'
        },{
          value: '选项11',
          label: '用户展示'
        },{
          value: '选项12',
          label: '添加考试'
        },{
          value: '选项13',
          label: '考试管理'
        },{
          value: '选项14',
          label: '班级管理'
        },{
          value: '选项15',
          label: '试题详情'
        }  
        ],
        viewvalue:'请选择已有视图'
      }
    }
}
</script>

<style scoped lang='scss'>
.lay-out{
      display: flex;
      flex-direction: column;
      flex: auto;
      min-height: 0;
      padding: 24px;
  h2{
        margin-bottom: 0.5em;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 500;
  }
}
.addUser_grid{
    display: flex;
    flex-wrap: wrap;
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
    .addUser_wrapper{
          width: 33.3%;
          height: 281px;
          border-right: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
          border-radius: 5px;
          padding: 10px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          >.btn{
            display: flex;
            >button{
            padding:0 10px;
            background: #fff;
            height: 32px;
            border:1px solid #ccc;
            outline: none;
          }
          }
           >input{
            width: 199px;
            height: 32px;
            margin-top:20px;
            padding:0 10px;
            border:1px solid #ccc;
          }
          >.el-select{
            width: 150px;
            height: 30px;
            margin-top: 20px;
          }
          .btnFotter{
             display: flex;
              width: 180px;
              margin-top: 18px;
              >.sure{
                width: 119px;
                height: 32px;
                background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
                outline: none;
                border:0;
                border-radius: 5px;
                margin-right: 10px;
                color: #fff;
              }
              >.resets{
                width: 70px;
                height: 32px;
                background: #fff;
                outline: none;
                border:1px solid #ccc;;
                border-radius: 3px;
                margin-right: 10px;
                color:#333;
              }
          }
      }
}

</style>
