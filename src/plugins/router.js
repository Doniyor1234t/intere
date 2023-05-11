import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {path: '/intere', name :'home', component: () => import('../views/Home.vue')},
  {path: '/about', name :'about', component: () => import('../views/About.vue')},
  {path: '/experience', name :'experience', component: () => import('../views/Experience.vue')},
  {path: '/intere/calculator', name :'calculator', component: () => import('../views/Calculator.vue')},
  {path: '/intere/form', name :'form', component: () => import('../views/FormContact.vue')},
]

const router = createRouter({
  routes, 
  history: createWebHistory(),
})
export default router

