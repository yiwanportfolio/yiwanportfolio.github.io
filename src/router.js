import Vue from 'vue'
import Router from 'vue-router'
import PcWrapper from '@/views/pc/index.vue'
import Main from '@/views/pc/main/index.vue'
import Home from '@/views/pc/main/Home.vue'
import Illustrations from '@/views/pc/main/Illustrations.vue'
import Photography from '@/views/pc/main/Photography.vue'
import Resume from '@/views/pc/main/Resume.vue'
import Product from '@/views/pc/product/index.vue'
import TriPal from '@/views/pc/product/TriPal.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'pcwraper',
      component: PcWrapper,
      children: [{
        path: '/',
        name: 'main',
        component: Main,
        children: [{
          path: '/',
          name: 'home',
          component: Home
        }, {
          path: 'illustrations',
          name: 'illustrations',
          component: Illustrations
        }, {
          path: 'photography',
          name: 'photography',
          component: Photography
        }, {
          path: 'resume',
          name: 'resume',
          component: Resume
        }]
      }, {
        path: 'product',
        name: 'product',
        component: Product,
        children: [{
          path: 'tripal',
          name: 'tripal',
          component: TriPal
        }]
      }]
    }
  ]
})
