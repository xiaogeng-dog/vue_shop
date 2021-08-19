import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import TreeTable from 'vue-table-with-tree-grid'
import 'element-ui/lib/theme-chalk/index.css'
//导入全局样式表
import './assets/css/global.css'
// 导入字体图标
import './assets/fonts/iconfont.css'

//导入富文本编辑器和对应的样式文件
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.config.productionTip = false

Vue.component('tree-table', TreeTable)

Vue.use(VueQuillEditor)

Vue.use(ElementUI)

// 制作时间过滤器
Vue.filter('dateFormat', originVal => {
  const dateTime = new Date(originVal)
  const year = dateTime.getFullYear()
  const month = (dateTime.getMonth() + 1 + '').padStart(2, '0')
  const day = (dateTime.getDate() + '').padStart(2, '0')
  const hour = (dateTime.getHours() + '').padStart(2, '0')
  const minute = (dateTime.getMinutes() + '').padStart(2, '0')
  const seconds = (dateTime.getSeconds() + '').padStart(2, '0')
  return ` ${year}-${month}-${day} ${hour}:${minute}:${seconds} `
})

axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
