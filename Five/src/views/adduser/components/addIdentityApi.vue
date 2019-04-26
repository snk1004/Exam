<template>
  <div class="addUser_wrapper">
    <div class="btn">
      <button>给身份设置pi接口权限</button>
    </div>
    <el-select v-model="value" placeholder="请选择身份id">
      <el-option
        v-for="item in options"
        :key="item.identity_text"
        :value="item.identity_text"
      />
    </el-select>
    <el-select v-model="apiView" placeholder="请选择api接口权限">
      <el-option
        v-for="item in api"
        :key="item.api_authority_text"
        :value="item.api_authority_text"
      />
    </el-select>
    <div class="btnFotter">
      <el-button :plain="true" @click="handleSubmit">确认</el-button>
      <button class="resets" @click="resets">重置</button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  props: ['options', 'api'],
  data() {
    return {
      value: '',
      apiView: '',
      identity_id: '',
      api_id: ''
    }
  },
  methods: {
    ...mapActions({
      setapiidentity: 'usershow/setIdentityApi'

    }),
    async handleSubmit() {
      if (this.value != '' && this.apiView != '') {
        this.identity_id = this.options.find(item => item.identity_text == this.value)
        this.api_id = this.api.find(item => item.api_authority_text == this.apiView)
        await this.setapiidentity({
          'identity_id': this.identity_id.identity_id,
          'api_authority_id': this.api_id.api_authority_id
        })
        if (this.code == 1) {
          this.$message({
            message: this.msg,
            type: 'success'
          })
        } else {
          this.$message.error(this.msg)
        }
      } else {
        this.$message.error('参数错误')
      }
    },
    resets() {
      this.value = ''
      this.apiView = ''
    }
  },
  computed: {
    ...mapState({
      code: state => state.usershow.code,
      msg: state => state.usershow.msg
    })
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
