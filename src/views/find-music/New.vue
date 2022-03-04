<template>
  <div class="hot-container">
      <div class="top">
          <div class="img"></div>
          <div class="hot" @click="pushRouter()">新碟上架</div>
          <div class="more"  @click="pushRouter()">更多</div>
          <div class="img2"></div>
      </div>
      <div class="container">
          <div class="inner">
              <div class="pre"></div>
              <div class="roll">
                  <el-row :gutter="20">
                    <el-col :span="4-8" v-for="(newDisc, index) in newDiscLists.slice(0,5)" :key="index">
                        <div class="img-new"  @mouseenter="enter(index)" @mouseleave="leave(index)" >
                            <img :src="newDisc.picUrl" alt="">
                            <div class="msk">
                                <div v-show="index.isShow" class="icon-play"></div>
                            </div>
                            <div class="f-thide">{{ newDisc.name }}</div>
                            <div class="s-fc3 f-thide">{{ newDisc.artist.name }}</div>
                        </div>
                    </el-col>
                  </el-row>
              </div>
              <div class="next"></div>
          </div>
      </div>
  </div>
</template>

<script>
import { album } from '@/api/findMusic'
import { mapState } from 'vuex'
export default {
  name: 'New',
  data () {
    return {
      name: 'songSheet',
      newDiscLists: [],
      limit: 5,
      offset: 5
    }
  },
  created () {
    this.getAblum()
  },
  computed: {
    ...mapState(['currentName'])
  },
  methods: {
    getAblum () {
      album({
        params: {
          limit: this.limit,
          offset: this.offset
        }
      }).then(res => {
        this.newDiscLists = res.weekData
        console.log(this.limit)
        console.log(this.newDiscLists)
      })
    },
    pushRouter () {
      this.$store.state.currentName = 'newdisc'
    },
    enter (index) {
    //   if (!index.isShow) {
    //     this.$set(index, 'isShow', false)
    //     index.isShow = !index.isShow
    //   } else {
    //     index.isShow = !index.isShow
    //   }
      console.log(index)
    },
    leave (index) {
      console.log(index)
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
    position: relative;
    width: 100%;
    zoom: 1;
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    .inner {
        height: 184px;
        padding-left: 16px;
        background: #f5f5f5;
        border: 1px solid #fff;
        .pre, .next {
            position: absolute;
            top: 71px;
            width: 17px;
            height: 17px;
            background: url(../../assets/img/index.png) no-repeat 0 9999px;
            cursor: pointer;
        }
        .pre {
            left: 4px;
            background-position: -260px -75px;
        }
        .next {
            right: 4px;
            background-position: -300px -75px;
        }
        .roll {
            float: left;
            width: 98%;
            height: 180px;
            overflow: hidden;
            position: relative;
            zoom: 1;
        }
    }
}
</style>
<style>
body {
    overflow: auto !important;
}
.roll .el-row {
    margin: 15px 0 0 0 !important;
  }
.roll [class*=el-col-] {
    float: left;
    width: 20%;
    box-sizing: border-box;
}
.roll .img-new {
    width: 100%;
}
.img-new img {
    width: 100%;
    cursor: pointer;
}
.img-new .icon-play {
    display: inline-block;
    width: 22px;
    height: 22px;
    background: url(../../assets/img/iconall.png) no-repeat 0 9999px;
    background-position: 0 -85px;
    position: absolute;
    right: 10px;
    bottom: 10px;
}
.img-new .msk {
    width: 99px;
    height: 99px;
    float: left;
    position: absolute;
    top: 0;
    background-size: cover;
    /* margin-top: -100px; */
    /* margin-left: -6px; */
    background: url(../../assets/img/coverall.png) no-repeat 0 9999px;
    background-position: 0 -570px;
}
.f-thide {
    display: flex;
    justify-content: center;
    width: 90%;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    cursor: pointer;
}
.img-new .f-thide:hover {
    text-decoration: underline;
}
.img-new .s-fc3, .s-fc3:hover {
    color: #666;
}
</style>
