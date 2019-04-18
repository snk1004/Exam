<template>
  <div class="editExam">
        <h3>创建试卷</h3>
        <div class="edit">
            <el-button>默认按钮</el-button>
        </div>
  </div>
</template>
<script>
export default {
  data(){
      return {

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
.editExam{
    width: 95%;
    flex: 1;
    margin:0 2.5%;
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
    .edit{
        width: 100%;
        flex:1;
        background: #fff;
        border-radius: 10px;

            
            .el-button{
                padding: 3px 15px;
                border:1px solid #ccc;
                line-height: 40px;
                margin: 30px;
            }
    }
}
</style>
