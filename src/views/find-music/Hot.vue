<template>
  <div>
<el-row type="flex" class="row-bg" justify="center">
  <el-col :span="16">
      <hot-container />
      <new />
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
import New from './New.vue'
export default {
  components: { HotContainer, Mine, New },
  name: 'Hot'
}
</script>

<style scoped>
</style>
