import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/index'
import About from './pages/about'
import Users from './pages/users'
import User from './pages/user'
import Test from './pages/test'
import Page1 from './pages/page1'
import Page2 from './pages/page2'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'about',
        path: '/:lang?/about-us',
        component: About
      },
      {
        name: 'users',
        path: '/:lang?/users',
        component: Users
      },
      {
        name: 'user',
        path: '/:lang?/user/:id',
        component: User
      },
      {
        name: 'test',
        path: '/:lang?/test',
        component: Test,
        redirect: '/:lang?/test/page-1',
        children: [
          {
            name: 'page-1',
            path: '/:lang?/test/page-1',
            component: Page1
          },
          {
            name: 'page-2',
            path: '/:lang?/test/page-2',
            component: Page2
          }
        ]
      },
      {
        name: 'home',
        path: '/:lang?',
        component: Home
      }
    ]
  })
}
