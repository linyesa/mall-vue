import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from "axios"
import VueAxios from "vue-axios"
Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.use(VueAxios,axios)
Vue.config.productionTip = false

new Vue({
  el:'#app',
  router,
  render: h => h(App),
})