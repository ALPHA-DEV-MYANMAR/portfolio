import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from "@/views/About";
import Skill from "@/views/Skill";
import Services from "@/views/Services";
import Projects from "@/views/Projects";
import Memo from "@/views/Memo";
import Blog from "@/views/Blog";
import Content from "@/views/Content";
import template from "@/views/template";
import register from "@/views/Register";
import login from "@/views/Login";
import account from "@/views/Account";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
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
    path: '/skill',
    name: 'skill',
    component: Skill
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/memo',
    name: 'memo',
    component: Memo
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/content',
    name: 'content',
    component: Content
  },
  {
    path: '/template',
    name: 'template',
    component: template
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    beforeEnter: (to, from ,next) => {
      if(localStorage.getItem("token") ) {
        next();
      }
      else next('/login');
    },
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/account',
    name: 'account',
    component: account,
    beforeEnter: (to, from ,next) => {
      if(localStorage.getItem("token") ) {
        next();
      }
      else next('/login');
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  scrollBehavior: (to, from, savedPosition) => {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
