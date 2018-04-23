import Vue from 'vue'
import Router from 'vue-router'
import Test1 from '@/components/Test1'
import Test2 from '@/components/Test2'
import Test3 from '@/components/Test3'
import Test4 from '@/components/Test4'
import Test5 from '@/components/Test5'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test5',
      component: Test5
    },
    {
      path: '/test4',
      name: 'Test4',
      component: Test4
    },
    {
      path: '/test3',
      name: 'Test3',
      component: Test3
    },
    {
      path: '/test2',
      name: 'Test2',
      component: Test2
    },
    {
      path: '/test1',
      name: 'Test1',
      component: Test1
    }
  ]
})
