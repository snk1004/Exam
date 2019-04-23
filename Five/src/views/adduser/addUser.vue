<template>
  <div class="chart-container">
    <div class="lay-out">
      <h2>添加用户</h2>
    </div>
    <div class="addUser_grid">
      <addUserDel />
      <addIdentity />
      <addApi />
      <setApiEnter />
      <addIdentityApi />
      <setIdentityView />
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
export default {
  components: { addUserDel, addIdentity, addApi, setApiEnter, addIdentityApi, setIdentityView },
  data() {
    return {
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
