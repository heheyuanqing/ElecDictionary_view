import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header.vue'
import SignInUsr from '@/components/usr-sign/sign-in.vue'
import SignUpUsr from '@/components/usr-sign/sign-up-usr.vue'
import Search from '@/components/index/search.vue'
import UsrHome from '@/components/usr-info/usr-home.vue'
import SelWords from '@/components/usr-info/usr-words.vue'
import UsrInfo from '@/components/usr-info/usr-info.vue'
import Manager from '@/components/manager.vue'
import TestPage from '@/components/stu/test-page.vue'
import StuPage from '@/components/stu/stu-page.vue'
import usrTestPage from '@/components/test/page.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'search',
      component: Search
    },
    {
      path: '/usr/login',
      name: 'sign-in',
      component: SignInUsr
    },
    {
      path: '/usr/logup',
      name: 'sign-up',
      component: SignUpUsr
    },
    {
      path: '/usr',
      name: 'usr-home',
      component: UsrHome
    },
    {
      path: '/sel-words',
      name: 'sel-words',
      component: SelWords
    },
    {
      path: '/usr/info',
      name: 'usr-info',
      component: UsrInfo
    },
    {
      path: '/manager',
      name: 'manager',
      component: Manager
    },
    {
      path: '/test-page',
      name: 'test-page',
      component: TestPage,
    },
    {
      path: '/stu-page',
      name: 'stu-page',
      component: StuPage
    },
    {
      path:'/usr-test',
      name:'usr-test',
      component:usrTestPage
    }
  ]
})
