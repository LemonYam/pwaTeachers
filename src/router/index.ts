import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

const HomePage = () => import('../views/HomePage/HomePage.vue');  // main page
const videoPage = () => import('../views/VideoPage/VideoPage.vue');  // the page to watch video
const Test = () => import('../views/Test.vue');  // test page

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/',
    name: 'homePage',
    component: HomePage,
  },
  {
    path: '/videoPage',
    name: 'videoPage',
    component: videoPage,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: Test,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
