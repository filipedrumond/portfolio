import { createRouter, createWebHistory } from 'vue-router'
import isLogged from '../helpers/sessionHandlers/isLogged'

import HelloWorld from '../views/HelloWorld.vue'

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
// router.beforeEach(isLogged)

export default router
