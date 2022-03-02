<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
  <el-main>
      <!-- 路由出口 -->
      <router-view></router-view>
  </el-main>
</el-container>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>
<style>
</style>
