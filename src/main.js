import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入样式
import './styles/base.less'
// 导入vant组件
import './utils/vant'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
