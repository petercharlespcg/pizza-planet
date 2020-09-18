import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import App from './App.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    // return { x: 0, y: 200 }
    // return { selector: '/* .btn */h1'}
    // if (savedPosition) {
    //   return savedPosition
    // } else {
    //   return { x: 0, y: 0 }
    // }
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

// router.beforeEach((to, from, next) => {
//   // alert('navigation triggered')
//   // next(false)
//   // console.log(to)
//   // if (to.path === "/menu") {
//   //   next();
//   // } else {
//   //   next(false);
//   // }
// })
// router.afterEach((to, from) => {
//   alert('after each')
// })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
