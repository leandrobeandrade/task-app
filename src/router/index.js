import Vue from 'vue'
import Router from 'vue-router'
import Base from '@/components/Base'
import Element from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)
Vue.use(Element)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Base',
      component: Base
    }
  ]
})
