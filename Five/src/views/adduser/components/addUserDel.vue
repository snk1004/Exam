<template>
  <div class="addUser_wrapper">
    <div class="btn">
      <button v-for="(item,i) in userState" :key="item.id" :class="stateInd==i?'active':''" @click="handleState(i)">{{ item.states }}</button>
    </div>
    <el-select v-if="stateInd" v-model="values" placeholder="请选择身份id">
      <el-option
        v-for="item in list"
        :key="item.user_name"
        :value="item.user_name"
      />
    </el-select>
    <input v-model="user_name" type="text" placeholder="请输入用户名">
    <input v-model="user_pwd" type="password" placeholder="请输入密码">
    <el-select v-model="value" placeholder="请选择身份id">
      <el-option
        v-for="item in options"
        :key="item.identity_text"
        :value="item.identity_text"
      />
    </el-select>
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
      userState: [{
        id: '1',
        states: '添加用户'
      }, {
        id: '2',
        states: '更新用户'
      }],
      value: '',
      user_name: '',
      user_pwd: '',
      stateInd: 0,
      values: '',
      list: [],
      options: []
    }
  },
  created() {
    this.getdata()
  },
  methods: {
    ...mapActions({
      addSubmit: 'usershow/adduser',
      getreneval: 'usershow/getReneval',
      getid: 'usershow/getIdentity',
      getList: 'usershow/show'
    }),
    getdata() {
      this.getid().then(res => {
        this.options = res.data
      })
      this.getList().then(res => {
        this.list = res.data
      })
    },
    handleState(i) {
      this.stateInd = i
    },
    handleSubmit() {
      if (this.stateInd === 0) {
        if (this.user_pwd && this.user_name && this.value) {
          const user_id = this.options.find(item => item.identity_text == this.value)
          this.addSubmit({
            'user_name': this.user_name,
            'user_pwd': this.user_pwd,
            'identity_id': user_id.identity_id
          }).then(res => {
            this.$message({
              message: res.msg,
              type: 'success'
            })
            this.getdata()
          })
        } else if (this.user_pwd && this.user_name && !this.value) {
          this.addSubmit({
            'user_name': this.user_name,
            'user_pwd': this.user_pwd
          }).then(res => {
            this.$message({
              message: res.msg,
              type: 'success'
            })
            this.getData()
          })
        } else {
          this.$message.error('参数有误')
        }
      } else if (this.stateInd === 1) {
        this.list.find(item => {
          if (item.user_name === this.values) {
            if (!this.value && !this.user_name && !this.user_pwd) {
              this.$message.error('参数有误')
            } else {
              if (this.value) {
                const users = this.options.find(item => item.identity_text === this.value)
                this.getreneval({
                  'user_id': item.user_id,
                  'user_name': this.user_name === '' ? item.user_name : this.user_name,
                  'user_pwd': this.user_pwd === '' ? item.user_pwd : this.user_pwd,
                  'identity_id': this.value ? users.identity_id : ''
                }).then(res => {
                  this.$message({
                    message: res.msg,
                    type: 'success'
                  })
                })
              }
            }
          }
        })
      }
    },
    resets() {
      this.value = ''
      this.user_name = ''
      this.user_pwd = ''
      this.values = ''
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
            border:1px solid #ccc;
            outline: none;
          }
          >button.active{
              border:1px solid #0139fd;
              color: #0139fd;
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
.deloag{
  position: absolute;
  width: 150px;
  height: 40px;
  background: #fff;
  left:50%;
  top:-40px;
  border:1px solid red;
  color: rgba(0, 0, 0, 0.65);
  z-index:1005;
}

</style>

