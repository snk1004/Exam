<template>
     <div class="addUser_wrapper">
        <div class="btn">
          <button v-for='(item,i) in userState' :class="stateInd==i?'active':''" @click='handleState(i)'    :key='item.id'>{{item.states}}</button>
        </div>
        <el-select v-model="value" placeholder="请选择" v-if='stateInd'>
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <input type="text" placeholder="请输入用户名" v-model="user_name">
        <input type="password" placeholder="请输入密码" v-model="user_pwd">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.identity_text"
            :label="item.label"
            :value="item.identity_text"
          />
        </el-select>
        <div class="btnFotter">
          <button class="sure" @click='handleSubmit'>确认</button>
          <button class="resets">重置</button>
        </div>

      </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data(){
    return {
        userState:[{
          id:'1',
          states:'添加用户'
        },{
          id:'2',
          states:'更新用户'
        }],
        options: [],
      value: '请输入身份id',
      user_name:'',
      user_pwd:'',
      stateInd:0
    }
  },
  methods:{
    ...mapActions({
        getid:'usershow/getIdentity',
        addSubmit:'usershow/adduser'
      }),
      handleState(i){
        this.stateInd=i;
      },
      handleSubmit(){
        if(this.user_pwd&&this.user_name){
          let reg = /[A-z]{1,}[a-z]{3,}\d{1,}/
          console.log(reg.test(this.user_pwd))
          if(reg.test(this.user_pwd)){
            this.addSubmit({
              'user_name':this.user_name,
              'user_pwd':this.user_pwd,
              'user_identity':this.value
            })
            
          }
        }
      }
 },
 created(){
   console.log(this.getid())
   this.getid().then(res=>{
     this.options=res.data
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

