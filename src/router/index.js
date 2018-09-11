import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestComponent from '@/components/TestComponent'
import Child1 from '@/components/child/Child1'
import Child2 from '@/components/child/Child2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'TestComponent',
      component: TestComponent,
      children: [
        { path: 'child1', name: 'Child1', component: Child1 },
        { path: 'child2', name: 'Child2', component: Child2 }
      ]
    }
  ]
})
