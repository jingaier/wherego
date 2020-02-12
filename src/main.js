// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'// 全局使用 引用方法
import fastClick from 'fastclick' /* 为了解决手机上 点击事件延迟300毫秒问题 */
import 'styles/reset.css'// 移动端 样式重置
import 'styles/border.css'// 为了解决 多倍屏 1像素问题
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css' /* //引入样式 */
Vue.config.productionTip = false
fastClick.attach(document.body)/* 使用 fastClick */
Vue.use(VueAwesomeSwiper/*, { default global options } */)/* // 全局注册 可以全局使用 */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
