import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tab, Tabs ,Toast,TreeSelect } from 'vant';
Vue.use(Tab).use(Tabs).use(Toast).use(TreeSelect )
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
