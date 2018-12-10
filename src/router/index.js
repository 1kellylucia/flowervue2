import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Flowers from '@/components/Flowers'
import AddFlowers from '@/components/AddFlowers'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import Edit from '@/components/Edit'
import Map from '@/components/map'
import Login from '@/components/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/flowers',
      name: 'Flowers',
      component: Flowers
    },
    {
      path: '/addflowers',
      name: 'AddFlowers',
      component: AddFlowers
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
      props: true
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
