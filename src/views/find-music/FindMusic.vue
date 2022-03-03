<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="推荐" name="recommend">
            <banner />
            <hot />
        </el-tab-pane>
        <el-tab-pane label="排行榜" name="topic">排行榜</el-tab-pane>
        <el-tab-pane label="歌单" name="songSheet">
            <music-list />
        </el-tab-pane>
        <el-tab-pane label="主播电台" name="radio">主播电台</el-tab-pane>
        <el-tab-pane label="歌手" name="singer">歌手</el-tab-pane>
        <el-tab-pane label="新碟上架" name="newDisc">新碟上架</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Banner from './Banner.vue'
import Hot from './Hot.vue'
import MusicList from './MusicList.vue'
import { highquality } from '@/api/findMusic'
export default {
  components: {
    Banner,
    MusicList,
    Hot
  },
  name: 'findMusic',
  data () {
    return {
      activeName: 'recommend'
    }
  },
  created () {
  },
  computed: {
    ...mapState(['currentId'])
  },
  watch: {
    currentId () {
      if (this.currentId) {
        this.activeName = 'songSheet'
        console.log(this.currentId)
      }
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab)
      console.log(event)
      if (tab._uid === 41) {
        this.getMusicList()
      }
    },
    getMusicList () {
      highquality().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style>
.el-main {
    padding: 0 !important;
}
.el-tabs__active-bar{
    margin: 0 0 0 0 !important;
    background-color: red !important;
}
.el-tabs__nav{
    margin: 0 0 0 31% !important;
}
.el-tabs__nav-scroll {
    background-color: #ffd04b !important;
}
.el-tabs__item:hover {
    color: red !important;
}
.el-tabs__item.is-active {
    color: red !important;
}

</style>
