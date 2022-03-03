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
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HotContainer',
  data () {
    return {
      name: 'songSheet'
    }
  },
  computed: {
    ...mapState(['currentId'])
  },
  methods: {
    turnTo (id) {
      this.$store.state.currentId = id
    }
  }
}
</script>

<style lang='scss' scoped>
.hot-container {
    padding: 20px 20px 40px;
    background-color: pink;
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
</style>
