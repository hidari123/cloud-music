<template>
  <div>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item v-for="(item, index) in bannerList" :key="index">
            <img class="imgSize" :src="item.imageUrl" alt="">
        </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { banner } from '@/api/findMusic'
export default {
  name: 'Banner',
  data () {
    return {
      bannerList: []
    }
  },
  created () {
    this.getBannerList()
  },
  methods: {
    getBannerList () {
      banner().then(res => {
        if (res.code === 200) {
          this.bannerList = res.banners
          console.log(this.bannerList)
        } else {
          console.log('请求失败')
        }
      })
    }
  }
}
</script>

<style scoped>
.imgSize {
    width: 100%;
}
</style>
