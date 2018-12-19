// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSweetalert2 from 'vue-sweetalert2'
import * as VueGoogleMaps from 'vue2-google-maps'
import {setCookie, getCookie, delCookie} from './services/cookie'
Vue.prototype.$cookieStore = {
  setCookie,
  getCookie,
  delCookie
}
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCwuSJPS2gpD884NeTg_PH6-Oj3wI7Zaas',
    libraries: 'places' // necessary for places input
  }
})
Vue.use(BootstrapVue)
Vue.use(VueSweetalert2)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
