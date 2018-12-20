/* eslint-disable */
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
import Logout from '@/components/Logout'
import {setCookie,getCookie,delCookie} from '../services/cookie'
/* eslint-disable */
Vue.use(Router)
const router = new Router({
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
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    }
  ]
});
router.beforeEach((to, from, next) => {
  const nextRoute = ['home' ,'map','addflowers'];
  let isLogin = false
  if(getCookie('username')&&getCookie('password')){
    isLogin = true;
    console.log('isLogin:'+isLogin);
  }
  //nextRoute.indexOf(to.path.split('/')[1]) >= 0表示导航栏能够获取到数据，表示进入到了该页面中
  if (nextRoute.indexOf(to.path.split('/')[1]) >= 0) {
    //检测是不是未登录状态，如果登录了就不做处理（页面跳转到上面数组的哪就是哪），未登录就去登录页
    if (!isLogin) {
      next({
        path: '/login'
      })
     		alert('please login first:)')
      location.reload();
    }
  }
  if (to.path.split('/')[to.path.split('/').length-1] === 'login') {
    if (isLogin) {
    	alert('you have been login')
      router.push({path:'/home'})
      location.reload();
    }
  }
  next();
});
export default router;
