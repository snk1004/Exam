<template>
  <div class="">
    <div class="lay-out">
      <h2>待批班级</h2>
    </div>
    <div class="table">
      <Tab />
    </div>
  </div>
</template>
<script>
import Tab from '../table/complexTable'
export default {
  components: { Tab }
}
</script>

<style lang="scss" scoped>
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
</style>

