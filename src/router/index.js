import Vue from 'vue'
import Router from 'vue-router'

import AppLayout from '../components/layout/AppLayout'
import FormsLayout from '../components/layout/FormsLayout'
import About from '../components/pages/About'
import Forms from '../components/pages/Forms'
import Publications from '../components/pages/Publications'
import Home from '../components/pages/Home'
import SystematicReviewProtocol from '../components/pages/SystematicReviewProtocol'
import SystematicMapProtocol from '../components/pages/SystematicMapProtocol'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: AppLayout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/about',
          name: 'about',
          component: About
        },
        {
          path: '/publications',
          name: 'publications',
          component: Publications
        },
        {
          path: '/forms',
          component: FormsLayout,
          children: [
            {
              path: '',
              name: 'forms',
              component: Forms
            },
            {
              path: 'systematic-review-protocol',
              name: 'systematicReviewProtocol',
              component: SystematicReviewProtocol
            },
            {
              path: 'systematic-map-protocol',
              name: 'systematicMapProtocol',
              component: SystematicMapProtocol
            }
          ]
        }
      ]
    }
  ]
})
