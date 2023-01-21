import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Cadastro from '../views/karine/Cadastro.vue'
import Numeros from '../views/karine/Numeros.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/rifa-karine/cadastro',
    name: 'RifaCadastro',
    component: Cadastro,
  },
  {
    path: '/rifa-karine',
    name: 'Numeros',
    component: Numeros,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
// router.beforeEach(isLogged)

export default router
