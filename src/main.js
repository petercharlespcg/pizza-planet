import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Delivery from './components/Delivery.vue'
import History from './components/History.vue'
import OrderingGuide from './components/OrderingGuide.vue'
import Admin from './components/Admin.vue'
import App from './App.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'homeLink', component: Home },
  { path: '/menu', name: 'menuLink', component: Menu },
  { path: '/admin', name: 'adminLink', component: Admin, beforeEnter: (to, from, next) => {
    alert('This area is for authorized users only, please login to continue');
    next();
  }},
  { path: '/about', name: 'aboutLink', component: About, children: [
    { path: '/contact', name: 'contactLink', component: Contact },    // /contact www.pizzaplanet.com.contact  // contact www.pizzaplanet.com/about/contact
    { path: '/history', name: 'historyLink', component: History },
    { path: '/delivery', name: 'deliveryLink', component: Delivery },
    { path: '/ordering-guide', name: 'orderingGuideLink', component: OrderingGuide },
  ]},
  { path: '*', redirect: '/'},
]

const router = new VueRouter({
  routes,
  mode: 'history',
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
