<template>
  <el-table :data='dataList' border fit highlight-current-row style="width: 100%">
    <el-table-column min-width="300px" v-for='(item,i) in title' :key='i' :lable='item.tit'>
      <template slot-scope="{row}">
        <span></span>
        <span>{{row[item.render]}}</span>
      </template>
    </el-table-column>

   
  </el-table>
</template>

<script>
import { fetchList } from '@/api/article'

export default {
  props:['dataList','title'],
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
 
  data() {
    return {
      list: null,
      listQuery: {
        page: 1,
        limit: 5,
        type: this.type,
        sort: '+id'
      },
      loading: false
    }
  },
  
}
</script>

