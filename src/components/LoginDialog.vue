<template>
    <!-- 封装 login=dialog -->
    <!-- 子组件 传值从父组件传值 控制显示和隐藏 -->
  <div class="my-login-dialog">
    <el-dialog title="登录" :visible.sync="loginFormVisible" :from='from'>
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
</template>

<script>
import { loginPhone } from '@/api/'
import { mapMutations } from 'vuex'
export default {
  name: 'LoginDialog',
  data () {
    return {
      loginFormVisible: this.show,
      ruleForm: {
        phone: '15868831043',
        pass: '@hidari123'
      },
      formLabelWidth: '60px'
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    from: {
      type: String,
      default: ''
    }
  },
  watch: {
    // 监听 show 的变化
    show () {
      this.loginFormVisible = this.show
    }
  },
  created () {
  },
  methods: {
    ...mapMutations({ changeLogin: 'changeLogin' }),
    getLoginPhone () {
      const _this = this
      this.loginFormVisible = false
      loginPhone(this.ruleForm.phone, this.ruleForm.pass).then(res => {
        _this.userToken = 'Bearer' + res.token
        // 将用户token保存到vuex中
        _this.changeLogin({ Authorization: _this.userToken })
        console.log(this.from)
        this.$router.push('/findMusic')
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

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
