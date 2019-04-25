<template>
  <div class="addUser_wrapper">
    <div class="btn">
      <button>添加api接口权限</button>
    </div>
    <input v-model="apinames" type="text" placeholder="请输入api接口权限名称">
    <input v-model="apiurl" type="text" placeholder="请输入api接口权限url">
    <input v-model="apimethods" type="text" placeholder="请输入api接口权限方法">
    <div class="btnFotter">
      <el-button :plain="true" @click="handleSubmit">确认</el-button>
      <button class="resets" @click="resets">重置</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      apinames: '',
      apiurl: '',
      apimethods: ''
    }
  },
  methods: {
    ...mapActions({
      addapi: 'usershow/addApi'

    }),
    handleSubmit() {
      if (this.apinames && this.apiurl && this.apimethods) {
        this.addapi({
          'api_authority_text': this.apinames,
          'api_authority_url': this.apiurl,
          'api_authority_method': this.apimethods
        }).then(res => {
          this.$message({
            message: res.msg,
            type: 'success'
          })
          if (res.code === 1) {
            this.$emit('finish', 'wancheng')
          }
        })
      } else {
        this.$message.error('参数有误')
      }
    },
    resets() {
      this.apinames = ''
      this.apiurl = ''
      this.apimethods = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.addUser_grid{
    display: flex;
    flex-wrap: wrap;
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
    .addUser_wrapper{
          width: 33.3%;
          height: 300px;
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
            border:1px solid #0139fd;
            color: #0139fd;
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
              >.el-button{
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

