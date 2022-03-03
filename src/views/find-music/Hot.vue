<template>
  <div>
<el-row type="flex" class="row-bg" justify="center">
  <el-col :span="16">
      <hot-container />
  </el-col>
  <el-col :span="8">
      <mine />
  </el-col>
</el-row>
  </div>
</template>

<script>
import HotContainer from './HotContainer.vue'
import Mine from './Mine.vue'
export default {
  components: { HotContainer, Mine },
  name: 'Hot'
}
</script>

<style scoped>
</style>
