<template>
  <div class="dashboard-container">
    <h2>北京八维研修学院</h2>
    <p>考试管理系统</p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
  }
}
</script>
<style lang="scss" scoped>
    h2{
      margin: 10px 50px;
      font-size: 30px;
    }
    p{
      position: absolute;
      bottom:70px;
      right:30px;
      font-size: 20px;
    }
</style>

