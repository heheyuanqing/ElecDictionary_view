import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header.vue'
import SignUsr from '@/components/sign-usr.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'header',
      component: Header
    },
    {
      path:'/usr/sign',
      name:'sign',
      component:SignUsr
    }
  ]
})
