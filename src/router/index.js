import Vue from 'vue'
import Router from 'vue-router'

import AppLayout from '../components/layout/AppLayout'
import EditorsAndJournalsLayout from '../components/layout/EditorsAndJournalsLayout'
import FormsLayout from '../components/layout/FormsLayout'

import About from '../components/pages/About'
import ContactUs from '../components/pages/ContactUs'
import EditorsAndJournals from '../components/pages/EditorsAndJournals'
import ExamplesOfUse from '../components/pages/ExamplesOfUse'
import Forms from '../components/pages/Forms'
import Home from '../components/pages/Home'
import JournalsWhy from '../components/pages/JournalsWhy'
import Publications from '../components/pages/Publications'
import SaveResources from '../components/pages/SaveResources'
import SystematicReviewProtocol from '../components/pages/SystematicReviewProtocol'
import SystematicMapProtocol from '../components/pages/SystematicMapProtocol'
import UpdatesAndExtensions from '../components/pages/UpdatesAndExtensions'
import UsefulLinks from '../components/pages/UsefulLinks'

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
          path: '/editors-and-journals',
          component: EditorsAndJournalsLayout,
          children: [
            {
              path: '',
              name: 'editorsAndJournals',
              component: EditorsAndJournals
            },
            {
              path: 'why-journals',
              name: 'whyJournals',
              component: JournalsWhy
            },
            {
              path: 'save-resources',
              name: 'saveResources',
              component: SaveResources
            }
          ]
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
        },
        {
          path: '/useful-links',
          name: 'usefulLinks',
          component: UsefulLinks
        },
        {
          path: '/updates-extensions',
          name: 'updatesAndExtensions',
          component: UpdatesAndExtensions
        },
        {
          path: '/examples-of-use',
          name: 'examplesOfUse',
          component: ExamplesOfUse
        },
        {
          path: '/contact-us',
          name: 'contactUs',
          component: ContactUs
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
