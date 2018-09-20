import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import firebase from 'firebase'

import TestComponent from '@/components/TestComponent'
import Child1 from '@/components/child/Child1'
import Child2 from '@/components/child/Child2'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
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

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  console.log('requiresAuth', requiresAuth, 'currentUser', currentUser)
  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('helloworld')
  else next()
})

export default router
