import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header.vue'
import SignInUsr from '@/components/sign-in.vue'
import SignUpUsr from '@/components/sign-up-usr.vue'
import Search from '@/components/search.vue'
import UsrHome from '@/components/usr-home.vue'
import SelWords from '@/components/usr-words.vue'
import card from '@/components/usr-info.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'search',
      component: Search
    },
    {
      path:'/usr/login',
      name:'sign-in',
      component:SignInUsr
    },
    {
      path:'/usr/logup',
      name:'sign-up',
      component:SignUpUsr
    },
    {
      path:'/usr',
      name:'usr-home',
      component:UsrHome
    },
    {
      path:'/sel-words',
      name:'sel-words',
      component:SelWords
    },
    {
      path:'/test',
      name:'test',
      component:card
    }
  ]
})
