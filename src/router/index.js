import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/search.vue'
import UsrHome from '@/components/usr-home.vue'
import SelWords from '@/components/usr-words.vue'
import card from '@/components/word-card.vue'
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
