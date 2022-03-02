<template>
    <div class="g-bd">
        <div class="n-pglg">
            <div class="pic">
                <h2>登录网易云音乐</h2>
                <button class="btn" @click="show = true">立即登录</button>
            </div>
        </div>
        <login-dialog :show="show" />
    </div>
</template>

<script>
import LoginDialog from '@/components/LoginDialog.vue'
export default {
  components: { LoginDialog },
  name: 'Tourist',
  data () {
    return {
      show: false
    }
  },
  methods: {
    // turnTo () {
    //   this.show = true
    // }
  }
}
</script>

<style scoped>
.g-bd .n-pglg {
    width: 807px;
    height: 378px;
    margin: 0 auto 0;
    padding-top: 104px;
    background-position: 0 104px;
}
.g-bd .n-pglg .pic h2 {
    height: 84px;
    text-indent: -9999px;
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
.g-bd .n-pglg .pic .btn {
    display: block;
    width: 167px;
    height: 45px;
    margin: 102px 0 0 482px;
    background-position: 0 9999px;
    text-indent: -9999px;
    border: none;
    cursor: pointer;
}
.n-pglg,.n-pglg .pic .btn {
    background: url(../../assets/img/mymusic.png) no-repeat 0 9999px;
}
</style>
