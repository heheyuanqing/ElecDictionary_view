import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/search.vue'
import UsrHome from '@/components/usr-home.vue'
import Com from '@/components/word-card'
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
      path:'/usr',
      name:'usr-home',
      component:UsrHome
    },
    {
      path:'/component',
      name:'component',
      component:Com
    }
  ]
})
