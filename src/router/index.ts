import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

// import the pages
const HomePage = () => import('../views/HomePage/HomePage.vue');  // main page
const CEPage = () => import('../views/CEPage/CEPage.vue');  // cloud education page
const CoursesPage = () => import('../views/CoursesPage/CoursesPage.vue');  // the courses list
const videoPage = () => import('../views/VideoPage/VideoPage.vue');  // the page to watch video
const Test = () => import('../views/Test.vue');  // test page

// import some components to make up the page
const StaticImg = () => import('../components/StaticImg/StaticImg.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: HomePage,
  },
  {
    path: '/cePage',
    name: 'cePage',
    component: CEPage,
  },
  {
    path: '/coursesPage',
    name: 'coursesPage',
    component: CoursesPage,
  },
  {
    path: '/videoPage',
    name: 'videoPage',
    component: videoPage,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
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

  {
    path: './staticImg',
    name: 'staticImg',
    component: StaticImg,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
