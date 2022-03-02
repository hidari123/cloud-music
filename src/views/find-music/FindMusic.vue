<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="推荐" name="recommend">
            <banner />
        </el-tab-pane>
        <el-tab-pane label="排行榜" name="topic">排行榜</el-tab-pane>
        <el-tab-pane label="歌单" name="songSheet">歌单</el-tab-pane>
        <el-tab-pane label="主播电台" name="radio">主播电台</el-tab-pane>
        <el-tab-pane label="歌手" name="singer">歌手</el-tab-pane>
        <el-tab-pane label="新碟上架" name="newDisc">新碟上架</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Banner from './Banner.vue'
export default {
  components: { Banner },
  name: 'findMusic',
  data () {
    return {
      activeName: 'recommend'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style>
.el-main {
    padding: 0 !important;
}
.el-tabs__active-bar{
    margin: 0 0 0 540px !important;
}
.el-tabs__nav{
    padding: 0 0 0 540px !important;
}
.el-tabs__nav-scroll {
    background-color: #ffd04b !important;
}
</style>
