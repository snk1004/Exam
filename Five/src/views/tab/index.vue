<template>
  <div class="tab-container">
    <el-tabs v-model="activeName" style="margin-top:15px;" type="border-card">
        <keep-alive>
          <div v-if='dataList'>
              <tab-pane  :dataList='dataList' :title='title' class="tables"/>
          </div>
        </keep-alive>
    </el-tabs>
  </div>
</template>

<script>
import tabPane from './components/tabPane'

export default {
  name: 'Tab',
  props:['dataList','title'],
  components: { tabPane },
  data() {
    return {
      tabMapOptions: [
        { label: 'China', key: 'CN' },
        { label: 'USA', key: 'US' },
        { label: 'Japan', key: 'JP' },
        { label: 'Eurozone', key: 'EU' }
      ],
      activeName: 'CN',
      createdTimes: 0
    }
  },
  methods: {
    showCreatedTimes() {
      this.createdTimes = this.createdTimes + 1
    }
  },
  created(){
    // console.log(this.title)
  }
 
 
}
</script>

<style scoped>
  .tab-container {
    margin: 30px;
  }
  .tables /deep/  .el-table--border td{
    border:0;
  }

</style>
