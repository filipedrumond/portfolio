import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Cadastro from '../views/karine/Cadastro.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/rifa-karine',
    name: 'RifaCadastro',
    component: Cadastro,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
// router.beforeEach(isLogged)

export default router
