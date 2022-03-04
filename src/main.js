import Vue from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import '@/assets/scss/index.scss';

import 'fullpage.js/vendors/scrolloverflow';
import VueFullpage from 'vue-fullpage.js'
import animated from 'animate.css' 

import DefaultLayout from './layout/DefaultLayout'
import DashboardLayout from './layout/DashboardLayout'

// if(process.env.NODE_ENV == 'production' && process.env.VUE_APP_GITURL !== window.location.href){
  //   location.href = process.env.VUE_APP_GITURL
  // }
  
  

  Vue.use(BootstrapVue)
  Vue.use(IconsPlugin)
  Vue.use(Antd)
  Vue.use(VueFullpage)
  Vue.use(animated)
  Vue.config.productionTip = false


Vue.component('layout-default', DefaultLayout)
Vue.component('layout-dashboard', DashboardLayout)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
