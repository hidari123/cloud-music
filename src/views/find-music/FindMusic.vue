<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="推荐" name="recommend">
            <recommend />
        </el-tab-pane>
        <el-tab-pane label="排行榜" name="topic">
            <topic />
        </el-tab-pane>
        <el-tab-pane label="歌单" name="songsheet">
            <music-list />
        </el-tab-pane>
        <el-tab-pane label="主播电台" name="radio">主播电台</el-tab-pane>
        <el-tab-pane label="歌手" name="singer">歌手</el-tab-pane>
        <el-tab-pane label="新碟上架" name="newdisc">新碟上架</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MusicList from './MusicList.vue'
import { highquality } from '@/api/findMusic'
import Topic from './Topic.vue'
import Recommend from './Recommend.vue'
export default {
  components: {
    MusicList,
    Topic,
    Recommend
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
    ...mapState(['currentId', 'currentName'])
  },
  watch: {
    currentId () {
      if (this.currentId) {
        this.activeName = 'songsheet'
        this.$router.push('/findmusic/songsheet')
        console.log(this.currentId)
      }
    },
    currentName () {
      if (this.currentName) {
        this.activeName = 'newdisc'
        this.$router.push('/findmusic/newdisc')
      }
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab)
      console.log(event)
      this.$router.push(`/findmusic/${tab.name}`)
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
