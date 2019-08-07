import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 重置 样式
import '@/assets/css/reset.css'

// elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 封装 请求函数
import $http from '@/api'
Vue.prototype.$http = $http

// 自定义表单
import FormMaking from 'form-making'
import 'form-making/dist/FormMaking.css'
Vue.use(FormMaking)

// 去除警告
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
