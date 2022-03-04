<template>
  <div class="hot-container">
      <div class="top">
          <div class="img"></div>
          <div class="hot" @click="turnTo(10000)">热门推荐</div>
          <div class="tab">
              <span class="recommand" @click="turnTo(5001)">华语</span>
              <span class="recommand" @click="turnTo(1)">流行</span>
              <span class="recommand" @click="turnTo(2)">摇滚</span>
              <span class="recommand" @click="turnTo(1001)">民谣</span>
              <span class="recommand" @click="turnTo(2004)">电子</span>
          </div>
          <div class="more" @click="turnTo(10000)">更多</div>
          <div class="img2"></div>
      </div>
      <div class="container">
        <el-row :gutter="30">
            <!--
                把for循环写在 <el-col>

                事实上，for循环写在 row 和 col 中，DOM结构是完全不同的。
                前者：有数个 <el-row>，数量等于循环的次数，每个 <el-row> 中的内容一致。
                后者：1个 <el-row> 中有数个 <el-col>，数量等于循环的次数。
             -->
            <el-col :span="6" v-for="(topMusicList, index) in topMusicLists.slice(0, 8)" :key="index">
                <div class="musicImg">
                    <div class="bg"></div>
                    <div class="listen">
                        <span class="icon-headset"></span>
                        <span class="nb">{{ topMusicList.shareCount }}</span>
                        <span class="icon-play"></span>
                    </div>
                    <el-image
                        :src="topMusicList.coverImgUrl"
                        fit="fill">
                    </el-image>
                </div>
                <!-- <img :src="topMusicList.coverImgUrl" alt="" class="musicPic"> -->
                <div class="word">{{ topMusicList.name }}</div>
            </el-col>
        </el-row>
      </div>
  </div>
</template>

<script>
import { top } from '@/api/findMusic'
import { mapState } from 'vuex'
export default {
  name: 'HotContainer',
  data () {
    return {
      name: 'songSheet',
      topMusicLists: []
    }
  },
  created () {
    this.getTop()
  },
  computed: {
    ...mapState(['currentId'])
  },
  methods: {
    turnTo (id) {
      this.$store.state.currentId = id
    },
    getTop () {
      top({ limit: 8 }).then(res => {
        this.topMusicLists = res.playlists
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.hot-container {
    padding: 20px 20px 40px;
    // background-color: pink;
}
.top {
    height: 33px;
    padding: 0;
    border-bottom: 2px solid #C10D0C;
    .img {
        background: url(../../assets/img/index.png) no-repeat 0 9999px;
        background-position: -225px -156px;
        float: left;
        width: 34px;
        height: 33px;
        border-bottom: 2px solid #C10D0C;
    }
    .hot {
        float: left;
        cursor: pointer;
        font-size: 20px;
        font-weight: normal;
        line-height: 28px;
        text-decoration: none;
        font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    }
    .tab {
        float: left;
        margin: 7px 0 0 20px;
        .recommand{
            color: #666;
            cursor: pointer;
            &:hover {
                color: #555;
                text-decoration: underline;
            }
            &::after {
                content: '|';
                margin: 0 10px;
                color: #ccc;
            }
            &:last-child::after {
                content: '';
            }
        }
    }
    .more {
        float: right;
        margin-right: 20px;
        margin-top: 9px;
        color: #666;
        cursor: pointer;
        &:hover {
            color: #555;
            text-decoration: underline;
        }
    }
    .img2 {
        float: right;
        width: 12px;
        height: 12px;
        margin-right: -40px;
        margin-top: 11px;
        // 背景要放在定位前才能显示出来
        background: url(../../assets/img/index.png) no-repeat 0 9999px;
        background-position: 0 -240px;
    }
}
.container {
    width: 100%;
    .word {
        margin: 8px 0 3px;
        font-size: 12px;
        vertical-align: middle;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
<style>
.musicImg {
    margin: 30px 5px 0 5px;
            position: relative;
}
.bg {
    background: url(../../assets/img/coverall.png) no-repeat !important;
    z-index: 2;
    max-width: 100% !important;
    width: 140px;
    height: 120px;
    cursor: pointer;
    display: inline-block;
    position: absolute;
    background-position: 0 0 !important;
}
.listen {
    background: url(../../assets/img/coverall.png) no-repeat !important;
    background-position: 0 -537px !important;
    z-index: 2;
    /* max-width: 100%; */
    width: 100%;
    height: 27px;
    bottom: 0;
    left: 0;
    color: #ccc;
    /* display: inline-block; */
    position: absolute;
}
.icon-headset {
    float: left;
    width: 14px;
    height: 11px;
    background-position: 0 -24px !important;
    margin: 8px 5px 9px 10px;
    background: url(../../assets/img/iconall.png) no-repeat;
    /* display: inline-block; */
}
.nb {
    float: left;
    margin: 0;
    color: #ccc;
    line-height: 27px;
    font-size: 12px;
}
.icon-play {
    position: absolute;
    right: 10px;
    bottom: 5px;
    width: 16px;
    height: 17px;
    background-position: 0 0;
    background: url(../../assets/img/iconall.png) no-repeat;
    cursor: pointer;
}
.container .el-image {
        width: 100%;
        height: 0;
        padding-bottom: 100%;
        overflow: hidden;
        cursor: pointer;
}
.container .el-image__inner{
        position: absolute;
        width: 100%;
        z-index: 1;
}
body {
    overflow: auto !important;
}
</style>
