import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import DateView from '../views/DateView.vue'
import AddressView from '../views/AddressView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: AboutView
  },
  {
    path: '/date',
    name: 'date',
    component: DateView
  },
  {
    path: '/address',
    name: 'address',
    component: AddressView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
