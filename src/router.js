import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Illustrations from './views/Illustrations.vue'
import Photography from './views/Photography.vue'
import Resume from './views/Resume.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/illustrations',
      name: 'illustrations',
      component: Illustrations
    },
    {
      path: '/photography',
      name: 'photography',
      component: Photography
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    }
  ]
})
