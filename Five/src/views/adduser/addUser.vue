<template>
  <div class="chart-container">
    <div class="lay-out">
      <h2>添加用户</h2>
    </div>
    <div v-if="options.length" class="addUser_grid">
      <!-- 添加用户 -->
      <addUserDel :options="options" :list="list" @finish="handleFinish" />
      <!-- 添加身份 -->
      <addIdentity @finish="handleFinish" />
      <!-- 添加api权限 -->
      <addApi @finish="handleFinish" />
      <!-- 添加视图权限 -->
      <setApiEnter />
      <!-- 给身份添加api权限 -->
      <addIdentityApi :options="options" :api="api" />
      <!-- 给身份添加视图权限 -->
      <setIdentityView :options="options" />
    </div>
  </div>
</template>

<script>
import addUserDel from './components/addUserDel'
import addIdentity from './components/addIdentity'
import addApi from './components/addApi'
import setApiEnter from './components/setApiEnter'
import addIdentityApi from './components/addIdentityApi'
import setIdentityView from './components/setIdentityView'
import { mapActions } from 'vuex'
export default {
  components: { addUserDel, addIdentity, addApi, setApiEnter, addIdentityApi, setIdentityView },
  data() {
    return {
      options: [],
      list: [],
      api: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    ...mapActions({
      getid: 'usershow/getIdentity',
      getList: 'usershow/show',
      getapi: 'usershow/getApi'
    }),
    getData() {
      // 获取身份id
      this.getid().then(res => {
        this.options = res.data
      })
      // 获取用户列表
      this.getList().then(res => {
        this.list = res.data
      })
      // 获取api列表
      this.getapi().then(res => {
        this.api = res.data
      })
    },
    handleFinish(res) {
      if (res === 'wancheng') {
        this.getData()
      }
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
}

</style>
