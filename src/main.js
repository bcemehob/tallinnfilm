import Vue from 'vue'
import App from './App.vue'
import router from './Router'
import store from './store/store.index'
import VueYoutube from 'vue-youtube'

Vue.config.productionTip = false

Vue.use(VueYoutube)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
