<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="list of swiperLists" :key="list.id">
        <img class="swiper-img" :src="list.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
  </div>
</template>
<script>
  export default {
    name: 'HomeSwiper',
    data () {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          pagination: '.swiper-pagination'
        },
        swiperLists:[
          {
            id:'001',
            imgUrl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/be6871c9b0b0ffab3ef2a86fa9688677.jpg'
          },
          {
            id:'002',
            imgUrl:'https://img1.qunarzz.com/sight/p0/1709/e9/e9b7ae23f567806ea3.img.jpg_600x330_339bdee5.jpg'
          },
          {
            id:'003',
            imgUrl:'https://img1.qunarzz.com/sight/p0/1712/d4/d4631cd43dff145fa3.img.png_600x330_96fe5fce.png'
          }
        ]
      }
    }
  }
</script>
<style lang="stylus" >
.wrapper >>> .swiper-pagination-bullet-active
  background :red
.wrapper
  /* 这种方法 可以做到 宽高比例为31.25  */
  width :100%
  overflow :hidden
  height:0
  padding-bottom:31.25%
  background :#ccc
  .swiper-img
    width:100%
</style>