<template>
  <el-table  border fit highlight-current-row style="width: 100%">
    <el-table-column
      v-loading="loading"
      align="center"
      label="用户名"
      width="65"
      element-loading-text="请给我点时间！"
    >
      <template slot-scope="scope">
        <span>{{ scope.row.id }}</span>
      </template>
    </el-table-column>

    <el-table-column min-width="300px" label="密码">
      <template slot-scope="{row}">
        <span>{{ row.title }}</span>
      </template>
    </el-table-column>

    <el-table-column width="110px" align="center" label="身份">
      <template slot-scope="scope">
        <span>{{ scope.row.author }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { fetchList } from '@/api/article'

export default {
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
  created() {
    
  },
  methods: {
   
  }
}
</script>

