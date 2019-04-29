<template>
  <div class="addUser_wrapper">
    <div class="btn">
      <button>给身份设置视图权限</button>
    </div>
    <el-select v-model="idvalue" placeholder="请选择身份id">
      <el-option
        v-for="item in options"
        :key="item.identity_text"
        :value="item.identity_text"
      />
    </el-select>
    <el-select v-model="viewvalue" placeholder="请选择视图权限id">
      <el-option
        v-for="item in list"
        :key="item.view_authority_text"
        :value="item.view_authority_text"
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
  props: ['options'],
  data() {
    return {
      viewvalue: '',
      idvalue: '',
      list: []

    }
  },
  methods: {
    ...mapActions({
      setview: 'usershow/getView',
      setidentityview: 'usershow/setIdentityView'

    }),
    async handleSubmit() {
      if (this.idvalue && this.viewvalue) {
        const identity_id = this.options.find(item => item.identity_text == this.idvalue)
        const identity_view = this.list.find(item => item.view_authority_text == this.viewvalue)
        console.log(identity_id, identity_view)
        await this.setidentityview({
          identity_id: identity_id.identity_id,
          view_authority_id: identity_view.view_authority_id
        })
        if (this.code == 1) {
          this.$message({
            message: this.msg,
            type: 'success'
          })
          this.idvalue = ''
          this.viewvalue = ''
        } else {
          this.$message.error(this.msg)
        }
      } else {
        this.$message.error('参数错误')
      }
    },
    resets() {
      this.idvalue = ''
      this.viewvalue = ''
    }
  },
  created() {
    this.setview().then(res => {
      this.list = res.data
    })
  },
  computed: {
    ...mapState({
      code: state => state.usershow.code,
      msg: state => state.usershow.msg
    })
  }
}
</script>

<style scoped lang='scss'>
.addUser_grid {
  display: flex;
  flex-wrap: wrap;
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
  .addUser_wrapper {
    width: 33.3%;
    height: 300px;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    > .btn {
      display: flex;
      > button {
        padding: 0 10px;
        background: #fff;
        height: 32px;
        border: 1px solid #0139fd;
        color: #0139fd;
        outline: none;
      }
    }
    > input {
      width: 199px;
      height: 32px;
      margin-top: 20px;
      padding: 0 10px;
      border: 1px solid #ccc;
    }
    > .el-select {
      width: 150px;
      height: 30px;
      margin-top: 20px;
    }
    .btnFotter {
      display: flex;
      width: 180px;
      margin-top: 18px;
      > .el-button {
        width: 119px;
        height: 32px;
        background: linear-gradient(-90deg, #4e75ff, #0139fd) !important;
        outline: none;
        border: 0;
        border-radius: 5px;
        margin-right: 10px;
        color: #fff;
      }
      > .resets {
        width: 70px;
        height: 32px;
        background: #fff;
        outline: none;
        border: 1px solid #ccc;
        border-radius: 3px;
        margin-right: 10px;
        color: #333;
      }
    }
  }
}
</style>

