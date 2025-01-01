import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VenuesView from '@/views/VenuesView.vue'
import VenueDetailsView from '@/views/VenueDetailsView.vue'
import ContactUsView from '@/views/ContactUsView.vue'
import MyAccountView from '@/views/MyAccountView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/venues',
      name: 'venues',
      component: VenuesView
    },
    {
    path: '/venues/:venue_id',
    name: 'venue-details',
    component: VenueDetailsView,
    props: true
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUsView,
      props: true
      },
      {
        path: '/my-account',
        name: 'my-account',
        component: MyAccountView,
        props: true
        }
  ]
})

export default router
