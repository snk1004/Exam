<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import adminDashboard from './admin';
import editorDashboard from './editor';
import Driver from 'driver.js'; // import driver.js
import 'driver.js/dist/driver.min.css'; // import driver.js css
export default {
  name: 'Dashboard',
  components: { adminDashboard, editorDashboard },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapState({
      identity_text: state => state.user.userInfo.identity_text
    })
  },
  created() {
    if (this.identity_text !== '管理员') {
      this.currentRole = 'editorDashboard'
    }
    //首次进入页面显示引导页
  }
}
</script>
