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
      <span class="user" @click="dialogFormVisible = true">登录</span>
    </div>
  </div>

  <!-- Form -->
  <div class="my-login-dialog">
    <el-dialog title="登录" :visible.sync="dialogFormVisible">
    <el-form :model="ruleForm">
        <el-form-item label="手机号" :label-width="formLabelWidth">
        <el-input v-model="ruleForm.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" size="middle">取 消</el-button>
        <el-button type="primary" @click="getLoginPhone()" size="middle">确 定</el-button>
    </div>
    </el-dialog>
  </div>
</div>
</template>

<script>
import { loginPhone } from '@/api/'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      dialogFormVisible: false,
      activeIndex: '/findMusic',
      ruleForm: {
        phone: '15868831043',
        pass: '@hidari123'
      },
      formLabelWidth: '60px'
    }
  },
  created () {
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    ...mapMutations(['changeLogin']),
    getLoginPhone () {
      this.dialogFormVisible = false
      loginPhone(this.ruleForm.phone, this.ruleForm.pass).then(res => {
        this.userToken = res.token

        // 将用户token保存到vuex中
        this.changeLogin({ Authorization: this.userToken })
      }).catch(error => {
        console.log(error)
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
        cursor: pointer;
    }
}
</style>
<style>
.my-login-dialog .el-dialog {
  border-radius: 15px;
}
.my-login-dialog .el-dialog__wrapper{
    width: 800px;
    height: 600px;
    display: flex;
    flex-direction: column;
    margin: 0 !important;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: calc(100% - 30px);
    max-width: calc(100% - 30px);
}
.my-login-dialog .el-dialog__header {
    /* height: 40px;
    font-size: 20px; */
    line-height: 40px;
    background-color: #000;
    border-radius: 15px 15px 0 0;
}
.my-login-dialog .el-dialog__title {
    color: #fff;
}
.my-login-dialog .el-dialog__body {
    padding: 30px 60px;
}
.my-login-dialog .el-dialog__footer {
    padding: 0px 60px 30px;
}
.my-login-dialog .el-button--primary {
    background-color: #000;
    border-color: #000;
    padding: 10px 12px;
}
</style>
