import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/views/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/search'
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
    // },
    // {
    //   path: '/import',
    //   name: 'Import',
    //   component: Import
    // },
    // {
    //   path: '/mark',
    //   name: 'Mark',
    //   component: Mark
    // }
  ]
})
