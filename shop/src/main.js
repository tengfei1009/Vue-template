import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'
import { Button } from 'vant'

// 引入全局可用阿里图标样式文件
import './assets/iconfont/iconfont.css'
// 引入全局可用阿里图标样式文件
import './assets/iconfont/Iconfont.js'
// 引入自己设置的全局icon基础样式,一般用于规定基础
// import './assets/iconfont/'

// 页面中body标签有font-size属性,说明添加成功了,这个是rem相对单位
import 'lib-flexible/flexible'

// Vue.use(Vant)
Vue.use(Button)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
