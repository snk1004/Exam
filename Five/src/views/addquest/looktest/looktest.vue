<template>
  <div class="chart-container">
    <p class="looktest">
      查看试题 
    </p>
    <div class="contentbox_looktest">
      <div class="testtype_top">
        <span>课程类型:</span> 
        <ul class="testtype_ullist">
          <li>All</li>
          <li>javaScript上</li>
          <li>javaScript下</li>
          <li>模块化开发</li>
          <li>移动端开发</li>
          <li>组件化开发(vue)</li>
          <li>渐进式开发(react)</li>
          <li>项目实战</li>
          <li>javaScript高级</li>
          <li>node高级</li>
        </ul>
      </div>
      <div class="testtype_select">
        <span>考试类型:</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span>题目类型:</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <button>查询</button>
      </div>
    </div>
    <div class="content_box">
        <ul>
          <li>
            <p>机器人归位</p>
            <div>
              <p>
                <span>代码补全</span>
                <span>javaScript上</span>
                <span>周考1</span>
              </p>
              <span>编辑</span>
            </div> 
            <p>dingshaoshan发布</p>
          </li>
          <li>
            <p>机器人归位</p>
            <div>
              <p>
                <span>代码补全</span>
                <span>javaScript上</span>
                <span>周考1</span>
              </p>
              <span>编辑</span>
            </div> 
            <p>dingshaoshan发布</p>
          </li>
          <li>
            <p>机器人归位</p>
            <div>
              <p>
                <span>代码补全</span>
                <span>javaScript上</span>
                <span>周考1</span>
              </p>
              <span>编辑</span>
            </div> 
            <p>dingshaoshan发布</p>
          </li>
          <li>
            <p>机器人归位</p>
            <div>
              <p>
                <span>代码补全</span>
                <span>javaScript上</span>
                <span>周考1</span>
              </p>
              <span>编辑</span>
            </div> 
            <p>dingshaoshan发布</p>
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
}
</script>

<style scoped lang='scss'>
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
  height: 50px;
  align-items: center; 
  >li{
    padding: 20px 10px;
    list-style:none;
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
  ul{
      margin: 0;
  li{
    width: 100%;
    list-style: none;
    padding:10px 0;
    border-bottom: 1px solid #ccc;
    >p{
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      margin: 0;
    }
    >p:nth-child(3){
      color: #0139fd;
    }
    >div{
      p{
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
  }
}
</style>

