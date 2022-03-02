<template>
<div>
  <div class="header">
    <h1 class="logo">
      <!-- <a href="/#" hidefocus='true'>网易云音乐</a> -->
    </h1>
    <!-- :router='true' 根据 index 跳转 -->
    <el-menu
      :default-active="activeIndex"
      :router="true"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#242424"
      text-color="#787878"
      active-text-color="#ffd04b">
        <el-menu-item index="/findmusic">发现音乐</el-menu-item>
        <el-menu-item index="/mymusic">我的音乐</el-menu-item>
        <el-menu-item index="/focus">关注</el-menu-item>
        <el-menu-item index="/musicman">音乐人</el-menu-item>
    </el-menu>
    <div class="search">
      <div class="srchbg">
        <span class="parent">
          <input type="text" name="srch" id="srch" class="txt j-flag">
        </span>
      </div>
    </div>
    <div class="login">
      <span class="user" @click="show = true">登录</span>
    </div>
  </div>

  <!-- Form -->
  <login-dialog :show.sync="show" :from="from"/>
</div>
</template>

<script>
import LoginDialog from './LoginDialog.vue'
export default {
  data () {
    return {
      show: false,
      from: this.$route.path,
      activeIndex: this.$route.path
    }
  },
  components: {
    LoginDialog
  },
  updated () {
    this.activeIndex = this.$route.path
    console.log(this.activeIndex)
    // console.log(this.$route.path)
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
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
        cursor: pointer;
    }
}
</style>
<style>
.el-header {
    padding: 0 !important;
}
</style>
