import Vue from 'vue'

// import Vconsole from 'vconsole'
// A modern alternative to CSS resets
// https://github.com/necolas/normalize.css
import 'normalize.css/normalize.css'
import './styles/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'
// swiper
import 'swiper/css/swiper.min.css'
import 'swiper/js/swiper.min'
// import './icons'

import './permission'

import * as filters from '@/filters'
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

// import vant
import vantCompoents from '@/components/Vant'
Vue.use(vantCompoents)
// register common components globally
import '@/components/common'

import moment from 'moment' // 时间处理导入模块
moment.locale('zh-cn') // 设置语言 或 moment.lang('zh-cn');
Vue.prototype.$moment = moment // 赋值使用

// console.log(moment('2021-01-21 12:30:00').format('YYYY-MM-DD'))
// if (process.env.NODE_ENV === 'development') {
//   const vConsole = new Vconsole()
//   Vue.use(vConsole)
// }
// const vConsole = new Vconsole()
// Vue.use(vConsole)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
