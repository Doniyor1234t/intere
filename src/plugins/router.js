import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {path: '/', name :'home', component: () => import('../views/Home.vue')},
  {path: '/about', name :'about', component: () => import('../views/About.vue')},
  {path: '/experience', name :'experience', component: () => import('../views/Experience.vue')}
]

const router = createRouter({
  routes, 
  history: createWebHistory(),
})
export default router

