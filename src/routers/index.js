import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Cadastro from '../views/karine/Cadastro.vue'
import Numeros from '../views/karine/Numeros.vue'
import Concluido from '../views/karine/Concluido.vue'
import RifaAdminLogin from '../views/karine/admin/Login.vue'
import RifaAdmin from '../views/karine/admin/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/rifa-karine',
    name: 'Numeros',
    component: Numeros,
  },
  {
    path: '/rifa-karine/cadastro',
    name: 'RifaCadastro',
    component: Cadastro,
  },
  {
    path: '/rifa-karine/concluido',
    name: 'RifaConcluido',
    component: Concluido,
  },
  {
    path: '/rifa-karine/admin/login',
    name: 'RifaAdminLogin',
    component: RifaAdminLogin,
  },
  {
    path: '/rifa-karine/admin/',
    name: 'RifaAdminLiberar',
    component: RifaAdmin,
    props: { filter: true },
  },
  {
    path: '/rifa-karine/admin/todos',
    name: 'RifaAdminTodos',
    component: RifaAdmin,
    props: { filter: false },
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
// router.beforeEach(isLogged)

export default router
