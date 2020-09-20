import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store/store.js'
import Accouting from 'accounting-js'
import App from './App.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

Vue.filter('currency', function (val) {
  return Accouting.formatMoney(val)
})

// Vue.component('global-component', function (resolve, reject) {
//   setTimeout(function () {
//     resolve({
//       template: '<div> A global component </div>'
//     })
//   }, 2000)
// })

// Vue.component('global-component', () => import('./components/Menu.vue'))

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
