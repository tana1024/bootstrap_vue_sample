import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue' // added
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'


Vue.use(Router)

import 'bootstrap/dist/css/bootstrap.css' // added
import 'bootstrap-vue/dist/bootstrap-vue.css' // added
import '@/assets/css/simple-sidebar.css'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
