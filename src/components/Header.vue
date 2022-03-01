<template>
<div>
  <div class="header">
    <h1 class="logo">
      <!-- <a href="/#" hidefocus='true'>网易云音乐</a> -->
    </h1>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#242424"
      text-color="#787878"
      active-text-color="#ffd04b">
        <el-menu-item index="/findMusic">发现音乐</el-menu-item>
        <el-menu-item index="/myMusic">我的音乐</el-menu-item>
        <el-menu-item index="/focus">关注</el-menu-item>
        <el-menu-item index="/musicMan">音乐人</el-menu-item>
    </el-menu>
    <div class="search">
      <div class="srchbg">
        <span class="parent">
          <input type="text" name="srch" id="srch" class="txt j-flag">
        </span>
      </div>
    </div>
    <div class="login">
      <span class="user">登录</span>
    </div>
  </div>
</div>
</template>

<script>
import { countries } from '@/api/'
export default {
  data () {
    return {
      activeIndex: '/findMusic'
    }
  },
  created () {
    this.getcountries()
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    getcountries () {
      countries().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.header {
    width: 100%;
    background-color: #242424;
    display: flex;
    justify-content: space-between;
    min-width: 600px;
}
// logo
.header .logo {
    float: left;
    width: 176px;
    height: 70px;
    background-position: 0 0;
    margin-top: -4px;
    a {
      float: left;
      width: 157px;
      height: 100%;
      padding-right: 20px;
      text-indent: -9999px;
  }
  [hidefocus] {
      outline: none;
  }
}
.header .search {
    width: 158px;
    height: 32px;
    .srchbg {
        margin-top: 19px;
        background-position: 0 -99px;
        background-color: #fff;
        border-radius: 32px;
        .parent {
            display: block;
            position: relative;
            margin: 8px 0 0 30px;
            input {
                color: #333;
                line-height: 16px;
                width: 95%;
                margin: 0;
                padding: 0;
                background: transparent;
                height: 32px;
            }
        }
    }
}
.el-menu--horizontal>.el-menu-item {
    height: 67px;
    line-height: 67px;
}
.header .login {
    float: right;
    height: 45px;
    margin: 19px 0 0 20px;
    padding: 0 22px 0 0;
    background-position: right -47px;
    background-image: none;
    .user {
        display: block;
        width: 28px;
        margin-top: 7px;
        color: #787878;
    }
}
/* element.style {
    width: 965px;
    top: 0px;
}
.g-topbar {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 99;
    zoom: 1;
}
.m-top {
    position: relative;
    z-index: 1000;
    height: 70px;
    box-sizing: border-box;
    background: #242424;
    border-bottom: 1px solid #000;
}
.m-top .wrap {
    width: 1100px;
    margin: 0 auto;
}
.f-cb {
    *zoom: 1;
}
.m-top .logo {
    float: left;
    width: 176px;
    height: 69px;
    background-position: 0 0;
}
.m-top .logo a {
    float: left;
    width: 157px;
    height: 100%;
    padding-right: 20px;
    text-indent: -9999px;
}
[hidefocus] {
    outline: none;
}
.m-nav li {
    position: relative;
    *zoom: 1;
    background-position: right -300px;
}
.m-nav li, .m-nav li span, .m-nav a, .m-nav a em {
    float: left;
    height: 70px;
    font-size: 14px;
}
.m-nav a:hover, .m-nav a.z-slt {
    background: #000;
    text-decoration: none;
    color: #fff;
}
.m-nav a {
    padding: 0 19px;
    text-align: center;
    line-height: 70px;
    color: #ccc;
}

.m-nav li, .m-nav li span, .m-nav a, .m-nav a em {
    float: left;
    height: 70px;
    font-size: 14px;
}
a, a *, .f-hand, .f-hand * {
    cursor: pointer;
}
a {
    text-decoration: none;
    color: #333;
}
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
.m-nav a.z-slt .cor {
    display: block;
    position: absolute;
    left: 50%;
    top: 64px;
    width: 12px;
    height: 7px;
    margin-left: -6px;
    overflow: hidden;
    background-position: -226px 0;
}
.m-nav .cor {
    display: none;
}
.m-nav a {
    padding: 0 19px;
    text-align: center;
    line-height: 70px;
    color: #ccc;
} */
</style>
