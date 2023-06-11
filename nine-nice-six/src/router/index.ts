import { vue } from '@vitejs/plugin-vue';
import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '@/views/home/AppHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: AppHome,
      meta: {home: true}
    },
    {
      path:'/channel',
      name: 'channel',
      component:()=>import('@/views/channel/AppChannel.vue'),
      meta: {more: true}
  },
  {
      path:'/discover',
      name: 'discover',
      component:()=>import('@/views/discover/AppDiscover.vue')
  },
  {
      path:'/pc',
      name: 'pc',
      component:()=>import('@/views/pc/AppPc.vue')
  },
  {
      path:'/tst',
      name: 'tst',
      component:()=>import('@/views/tst/AppTst.vue'),
      meta: {tst: true},

  },
  {
  path:'/tsearch',
  name: 'tseach',
  component:()=>import('@/views/tst/components/tstSearch.vue'),
  meta: {search: true}
  },
  {
    path:'/searchlist',
    name: 'searchlist',
    component:()=>import('@/views/tst/searchlist/SearchList.vue'),
    
    },
  {
    path:'/tstOne',
    name: 'tstOne',
    component:()=>import('@/views/tst/components/tstOne.vue'),

},
  ]
})

export default router
