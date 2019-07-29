import Vue from 'vue'
import BootstrapVue, { LayoutPlugin } from 'bootstrap-vue' // added
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Portal from '@/components/Portal'


Vue.use(Router)

import 'bootstrap/dist/css/bootstrap.css' // added
import 'bootstrap-vue/dist/bootstrap-vue.css' // added

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/portal',
      name: 'Portal',
      component: Portal
    }
  ]
})
