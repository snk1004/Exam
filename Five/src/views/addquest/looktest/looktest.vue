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
        <select name="" id="">
          <option value=""></option>
          <option value="周考一">周考一</option>
          <option value="周考一">周考一</option>
          <option value="周考一">周考一</option>
          <option value="周考一">周考一</option> 
        </select>
         <span>题目类型:</span>
        <select name="" id="">
          <option value=""></option> 
          <option value="简单题">简单题</option>
          <option value="简单题">简单题</option>
          <option value="简单题">简单题</option>
          <option value="简单题">简单题</option> 
        </select>
        <button>查询</button>
      </div>
    </div>
  </div>
</template> 
<script>  
export default { 
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
  background: #eee;
  padding: 10px 20px;
}
.testtype_top{
  display: flex;
  span{ 
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
  padding:0;
  >li{
    padding: 20px 15px;
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

</style>

