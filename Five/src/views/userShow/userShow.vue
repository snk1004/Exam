<template>
  <div class="usershow">
    <div class="show-header">
      <h2>用户展示</h2>
    </div>
    <div class="show-list">
      <span>用户数据</span>
      <span>身份数据</span>
      <span>api接口权限</span>
      <span>身份和api接口关系</span>
      <span>视图接口权限</span>
      <span>身份和视图权限关系</span>
    </div>
    <h1>用户数据</h1>
    <tab />
  </div>
</template>

<script>
import Tab from '../tab'

export default {
  components: { Tab }

}
</script>

<style scoped lang='scss'>
.show-header{
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
.show-list{
      display: flex;
      flex: auto;
      min-height: 0;
      padding-left: 24px;
      >span{
        padding:7px 15px;
        border:1px solid #ccc;
        background: #fff;
        border-right: 0;
        color: rgba(0, 0, 0, 0.85);

      }
      >span:last-child{
          border-right:1px solid #ccc;
      }
}
h1{
    margin-left: 24px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.9);

}
table{
    display: flex;
    flex-direction: column;
    flex: auto;
    margin-left: 24px;
    >thead{
        width: 90%;
        height: 50px;
        background: #fff;
    }
}

</style>
