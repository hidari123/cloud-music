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
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
        <el-menu-item index="/findMusic">发现音乐</el-menu-item>
        <el-menu-item index="/myMusic">我的音乐</el-menu-item>
        <el-menu-item index="/focus">关注</el-menu-item>
        <el-menu-item index="/musicMan">音乐人</el-menu-item>
    </el-menu>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '/findMusic'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.logo {
    float: left;
    width: 176px;
    height: 64px;
    background-position: 0 0;
    /* background-color: rgb(84, 92, 100); */
    margin-top: -4px;
}
.logo a {
    float: left;
    width: 157px;
    height: 100%;
    padding-right: 20px;
    text-indent: -9999px;
}
[hidefocus] {
    outline: none;
}
.header {
  width: 100%;
  background-color: rgb(84, 92, 100);
  display: flex;
  justify-content: center;
  min-width: 600px;
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
