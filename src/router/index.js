import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import step2 from '@/components/step2'
import step3 from '@/components/step3'
import HeaderNav from '@/components/HeaderNav'
import step1 from '@/components/step1'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HeaderNav,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/step2',
        name: 'step2',
        component: step2
      },
      {
        path: '/step1',
        name: 'step1',
        component: step1
      },
      {
        path: '/step3',
        name: 'step3',
        component: step3
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
